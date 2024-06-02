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
const WarningOctagon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "warning-octagon-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm108-44.45v72.9a13.92 13.92 0 0 1-4.1 9.9l-51.55 51.55a13.92 13.92 0 0 1-9.9 4.1h-72.9a13.92 13.92 0 0 1-9.9-4.1L30.1 174.35a13.92 13.92 0 0 1-4.1-9.9v-72.9a13.92 13.92 0 0 1 4.1-9.9L81.65 30.1a13.92 13.92 0 0 1 9.9-4.1h72.9a13.92 13.92 0 0 1 9.9 4.1l51.55 51.55a13.92 13.92 0 0 1 4.1 9.9Zm-12 0a2 2 0 0 0-.59-1.42l-51.54-51.54a2 2 0 0 0-1.42-.59h-72.9a2 2 0 0 0-1.41.59L38.58 90.13a2 2 0 0 0-.58 1.42v72.9a2 2 0 0 0 .59 1.42l51.54 51.54a2 2 0 0 0 1.42.59h72.9a2 2 0 0 0 1.41-.59l51.56-51.54a2 2 0 0 0 .58-1.42ZM128 162a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"
}));
var _default = exports.default = WarningOctagon;