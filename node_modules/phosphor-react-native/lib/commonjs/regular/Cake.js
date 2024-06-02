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
const Cake = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cake__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 112a24 24 0 0 0-24-24h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24ZM112 48c0-13.57 10-24.46 16-29.79 6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0Zm-72 64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v23.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0 24 24 0 0 1-48 0 8 8 0 0 0-16 0 24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33Zm160 96H56a8 8 0 0 1-8-8v-27.44A38.77 38.77 0 0 0 62.88 176a39.69 39.69 0 0 0 29-11.31A40.36 40.36 0 0 0 96 160a40 40 0 0 0 64 0 40.36 40.36 0 0 0 4.13 4.67A39.67 39.67 0 0 0 192 176h1.14a38.77 38.77 0 0 0 14.86-3.44V200a8 8 0 0 1-8 8Z"
}));
var _default = exports.default = Cake;