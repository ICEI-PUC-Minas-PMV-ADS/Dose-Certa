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
const HandFist = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-fist-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 76h-12V64a36 36 0 0 0-60-26.8 36 36 0 0 0-58.73 17.34A36 36 0 0 0 20 88v40a108 108 0 0 0 216 0v-16a36 36 0 0 0-36-36Zm-60-12a12 12 0 0 1 24 0v12h-24Zm-48 0a12 12 0 0 1 24 0v40a12 12 0 0 1-24 0ZM44 88a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm168 40a84 84 0 0 1-167.39 10.15A35.93 35.93 0 0 0 80 130.8a35.89 35.89 0 0 0 43.65 3.34 36.23 36.23 0 0 0 6.35 6.36 51.82 51.82 0 0 0-14 35.5 12 12 0 0 0 24 0 28 28 0 0 1 28-28 12 12 0 0 0 0-24h-16a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = HandFist;