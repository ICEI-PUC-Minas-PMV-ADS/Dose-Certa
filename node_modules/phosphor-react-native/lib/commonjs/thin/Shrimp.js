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
const Shrimp = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shrimp-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M140 116a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm79.93-33.35A76.07 76.07 0 0 1 144 156h-32a16 16 0 0 0 0 32h56a4 4 0 0 1 0 8h-52v24h36a4 4 0 0 1 0 8H96a76 76 0 0 1 0-152h116a16 16 0 0 0 0-32h-84a20 20 0 0 1-20-20 4 4 0 0 1 8 0 12 12 0 0 0 12 12h84a24 24 0 0 1 7.93 46.65ZM50.47 202.46l37.78-27A24.75 24.75 0 0 1 88 172a23.85 23.85 0 0 1 2-9.6l-59.9-27.23a68 68 0 0 0 20.36 67.29Zm40.43-19L57 207.64A67.59 67.59 0 0 0 96 220h12v-24.34a24.07 24.07 0 0 1-17.1-12.24Zm17.1-35.12V84H96a68.1 68.1 0 0 0-63.42 43.51l61.89 28.13a23.94 23.94 0 0 1 13.53-7.3ZM211.88 84H116v64h28a68.08 68.08 0 0 0 67.88-64Z"
}));
var _default = exports.default = Shrimp;