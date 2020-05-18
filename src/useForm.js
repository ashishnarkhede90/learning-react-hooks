import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      if (e.target.name === "password") {
        console.log("Invoke password strength calculcator");
      }

      setValues({
        ...values, // retain other state values since useState doesn't merge state
        [e.target.name]: e.target.value
      });
    }
    //setStateValues
  ];

  /*function setStateValues(e) {
    if (e.target.name === "password") {
      console.log("Invoke password validator");
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }
  */
};
