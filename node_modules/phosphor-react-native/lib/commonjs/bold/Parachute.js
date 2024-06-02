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
const Parachute = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "parachute-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 120A108.12 108.12 0 0 0 128 12 108.12 108.12 0 0 0 20 120a12 12 0 0 0 3.85 8.79l.22.2c.17.15.35.31.54.45l.19.16L116 198v14h-4a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24h-4v-14l91.2-68.4a12 12 0 0 0 4.8-9.6Zm-24.85-12h-31.52c-1.79-29.27-10-50.53-18.93-65.36A84.27 84.27 0 0 1 211.15 108Zm-110.73 0C103.15 68.76 119 48.11 128 39.38c9 8.73 24.85 29.38 27.58 68.62ZM95.3 42.64c-9 14.83-17.14 36.09-18.93 65.36H44.85A84.27 84.27 0 0 1 95.3 42.64ZM68 132h48v36Zm72 0h48l-48 36Z"
}));
var _default = exports.default = Parachute;