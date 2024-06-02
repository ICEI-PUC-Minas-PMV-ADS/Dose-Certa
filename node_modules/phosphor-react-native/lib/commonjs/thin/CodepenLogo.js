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
const CodepenLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "codepen-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234 92.55s-.05 0-.09-.07l-104-56a4 4 0 0 0-3.8 0l-104 56-.11.08A4 4 0 0 0 20 96v64a4 4 0 0 0 2 3.45.71.71 0 0 0 .09.07l104 56a4 4 0 0 0 3.8 0l104-56a.27.27 0 0 0 .08-.07 4 4 0 0 0 2-3.45V96a4 4 0 0 0-1.97-3.45Zm-6 60.75L181 128l47-25.3Zm-55.43-29.84L132 101.61V46.7L223.56 96Zm-44.57 24L91.87 128 128 108.54 164.13 128ZM124 46.7v54.91l-40.57 21.85L32.44 96Zm-96 56L75 128l-47 25.3Zm55.43 29.84L124 154.39v54.91L32.44 160ZM132 209.3v-54.91l40.57-21.85 51 27.46Z"
}));
var _default = exports.default = CodepenLogo;