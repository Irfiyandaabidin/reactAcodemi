import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

const FormRegister = () => {
  const initialValues = {
    name: "",
    // email: "",
    // motivation: "",
    // nomorHp: [""],
    // gender: "",
    kelas: "",
    language: [],
  };

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.setSubmitting(false);
    }, 2000);
    console.log(values);
  };

  const validationSchema = yup.object({
    // trim(mencegah spasi di awal dan di akhir)
    name: yup.string().required("Nama harus diisi").min(4),
    // email: yup.string().required("Email harus diisi").trim().email(),
    // motivation: yup.string().required("Motivasi harus diisi").trim(),
    // gender: yup.string().required("Gender harus dipilih"),
    kelas: yup.string().required("Kelas harus dipilih"),
    language: yup.array().min(1).max(2),
  });

  const formik = useFormik({
    initialValues,

    //  validasi tanpa yup
    // validate: (values) => {
    //   let error = {};
    //   if (!values.name) {
    //     error.name = "Required";
    //   } else if (values.name.length < 8) {
    //     error.name = "Name must be longer than 8 characters";
    //   }

    //   if (!values.motivation) {
    //     error.motivation = "Required";
    //   }

    //   return error;
    // },
  });

  return (
    <div className="container-form">
      <h2>Pendaftaran Pelatihan</h2>
      <Formik
        // Buat prop
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          console.log(props.isSubmitting);
          return (
            <Form autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <Field
                  // samakan name nya
                  type="text"
                  className="input"
                  name="name"
                  id="name"
                  placeholder="Nama"
                />
                <ErrorMessage name="name">
                  {(error) => {
                    // error pada span di ambil dari yup di atas
                    return <span className="input-error">{error}</span>;
                  }}
                </ErrorMessage>
              </div>

              {/* <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              // samakan name nya
              type="email"
              className="input"
              name="email"
              id="email"
              placeholder="Email"
            />
            <ErrorMessage name="email">
              {(error) => {
                // error pada span di ambil dari yup di atas
                return <span className="input-error">{error}</span>;
              }}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="noHp">No Hp</label>
            <FieldArray name="nomorHp">
              {(props) => {
                const { form, push, remove } = props;
                const { values } = form;
                const { nomorHp } = values;

                return nomorHp.map((field, i) => (
                  <div key={i}>
                    <Field className="input" name={`nomorHp[${i}]`} />
                    <button type="button" style={{ padding: "0.3rem" }} onClick={() => push("")}>
                      +
                    </button>
                    {i > 0 && (
                      <button type="button" style={{ padding: "0.3rem" }} onClick={() => remove("")}>
                        -
                      </button>
                    )}
                  </div>
                ));
              }}
            </FieldArray>
          </div>

          <div className="form-group">
            <label htmlFor="motivasi">Motivasi</label>
            <Field
              as="textarea"
              // samakan name nya
              className="input"
              name="motivation"
              id="motivasi"
              cols="30"
              rows="10"
              placeholder="Motivasi"
            />
            <ErrorMessage name="motivation">
              {(error) => {
                // error pada span di ambil dari yup di atas
                return <span className="input-error">{error}</span>;
              }}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="gender">gender</label>
            <Field
              as="select"
              // samakan name nya
              className="input"
              name="gender"
              id="gender"
              cols="30"
              rows="10"
              placeholder="gender"
            >
              <option value="">--- Pilih Gender ---</option>
              <option value="Laki-Laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </Field>
            <ErrorMessage name="gender">
              {(error) => {
                // error pada span di ambil dari yup di atas
                return <span className="input-error">{error}</span>;
              }}
            </ErrorMessage>
          </div> */}

              <div className="form-group">
                <label htmlFor="kelas">Pilih Kelas :</label>
                <label>
                  <Field
                    type="radio"
                    // samakan name nya
                    className="input"
                    name="kelas"
                    id="kelas"
                    value="React JS"
                  />
                  React JS
                </label>
                <label>
                  <Field
                    type="radio"
                    // samakan name nya
                    className="input"
                    name="kelas"
                    id="kelas"
                    value="React Native"
                  />
                  React Native
                </label>
                <ErrorMessage name="kelas">
                  {(error) => {
                    // error pada span di ambil dari yup di atas
                    return <span className="input-error">{error}</span>;
                  }}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="language">Bahasa yang dikuasai :</label>
                <label>
                  <Field
                    type="checkbox"
                    // samakan name nya
                    className="input"
                    name="language"
                    id="language"
                    value="PHP"
                  />
                  PHP
                </label>
                <label>
                  <Field
                    type="checkbox"
                    // samakan name nya
                    className="input"
                    name="language"
                    id="language"
                    value="Python"
                  />
                  Python
                </label>
                <label>
                  <Field
                    type="checkbox"
                    // samakan name nya
                    className="input"
                    name="language"
                    id="language"
                    value="Java Script"
                  />
                  Java Script
                </label>
                <ErrorMessage name="language">
                  {(error) => {
                    // error pada span di ambil dari yup di atas
                    return <span className="input-error">{error}</span>;
                  }}
                </ErrorMessage>
              </div>

              <button type="submit" className="btn" disabled={props.isSubmitting || !props.isValid}>
                {props.isSubmitting ? "Please Wait" : "Daftar"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormRegister;
