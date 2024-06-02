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
const ThermometerCold = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "thermometer-cold-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m247.67 73.92-25.2 8.18L238 103.54a4 4 0 1 1-6.47 4.7L216 86.81l-15.57 21.43a4 4 0 0 1-3.24 1.65 4 4 0 0 1-3.23-6.35l15.57-21.44-25.2-8.18a4 4 0 1 1 2.47-7.61l25.2 8.18V48a4 4 0 0 1 8 0v26.49l25.2-8.18a4 4 0 1 1 2.47 7.61ZM148 184a28 28 0 1 1-32-27.71V120a4 4 0 0 1 8 0v36.29A28 28 0 0 1 148 184Zm-8 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm40 0a60 60 0 1 1-96-48V48a36 36 0 0 1 72 0v88a60.06 60.06 0 0 1 24 48Zm-8 0a52.06 52.06 0 0 0-22.29-42.68A4 4 0 0 1 148 138V48a28 28 0 0 0-56 0v90a4 4 0 0 1-1.71 3.28A52 52 0 1 0 172 184Z"
}));
var _default = exports.default = ThermometerCold;