import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import "./iber-garash.scss";
import { FaCog } from "react-icons/fa";
import DataTable from "../../../components/table/Table";

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

const tData = [
  {
    id: "td-1",
    value: 11111,
    className: "blue",
    checkbox: true,
  },
  {
    id: "td-2",
    value: "99 sagat",
  },
  {
    id: "td-3",
    value: "11/11/2022",
  },
  {
    id: "td-4",
  },
  {
    id: "td-5",
  },
  {
    id: "td-6",
  },
  {
    id: "td-7",
  },
  {
    id: "td-8",
    value: "Ady",
  },
  {
    id: "td-9",
    value: "9999",
  },
  {
    id: "td-10",
    value: "999",
  },
];

const tHead = [
  {
    id: "th-1",
    text: "Ýaş",
  },
  {
    id: "th-2",
    text: "Sargyt senesi",
  },
  {
    id: "th-3",
    text: "Sowgat",
  },
  {
    id: "th-4",
    text: "SKU elementi",
  },
  {
    id: "th-5",
    text: "Harydyň ady",
  },
  {
    id: "th-6",
    text: "Topar",
    isDrop: false,
  },
  {
    id: "th-7",
    text: "Alyjy",
  },
  {
    id: "th-8",
    text: "Mukdary",
  },
  {
    id: "th-9",
    text: "Jemi sargyt",
  },
];

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

    this.wrapperRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.openOnclick = this.openOnclick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  openOnclick(e) {
    this.setState(({ isClicked }) => ({
      isClicked: !isClicked,
    }));
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ isClicked: false });
    }
  }

  handleChange(e) {
    console.log(`onChange fired with value: '${e.currentTarget.value}'`);
  }

  handleInput(e) {
    console.log(`onInput fired with value: '${e.currentTarget.value}'`);
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
          {/* <table id="iber">
              <thead>
                <tr>
                  <th>
                    <div className="flexing">
                      <label htmlFor="dukan"></label>
                      <input type="checkbox" id="dukan" />
                      <span>Dükan#</span>
                      <IconContext.Provider
                        value={{
                          color: "#ADADAD",
                        }}
                      >
                        <IoMdArrowDropdown size={20} />
                      </IconContext.Provider>
                    </div>
                  </th>
                  {tHead.map((th) => {
                    return (
                      <th key={th.id}>
                        <div className="flexing">
                          <span>{th.text}</span>
                          {th.isDrop === false ? null : (
                            <IconContext.Provider
                              value={{
                                color: "#ADADAD",
                              }}
                            >
                              <IoMdArrowDropdown size={20} />
                            </IconContext.Provider>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                <tr onClick={this.openOnclick.bind(this)}>
                  {tData.map((td) => {
                    return (
                      <td key={td.id} className={td.className}>
                        {td.checkbox ? (
                          <div>
                            <label htmlFor="dukan"></label>
                            <input type="checkbox" id="dukan" />
                          </div>
                        ) : null}
                        {td.value}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table> */}
          <div className="main" ref={this.wrapperRef}>
            <DataTable onClick={this.openOnclick} />
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
                              onChange={this.handleChange}
                              onInput={this.handleInput}
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
