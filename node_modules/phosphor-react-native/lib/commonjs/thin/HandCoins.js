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
const HandCoins = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-coins-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12 24 24 0 0 0-24-24H89.94a27.81 27.81 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a4.69 4.69 0 0 0 .6-.2l38.82-16.54.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4Zm209.13-28.17-38.41 16.37-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a3.94 3.94 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38ZM164 92a31.88 31.88 0 0 0 8.73-1.2 32 32 0 1 0 22.55-37.58A32 32 0 1 0 164 92Zm64-8a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm-64-48a24 24 0 0 1 23.74 20.46A32 32 0 0 0 172 82.62 24 24 0 1 1 164 36Z"
}));
var _default = exports.default = HandCoins;