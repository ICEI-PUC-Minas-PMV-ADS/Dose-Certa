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
const Basketball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basketball-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M63.6 46.39a103.48 103.48 0 0 1 52-21.65 4 4 0 0 1 4.45 4V120H95.7a103.77 103.77 0 0 0-32.32-67.56 4 4 0 0 1 .22-6.05ZM46 64.07a103.51 103.51 0 0 0-21.29 51.46 4 4 0 0 0 4 4.47h50.92a87.86 87.86 0 0 0-27.74-56.41 4 4 0 0 0-5.89.48Zm146.4-17.68a103.48 103.48 0 0 0-52-21.65 4 4 0 0 0-4.45 4V120h24.3a103.77 103.77 0 0 1 32.32-67.56 4 4 0 0 0-.17-6.05Zm38.86 69.14A103.51 103.51 0 0 0 210 64.07a4 4 0 0 0-5.86-.48A87.86 87.86 0 0 0 176.37 120h50.91a4 4 0 0 0 3.98-4.47ZM24.74 140.47A103.51 103.51 0 0 0 46 191.93a4 4 0 0 0 5.86.48A87.86 87.86 0 0 0 79.63 136H28.72a4 4 0 0 0-3.98 4.47ZM210 191.93a103.51 103.51 0 0 0 21.29-51.46 4 4 0 0 0-4-4.47h-50.92a87.86 87.86 0 0 0 27.74 56.41 4 4 0 0 0 5.89-.48ZM63.6 209.61a103.48 103.48 0 0 0 52 21.65 4 4 0 0 0 4.45-4V136H95.7a103.77 103.77 0 0 1-32.32 67.56 4 4 0 0 0 .22 6.05ZM160.3 136H136v91.28a4 4 0 0 0 4.45 4 103.48 103.48 0 0 0 52-21.65 4 4 0 0 0 .22-6.05A103.77 103.77 0 0 1 160.3 136Z"
}));
var _default = exports.default = Basketball;