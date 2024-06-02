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
const Dna = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dna-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M196 204.5V232a4 4 0 0 1-8 0v-27.5a67.62 67.62 0 0 0-37.59-60.82L102 119.48a75.6 75.6 0 0 1-42-68V24a4 4 0 0 1 8 0v27.5a67.62 67.62 0 0 0 37.59 60.82l48.4 24.2A75.6 75.6 0 0 1 196 204.5Zm-36-.5H68a67.74 67.74 0 0 1 4.59-24h75.51a4 4 0 0 0 0-8H76.3a67.91 67.91 0 0 1 19.45-22.31 4 4 0 0 0-4.75-6.45 76.26 76.26 0 0 0-31 61.26V232a4 4 0 0 0 8 0v-20h92a4 4 0 0 0 0-8Zm32-184a4 4 0 0 0-4 4v20H96a4 4 0 0 0 0 8h92a67.74 67.74 0 0 1-4.59 24h-75.52a4 4 0 1 0 0 8h71.81a67.91 67.91 0 0 1-19.45 22.31 4 4 0 0 0 4.74 6.45A76.26 76.26 0 0 0 196 51.5V24a4 4 0 0 0-4-4Z"
}));
var _default = exports.default = Dna;