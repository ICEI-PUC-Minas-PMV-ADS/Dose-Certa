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
const StarAndCrescent = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-and-crescent-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 206.4a88 88 0 1 1 0-156.8 88 88 0 0 0 0 156.8Zm65.06-91.75L214.39 80l-21.8 26.4L160 98.33 177.46 128 160 157.67l32.59-8.07 21.8 26.4 2.67-34.65L248 128Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M155.64 199.28a80 80 0 0 1 0-142.56 8 8 0 0 0 0-14.25A94.93 94.93 0 0 0 112 32a96 96 0 0 0 0 192 94.93 94.93 0 0 0 43.64-10.47 8 8 0 0 0 0-14.25ZM112 208a80 80 0 1 1 22.4-156.84 96.08 96.08 0 0 0 0 153.68A79.82 79.82 0 0 1 112 208Zm139.17-87.35-26.5-11.43-2.31-29.84a8 8 0 0 0-14.14-4.47l-18.59 22.51-27.71-6.85a8 8 0 0 0-8.81 11.82L168.18 128l-15.07 25.61a8 8 0 0 0 8.81 11.82l27.71-6.85 18.59 22.51a8 8 0 0 0 14.14-4.47l2.31-29.84 26.5-11.43a8 8 0 0 0 0-14.7ZM213.89 134a8 8 0 0 0-4.8 6.73l-1.15 14.89-9.18-11.11a8 8 0 0 0-6.17-2.91 8.4 8.4 0 0 0-1.92.23l-14.12 3.5 7.81-13.27a8 8 0 0 0 0-8.12l-7.81-13.27 14.12 3.5a8 8 0 0 0 8.09-2.68l9.18-11.11 1.15 14.89a8 8 0 0 0 4.8 6.73l13.92 6Z"
}));
var _default = exports.default = StarAndCrescent;