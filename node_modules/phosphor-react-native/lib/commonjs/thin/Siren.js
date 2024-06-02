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
const Siren = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "siren-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M124 16V8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Zm76 28a4 4 0 0 0 2.83-1.17l8-8a4 4 0 1 0-5.66-5.66l-8 8A4 4 0 0 0 200 44ZM53.17 42.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm83.49 33.22a4 4 0 0 0-1.32 7.9C156.24 87.45 172 106.39 172 128a4 4 0 0 0 8 0c0-25.47-18.63-47.8-43.34-51.95ZM228 176v24a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h4v-36a84 84 0 0 1 84-84h.64c46 .34 83.36 38.47 83.36 85v35h4a12 12 0 0 1 12 12ZM52 164h152v-35c0-42.15-33.83-76.69-75.42-77A76 76 0 0 0 52 128Zm168 12a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"
}));
var _default = exports.default = Siren;