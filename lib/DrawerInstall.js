"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

require("./drawer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DrawerInstall = function DrawerInstall(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      description = _ref.description,
      handleInstall = _ref.handleInstall,
      installTitle = _ref.installTitle,
      closeTitle = _ref.closeTitle;
  return /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "bottom",
    open: open,
    classes: {
      paper: "custom-drawer-paper"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    gap: "5",
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    alignn: "center",
    style: {
      color: "white",
      fontSize: "1.15rem",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif"
    }
  }, description), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    className: "custom-btn-install",
    onClick: handleInstall
  }, installTitle), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    className: "custom-btn-close",
    onClick: onClose
  }, closeTitle)));
};

var _default = DrawerInstall;
exports["default"] = _default;
module.exports = exports.default;