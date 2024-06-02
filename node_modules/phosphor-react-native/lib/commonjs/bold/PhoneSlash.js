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
const PhoneSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "phone-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56.9 31.93a12 12 0 1 0-17.75 16.14L63 74.36a147.07 147.07 0 0 0-41.43 29c-21.45 21.46-23.52 53.1-5 77A20 20 0 0 0 32.38 188a19.81 19.81 0 0 0 7.12-1.32l48.9-17.35.45-.17A19.94 19.94 0 0 0 101 154.5l5.44-27.22c1.22-.38 2.47-.72 3.72-1l88.91 97.83a12 12 0 1 0 17.75-16.14Zm26.5 88.36L78 147.57l-44.16 15.65c-9.16-13.84-7.41-30.76 4.73-42.9a121.58 121.58 0 0 1 41.5-27.22L92.74 107a20.06 20.06 0 0 0-9.34 13.29Zm156 60a19.89 19.89 0 0 1-11.24 7.19 12 12 0 0 1-6.95-22.92c10.21-14.07 8.75-31.71-3.79-44.25C194.77 97.65 164 84.76 130.91 84a12 12 0 0 1 .27-24h.27c39.33.87 75.89 16.25 102.94 43.31 21.45 21.5 23.52 53.14 5.02 76.99Z"
}));
var _default = exports.default = PhoneSlash;