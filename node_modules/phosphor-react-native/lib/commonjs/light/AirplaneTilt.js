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
const AirplaneTilt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-tilt-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m183 113.65 30.1-28.32.13-.13a30 30 0 0 0-42.43-42.43l-.13.13L142.35 73l-84.3-30.65a6 6 0 0 0-6.29 1.39l-24 24a6 6 0 0 0 .91 9.26l65.92 43.94L77.52 138H56a6 6 0 0 0-4.24 1.76l-24 24a6 6 0 0 0 2 9.82l37.62 15 15 37.56v.12a6 6 0 0 0 7.81 3.27 5.94 5.94 0 0 0 2.07-1.41l23.91-23.91A6 6 0 0 0 118 200v-21.52l17.07-17.07L179 227.33a6 6 0 0 0 9.23.91l24-24a6 6 0 0 0 1.39-6.29Zm1.94 100.93L141 148.66a6 6 0 0 0-4.4-2.64h-.59a6 6 0 0 0-4.24 1.76l-24 24A6 6 0 0 0 106 176v21.52l-15.8 15.8-12.63-31.55a6 6 0 0 0-3.34-3.35L42.68 165.8 58.49 150H80a6 6 0 0 0 4.25-1.76l24-24a6 6 0 0 0-.92-9.23L41.42 71.06l16.12-16.13L142 85.63a6 6 0 0 0 6.42-1.53l31-32.9a18 18 0 0 1 25.38 25.46l-32.9 31a6 6 0 0 0-1.53 6.42l30.7 84.41Z"
}));
var _default = exports.default = AirplaneTilt;