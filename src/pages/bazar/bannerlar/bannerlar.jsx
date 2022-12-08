import React from "react";
import "./bannerlar.scss";
import DataTable from "../../../components/table/Table";
import pr from "../../../images/nav-2.png";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import cloud from "../../../images/cloud.png";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600,
        fontFamily: "SourceSans",
      }}
      {...other}
    >
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs(props) {
  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialogContent-root": {
            padding: "16px",
          },
          "& .MuiDialogActions-root": {
            padding: "16px",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Banner goş
        </BootstrapDialogTitle>
        <DialogContent
          sx={{
            "&": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            "& .upload-banner button": {
              border: "none",
              borderRadius: "15px",
              color: "#ffffff",
              bgcolor: "#29b99d",
              fontSize: "14px",
              fontWeight: 600,
              p: "10px 15px",
              cursor: "pointer",
            },

            "& .upload-banner": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: "40px 0",
            },

            "& .upload-banner p": {
              m: "10px 0 20px 0",
            },

            "& .path-dropdown": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #000000",
              borderRadius: "5px",
              width: "100%",
              p: "10px",
              mt: "5px",
            },
            "& .image-path h5": {
              fontSize: "18px",
              fontWeight: 600,
            },
            "& .image-path ": {
              width: "35%",
              justifySelf: "flex-end",
            },
          }}
        >
          <div className="upload-banner">
            <img src={cloud} alt="upload" />
            <p>jpg.png. formatda ýükläň</p>
            <button className="add-banner">Kompýuteriňize göz aýlaň</button>
          </div>

          <div className="image-path">
            <h5>Ýerleşýän ýeri</h5>
            <div className="path-dropdown">
              <p>ýokarky_sözbaşy</p>
              <IoMdArrowDropdown />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleClose}
            sx={{
              color: "#ffffff",
              bgcolor: "#29b99d",
              borderRadius: "15px",
              fontWeight: 600,
              fontSize: 12,
              lineHeight: "19px",
              fontFamily: "SourceSans",
              "&:hover": {
                opacity: 0.8,
                bgcolor: "#29b99d",
              },
            }}
          >
            Ýatda sakla
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

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
      <RiDeleteBinLine size={20} className="icon" />,
      <FiEdit size={15} className="edit-icon icon" />,
    ],
  },
];

const rows = [
  {
    id: "banner-1",
    order: "1",
    image: pr,
    tag: "ýokarky_sözbaşy",
    active: false,
  },
  {
    id: "banner-2",
    order: "2",
    image: pr,
    tag: "ýokarky_sözbaşy",
    active: true,
  },
];

function Banners() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
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

      <CustomizedDialogs handleClose={handleClose} open={open} />
    </div>
  );
}

export default Banners;
