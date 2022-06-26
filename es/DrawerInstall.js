import React from "react";
import { Drawer, Button, Typography, Box } from "@mui/material";
import "./drawer.css";

var DrawerInstall = function DrawerInstall(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      description = _ref.description,
      handleInstall = _ref.handleInstall,
      installTitle = _ref.installTitle,
      closeTitle = _ref.closeTitle;
  return /*#__PURE__*/React.createElement(Drawer, {
    anchor: "bottom",
    open: open,
    classes: {
      paper: "custom-drawer-paper"
    }
  }, /*#__PURE__*/React.createElement(Box, {
    gap: "5",
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    alignn: "center",
    style: {
      color: "white",
      fontSize: "1.15rem",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif"
    }
  }, description), /*#__PURE__*/React.createElement(Button, {
    className: "custom-btn-install",
    onClick: handleInstall
  }, installTitle), /*#__PURE__*/React.createElement(Button, {
    className: "custom-btn-close",
    onClick: onClose
  }, closeTitle)));
};

export default DrawerInstall;