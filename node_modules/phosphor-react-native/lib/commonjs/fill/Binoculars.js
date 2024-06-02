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
  className: "binoculars-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.22 151.9v-.1a1.42 1.42 0 0 0-.07-.22 48.46 48.46 0 0 0-2.31-5.3L193.27 51.8a8 8 0 0 0-1.67-2.44 32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66 32 32 0 0 0-45.26 0 8 8 0 0 0-1.67 2.44l-41.53 94.5a48.46 48.46 0 0 0-2.31 5.3 1.72 1.72 0 0 0-.07.21s0 .08 0 .11a48 48 0 0 0 90.32 32.51 47.49 47.49 0 0 0 2.9-16.59V96h32v71.83a47.49 47.49 0 0 0 2.9 16.59 48 48 0 0 0 90.32-32.51Zm-143.15 27a32 32 0 0 1-60.2-21.71l1.81-4.13A32 32 0 0 1 96 167.88v.12a32 32 0 0 1-1.93 10.94ZM203 198.07A32 32 0 0 1 160 168v-.11a32 32 0 0 1 60.32-14.78l1.81 4.13A32 32 0 0 1 203 198.07Z"
}));
var _default = exports.default = Binoculars;