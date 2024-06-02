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
const Confetti = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "confetti-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M108.66 55.46a11.79 11.79 0 0 0-19.43 4.31l-52.5 144.38a11.81 11.81 0 0 0 11 15.85 11.88 11.88 0 0 0 4.08-.73l144.38-52.5a11.79 11.79 0 0 0 4.31-19.43Zm-6.53 137-38.61-38.59 16.19-44.51 66.92 66.93Zm-53 19.28a3.81 3.81 0 0 1-4.87-4.87l16.27-44.72 33.32 33.32Zm146.8-55.25a3.77 3.77 0 0 1-2.42 2.74l-38.56 14-72.23-72.16 14-38.56a3.77 3.77 0 0 1 2.74-2.42 4.32 4.32 0 0 1 .85-.09 3.65 3.65 0 0 1 2.69 1.12L194.88 153a3.78 3.78 0 0 1 1.03 3.51ZM220 24c0 9.68-5.85 28-28 28-8.31 0-14.18 3.29-17.42 9.79A26.12 26.12 0 0 0 172 72a4 4 0 0 1-8 0 34.06 34.06 0 0 1 3.42-13.79C170.66 51.73 177.56 44 192 44c19.29 0 20-18 20-20a4 4 0 0 1 4-4 4 4 0 0 1 4 4Zm-80 16V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0Zm94.83 85.17a4 4 0 0 1-5.66 5.66l-16-16a4 4 0 0 1 5.66-5.66Zm6.43-49.37-24 8a4 4 0 0 1-1.26.2 4 4 0 0 1-1.27-7.79l24-8a4 4 0 0 1 2.53 7.59Z"
}));
var _default = exports.default = Confetti;