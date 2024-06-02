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
  className: "coins-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188 86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87 40.12 119 36 96 36s-44.87 4.12-61.49 11.6C14.83 56.45 4 69.38 4 84v40c0 14.62 10.83 27.55 30.51 36.4A131.67 131.67 0 0 0 68 169.88V172c0 14.62 10.83 27.55 30.51 36.4C115.13 215.88 137 220 160 220s44.87-4.12 61.49-11.6C241.17 199.55 252 186.62 252 172v-40c0-22.14-25.29-39.92-64-45.89ZM228 132c0 7.75-21.77 22.48-61.81 23.88C180.33 147.4 188 136.3 188 124v-13.56c25.88 4.71 40 15.04 40 21.56Zm-120.63 15.63c-3.63.24-7.42.37-11.37.37-5.08 0-9.89-.22-14.43-.61a10.94 10.94 0 0 0-1.14-.09c-1.51-.14-3-.3-4.43-.48v-15.89A187 187 0 0 0 96 132a187 187 0 0 0 20-1.07v15.89c-2.49.3-5.07.56-7.75.75-.25.01-.59.03-.88.06ZM164 117.14V124c0 4.78-8.28 12.21-24 17.54v-15a115.32 115.32 0 0 0 17.49-6.13q3.44-1.55 6.51-3.27ZM96 60c44 0 68 15.85 68 24s-24 24-68 24-68-15.85-68-24 24-24 68-24Zm-68 64v-6.86q3.08 1.71 6.51 3.26A115.32 115.32 0 0 0 52 126.53v15c-15.72-5.32-24-12.75-24-17.53Zm64 48h4q5.44 0 10.77-.32 4.45 1.57 9.23 2.86v15c-15.72-5.33-24-12.76-24-17.54Zm48 22.82v-15.88a186.45 186.45 0 0 0 20 1.06 187 187 0 0 0 20-1.07v15.89a170.08 170.08 0 0 1-40 0Zm64-5.28v-15a115.32 115.32 0 0 0 17.49-6.13q3.44-1.54 6.51-3.26V172c0 4.78-8.28 12.21-24 17.54Z"
}));
var _default = exports.default = Coins;