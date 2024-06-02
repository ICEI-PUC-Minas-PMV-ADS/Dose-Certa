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
const Scroll = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scroll-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.8 169.6a8 8 0 0 0-4.8-1.6h-8V64a32 32 0 0 0-32-32H40A32 32 0 0 0 8 64c0 13.61 10.05 21.54 11.2 22.4A7.89 7.89 0 0 0 24 88a8 8 0 0 0 4.87-14.33C28.83 73.62 24 69.74 24 64a16 16 0 0 1 32 0v128a32 32 0 0 0 32 32h112a32 32 0 0 0 32-32c0-13.61-10-21.54-11.2-22.4ZM104 96h64a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16Zm-8 40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8Zm104 72h-92.29a31.82 31.82 0 0 0 4.29-16 26.92 26.92 0 0 0-1.21-8h102a12.58 12.58 0 0 1 3.23 8A16 16 0 0 1 200 208Z"
}));
var _default = exports.default = Scroll;