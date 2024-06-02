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
const ChartPolar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chart-polar-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.8 96h-28.1A62.07 62.07 0 0 0 134 66.3V38.2a90.15 90.15 0 0 1 83.8 83.8Zm-95.8 0H78.37A50.09 50.09 0 0 1 122 78.37Zm0 12v43.63A50.09 50.09 0 0 1 78.37 134Zm12 0h43.63A50.09 50.09 0 0 1 134 177.63Zm0-12V78.37A50.09 50.09 0 0 1 177.63 122Zm-12-83.8v28.1A62.07 62.07 0 0 0 66.3 122H38.2A90.15 90.15 0 0 1 122 38.2ZM38.2 134h28.1a62.07 62.07 0 0 0 55.7 55.7v28.1A90.15 90.15 0 0 1 38.2 134Zm95.8 83.8v-28.1a62.07 62.07 0 0 0 55.7-55.7h28.1a90.15 90.15 0 0 1-83.8 83.8Z"
}));
var _default = exports.default = ChartPolar;