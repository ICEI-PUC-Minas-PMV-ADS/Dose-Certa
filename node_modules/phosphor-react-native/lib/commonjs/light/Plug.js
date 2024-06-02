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
const Plug = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plug-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.24 67.76a6 6 0 0 0-8.48 0L192 103.51 152.49 64l35.75-35.76a6 6 0 0 0-8.48-8.48L144 55.51l-27.76-27.75a6 6 0 1 0-8.48 8.48l7.75 7.76-54.38 54.38a38 38 0 0 0 0 53.75l17.13 17.12-50.5 50.51a6 6 0 1 0 8.48 8.48l50.51-50.5 17.13 17.13a38 38 0 0 0 53.74 0L212 140.49l7.76 7.75a6 6 0 0 0 8.48-8.48L200.49 112l35.75-35.76a6 6 0 0 0 0-8.48Zm-87.11 118.62a26 26 0 0 1-36.77 0l-42.74-42.74a26 26 0 0 1 0-36.77L124 52.49 203.51 132Z"
}));
var _default = exports.default = Plug;