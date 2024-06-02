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
const Baby = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baby-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M134.16 24.1a4 4 0 0 0-3.56 1.81C120.3 41.48 120 55.79 120 56a8 8 0 0 0 9.68 7.79 8.24 8.24 0 0 0 6.32-8.11 8 8 0 0 1 8.8-7.68 8.14 8.14 0 0 1 7.2 8.23 24 24 0 0 1-48-.27c0-.63.09-10.78 5.44-24a4 4 0 0 0-4.59-5.39 104.16 104.16 0 0 0-80.78 105.09C26 186.72 71.23 231 126.32 231.9a104 104 0 0 0 7.84-207.8ZM80 127.91a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm80.27 54.77a61 61 0 0 1-64.54 0 8 8 0 0 1 8.54-13.54 45 45 0 0 0 47.46 0 8 8 0 0 1 8.54 13.54Zm3.73-42.77a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}));
var _default = exports.default = Baby;