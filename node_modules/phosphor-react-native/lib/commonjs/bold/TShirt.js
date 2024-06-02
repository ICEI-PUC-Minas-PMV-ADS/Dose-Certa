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
const TShirt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "t-shirt-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m246.17 57.9-48.08-28.25A11.9 11.9 0 0 0 192 28h-32a12 12 0 0 0-12 12 20 20 0 0 1-40 0 12 12 0 0 0-12-12H64a11.9 11.9 0 0 0-6.07 1.66L9.83 57.9A20.18 20.18 0 0 0 2 84l17.9 36.8A19.62 19.62 0 0 0 37.67 132H52v76a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-76h14.32a19.64 19.64 0 0 0 17.75-11.17L254 84a20.18 20.18 0 0 0-7.83-26.1ZM40.37 108 25.16 76.73 52 61v47ZM180 204H76V52h9.67a44 44 0 0 0 84.68 0H180Zm35.62-96H204V61l26.83 15.76Z"
}));
var _default = exports.default = TShirt;