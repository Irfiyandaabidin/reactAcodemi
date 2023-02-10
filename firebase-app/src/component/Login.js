import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const onSubmit = (values) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(login(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/user-not-found") alert("Email belum terdaftar!");
        if (errorCode === "auth/wrong-password") alert("Password salah!");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => {
          return (
            <Form autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field id="email" className="input" name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field id="password" className="input" name="password" type="password" placeholder="Password"></Field>
                  <ErrorMessage name="password">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
                </div>
              </div>
              <button type="submit" className="btn btn-add" disabled={!props.isValid || props.isSubmitting}>
                {props.isSubmitting ? "Please Wait" : "Login"}
              </button>
              <span className="text-sm">
                Belum punya akun? <Link to={"/register"}>Register</Link>
              </span>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
