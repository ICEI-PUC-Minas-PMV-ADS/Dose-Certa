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
const CompassTool = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "compass-tool-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M211.56 121.82a4 4 0 1 0-7.12-3.64 84.05 84.05 0 0 1-38.58 37.16l-19.68-44.29A36 36 0 0 0 132 44.23V24a4 4 0 0 0-8 0v20.23a36 36 0 0 0-14.18 66.82L60.35 222.37a4 4 0 0 0 2 5.28A3.88 3.88 0 0 0 64 228a4 4 0 0 0 3.66-2.38l26.66-60A91.4 91.4 0 0 0 128 172a95.21 95.21 0 0 0 33.75-6.22l26.59 59.84A4 4 0 0 0 192 228a3.88 3.88 0 0 0 1.62-.35 4 4 0 0 0 2-5.28l-26.54-59.73a92 92 0 0 0 42.48-40.82ZM100 80a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm28 84a83.43 83.43 0 0 1-30.43-5.68l19.56-44a36 36 0 0 0 21.74 0l19.63 44.15A87.44 87.44 0 0 1 128 164Z"
}));
var _default = exports.default = CompassTool;