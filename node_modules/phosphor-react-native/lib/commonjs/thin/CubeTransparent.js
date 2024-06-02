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
const CubeTransparent = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cube-transparent-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.92 95.22a1.8 1.8 0 0 0-.1-.33 3.38 3.38 0 0 0-.13-.42 2.58 2.58 0 0 0-.19-.37c-.06-.11-.11-.22-.17-.32a3.62 3.62 0 0 0-.5-.6l-56-56a2.32 2.32 0 0 0-.33-.27A4 4 0 0 0 160 36H40a4 4 0 0 0-4 4v120a4 4 0 0 0 .9 2.5 2.32 2.32 0 0 0 .27.33l56 56A4 4 0 0 0 96 220h120a4 4 0 0 0 4-4V96a4.13 4.13 0 0 0-.08-.78ZM164 49.66 206.34 92H164ZM92 206.34 49.66 164H92ZM92 156H44V49.66l48 48ZM49.66 44H156v48H97.66ZM156 100v56h-56v-56Zm-56 112v-48h58.34l48 48Zm112-5.66-48-48V100h48Z"
}));
var _default = exports.default = CubeTransparent;