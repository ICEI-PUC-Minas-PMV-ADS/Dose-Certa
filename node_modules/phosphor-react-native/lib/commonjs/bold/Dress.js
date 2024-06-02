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
const Dress = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dress-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M218.38 208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193 82.56c.06-.09.12-.18.17-.27a20 20 0 0 0 0-20.58c-.14-.24-.3-.48-.46-.71L172 31.44V12a12 12 0 0 0-24 0v19l-4.38 5.47a20 20 0 0 1-31.24 0L108 31V12a12 12 0 0 0-24 0v19.44L63.31 61c-.16.23-.32.47-.46.71a20 20 0 0 0 0 20.58c0 .09.11.18.17.27l19.31 30.32-44.54 94.87c-.06.12-.11.25-.17.37A20 20 0 0 0 56 236h144a20 20 0 0 0 18.39-27.88ZM128 68a43.75 43.75 0 0 0 31.21-13l12 17.1-17.79 27.9h-50.84L84.82 72.12l12-17.1A43.75 43.75 0 0 0 128 68ZM62.31 212l41.31-88h48.76l41.31 88Z"
}));
var _default = exports.default = Dress;