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
const Sneaker = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sneaker-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m228 131-60.73-20.24a26 26 0 0 1-15.51-14l-23.25-54.45a14 14 0 0 0-17.57-7.47L35.22 62.37A14.05 14.05 0 0 0 26 75.53V192a14 14 0 0 0 14 14h200a14 14 0 0 0 14-14v-24.94A38 38 0 0 0 228 131ZM39.32 73.65 115 46.12a1.81 1.81 0 0 1 .68-.12 2 2 0 0 1 1.79 1.11l8 18.68L102 74.36A6 6 0 0 0 104 86a5.92 5.92 0 0 0 2-.37l24.18-8.79 6.31 14.76L118 98.36a6 6 0 0 0 2 11.64 6.15 6.15 0 0 0 2-.36l19.26-7a38 38 0 0 0 10.57 13.21L134 122.36a6 6 0 0 0 2 11.64 6.15 6.15 0 0 0 2.05-.36l28.64-10.42 57.53 19.18a25.94 25.94 0 0 1 17.27 19.6H38V75.53a2 2 0 0 1 1.32-1.88ZM240 194H40a2 2 0 0 1-2-2v-18h204v18a2 2 0 0 1-2 2Z"
}));
var _default = exports.default = Sneaker;