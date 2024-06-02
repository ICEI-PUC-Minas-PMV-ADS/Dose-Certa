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
const UserCircleGear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-circle-gear-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m228.25 63.07-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.92 23.92 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.92 23.92 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93 7.92 7.92 0 0 0 4-1.07l4.67-2.7a23.92 23.92 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.92 23.92 0 0 0 7.58-4.39l4.67 2.7a7.92 7.92 0 0 0 4 1.07 8 8 0 0 0 4-14.93ZM200 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm-72 12a44 44 0 1 1-44 44 44 44 0 0 1 44-44Zm102.56 34.68a103.92 103.92 0 1 1-85.24-85.24 8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41A79.71 79.71 0 0 1 84 165.1a4 4 0 0 1 4.83.32 59.81 59.81 0 0 0 78.27 0 4 4 0 0 1 4.84-.32 79.86 79.86 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68 8 8 0 1 1 15.78-2.64Z"
}));
var _default = exports.default = UserCircleGear;