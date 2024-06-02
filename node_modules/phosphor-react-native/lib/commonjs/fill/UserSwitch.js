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
const UserSwitch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-switch-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M84 120a44 44 0 1 1 44 44 44 44 0 0 1-44-44Zm126.16 57.18a8.21 8.21 0 0 0-10.86 2.41 87.42 87.42 0 0 1-5.52 6.85A79.76 79.76 0 0 0 172 165.1a4 4 0 0 0-4.84.32 59.8 59.8 0 0 1-78.26 0 4 4 0 0 0-4.9-.32 79.71 79.71 0 0 0-21.79 21.31A87.66 87.66 0 0 1 40.37 136h15.4a8.2 8.2 0 0 0 6.69-3.28 8 8 0 0 0-.8-10.38l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0-.8 10.38A8.2 8.2 0 0 0 8.23 136H24.3a104 104 0 0 0 188.18 52.67 8 8 0 0 0-2.32-11.49Zm45.23-52.24A8 8 0 0 0 248 120h-16.3A104 104 0 0 0 43.52 67.33a8 8 0 0 0 13 9.34A88 88 0 0 1 215.63 120H200a8 8 0 0 0-5.66 13.66l24 24a8 8 0 0 0 11.32 0l24-24a8 8 0 0 0 1.73-8.72Z"
}));
var _default = exports.default = UserSwitch;