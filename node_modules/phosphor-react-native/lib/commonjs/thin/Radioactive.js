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
const Radioactive = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "radioactive-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 132H40a12 12 0 0 1-8.81-3.91 12.2 12.2 0 0 1-3.14-9.31A99.82 99.82 0 0 1 70 46.2 12 12 0 0 1 87.29 50l25.94 45a4 4 0 0 1-6.92 4L80.36 54a4 4 0 0 0-5.78-1.27A91.83 91.83 0 0 0 36 119.5a4.2 4.2 0 0 0 1.08 3.2A3.9 3.9 0 0 0 40 124h52a4 4 0 0 1 0 8Zm136-13.22a99.82 99.82 0 0 0-42-72.58 12 12 0 0 0-17.28 3.8l-25.95 45a4 4 0 0 0 6.92 4l25.95-45a4 4 0 0 1 5.78-1.27A91.83 91.83 0 0 1 220 119.5a4.2 4.2 0 0 1-1.08 3.2A3.9 3.9 0 0 1 216 124h-52a4 4 0 0 0 0 8h52a12 12 0 0 0 8.81-3.91 12.2 12.2 0 0 0 3.19-9.31Zm-78.48 38.4a4 4 0 0 0-6.93 4l25.82 44.73a4 4 0 0 1 .35 3.22 3.9 3.9 0 0 1-2.12 2.41 92.24 92.24 0 0 1-77.18 0 3.9 3.9 0 0 1-2.12-2.41 4 4 0 0 1 .35-3.22l25.82-44.73a4 4 0 0 0-6.93-4l-25.87 44.73a12 12 0 0 0 5.34 16.89 100.24 100.24 0 0 0 83.9 0 12 12 0 0 0 5.34-16.89ZM128 136a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z"
}));
var _default = exports.default = Radioactive;