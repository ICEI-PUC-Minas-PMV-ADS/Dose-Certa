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
const CameraSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "camera-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l12.69 14H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h150.07l5.49 6a6 6 0 0 0 8.88-8.08Zm53.06 76.2 40.11 44.13A29.67 29.67 0 0 1 128 162a30 30 0 0 1-22.5-49.84ZM48 202a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h19.16l30.23 33.25a42 42 0 0 0 56.33 62L187.16 202ZM230 80v106a6 6 0 0 1-12 0V80a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67L156.78 46H99.21l-.23.34a6 6 0 0 1-10-6.65l2-3A6 6 0 0 1 96 34h64a6 6 0 0 1 5 2.67L179.21 58H208a22 22 0 0 1 22 22Z"
}));
var _default = exports.default = CameraSlash;