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
  className: "grains-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 60a83.5 83.5 0 0 0-33.88 7.16c-13-30.78-43-46.08-44.33-46.74a4 4 0 0 0-3.58 0c-1.32.66-31.3 16-44.33 46.74A83.5 83.5 0 0 0 48 60a4 4 0 0 0-4 4v80a84 84 0 0 0 168 0V64a4 4 0 0 0-4-4Zm-84 159.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm0-55.63a84.12 84.12 0 0 0-72-48.17v-48a76.11 76.11 0 0 1 72 75.9ZM89.05 70.75c10.07-24.22 32.46-38.47 39-42.19 6.49 3.72 28.88 18 38.95 42.19a84.43 84.43 0 0 0-39 47.66 84.43 84.43 0 0 0-38.95-47.66ZM204 144a76.11 76.11 0 0 1-72 75.9V200a76.11 76.11 0 0 1 72-75.9Zm0-27.9a84.12 84.12 0 0 0-72 48.17V144a76.11 76.11 0 0 1 72-75.9Z"
}));
var _default = exports.default = Grains;