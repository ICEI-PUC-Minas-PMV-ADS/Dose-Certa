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
const Rewind = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rewind-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222.81 59.72a14 14 0 0 0-14.22.46L126 112.79V71.84a13.83 13.83 0 0 0-7.19-12.12 14 14 0 0 0-14.22.46l-88.18 56.17a13.79 13.79 0 0 0 0 23.3l88.18 56.17a14 14 0 0 0 14.22.46 13.83 13.83 0 0 0 7.19-12.12v-40.95l82.59 52.61a14 14 0 0 0 14.22.46 13.83 13.83 0 0 0 7.19-12.12V71.84a13.83 13.83 0 0 0-7.19-12.12ZM114 184.16a1.73 1.73 0 0 1-1 1.59 1.9 1.9 0 0 1-2-.06l-88.15-56.16a1.8 1.8 0 0 1 0-3.06L111 70.31a1.87 1.87 0 0 1 1-.32 2 2 0 0 1 1 .26 1.73 1.73 0 0 1 1 1.59Zm104 0a1.73 1.73 0 0 1-1 1.59 1.9 1.9 0 0 1-2-.06l-88.19-56.16a1.8 1.8 0 0 1 0-3.06L215 70.31a1.87 1.87 0 0 1 1-.32 2 2 0 0 1 1 .26 1.73 1.73 0 0 1 1 1.59Z"
}));
var _default = exports.default = Rewind;