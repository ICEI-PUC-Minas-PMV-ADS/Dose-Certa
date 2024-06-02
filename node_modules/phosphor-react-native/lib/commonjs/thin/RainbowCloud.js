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
const RainbowCloud = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rainbow-cloud-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 116a44.16 44.16 0 0 0-42 30.88 27.22 27.22 0 0 0-6-.66c-15.44 0-28 13-28 28.89S136.56 204 152 204h48a44 44 0 0 0 0-88Zm0 80h-48c-11 0-20-9.37-20-20.89s9-20.89 20-20.89a19.13 19.13 0 0 1 7.29 1.43 4 4 0 0 0 5.44-2.9A36 36 0 1 1 200 196ZM20 160v16a4 4 0 0 1-8 0v-16a100 100 0 0 1 169.71-71.69 4 4 0 0 1-5.57 5.69A92 92 0 0 0 20 160Zm92-60a60.07 60.07 0 0 0-60 60v16a4 4 0 0 1-8 0v-16a68 68 0 0 1 108.24-54.82 4 4 0 1 1-4.74 6.44A59.57 59.57 0 0 0 112 100Zm11.31 29.79a4 4 0 0 1-4.81 3A28 28 0 0 0 84 160v16a4 4 0 0 1-8 0v-16a36 36 0 0 1 36-36 36.58 36.58 0 0 1 8.35 1 4 4 0 0 1 2.96 4.79Z"
}));
var _default = exports.default = RainbowCloud;