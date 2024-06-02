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
const PlayPause = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "play-pause-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 64v128a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0Zm44-4a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4Zm-84 68a11.76 11.76 0 0 1-5.48 10l-88.19 56.12a12 12 0 0 1-12.18.39A11.66 11.66 0 0 1 28 184.15V71.85a11.66 11.66 0 0 1 6.15-10.36 12 12 0 0 1 12.18.39L134.52 118a11.76 11.76 0 0 1 5.48 10Zm-8 0a3.77 3.77 0 0 0-1.78-3.22L42 68.63a3.94 3.94 0 0 0-2.09-.63 4 4 0 0 0-1.91.5 3.76 3.76 0 0 0-2 3.35v112.3a3.76 3.76 0 0 0 2 3.35 3.91 3.91 0 0 0 4-.13l88.18-56.15A3.77 3.77 0 0 0 132 128Z"
}));
var _default = exports.default = PlayPause;