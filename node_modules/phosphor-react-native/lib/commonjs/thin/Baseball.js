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
const Baseball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baseball-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm67.31 162.64a90.16 90.16 0 0 1-4.46-5.14 4 4 0 0 0-6.24 5c1.58 2 3.26 3.9 5 5.76a91.82 91.82 0 0 1-123.22 0c1.74-1.86 3.42-3.78 5-5.76a4 4 0 0 0-6.24-5 90.16 90.16 0 0 1-4.46 5.14 91.81 91.81 0 0 1 0-125.28 90.16 90.16 0 0 1 4.46 5.14 4 4 0 0 0 6.24-5c-1.58-2-3.26-3.9-5-5.76a91.82 91.82 0 0 1 123.22 0 97.247 97.247 0 0 0-5 5.76 4 4 0 1 0 6.24 5 90.16 90.16 0 0 1 4.46-5.14 91.81 91.81 0 0 1 0 125.28Zm-103.37-46a98.57 98.57 0 0 1-4.3 16.67 4 4 0 0 1-3.78 2.69 3.88 3.88 0 0 1-1.33-.23 4 4 0 0 1-2.44-5.1 92.07 92.07 0 0 0 4-15.33 4 4 0 0 1 7.88 1.32Zm0-33.32a4 4 0 0 1-3.28 4.6 3.77 3.77 0 0 1-.66.08 4 4 0 0 1-3.94-3.34 92.07 92.07 0 0 0-4-15.33 4 4 0 0 1 7.55-2.66 98.57 98.57 0 0 1 4.33 16.67Zm84 47.33a4 4 0 0 1-2.44 5.1 3.88 3.88 0 0 1-1.33.23 4 4 0 0 1-3.78-2.67 98.57 98.57 0 0 1-4.3-16.67 4 4 0 0 1 7.88-1.32 92.07 92.07 0 0 0 3.94 15.35Zm0-61.34a92.07 92.07 0 0 0-4 15.33A4 4 0 0 1 168 116a3.68 3.68 0 0 1-.66-.06 4 4 0 0 1-3.28-4.6 98.57 98.57 0 0 1 4.3-16.67 4 4 0 0 1 7.55 2.66Z"
}));
var _default = exports.default = Baseball;