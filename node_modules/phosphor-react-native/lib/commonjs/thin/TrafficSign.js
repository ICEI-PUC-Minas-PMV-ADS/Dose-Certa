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
const TrafficSign = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "traffic-sign-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240.32 119.12 136.88 15.68a12.55 12.55 0 0 0-17.76 0L15.68 119.12a12.55 12.55 0 0 0 0 17.76l103.44 103.44a12.55 12.55 0 0 0 17.76 0l103.44-103.44a12.55 12.55 0 0 0 0-17.76Zm-5.66 12.1L131.22 234.67a4.56 4.56 0 0 1-6.44 0L21.33 131.22a4.55 4.55 0 0 1 0-6.44L124.78 21.33a4.56 4.56 0 0 1 6.44 0l103.45 103.45a4.55 4.55 0 0 1 0 6.44Zm-63.83-14a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L158.34 124H112a20 20 0 0 0-20 20v8a4 4 0 0 1-8 0v-8a28 28 0 0 1 28-28h46.34l-17.17-17.17a4 4 0 0 1 5.66-5.66Z"
}));
var _default = exports.default = TrafficSign;