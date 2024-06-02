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
const MicrosoftTeamsLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "microsoft-teams-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.26 80h-7.57A31.71 31.71 0 0 0 216 64a32 32 0 0 0-45.88-28.85A40 40 0 0 0 96.81 64H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h36.67a64 64 0 0 0 118.7-.15A40 40 0 0 0 232 152V92.74A12.76 12.76 0 0 0 219.26 80ZM136 32a24 24 0 0 1 15.07 42.68A16 16 0 0 0 136 64h-22.62A24 24 0 0 1 136 32ZM88 160a8 8 0 0 1-8-8v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16h-8v40a8 8 0 0 1-8 8Zm96 8a48 48 0 0 1-89.56 24H136a16 16 0 0 0 16-16V96h32Zm0-88h-16a39.89 39.89 0 0 0 7.6-29.6A16 16 0 1 1 184 80Zm32 72a24 24 0 0 1-16.36 22.75A62.76 62.76 0 0 0 200 168V96h16Z"
}));
var _default = exports.default = MicrosoftTeamsLogo;