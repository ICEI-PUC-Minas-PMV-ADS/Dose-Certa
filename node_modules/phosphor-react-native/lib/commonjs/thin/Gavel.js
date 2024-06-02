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
const Gavel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gavel-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m240.49 119.52-16-16a12 12 0 0 0-17 0l-1.17 1.17-55-55 1.18-1.17a12 12 0 0 0 0-17l-16-16a12 12 0 0 0-17 0l-64 64a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l1.17-1.18L102.34 124l-68.2 68.21a21 21 0 0 0 29.66 29.66l68.2-68.21 12.69 12.69-1.18 1.17a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l64-64a12 12 0 0 0 0-17ZM77.17 106.83l-16-16a4 4 0 0 1 0-5.66l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.65l-64 64a4 4 0 0 1-5.66.01Zm-19 109.38a13 13 0 1 1-18.37-18.34l68.2-68.21L126.34 148Zm37.14-110.55 50.35-50.35 55 55-50.35 50.35Zm139.52 25.17-64 64a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 0-5.65l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.66Z"
}));
var _default = exports.default = Gavel;