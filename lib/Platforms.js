"use strict";

exports.__esModule = true;
exports.getPlatform = getPlatform;
exports.platforms = void 0;

var _mobileDeviceDetect = require("mobile-device-detect");

var platforms = {
  NATIVE: "native",
  // currently: Chrome, Edge mobile, Samsung internet
  FIREFOX: "firefox",
  FIREFOX_NEW: "firefox_new",
  // above version 79
  OPERA: "opera",
  IDEVICE: "idevice",
  OTHER: "other" // don't know, so will do nothing

};
exports.platforms = platforms;

function getPlatform() {
  var platform = platforms.OTHER;

  if (window.hasOwnProperty("BeforeInstallPromptEvent")) {
    platform = platforms.NATIVE;
  } else if (_mobileDeviceDetect.isMobile && _mobileDeviceDetect.isAndroid && _mobileDeviceDetect.isFirefox && +_mobileDeviceDetect.browserVersion >= 79) {
    platform = platforms.FIREFOX_NEW;
  } else if (_mobileDeviceDetect.isMobile && _mobileDeviceDetect.isAndroid && _mobileDeviceDetect.isFirefox) {
    platform = platforms.FIREFOX;
  } else if (_mobileDeviceDetect.isOpera && _mobileDeviceDetect.isAndroid && _mobileDeviceDetect.isMobile) {
    platform = platforms.OPERA;
  } else if (_mobileDeviceDetect.isIOS && _mobileDeviceDetect.isMobile) {
    platform = platforms.IDEVICE;
  }

  return platform;
}