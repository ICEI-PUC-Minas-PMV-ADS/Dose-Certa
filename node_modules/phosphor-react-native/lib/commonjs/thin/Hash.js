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
const Hash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 92h-53.39l9.33-51.28a4 4 0 1 0-7.88-1.44L162.48 92h-55.87l9.33-51.28a4 4 0 1 0-7.88-1.44L98.48 92H48a4 4 0 0 0 0 8h49l-10.16 56H32a4 4 0 0 0 0 8h53.39l-9.33 51.28a4 4 0 0 0 3.22 4.65 3.65 3.65 0 0 0 .72.07 4 4 0 0 0 3.94-3.29L93.52 164h55.87l-9.33 51.28a4 4 0 0 0 3.22 4.65 3.65 3.65 0 0 0 .72.07 4 4 0 0 0 3.94-3.29l9.58-52.71H208a4 4 0 0 0 0-8h-49l10.19-56H224a4 4 0 0 0 0-8Zm-73.16 64H95l10.19-56H161Z"
}));
var _default = exports.default = Hash;