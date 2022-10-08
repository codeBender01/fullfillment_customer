import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import "./iber-garash.scss";
import { FaCog } from "react-icons/fa";
import DataTable from "../../../components/table/Table";

const columns = [
  { field: "id", headerName: "Dükan#", width: 100 },
  { field: "age", headerName: "Ýaş", width: 100 },
  { field: "date", headerName: "Sargyt senesi", width: 100 },
  { field: "sowgat", headerName: "Sowgat", width: 100 },
  { field: "sku", headerName: "SKU elementi", width: 100 },
  {
    field: "productName",
    headerName: "Harydyň ady",
    width: 100,
  },
  {
    field: "topar",
    headerName: "Topar",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },

  {
    field: "alyjy",
    headerName: "Alyjy",
    width: 100,
  },
  {
    field: "mukdary",
    headerName: "Mukdary",
    width: 100,
  },
  {
    field: "jemiSargyt",
    headerName: "Jemi sargyt",
    width: 500,
  },
];

const rows = [
  {
    id: 11111,
    age: "99 sagat",
    date: "11/11/2022",
    sowgat: null,
    sku: null,
    productName: null,
    topar: null,
    alyjy: "Ady",
    mukdary: "9999",
    jemiSargyt: "999999999$",
  },
];

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

const greenSelect = {
  id: 1,
  text: "Çap etiketkalaryny dörediň",
  iconColor: "#ffffff",
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
};

const forms = [
  {
    id: 1,
    label: "Hyzmaty",

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
    label: "Bukjasy",
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
    label: "Tassyklama",
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
    id: 4,
    label: "Ätiýaçlandyryş",
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
];

const measures = ["(uz)", "(gi)", "(beý)"];

class IberGarash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };

    this.openOnclick = this.openOnclick.bind(this);
  }
  openOnclick(e) {
    this.setState(({ isClicked }) => ({
      isClicked: !isClicked,
    }));
  }

  render() {
    return (
      <div className="nested-page iber-garash">
        <h1>Tutulanlar</h1>
        <div className="select-btns">
          <Select
            btn={greenSelect}
            iconColor={greenSelect.iconColor}
            id="green-select"
            bodyId="body-green"
          />
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
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
        <div className="divider">
          <div className="main">
            <DataTable
              onClick={this.openOnclick}
              rows={rows}
              columns={columns}
              checkbox={true}
              headerColor="#f2f2f2"
            />
          </div>
          <div className={`add-data `}>
            <div className={`closed ${this.state.isClicked && "open"}`}>
              <div className="flex">
                <div className="sub-div">
                  <IconContext.Provider value={{ color: "#0FA568" }}>
                    <FaCog />
                  </IconContext.Provider>
                  <span>11111</span>
                </div>
                <div className="drop">
                  <span>Çap et</span>
                  <IconContext.Provider value={{ color: "#5681EF" }}>
                    <IoMdArrowDropdown size={20} />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="flex">
                <div className="sub-div">
                  <MdKeyboardArrowDown />
                  <span>Eltip bermek</span>
                </div>
                <div className="drop">
                  <span>Öňünden belläň</span>
                  <IconContext.Provider value={{ color: "#5681EF" }}>
                    <IoMdArrowDropdown size={20} />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="forms">
                <div className="talap">
                  <span>Talap edilýär</span>
                  <span className="italic">Görkezilmedi</span>
                </div>
                <form action="#">
                  <div className="weight">
                    <label htmlFor="weight">Agramy</label>
                    <input
                      type="number"
                      onChange={this.handleChange}
                      onInput={this.handleInput}
                      id="weight"
                      placeholder="0"
                      className="number"
                    />
                    <span>(kg)</span>
                    <input
                      type="number"
                      onChange={this.handleChange}
                      onInput={this.handleInput}
                      id="weight"
                      placeholder="0"
                      className="number"
                    />
                    <span>(g)</span>
                  </div>
                  {forms.map((form) => {
                    return (
                      <div className="form-select" key={form.id}>
                        <label htmlFor="hyzmaty">{form.label}</label>
                        <Select btn={form} id="form" />
                      </div>
                    );
                  })}

                  <div className="measure">
                    <label htmlFor="measure">Ölçegi</label>
                    <div className="flexer">
                      {measures.map((m) => {
                        return (
                          <div className="nums" key={m}>
                            <input
                              type="number"
                              id="measure"
                              placeholder="0"
                              className="number"
                            />
                            <span>{m}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {forms.slice(1, 3).map((form) => {
                    return (
                      <div className="form-select" key={form.id}>
                        <label htmlFor="hyzmaty">{form.label}</label>
                        <Select btn={form} id="form" />
                      </div>
                    );
                  })}
                </form>

                <div className="harytlar info">
                  <div className="title-harytlar title-common">
                    <MdKeyboardArrowDown />
                    <span>Harytlar</span>
                  </div>

                  <div className="line"></div>
                  <div className="info-harytlar">Hiç zat ýok</div>
                </div>
                <div className="alyjy info">
                  <div className="title-alyjy title-common">
                    <MdKeyboardArrowDown />
                    <span>Alyjy</span>
                  </div>

                  <div className="line"></div>

                  <div className="ship">
                    <div className="ship-title">
                      <span>Gämi</span>
                      <span className="blue">düzet</span>
                    </div>

                    {[...Array(4)].map((e, id) => {
                      return <div key={id}>-------</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IberGarash;
