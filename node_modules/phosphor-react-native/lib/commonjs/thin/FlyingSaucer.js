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
const FlyingSaucer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flying-saucer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M179.79 214.73a4 4 0 0 1-2.53 5.06 3.92 3.92 0 0 1-1.26.21 4 4 0 0 1-3.79-2.73l-8-24a4 4 0 1 1 7.58-2.54ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm-38.74.2a4 4 0 0 0-5.05 2.53l-8 24a4 4 0 1 0 7.58 2.54l8-24a4 4 0 0 0-2.53-5.07ZM244 112c0 29.16-50.95 52-116 52S12 141.16 12 112c0-20.31 24.8-38.16 64.84-46.8a59.65 59.65 0 0 1 93.31-11.9 60.91 60.91 0 0 1 9.42 12C219.36 74 244 91.77 244 112ZM76 96.83v3a11.9 11.9 0 0 0 9.24 11.64A192 192 0 0 0 128 116a192 192 0 0 0 42.75-4.48A11.9 11.9 0 0 0 180 99.88V96a52 52 0 0 0-52.69-52C99 44.37 76 68.07 76 96.83ZM236 112c0-15-20.13-29.37-51.94-37.43A59.9 59.9 0 0 1 188 96v3.91a19.87 19.87 0 0 1-15.45 19.41A199.69 199.69 0 0 1 128 124a199.69 199.69 0 0 1-44.54-4.68A19.86 19.86 0 0 1 68 99.91v-3.06a60.91 60.91 0 0 1 4.25-22.36C40.25 82.54 20 96.88 20 112c0 23.85 49.46 44 108 44s108-20.15 108-44Z"
}));
var _default = exports.default = FlyingSaucer;