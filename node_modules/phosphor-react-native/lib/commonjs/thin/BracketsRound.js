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
const BracketsRound = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "brackets-round-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M55 62.67C46.34 74.93 36 96.22 36 128s10.34 53.07 19 65.33c9.41 13.3 19 19.19 19.06 19.24A4 4 0 0 1 72 220a4 4 0 0 1-2-.57c-1.77-1.03-42-25.92-42-91.43s40.23-90.4 41.94-91.43a4 4 0 0 1 4.13 6.86c-.07.05-9.65 5.94-19.07 19.24Zm131.05-26.1a4 4 0 0 0-4.13 6.86c.1 0 9.65 5.94 19.06 19.24 8.67 12.26 19 33.55 19 65.33s-10.34 53.07-19 65.33c-9.41 13.3-19 19.19-19.05 19.24a4 4 0 0 0 4.12 6.86c1.71-1 41.94-25.92 41.94-91.43s-40.22-90.4-41.93-91.43Z"
}));
var _default = exports.default = BracketsRound;