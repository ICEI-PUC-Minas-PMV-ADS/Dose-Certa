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
const BellSimpleZ = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bell-simple-z-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12Zm69.33 46A19.77 19.77 0 0 1 208 196H48a19.77 19.77 0 0 1-17.31-10 20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-24-14c-8.84-18-13.33-40.87-13.33-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68ZM160 212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Z"
}));
var _default = exports.default = BellSimpleZ;