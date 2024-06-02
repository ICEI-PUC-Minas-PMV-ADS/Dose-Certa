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
const PaintBrushBroad = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-brush-broad-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 28H72a36 36 0 0 0-36 36v72a20 20 0 0 0 20 20h48a4 4 0 0 1 4 4.52l-7.9 46.81a3.79 3.79 0 0 0-.06.67 28 28 0 0 0 56 0 3.79 3.79 0 0 0-.06-.67L148 160.52a4 4 0 0 1 4-4.52h48a20 20 0 0 0 20-20V32a4 4 0 0 0-4-4ZM72 36h108v44a4 4 0 0 0 8 0V36h24v72H44V64a28 28 0 0 1 28-28Zm128 112h-48a12 12 0 0 0-11.88 13.7s0 .06 0 .1l7.88 46.52a20 20 0 0 1-40 0l7.86-46.52v-.1A12 12 0 0 0 104 148H56a12 12 0 0 1-12-12v-20h168v20a12 12 0 0 1-12 12Z"
}));
var _default = exports.default = PaintBrushBroad;