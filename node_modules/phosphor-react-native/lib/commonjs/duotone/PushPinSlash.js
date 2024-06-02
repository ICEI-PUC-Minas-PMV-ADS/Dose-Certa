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
const PushPinSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "push-pin-slash-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m229.66 98.34-57.27 57.46c11.46 22.93-1.72 45.86-10.11 57a8 8 0 0 1-12 .83L42.34 105.76A8 8 0 0 1 43 93.85c29.65-23.92 57.4-10 57.4-10l57.27-57.46a8 8 0 0 1 11.31 0L229.66 87a8 8 0 0 1 0 11.34Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M53.92 34.62a8 8 0 1 0-11.84 10.76L67.37 73.2A69.82 69.82 0 0 0 38 87.63a16 16 0 0 0-1.29 23.78L85 159.71l-42.66 42.63a8 8 0 0 0 11.32 11.32L96.29 171l48.29 48.29A16 16 0 0 0 155.9 224h1.13a15.93 15.93 0 0 0 11.64-6.33 89.75 89.75 0 0 0 11.58-20.27l21.84 24a8 8 0 1 0 11.84-10.76ZM155.9 208 48 100.08c10.23-8.25 21.2-12.36 32.66-12.27l87.16 95.88c-2.23 9.87-7.58 18.54-11.92 24.31Zm79.42-104-44.64 44.79a8 8 0 1 1-11.33-11.3L224 92.7 163.32 32 122.1 73.35a8 8 0 0 1-11.33-11.29L152 20.7a16 16 0 0 1 22.63 0l60.69 60.68a16 16 0 0 1 0 22.62Z"
}));
var _default = exports.default = PushPinSlash;