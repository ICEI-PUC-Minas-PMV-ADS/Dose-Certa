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
  className: "broom-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.24 213.21C216.12 203 204 180.64 204 152v-17.27a19.94 19.94 0 0 0-12.62-18.59l-24.86-9.81a4 4 0 0 1-2.26-5.14l21.33-53A32 32 0 0 0 167.17 6a32.13 32.13 0 0 0-40.92 18.2l-.07.18-21 53.09a3.94 3.94 0 0 1-2.14 2.2 3.89 3.89 0 0 1-3 .06L74.6 69.43A19.89 19.89 0 0 0 52.87 74C31.06 96.43 20 122.68 20 152a115.46 115.46 0 0 0 32.29 80.3A12 12 0 0 0 61 236h171a12 12 0 0 0 5.24-22.79ZM68.19 92.73 91.06 102a28 28 0 0 0 36.44-15.69l20.95-53a8.32 8.32 0 0 1 10.33-4.81 8 8 0 0 1 4.61 10.57 1.17 1.17 0 0 0 0 .11L142 92.29a28.05 28.05 0 0 0 15.68 36.33l22.32 8.83V152c0 1 0 2.07.05 3.1l-122.44-49a101.91 101.91 0 0 1 10.58-13.37ZM116.74 212a83.73 83.73 0 0 1-22.09-39 12 12 0 0 0-23.25 6 110.27 110.27 0 0 0 14.49 33H66.25A91.53 91.53 0 0 1 44 152a84 84 0 0 1 3.41-24.11l136.67 54.66A86.58 86.58 0 0 0 198.66 212Z"
}));
var _default = exports.default = Broom;