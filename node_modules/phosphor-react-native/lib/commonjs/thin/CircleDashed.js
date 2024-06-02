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
  className: "circle-dashed-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M155.87 36.06a4 4 0 0 1-3.87 3 4.29 4.29 0 0 1-1-.13 92 92 0 0 0-46 0 4 4 0 0 1-2-7.74 100.09 100.09 0 0 1 50 0 4 4 0 0 1 2.87 4.87ZM56.65 57.94a100.18 100.18 0 0 0-25 43.29 4 4 0 0 0 7.71 2.14 92.06 92.06 0 0 1 23-39.82 4 4 0 1 0-5.7-5.61Zm-17.29 94.68a4 4 0 0 0-7.71 2.14 100.08 100.08 0 0 0 25 43.31 4 4 0 1 0 5.71-5.61 91.91 91.91 0 0 1-23-39.84ZM151 217.09a92 92 0 0 1-46 0 4 4 0 0 0-2 7.75 100 100 0 0 0 50 0 4 4 0 1 0-2-7.74Zm70.58-67.25a4 4 0 0 0-4.92 2.79 92.12 92.12 0 0 1-23 39.82 4 4 0 1 0 5.7 5.61 100.18 100.18 0 0 0 25-43.29 4 4 0 0 0-2.78-4.93Zm-4.94-46.46a4 4 0 0 0 7.71-2.14 100.08 100.08 0 0 0-25-43.31 4 4 0 1 0-5.71 5.61 91.91 91.91 0 0 1 23 39.84Z"
}));
var _default = exports.default = CircleDashed;