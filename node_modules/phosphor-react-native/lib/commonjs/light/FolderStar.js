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
  className: "folder-star-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 86a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14h-85.52l-27.9-27.9a13.9 13.9 0 0 0-9.89-4.1H40a14 14 0 0 0-14 14v144.61A13.39 13.39 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86ZM40 54h52.69a2 2 0 0 1 1.41.58L113.52 74H38V56a2 2 0 0 1 2-2Zm197.72 105.8a6 6 0 0 0-5.26-4.17l-31-2.4-11.91-27.61a6 6 0 0 0-11 0l-11.91 27.61-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39-7.16 28.93a6 6 0 0 0 8.87 6.61L184 205.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93 23.49-19.39a6 6 0 0 0 1.9-6.44Zm-35.94 19a6 6 0 0 0-2 6.07l4.64 18.74L187 193.36a6 6 0 0 0-6.08 0l-17.37 10.23 4.63-18.74a6 6 0 0 0-2-6.07l-14.94-12.33 19.83-1.53a6 6 0 0 0 5-3.61l7.93-18.17 7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"
}));
var _default = exports.default = FolderStar;