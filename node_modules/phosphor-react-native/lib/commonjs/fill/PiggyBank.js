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
const PiggyBank = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "piggy-bank-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M226 88.08c-.4-1-.82-2-1.25-3a87.93 87.93 0 0 0-30.17-37H216a8 8 0 0 0 0-16H112a88.12 88.12 0 0 0-87.72 81A32 32 0 0 0 0 144a8 8 0 0 0 16 0 16 16 0 0 1 8.57-14.16A87.69 87.69 0 0 0 46 178.22l12.56 35.16A16 16 0 0 0 73.64 224h12.72a16 16 0 0 0 15.07-10.62l1.92-5.38h57.3l1.92 5.38A16 16 0 0 0 177.64 224h12.72a16 16 0 0 0 15.07-10.62L221.64 168H224a24 24 0 0 0 24-24v-32a24 24 0 0 0-22-23.92ZM152 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm28 56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}));
var _default = exports.default = PiggyBank;