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
const Headset = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "headset-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204.73 51.85A108.07 108.07 0 0 0 20 128v56a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28H44.84A84.05 84.05 0 0 1 128 44h.64a83.7 83.7 0 0 1 82.52 72H192a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h19.6a20 20 0 0 1-19.6 16h-56a12 12 0 0 0 0 24h56a44.05 44.05 0 0 0 44-44v-80a107.34 107.34 0 0 0-31.27-76.15ZM64 140a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-44Zm124 44v-40a4 4 0 0 1 4-4h20v48h-20a4 4 0 0 1-4-4Z"
}));
var _default = exports.default = Headset;