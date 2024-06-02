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
const Recycle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "recycle-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100 208a12 12 0 0 1-12 12H40a28 28 0 0 1-24.23-42l29.45-50.88-4.76 1.27a12 12 0 1 1-6.2-23.18l32.77-8.77a12 12 0 0 1 14.69 8.48l8.79 32.77a12 12 0 1 1-23.17 6.22L66.08 139l-29.5 51a4 4 0 0 0 3.42 6h48a12 12 0 0 1 12 12Zm28-172a3.87 3.87 0 0 1 3.46 2l29.45 50.87-4.75-1.27a12 12 0 1 0-6.16 23.18l32.77 8.79a12 12 0 0 0 14.69-8.48l8.74-32.79a12 12 0 1 0-23.2-6.22l-1.31 4.86L152.23 26a28 28 0 0 0-48.46 0L80.61 66a12 12 0 1 0 20.77 12l23.16-40a3.87 3.87 0 0 1 3.46-2Zm112.19 142-23.14-40a12 12 0 1 0-20.77 12l23.14 40a4 4 0 0 1-3.46 6H157l3.51-3.51a12 12 0 1 0-17-17l-24 24a12 12 0 0 0 0 17l24 24a12 12 0 1 0 17-17L157 220h59a28 28 0 0 0 24.23-42Z"
}));
var _default = exports.default = Recycle;