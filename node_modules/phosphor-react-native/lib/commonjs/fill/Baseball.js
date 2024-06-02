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
  className: "baseball-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M209.35 63.28a4 4 0 0 0-5.8-.47 88.94 88.94 0 0 0-9.4 10 8.2 8.2 0 0 1-11 1.81A8 8 0 0 1 181.49 63a104.17 104.17 0 0 1 10.33-11.14 4 4 0 0 0-.22-6.09 103.79 103.79 0 0 0-127.2 0 4 4 0 0 0-.22 6.09 104.64 104.64 0 0 1 10.17 10.93A8.18 8.18 0 0 1 74 73.58 8 8 0 0 1 62 73a88.41 88.41 0 0 0-9.59-10.2 4 4 0 0 0-5.79.48 103.79 103.79 0 0 0 0 129.44 4 4 0 0 0 5.8.47 88.94 88.94 0 0 0 9.4-10 8.2 8.2 0 0 1 11-1.81A8 8 0 0 1 74.51 193a104.17 104.17 0 0 1-10.33 11.14 4 4 0 0 0 .22 6.09 103.79 103.79 0 0 0 127.2 0 4 4 0 0 0 .22-6.09A104.17 104.17 0 0 1 181.49 193a8 8 0 0 1 1.7-11.59 8.2 8.2 0 0 1 11 1.81 88.94 88.94 0 0 0 9.4 10 4 4 0 0 0 5.8-.47 103.79 103.79 0 0 0 0-129.44ZM81.71 88.3a8.18 8.18 0 0 1 9.79 5.29 105.1 105.1 0 0 1 4.34 16.77A8 8 0 0 1 88 120a8 8 0 0 1-8-7.35c-.38-4.44-1.11-8.91-3.2-12.84a8 8 0 0 1 4.91-11.51Zm14.13 57.29a103.54 103.54 0 0 1-4.43 17.08 8 8 0 0 1-11.17 4.46 8.19 8.19 0 0 1-3.82-10.08 87.84 87.84 0 0 0 3.69-14.37 8 8 0 0 1 10.18-6.35 8.17 8.17 0 0 1 5.55 9.26Zm79.92 21.54a8 8 0 0 1-11.17-4.46 103.54 103.54 0 0 1-4.43-17.08 8.18 8.18 0 0 1 5.55-9.26 8 8 0 0 1 10.18 6.35 87.84 87.84 0 0 0 3.69 14.37 8.19 8.19 0 0 1-3.82 10.08Zm3.41-67.32c-2.09 3.93-2.82 8.4-3.2 12.84a8 8 0 0 1-10.17 7 8.16 8.16 0 0 1-5.65-9.25 103.59 103.59 0 0 1 4.35-16.8 8.17 8.17 0 0 1 9.79-5.3 8 8 0 0 1 4.88 11.51Z"
}));
var _default = exports.default = Baseball;