function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import { platforms, getPlatform } from "./Platforms";
import DrawerInstall from "./DrawerInstall";
var ReactPWAInstallContext = createContext(Promise.reject);
export var useReactPWAInstall = function useReactPWAInstall() {
  return useContext(ReactPWAInstallContext);
};
var platform = getPlatform();
export var ReactPWAInstallProvider = function ReactPWAInstallProvider(_ref) {
  var children = _ref.children,
      enableLogging = _ref.enableLogging;
  var awaitingPromiseRef = useRef();
  var deferredprompt = useRef(null);

  var _useState = useState(null),
      dialogState = _useState[0],
      setDialogState = _useState[1];

  var _useState2 = useState({
    supported: supported,
    isInstalled: isInstalled,
    pwaInstall: openDialog
  }),
      contextValue = _useState2[0],
      setContextValue = _useState2[1];

  useEffect(function () {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
    return function cleanup() {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
    };
  }, []);

  function logger(message) {
    if (enableLogging) {
      console.log(message);
    }
  }

  function isInstalled() {
    if (window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches) {
      logger("isInstalled: true. Already in standalone mode");
      return true;
    }

    logger("isInstalled: false.");
    return false;
  }

  function supported() {
    if (deferredprompt.current != null && platform === platforms.NATIVE) {
      logger("supported: true - native platform");
      return true;
    }

    if (platform !== platforms.NATIVE && platform !== platforms.OTHER) {
      logger("supported: true - manual support");
      return true;
    }

    logger("supported: false");
    return false;
  }

  function handleBeforeInstallPromptEvent(event) {
    event.preventDefault();
    deferredprompt.current = event;
    logger("beforeinstallprompt event fired and captured");
    setContextValue({
      supported: supported,
      isInstalled: isInstalled,
      pwaInstall: openDialog
    });
  }

  function openDialog(options) {
    setDialogState(options);
    return new Promise(function (resolve, reject) {
      awaitingPromiseRef.current = {
        resolve: resolve,
        reject: reject
      };
    });
  }

  function handleClose() {
    setDialogState(null);

    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }
  }

  function handleInstall() {
    logger("handleInstall called");
    setDialogState(null);

    if (deferredprompt.current != null) {
      return deferredprompt.current.prompt().then(function (event) {
        return deferredprompt.current.userChoice;
      }).then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          logger("PWA native installation succesful");

          if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve();
          }
        } else {
          logger("User opted out by cancelling native installation");

          if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
          }
        }
      })["catch"](function (err) {
        if (awaitingPromiseRef.current) {
          awaitingPromiseRef.current.resolve();
        }

        logger("Error occurred in the installing process: ", err);
      });
    } else {
      if (awaitingPromiseRef.current) {
        awaitingPromiseRef.current.resolve();
      }
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactPWAInstallContext.Provider, {
    value: contextValue,
    children: children
  }), /*#__PURE__*/React.createElement(DrawerInstall, _extends({
    onClose: handleClose,
    open: Boolean(dialogState),
    handleInstall: handleInstall
  }, dialogState)));
};
export default ReactPWAInstallProvider;