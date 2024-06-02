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
const NyTimesLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ny-times-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 138a10 10 0 1 1-10 10 10 10 0 0 1 10-10Zm13.46-36.56-66.22-30.91A74 74 0 0 0 54 144v.66l71.16-37.95A6 6 0 0 1 134 112v105.76a73.63 73.63 0 0 0 64.61-51.56 6 6 0 0 1 11.45 3.6A86 86 0 1 1 54.57 99.23 34 34 0 0 1 68 34a6 6 0 0 1 2.54.56L189.26 90A22 22 0 0 0 188 46a6 6 0 0 1 0-12 34 34 0 0 1 0 68 6 6 0 0 1-2.54-.56ZM102 213.27a73.47 73.47 0 0 0 20 4.47V122l-20 10.67Zm-46.73-55.68A74.22 74.22 0 0 0 90 207.47v-68.4Zm46.14-95.38L66.74 46a22 22 0 0 0-4.93 43.05c.86-1 1.75-2.06 2.67-3.07a86 86 0 0 1 36.93-23.77Z"
}));
var _default = exports.default = NyTimesLogo;