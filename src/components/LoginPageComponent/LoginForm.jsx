import React from "react";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="login">
      <h1 className="text-center">may have you a good hello again, artist!</h1>
      <form className="needs-validation" onSubmit={submitHandler}>
        <div className="form-group was-validated">
          <input
            className="form-control"
            type="email"
            name="email"
            required
            placeholder="Username"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>

        <div className="form-group was-validated">
          <input
            className="form-control"
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            } //take password from input and set to details
            value={details.password} //set the value of the password input to the actually input of the use
          ></input>
        </div>

        {error != "" ? (
          <div className="error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-exclamation-octagon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            {error}
          </div>
        ) : (
          ""
        )}

        <input
          className="btn btn-success w-100"
          type="submit"
          value="SIGN IN"
        ></input>
      </form>
    </div>
  );
};

export default LoginForm;
