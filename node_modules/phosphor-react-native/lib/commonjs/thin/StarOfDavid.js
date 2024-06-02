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
const StarOfDavid = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-of-david-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m196.61 128 30.86-54a4 4 0 0 0-3.47-6h-61.67l-30.86-54a4 4 0 0 0-6.94 0L93.66 68H32a4 4 0 0 0-3.47 6l30.85 54-30.85 54a4 4 0 0 0 3.47 6h61.66l30.87 54a4 4 0 0 0 6.94 0l30.86-54H224a4 4 0 0 0 3.47-6Zm20.5-52L192 119.94 166.9 76Zm-29.72 52-29.7 52H98.3l-29.71-52L98.3 76h59.39ZM128 24.06l25.12 44h-50.25ZM38.89 76h50.19L64 119.94Zm0 103.92L64 136.06 89.08 180Zm89.11 52-25.13-44h50.25ZM166.9 180l25.1-43.94L217.11 180Z"
}));
var _default = exports.default = StarOfDavid;