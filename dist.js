"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const importDeviceImages = (device, statusBarColor) => {
  const baseDevicePath = "./assets/devices";
  const filenames = {
    DeviceImage: "Device.png",
    StatusBarImage: statusBarColor === "black" ? "Status Bar Black.png" : "Status Bar White.png",
    DynamicIslandImage: "Dynamic Island.png"
  };
  switch (device) {
    case "iPhone 15 Pro":
      return {
        DeviceImage: require("".concat(baseDevicePath, "/iPhone 15 Pro/").concat(filenames.DeviceImage)),
        StatusBarImage: require("".concat(baseDevicePath, "/iPhone 15 Pro/").concat(filenames.StatusBarImage)),
        DynamicIslandImage: require("".concat(baseDevicePath, "/iPhone 15 Pro/").concat(filenames.DynamicIslandImage))
      };
    default:
      return {
        DeviceImage: null,
        StatusBarImage: null,
        DynamicIslandImage: null
      };
  }
};
const DeviceWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
const Device = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 473px;\n  height: 932px;\n  position: relative;\n  transform-origin: center;\n  margin: 88px 0;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), props => props.$background);
const Screen = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 393px;\n  height: 852px;\n  background: ", ";\n  border-radius: 56px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"])), props => props.$contentBackgroundColor);
const StatusBar = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 393px;\n  height: 54px;\n  background-image: url(", ");\n  background-size: 143px 54px;\n  background-repeat: no-repeat;\n  background-position: right;\n  color: ", ";\n"])), props => props.$background, props => props.$color === "white" ? "white" : "black");
const DynamicIsland = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 127px;\n  height: 37px;\n  background-image: url(", ");\n  background-size: cover;\n  position: absolute;\n  top: 52px;\n  left: 50%;\n  transform: translateX(-50%);\n"])), props => props.$background);
const HomeIndicator = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 5px;\n  position: absolute;\n  bottom: 48px;\n  width: 138px;\n  left: 50%;\n  border-radius: 2.5px;\n  transform: translateX(-50%);\n"])), props => props.$color === "white" ? "white" : "black");
const Time = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 17px;\n  position: absolute;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 500;\n  top: 59px;\n  left: 66px;\n  letter-spacing: 0.5px;\n  width: 88px;\n  text-align: center;\n  color: inherit;\n"])));
const Phone = _ref => {
  let {
    deviceType,
    liveClock,
    statusBarColor,
    homeIndicatorColor,
    contentBackgroundColor,
    children
  } = _ref;
  const phoneRef = (0, _react.useRef)(null);
  const {
    DeviceImage,
    StatusBarImage,
    DynamicIslandImage
  } = importDeviceImages(deviceType, statusBarColor);
  (0, _react.useEffect)(() => {
    const resizePhone = () => {
      if (phoneRef.current) {
        const phoneWidth = 393;
        const phoneHeight = 852;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const margin = 88;
        const scaleWidth = windowWidth / phoneWidth;
        const scaleHeight = (windowHeight - margin) / phoneHeight;
        const scale = Math.min(scaleWidth, scaleHeight);
        phoneRef.current.style.transform = "scale(".concat(scale, ")");
      }
    };
    resizePhone();
    window.addEventListener("resize", resizePhone);
    return () => window.removeEventListener("resize", resizePhone);
  }, []);
  const Clock = _ref2 => {
    let {
      live
    } = _ref2;
    const [currentTime, setCurrentTime] = (0, _react.useState)(new Date());
    (0, _react.useEffect)(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    const formatTime = date => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? "0".concat(minutes) : minutes;
      return "".concat(formattedHours, ":").concat(formattedMinutes);
    };
    return /*#__PURE__*/_react.default.createElement(Time, null, live ? formatTime(currentTime) : "9:41");
  };
  return /*#__PURE__*/_react.default.createElement(DeviceWrapper, null, /*#__PURE__*/_react.default.createElement(Device, {
    ref: phoneRef,
    $background: DeviceImage
  }, /*#__PURE__*/_react.default.createElement(Screen, {
    $contentBackgroundColor: contentBackgroundColor
  }, /*#__PURE__*/_react.default.createElement(StatusBar, {
    $background: StatusBarImage,
    $color: statusBarColor
  }, /*#__PURE__*/_react.default.createElement(DynamicIsland, {
    $background: DynamicIslandImage
  }), /*#__PURE__*/_react.default.createElement(Clock, {
    live: liveClock
  })), /*#__PURE__*/_react.default.createElement(HomeIndicator, {
    $color: homeIndicatorColor
  }), children)));
};
var _default = exports.default = Phone;
