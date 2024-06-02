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
const Basketball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basketball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM60 177.28A83.59 83.59 0 0 1 44.87 140h30.27A83.1 83.1 0 0 1 60 177.28ZM44.87 116A83.59 83.59 0 0 1 60 78.72 83.1 83.1 0 0 1 75.14 116ZM116 211.13a83.63 83.63 0 0 1-39-16.46A106.94 106.94 0 0 0 99.34 140H116Zm0-95.13H99.34A106.94 106.94 0 0 0 77 61.33a83.63 83.63 0 0 1 39-16.46Zm80-37.28A83.59 83.59 0 0 1 211.13 116h-30.27A83.1 83.1 0 0 1 196 78.72Zm-56 132.41V140h16.66A106.94 106.94 0 0 0 179 194.67a83.63 83.63 0 0 1-39 16.46ZM156.66 116H140V44.87a83.63 83.63 0 0 1 39 16.46A106.94 106.94 0 0 0 156.66 116ZM196 177.28A83.1 83.1 0 0 1 180.86 140h30.27A83.59 83.59 0 0 1 196 177.28Z"
}));
var _default = exports.default = Basketball;