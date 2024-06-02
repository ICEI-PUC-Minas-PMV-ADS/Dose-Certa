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
  className: "skull-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24c-53 0-96 41.19-96 92 0 34.05 19.31 63.78 48 79.69V216a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-20.31c28.69-15.91 48-45.64 48-79.69 0-50.81-43-92-96-92ZM92 152a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 104a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm72-40a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12ZM128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-15.72C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100Zm44.12 172.69a8 8 0 0 0-4.12 7V216h-16v-24a8 8 0 0 0-16 0v24h-16v-24a8 8 0 0 0-16 0v24H88v-20.31a8 8 0 0 0-4.12-7C56.81 173.69 40 145.84 40 116c0-46.32 39.48-84 88-84s88 37.68 88 84c0 29.83-16.81 57.69-43.88 72.69Z"
}));
var _default = exports.default = Skull;