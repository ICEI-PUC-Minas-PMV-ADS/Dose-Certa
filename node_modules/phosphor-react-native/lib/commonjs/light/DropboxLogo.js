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
const DropboxLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dropbox-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.42 151.07 190.54 120l44.88-31.07a6 6 0 0 0 0-9.86l-52-36a6 6 0 0 0-6.84 0L128 76.7 79.42 43.07a6 6 0 0 0-6.84 0l-52 36a6 6 0 0 0 0 9.86L65.46 120l-44.88 31.07a6 6 0 0 0 0 9.86l52 36a6 6 0 0 0 6.84 0L128 163.3l48.58 33.63a6 6 0 0 0 6.84 0l52-36a6 6 0 0 0 0-9.86ZM128 148.7 86.54 120 128 91.3l41.46 28.7Zm52-93.4L221.46 84 180 112.7 138.54 84Zm-104 0L117.46 84 76 112.7 34.54 84Zm0 129.4L34.54 156 76 127.3l41.46 28.7Zm104 0L138.54 156 180 127.3l41.46 28.7ZM156.82 208a6 6 0 0 1-1.51 8.35l-23.89 16.54a6 6 0 0 1-6.84 0l-23.89-16.54a6 6 0 0 1 6.83-9.86L128 220.7l20.48-14.17a6 6 0 0 1 8.34 1.47Z"
}));
var _default = exports.default = DropboxLogo;