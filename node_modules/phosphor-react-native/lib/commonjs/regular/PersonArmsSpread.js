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
const PersonArmsSpread = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-arms-spread__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 40a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm103.5 31.71A19.62 19.62 0 0 0 212 72H44a20 20 0 0 0-8.38 38.16h.13l50.75 22.35-21 79.72A20 20 0 0 0 102 228.8l26-44.87 26 44.87a20 20 0 0 0 36.4-16.52l-21-79.72 50.75-22.35h.13a19.64 19.64 0 0 0 11.22-22.5Zm-17.8 7.9-56.93 25.06a8 8 0 0 0-4.51 9.36L175.13 217a7 7 0 0 0 .49 1.35 4 4 0 0 1-5 5.45 4 4 0 0 1-2.25-2.07 6.31 6.31 0 0 0-.34-.63L134.92 164a8 8 0 0 0-13.84 0L88 221.05a6.31 6.31 0 0 0-.34.63 4 4 0 0 1-2.25 2.07 4 4 0 0 1-5-5.45 7 7 0 0 0 .49-1.35L103.74 130a8 8 0 0 0-4.51-9.36L42.3 95.61A4 4 0 0 1 44 88h168a4 4 0 0 1 1.73 7.61Z"
}));
var _default = exports.default = PersonArmsSpread;