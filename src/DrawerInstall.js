import React from "react";
import { Drawer, Button, Typography, Box, makeStyles } from "@material-ui/core";

const useDrawerInstallStyles = makeStyles(() => ({
  customDrawerPaper: {
    width: "100%",
    height: "340px",
    display: "block",
    margin: "0 auto",
    maxWidth: "480px",
    backgroundColor: "#7f37fb",
    boxShadow: "none",
    border: 0,
  },
  customBtnInstall: {
    width: "300px",
    height: "50px",
    backgroundColor: "white",
    color: "#7f37fb",
    fontWeight: 600,
    borderRadius: "20px",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.8,
    },
  },
  customBtnClose: {
    width: "300px",
    height: "50px",
    backgroundColor: "#7f37fb",
    color: "white",
    border: "1px solid #fff",
    fontWeight: 600,
    borderRadius: "20px",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "#7f37fb",
      opacity: 0.8,
    },
  },
}));

const DrawerInstall = ({
  open,
  onClose,
  description,
  handleInstall,
  installTitle,
  closeTitle,
}) => {
  const classes = useDrawerInstallStyles();
  return (
    <Drawer
      anchor="bottom"
      open={open}
      classes={{ paper: classes.customDrawerPaper }}
    >
      <Box
        gap="5"
        padding="4rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h5"
          alignn="center"
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: `'Poppins', sans-serif`,
          }}
        >
          {description}
        </Typography>

        <Button className={classes.customBtnInstall} onClick={handleInstall}>
          {installTitle}
        </Button>
        <Button className={classes.customBtnClose} onClick={onClose}>
          {closeTitle}
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerInstall;
