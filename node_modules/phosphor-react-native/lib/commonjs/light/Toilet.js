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
const Toilet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "toilet-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M118 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6Zm52.14 132 3.72 26A14 14 0 0 1 160 238H96a14 14 0 0 1-13.86-16l3.72-26A94.1 94.1 0 0 1 34 112a6 6 0 0 1 6-6h18V40a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14v66h18a6 6 0 0 1 6 6 94.1 94.1 0 0 1-51.86 84ZM70 106h116V40a2 2 0 0 0-2-2H72a2 2 0 0 0-2 2Zm88.71 94.84a94 94 0 0 1-61.42 0L94 223.72a2 2 0 0 0 .47 1.59A2 2 0 0 0 96 226h64a2 2 0 0 0 1.51-.69 2 2 0 0 0 .47-1.59ZM209.78 118H46.22a82 82 0 0 0 163.56 0Z"
}));
var _default = exports.default = Toilet;