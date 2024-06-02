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
const SoundcloudLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "soundcloud-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M20 120v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0Zm28-28a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4Zm32-8a4 4 0 0 0-4 4v104a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4Zm32-32a4 4 0 0 0-4 4v136a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4Zm107.27 57.46A76 76 0 0 0 144 44a4 4 0 0 0 0 8 67.75 67.75 0 0 1 67.66 61.13 4 4 0 0 0 3.22 3.53A36 36 0 0 1 208 188h-64a4 4 0 0 0 0 8h64a44 44 0 0 0 11.27-86.54Z"
}));
var _default = exports.default = SoundcloudLogo;