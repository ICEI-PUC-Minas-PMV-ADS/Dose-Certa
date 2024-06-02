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
const Bone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bone-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230.14 62.17A33.88 33.88 0 0 0 206 50a34 34 0 1 0-62.81 20 2 2 0 0 1-.23 2.54L72.56 143a2.06 2.06 0 0 1-2.55.23A34 34 0 1 0 50 206a34 34 0 1 0 62.81-20 2 2 0 0 1 .23-2.54l70.4-70.4a2 2 0 0 1 2.54-.23 34 34 0 0 0 44.15-50.65Zm-9.54 36.31a22 22 0 0 1-28.24 4.17 14 14 0 0 0-17.4 1.92L104.57 175a14 14 0 0 0-1.92 17.4 22 22 0 1 1-40.41 8.26 6 6 0 0 0-5.93-6.93 7.28 7.28 0 0 0-.93.07 22 22 0 1 1 8.26-40.41A14 14 0 0 0 81 151.43L151.43 81a14 14 0 0 0 1.92-17.4 22 22 0 1 1 40.41-8.26 6 6 0 0 0 6.86 6.86 22 22 0 0 1 20 36.24Z"
}));
var _default = exports.default = Bone;