"use strict";

exports.__esModule = true;
exports["default"] = InstallDialogAction;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Platforms = require("./Platforms");

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DialogActionWithInstructions(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1"
  }, "To install this app:"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, props.action1)), /*#__PURE__*/_react["default"].createElement("li", null, props.action2))), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    textAlign: "right"
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onSubmit
  }, "Ok")));
}

function InstallDialogAction(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, props.platform === _Platforms.platforms.NATIVE && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onClose
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onSubmit,
    color: "primary",
    variant: "contained",
    disableElevation: true
  }, "Install")), props.platform === _Platforms.platforms.IDEVICE && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the share button:", /*#__PURE__*/_react["default"].createElement(_Icons.IOSShareIcon, null)),
    action2: "then find and tap 'Add to Homescreen'",
    onSubmit: props.onSubmit
  }), props.platform === _Platforms.platforms.FIREFOX && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap this icon on the address bar:", /*#__PURE__*/_react["default"].createElement(_Icons.FireFoxA2HSIcon, null)),
    action2: "then tap '+Add to Homescreen'",
    onSubmit: props.onSubmit
  }), props.platform === _Platforms.platforms.FIREFOX_NEW && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the menu button:", /*#__PURE__*/_react["default"].createElement(_Icons.MenuIcon, null)),
    action2: "then tap 'Install'",
    onSubmit: props.onSubmit
  }), props.platform === _Platforms.platforms.OPERA && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the menu button:", /*#__PURE__*/_react["default"].createElement(_Icons.MenuIcon, null)),
    action2: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "then tap \xA0'", /*#__PURE__*/_react["default"].createElement(_Icons.OperaA2HSIcon, null), "Home screen'"),
    onSubmit: props.onSubmit
  }), props.platform === _Platforms.platforms.OTHER && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, null, "Unfortunately the install feature is not supported by your browser."), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    textAlign: "right"
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onClose
  }, "Ok")))));
}

module.exports = exports.default;