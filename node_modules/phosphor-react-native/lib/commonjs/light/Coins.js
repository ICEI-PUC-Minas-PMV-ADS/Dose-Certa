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
  className: "coins-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224.56 103.81c-11.13-6.06-26.09-10.42-42.56-12.47V84c0-12.12-9.58-23.1-27-30.93C139.16 45.93 118.2 42 96 42s-43.16 3.93-59 11.07C19.58 60.9 10 71.88 10 84v40c0 12.12 9.58 23.1 27 30.93 10.49 4.72 23.21 8 37 9.73V172c0 12.12 9.58 23.1 27 30.93 15.84 7.14 36.8 11.07 59 11.07s43.16-3.93 59-11.07c17.39-7.83 27-18.81 27-30.93v-40c0-10.65-7.61-20.66-21.44-28.19Zm-5.74 10.54C228.61 119.68 234 126 234 132c0 14.19-30.39 30-74 30a166.9 166.9 0 0 1-21.21-1.34 110.79 110.79 0 0 0 16.21-5.73c17.39-7.83 27-18.81 27-30.93v-20.57c14.4 1.93 27.3 5.73 36.82 10.92Zm-110.66 39.23c-3.92.27-8 .42-12.16.42-5.3 0-10.4-.24-15.28-.67a2.22 2.22 0 0 0-.37 0c-3.58-.33-7-.77-10.35-1.3v-27.91A178 178 0 0 0 96 126a178 178 0 0 0 26-1.88V152c-4.34.69-8.91 1.22-13.69 1.56ZM170 105.89V124c0 9.54-13.75 19.8-36 25.51v-27.66a115 115 0 0 0 21-6.92 66.2 66.2 0 0 0 15-9.04ZM96 54c43.61 0 74 15.81 74 30s-30.39 30-74 30-74-15.81-74-30 30.39-30 74-30Zm-74 70v-18.11a66.2 66.2 0 0 0 15 9 115 115 0 0 0 21 6.92v27.66C35.75 143.8 22 133.54 22 124Zm64 48v-6.28c3.3.18 6.63.28 10 .28q5.91 0 11.66-.37a123.17 123.17 0 0 0 14.34 4.21v27.67C99.75 191.8 86 181.54 86 172Zm48 28v-27.9a177.84 177.84 0 0 0 26 1.9 178 178 0 0 0 26-1.88V200a170 170 0 0 1-52 0Zm64-2.49v-27.66a115 115 0 0 0 21-6.92 66.2 66.2 0 0 0 15-9V172c0 9.54-13.75 19.8-36 25.51Z"
}));
var _default = exports.default = Coins;