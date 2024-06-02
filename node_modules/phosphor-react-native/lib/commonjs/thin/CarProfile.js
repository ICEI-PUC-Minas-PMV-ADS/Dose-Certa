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
const CarProfile = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "car-profile-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 116h-30.34l-44.49-44.48a11.9 11.9 0 0 0-8.48-3.52H44.28a12 12 0 0 0-10 5.34L4.67 117.78A4 4 0 0 0 4 120v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h72.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12ZM41 77.78A4 4 0 0 1 44.28 76h112.41a4 4 0 0 1 2.82 1.17L198.34 116H15.47ZM64 196a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm128 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm52-28a4 4 0 0 1-4 4h-20.29a28 28 0 0 0-55.42 0H91.71a28 28 0 0 0-55.42 0H16a4 4 0 0 1-4-4v-44h228a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = CarProfile;