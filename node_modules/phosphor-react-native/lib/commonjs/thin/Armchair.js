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
  className: "armchair-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 92.23V72a36 36 0 0 0-36-36H80a36 36 0 0 0-36 36v20.23a36 36 0 0 0 0 71.55V200a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36.22a36 36 0 0 0 0-71.55ZM80 44h96a28 28 0 0 1 28 28v20.23A36 36 0 0 0 172 128v4H84v-4a36 36 0 0 0-32-35.77V72a28 28 0 0 1 28-28Zm128.3 112h-.3a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-40a4 4 0 0 0-4-4h-.3A28 28 0 1 1 76 128v40a4 4 0 0 0 8 0v-28h88v28a4 4 0 0 0 8 0v-40a28 28 0 1 1 28.3 28Z"
}));
var _default = exports.default = Armchair;