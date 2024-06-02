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
const Tooth = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tooth-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M169.49 67.71 138.77 80l30.72 12.28A4 4 0 0 1 168 100a3.91 3.91 0 0 1-1.49-.29L128 84.31l-38.51 15.4A3.91 3.91 0 0 1 88 100a4 4 0 0 1-1.49-7.72L117.23 80 86.51 67.71a4 4 0 0 1 3-7.43L128 75.69l38.51-15.41a4 4 0 0 1 3 7.43Zm50.51 12c.07 71.08-23.16 130.07-45.65 146.05a11.74 11.74 0 0 1-11.93 1 11.91 11.91 0 0 1-6.9-10C154.35 200.93 149.33 164 128 164s-26.35 36.94-27.52 52.82a12.11 12.11 0 0 1-12 11.19 11.77 11.77 0 0 1-6.83-2.2c-22.49-16-45.72-75-45.65-146A52 52 0 0 1 88 28h80a52 52 0 0 1 52 51.75Zm-8 0A44 44 0 0 0 168 36H88a44 44 0 0 0-44 43.76c-.07 67.58 21.9 125 42.29 139.51a3.77 3.77 0 0 0 3.89.33 4 4 0 0 0 2.32-3.37C95.36 177.39 108 156 128 156s32.64 21.4 35.5 60.24a4 4 0 0 0 2.32 3.37 3.77 3.77 0 0 0 3.89-.33C190.1 204.8 212.07 147.34 212 79.76Z"
}));
var _default = exports.default = Tooth;