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
const Umbrella = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "umbrella-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.51 109.51 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0 6 6 0 0 0-12 0 18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21ZM94.11 130c1.69-51.21 24.7-80.16 33.89-89.73 9.2 9.58 32.2 38.53 33.89 89.73Zm-63.57-.65a2 2 0 0 1-.53-1.56 98.14 98.14 0 0 1 82.91-88.62c-12 15-29.43 44.44-30.83 90.83H32a2 2 0 0 1-1.46-.65Zm194.92 0a2 2 0 0 1-1.46.65h-50.09c-1.4-46.39-18.81-75.87-30.83-90.83A98.14 98.14 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z"
}));
var _default = exports.default = Umbrella;