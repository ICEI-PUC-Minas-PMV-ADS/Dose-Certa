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
const Dress = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dress-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M66.26 80.23a15.26 15.26 0 0 1-1.65-12.17 15.54 15.54 0 0 1 2-4.76L88 32.7V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 104 8.27v24.15l5.25 6.58a23.91 23.91 0 0 0 19.13 9 24.67 24.67 0 0 0 18.71-9.43l4.91-6.15V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 168 8.27V32.7l21.42 30.6a15.54 15.54 0 0 1 2 4.76 15.26 15.26 0 0 1-1.65 12.17 1.74 1.74 0 0 0-.11.18l-13.86 21.74a4 4 0 0 1-3.4 1.85H83.6a4 4 0 0 1-3.37-1.85L66.37 80.41a1.74 1.74 0 0 0-.11-.18Zm148.5 129.56a2.52 2.52 0 0 0-.15-.34l-40.92-87.15a4 4 0 0 0-3.63-2.3H85.94a4 4 0 0 0-3.63 2.3l-40.92 87.15a2.52 2.52 0 0 0-.15.34A16.19 16.19 0 0 0 41.6 223a16 16 0 0 0 14.4 9h144a16 16 0 0 0 14.39-9 16.19 16.19 0 0 0 .37-13.21Z"
}));
var _default = exports.default = Dress;