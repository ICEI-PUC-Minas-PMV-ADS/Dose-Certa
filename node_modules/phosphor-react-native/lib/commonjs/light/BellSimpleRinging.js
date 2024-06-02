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
const BellSimpleRinging = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bell-simple-ringing-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M165.92 224a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Zm59.69-162.77a109.23 109.23 0 0 0-38.41-42.3 6 6 0 0 0-6.4 10.14A96 96 0 0 1 215 66.76a6 6 0 1 0 10.65-5.53ZM41 66.76a96 96 0 0 1 34.2-37.69 6 6 0 0 0-6.4-10.14 109.23 109.23 0 0 0-38.41 42.3A6 6 0 1 0 41 66.76Zm179 110.17A14 14 0 0 1 208 198H48a14 14 0 0 1-12.06-21C45.13 161.08 50 138.62 50 112a78 78 0 0 1 156 0c0 27 4.74 48.84 14.08 64.93Zm-10.37 6C199.29 165 194 141.14 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2 1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1 2 2 0 0 0 .01-2Z"
}));
var _default = exports.default = BellSimpleRinging;