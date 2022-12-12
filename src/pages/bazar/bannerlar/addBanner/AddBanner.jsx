import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import cloud from "../../../../images/cloud.png";
import { IoMdArrowDropdown } from "react-icons/io";

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

function AddBanner(props) {
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
            "& .upload-banner label": {
              border: "none",
              borderRadius: "15px",
              color: "#ffffff",
              bgcolor: "#29b99d",
              fontSize: "14px",
              fontWeight: 600,
              p: "10px 15px",
              cursor: "pointer",
            },

            "& .upload-banner label.hidden": {
              display: "none",
            },

            "& .upload-banner input": {
              display: "none",
            },

            "& .upload-banner": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: "40px 0",
            },

            "& .upload-banner img": {
              width: "60%",
              objectFit: "cover",
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
            <img src={props.imageUrl ? props.imageUrl : cloud} alt="upload" />
            <p>
              {props.imageName ? props.imageName : "jpg.png. formatda ýükläň"}
            </p>

            <label
              htmlFor="imageUpload"
              className={props.imageUrl ? "hidden" : ""}
            >
              Kompýuteriňize göz aýlaň
              <input
                type="file"
                className="add-banner"
                onChange={(event) => {
                  props.setImage(event.target.files[0]);
                  props.setImageUrl(URL.createObjectURL(event.target.files[0]));
                  props.setTitle(event.target.files[0].name);
                }}
                id="imageUpload"
              />
            </label>
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

export default AddBanner;
