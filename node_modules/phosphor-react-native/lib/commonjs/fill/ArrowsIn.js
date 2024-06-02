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
const ArrowsIn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "arrows-in-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 104V64a8 8 0 0 1 13.66-5.66L172 72.69l30.34-30.35a8 8 0 0 1 11.32 11.32L183.31 84l14.35 14.34A8 8 0 0 1 192 112h-40a8 8 0 0 1-8-8Zm-40 40H64a8 8 0 0 0-5.66 13.66L72.69 172l-30.35 30.34a8 8 0 0 0 11.32 11.32L84 183.31l14.34 14.35A8 8 0 0 0 112 192v-40a8 8 0 0 0-8-8Zm3.06-87.39a8 8 0 0 0-8.72 1.73L84 72.69 53.66 42.34a8 8 0 0 0-11.32 11.32L72.69 84 58.34 98.34A8 8 0 0 0 64 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39ZM183.31 172l14.35-14.34A8 8 0 0 0 192 144h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66L172 183.31l30.34 30.35a8 8 0 0 0 11.32-11.32Z"
}));
var _default = exports.default = ArrowsIn;