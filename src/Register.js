import React, { useState, useRef, useEffect } from "react";

function Register() {
  const [email, setEmail] = useState(""); // using aray destructuring
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="Register">
      <h4>Registration Form</h4>
      <p style={{ color: "gray" }}>
        Using separate 'useState' hook for every form property
      </p>
      <p>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </p>
      <p>
        Email:{" "}
        <input
          ref={emailRef}
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </p>
      <p>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </p>
    </div>
  );
}
export default Register;
