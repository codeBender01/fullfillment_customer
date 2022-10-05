import React, { useState } from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";
import FullScreenDialog from "../../../components/Modal/Modal";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import EndButtons from "../../../components/EndButtons/EndButtons";
import "./sub-onumler.scss";
import "./general.scss";
import "./eltip-bermek.scss";
import "./lakamlar.scss";

const selectBtns = [
  {
    id: 1,
    text: "Öňünden düzülen topary goşuň",

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
    text: "Kategoriýalaşdyryň",
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
    text: "Bellik",
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
    text: "Import",
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
    text: "Eksport",
  },
  {
    id: 6,
    text: "Öçürmek",
  },
  {
    id: 7,
    text: "Öçür",
  },
  {
    id: 8,
    text: "Täze önüm",
    modal: true,
  },
  {
    id: 9,
    text: "Birleşdiriň",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Bellikler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Öňünden düzülen toparlar",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Önüm görnüşi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Kategoriýalary",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 5,
    text: "Döredilen",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 6,
    text: "Üýtgedilen",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 7,
    text: "Surat url ",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

const generalSelects = [
  {
    id: 1,
    text: "",
    label: "Hasabat kategoriýasy",
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
    text: "",
    label: "Sargyt bellikleri",
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

const eltipBermekSelects = [
  {
    id: 1,
    text: "Içerki hyzmat",
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
    text: "Bukjasy",
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
    text: "Tassyklama ýok",
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
    text: "Halkara hyzmat",
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
    text: "Bukjasy",
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
    text: "Tassyklama ýok",
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

const eltipBermekMeasures = [
  {
    id: 1,
    labelOfNums: "Bukjanyň agramy",
    labelOfInput: "Ammaryň ýerleşýän ýeri",
    measures: [
      {
        measureText: "(kg)",
      },
      {
        measureText: "(g)",
      },
    ],
  },
  {
    id: 2,
    labelOfNums: "Bukjanyň ölçegleri",
    labelOfInput: "Ammaryň ýerleşýän ýeri",
    measures: [
      {
        measureText: "(uz)",
      },
      {
        measureText: "(gi)",
      },
      {
        measureText: "(beý)",
      },
    ],
  },
];

const dukanSelect = {
  text: "Tassyklama ýok",
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

function General() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };
  return (
    <div className="general">
      <div className="modal-title">Atributlary</div>

      <div className="forms">
        <form action="#" id="textimg">
          <div className="description">
            <label htmlFor="description">Beýany</label>
            <textarea
              value={textAreaValue}
              onChange={handleChange}
              id="address"
            />
          </div>

          <div className="img-url">
            <label htmlFor="img-url">Surat url</label>
            <input type="url" id="img-url" />
          </div>
        </form>
        <form action="#" id="selects">
          {generalSelects.map((sel) => {
            return (
              <div key={sel.id} className="wrapper">
                <label htmlFor="category">{sel.label}</label>
                <Select btn={sel} id="gensel" />
              </div>
            );
          })}

          <div className="wrapper">
            <label htmlFor="upc">UPC</label>
            <input type="text" id="upc" />
          </div>

          <div>Yzyna</div>
          <div className="refund">
            <input type="checkbox" id="refund" />
            <label htmlFor="refund" id="refund-lbl">
              Haryt yzyna gaýtarylyp berilýär
            </label>
          </div>
        </form>
      </div>
      <EndButtons />
    </div>
  );
}

function EltipBermek() {
  return (
    <div className="eltip-bermek">
      <div className="modal-title">Eltip bermek</div>
      <div className="selects">
        {eltipBermekSelects.map((el) => {
          return <Select id="elsel" key={el.id} btn={el} />;
        })}
      </div>

      {eltipBermekMeasures.map((me) => {
        return (
          <div className="measure" key={me.id}>
            <div className="nums">
              <span className="label">{me.labelOfNums}</span>
              {me.measures.map((n) => {
                return (
                  <div className="num">
                    <input
                      type="number"
                      id="measure"
                      placeholder="0"
                      className="number"
                    />
                    <span>{n.measureText}</span>
                  </div>
                );
              })}
            </div>
            <div className="address-input">
              <label htmlFor="storage-address">{me.labelOfInput}</label>
              <input type="text" id="storage-address" />
            </div>
          </div>
        );
      })}
      <EndButtons />
    </div>
  );
}

function Lakamlar() {
  return (
    <div className="lakamlar">
      <div className="modal-title">Lakamlary saklaň</div>
      <div className="lakam-inputs">
        <div className="sku">
          <label htmlFor="sku-lakam">SKU</label>
          <input type="text" id="sku-lakam" />
        </div>
        <div className="dukan">
          <span>Dükan</span>
          <Select btn={dukanSelect} id="nicksel" />
        </div>
      </div>

      <div className="btn">
        <button>Lakam goşuň</button>
      </div>

      <EndButtons />
    </div>
  );
}

const navs = [
  {
    id: 1,
    text: "General",
    component: <General />,
  },
  {
    id: 2,
    text: "Eltip bermek",
    component: <EltipBermek />,
  },
  {
    id: 3,
    text: "Gümrük",
  },
  {
    id: 4,
    text: "Öwsele",
  },
  {
    id: 5,
    text: "Lakamlary saklaň",
    component: <Lakamlar />,
  },
  {
    id: 6,
    text: "Iş",
  },
];

class SubOnumler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      navId: 0,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.applyActiveClass = this.applyActiveClass.bind(this);
    this.renderById = this.renderById.bind(this);
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

  applyActiveClass(id) {
    this.setState({ navId: id }, () => {});
    console.log("hey", id, this.navId);
  }

  renderById() {
    for (let nav of navs) {
      if (nav.id === this.state.navId && nav.component) {
        return nav.component;
      }
    }
  }

  render() {
    return (
      <div className="sub-onumler nested-page">
        <h1>Önümler</h1>
        <div className="sutunler">Sütünler</div>
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
        <div className="onum-chars">
          <span>23fs</span>
          <div>
            <span>20kg</span>
            <span>500g</span>
          </div>
          <span>500 sss</span>
          <IconContext.Provider
            value={{
              color: "#3D943B",
            }}
          >
            <BsCheck size={25} />
          </IconContext.Provider>

          <span>11/11/2022</span>
          <span>0</span>
          <span>$222.222</span>
          <span>22x22x22 sm</span>
          <span>3223</span>
          <IconContext.Provider
            value={{
              color: "#3D943B",
            }}
          >
            <BsCheck size={25} />
          </IconContext.Provider>
        </div>
        <div className="line" id="no-mg"></div>
        <FullScreenDialog
          open={this.state.open}
          handleClose={this.handleClose}
          modalTitle="Özbaşdak önüm jikme-jigi"
        >
          <div className="product-in-details">
            <div className="head">
              <form action="#" id="head">
                <div className="name">
                  <label htmlFor="productName">Ady</label>
                  <input type="text" id="productName" />
                  <div className="checkbox">
                    <input type="checkbox" id="delete-name" />
                    <label htmlFor="delete-name" id="check">
                      Getirilen ady ýok et
                    </label>
                  </div>
                </div>
                <div className="sku">
                  <label htmlFor="sku">SKU</label>
                  <input type="text" id="sku" />
                </div>
              </form>
            </div>

            <ul className="nav">
              {navs.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={this.state.navId === nav.id ? "active" : ""}
                    onClick={() => this.applyActiveClass(nav.id)}
                  >
                    {nav.text}
                  </li>
                );
              })}
            </ul>

            {this.renderById()}
          </div>
        </FullScreenDialog>
      </div>
    );
  }
}

export default SubOnumler;
