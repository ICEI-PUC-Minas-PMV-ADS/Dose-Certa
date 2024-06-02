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
const PawPrint = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paw-print-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 108a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm-168 0a24 24 0 1 0-24 24 24 24 0 0 0 24-24Zm24-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm72 0a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm48 100a44 44 0 0 1-61.1 40.55 60.15 60.15 0 0 0-45.8 0A44 44 0 0 1 67 145.34a31.33 31.33 0 0 0 14.91-18.74 48 48 0 0 1 92.18 0A31.34 31.34 0 0 0 189 145.34 44 44 0 0 1 212 184Zm-24 0a20 20 0 0 0-10.49-17.6l-.1-.06a55.22 55.22 0 0 1-26.37-33 24 24 0 0 0-46.08 0 55.21 55.21 0 0 1-26.37 33.05l-.1.06A20 20 0 0 0 88 204a19.77 19.77 0 0 0 7.8-1.58h.13a84 84 0 0 1 64.14 0h.13A19.77 19.77 0 0 0 168 204a20 20 0 0 0 20-20Z"
}));
var _default = exports.default = PawPrint;