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
const FileRs = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-rs-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-8a12 12 0 0 0 0 24h12a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49ZM160 57l23 23h-23Zm-96 83H48a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a33.9 33.9 0 0 0 3.65-.21l6 10.26A12 12 0 0 0 94.37 202l-5.64-9.66A32 32 0 0 0 64 140Zm-4 24h4a8 8 0 0 1 0 16h-4Zm103.78 32.82a24.75 24.75 0 0 1-10.95 18.06c-6 4-13.27 5.15-19.73 5.15a63.75 63.75 0 0 1-16.23-2.21 12 12 0 0 1 6.46-23.12c6.81 1.86 15 1.61 16.39.06a2.48 2.48 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.52-5.39-1.56-11-3.18-15.75-6.27-7.62-4.92-11.21-12.45-10.11-21.2a24.45 24.45 0 0 1 10.69-17.75c6.06-4.09 14.17-5.83 24.1-5.18A68.53 68.53 0 0 1 151 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a79.5 79.5 0 0 0 7.91 2.59c5.48 1.58 11.68 3.37 16.8 6.82 7.79 5.26 11.46 13.26 10.24 22.53Z"
}));
var _default = exports.default = FileRs;