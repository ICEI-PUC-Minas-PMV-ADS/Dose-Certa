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
const Flame = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flame-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 144a80 80 0 0 1-77.94 80A40 40 0 0 0 168 184c0-40-40-64-40-64s-40 24-40 64a40 40 0 0 0 37.94 40A80 80 0 0 1 48 144c0-72 80-120 80-120s80 48 80 120Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M173.79 51.48a221.25 221.25 0 0 0-41.67-34.34 8 8 0 0 0-8.24 0 221.25 221.25 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52ZM96 184c0-27.67 22.53-47.28 32-54.3 9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0Zm77.27 15.93A47.8 47.8 0 0 0 176 184c0-44-42.09-69.79-43.88-70.86a8 8 0 0 0-8.24 0C122.09 114.21 80 140 80 184a47.8 47.8 0 0 0 2.73 15.93A71.88 71.88 0 0 1 56 144c0-34.41 20.4-63.15 37.52-81.19A216.21 216.21 0 0 1 128 33.54a215.77 215.77 0 0 1 34.48 29.27C193.49 95.5 200 125 200 144a71.88 71.88 0 0 1-26.73 55.93Z"
}));
var _default = exports.default = Flame;