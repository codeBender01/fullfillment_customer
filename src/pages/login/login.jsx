import React from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

import "./login.scss";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Hokmany!";
  } else if (values.password.length <= 3) {
    console.log("heytherebitches");
    errors.password = "Dogry Parol giriziň!";
  }

  if (!values.email) {
    errors.email = "Hokmany!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dogry e-poçta giriziň!";
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="logo">Logo</div>
      <div className="form">
        <div onClick={() => navigate(-1)} className="go-back">
          <MdArrowBackIosNew />
          Yzyna
        </div>

        <div className="inputs">
          <div className="text">
            <div>Hasaba girmek</div>
            <p>
              Eger eýýäm agza bolsaňyz, e-poçta salgyňyz we parolyňyz bilen
              girip bilersiňiz.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className={
                  formik.touched.email && formik.errors.email ? "error" : null
                }
              >
                Email adres
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email
                    ? "error-input"
                    : null
                }
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error error-message">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="password"
                className={
                  formik.touched.email && formik.errors.email ? "error" : null
                }
              >
                Parol
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.touched.password && formik.errors.password
                    ? "error-input"
                    : null
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error error-message">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="check">
              <input type="checkbox" id="login" />
              <label htmlFor="login">Meni ýatda sakla</label>
            </div>

            <button type="submit">Registrasiýa et</button>
          </form>

          <div className="sign-up-link">
            Hasabyňyz ýokmy?
            <NavLink to="/signup">Şu ýere ýazylyň</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
