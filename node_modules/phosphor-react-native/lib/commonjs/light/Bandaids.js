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
const Bandaids = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bandaids-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m181.74 128 29.13-29.13a38 38 0 1 0-53.74-53.74L128 74.26 98.87 45.13a38 38 0 1 0-53.74 53.74L74.26 128l-29.13 29.13a38 38 0 1 0 53.74 53.74L128 181.74l29.13 29.13a38 38 0 1 0 53.74-53.74Zm-16.12-74.38a26 26 0 1 1 36.76 36.77l-29.13 29.13-36.76-36.77Zm-.85 74.38L128 164.77 91.23 128 128 91.23ZM53.62 90.38a26 26 0 1 1 36.76-36.76l29.13 29.13-36.76 36.77Zm36.76 112a26 26 0 1 1-36.76-36.76l29.13-29.13 36.76 36.76Zm112 0a26 26 0 0 1-36.76 0l-29.14-29.13 36.77-36.77 29.13 29.14a26 26 0 0 1 0 36.76ZM118 128a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z"
}));
var _default = exports.default = Bandaids;