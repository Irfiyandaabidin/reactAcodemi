import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";
import { useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const initialValues = {
    nama: location.state.nama,
    email: location.state.email,
    telp: location.state.telp,
    alamat: location.state.alamat,
    jurusan: location.state.jurusan,
  };

  const validationSchema = yup.object({
    nama: yup.string().required(),
    email: yup.string().required().email(),
    telp: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Nomor telp tidak valid"),
    alamat: yup.string().required(),
    jurusan: yup.string().required(),
  });

  const onSubmit = async (values, props) => {
    await updateDoc(doc(db, "mahasiswa", location.state.id), {
      nama: values.nama,
      email: values.email,
      telp: values.telp,
      alamat: values.alamat,
      jurusan: values.jurusan,
    });
    navigate("/");
    props.setSubmitting(false);
  };

  return (
    <>
      <h1>Update Student</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(props) => {
          return (
            <Form autoComplete="off">
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <Field id="nama" className="input" name="nama" type="text" placeholder="Nama" />
                <ErrorMessage name="nama">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field id="email" className="input" name="email" type="text" placeholder="Email" />
                  <ErrorMessage name="email">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="telp">No Hp</label>
                  <Field id="telp" className="input" name="telp" type="text" placeholder="No Hp" />
                  <ErrorMessage name="telp">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="alamat">Alamat</label>
                <Field as="textarea" id="alamat" className="input" name="alamat" type="text" placeholder="Alamat" />
                <ErrorMessage name="alamat">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Jurusan</label>
                <Field as="select" className="input" name="jurusan">
                  <option>--Pilih Jurusan--</option>
                  <option>Informatika</option>
                  <option>Kimia</option>
                  <option>Industri</option>
                  <option>Psikologi</option>
                </Field>
                <ErrorMessage name="jurusan">{(err) => <span className="error-message">{err}</span>}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Foto</label>
                <Field type="file" className="input" name="photo" />
              </div>
              <button type="submit" disabled={!props.isValid || props.isSubmitting} className="btn btn-add-form">
                Tambahkan
              </button>
              <Link to={"/"} className="btn btn-back-form">
                Kembali
              </Link>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default UpdateStudent;
