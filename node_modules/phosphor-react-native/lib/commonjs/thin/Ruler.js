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
const Ruler = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ruler-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232.49 76.2 179.8 23.51a12 12 0 0 0-17 0L23.51 162.83a12 12 0 0 0 0 17l52.69 52.66a12 12 0 0 0 17 0L232.49 93.17a12 12 0 0 0 0-16.97Zm-5.66 11.31L87.51 226.83a4 4 0 0 1-5.65 0l-52.69-52.69a4 4 0 0 1 0-5.65L64 133.66l29.17 29.17a4 4 0 1 0 5.66-5.66L69.65 128 96 101.66l29.17 29.17a4 4 0 0 0 5.66-5.66L101.65 96 128 69.66l29.17 29.17a4 4 0 1 0 5.66-5.66L133.66 64l34.83-34.83a4 4 0 0 1 5.65 0l52.69 52.69a4 4 0 0 1 0 5.65Z"
}));
var _default = exports.default = Ruler;