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
const FolderStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "folder-star-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m205.6 183.41 8.07 32.59L184 198.54 154.33 216l8.07-32.59-26.4-21.8 34.65-2.67L184 128l13.35 30.94 34.65 2.67Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120.56 200H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16ZM92.69 56l16 16H40V56Zm146.94 103.2a8 8 0 0 0-7-5.56l-29.84-2.31-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07 25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71 22.51-18.59a8 8 0 0 0 2.54-8.58Zm-39.12 18a8 8 0 0 0-2.68 8.09l3.5 14.12-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81 3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18 14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92 6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"
}));
var _default = exports.default = FolderStar;