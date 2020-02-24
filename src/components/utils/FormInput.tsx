import React from "react";
import { Field, ErrorMessage } from "formik";

interface Props {
  fieldName: string;
  placeholder: string;
  icon: string;
  type: string;
  error: boolean;
}

const FormInput: React.FC<Props> = ({
  fieldName,
  placeholder,
  type,
  icon,
  error
}) => {
  return (
    <div className="field">
      <label htmlFor={fieldName} className="label">
        {placeholder}
      </label>
      <div className="control has-icons-right">
        <Field
          id={fieldName}
          type={type}
          name={fieldName}
          className={error ? "input is-danger" : "input"}
          placeholder={placeholder}
        />
        <span className="icon is-right">
          <i className={icon}></i>
        </span>
      </div>
      <ErrorMessage name={fieldName} component="p" className="help is-danger" />
    </div>
  );
};

export default React.memo(FormInput);
