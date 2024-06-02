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
  className: "airplane-in-flight-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222 216a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6Zm24-80v24a6 6 0 0 1-6 6H61.07a37.77 37.77 0 0 1-36.4-27.08L10.6 92A14 14 0 0 1 24 74h8a6 6 0 0 1 4.24 1.76L58.49 98h26.1l-9.86-29.57A14 14 0 0 1 88 50h8a6 6 0 0 1 4.25 1.76L146.49 98H208a38 38 0 0 1 38 38Zm-12 0a26 26 0 0 0-26-26h-64a6 6 0 0 1-4.24-1.76L93.52 62H88a2 2 0 0 0-1.9 2.63l12.5 37.47a6 6 0 0 1-5.69 7.9H56a6 6 0 0 1-4.24-1.76L29.52 86H24a1.93 1.93 0 0 0-1.6.81 1.91 1.91 0 0 0-.31 1.76l14.06 46.9A25.86 25.86 0 0 0 61.07 154H234Z"
}));
var _default = exports.default = AirplaneInFlight;