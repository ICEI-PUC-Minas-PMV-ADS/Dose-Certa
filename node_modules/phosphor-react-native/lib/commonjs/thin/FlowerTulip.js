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
const FlowerTulip = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flower-tulip-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 52a83.5 83.5 0 0 0-37 8.62c-14.2-26.46-40-39.63-41.19-40.2a4 4 0 0 0-3.58 0c-1.14.57-27 13.74-41.19 40.2A83.5 83.5 0 0 0 48 52a4 4 0 0 0-4 4v40a84.1 84.1 0 0 0 80 83.9v45.63l-42.21-21.11a4 4 0 1 0-3.58 7.16l48 24a4 4 0 0 0 3.58 0l48-24a4 4 0 0 0-3.58-7.16L132 225.53V179.9A84.1 84.1 0 0 0 212 96V56a4 4 0 0 0-4-4Zm-80-23.44c5.91 3.37 25 15.45 36 35.93a84.46 84.46 0 0 0-36 45.92 84.46 84.46 0 0 0-36-45.92c11-20.42 30.1-32.55 36-35.93ZM52 96V60.1a76.11 76.11 0 0 1 72 75.9v35.9A76.11 76.11 0 0 1 52 96Zm152 0a76.11 76.11 0 0 1-72 75.9V136a76.11 76.11 0 0 1 72-75.9Z"
}));
var _default = exports.default = FlowerTulip;