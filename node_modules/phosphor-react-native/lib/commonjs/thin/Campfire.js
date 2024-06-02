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
const Campfire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "campfire-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.81 225.21A4 4 0 0 1 216 228a3.92 3.92 0 0 1-1.21-.19L128 200.2l-86.79 27.61A3.92 3.92 0 0 1 40 228a4 4 0 0 1-1.21-7.81l76-24.19-76-24.19a4 4 0 1 1 2.42-7.62L128 191.8l86.79-27.61a4 4 0 1 1 2.42 7.62l-76 24.19 76 24.19a4 4 0 0 1 2.6 5.02ZM72 108c0-19 9.38-38.85 27.12-57.27a152 152 0 0 1 26.78-22.14 4 4 0 0 1 4.2 0 152 152 0 0 1 26.78 22.14C174.62 69.15 184 89 184 108a56 56 0 0 1-54.56 56h-2.88A56 56 0 0 1 72 108Zm56 48a20 20 0 0 0 20-20c0-17.39-14.37-30.53-20-35-5.63 4.48-20 17.62-20 35a20 20 0 0 0 20 20Zm-48-48a48 48 0 0 0 23.28 41.13A27.83 27.83 0 0 1 100 136c0-25.84 24.73-42.63 25.78-43.33a4 4 0 0 1 4.44 0c1.05.7 25.78 17.49 25.78 43.33a27.83 27.83 0 0 1-3.28 13.13A48 48 0 0 0 176 108c0-36.37-38.49-64.76-48-71.21-9.5 6.46-48 34.89-48 71.21Z"
}));
var _default = exports.default = Campfire;