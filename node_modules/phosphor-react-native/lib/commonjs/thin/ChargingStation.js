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
const ChargingStation = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "charging-station-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M131.31 125.76a4 4 0 0 1 .4 3.73l-16 40A4 4 0 0 1 112 172a3.91 3.91 0 0 1-1.49-.29 4 4 0 0 1-2.22-5.2l13.8-34.51H96a4 4 0 0 1-3.71-5.49l16-40a4 4 0 1 1 7.42 3L101.91 124H128a4 4 0 0 1 3.31 1.76ZM244 86.63V168a20 20 0 0 1-40 0v-40a12 12 0 0 0-12-12h-20v96h20a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h20V56a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20v52h20a20 20 0 0 1 20 20v40a12 12 0 0 0 24 0V86.63a12 12 0 0 0-3.51-8.49l-19.32-19.31a4 4 0 0 1 5.66-5.66l19.31 19.32A19.85 19.85 0 0 1 244 86.63ZM164 212V56a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v156Z"
}));
var _default = exports.default = ChargingStation;