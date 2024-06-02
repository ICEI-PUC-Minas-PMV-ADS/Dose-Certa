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
const PersonSimpleThrow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-throw-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M96 56a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm125 43.36c-1.5-1.2-37.22-29-89.51 6.57-45.49 30.91-71.92 20.3-72.17 20.19a8 8 0 1 0-6.63 14.56c.61.28 7.49 3.27 19.67 3.27 14.21 0 35.64-4.11 62.77-21.29-2.28 29.41-12.73 83.47-73.43 101.68a8 8 0 1 0 4.6 15.32c34.83-10.45 59.45-32.34 73.2-65.08a141.86 141.86 0 0 0 5.1-14.33l22.08 18.4-14.27 42.82a8 8 0 0 0 15.18 5.06l16-48a8 8 0 0 0-2.47-8.68l-32.42-27a215.91 215.91 0 0 0 3-30.34c36.18-18.57 59-.85 59.28-.65a8 8 0 1 0 10-12.48ZM64 112a16 16 0 1 0-16-16 16 16 0 0 0 16 16Z"
}));
var _default = exports.default = PersonSimpleThrow;