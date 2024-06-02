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
const CameraSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "camera-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38L60.78 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h151l6.08 6.69a4 4 0 1 0 5.92-5.38Zm97.58 119.23A31.69 31.69 0 0 1 128 164a32 32 0 0 1-22.48-54.78ZM48 204a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h20l32.09 35.3a40 40 0 0 0 53.79 59.16L191.69 204ZM228 80v106a4 4 0 0 1-8 0V80a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.32-1.78L157.85 44H98.13l-.82 1.23a4 4 0 1 1-6.65-4.44l2-3A4 4 0 0 1 96 36h64a4 4 0 0 1 3.33 1.78L178.13 60H208a20 20 0 0 1 20 20Z"
}));
var _default = exports.default = CameraSlash;