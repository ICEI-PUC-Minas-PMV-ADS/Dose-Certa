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
const Grains = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "grains-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 52a91.68 91.68 0 0 0-29.9 5c-15.39-28.76-43.4-43.06-44.73-43.72a12 12 0 0 0-10.74 0c-1.33.66-29.34 15-44.74 43.72A91.57 91.57 0 0 0 48 52a12 12 0 0 0-12 12v80a92 92 0 0 0 184 0V64a12 12 0 0 0-12-12ZM60 77.06a68.15 68.15 0 0 1 55.72 60.73 91.89 91.89 0 0 0-55.72-29Zm56 133.88A68.12 68.12 0 0 1 60 144v-10.94A68.12 68.12 0 0 1 116 200ZM99.37 67.71c8.2-14.94 21.32-25 28.63-29.77 7.32 4.79 20.43 14.83 28.63 29.77A92.69 92.69 0 0 0 128 98.61a92.8 92.8 0 0 0-28.63-30.9ZM196 144a68.12 68.12 0 0 1-56 66.94V200a68.12 68.12 0 0 1 56-66.94Zm0-35.22a91.89 91.89 0 0 0-55.72 29A68.15 68.15 0 0 1 196 77.06Z"
}));
var _default = exports.default = Grains;