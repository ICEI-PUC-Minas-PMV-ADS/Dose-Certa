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
const LineSegments = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "line-segments-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M57 183a24 24 0 1 1-34 0 24 24 0 0 1 34 0ZM79 79a24 24 0 1 0 34 0 24 24 0 0 0-34 0Zm64 64a24 24 0 1 0 34 0 24 24 0 0 0-34 0Zm90-104a24 24 0 1 0 0 34 24 24 0 0 0 0-34Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238.64 33.36a32 32 0 0 0-45.26 0 32 32 0 0 0 0 45.26c.29.29.6.57.9.85l-26.63 49.46a32.19 32.19 0 0 0-23.9 3.5l-20.18-20.18a32 32 0 0 0-50.2-38.89 32 32 0 0 0 0 45.26c.29.29.59.57.89.85l-26.63 49.47a32 32 0 0 0-30.27 8.44 32 32 0 1 0 45.26 0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4 32.4 0 0 0 96 128a32 32 0 0 0 16.25-4.41l20.18 20.18a32 32 0 1 0 50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33 32.33 0 0 0 216 88a32 32 0 0 0 22.63-54.62ZM51.3 211.33a16 16 0 0 1-22.63-22.64 16 16 0 1 1 22.63 22.64Zm33.38-104a16 16 0 0 1 0-22.63 16 16 0 1 1 0 22.63Zm86.64 64a16 16 0 0 1-22.63-22.63 16 16 0 0 1 22.63 22.63Zm56-104a16 16 0 1 1-22.62-22.66 16 16 0 0 1 22.63 22.64Z"
}));
var _default = exports.default = LineSegments;