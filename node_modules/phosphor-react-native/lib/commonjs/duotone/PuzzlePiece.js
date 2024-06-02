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
const PuzzlePiece = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "puzzle-piece-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204 168a28 28 0 0 0 12-2.69V208a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-42.69a28 28 0 1 1 0-50.62V72a8 8 0 0 1 8-8h46.69a28 28 0 1 1 50.61 0H208a8 8 0 0 1 8 8v42.69A28 28 0 1 0 204 168Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.27 158.54a8 8 0 0 0-7.7-.46 20 20 0 1 1 0-36.16 8 8 0 0 0 11.43-7.23V72a16 16 0 0 0-16-16h-36.22a35.36 35.36 0 0 0 .22-4 36.15 36.15 0 0 0-11.36-26.25 36 36 0 0 0-60.55 23.63 36.56 36.56 0 0 0 .14 6.62H64a16 16 0 0 0-16 16v32.22a35.36 35.36 0 0 0-4-.22 36.12 36.12 0 0 0-26.24 11.36 35.7 35.7 0 0 0-9.69 27 36.08 36.08 0 0 0 33.31 33.6 36.56 36.56 0 0 0 6.62-.14V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.69a8 8 0 0 0-3.73-6.77ZM208 208H64v-42.69a8 8 0 0 0-11.43-7.23 20 20 0 1 1 0-36.16A8 8 0 0 0 64 114.69V72h46.69a8 8 0 0 0 7.23-11.43 20 20 0 1 1 36.16 0A8 8 0 0 0 161.31 72H208v32.23a35.68 35.68 0 0 0-6.62-.14A36 36 0 0 0 204 176a35.36 35.36 0 0 0 4-.22Z"
}));
var _default = exports.default = PuzzlePiece;