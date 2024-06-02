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
const Baseball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baseball-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm67.31 161.67c-1-1.12-2-2.26-2.9-3.42a6 6 0 0 0-9.36 7.5c1.19 1.49 2.43 2.94 3.71 4.37a89.84 89.84 0 0 1-117.52 0c1.28-1.43 2.52-2.88 3.71-4.37a6 6 0 0 0-9.36-7.5c-.93 1.16-1.91 2.3-2.9 3.42a89.8 89.8 0 0 1 0-119.34c1 1.12 2 2.26 2.9 3.42A6 6 0 0 0 68.28 74 6 6 0 0 0 73 64.25a101.97 101.97 0 0 0-3.71-4.37 89.84 89.84 0 0 1 117.52 0 101.97 101.97 0 0 0-3.71 4.37 6 6 0 1 0 9.36 7.5c.93-1.16 1.91-2.3 2.9-3.42a89.8 89.8 0 0 1 0 119.34ZM93.92 145a101.43 101.43 0 0 1-4.4 17 6 6 0 1 1-11.31-4 89.91 89.91 0 0 0 3.87-15 6 6 0 1 1 11.84 2Zm0-34a6 6 0 0 1-4.92 6.92 6.74 6.74 0 0 1-1 .08 6 6 0 0 1-5.91-5 89.91 89.91 0 0 0-3.87-15 6 6 0 1 1 11.31-4 101.43 101.43 0 0 1 4.39 17Zm83.87 47a6 6 0 1 1-11.31 4 101.43 101.43 0 0 1-4.4-17 6 6 0 1 1 11.84-2 89.91 89.91 0 0 0 3.87 15Zm0-60a89.91 89.91 0 0 0-3.87 15 6 6 0 0 1-5.91 5 6.74 6.74 0 0 1-1-.08 6 6 0 0 1-4.93-6.91 101.43 101.43 0 0 1 4.4-17 6 6 0 1 1 11.31 4Z"
}));
var _default = exports.default = Baseball;