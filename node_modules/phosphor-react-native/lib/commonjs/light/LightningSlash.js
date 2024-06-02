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
const LightningSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lightning-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l40.49 44.58-40.44 43.33a6 6 0 0 0 2.28 9.71l59.23 22.21-15 75a6 6 0 0 0 3.14 6.52A6.07 6.07 0 0 0 96 246a6 6 0 0 0 4.39-1.91l63.34-67.87L203.56 220a6 6 0 0 0 8.88-8.08ZM106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85 33.64-36 63.48 69.83Zm4-150.91a6 6 0 0 1-.29-8.48l45.88-49.16a6 6 0 0 1 10.27 5.27l-15 75 59.23 22.21a6 6 0 0 1 2.28 9.71L190.08 148a6 6 0 1 1-8.77-8.19l16.18-17.33-55.6-20.85a6 6 0 0 1-3.77-6.8L150 35.54l-31.5 33.71a6 6 0 0 1-8.5.3Z"
}));
var _default = exports.default = LightningSlash;