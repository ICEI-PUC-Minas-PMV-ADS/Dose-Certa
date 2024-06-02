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
const UsersFour = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "users-four-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M24.79 121.59a12 12 0 0 0 16.81-2.38 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.24 12.24 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 72 72 0 0 0-25.3-21.22 40 40 0 1 0-64.58 0A71 71 0 0 0 128 94.31a71 71 0 0 0-15.71-10.74 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 2.38 16.8ZM176 44a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm128.29 151.57a40 40 0 1 0-64.58 0A71.31 71.31 0 0 0 128 206.3a71.31 71.31 0 0 0-15.71-10.73 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 19.19 14.42 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.24 12.24 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 71.91 71.91 0 0 0-25.3-21.23ZM80 156a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16Z"
}));
var _default = exports.default = UsersFour;