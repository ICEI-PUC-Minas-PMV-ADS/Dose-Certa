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
const Broadcast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "broadcast-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 90a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm78-26a77.74 77.74 0 0 1-19.86 52 6 6 0 0 1-8.94-8 65.93 65.93 0 0 0 0-88 6 6 0 1 1 8.94-8A77.74 77.74 0 0 1 206 128ZM67.18 102.31A65.93 65.93 0 0 0 78.8 172a6 6 0 0 1-.47 8.47 6 6 0 0 1-8.47-.47 77.93 77.93 0 0 1 0-104 6 6 0 1 1 8.94 8 66.21 66.21 0 0 0-11.62 18.31ZM246 128a117.71 117.71 0 0 1-33.71 82.58 6 6 0 0 1-8.58-8.4 105.88 105.88 0 0 0 0-148.36 6 6 0 0 1 8.58-8.4A117.71 117.71 0 0 1 246 128ZM52.29 202.18a6 6 0 0 1-8.58 8.4 117.92 117.92 0 0 1 0-165.16 6 6 0 1 1 8.58 8.4 105.88 105.88 0 0 0 0 148.36Z"
}));
var _default = exports.default = Broadcast;