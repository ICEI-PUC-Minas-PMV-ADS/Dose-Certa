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
const FileSvg = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-svg-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 1 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83ZM156 41.65 198.34 84H156ZM83.85 195.8a17 17 0 0 1-7.43 12.41C72 211.12 66.38 212 61.2 212a57.89 57.89 0 0 1-14.2-1.89 4 4 0 1 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.11 61.11 0 0 1 10.47 1.61 4 4 0 0 1-2 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08 9.76 2.85 23.14 6.69 21.34 20.65Zm63.92-42.45-20 56a4 4 0 0 1-7.53 0l-20-56a4 4 0 1 1 7.53-2.7L124 196.11l16.23-45.46a4 4 0 1 1 7.53 2.7ZM212 184v16.87a4 4 0 0 1-1.11 2.77A26.11 26.11 0 0 1 192 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.41 25.41 0 0 1 14.24 4.43 4 4 0 1 1-4.48 6.63A17.43 17.43 0 0 0 192 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = FileSvg;