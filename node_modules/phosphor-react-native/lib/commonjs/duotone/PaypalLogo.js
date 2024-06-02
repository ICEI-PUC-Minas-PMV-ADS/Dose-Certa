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
const PaypalLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paypal-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M191.91 82.7a49 49 0 0 1-1.37 8.94A48 48 0 0 1 144 128h-36a8 8 0 0 0-7.76 6.06l12-48A8 8 0 0 1 120 80h56a48.25 48.25 0 0 1 15.91 2.7Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.12 93.54a55.8 55.8 0 0 0-20.19-16.18A56 56 0 0 0 144 24H84a16 16 0 0 0-15.52 12.12l-36 144A16 16 0 0 0 48 200h27.5l-3 12.12A16 16 0 0 0 88 232h31.5a16 16 0 0 0 15.5-12.12l9-35.88h32a56 56 0 0 0 44.14-90.46ZM79.52 184H48L84 40h60a40 40 0 0 1 39.3 32.49A57 57 0 0 0 176 72h-56a16 16 0 0 0-15.53 12.12ZM183 88.62c-.08.36-.15.72-.24 1.08A39.94 39.94 0 0 1 144 120h-32l8-32h56a40.07 40.07 0 0 1 7 .62Zm31.76 49.08A39.94 39.94 0 0 1 176 168h-32a16 16 0 0 0-15.52 12.12l-9 35.88H88l20-80h36a55.9 55.9 0 0 0 54-41.39 40.2 40.2 0 0 1 9.48 8.77 39.73 39.73 0 0 1 7.3 34.32Z"
}));
var _default = exports.default = PaypalLogo;