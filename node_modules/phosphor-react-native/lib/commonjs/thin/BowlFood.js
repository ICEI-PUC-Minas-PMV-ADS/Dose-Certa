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
const BowlFood = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bowl-food-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 108h-12.1a84 84 0 0 0-167.8 0H32a4 4 0 0 0-4 4 100.32 100.32 0 0 0 56 89.82V208a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 112a4 4 0 0 0-4-4Zm-20.11 0h-62.84a75.92 75.92 0 0 1 50.16-38.14A75.45 75.45 0 0 1 203.89 108ZM186 62.93A83.92 83.92 0 0 0 132.08 108h-37.4A76.22 76.22 0 0 1 168 52c2.33 0 4.68.13 7 .34a76.81 76.81 0 0 1 11 10.59ZM128 36a75.48 75.48 0 0 1 34.3 8.21A84.26 84.26 0 0 0 86.41 108h-34.3A76.09 76.09 0 0 1 128 36Zm38.33 159.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.33 92.33 0 0 1 36.09 116h183.82a92.33 92.33 0 0 1-53.58 79.66Z"
}));
var _default = exports.default = BowlFood;