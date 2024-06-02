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
  className: "scroll-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M98 136a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6Zm6-26h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12Zm126 82a30 30 0 0 1-30 30H88a30 30 0 0 1-30-30V64a18 18 0 0 0-36 0c0 6.76 5.58 11.19 5.64 11.23a6 6 0 1 1-7.24 9.57C20 84.48 10 76.85 10 64a30 30 0 0 1 30-30h136a30 30 0 0 1 30 30v106h10a6 6 0 0 1 3.6 1.2c.4.32 10.4 7.95 10.4 20.8Zm-124 0c0-6.76-5.59-11.19-5.64-11.23A6 6 0 0 1 104 170h90V64a18 18 0 0 0-18-18H64a29.82 29.82 0 0 1 6 18v128a18 18 0 0 0 36 0Zm112 0a14.94 14.94 0 0 0-4.34-10h-97.78a24.83 24.83 0 0 1 2.12 10 29.87 29.87 0 0 1-6 18h88a18 18 0 0 0 18-18Z"
}));
var _default = exports.default = Scroll;