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
const YoutubeLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "youtube-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m170.49 117.91-56-36A12 12 0 0 0 96 92v72a12 12 0 0 0 18.49 10.09l56-36a12 12 0 0 0 0-20.18ZM120 142v-28l21.81 14Zm118.21-73.5a28.05 28.05 0 0 0-16.93-19.14C186.4 35.91 131.29 36 128 36s-58.4-.09-93.28 13.38a28.05 28.05 0 0 0-16.93 19.14C15.15 78.72 12 97.32 12 128s3.15 49.28 5.79 59.48a28.05 28.05 0 0 0 16.93 19.14C68.21 219.55 120.36 220 127.37 220h1.26c7 0 59.16-.45 92.65-13.38a28.05 28.05 0 0 0 16.93-19.14c2.64-10.2 5.79-28.8 5.79-59.48s-3.15-49.28-5.79-59.48ZM215 181.46a4 4 0 0 1-2.34 2.77C182.78 195.76 132.27 196 128.32 196h-.39c-.53 0-53.64.17-84.56-11.77a4 4 0 0 1-2.37-2.77c-1.88-7.24-5-23.82-5-53.46s3.15-46.22 5-53.46a4 4 0 0 1 2.34-2.77C74.29 59.83 127.39 60 127.92 60h.15c.54 0 53.64-.17 84.56 11.77a4 4 0 0 1 2.37 2.77c1.88 7.24 5 23.82 5 53.46s-3.15 46.22-5 53.46Z"
}));
var _default = exports.default = YoutubeLogo;