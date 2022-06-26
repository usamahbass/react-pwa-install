import React from "react";
import { DialogActions, Typography, Button, Box } from "@material-ui/core";
import { platforms } from "./Platforms";
import { IOSShareIcon, FireFoxA2HSIcon, MenuIcon, OperaA2HSIcon } from "./Icons";

function DialogActionWithInstructions(props) {
  return /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, "To install this app:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, props.action1)), /*#__PURE__*/React.createElement("li", null, props.action2))), /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    textAlign: "right"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onSubmit
  }, "Ok")));
}

export default function InstallDialogAction(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DialogActions, null, props.platform === platforms.NATIVE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: props.onSubmit,
    color: "primary",
    variant: "contained",
    disableElevation: true
  }, "Install")), props.platform === platforms.IDEVICE && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the share button:", /*#__PURE__*/React.createElement(IOSShareIcon, null)),
    action2: "then find and tap 'Add to Homescreen'",
    onSubmit: props.onSubmit
  }), props.platform === platforms.FIREFOX && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap this icon on the address bar:", /*#__PURE__*/React.createElement(FireFoxA2HSIcon, null)),
    action2: "then tap '+Add to Homescreen'",
    onSubmit: props.onSubmit
  }), props.platform === platforms.FIREFOX_NEW && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the menu button:", /*#__PURE__*/React.createElement(MenuIcon, null)),
    action2: "then tap 'Install'",
    onSubmit: props.onSubmit
  }), props.platform === platforms.OPERA && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the menu button:", /*#__PURE__*/React.createElement(MenuIcon, null)),
    action2: /*#__PURE__*/React.createElement(React.Fragment, null, "then tap \xA0'", /*#__PURE__*/React.createElement(OperaA2HSIcon, null), "Home screen'"),
    onSubmit: props.onSubmit
  }), props.platform === platforms.OTHER && /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, null, "Unfortunately the install feature is not supported by your browser."), /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    textAlign: "right"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onClose
  }, "Ok")))));
}