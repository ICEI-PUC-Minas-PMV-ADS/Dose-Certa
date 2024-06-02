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
const TennisBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tennis-ball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204.4 51.6a108 108 0 1 0 0 152.8 108.16 108.16 0 0 0 0-152.8Zm-135.82 17a83.47 83.47 0 0 1 46.2-23.52 84.09 84.09 0 0 1-69.72 69.72 83.47 83.47 0 0 1 23.52-46.22Zm-23.84 70.47a107.27 107.27 0 0 0 63.45-30.88 107.27 107.27 0 0 0 30.88-63.45 83.84 83.84 0 0 1 72.19 72.19 108.11 108.11 0 0 0-94.33 94.32 83.82 83.82 0 0 1-72.19-72.18Zm142.68 48.35a83.53 83.53 0 0 1-46.2 23.52 84.09 84.09 0 0 1 69.72-69.72 83.47 83.47 0 0 1-23.52 46.2Z"
}));
var _default = exports.default = TennisBall;