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
const Volleyball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "volleyball-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm83.37 135.89a90 90 0 0 1-97.85 3.18L131.46 134h86.34a89.49 89.49 0 0 1-6.43 27.89ZM88.3 47.24a89.54 89.54 0 0 1 27.35-8.39A90 90 0 0 1 167.34 122h-35.88ZM217.8 122h-38.46a102.12 102.12 0 0 0-40.84-83.38A90.15 90.15 0 0 1 217.8 122ZM77.92 53.26l19.21 33.27a102.16 102.16 0 0 0-51.79 77.06A89.93 89.93 0 0 1 77.92 53.26ZM57 183.19a90 90 0 0 1 46.17-86.26l17.9 31.07-43.15 74.74A90.59 90.59 0 0 1 57 183.19ZM128 218a89.5 89.5 0 0 1-39.7-9.24l19.22-33.29a102.13 102.13 0 0 0 92.58 6.34A89.91 89.91 0 0 1 128 218Z"
}));
var _default = exports.default = Volleyball;