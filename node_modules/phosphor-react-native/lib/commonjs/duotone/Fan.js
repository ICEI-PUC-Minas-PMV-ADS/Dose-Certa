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
const Fan = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fan-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136.5 150.45A52 52 0 1 1 33 155.13l71.91-20.54A24 24 0 0 0 128 152a23.75 23.75 0 0 0 8.5-1.56Zm-32.19-26.31a24 24 0 0 1 29.52-19.42L152 32.17a52 52 0 1 0-47.69 92ZM201 105.5a52 52 0 0 0-57.84 3.91 24 24 0 0 1 2.06 35.26l53.74 52a52 52 0 0 0 2-91.2Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68 60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32 60 60 0 0 0 44.42 60.66 60.52 60.52 0 0 0 15.62 2.07 60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135Zm-121-7a16 16 0 1 1 16 16 16 16 0 0 1-16-16ZM80 76a44 44 0 0 1 62.75-39.82L127.77 96a32 32 0 0 0-27.92 16.8A43.85 43.85 0 0 1 80 76Zm27 119.57a44 44 0 0 1-65.86-34.43l59.31-16.94A32 32 0 0 0 128 160h.91A43.82 43.82 0 0 1 107 195.57Zm106.17-23a43.92 43.92 0 0 1-13 14.14l-44.32-42.89a31.91 31.91 0 0 0-.59-32.57 44 44 0 0 1 57.91 61.32Z"
}));
var _default = exports.default = Fan;