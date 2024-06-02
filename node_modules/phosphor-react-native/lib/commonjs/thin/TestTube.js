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
const TestTube = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "test-tube-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m234.83 89.18-60-60a4 4 0 0 0-5.66 0L39.94 158.41a40.78 40.78 0 0 0 57.66 57.67L210.16 103.5l23.1-7.7a4 4 0 0 0 1.57-6.62ZM91.94 210.42a32.77 32.77 0 1 1-46.34-46.35L75 134.63c9.2-3.38 23.94-5.08 43.11 4.93 12.09 6.31 22.74 8.48 31.66 8.48 1.64 0 3.2-.09 4.73-.22Zm114.8-114.21a4.06 4.06 0 0 0-1.57 1L165 137.39c-9.2 3.38-23.94 5.08-43.11-4.93-14.3-7.47-26.58-9.13-36.38-8.27L172 37.66l52.6 52.6Z"
}));
var _default = exports.default = TestTube;