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
const Hammer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hammer-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m250.18 105.17-63.47-63.92a100.11 100.11 0 0 0-141.43 0l-.13.14-13.78 14.22a12 12 0 1 0 17.24 16.7l13.71-14.15a75.68 75.68 0 0 1 15.17-11.73L119 88l-93.15 93.16a20 20 0 0 0 0 28.29l20.69 20.69a20 20 0 0 0 28.28 0L168 137l1.51 1.51 23.65 23.66a20 20 0 0 0 28.29 0l28.69-28.7a20 20 0 0 0 .04-28.3ZM60.68 210.34l-15-15L108 133l15 15ZM140 131l-15-15 19.51-19.51a12 12 0 0 0 0-17l-42.27-42.25a75.94 75.94 0 0 1 67.47 20.95l31.44 31.67L178 113l-1.51-1.51a12 12 0 0 0-17 0Zm67.32 11.31L195 130l23.09-23.09 12.3 12.39Z"
}));
var _default = exports.default = Hammer;