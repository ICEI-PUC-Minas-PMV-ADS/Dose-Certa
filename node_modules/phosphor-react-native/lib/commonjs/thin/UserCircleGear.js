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
const UserCircleGear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-circle-gear-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M226.25 66.54 219 62.33a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 0 0-4-6.92l-7.31 4.21A20 20 0 0 0 204 36.4V28a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.25 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46 3.92 3.92 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 196 75.6V84a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.92 3.92 0 0 0 2 .54 4 4 0 0 0 2-7.46ZM200 68a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm22 40.06a4 4 0 0 0-3.28 4.6A93.58 93.58 0 0 1 220 128a91.69 91.69 0 0 1-26.83 64.87 75.61 75.61 0 0 0-44.51-34 44 44 0 1 0-41.32 0 75.61 75.61 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27 4 4 0 0 0 1.32-7.89 99.89 99.89 0 1 0 82 82 4 4 0 0 0-4.66-3.32ZM92 120a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm-23.13 78.42a68 68 0 0 1 118.27 0 91.81 91.81 0 0 1-118.27 0Z"
}));
var _default = exports.default = UserCircleGear;