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
const PersonSimpleThrow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-throw-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 92a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12ZM44 96a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm184 17.6a12 12 0 0 1-19.51 9.4s-21-15.48-53.34.28c-.34 4.75-1 10.94-2.13 18l30.66 25.55a12 12 0 0 1 3.7 13l-16 48a12 12 0 1 1-22.76-7.59L162 180l-15.44-12.86a136.39 136.39 0 0 1-5.72 14.23c-14.64 31-39.34 51.93-73.42 62.15A11.82 11.82 0 0 1 64 244a12 12 0 0 1-3.45-23.5c37.84-11.35 60.77-38.71 68.41-81.44-24 13.54-43.11 17-56.46 17a65.87 65.87 0 0 1-21.5-3.75 12 12 0 0 1 9.72-21.93c.43.17 25.42 9.53 68.5-19.76 54.71-37.18 94.26-6.38 94.26-6.38a12 12 0 0 1 4.52 9.36Z"
}));
var _default = exports.default = PersonSimpleThrow;