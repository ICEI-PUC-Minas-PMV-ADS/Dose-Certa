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
const FileJsx = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-jsx-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M151.78 196.8a24.73 24.73 0 0 1-10.95 18c-6 4-13.27 5.15-19.73 5.15a63.75 63.75 0 0 1-16.23-2.21 12 12 0 1 1 6.46-23.11c6.81 1.85 15 1.61 16.39.06a2.48 2.48 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.53-5.39-1.56-11-3.17-15.75-6.26-7.63-4.92-11.21-12.45-10.11-21.19a24.45 24.45 0 0 1 10.69-17.76c6.06-4.09 14.17-5.83 24.1-5.17A69 69 0 0 1 139 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a79.5 79.5 0 0 0 7.91 2.59c5.47 1.58 11.68 3.37 16.8 6.82 7.79 5.24 11.46 13.24 10.24 22.51ZM68 140a12 12 0 0 0-12 12v38a6 6 0 0 1-12 0 12 12 0 0 0-24 0 30 30 0 0 0 60 0v-38a12 12 0 0 0-12-12Zm138.75 40 15-21a12 12 0 0 0-19.53-14L192 159.34 181.76 145a12 12 0 0 0-19.53 14l15 21-15 21a12 12 0 1 0 19.53 14L192 200.62 202.23 215a12 12 0 0 0 19.53-14ZM36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0Zm124-28h23l-23-23Z"
}));
var _default = exports.default = FileJsx;