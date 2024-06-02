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
const Hammer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hammer-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m249.92 113.4-67.45-67.91a94.12 94.12 0 0 0-133 .06L35.68 59.78a6 6 0 0 0 8.63 8.35L58 54a82 82 0 0 1 20.55-15l49 49-97.46 97.4a14 14 0 0 0 0 19.81l20.69 20.69a14 14 0 0 0 19.8 0L168 128.46l33.42 33.42a14 14 0 0 0 19.8 0l28.68-28.69a14 14 0 0 0 .02-19.79ZM62.1 217.41a2 2 0 0 1-2.83 0l-20.69-20.69a2 2 0 0 1 0-2.83L108 124.46 131.51 148Zm101.66-101.68L140 139.49 116.48 116l23.76-23.76a6 6 0 0 0 0-8.49L90.54 34A82.07 82.07 0 0 1 174 54l45.62 45.93L188 131.49l-15.76-15.76a6 6 0 0 0-8.48 0Zm77.66 9-28.69 28.7a2 2 0 0 1-2.83 0L196.49 140l31.56-31.57 13.37 13.46a2 2 0 0 1 0 2.81Z"
}));
var _default = exports.default = Hammer;