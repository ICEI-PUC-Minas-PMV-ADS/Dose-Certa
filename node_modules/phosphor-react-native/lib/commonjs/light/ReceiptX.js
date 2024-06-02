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
  className: "receipt-x-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 42H40a14 14 0 0 0-14 14v152a6 6 0 0 0 8.68 5.37L64 198.71l29.32 14.66a6 6 0 0 0 5.36 0L128 198.71l29.32 14.66a6 6 0 0 0 5.36 0L192 198.71l29.32 14.66a6 6 0 0 0 2.68.63 5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 208V56a14 14 0 0 0-14-14Zm2 156.29-23.32-11.66a6 6 0 0 0-5.36 0L160 201.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 201.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 198.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-61.76-98L136.48 120l19.76 19.76a6 6 0 1 1-8.48 8.48L128 128.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L119.52 120l-19.76-19.76a6 6 0 0 1 8.48-8.48L128 111.52l19.76-19.76a6 6 0 0 1 8.48 8.48Z"
}));
var _default = exports.default = ReceiptX;