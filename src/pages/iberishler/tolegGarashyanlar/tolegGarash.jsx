import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";
import FullScreenDialog from "../../../components/Modal/Modal";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { BiDollar } from "react-icons/bi";
import "./alyjy-maglumat.scss";
import EndButtons from "../../../components/EndButtons/EndButtons";

const selectBtns = [
  {
    id: 1,
    text: "Çap et",

    items: [
      {
        id: 1,
        label: "option 1",
      },
      {
        id: 2,
        label: "option 2",
      },
      {
        id: 3,
        label: "option 3",
      },
    ],
  },

  {
    id: 2,
    text: "Bellemek",
    items: [
      {
        id: 1,
        label: "option 1",
      },
      {
        id: 2,
        label: "option 2",
      },
      {
        id: 3,
        label: "option 3",
      },
    ],
  },

  {
    id: 3,
    text: "Täze tertip",
  },

  {
    id: 4,
    text: "Köpçülikleýin täzelenme",

    items: [
      {
        id: 1,
        label: "option 1",
      },
      {
        id: 2,
        label: "option 2",
      },
      {
        id: 3,
        label: "option 3",
      },
    ],
  },
  {
    id: 5,
    text: "Beýleki açarlar",

    items: [
      {
        id: 1,
        label: "option 1",
      },
      {
        id: 2,
        label: "option 2",
      },
      {
        id: 3,
        label: "option 3",
      },
    ],
  },
  {
    id: 6,
    text: "Tölegine garaşýanlar",
    modal: true,
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Dükan",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Bellenen adam",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Bellik",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Bölüniş ýagdaýy",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 5,
    text: "Sargyt senesi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 6,
    text: "Beýleki",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 7,
    text: "Saklanan süzgüçler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

const priceInputTitles = [
  {
    id: 1,
    text: "Eltip bermek",
  },
  {
    id: 2,
    text: "Salgyt tölegi",
  },
  {
    id: 3,
    text: "Jemi tölegi",
  },
];

class TolegGarash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      textAreaValue: "",
      value: dayjs("2014-08-18T21:11:54"),
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleTimeChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChange(event) {
    this.setState({
      textAreaValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="iber-sonky nested-page">
        <h1>Toparlar</h1>
        <div className="select-btns">
          {selectBtns.map((btn) => {
            return (
              <Select
                btn={btn}
                key={btn.id + btn.text}
                onClick={btn.modal ? this.handleClickOpen : null}
              />
            );
          })}
        </div>
        <div className="line"></div>
        <div className="filters">
          <div className="title">Filtr:</div>
          {filterBtns.map((btn) => {
            return <FilterSelect btn={btn} key={btn.id + btn.text} />;
          })}
        </div>
        <div className="line"></div>
        <FullScreenDialog
          open={this.state.open}
          handleClose={this.handleClose}
          modalTitle="Tölegine garaşýanlar"
        >
          <div className="alyjy-maglumat">
            <div className="forms">
              <h6>Alyjy maglumat</h6>

              <form action="#">
                <div className="name">
                  <label htmlFor="name">Ady</label>
                  <input type="text" id="name" />
                </div>
                <div className="company">
                  <label htmlFor="company">Kärhana ady</label>
                  <input type="text" id="company" />
                </div>
                <div className="address">
                  <label htmlFor="address">Salgy</label>
                  <textarea
                    value={this.textAreaValue}
                    onChange={this.handleChange}
                    id="address"
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">Şäher</label>
                  <input type="text" id="city" />
                </div>
                <div className="phone">
                  <label htmlFor="phone">Telefon nomer</label>
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                  />
                </div>
                <div className="city">
                  <label htmlFor="mail">E-poçta</label>
                  <input type="email" id="mail" />
                </div>
              </form>
            </div>
            <div className="brief-info">
              <h6>Gysgaça sargydyň maglumaty</h6>
              <div className="info">
                <div className="dukan">
                  <div className="title">Dükan</div>
                  <div>El bilen sargytlar</div>
                </div>

                <div className="date">
                  <div className="title">Sargyt senesi</div>
                  <div className="picker">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={this.value}
                        onChange={this.handleTimeChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              bgcolor: "#ffffff",
                            }}
                            fullWidth
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="date">
                  <div className="title">Tölenen senesi</div>
                  <div className="picker">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={this.value}
                        onChange={this.handleTimeChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              bgcolor: "#ffffff",
                            }}
                            fullWidth
                          />
                        )}
                        disabledFuture
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                {priceInputTitles.map((title) => {
                  return (
                    <div className="price" key={title.id}>
                      <div className="title">{title.text}</div>
                      <div className="input">
                        <BiDollar size={20} />
                        <input type="text" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <EndButtons />
        </FullScreenDialog>
      </div>
    );
  }
}

export default TolegGarash;
