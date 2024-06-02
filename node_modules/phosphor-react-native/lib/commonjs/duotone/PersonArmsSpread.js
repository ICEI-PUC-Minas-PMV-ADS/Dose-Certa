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
  className: "person-arms-spread-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M104 40a24 24 0 1 1 24 24 24 24 0 0 1-24-24Zm108 40H44c-12.87 0-16.71 17.5-5 22.9L96 128l-22.87 86.93a12 12 0 0 0 21.75 10.14L128 168l33.12 57.07a12 12 0 0 0 21.75-10.14L160 128l57-25.1c11.69-5.4 7.85-22.9-5-22.9Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 40a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm103.5 31.71A19.62 19.62 0 0 0 212 72H44a20 20 0 0 0-8.38 38.16l.13.06 50.75 22.35-21 79.72a20 20 0 0 0 36.5 16.53l26-44.88 26 44.88a20 20 0 0 0 36.4-16.53l-21-79.72 50.75-22.35.13-.06a19.63 19.63 0 0 0 11.22-22.45Zm-17.8 7.9-56.93 25.07a8 8 0 0 0-4.51 9.36L175.13 217a7 7 0 0 0 .49 1.35 4 4 0 1 1-7.25 3.38c-.11-.22-.22-.43-.34-.63L134.92 164a8 8 0 0 0-13.84 0L88 221.06c-.12.2-.23.41-.34.63a4 4 0 1 1-7.25-3.38 7 7 0 0 0 .49-1.35L103.74 130a8 8 0 0 0-4.51-9.36L42.3 95.61A4 4 0 0 1 44 88h168a4 4 0 0 1 1.73 7.61Z"
}));
var _default = exports.default = PersonArmsSpread;