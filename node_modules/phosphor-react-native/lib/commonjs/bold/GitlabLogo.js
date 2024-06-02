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
const GitlabLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gitlab-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234 116.09 214.13 40a15.94 15.94 0 0 0-30.42-1.48L167 84H89L72.29 38.49A15.94 15.94 0 0 0 41.87 40L22 116.09a61.19 61.19 0 0 0 23.57 65.23l73.27 51.77a15.93 15.93 0 0 0 18.36 0l73.27-51.77A61.19 61.19 0 0 0 234 116.09ZM58.61 70.86l10.76 29.28A12 12 0 0 0 80.64 108h94.72a12 12 0 0 0 11.27-7.86l10.76-29.28 9.14 35L128 161.31l-78.53-55.48ZM44 131.37 107.2 176l-13.79 9.74-34-24A36.86 36.86 0 0 1 44 131.37Zm84 78.82-13.79-9.75L128 190.7l13.79 9.74Zm68.6-48.47-34 24-13.8-9.72 63.2-44.63a36.86 36.86 0 0 1-15.4 30.35Z"
}));
var _default = exports.default = GitlabLogo;