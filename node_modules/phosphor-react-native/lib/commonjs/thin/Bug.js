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
const Bug = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bug-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M148 92a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm-48-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm144 44a4 4 0 0 1-4 4h-28v12a83.64 83.64 0 0 1-3.87 25.2l25.47 11.13A4 4 0 0 1 232 188a4.09 4.09 0 0 1-1.6-.33l-25-10.95a84 84 0 0 1-154.72 0l-25 10.95A4.09 4.09 0 0 1 24 188a4 4 0 0 1-1.6-7.67l25.47-11.13A83.64 83.64 0 0 1 44 144v-12H16a4 4 0 0 1 0-8h28v-12a83.64 83.64 0 0 1 3.87-25.2L22.4 75.67a4 4 0 0 1 3.2-7.34l25 11a84 84 0 0 1 154.72 0l25-11a4 4 0 1 1 3.2 7.34L208.13 86.8A83.64 83.64 0 0 1 212 112v12h28a4 4 0 0 1 4 4Zm-192-4h152v-12a76 76 0 0 0-152 0Zm72 95.89V132H52v12a76.09 76.09 0 0 0 72 75.89ZM204 132h-72v87.89A76.09 76.09 0 0 0 204 144Z"
}));
var _default = exports.default = Bug;