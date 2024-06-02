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
const BowlFood = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bowl-food-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 100h-4.78a92 92 0 0 0-182.44 0H32a12 12 0 0 0-12 12 108.38 108.38 0 0 0 56 94.68V208a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 112a12 12 0 0 0-12-12Zm-53.71-39.94a92 92 0 0 0-43.1 39.94H106a68.27 68.27 0 0 1 62-40c.76 0 1.52 0 2.29.06Zm17.22 19.08a67.66 67.66 0 0 1 7.41 20.86h-38.79a67.91 67.91 0 0 1 31.38-20.86ZM128 44c.83 0 1.65 0 2.48.06A92.3 92.3 0 0 0 80.37 100H61.08A68.1 68.1 0 0 1 128 44Zm35 144.39a12 12 0 0 0-7 10.91v4.7h-56v-4.7a12 12 0 0 0-7-10.91A84.32 84.32 0 0 1 44.87 124h166.26A84.32 84.32 0 0 1 163 188.39Z"
}));
var _default = exports.default = BowlFood;