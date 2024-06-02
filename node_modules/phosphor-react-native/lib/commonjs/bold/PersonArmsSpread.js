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
const PersonArmsSpread = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-arms-spread-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.4 86.85A23.55 23.55 0 0 0 212 68h-61.41a36 36 0 1 0-45.18 0H44a24 24 0 0 0-10 45.79l.19.09 47.63 21L61.76 211a24 24 0 0 0 12.11 30.74A23.77 23.77 0 0 0 84 244a24 24 0 0 0 21.52-13.29l22.48-38.8 22.51 38.8A24 24 0 0 0 194.24 211l-20-76.15 47.63-21 .19-.09a23.55 23.55 0 0 0 13.34-26.91ZM128 28a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm27.16 89a12 12 0 0 0-6.77 14l22.87 87a11.87 11.87 0 0 0 .73 2c-.15-.32-.32-.64-.5-.95L138.38 162a12 12 0 0 0-20.76 0l-33.11 57.05c-.18.31-.35.63-.5.95a11.87 11.87 0 0 0 .73-2l22.87-86.92a12 12 0 0 0-6.77-14L44 92h168Z"
}));
var _default = exports.default = PersonArmsSpread;