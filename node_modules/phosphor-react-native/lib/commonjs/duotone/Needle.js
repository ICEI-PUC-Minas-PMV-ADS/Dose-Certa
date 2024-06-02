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
const Needle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "needle-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m206.63 94.63-24 24C128 128 40 216 40 216s88-88 97.37-142.63l24-24a32 32 0 0 1 45.26 45.26Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M189.66 66.34a8 8 0 0 1 0 11.32l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 0ZM224 72a39.71 39.71 0 0 1-11.72 28.28l-24 24a8 8 0 0 1-4.3 2.23c-51.49 8.84-137.46 94.28-138.32 95.15a8 8 0 0 1-11.31-11.32C36 208.73 120.69 123.28 129.49 72a8 8 0 0 1 2.23-4.3l24-24A40 40 0 0 1 224 72Zm-16 0a24 24 0 0 0-41-17l-22.23 22.29c-4.41 21.15-18.9 46.19-35.49 69.43 23.24-16.59 48.28-31.08 69.43-35.49L201 89a23.85 23.85 0 0 0 7-17Z"
}));
var _default = exports.default = Needle;