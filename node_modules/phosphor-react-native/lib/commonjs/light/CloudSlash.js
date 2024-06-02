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
const CloudSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cloud-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l40.18 44.2c-.45.87-.9 1.75-1.32 2.64A62 62 0 1 0 72 214h88a85.23 85.23 0 0 0 32.35-6.3l11.21 12.3a6 6 0 0 0 8.88-8.08ZM160 202H72a50 50 0 1 1 5.9-99.64A86.25 86.25 0 0 0 74 128a6 6 0 0 0 12 0 73.92 73.92 0 0 1 6.44-30.2l91.22 100.34A73.65 73.65 0 0 1 160 202Zm86-74a85.85 85.85 0 0 1-21.85 57.27 6 6 0 0 1-4.47 2 6 6 0 0 1-4.47-10 74 74 0 0 0-99-108.92 6 6 0 1 1-7.11-9.67A86 86 0 0 1 246 128Z"
}));
var _default = exports.default = CloudSlash;