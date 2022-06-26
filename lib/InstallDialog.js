"use strict";

exports.__esModule = true;
exports["default"] = InstallDialog;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _InstallDialogAction = _interopRequireDefault(require("./InstallDialogAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function InstallDialog(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: props.open,
    onClose: props.onClose,
    "aria-labelledby": "dialog-title"
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, {
    id: "dialog-title"
  }, props.title || "Install Web App"), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, {
    dividers: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    display: "flex",
    alignItems: "flex-start"
  }, !!props.logo && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    mr: 1
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.logo,
    alt: "logo"
  })), !!props.features && /*#__PURE__*/_react["default"].createElement(_core.Box, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1"
  }, "Key Features:"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    component: "div"
  }, props.features))), !!props.description && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1"
  }, "Description:"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    component: "div"
  }, props.description))), /*#__PURE__*/_react["default"].createElement(_InstallDialogAction["default"], {
    platform: props.platform,
    onSubmit: props.onSubmit,
    onClose: props.onClose
  }));
}

module.exports = exports.default;