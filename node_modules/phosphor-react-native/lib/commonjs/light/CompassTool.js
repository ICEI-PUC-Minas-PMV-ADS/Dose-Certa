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
const CompassTool = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "compass-tool-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.34 122.73a6 6 0 1 0-10.68-5.46 81.79 81.79 0 0 1-35.81 35.36l-18.14-40.8A38 38 0 0 0 134 42.48V24a6 6 0 0 0-12 0v18.48a38 38 0 0 0-14.71 69.35L58.52 221.56a6 6 0 1 0 11 4.88l25.9-58.26A93.37 93.37 0 0 0 128 174a97 97 0 0 0 32.68-5.69l25.84 58.13a6 6 0 1 0 11-4.88l-25.77-58a93.92 93.92 0 0 0 41.59-40.83ZM128 54a26 26 0 1 1-26 26 26 26 0 0 1 26-26Zm0 108a81.51 81.51 0 0 1-27.73-4.83l18-40.45a37.85 37.85 0 0 0 19.52 0l18 40.6A85.34 85.34 0 0 1 128 162Z"
}));
var _default = exports.default = CompassTool;