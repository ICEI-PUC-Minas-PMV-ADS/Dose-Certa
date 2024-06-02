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
const Bandaids = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bandaids-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m178.91 128 30.55-30.54a36 36 0 0 0-50.92-50.92L128 77.09 97.46 46.54a36 36 0 0 0-50.92 50.92L77.09 128l-30.55 30.54a36 36 0 0 0 50.92 50.92L128 178.91l30.54 30.55a36 36 0 0 0 50.92-50.92ZM164.2 52.2a28 28 0 0 1 39.6 39.6l-30.55 30.54-39.59-39.59Zm3.4 75.8L128 167.6 88.4 128 128 88.4ZM52.2 91.8a28 28 0 0 1 39.6-39.6l30.54 30.55-39.59 39.59Zm39.6 112a28 28 0 0 1-39.6-39.6l30.55-30.54 39.59 39.59Zm112 0a28 28 0 0 1-39.6 0l-30.54-30.55 39.59-39.59 30.55 30.54a28 28 0 0 1 0 39.6ZM120 128a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z"
}));
var _default = exports.default = Bandaids;