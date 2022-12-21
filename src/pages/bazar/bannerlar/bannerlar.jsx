import React, { useState } from "react";
import "./bannerlar.scss";
import DataTable from "../../../components/table/Table";
import pr from "../../../images/nav-2.png";
import { GoPrimitiveDot } from "react-icons/go";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import AddBanner from "./addBanner/AddBanner";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBanners } from "../../../store/banners/banners";
import axios from "axios";

const columns = [
  { field: "order", headerName: "#", width: 10 },
  {
    field: "image",
    headerName: "Surat",
    width: 120,
    renderCell: (params) => (
      <img src={params.value} alt="product" className="product-img" />
    ),
  },
  { field: "tag", headerName: "Belligi", width: 150 },
  {
    field: "active",
    headerName: "Işjeň",
    width: 120,
    renderCell: (params) => {
      if (params.value) {
        return (
          <IconContext.Provider
            value={{
              color: "#F2C94C",
            }}
          >
            <GoPrimitiveDot />
          </IconContext.Provider>
        );
      }

      return (
        <IconContext.Provider
          value={{
            color: "#4CE417",
          }}
        >
          <GoPrimitiveDot />
        </IconContext.Provider>
      );
    },
  },
  {
    field: "editDelete",
    headerName: "",
    width: 100,
    renderCell: () => [
      <RiDeleteBinLine size={20} className="icon" key="delete" />,
      <FiEdit size={15} className="edit-icon icon" key="edit" />,
    ],
  },
];

const rows = [
  {
    id: 1,
    name: "banner-1",
    order: "1",
    image: pr,
    tag: "ýokarky_sözbaşy",
    active: false,
  },
  {
    id: 2,
    name: "banner-2",
    order: "2",
    image: pr,
    tag: "ýokarky_sözbaşy",
    active: true,
  },
];

function Banners() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  // const banners = useSelector((state) => state.banners.banners);

  const token = window.localStorage.getItem("token");
  // const dispatch = useDispatch();
  const url = "http://localhost:3002/api/roles/banners/add";

  const handleClickOpen = () => {
    setImage(null);
    setImageUrl(null);
    setTitle(null);
    setOpen(true);
  };
  const handleClose = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (image) {
      formData.append("photo", image);

      try {
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    setOpen(false);
  };

  return (
    <div className="banners">
      <div className="banners-table">
        <DataTable
          headerColor="#3C3C48"
          rows={rows}
          columns={columns}
          rowHeight={100}
          headerHeight={41}
        />
      </div>

      <div className="end-line">
        <div className="line"></div>
        <button className="add-banner" onClick={handleClickOpen}>
          Banner goş
        </button>
      </div>

      <AddBanner
        handleClose={handleClose}
        open={open}
        setImage={setImage}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        imageName={title}
        setTitle={setTitle}
      />
    </div>
  );
}

export default Banners;
