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
const HandHeart = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-heart-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53l-11.95 2.75C223.26 121.88 236 100.58 236 80c0-24.26-19.5-44-43.46-44A43.41 43.41 0 0 0 156 55.44 43.41 43.41 0 0 0 119.46 36C95.5 36 76 55.74 76 80c0 11.85 4.11 23.44 12.81 36a27.8 27.8 0 0 0-18.67 8.17L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a4.69 4.69 0 0 0 .6-.2l38.82-16.54.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM119.46 44a35.15 35.15 0 0 1 32.84 21.52 4 4 0 0 0 7.4 0A35.15 35.15 0 0 1 192.54 44C211.76 44 228 60.49 228 80c0 21.27-16.13 44-47.94 67.61L160.75 152a23.76 23.76 0 0 0 3.25-12 24 24 0 0 0-24-24H98.69C88.69 103 84 91.5 84 80c0-19.51 16.24-36 35.46-36ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4Zm209.13-28.17-38.41 16.37-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a3.94 3.94 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Z"
}));
var _default = exports.default = HandHeart;