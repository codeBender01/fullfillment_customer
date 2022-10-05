import React from "react";
import Select from "../../../components/Select/Select";
import FullScreenDialog from "../../../components/Modal/Modal";
import EndButtons from "../../../components/EndButtons/EndButtons";
import "./onunden.scss";

const selectBtns = [
  {
    id: 1,
    text: "Öňünden düzülen topary goş",
    modal: true,
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
    labelOfInput: "Beýany",
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
    styleId: "mg",
    labelOfNums: "Bukjanyň ölçegleri",
    labelOfInput: "Deklaradyň bahasy",
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

class Onunden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      navId: 0,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
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
  render() {
    return (
      <div className="nested-page">
        <h1>Toparlar</h1>
        <div className="select-btns" id="minuscule">
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

        <div className="line"></div>

        <FullScreenDialog
          open={this.state.open}
          handleClose={this.handleClose}
          modalTitle="Öňünden düzülen topary goş"
        >
          <div className="onunden-modal">
            <div className="group-name">
              <label htmlFor="groupName">Toparyň ady</label>
              <input type="text" id="groupName" />
            </div>
            <div className="selects">
              {eltipBermekSelects.map((el) => {
                return <Select id="elsel" key={el.id} btn={el} />;
              })}
            </div>

            {eltipBermekMeasures.map((me) => {
              return (
                <div className="measure" key={me.id} id={me.styleId}>
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
        </FullScreenDialog>
      </div>
    );
  }
}

export default Onunden;
