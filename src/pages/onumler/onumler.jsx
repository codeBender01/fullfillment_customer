import React, { useState, useEffect } from "react";
import "./onumler.scss";
import DataTable from "../../components/table/Table";
import Switch from "@mui/material/Switch";
import { FiSave, FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import wear1 from "../../images/wear1.png";

import ProductInfo from "./productModal/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products";

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

function Onumler() {
  const [slide, setSlide] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const sliceTheString = (str) => {
    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
      finalStr += str[i];
      if (str[i] === " ") {
        return finalStr;
      }
    }
  };

  const rows = products.map((pr, i) => ({
    id: pr.id,
    order: i + 1,
    condition: true,
    image: pr.image ? pr.image : wear1,
    name: pr.name_tm,
    category: sliceTheString(pr.categories[0].name_tm),
    barCode: pr.barcode,
    discount: pr.discount,
    price: `${pr.price} TMT`,
    inStock: pr.stock_quantity,
  }));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts);
    }
  }, []);

  const open = () => {
    setSlide(true);
    console.log(products);
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
          height={600}
          displayTable={true}
        />
      </div>
      <div className="add-product">
        <button className="add-btn" onClick={open}>
          Önüm goş
        </button>
      </div>

      <ProductInfo animate={slide} close={close} />
    </div>
  );
}

export default Onumler;
