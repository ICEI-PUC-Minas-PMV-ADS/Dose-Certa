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
  className: "broadcast-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 128a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm40 0a79.74 79.74 0 0 0-20.37-53.33 8 8 0 1 0-11.92 10.67 64 64 0 0 1 0 85.33 8 8 0 0 0 11.92 10.67A79.79 79.79 0 0 0 208 128ZM80.29 85.34a8 8 0 1 0-11.92-10.67 79.94 79.94 0 0 0 0 106.67 8 8 0 0 0 11.92-10.67 63.95 63.95 0 0 1 0-85.33Zm158.28-4A119.48 119.48 0 0 0 213.71 44a8 8 0 1 0-11.42 11.2 103.9 103.9 0 0 1 0 145.56A8 8 0 1 0 213.71 212a120.12 120.12 0 0 0 24.86-130.71Zm-206.4 87.14A103.9 103.9 0 0 1 53.71 55.22 8 8 0 1 0 42.29 44a119.87 119.87 0 0 0 0 168 8 8 0 1 0 11.42-11.2 103.61 103.61 0 0 1-21.54-32.32Z"
}));
var _default = exports.default = Broadcast;