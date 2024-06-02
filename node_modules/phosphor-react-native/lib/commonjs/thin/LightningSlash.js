"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const LightningSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lightning-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38L86.77 88.6l-41.69 44.67a4 4 0 0 0 1.52 6.47l60.81 22.81-15.33 76.67a4 4 0 0 0 6.84 3.51l64.83-69.46L205 218.69a4 4 0 1 0 5.92-5.38ZM102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36l37.17-39.82 66.18 72.79Zm8.71-158.9a4 4 0 0 1-.2-5.65l45.89-49.16a4 4 0 0 1 6.84 3.51l-15.33 76.65 60.81 22.8a4 4 0 0 1 2.49 2.84 4 4 0 0 1-1 3.64l-22.3 23.89a4 4 0 0 1-5.85-5.45L201 121.64l-58.4-21.9a4 4 0 0 1-2.52-4.52L153.32 29 117 67.89a4 4 0 0 1-5.61.19Z"
}));
var _default = exports.default = LightningSlash;