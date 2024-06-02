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
const Plugs = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plugs-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M148.24 139.76a6 6 0 0 0-8.48 0L120 159.51 96.49 136l19.75-19.76a6 6 0 0 0-8.48-8.48L88 127.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l7.75 7.76-24.72 24.73a30 30 0 0 0 0 42.42l6.78 6.79-29.81 29.82a6 6 0 1 0 8.48 8.48l29.82-29.81 6.79 6.78a30 30 0 0 0 42.42 0L132 188.49l7.76 7.75a6 6 0 0 0 8.48-8.48L128.49 168l19.75-19.76a6 6 0 0 0 0-8.48Zm-49.45 65a18 18 0 0 1-25.46 0l-22.06-22.09a18 18 0 0 1 0-25.46L76 132.49 123.51 180Zm137.45-185a6 6 0 0 0-8.48 0l-29.82 29.81-6.79-6.78a30 30 0 0 0-42.42 0L124 67.51l-7.76-7.75a6 6 0 0 0-8.48 8.48l80 80a6 6 0 0 0 8.48-8.48l-7.75-7.76 24.72-24.73a30 30 0 0 0 0-42.42l-6.78-6.79 29.81-29.82a6 6 0 0 0 0-8.48Zm-31.51 79L180 123.51 132.49 76l24.72-24.73a18 18 0 0 1 25.46 0l22.06 22.06a18 18 0 0 1 0 25.46Z"
}));
var _default = exports.default = Plugs;