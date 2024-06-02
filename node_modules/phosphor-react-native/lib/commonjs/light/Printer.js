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
  className: "printer-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M214.67 74H198V40a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v34H41.33C28.47 74 18 83.87 18 96v80a6 6 0 0 0 6 6h34v34a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-34h34a6 6 0 0 0 6-6V96c0-12.13-10.47-22-23.33-22ZM70 46h116v28H70Zm116 164H70v-52h116Zm40-40h-28v-18a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v18H30V96c0-5.51 5.08-10 11.33-10h173.34c6.25 0 11.33 4.49 11.33 10Zm-28-54a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"
}));
var _default = exports.default = Printer;