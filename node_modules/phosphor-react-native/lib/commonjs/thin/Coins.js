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
const Coins = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coins-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 93.11V84c0-22.43-36.9-40-84-40S12 61.57 12 84v40c0 19.14 26.86 34.72 64 38.89V172c0 22.43 36.9 40 84 40s84-17.57 84-40v-40c0-18.88-26.13-34.63-64-38.89ZM236 132c0 15.45-30.54 32-76 32a165.71 165.71 0 0 1-28-2.34v-1.39c28.61-6.31 48-20 48-36.27v-22.83c32.22 3.83 56 16.76 56 30.83Zm-127.81 23.59Q102.3 156 96 156c-5.47 0-10.72-.25-15.73-.69H80c-4.16-.38-8.16-.9-12-1.56V121.8a174.87 174.87 0 0 0 28 2.2 174.87 174.87 0 0 0 28-2.2v31.92a155 155 0 0 1-15.52 1.85ZM172 101.32V124c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-18.95ZM96 52c45.46 0 76 16.55 76 32s-30.54 32-76 32-76-16.55-76-32 30.54-32 76-32Zm-76 72v-22.68c8.25 8.37 22.37 15.06 40 19v31.84C35.16 146.3 20 134.88 20 124Zm64 48v-8.4c3.91.26 7.92.4 12 .4s8.06-.14 12-.39a123.93 123.93 0 0 0 16 4.63v31.87C99.16 194.3 84 182.88 84 172Zm48 29.72v-31.95a174.48 174.48 0 0 0 28 2.23 174.87 174.87 0 0 0 28-2.2v31.92a173.07 173.07 0 0 1-56 0ZM236 172c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-19Z"
}));
var _default = exports.default = Coins;