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
  className: "puzzle-piece-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M218.14 161.93a4 4 0 0 0-3.86-.24 24 24 0 0 1-34.23-23.25 24 24 0 0 1 34.23-20.13 4 4 0 0 0 5.72-3.61V72a12 12 0 0 0-12-12h-41a32 32 0 1 0-62.91-10.33A32.57 32.57 0 0 0 105 60H64a12 12 0 0 0-12 12v37a32 32 0 1 0-10.33 62.91A32.28 32.28 0 0 0 52 171v37a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-42.69a4 4 0 0 0-1.86-3.38ZM212 208a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-42.69a4 4 0 0 0-1.86-3.38 4 4 0 0 0-3.85-.24 24 24 0 0 1-34.24-20.13 24 24 0 0 1 34.24-23.25A4 4 0 0 0 60 114.7V72a4 4 0 0 1 4-4h46.69a4 4 0 0 0 3.62-5.71 24 24 0 0 1 20.13-34.24 24 24 0 0 1 23.25 34.24 4 4 0 0 0 3.62 5.71H208a4 4 0 0 1 4 4v37a32.57 32.57 0 0 0-10.33-.94A32 32 0 1 0 212 171Z"
}));
var _default = exports.default = PuzzlePiece;