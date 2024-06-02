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
const Wrench = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wrench-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M223.05 70.5a4 4 0 0 0-6.42-1.44l-41.82 38.6L153 103l-4.68-21.79 38.6-41.82a4 4 0 0 0-1.44-6.43A68 68 0 0 0 98.94 126L36.4 180l-.21.2a28 28 0 0 0 39.6 39.6l.2-.21 54-62.54A68 68 0 0 0 228 96a67.51 67.51 0 0 0-4.95-25.5ZM160 156a60 60 0 0 1-29-7.47 4 4 0 0 0-5 .89l-56 64.83A20 20 0 0 1 41.75 186l64.82-56a4 4 0 0 0 .89-5 60 60 0 0 1 69.46-86.59l-35.87 38.88a4 4 0 0 0-1 3.55l5.66 26.35a4 4 0 0 0 3.07 3.07l26.35 5.66a4 4 0 0 0 3.55-1l38.87-35.87A60.05 60.05 0 0 1 160 156Z"
}));
var _default = exports.default = Wrench;