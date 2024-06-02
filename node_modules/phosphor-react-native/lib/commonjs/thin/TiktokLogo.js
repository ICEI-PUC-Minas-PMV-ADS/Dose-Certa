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
const TiktokLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tiktok-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 76a52.06 52.06 0 0 1-52-52 4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v132a24 24 0 1 1-34.28-21.69 4 4 0 0 0 2.28-3.62V88a4 4 0 0 0-4.7-3.94C53.49 90.08 28 121 28 156a72 72 0 0 0 144 0v-46.56A99.26 99.26 0 0 0 224 124a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4Zm-4 39.92a91.32 91.32 0 0 1-49.66-17.18A4 4 0 0 0 164 102v54a64 64 0 0 1-128 0c0-29.52 20.32-55.79 48-63v35.31A32 32 0 1 0 132 156V28h32.13A60.11 60.11 0 0 0 220 83.87Z"
}));
var _default = exports.default = TiktokLogo;