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
const Spade = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spade-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M179.84 51.39a284.14 284.14 0 0 0-49.16-32.76 6 6 0 0 0-5.36 0 284.14 284.14 0 0 0-49.16 32.76C42.88 79.13 26 107.59 26 136a54 54 0 0 0 75.24 49.65l-11 36.63A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-11-36.63A54 54 0 0 0 230 136c0-28.41-16.88-56.87-50.16-84.61ZM176 178a42 42 0 0 1-27.6-10.34 6 6 0 0 0-9.69 6.24l13.23 44.1h-47.88l13.23-44.1a6 6 0 0 0-9.69-6.24A42 42 0 0 1 38 136c0-53.73 74.77-97 90-105.22C143.24 39 218 82.2 218 136a42 42 0 0 1-42 42Z"
}));
var _default = exports.default = Spade;