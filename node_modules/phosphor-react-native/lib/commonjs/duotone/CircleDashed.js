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
const CircleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "circle-dashed-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M96.26 37a8 8 0 0 1 5.74-9.71 104.11 104.11 0 0 1 52 0 8 8 0 0 1-2 15.75 8.15 8.15 0 0 1-2-.26 88.09 88.09 0 0 0-44 0A8 8 0 0 1 96.26 37ZM53.79 55.14a104 104 0 0 0-26 45 8 8 0 1 0 15.42 4.26 87.91 87.91 0 0 1 22-38.08 8 8 0 0 0-11.42-11.18Zm-10.58 96.41a8 8 0 1 0-15.42 4.28 104 104 0 0 0 26 45 8 8 0 1 0 11.41-11.21 88.14 88.14 0 0 1-21.99-38.07ZM150 213.22a88 88 0 0 1-44 0 8 8 0 1 0-4 15.49 104.11 104.11 0 0 0 52 0 8 8 0 0 0-4-15.49ZM222.65 146a8 8 0 0 0-9.85 5.57 87.88 87.88 0 0 1-22 38.09 8 8 0 1 0 11.42 11.21 104.05 104.05 0 0 0 26-45 8 8 0 0 0-5.57-9.87Zm-9.86-41.54a8 8 0 0 0 15.42-4.28 104 104 0 0 0-26-45 8 8 0 1 0-11.41 11.21 88.14 88.14 0 0 1 21.99 38.06Z"
}));
var _default = exports.default = CircleDashed;