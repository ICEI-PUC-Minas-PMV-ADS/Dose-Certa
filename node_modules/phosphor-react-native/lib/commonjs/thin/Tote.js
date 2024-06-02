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
const Tote = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tote-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233 72.06a12.11 12.11 0 0 0-9.08-4.06H172v-4a44 44 0 0 0-88 0v4H32.08A12.11 12.11 0 0 0 23 72.06a12 12 0 0 0-2.94 9.35l14.26 120a12 12 0 0 0 12 10.59h163.35a12 12 0 0 0 12-10.59l14.26-120a12 12 0 0 0-2.93-9.35ZM92 64a36 36 0 0 1 72 0v4H92Zm136 16.46-14.25 120a4 4 0 0 1-4.05 3.54H46.33a4 4 0 0 1-4-3.54L28 80.46a3.9 3.9 0 0 1 1-3.09A4.08 4.08 0 0 1 32.08 76H84v28a4 4 0 0 0 8 0V76h72v28a4 4 0 0 0 8 0V76h51.92a4.08 4.08 0 0 1 3.08 1.37 3.9 3.9 0 0 1 1 3.09Z"
}));
var _default = exports.default = Tote;