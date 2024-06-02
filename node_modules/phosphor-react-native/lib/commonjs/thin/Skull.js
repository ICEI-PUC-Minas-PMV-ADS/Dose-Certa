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
const Skull = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "skull-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 108a24 24 0 1 0 24 24 24 24 0 0 0-24-24Zm0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm72-40a24 24 0 1 0 24 24 24 24 0 0 0-24-24Zm0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16ZM128 20C72.86 20 28 63.07 28 116c0 33.43 18.33 64.64 48 82v18a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-18c29.67-17.38 48-48.59 48-82 0-52.93-44.86-96-100-96Zm46.06 172.19a4 4 0 0 0-2.06 3.5V216a4 4 0 0 1-4 4h-20v-28a4 4 0 0 0-8 0v28h-24v-28a4 4 0 0 0-8 0v28H88a4 4 0 0 1-4-4v-20.31a4 4 0 0 0-2.06-3.5C53.6 176.48 36 147.29 36 116c0-48.52 41.27-88 92-88s92 39.48 92 88c0 31.29-17.6 60.48-45.94 76.19Z"
}));
var _default = exports.default = Skull;