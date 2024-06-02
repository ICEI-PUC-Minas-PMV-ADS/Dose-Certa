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
const Airplane = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233.79 132.42 156 93.53V48a28 28 0 0 0-56 0v45.53l-77.79 38.89A4 4 0 0 0 20 136v32a4 4 0 0 0 4.78 3.92l75.22-15v25.46l-14.83 14.79A4 4 0 0 0 84 200v32a4 4 0 0 0 5.49 3.71l38.51-15.4 38.51 15.4a3.87 3.87 0 0 0 1.49.29 3.94 3.94 0 0 0 2.24-.69A4 4 0 0 0 172 232v-32a4 4 0 0 0-1.17-2.83L156 182.34v-25.46l75.22 15A4 4 0 0 0 236 168v-32a4 4 0 0 0-2.21-3.58Zm-5.79 30.7-75.22-15A4 4 0 0 0 148 152v32a4 4 0 0 0 1.17 2.83L164 201.66v24.43l-34.51-13.8a4 4 0 0 0-3 0L92 226.09v-24.43l14.83-14.83A4 4 0 0 0 108 184v-32a4 4 0 0 0-4.78-3.92L28 163.12v-24.65l77.79-38.89A4 4 0 0 0 108 96V48a20 20 0 0 1 40 0v48a4 4 0 0 0 2.21 3.58L228 138.47Z"
}));
var _default = exports.default = Airplane;