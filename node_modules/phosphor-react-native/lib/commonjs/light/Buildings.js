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
const Buildings = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "buildings-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Z"
}));
var _default = exports.default = Buildings;