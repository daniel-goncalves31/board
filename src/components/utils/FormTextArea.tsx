import React from "react";
import { Field, ErrorMessage } from "formik";

interface Props {
  fieldName: string;
  placeholder: string;
  error: boolean;
}

const FormTextArea: React.FC<Props> = ({ fieldName, placeholder, error }) => {
  return (
    <div className="field">
      <label htmlFor={fieldName} className="label">
        {placeholder}
      </label>
      <div className="control has-icons-right">
        <Field
          as="textarea"
          id={fieldName}
          name={fieldName}
          className={error ? "textarea is-danger" : "textarea"}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={fieldName} component="p" className="help is-danger" />
    </div>
  );
};

export default React.memo(FormTextArea);
