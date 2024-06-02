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
  className: "push-pin-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38L75.35 76c-9.93.88-22.26 4.54-34.87 14.71a12 12 0 0 0-1 17.84l51.13 51.13-45.44 45.49a4 4 0 0 0 5.66 5.66l45.46-45.47 51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74 81.06 81.06 0 0 0 13.19-25.55l26.37 29a4 4 0 1 0 5.92-5.38Zm108.08 173.11a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c14.08-11.36 27.62-13.5 37-13.12l89.69 98.65c-2.12 11.46-8.19 21.46-13.11 27.96Zm73.41-109.25L187.85 146a4 4 0 0 1-5.67-5.64l44.65-44.8a4 4 0 0 0 0-5.66l-60.68-60.73a4 4 0 0 0-5.66 0l-41.22 41.36a4 4 0 0 1-5.67-5.65l41.23-41.36a12 12 0 0 1 17 0l60.66 60.68a12 12 0 0 1 0 16.97Z"
}));
var _default = exports.default = PushPinSlash;