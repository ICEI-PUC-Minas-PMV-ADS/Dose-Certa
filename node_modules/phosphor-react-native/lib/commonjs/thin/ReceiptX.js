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
const ReceiptX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "receipt-x-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 44H40a12 12 0 0 0-12 12v152a4 4 0 0 0 5.79 3.58L64 196.47l30.21 15.11a4 4 0 0 0 3.58 0L128 196.47l30.21 15.11a4 4 0 0 0 3.58 0L192 196.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 4-4V56a12 12 0 0 0-12-12Zm4 157.53-26.21-13.11a4 4 0 0 0-3.58 0L160 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 201.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-65.17-102.7L133.66 120l21.17 21.17a4 4 0 0 1-5.66 5.66L128 125.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 120l-21.17-21.17a4 4 0 0 1 5.66-5.66L128 114.34l21.17-21.17a4 4 0 1 1 5.66 5.66Z"
}));
var _default = exports.default = ReceiptX;