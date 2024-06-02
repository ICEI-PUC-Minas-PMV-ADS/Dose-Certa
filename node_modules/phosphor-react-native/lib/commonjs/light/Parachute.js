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
const Parachute = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "parachute-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 120a102 102 0 0 0-204 0 6 6 0 0 0 2.27 4.69l.13.11L122 195v23h-10a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12h-10v-23l93.6-70.2a6 6 0 0 0 2.4-4.8Zm-12.2-6h-43.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2 90.2 0 0 1 217.8 114ZM128 31.43A77.14 77.14 0 0 1 143.42 49c13.84 21.08 17.82 46 18.47 65H94.11c1.06-31.88 10.49-52.86 18.47-65A76.69 76.69 0 0 1 128 31.43ZM157.8 126 128 179.65 98.2 126Zm-73.33 0 24.62 44.32L50 126Zm87.06 0H206l-59.09 44.32Zm-61-94.3C98.6 45.38 83.4 71.08 82.1 114H38.2a90.2 90.2 0 0 1 72.33-82.3Z"
}));
var _default = exports.default = Parachute;