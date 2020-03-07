import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useModalContext } from "../../../contexts/ModalContext";
import FormInput from "../../utils/FormInput";
import Modal from "../../utils/Modal";
import FormTextArea from "../../utils/FormTextArea";
import { saveProjectFirestore } from "../../../config/firebase";

interface Props {}

const ProjectModal: React.FC<Props> = () => {
  const { setShowProjectModal } = useModalContext();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Campo Obrigatório"),
    description: Yup.string().required("Campo obrigatório")
  });

  const saveProject = async (values: any, { setSubmitting }: any) => {
    setSubmitting(true);
    try {
      await saveProjectFirestore({
        ...values,
        stagesIds: [],
        date: new Date()
      });
      setShowProjectModal(false);
    } catch (error) {
      setSubmitting(false);
      toast(error.message, { type: "error" });
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={saveProject}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, errors, touched }) => (
        <Form>
          <Modal
            title="Add New Project"
            onClose={() => setShowProjectModal(false)}
            disabled={isSubmitting || !isValid}
          >
            <FormInput
              fieldName="title"
              placeholder="Title"
              type="title"
              icon="fas fa-project-diagram"
              error={!!(errors.title && touched.title)}
            />
            <FormTextArea
              fieldName="description"
              placeholder="Description"
              error={!!(errors.description && touched.description)}
            />
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectModal;
