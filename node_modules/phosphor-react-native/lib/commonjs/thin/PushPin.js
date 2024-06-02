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
const PushPin = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "push-pin-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232.49 84.2 171.8 23.51a12 12 0 0 0-17 0L99.45 79.07c-8.08-3-32.79-9.45-59 11.67a12 12 0 0 0-1 17.84l51.13 51.13-45.41 45.46a4 4 0 0 0 5.66 5.66l45.46-45.47 51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74c19.83-26.36 16.51-47.18 11.71-58.57l55.3-55.49a12 12 0 0 0 0-17Zm-5.66 11.31L169.56 153a4 4 0 0 0-.75 4.61c10.43 20.85-1.62 42-9.73 52.83a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c12.94-10.4 25.36-13.19 34.94-13.19a43.9 43.9 0 0 1 18.16 3.64 4 4 0 0 0 4.62-.75l57.27-57.46a4 4 0 0 1 5.66 0l60.68 60.69a4 4 0 0 1 0 5.65Z"
}));
var _default = exports.default = PushPin;