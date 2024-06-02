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
const SpeakerSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "speaker-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38l36 39.5L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84 3.92 3.92 0 0 0 1.76-.41A4 4 0 0 0 156 224v-59.25l49 53.94a4 4 0 1 0 5.92-5.38ZM28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4Zm120 55.82L84 166V90l2.35-1.83L148 156Zm41-69.3a28 28 0 0 0 0-37 4 4 0 1 1 6-5.29 36 36 0 0 1 0 47.59 4 4 0 1 1-6-5.29Zm-80-81.07a4 4 0 0 1 .7-5.61l39.85-31A4 4 0 0 1 156 32v74.83a4 4 0 0 1-8 0V40.18l-33.39 26a4 4 0 0 1-5.61-.73ZM244 128a75.88 75.88 0 0 1-19.35 50.67 4 4 0 0 1-6-5.34 68 68 0 0 0 0-90.66 4 4 0 0 1 6-5.34A75.88 75.88 0 0 1 244 128Z"
}));
var _default = exports.default = SpeakerSlash;