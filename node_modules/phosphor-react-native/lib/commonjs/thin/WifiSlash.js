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
const WifiSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wifi-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8ZM51 37.31a4 4 0 0 0-6 5.38l19.72 21.65a167.64 167.64 0 0 0-43.26 25.75 4 4 0 1 0 5.08 6.19 159.4 159.4 0 0 1 43.93-25.62l29.64 32.61a120.12 120.12 0 0 0-46.6 22.64 4 4 0 0 0 5 6.27 112 112 0 0 1 47.85-22.07L142 149.37a72.6 72.6 0 0 0-14-1.37 71.49 71.49 0 0 0-42.36 13.77A4 4 0 0 0 88 169a4.07 4.07 0 0 0 2.36-.76 64 64 0 0 1 62.11-7.38L205 218.69a4 4 0 1 0 5.92-5.38Zm183.54 52.78A168.33 168.33 0 0 0 128 52a171.08 171.08 0 0 0-21.5 1.36 4 4 0 0 0 1 7.94A162.68 162.68 0 0 1 128 60a160.22 160.22 0 0 1 101.46 36.28 4 4 0 0 0 5.08-6.19Zm-37 42.09a4 4 0 1 0 5-6.27 120.17 120.17 0 0 0-50.06-23.42 4 4 0 1 0-1.62 7.83 112.18 112.18 0 0 1 46.66 21.86Z"
}));
var _default = exports.default = WifiSlash;