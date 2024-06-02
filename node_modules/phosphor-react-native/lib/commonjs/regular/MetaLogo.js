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
const MetaLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "meta-logo__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 149.31c0 16.11-3.17 29.89-9.17 39.84-7.43 12.33-19 18.85-33.39 18.85-27.94 0-47.78-37-68.78-76.22C111.64 100 92.35 64 74 64c-9.38 0-19.94 10-28.25 26.67A138.18 138.18 0 0 0 32 149.31c0 13.2 2.38 24.12 6.88 31.58S49.82 192 58.56 192c15.12 0 30.85-24.54 44.23-48.55a8 8 0 0 1 14 7.8C101.46 178.71 83.07 208 58.56 208c-14.41 0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84a154.81 154.81 0 0 1 15.42-65.77C42.82 60.62 57.94 48 74 48c27.94 0 47.77 37 68.78 76.22C159.79 156 179.08 192 197.44 192c8.74 0 15.18-3.63 19.68-11.11s6.88-18.38 6.88-31.58a138.18 138.18 0 0 0-13.74-58.64C202 74 191.39 64 182 64c-8.36 0-17.68 7.48-28.51 22.88a8 8 0 1 1-13.08-9.21c9-12.74 23-29.67 41.59-29.67 16.05 0 31.17 12.62 42.57 35.54A154.81 154.81 0 0 1 240 149.31Z"
}));
var _default = exports.default = MetaLogo;