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
const Atom = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "atom-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M211.89 162.47A195.58 195.58 0 0 0 191.36 128a195.58 195.58 0 0 0 20.53-34.47c10.38-23.06 10.81-41 1.21-50.63s-27.57-9.17-50.63 1.21A195.58 195.58 0 0 0 128 64.64a195.58 195.58 0 0 0-34.47-20.53C70.47 33.73 52.49 33.3 42.9 42.9s-9.17 27.57 1.21 50.63A195.58 195.58 0 0 0 64.64 128a195.58 195.58 0 0 0-20.53 34.47c-10.38 23.06-10.81 41-1.21 50.63 4.6 4.6 11.1 6.9 19.22 6.9 8.78 0 19.41-2.71 31.41-8.11A195.58 195.58 0 0 0 128 191.36a195.58 195.58 0 0 0 34.47 20.53c12 5.4 22.63 8.11 31.41 8.11 8.09 0 14.62-2.3 19.22-6.9 9.6-9.59 9.17-27.57-1.21-50.63Zm-4.44-113.92c10.27 10.28 3.14 39.05-21.1 72.84A301 301 0 0 0 162 94a301 301 0 0 0-27.43-24.31c33.83-24.29 62.6-31.42 72.88-21.14Zm-26 79.45a293.16 293.16 0 0 1-25 28.38 291.82 291.82 0 0 1-28.38 25 291.82 291.82 0 0 1-28.38-25 293.16 293.16 0 0 1-25-28.38A302.36 302.36 0 0 1 128 74.58a295.83 295.83 0 0 1 28.37 25A293.16 293.16 0 0 1 181.41 128ZM48.55 48.55c3.05-3 7.71-4.55 13.64-4.55 14.11 0 35.41 8.59 59.19 25.65a304.89 304.89 0 0 0-51.73 51.74C45.41 87.6 38.28 58.83 48.55 48.55Zm0 158.9c-10.27-10.28-3.14-39 21.1-72.84A301 301 0 0 0 94 162a301 301 0 0 0 27.43 24.31c-33.83 24.28-62.6 31.41-72.88 21.14Zm158.9 0c-10.28 10.27-39 3.14-72.84-21.1A301 301 0 0 0 162 162a301 301 0 0 0 24.31-27.43c24.28 33.83 31.41 62.6 21.14 72.88ZM136 128a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
}));
var _default = exports.default = Atom;