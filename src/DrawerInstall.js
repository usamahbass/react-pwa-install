import React from "react";
import { makeStyles } from "@mui/styles";
import { Drawer, Button, Typography, Box } from "@mui/material";

const useDrawerInstallStyles = makeStyles(() => ({
  customDrawerPaper: {
    width: "100% !important",
    height: "370px !important",
    display: "block !important",
    margin: "0 auto !important",
    maxWidth: "480px !important",
    backgroundColor: "#5DC3B2 !important",
    boxShadow: "none !important",
    border: "0 !important",
    right: "12px !important",
    overflow: "hidden !important",
  },
  customBtnInstall: {
    width: "300px !important",
    height: "50px !important",
    backgroundColor: "white !important",
    color: "#5DC3B2 !important",
    fontWeight: "600 !important",
    borderRadius: "20px !important",
    marginTop: "1.5rem !important",
    "&:hover": {
      backgroundColor: "white !important",
      opacity: "0.8 !important",
    },
  },
  customBtnClose: {
    width: "300px !important",
    height: "50px !important",
    backgroundColor: "#5DC3B2 !important",
    color: "white !important",
    border: "1px solid #fff !important",
    fontWeight: "600 !important",
    borderRadius: "20px !important",
    marginTop: "1.5rem !important",
    "&:hover": {
      backgroundColor: "#5DC3B2 !important",
      opacity: "0.8 !important",
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
          variant="h6"
          alignn="center"
          style={{
            color: "white",
            fontSize: '1.15rem',
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
