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
const Pinwheel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pinwheel-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m229.66 218.34-48.42-48.41c1.1-.33 2.19-.68 3.27-1.07A60 60 0 0 0 220.37 92a8 8 0 0 0-10.25-4.78l-44.2 16.08c.32-.62.64-1.24.93-1.88A60 60 0 0 0 92 19.65a8 8 0 0 0-4.82 10.25l16.09 44.22c-.63-.32-1.25-.65-1.89-1a60 60 0 0 0-81.73 74.89 8 8 0 0 0 10.25 4.78l44.2-16.09c-.32.63-.64 1.25-.93 1.89a60 60 0 0 0 74.89 81.73 8 8 0 0 0 4.78-10.25l-16.08-44.18c.62.31 1.24.62 1.88.91a59.87 59.87 0 0 0 22.48 5.58l57.22 57.23a8 8 0 0 0 11.32-11.32ZM109 203.87a44 44 0 0 1-3.73-77.81l29.6 81.33a43.6 43.6 0 0 1-25.87-3.52Zm43.4-109.25A43.77 43.77 0 0 1 134.8 114l-29.61-81.37a44 44 0 0 1 47.16 62Z"
}));
var _default = exports.default = Pinwheel;