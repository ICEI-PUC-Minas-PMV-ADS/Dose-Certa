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
  className: "bone-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M225.09 102.44a28 28 0 0 1-35.92 5.3 8 8 0 0 0-10 1.07l-70.38 70.38a8 8 0 0 0-1.07 10A28 28 0 1 1 56.3 199.7a28 28 0 1 1 10.51-51.42 8 8 0 0 0 10-1.07l70.38-70.38a8 8 0 0 0 1.07-10 28 28 0 1 1 51.42-10.51 28 28 0 0 1 25.41 46.12Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74 36 36 0 1 0-66.37 22.92.25.25 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37 36 36 0 1 0 66.37-22.92.54.54 0 0 1 0-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8 16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88 20 20 0 1 1-36.75 7.5 8 8 0 0 0-7.91-9.24 8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5 8 8 0 0 0 9.14 9.14 20 20 0 0 1 18.17 33Z"
}));
var _default = exports.default = Bone;