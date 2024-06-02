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
const AirplaneInFlight = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-in-flight-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 216a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm24-80v24a4 4 0 0 1-4 4H61.06a35.79 35.79 0 0 1-34.48-25.66L12.52 91.45A12 12 0 0 1 24 76h8a4 4 0 0 1 2.83 1.17L57.66 100h29.7L76.63 67.79A12 12 0 0 1 88 52h8a4 4 0 0 1 2.83 1.17L145.66 100H208a36 36 0 0 1 36 36Zm-8 0a28 28 0 0 0-28-28h-64a4 4 0 0 1-2.83-1.17L94.35 60H88a4 4 0 0 0-3.8 5.26l12.5 37.48a4 4 0 0 1-3.79 5.26H56a4 4 0 0 1-2.82-1.17L30.35 84H24a4 4 0 0 0-3.83 5.15l14.07 46.9A27.83 27.83 0 0 0 61.06 156H236Z"
}));
var _default = exports.default = AirplaneInFlight;