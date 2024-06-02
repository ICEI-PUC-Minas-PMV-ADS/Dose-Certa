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
const IntersectThree = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "intersect-three__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M195.88 96c.07-1.31.12-2.63.12-4a68 68 0 0 0-136 0c0 1.33 0 2.65.12 4A68 68 0 1 0 128 213.65 68 68 0 1 0 195.88 96ZM128 193.47a51.89 51.89 0 0 1-16-35.38 67.55 67.55 0 0 0 31.9 0 51.89 51.89 0 0 1-15.9 35.38Zm0-49.47a51.93 51.93 0 0 1-14.08-1.95A52.06 52.06 0 0 1 128 118.53a52.06 52.06 0 0 1 14.08 23.52A51.93 51.93 0 0 1 128 144Zm-28.77-8.71A52.19 52.19 0 0 1 77.92 106a51.88 51.88 0 0 1 36.79 3.28 68.17 68.17 0 0 0-15.48 26.01Zm42.06-26.06a51.88 51.88 0 0 1 36.79-3.23 52.19 52.19 0 0 1-21.31 29.34 68.17 68.17 0 0 0-15.48-26.11ZM128 40a52.06 52.06 0 0 1 52 49.91 67.72 67.72 0 0 0-52 8.44 67.72 67.72 0 0 0-51.95-8.44A52.06 52.06 0 0 1 128 40ZM40 156a52 52 0 0 1 23.23-43.29A68.36 68.36 0 0 0 96.12 152c-.07 1.31-.12 2.63-.12 4a67.74 67.74 0 0 0 18.71 46.77A52 52 0 0 1 40 156Zm124 52a51.65 51.65 0 0 1-22.71-5.23A67.74 67.74 0 0 0 160 156c0-1.33-.05-2.65-.12-4a68.36 68.36 0 0 0 32.89-39.33A52 52 0 0 1 164 208Z"
}));
var _default = exports.default = IntersectThree;