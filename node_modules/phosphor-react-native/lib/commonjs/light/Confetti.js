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
const Confetti = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "confetti-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M110.08 54a13.8 13.8 0 0 0-22.73 5.05l-52.5 144.42A13.82 13.82 0 0 0 47.76 222a14 14 0 0 0 4.77-.85l144.38-52.5a13.8 13.8 0 0 0 5-22.73ZM48.43 209.87a1.79 1.79 0 0 1-2.3-2.3l15.18-41.77 28.89 28.88Zm54.21-19.71-36.8-36.81L80.51 113 143 175.49ZM194 156.07a1.74 1.74 0 0 1-1.14 1.3L155.44 171 85 100.55l13.63-37.36a1.72 1.72 0 0 1 1.3-1.14 1.58 1.58 0 0 1 .41 0 1.72 1.72 0 0 1 1.25.53l91.88 91.88a1.73 1.73 0 0 1 .53 1.61ZM162 72a35.52 35.52 0 0 1 3.63-14.68C170.57 47.44 179.93 42 192 42c7.47 0 12.53-2.74 15.48-8.38A24.18 24.18 0 0 0 210 24a6 6 0 0 1 6-6 6 6 0 0 1 6 6c0 10.38-6.27 30-30 30-7.47 0-12.53 2.74-15.48 8.38A24 24 0 0 0 174 72a6 6 0 0 1-6 6 6 6 0 0 1-6-6Zm-24-32V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0Zm98.24 83.76a6 6 0 1 1-8.48 8.48l-16-16a6 6 0 0 1 8.48-8.48Zm5.66-46.07-24 8a6 6 0 1 1-3.8-11.38l24-8a6 6 0 0 1 3.8 11.38Z"
}));
var _default = exports.default = Confetti;