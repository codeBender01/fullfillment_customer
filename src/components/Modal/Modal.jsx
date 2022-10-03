import React from "react";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  typography: {
    fontFamily: `"SourceSans", sans-serif`,
  },
});

export default function FullScreenDialog(props) {
  const { open, handleClose } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            sx={{
              position: "relative",
              bgcolor: "#FFFFFF",
              color: "#000000",
              fontFamily: "SourceSans",
            }}
          >
            <Toolbar>
              <Typography
                sx={{
                  flex: 1,
                  fontSize: 24,
                  letterSpacing: "0.01em",
                  fontWeight: 600,
                }}
                variant="h6"
                component="div"
              >
                {props.modalTitle}
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {props.children}
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
