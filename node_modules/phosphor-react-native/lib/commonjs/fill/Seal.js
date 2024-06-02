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
const Seal = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "seal-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 128c0 10.44-7.51 18.27-14.14 25.18-3.77 3.94-7.67 8-9.14 11.57-1.36 3.27-1.44 8.69-1.52 13.94-.15 9.76-.31 20.82-8 28.51s-18.75 7.85-28.51 8c-5.25.08-10.67.16-13.94 1.52-3.57 1.47-7.63 5.37-11.57 9.14C146.27 232.49 138.44 240 128 240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14-3.27-1.36-8.69-1.44-13.94-1.52-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94-1.47-3.57-5.37-7.63-9.14-11.57C23.51 146.27 16 138.44 16 128s7.51-18.27 14.14-25.18c3.77-3.94 7.67-8 9.14-11.57 1.36-3.27 1.44-8.69 1.52-13.94.15-9.76.31-20.82 8-28.51s18.75-7.85 28.51-8c5.25-.08 10.67-.16 13.94-1.52 3.57-1.47 7.63-5.37 11.57-9.14C109.73 23.51 117.56 16 128 16s18.27 7.51 25.18 14.14c3.94 3.77 8 7.67 11.57 9.14 3.27 1.36 8.69 1.44 13.94 1.52 9.76.15 20.82.31 28.51 8s7.85 18.75 8 28.51c.08 5.25.16 10.67 1.52 13.94 1.47 3.57 5.37 7.63 9.14 11.57C232.49 109.73 240 117.56 240 128Z"
}));
var _default = exports.default = Seal;