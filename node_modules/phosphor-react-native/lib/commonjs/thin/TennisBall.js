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
const TennisBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tennis-ball-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M198.74 57.29A99.39 99.39 0 0 0 128 28h-.19a100 100 0 1 0 70.93 29.29ZM62.92 63a91.38 91.38 0 0 1 60.8-26.85 91.31 91.31 0 0 1-26.85 60.74 91.44 91.44 0 0 1-60.77 26.84A91.61 91.61 0 0 1 62.92 63Zm-26.83 68.74a99.36 99.36 0 0 0 66.44-29.2 99.25 99.25 0 0 0 29.21-66.45 91.9 91.9 0 0 1 88.17 88.17 100 100 0 0 0-95.65 95.65 91.9 91.9 0 0 1-88.17-88.17Zm157 61.31a91.38 91.38 0 0 1-60.8 26.85 92 92 0 0 1 87.62-87.63 91.61 91.61 0 0 1-26.83 60.78Z"
}));
var _default = exports.default = TennisBall;