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
const BaseballCap = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baseball-cap-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28A100.12 100.12 0 0 0 28 128v56a20 20 0 0 0 31.84 16.12C72.46 191 94.53 180 128 180s55.54 10.94 68.16 20.12a20 20 0 0 0 21 1.67A19.87 19.87 0 0 0 228 184v-56A100.12 100.12 0 0 0 128 28Zm92 100v16.23a162.31 162.31 0 0 0-48.67-22.47 162.56 162.56 0 0 0-34.15-85.31A92.12 92.12 0 0 1 220 128Zm-56.9-8.26a166.58 166.58 0 0 0-70.2 0C97.64 76.93 120 47.31 128 38c8 9.32 30.36 38.93 35.1 81.75Zm-44.28-83.28a162.56 162.56 0 0 0-34.15 85.31A162.31 162.31 0 0 0 36 144.24V128a92.12 92.12 0 0 1 82.82-91.54Zm94.66 158.21a11.88 11.88 0 0 1-12.61-1C187.29 183.78 163.62 172 128 172s-59.29 11.77-72.87 21.65a11.88 11.88 0 0 1-12.61 1A11.75 11.75 0 0 1 36 184v-30a156 156 0 0 1 184 0v30a11.75 11.75 0 0 1-6.52 10.67Z"
}));
var _default = exports.default = BaseballCap;