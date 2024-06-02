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
const Flashlight = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flashlight-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 20H72a12 12 0 0 0-12 12v45.33a12.05 12.05 0 0 0 2.4 7.2l20.8 27.74a4 4 0 0 1 .8 2.4V224a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V114.67a4 4 0 0 1 .8-2.4l20.8-27.74a12.05 12.05 0 0 0 2.4-7.2V32a12 12 0 0 0-12-12ZM72 28h112a4 4 0 0 1 4 4v28H68V32a4 4 0 0 1 4-4Zm115.2 51.73-20.8 27.74a12.05 12.05 0 0 0-2.4 7.2V224a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V114.67a12.05 12.05 0 0 0-2.4-7.2L68.8 79.73a4 4 0 0 1-.8-2.4V68h120v9.33a4 4 0 0 1-.8 2.4ZM132 120v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0Z"
}));
var _default = exports.default = Flashlight;