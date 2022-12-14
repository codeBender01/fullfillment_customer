import React, { useState } from "react";
import "./onumler.scss";
import DataTable from "../../components/table/Table";
import Switch from "@mui/material/Switch";
import { FiSave, FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import acc from "../../images/accesory.png";
import wear1 from "../../images/wear1.png";
import wear2 from "../../images/wear2.png";
import { IoIosArrowForward } from "react-icons/io";
import ProductInfo from "./productModal/ProductInfo";

const label = { inputProps: { "aria-label": "Switch demo" } };

const columns = [
  { field: "order", headerName: "#", width: 10 },
  {
    field: "condition",
    headerName: "Ýagdaý",
    width: 100,
    renderCell: (params) => {
      if (params.value) {
        return (
          <Switch
            {...label}
            defaultChecked
            disabled
            sx={{
              "& .css-jsexje-MuiSwitch-thumb": {
                color: "#ffffff",
                borderRadius: 10,
                width: 10,
                height: 10,
                mt: "5px",
                ml: "4px",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#57e777",
                opacity: 0.7,
              },
            }}
          />
        );
      }

      return (
        <Switch
          {...label}
          sx={{
            "& .css-jsexje-MuiSwitch-thumb": {
              color: "#ffffff",
              borderRadius: 10,
              width: 10,
              height: 10,
              mt: "5px",
              ml: "4px",
            },
          }}
          disabled
        />
      );
    },
  },
  {
    field: "image",
    headerName: "Surat",
    width: 120,
    renderCell: (params) => (
      <img src={params.value} alt="product" className="product-img" />
    ),
  },
  { field: "name", headerName: "Ady", width: 120 },
  { field: "category", headerName: "Kategoriýa", width: 120 },
  { field: "barCode", headerName: "Ştrih kody", width: 120 },
  { field: "discount", headerName: "Arzanladyş", width: 80 },
  { field: "price", headerName: "Bahasy", width: 80 },
  { field: "inStock", headerName: "Mukdary", width: 80 },

  {
    field: "editDeleteSave",
    headerName: "Işjeň",
    width: 100,
    renderCell: () => [
      <RiDeleteBinLine size={25} className="icon" key="delete" />,
      <FiEdit size={20} className="edit-icon icon" key="edit" />,
      <FiSave size={22} className=" icon" key="save" />,
    ],
  },
];

const rows = [
  {
    id: 1,
    order: 1,
    condition: true,
    image: wear1,
    name: "Önümiň ady",
    category: "Eşik",
    barCode: "192116271941",
    discount: "0%",
    price: "9999 TMT.",
    inStock: "999",
  },
  {
    id: 2,
    order: 2,
    condition: false,
    image: wear2,
    name: "Önümiň ady",
    category: "Eşik",
    barCode: "192116271941",
    discount: "70%",
    price: "9999 TMT.",
    inStock: "999",
  },
  {
    id: 3,
    order: 3,
    condition: true,
    image: acc,
    name: "Önümiň ady",
    category: "Aksesuar",
    barCode: "192816272941",
    discount: "50%",
    price: "9999 TMT.",
    inStock: "999",
  },
  {
    id: 4,
    order: 4,
    condition: false,
    image: acc,
    name: "Önümiň ady",
    category: "Aksesuar",
    barCode: "192816272941",
    discount: "80%",
    price: "9999 TMT.",
    inStock: "999",
  },
];

function Onumler() {
  const [slide, setSlide] = useState(null);

  const open = () => {
    setSlide(true);
  };
  const close = () => {
    setSlide(false);
  };

  return (
    <div className={`onumler ${slide ? "high" : null}`}>
      <div className="products-table">
        <DataTable
          headerColor="#3C3C48"
          rows={rows}
          columns={columns}
          rowHeight={100}
          headerHeight={41}
          height={500}
          handleClick={open}
        />
      </div>
      <div className="add-product">
        <button className="add-btn">Önüm goş</button>
      </div>

      <div className="pagination">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>10</li>
        </ul>
        <IoIosArrowForward />
      </div>

      <ProductInfo animate={slide} close={close} />
    </div>
  );
}

export default Onumler;
