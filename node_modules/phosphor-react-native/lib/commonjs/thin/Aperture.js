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
const Aperture = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "aperture-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29Zm10.37 114.27-61-11.14L210.4 87a92.26 92.26 0 0 1-1.32 84.52ZM95.87 122.13 117 97.24l32.14 5.86 11 30.77L139 158.76l-32.14-5.86Zm110.37-42.55-40.13 47.25-32.36-90.63a92.09 92.09 0 0 1 72.49 43.38ZM63 63a91.31 91.31 0 0 1 62.26-26.88L146 94.41l-94.68-17.3A92.94 92.94 0 0 1 63 63ZM47 84.49l61 11.14L45.6 169a92.26 92.26 0 0 1 1.32-84.52Zm2.84 92 40.13-47.25 32.36 90.63a92.09 92.09 0 0 1-72.49-43.38Zm143.29 16.63A91.31 91.31 0 0 1 130.87 220L110 161.59l94.72 17.3a92.94 92.94 0 0 1-11.67 14.16Z"
}));
var _default = exports.default = Aperture;