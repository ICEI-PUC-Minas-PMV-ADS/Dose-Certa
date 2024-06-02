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
const Spiral = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spiral-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 144a4 4 0 0 1-8 0A100.11 100.11 0 0 0 136 44a92.1 92.1 0 0 0-92 92 84.09 84.09 0 0 0 84 84 76.08 76.08 0 0 0 76-76 68.07 68.07 0 0 0-68-68 60.07 60.07 0 0 0-60 60 52.06 52.06 0 0 0 52 52 44.05 44.05 0 0 0 44-44 36 36 0 0 0-36-36 28 28 0 0 0-28 28 20 20 0 0 0 20 20 12 12 0 0 0 12-12 4 4 0 0 0-4-4 4 4 0 0 1 0-8 12 12 0 0 1 12 12 20 20 0 0 1-20 20 28 28 0 0 1-28-28 36 36 0 0 1 36-36 44.05 44.05 0 0 1 44 44 52.06 52.06 0 0 1-52 52 60.07 60.07 0 0 1-60-60 68.07 68.07 0 0 1 68-68 76.08 76.08 0 0 1 76 76 84.09 84.09 0 0 1-84 84 92.1 92.1 0 0 1-92-92A100.11 100.11 0 0 1 136 36a108.12 108.12 0 0 1 108 108Z"
}));
var _default = exports.default = Spiral;