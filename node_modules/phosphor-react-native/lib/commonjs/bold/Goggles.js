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
const Goggles = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "goggles-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 60H76a76.08 76.08 0 0 0-76 76v4a24 24 0 0 0 13.74 21.69c3.15 8.71 10.51 16.75 21.52 23.27 11.52 6.81 25.6 11 36.74 11a44.06 44.06 0 0 0 42.32-32h27.36A44.06 44.06 0 0 0 184 196c18.53 0 50.62-12.81 58.31-34.33A24 24 0 0 0 256 140v-4a76.08 76.08 0 0 0-76-76ZM76 84h104a52.07 52.07 0 0 1 51.13 42.6 65 65 0 0 0-10.39-7.6c-11.52-6.81-25.6-11-36.74-11a44.06 44.06 0 0 0-42.32 32h-27.36A44.06 44.06 0 0 0 72 108c-13.4 0-33.9 6.71-47.13 18.56A52.08 52.08 0 0 1 76 84Zm-4 88c-14.13 0-36-12.15-36-20 0-2.74 3.55-7.61 11.48-12.3 9-5.32 18.8-7.7 24.52-7.7a20 20 0 0 1 0 40Zm136.52-7.7c-9 5.32-18.8 7.7-24.52 7.7a20 20 0 0 1 0-40c14.13 0 36 12.15 36 20 0 2.74-3.55 7.61-11.48 12.3Z"
}));
var _default = exports.default = Goggles;