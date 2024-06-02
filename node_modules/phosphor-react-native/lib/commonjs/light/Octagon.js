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
const Octagon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "octagon-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M225.9 81.65 174.35 30.1a13.92 13.92 0 0 0-9.9-4.1h-72.9a13.92 13.92 0 0 0-9.9 4.1L30.1 81.65a13.92 13.92 0 0 0-4.1 9.9v72.9a13.92 13.92 0 0 0 4.1 9.9l51.55 51.55a13.92 13.92 0 0 0 9.9 4.1h72.9a13.92 13.92 0 0 0 9.9-4.1l51.55-51.55a13.92 13.92 0 0 0 4.1-9.9v-72.9a13.92 13.92 0 0 0-4.1-9.9Zm-7.9 82.8a2 2 0 0 1-.59 1.42l-51.55 51.54a2 2 0 0 1-1.41.59h-72.9a2 2 0 0 1-1.42-.59l-51.54-51.54a2 2 0 0 1-.59-1.42v-72.9a2 2 0 0 1 .59-1.42l51.55-51.54a2 2 0 0 1 1.41-.59h72.9a2 2 0 0 1 1.42.59l51.54 51.55a2 2 0 0 1 .59 1.41Z"
}));
var _default = exports.default = Octagon;