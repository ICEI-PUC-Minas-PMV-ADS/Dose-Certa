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
const Crosshair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crosshair-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 124h-12.09A92.13 92.13 0 0 0 132 36.09V24a4 4 0 0 0-8 0v12.09A92.13 92.13 0 0 0 36.09 124H24a4 4 0 0 0 0 8h12.09A92.13 92.13 0 0 0 124 219.91V232a4 4 0 0 0 8 0v-12.09A92.13 92.13 0 0 0 219.91 132H232a4 4 0 0 0 0-8Zm-100 87.9V200a4 4 0 0 0-8 0v11.9A84.11 84.11 0 0 1 44.1 132H56a4 4 0 0 0 0-8H44.1A84.11 84.11 0 0 1 124 44.1V56a4 4 0 0 0 8 0V44.1a84.11 84.11 0 0 1 79.9 79.9H200a4 4 0 0 0 0 8h11.9a84.11 84.11 0 0 1-79.9 79.9ZM128 92a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z"
}));
var _default = exports.default = Crosshair;