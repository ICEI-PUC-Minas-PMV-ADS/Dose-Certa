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
const GlobeHemisphereEast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-hemisphere-east-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 24a83.57 83.57 0 0 1 44 12.48v16L151.79 96l-28.47 3.85-18.7-12.25a20 20 0 0 0-28.07 5.28l-20.94 31.3a19.89 19.89 0 0 0-3.38 11l-.16 28.69A84 84 0 0 1 128 44ZM68.41 187.14A20 20 0 0 0 76 171.55l.2-35 18.07-27 16.62 10.88a19.92 19.92 0 0 0 14.14 3.42l31.47-4.26a20 20 0 0 0 12.5-6.8L191.16 87a20.15 20.15 0 0 0 4.39-8.9 83.78 83.78 0 0 1 14.12 69.48l-11.34-10.37a20.08 20.08 0 0 0-21.17-3.71l-30.45 12.66a20.1 20.1 0 0 0-12.11 15.55l-2.39 16.2a20 20 0 0 0 14.71 22.26l16 4.18a83.78 83.78 0 0 1-94.47-17.24Zm116.77 2.32-1.63-1.63a20.05 20.05 0 0 0-9.08-5.22l-18-4.72 1.53-10.41 26-10.81 16 14.59a84.84 84.84 0 0 1-14.82 18.2Z"
}));
var _default = exports.default = GlobeHemisphereEast;