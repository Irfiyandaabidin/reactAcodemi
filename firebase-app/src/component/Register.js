import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match"),
  });

  const onSubmit = async (values) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Register berhasil");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") alert("Email sudah terdaftar!");
        console.log(errorCode);
        // ..
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(props) => {
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field id="email" className="input" name="email" placeholder="Email" type="text" />
                <ErrorMessage name="email">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field className="input" id="password" name="password" type="password" placeholder="Password"></Field>
                  <ErrorMessage name="password">{(err) => <span className="error-message"> {err}</span>}</ErrorMessage>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field className="input" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password"></Field>
                  <ErrorMessage name="confirmPassword">{(err) => <span className="error-message"> {err}</span>}</ErrorMessage>
                </div>
              </div>
              <button type="submit" className="btn btn-add" disabled={!props.isValid || props.isSubmitting}>
                {props.isSubmitting ? "Please Wait" : "Register"}
              </button>
              <span className="text-sm">
                Sudah punya akun? <Link to={"/login"}>Login</Link>
              </span>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
