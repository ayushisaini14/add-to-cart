import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      <input onChange={handleChange} className="form-input" {...props} />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
