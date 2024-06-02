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
const Hammer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hammer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248.5 114.81 181.05 46.9A92.1 92.1 0 0 0 50.9 47L37.12 61.18a4 4 0 1 0 5.75 5.56L56.6 52.56a83.75 83.75 0 0 1 22.34-16L130.34 88l-98.83 98.82a12 12 0 0 0 0 17l20.69 20.66a12 12 0 0 0 17 0l98.8-98.85 17.17 17.18 17.66 17.66a12 12 0 0 0 17 0l28.69-28.69a12 12 0 0 0-.02-16.97Zm-185 104a4 4 0 0 1-5.66 0l-20.67-20.67a4 4 0 0 1 0-5.66L108 121.63 134.34 148Zm101.67-101.66L140 142.32 113.65 116l25.18-25.2a4 4 0 0 0 0-5.66l-52-52a84.11 84.11 0 0 1 88.52 19.38l47 47.35L188 134.32l-17.17-17.17a4 4 0 0 0-5.66 0Zm77.66 9-28.68 28.69a4 4 0 0 1-5.66 0L193.66 140l34.39-34.4 14.78 14.88a4 4 0 0 1 0 5.64Z"
}));
var _default = exports.default = Hammer;