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
const CoinVertical = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coin-vertical-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 20h-48c-38.13 0-68 47.44-68 108s29.87 108 68 108h48c38.13 0 68-47.44 68-108S190.13 20 152 20Zm37.21 152h-22.9a162.62 162.62 0 0 0 5.29-32h23.93a133.22 133.22 0 0 1-6.32 32Zm-17.61-56a162.62 162.62 0 0 0-5.29-32h22.9a133.22 133.22 0 0 1 6.32 32Zm5.63-56h-20a98.26 98.26 0 0 0-10-16H152c5.37 0 15.25 2.25 25.23 16ZM74.77 189.84C65.24 173.51 60 151.55 60 128s5.24-45.51 14.77-61.84C86 46.88 97.91 44 104 44s18 2.88 29.23 22.16C142.76 82.49 148 104.45 148 128s-5.24 45.51-14.77 61.84C122 209.12 110.09 212 104 212s-18-2.88-29.23-22.16ZM152 212h-4.79a98.26 98.26 0 0 0 10-16h20c-9.96 13.75-19.84 16-25.21 16Z"
}));
var _default = exports.default = CoinVertical;