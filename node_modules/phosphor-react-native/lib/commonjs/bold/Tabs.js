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
const Tabs = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tabs-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M255.49 164.55v-.06a.29.29 0 0 0 0-.09L233.2 90.25A19.87 19.87 0 0 0 214.05 76H204a12 12 0 0 0 0 24h7.07l16.8 56h-30.94L177.2 90.25A19.87 19.87 0 0 0 158.05 76H148a12 12 0 0 0 0 24h7.07l16.8 56h-30.94L121.2 90.25A19.87 19.87 0 0 0 102.05 76H42a19.87 19.87 0 0 0-19.2 14.25L.55 164.4a.29.29 0 0 0 0 .09v.06a5.68 5.68 0 0 0-.16.62A12 12 0 0 0 12 180h232a12 12 0 0 0 11.49-15.45ZM44.93 100h54.14l16.8 56H28.13Z"
}));
var _default = exports.default = Tabs;