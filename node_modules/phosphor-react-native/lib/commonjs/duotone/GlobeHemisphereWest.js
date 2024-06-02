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
const GlobeHemisphereWest = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-hemisphere-west-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.09 172.48a96 96 0 0 1-80.41 51.41l3.17-16.44a8 8 0 0 0-2-6.95l-19.74-20.33a8 8 0 0 1-1.44-8.69l13.7-30.74a8 8 0 0 1 8.38-4.67l22.82 3.08a8.11 8.11 0 0 1 3.12 1.11ZM116.71 95 129 88.24a7.46 7.46 0 0 0 1.5-1.07l26.91-24.33A8 8 0 0 0 159 53l-10.5-18.81A96.62 96.62 0 0 0 128 32a95.61 95.61 0 0 0-60.22 21.23L56 81.08a8 8 0 0 0-.12 5.92l11.5 30.67a8 8 0 0 0 5.81 5l2.69.58L89.2 100a8 8 0 0 1 6.94-4h16.71a7.9 7.9 0 0 0 3.86-1Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm88 104a87.62 87.62 0 0 1-6.4 32.94l-44.7-27.49a15.92 15.92 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.62 16.62 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128Zm-72.69-86.66L152 56.9l-26.91 24.34L112.85 88H96.14a16 16 0 0 0-13.88 8l-8.73 15.23-10.15-27.04 10.94-25.87a87.87 87.87 0 0 1 69-17ZM40 128a87.53 87.53 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61 3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14 19.61 20.2-1.94 10A88.11 88.11 0 0 1 40 128Zm102.58 86.78 1.13-5.81a16.09 16.09 0 0 0-4-13.9 1.85 1.85 0 0 1-.14-.14L120 174.74 133.7 144l22.82 3.08 45.72 28.12a88.18 88.18 0 0 1-59.66 39.58Z"
}));
var _default = exports.default = GlobeHemisphereWest;