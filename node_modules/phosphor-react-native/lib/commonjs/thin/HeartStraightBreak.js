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
const HeartStraightBreak = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "heart-straight-break-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.21 59.8a54.06 54.06 0 0 0-76.34 0L128 75l-15.82-15.2a54 54 0 0 0-76.4 76.35l89.37 90.66a4 4 0 0 0 5.7 0l89.36-90.64a54.07 54.07 0 0 0 0-76.37Zm-5.68 70.74L128 218.3l-86.55-87.78a46 46 0 0 1 65.13-65l15.65 15.07-13 12.52A4 4 0 0 0 108 96a4 4 0 0 0 1.17 2.86L138.35 128l-13.18 13.17a4 4 0 1 0 5.66 5.66l16-16a4 4 0 0 0 0-5.66L117.71 96l31.77-30.58a46 46 0 1 1 65.05 65.08Z"
}));
var _default = exports.default = HeartStraightBreak;