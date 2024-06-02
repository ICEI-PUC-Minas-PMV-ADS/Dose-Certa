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
const Cactus = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cactus-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 116a60 60 0 0 1-60 60h-12v40H96v-80H84a60 60 0 0 1-60-60 20 20 0 0 1 20-20 20 20 0 0 1 20 20 20 20 0 0 0 20 20h12V56a32 32 0 0 1 32-32 32 32 0 0 1 32 32v80h12a20 20 0 0 0 20-20 20 20 0 0 1 20-20 20 20 0 0 1 20 20Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68 28 28 0 0 0-56 0 12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12 28 28 0 0 0-56 0 68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16ZM96 128H84a52.06 52.06 0 0 1-52-52 12 12 0 0 1 24 0 28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28 12 12 0 0 1 24 0 52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8Z"
}));
var _default = exports.default = Cactus;