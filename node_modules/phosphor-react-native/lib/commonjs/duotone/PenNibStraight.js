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
const PenNibStraight = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pen-nib-straight-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M215.17 127.43 184 72H72l-31.17 55.43a8 8 0 0 0 .73 8.29L128 248l86.43-112.28a8 8 0 0 0 .74-8.29ZM128 152a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.9V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.92l-30.14 53.59c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14 86.44 112.28a8 8 0 0 0 12.67 0l86.43-112.28.11-.14a15.92 15.92 0 0 0 1.45-16.57ZM176 32v32H80V32Zm-48 112a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm8 80.5v-65.67a28 28 0 1 0-16 0v65.66L48 131l28.69-51h102.63L208 131Z"
}));
var _default = exports.default = PenNibStraight;