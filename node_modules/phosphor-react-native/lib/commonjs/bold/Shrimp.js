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
const Shrimp = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shrimp-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 60a32 32 0 0 0-32-32h-84a4 4 0 0 1-4-4 12 12 0 0 0-24 0 28 28 0 0 0 28 28h84a8 8 0 0 1 0 16H96.9c-46.47 0-84.56 37.4-84.9 83.37A84 84 0 0 0 96 236h56a12 12 0 0 0 0-24h-28v-16h44a12 12 0 0 0 0-24h-56a8 8 0 0 1 0-16h40a76.1 76.1 0 0 0 75.58-68.07A32 32 0 0 0 244 60ZM96.9 92h3.1v42.34a32.2 32.2 0 0 0-12.65 9.27l-44-20A61.19 61.19 0 0 1 96.9 92ZM36 151.54c0-1.61.11-3.21.25-4.79l43.87 19.94a30.18 30.18 0 0 0 .66 4.29L51.31 192A59.54 59.54 0 0 1 36 151.54ZM96 212a59.8 59.8 0 0 1-24.23-5.09l22.66-16.18a32.47 32.47 0 0 0 5.57 2.93V212Zm56-80h-28V92h78.6a52.08 52.08 0 0 1-50.6 40Z"
}));
var _default = exports.default = Shrimp;