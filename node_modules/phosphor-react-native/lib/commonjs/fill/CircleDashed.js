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
const CircleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "circle-dashed-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm54.59 45a8 8 0 0 1 11.29.7 88 88 0 0 1 17.6 30.47 8 8 0 0 1-15.18 5.08 71.87 71.87 0 0 0-14.4-25 8 8 0 0 1 .69-11.25ZM73.41 187.05a8 8 0 0 1-11.29-.7 88 88 0 0 1-17.6-30.47 8 8 0 1 1 15.18-5.08 71.87 71.87 0 0 0 14.4 24.95 8 8 0 0 1-.69 11.3Zm.69-106.8a71.87 71.87 0 0 0-14.4 25 8 8 0 1 1-15.18-5.08 88 88 0 0 1 17.6-30.47 8 8 0 1 1 12 10.6Zm71.49 134a87.8 87.8 0 0 1-35.18 0 8 8 0 0 1 3.18-15.68 72.08 72.08 0 0 0 28.82 0 8 8 0 0 1 3.18 15.68Zm6.25-163a8 8 0 0 1-7.84 6.36 7.89 7.89 0 0 1-1.6-.16 72.08 72.08 0 0 0-28.82 0 8 8 0 1 1-3.18-15.68 87.92 87.92 0 0 1 35.18 0 8 8 0 0 1 6.26 9.43Zm59.64 104.68a88 88 0 0 1-17.6 30.47 8 8 0 1 1-12-10.6 71.87 71.87 0 0 0 14.4-24.95 8 8 0 0 1 15.18 5.08Z"
}));
var _default = exports.default = CircleDashed;