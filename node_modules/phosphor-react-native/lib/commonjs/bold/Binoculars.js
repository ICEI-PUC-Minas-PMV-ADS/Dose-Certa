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
const Binoculars = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binoculars-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M241 150.65v-.05a51.33 51.33 0 0 0-2.53-5.9l-41.54-94.52a12 12 0 0 0-2.5-3.65 36 36 0 0 0-50.92 0A12 12 0 0 0 140 55v21h-24V55a12 12 0 0 0-3.51-8.48 36 36 0 0 0-50.92 0 12 12 0 0 0-2.5 3.65L17.53 144.7a51.33 51.33 0 0 0-2.53 5.9s0 0 0 .05A52 52 0 1 0 116 168v-68h24v68a52 52 0 1 0 101-17.35ZM80 62.28a12 12 0 0 1 12-1.22v63.15a51.9 51.9 0 0 0-35.9-7.62ZM64 196a28 28 0 1 1 28-28 28 28 0 0 1-28 28ZM164 61.06a12.06 12.06 0 0 1 12 1.22l23.87 54.31a51.9 51.9 0 0 0-35.9 7.62ZM192 196a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z"
}));
var _default = exports.default = Binoculars;