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
const Pizza = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pizza-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.6 63.47a13.91 13.91 0 0 0-6.35-8.67 199.48 199.48 0 0 0-206.5 0 14 14 0 0 0-4.7 19.2l96 157.27a14 14 0 0 0 24 0L236 74a13.81 13.81 0 0 0 1.6-10.53ZM61.07 118.2a26 26 0 1 1 26.1 42.8Zm91 70.32a26 26 0 0 1 26.91-44.1Zm33.2-54.4A37.65 37.65 0 0 0 168 130a38 38 0 0 0-22.25 68.8l-16 26.24a2 2 0 0 1-3.46 0l-32.7-53.55a38 38 0 1 0-38.93-63.79l-8.61-14.11a154.14 154.14 0 0 1 163.9 0Zm40.49-66.35-9.56 15.58a166.11 166.11 0 0 0-176.4 0l-9.51-15.58a1.88 1.88 0 0 1-.23-1.47 2 2 0 0 1 .94-1.24 187.46 187.46 0 0 1 194 0 2 2 0 0 1 .92 1.24 1.88 1.88 0 0 1-.21 1.47Z"
}));
var _default = exports.default = Pizza;