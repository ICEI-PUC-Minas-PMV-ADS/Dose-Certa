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
  className: "spade-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M178.56 52.93a281.08 281.08 0 0 0-48.77-32.51 4 4 0 0 0-3.58 0 281.08 281.08 0 0 0-48.77 32.51C45.1 79.88 28 108.61 28 136a52 52 0 0 0 76.46 45.89l-12.29 41A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-12.29-41A52 52 0 0 0 228 136c0-27.39-17.1-56.12-49.44-83.07ZM176 180a44 44 0 0 1-28.92-10.84 4 4 0 0 0-6.46 4.17l14 46.67h-53.24l14-46.67a4 4 0 0 0-6.46-4.17A44 44 0 0 1 36 136c0-56.06 79-100.56 92-107.49 13 6.93 92 51.38 92 107.49a44.05 44.05 0 0 1-44 44Z"
}));
var _default = exports.default = Spade;