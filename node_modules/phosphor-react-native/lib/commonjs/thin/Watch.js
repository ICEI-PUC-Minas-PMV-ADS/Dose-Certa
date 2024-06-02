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
const Watch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "watch-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204 128a75.94 75.94 0 0 0-32.35-62.16l-6.52-36A12 12 0 0 0 153.32 20h-50.64a12 12 0 0 0-11.81 9.86l-6.52 36a75.89 75.89 0 0 0 0 124.32l6.52 36a12 12 0 0 0 11.81 9.82h50.64a12 12 0 0 0 11.81-9.86l6.52-36A75.94 75.94 0 0 0 204 128ZM98.74 31.29a4 4 0 0 1 3.94-3.29h50.64a4 4 0 0 1 3.94 3.29l5.26 29a75.69 75.69 0 0 0-69 0Zm58.52 193.42a4 4 0 0 1-3.94 3.29h-50.64a4 4 0 0 1-3.94-3.29l-5.26-29a75.69 75.69 0 0 0 69 0ZM128 196a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68Zm44-68a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Watch;