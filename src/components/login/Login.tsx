import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { auth, getUserData, continueWithGoogle } from "../../config/firebase";
import { useUserContext } from "../../contexts/UserContext";
import FormInput from "../utils/FormInput";

interface Props {}

const Login: React.FC<Props> = () => {
  const { setCurrentUser } = useUserContext();

  const validationSchema = Yup.object().shape({
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
      const { user: firebaseUser } = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      if (firebaseUser) {
        const userData = await getUserData(firebaseUser);
        setCurrentUser(userData);
      }
    } catch (error) {
      setSubmitting(false);
      toast(error.message, { type: "error" });
      console.error(error);
    }
  };

  const handleContinueWithGoogle = async () => {
    try {
      const currentUser = await continueWithGoogle();
      setCurrentUser(currentUser);
    } catch (error) {
      toast(error.message, { type: "error" });
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="form-container card">
        <h1 className="title">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, errors, touched }) => (
            <Form>
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
        <button
          type="button"
          className="button is-fullwidth is-normal"
          onClick={handleContinueWithGoogle}
        >
          Continue With Google
        </button>
        <div className="center">
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
