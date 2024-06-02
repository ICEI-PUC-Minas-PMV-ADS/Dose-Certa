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
const GasCan = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gas-can-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 28h-76.69a12 12 0 0 0-8.48 3.51l-13.17 13.18-13.17-13.18a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l13.2 13.15-13.17 13.17a11.9 11.9 0 0 0-3.52 8.48V216a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12ZM53.17 66.83a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 0L96 50.34 66.34 80ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V107.31a4 4 0 0 1 1.17-2.82l16-16 35.31-35.31 16-16a4 4 0 0 1 2.83-1.18H200a4 4 0 0 1 4 4ZM180 64a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4Zm-1.6 59.2L134.67 156l43.73 32.8a4 4 0 0 1-4.8 6.4L128 161l-45.6 34.2a4 4 0 0 1-4.8-6.4l43.73-32.8-43.73-32.8a4 4 0 0 1 4.8-6.4L128 151l45.6-34.2a4 4 0 1 1 4.8 6.4Z"
}));
var _default = exports.default = GasCan;