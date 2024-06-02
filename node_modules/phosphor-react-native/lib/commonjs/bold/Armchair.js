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
const Armchair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "armchair-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 78.53V72a44.05 44.05 0 0 0-44-44H80a44.05 44.05 0 0 0-44 44v6.53a52 52 0 0 0 0 99V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-22.49a52 52 0 0 0 0-99ZM80 52h96a20 20 0 0 1 20 20v4.62A52.09 52.09 0 0 0 152.17 124h-48.34A52.09 52.09 0 0 0 60 76.62V72a20 20 0 0 1 20-20Zm126.81 103.86A12 12 0 0 0 196 167.8V196H60v-28.2a12 12 0 0 0-10.81-11.94A28 28 0 1 1 80 128v36a12 12 0 0 0 24 0v-16h48v16a12 12 0 0 0 24 0v-36a28 28 0 1 1 30.81 27.86Z"
}));
var _default = exports.default = Armchair;