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
  className: "tennis-ball__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201.57 54.46a104 104 0 1 0 0 147.08 103.4 103.4 0 0 0 0-147.08ZM65.75 65.77a87.63 87.63 0 0 1 53.66-25.31A87.31 87.31 0 0 1 94 94.06a87.42 87.42 0 0 1-53.62 25.35 87.58 87.58 0 0 1 25.37-53.64Zm-25.42 69.71a103.29 103.29 0 0 0 65-30.11 103.24 103.24 0 0 0 30.13-65 87.78 87.78 0 0 1 80.18 80.14 104 104 0 0 0-95.16 95.1 87.78 87.78 0 0 1-80.18-80.14Zm149.92 54.75a87.69 87.69 0 0 1-53.66 25.31 88 88 0 0 1 79-78.95 87.58 87.58 0 0 1-25.34 53.64Z"
}));
var _default = exports.default = TennisBall;