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
const Hamburger = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hamburger-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M48.07 100h159.86a12 12 0 0 0 11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11 28 128 28s-43.51 5.76-60.27 16.22-28.07 25.19-31.46 41.23A12 12 0 0 0 48.07 100Zm-4-12.89C50.26 58 86.33 36 128 36s77.74 22 83.91 51.11a4 4 0 0 1-.82 3.39 4 4 0 0 1-3.16 1.5H48.07a4 4 0 0 1-3.16-1.5 4 4 0 0 1-.82-3.39Zm186.54 69.13-42.56 15.48-38.58-15.43a4 4 0 0 0-3 0L108 171.69l-38.51-15.4a4 4 0 0 0-2.86 0l-44 16A4 4 0 0 0 24 180a4.08 4.08 0 0 0 1.37-.24L44 173v11a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36v-12.47l21.37-7.77a4 4 0 0 0-2.74-7.52ZM204 184a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28v-13.93l15.93-5.79 38.58 15.43a4 4 0 0 0 3 0l38.49-15.4 38.51 15.4a4 4 0 0 0 2.86 0l14.63-5.27ZM20 128a4 4 0 0 1 4-4h208a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4Z"
}));
var _default = exports.default = Hamburger;