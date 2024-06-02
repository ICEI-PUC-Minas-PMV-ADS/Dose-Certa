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
const HeartStraightBreak = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "heart-straight-break-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.62 58.38a56.06 56.06 0 0 0-79.16 0L128 72.24l-14.44-13.9a56 56 0 0 0-79.2 79.21l89.37 90.66a6 6 0 0 0 8.55 0l89.33-90.63a56.06 56.06 0 0 0 .01-79.2Zm-8.51 70.75L128 215.45 42.89 129.1a44 44 0 0 1 62.23-62.24l.08.08 14.16 13.64-11.51 11.08a6 6 0 0 0-.08 8.56L135.53 128l-11.76 11.76a6 6 0 1 0 8.49 8.48l16-16a6 6 0 0 0 0-8.49l-27.68-27.69 30.24-29.12a.3.3 0 0 0 .08-.08 44 44 0 1 1 62.21 62.27Z"
}));
var _default = exports.default = HeartStraightBreak;