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
const EarSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ear-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.28-11.31a103.18 103.18 0 0 0 11.83-10.77ZM64.2 45.93 53.92 34.62a8 8 0 1 0-11.84 10.76L52.37 56.7A103.18 103.18 0 0 1 64.2 45.93ZM203.63 199.3 64.2 45.93A103.94 103.94 0 0 1 203.63 199.3ZM159 104a32 32 0 0 0-20.08-22.09 8 8 0 0 0-5.45 15 16 16 0 0 1 10 11 8 8 0 0 0 7.74 6 7.68 7.68 0 0 0 2-.26A8 8 0 0 0 159 104Zm33 8a64 64 0 0 0-85.89-60.16 8 8 0 0 0 5.47 15A48 48 0 0 1 176 112a8 8 0 0 0 16 0Zm-44 56a20 20 0 0 1-20-20 24.11 24.11 0 0 1 1-7l-20.45-22.5A7.91 7.91 0 0 1 104 120a8 8 0 0 1-8-8 32 32 0 0 1 .68-6.56L84.39 91.92A47.59 47.59 0 0 0 80 112c0 11.9 6.71 20.5 13.82 29.6 7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29 8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a63.5 63.5 0 0 1 9-32.66L52.37 56.7A103.94 103.94 0 0 0 191.8 210.07l-38.8-42.7a19.82 19.82 0 0 1-5 .63Z"
}));
var _default = exports.default = EarSlash;