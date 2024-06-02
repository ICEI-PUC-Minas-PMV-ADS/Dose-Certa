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
const PlugCharging = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plug-charging-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 60h-52V16a4 4 0 0 0-8 0v44H92V16a4 4 0 0 0-8 0v44H32.55C28.13 60 28 63.59 28 64a4 4 0 0 0 4 4h20v92a36 36 0 0 0 36 36h36v44a4 4 0 0 0 8 0v-44h36a36 36 0 0 0 36-36V68h20a4 4 0 0 0 0-8Zm-28 100a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V68h136Zm-87.29-29.72a4 4 0 0 1-.46-3.68l12-32a4 4 0 0 1 7.5 2.8l-10 26.6H144a4 4 0 0 1 3.75 5.4l-12 32a4 4 0 1 1-7.5-2.8l10-26.6H112a4 4 0 0 1-3.29-1.72Z"
}));
var _default = exports.default = PlugCharging;