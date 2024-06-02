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
const PawPrint = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paw-print-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 84a24 24 0 1 0 24 24 24 24 0 0 0-24-24Zm0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16ZM68 108a24 24 0 1 0-24 24 24 24 0 0 0 24-24Zm-24 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm48-40a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm72 40a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm21.18 108.36a39.32 39.32 0 0 1-18.77-23.52 40 40 0 0 0-76.82 0 39.3 39.3 0 0 1-18.73 23.51A36 36 0 0 0 102 217.17a68.14 68.14 0 0 1 51.95 0 36 36 0 0 0 31.23-64.79ZM168 212a27.8 27.8 0 0 1-11-2.23 76.16 76.16 0 0 0-58.11 0A27.72 27.72 0 0 1 88 212a28 28 0 0 1-13.29-52.65 47.23 47.23 0 0 0 22.56-28.29 32 32 0 0 1 61.46 0 47.26 47.26 0 0 0 22.6 28.3A28 28 0 0 1 168 212Z"
}));
var _default = exports.default = PawPrint;