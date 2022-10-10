import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Select from "../../components/Select/Select";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";

import "./sign-up.scss";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Hokmany!";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Girizen adyňyz örän kiçi!";
  }

  if (!values.email) {
    errors.email = "Hokmany!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dogry e-poçta giriziň!";
  }

  return errors;
};

const genderSelect = {
  id: 1,
  iconColor: "#8692A6",
  items: [
    {
      id: 1,
      label: "Erkek",
    },
    {
      id: 2,
      label: "Aýal ",
    },
  ],
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const navigate = useNavigate();

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sign-up">
      <div className="logo">Logo</div>

      <div className="form">
        <div onClick={() => navigate(-1)} className="go-back">
          <MdArrowBackIosNew />
          Yzyna
        </div>
        <div className="inputs">
          <div className="text">
            <div>Registrasiýa</div>
            <p>Agza boluň we aýratyn mahabatlardan lezzet alyň.</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="spacer">
              <label htmlFor="firstName">Doly ady</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className="formik-input"
              />
              {formik.errors.fullName ? (
                <div>{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="spacer">
              <label htmlFor="email">Email Addres</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="formik-input"
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>

            <div className="sign-select">
              <label htmlFor="gender-select">Jyns</label>

              <Select
                btn={genderSelect}
                iconColor={genderSelect.iconColor}
                id="gender-select"
              />
            </div>
            <div className="sign-date">
              <label htmlFor="">Doglan gün</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleTimeChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      sx={{
                        bgcolor: "#ffffff",
                      }}
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <button type="submit" className="submit">
              Dowam et
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
