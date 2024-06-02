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
const Lighthouse = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lighthouse-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 84a12 12 0 0 0-12 12v8h-15.13l-4.93-49.2A12 12 0 0 0 184 47L141.1 8.89l-.3-.25a20 20 0 0 0-25.6 0l-.3.25L72 47a12 12 0 0 0-4 7.76L63.13 104H48v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h24.72l-8.63 86.1A20 20 0 0 0 72 236h112a20 20 0 0 0 19.9-21.95L195.28 128H220a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12Zm-92-54.64L144.46 44h-32.92ZM90.86 68h74.28l3.61 36H140v-8a12 12 0 0 0-24 0v8H87.25ZM76.42 212l3.21-32h96.74l3.21 32ZM174 156H82l2.8-28h86.32Z"
}));
var _default = exports.default = Lighthouse;