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
const Scales = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scales-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m237.57 133.77-32-80a6 6 0 0 0-6.86-3.63L134 64.52V40a6 6 0 0 0-12 0v27.19l-67.3 15a6 6 0 0 0-4.27 3.63l-32 80A6.1 6.1 0 0 0 18 168c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23L64.19 92.33 122 79.48V210h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12h-18V76.81l56.21-12.49-27.78 69.45A6.1 6.1 0 0 0 162 136c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23ZM56 186a36.89 36.89 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91 26 64.91C81.06 182.85 62.58 186 56 186Zm144-32a36.89 36.89 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91 26 64.91C225.06 150.85 206.58 154 200 154Z"
}));
var _default = exports.default = Scales;