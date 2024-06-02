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
const Plug = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plug-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234.83 69.17a4 4 0 0 0-5.66 0L192 106.34 149.66 64l37.17-37.17a4 4 0 1 0-5.66-5.66L144 58.34l-29.17-29.17a4 4 0 0 0-5.66 5.66l9.17 9.17-55.8 55.8a36.05 36.05 0 0 0 0 50.91l18.55 18.54-51.92 51.92a4 4 0 0 0 5.66 5.66l51.92-51.92 18.54 18.55a36.06 36.06 0 0 0 50.91 0l55.8-55.8 9.17 9.17a4 4 0 0 0 5.66-5.66L197.66 112l37.17-37.17a4 4 0 0 0 0-5.66ZM150.54 187.8a28 28 0 0 1-39.59 0L68.2 145.05a28 28 0 0 1 0-39.59l55.8-55.8L206.34 132Z"
}));
var _default = exports.default = Plug;