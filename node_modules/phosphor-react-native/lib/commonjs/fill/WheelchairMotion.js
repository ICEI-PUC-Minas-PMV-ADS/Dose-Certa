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
const WheelchairMotion = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wheelchair-motion-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 48a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm16 112a8 8 0 0 0-8 8 48 48 0 1 1-48-48 8 8 0 0 0 0-16 64 64 0 1 0 64 64 8 8 0 0 0-8-8Zm40-32h-58.18l17.12-29.78a8 8 0 0 0-2.57-10.69A96 96 0 0 0 42.91 94a8 8 0 1 0 10.18 12.33 80.09 80.09 0 0 1 88-9.17L121.06 132a8 8 0 0 0 6.94 12h62.24l-14.08 70.43a8 8 0 0 0 6.27 9.41 7.77 7.77 0 0 0 1.57.16 8 8 0 0 0 7.83-6.43l16-80A8 8 0 0 0 200 128Z"
}));
var _default = exports.default = WheelchairMotion;