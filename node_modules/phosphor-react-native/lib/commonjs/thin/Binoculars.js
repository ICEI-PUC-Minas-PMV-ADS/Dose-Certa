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
const Binoculars = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binoculars-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M231.22 148.09 189.6 53.41a3.94 3.94 0 0 0-.83-1.22 28 28 0 0 0-39.6 0A4 4 0 0 0 148 55v29h-40V55a4 4 0 0 0-1.17-2.83 28 28 0 0 0-39.6 0 3.94 3.94 0 0 0-.83 1.22l-41.62 94.7A44 44 0 1 0 108 168V92h40v76a44 44 0 1 0 83.22-19.91ZM64 204a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm0-80a43.78 43.78 0 0 0-22.66 6.3L73.4 57.35a20 20 0 0 1 26.6-.59v86A44 44 0 0 0 64 124Zm92-67.23a20 20 0 0 1 26.6.59l32.06 72.94A43.92 43.92 0 0 0 156 142.74ZM192 204a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z"
}));
var _default = exports.default = Binoculars;