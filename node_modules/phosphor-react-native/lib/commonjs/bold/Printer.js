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
const Printer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "printer-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M214.67 68H204V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v28H41.33C25.16 68 12 80.56 12 96v80a12 12 0 0 0 12 12h28v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-28h28a12 12 0 0 0 12-12V96c0-15.44-13.16-28-29.33-28ZM76 52h104v16H76Zm104 152H76v-32h104Zm40-40h-16v-4a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v4H36V96c0-2.17 2.44-4 5.33-4h173.34c2.89 0 5.33 1.83 5.33 4Zm-16-44a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = Printer;