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
  className: "dna-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204 204.5V232a12 12 0 0 1-24 0v-27.5a59.68 59.68 0 0 0-33.17-53.67l-48.4-24.2A83.54 83.54 0 0 1 52 51.5V24a12 12 0 0 1 24 0v27.5a59.68 59.68 0 0 0 33.17 53.67l48.4 24.2A83.54 83.54 0 0 1 204 204.5Zm-52-.5H76a59.75 59.75 0 0 1 2.34-16h56.2a12 12 0 0 0 0-24H91.76c1-1.1 2-2.18 3.13-3.21a12 12 0 0 0-16.45-17.48A84.38 84.38 0 0 0 52 204.5V232a12 12 0 0 0 24 0v-4h76a12 12 0 0 0 0-24Zm40-192a12 12 0 0 0-12 12v4h-76a12 12 0 0 0 0 24h76a59.75 59.75 0 0 1-2.34 16h-56.22a12 12 0 0 0 0 24h42.8c-1 1.1-2 2.18-3.13 3.21a12 12 0 0 0 16.45 17.48A84.38 84.38 0 0 0 204 51.5V24a12 12 0 0 0-12-12Z"
}));
var _default = exports.default = Dna;