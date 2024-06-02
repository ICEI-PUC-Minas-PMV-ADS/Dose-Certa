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
const HandsPraying = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-praying-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m232.49 182.83-37-37-36.7-121.21A17.77 17.77 0 0 0 128 18.56a17.77 17.77 0 0 0-30.79 6.06L60.46 145.88l-36.95 37a12 12 0 0 0 0 17l32.69 32.61a12 12 0 0 0 17 0l48.28-48.29a36 36 0 0 0 6.55-8.94 36 36 0 0 0 6.55 8.94l48.28 48.29a12 12 0 0 0 17 0l32.69-32.69a12 12 0 0 0-.06-16.97Zm-165 44a4 4 0 0 1-5.66 0l-32.66-32.68a4 4 0 0 1 0-5.66L44.68 173 83 211.32Zm48.29-48.28-27.1 27.11-38.34-38.34 16.48-16.49a3.92 3.92 0 0 0 1-1.67l37-122.22A9.78 9.78 0 0 1 124 29.78v129a27.81 27.81 0 0 1-8.2 19.77Zm16.2-19.8v-129a9.78 9.78 0 0 1 19.14-2.84l37 122.22a3.92 3.92 0 0 0 1 1.67l17.38 17.38-39.18 37.51-27.12-27.14a27.81 27.81 0 0 1-8.2-19.8Zm94.83 35.4-32.68 32.68a4 4 0 0 1-5.66 0L173 211.38l39.18-37.51 14.61 14.62a4 4 0 0 1 .04 5.66Z"
}));
var _default = exports.default = HandsPraying;