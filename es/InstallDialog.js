import React from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import InstallDialogAction from "./InstallDialogAction";
export default function InstallDialog(props) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: props.open,
    onClose: props.onClose,
    "aria-labelledby": "dialog-title"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "dialog-title"
  }, props.title || "Install Web App"), /*#__PURE__*/React.createElement(DialogContent, {
    dividers: true
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "flex-start"
  }, !!props.logo && /*#__PURE__*/React.createElement(Box, {
    mr: 1
  }, /*#__PURE__*/React.createElement("img", {
    src: props.logo,
    alt: "logo"
  })), !!props.features && /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, "Key Features:"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "div"
  }, props.features))), !!props.description && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, "Description:"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "div"
  }, props.description))), /*#__PURE__*/React.createElement(InstallDialogAction, {
    platform: props.platform,
    onSubmit: props.onSubmit,
    onClose: props.onClose
  }));
}