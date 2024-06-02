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
const WifiSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wifi-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10ZM52.44 36a6 6 0 0 0-8.88 8l17.77 19.58a169.41 169.41 0 0 0-41.14 25 6 6 0 1 0 7.62 9.27A157.58 157.58 0 0 1 69.91 73l26.48 29.13a122.21 122.21 0 0 0-44.12 22.19 6 6 0 0 0 7.46 9.41 110 110 0 0 1 45.87-21.47l31.13 34.25A74.4 74.4 0 0 0 128 146a73.44 73.44 0 0 0-43.53 14.15A6 6 0 0 0 88 171a5.93 5.93 0 0 0 3.53-1.15 62 62 0 0 1 59.76-7.31L203.56 220a6 6 0 0 0 8.88-8.08Zm183.37 52.55A170.32 170.32 0 0 0 128 50a173.45 173.45 0 0 0-21.76 1.38 6 6 0 1 0 1.52 11.9A160.58 160.58 0 0 1 128 62a158.26 158.26 0 0 1 100.19 35.82 6 6 0 1 0 7.62-9.27Zm-39.54 45.2A6 6 0 0 0 200 135a6 6 0 0 0 3.73-10.7 122.26 122.26 0 0 0-50.9-23.81 6 6 0 1 0-2.43 11.75 110 110 0 0 1 45.87 21.51Z"
}));
var _default = exports.default = WifiSlash;