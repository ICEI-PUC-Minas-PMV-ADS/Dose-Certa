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
const Bone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bone-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228.6 63.46A31.83 31.83 0 0 0 204.1 52h-.1a32 32 0 1 0-59.17 17 4 4 0 0 1-.51 5L74 144.36a4 4 0 0 1-5 .51A32 32 0 1 0 51.9 204h.1a32 32 0 1 0 59.16-17 4 4 0 0 1 .51-5L182 111.64a4 4 0 0 1 5-.51 32 32 0 0 0 41.6-47.67Zm-6.5 36.34a24 24 0 0 1-30.8 4.55 12 12 0 0 0-14.93 1.65L106 176.37a12 12 0 0 0-1.63 14.93 24 24 0 1 1-44.09 9 4 4 0 0 0-1.12-3.45 4 4 0 0 0-2.83-1.17 4.32 4.32 0 0 0-.62.05 24 24 0 1 1 9-44.09A12 12 0 0 0 79.63 150L150 79.63a12 12 0 0 0 1.63-14.93 24 24 0 1 1 44.09-9 4 4 0 0 0 4.57 4.57A24 24 0 0 1 222.1 99.8Z"
}));
var _default = exports.default = Bone;