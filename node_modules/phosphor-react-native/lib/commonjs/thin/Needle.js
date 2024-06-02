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
const Needle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "needle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M186.83 69.17a4 4 0 0 1 0 5.66l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 0ZM220 72a35.76 35.76 0 0 1-10.54 25.46l-24 24a4.05 4.05 0 0 1-2.16 1.11c-21.65 3.72-52.74 21.46-89.91 51.33-28.34 22.77-50.34 44.71-50.56 44.93l-.24.22a4 4 0 0 1-5.42-5.88c.22-.17 22.16-22.17 44.93-50.56 29.9-37.17 47.61-68.26 51.33-89.91a4.05 4.05 0 0 1 1.11-2.16l24-24A36 36 0 0 1 220 72Zm-8 0a28 28 0 0 0-47.8-19.8l-23.12 23.12c-5.33 28-29.48 63.42-52.51 92.11 28.69-23 64.16-47.18 92.11-52.52L203.8 91.8A27.81 27.81 0 0 0 212 72Z"
}));
var _default = exports.default = Needle;