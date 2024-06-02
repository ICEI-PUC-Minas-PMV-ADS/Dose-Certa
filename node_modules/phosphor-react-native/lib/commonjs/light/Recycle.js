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
  className: "recycle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M94 208a6 6 0 0 1-6 6H40a22 22 0 0 1-19-33l36.71-63.44-18.76 5a6 6 0 0 1-3.1-11.6l32.77-8.77a6 6 0 0 1 7.38 4.26l8.8 32.76a6 6 0 0 1-4.24 7.35 6.09 6.09 0 0 1-1.56.21 6 6 0 0 1-5.79-4.45l-5-18.8L31.38 187A10 10 0 0 0 40 202h48a6 6 0 0 1 6 6Zm141-27-23.14-40a6 6 0 0 0-10.38 6l23.14 40a10 10 0 0 1-8.62 15h-73.52l13.76-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L142.48 214H216a22 22 0 0 0 19-33ZM136.65 35l36.72 63.44-18.76-5A6 6 0 0 0 151.5 105l32.78 8.79a6 6 0 0 0 7.34-4.25l8.79-32.78a6 6 0 1 0-11.58-3.11l-5.05 18.82L147 29a22 22 0 0 0-38 0L85.8 69a6 6 0 0 0 10.39 6l23.16-40a10 10 0 0 1 17.3 0Z"
}));
var _default = exports.default = Recycle;