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
const Balloon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "balloon-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 18a86.1 86.1 0 0 0-86 86c0 23 9.24 48.52 24.71 68.27 12.37 15.79 27.23 26.42 43.05 31.07l-11.27 26.3A6 6 0 0 0 104 238h48a6 6 0 0 0 5.51-8.36l-11.27-26.3c15.82-4.65 30.68-15.28 43-31.07C204.76 152.52 214 127 214 104a86.1 86.1 0 0 0-86-86Zm-15.83 186 .58.14a2.05 2.05 0 0 1-.58-.14Zm30.73 22h-29.8l8.7-20.31a62.15 62.15 0 0 0 12.4 0ZM128 194c-33.52 0-74-40.15-74-90a74 74 0 0 1 148 0c0 49.85-40.48 90-74 90Zm49-92.08a6.74 6.74 0 0 1-1 .08 6 6 0 0 1-5.91-5A43.29 43.29 0 0 0 135 61.92a6 6 0 1 1 2-11.84A55.48 55.48 0 0 1 181.92 95a6 6 0 0 1-4.92 6.92Z"
}));
var _default = exports.default = Balloon;