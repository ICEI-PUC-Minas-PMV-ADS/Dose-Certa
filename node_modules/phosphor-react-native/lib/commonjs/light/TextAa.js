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
const TextAa = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "text-aa-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M85.43 53.45a6 6 0 0 0-10.86 0l-64 136a6 6 0 1 0 10.86 5.11L38.63 158h82.74l17.2 36.55a6 6 0 1 0 10.86-5.11ZM44.28 146 80 70.09 115.72 146ZM200 98c-12.21 0-21.71 3.28-28.23 9.74a6 6 0 0 0 8.46 8.52c4.18-4.15 10.84-6.26 19.77-6.26 14.34 0 26 9.87 26 22v7.24a40.36 40.36 0 0 0-26-9.24c-20.95 0-38 15.25-38 34s17.05 34 38 34a40.36 40.36 0 0 0 26-9.24V192a6 6 0 0 0 12 0v-60c0-18.75-17-34-38-34Zm0 88c-14.34 0-26-9.87-26-22s11.66-22 26-22 26 9.87 26 22-11.66 22-26 22Z"
}));
var _default = exports.default = TextAa;