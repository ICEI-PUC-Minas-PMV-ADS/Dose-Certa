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
const Backspace = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "backspace-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 42H68.53a14 14 0 0 0-12 6.8l-45.67 76.11a6 6 0 0 0 0 6.18l45.67 76.11a14 14 0 0 0 12 6.8H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 158a2 2 0 0 1-2 2H68.53a2 2 0 0 1-1.71-1L23 128l43.82-73a2 2 0 0 1 1.71-1H216a2 2 0 0 1 2 2Zm-53.76-91.76L144.48 128l19.76 19.76a6 6 0 1 1-8.48 8.48L136 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L127.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L136 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48Z"
}));
var _default = exports.default = Backspace;