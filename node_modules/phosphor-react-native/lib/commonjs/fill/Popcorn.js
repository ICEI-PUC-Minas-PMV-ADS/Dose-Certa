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
const Popcorn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "popcorn-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229.52 74.21a8 8 0 0 0-7.13-2A44 44 0 0 0 168 41.67a44 44 0 0 0-80 0 44 44 0 0 0-54.4 30.51 8 8 0 0 0-9.4 9.65l30.56 129.84A16 16 0 0 0 70.34 224h115.32a16 16 0 0 0 15.58-12.33l30.55-129.84a8 8 0 0 0-2.27-7.62ZM70.34 208 42.91 91.44l37.85 10.81L94.86 208Zm51.72-134.24-34.49 13.8L49 76.54a28 28 0 0 1 40.1-17.28 8 8 0 0 0 11.56-5.34 28 28 0 0 1 54.66 0 8 8 0 0 0 11.56 5.34A28 28 0 0 1 207 76.54l-38.56 11-34.49-13.8a16 16 0 0 0-11.89.02ZM185.66 208h-24.52l14.1-105.75 37.85-10.81Z"
}));
var _default = exports.default = Popcorn;