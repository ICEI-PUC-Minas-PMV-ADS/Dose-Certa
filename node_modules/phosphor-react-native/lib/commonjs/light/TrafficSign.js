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
  className: "traffic-sign-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M241.74 117.71 138.29 14.26a14.56 14.56 0 0 0-20.58 0L14.26 117.71a14.56 14.56 0 0 0 0 20.58l103.45 103.45a14.56 14.56 0 0 0 20.58 0l103.45-103.45a14.56 14.56 0 0 0 0-20.58Zm-8.49 12.1L129.81 233.25a2.56 2.56 0 0 1-3.62 0L22.75 129.81a2.56 2.56 0 0 1 0-3.62L126.19 22.75a2.56 2.56 0 0 1 3.62 0l103.44 103.44a2.56 2.56 0 0 1 0 3.62Zm-61-14a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L153.51 126H112a18 18 0 0 0-18 18v8a6 6 0 0 1-12 0v-8a30 30 0 0 1 30-30h41.51l-13.75-13.76a6 6 0 0 1 8.48-8.48Z"
}));
var _default = exports.default = TrafficSign;