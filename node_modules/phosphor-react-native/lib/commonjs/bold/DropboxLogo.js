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
const DropboxLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dropbox-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238.83 146.13 201.08 120l37.75-26.13a12 12 0 0 0 0-19.74l-52-36a12 12 0 0 0-13.66 0L128 69.41 82.83 38.13a12 12 0 0 0-13.66 0l-52 36a12 12 0 0 0 0 19.74L54.92 120l-37.75 26.13a12 12 0 0 0 0 19.74l52 36a12 12 0 0 0 13.66 0L128 170.59l45.17 31.28a12 12 0 0 0 13.66 0l52-36a12 12 0 0 0 0-19.74ZM128 141.41 97.08 120 128 98.59 158.92 120Zm52-78.81L210.92 84 180 105.4 149.08 84Zm-104 0L106.92 84 76 105.4 45.08 84Zm0 114.8L45.08 156 76 134.6l30.92 21.4Zm104 0L149.08 156 180 134.6l30.92 21.4Zm-25.27 32.09a12 12 0 0 1-3 16.7l-16.86 11.68a12 12 0 0 1-13.66 0l-16.86-11.68A12 12 0 1 1 118 206.46l10 6.94 10-6.94a12 12 0 0 1 16.73 3.03Z"
}));
var _default = exports.default = DropboxLogo;