import { Form, Formik } from "formik";
import React from "react";
import FormInput from "../utils/FormInput";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth, saveUserData } from "../../config/firebase";
import { CurrentUser, useUserContext } from "../../contexts/UserContext";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const { setCurrentUser } = useUserContext();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo Obrigatório")
      .min(3, "O nome deve conter ao menos 5 letras")
      .max(100, "O nome deve conter no máximo 100 letras")
      .notOneOf(["admin", "administrador"], "Palavra reservada"),
    email: Yup.string()
      .required("Campo Obrigatório")
      .email("Email inválido"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(4, "A senha deve conter no mínimo 4 caracteres")
      .max(20, "A senha deve conter no máximo 20 caracteres")
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(true);
    try {
      const { user: firebaseUser } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      const user: CurrentUser = {
        id: firebaseUser!.uid,
        name: values.name,
        email: values.email,
        imageUrl: "some image"
      };
      await saveUserData(user);
      setCurrentUser(user);
    } catch (error) {
      setSubmitting(false);
      toast(error.message, { type: "error" });
      console.error(error);
    }
  };
  return (
    <div className="signup">
      <div className="form-container card">
        <h1 className="title">Sign Up</h1>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, errors, touched }) => (
            <Form>
              <FormInput
                fieldName="name"
                placeholder="Name"
                type="text"
                icon="fas fa-user"
                error={!!(errors.name && touched.name)}
              />
              <FormInput
                fieldName="email"
                placeholder="Email"
                type="email"
                icon="fas fa-envelope"
                error={!!(errors.email && touched.email)}
              />
              <FormInput
                fieldName="password"
                placeholder="Password"
                type="password"
                icon="fas fa-lock"
                error={!!(errors.password && touched.password)}
              />
              <button
                type="submit"
                className={`${
                  isSubmitting ? "is-loading" : ""
                } button is-primary is-normal is-fullwidth`}
                disabled={isSubmitting || !isValid}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className="is-divider" data-content="OR"></div>
        <div className="center">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
