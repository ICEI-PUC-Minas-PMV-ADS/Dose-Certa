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
const Broom = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "broom-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233.75 220.4C209.76 208.75 196 183.82 196 152v-17.28a12 12 0 0 0-7.56-11.15l-24.89-9.83a12 12 0 0 1-6.71-15.55l21.33-53a23.88 23.88 0 0 0-31.93-31 24.72 24.72 0 0 0-12.62 13.11l-21 53.1A12 12 0 0 1 97 87.13L71.63 76.84a12 12 0 0 0-13 2.73C38.3 100.45 28 124.82 28 152a107.5 107.5 0 0 0 30.07 74.77A4 4 0 0 0 61 228h171a4 4 0 0 0 1.75-7.6ZM64.34 85.15a3.94 3.94 0 0 1 4.3-.89L94 94.55a20 20 0 0 0 26-11.2l21-53c3.39-8.16 12.61-12.35 20.58-9.35a16 16 0 0 1 9.19 21.16l-21.36 53.06a20 20 0 0 0 11.18 26l24.9 9.83a4 4 0 0 1 2.51 3.72V152c0 2.36.08 4.69.22 7l-138.5-55.4a110.84 110.84 0 0 1 14.62-18.45ZM113.56 220a91.35 91.35 0 0 1-26.66-45 4 4 0 0 0-7.75 2 100.21 100.21 0 0 0 23.09 43H62.68A99.5 99.5 0 0 1 36 152a89.37 89.37 0 0 1 9.73-41.4l143.4 57.4c3.22 22 13.23 40.09 28.8 52Z"
}));
var _default = exports.default = Broom;