import React, { useEffect } from "react";
import { useForm } from "./useForm";

function Register2() {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });

  useEffect(() => {
    console.log(`Running effect: Email value - ${values.email}`);

    // cleanup function -
    // called when 1) component is unmounted, 2) and before running the effect next time to clean up after prev effect
    return () => {
      console.log(`Cleaning up effect: Email value - ${values.email}`);
    };
  }, [values.email, values.password]); // performs shallow comparison of provided values, only invokes hook when email or password is changed
  // }, [values]); // this will invoke hook whenever any of the properties in values object change
  // }, []); // only invokes the hook on first render

  return (
    <div className="Register">
      <h4>Registration Form</h4>
      <p style={{ color: "gray" }}>Using a custom hook to handle form inputs</p>
      <p>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </p>
      <p>
        Email:{" "}
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </p>
      <p>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </p>
    </div>
  );
}

export default Register2;
