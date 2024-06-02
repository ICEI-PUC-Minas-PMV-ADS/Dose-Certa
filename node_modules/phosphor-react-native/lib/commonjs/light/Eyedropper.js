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
const Eyedropper = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "eyedropper-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222 67.34a33.81 33.81 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47-52.41 52.45a37.79 37.79 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13 13.91 13.91 0 0 0 9.87 4.17 14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46 3.47 3.48a14 14 0 0 0 19.8 0l9-9a22 22 0 0 0 0-31.12l-.66-.66L212 91.85a33.76 33.76 0 0 0 10-24.51Zm-123.61 127a26 26 0 0 1-26 6.47 6 6 0 0 0-4.16.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31 25.88 25.88 0 0 1 6.26-26.72l52.44-52.45 36.76 36.78Zm105.16-111-25.38 25.56a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75 6 6 0 0 0 4.25-1.77L172 52.66c8.58-8.58 22.52-9 31.08-.85a22 22 0 0 1 .44 31.57Z"
}));
var _default = exports.default = Eyedropper;