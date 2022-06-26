import React from "react";
import { Drawer, Button, Typography, Box, makeStyles } from "@material-ui/core";

const useDrawerInstallStyles = makeStyles(() => ({
  customDrawerPaper: {
    width: "100%",
    height: "370px",
    display: "block",
    margin: "0 auto",
    maxWidth: "480px",
    backgroundColor: "#5DC3B2",
    boxShadow: "none",
    border: 0,
    right: '12px',
    overflow: "hidden",
  },
  customBtnInstall: {
    width: "300px",
    height: "50px",
    backgroundColor: "white",
    color: "#5DC3B2",
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
    backgroundColor: "#5DC3B2",
    color: "white",
    border: "1px solid #fff",
    fontWeight: 600,
    borderRadius: "20px",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "#5DC3B2",
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
