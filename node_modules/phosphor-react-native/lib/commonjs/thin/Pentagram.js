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
const Pentagram = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pentagram-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.39 92.29A11.82 11.82 0 0 0 224 84h-64l-20.58-63.53a11.93 11.93 0 0 0-22.83 0L96 84H32a12 12 0 0 0-7 21.72L76.82 143 57 204.25a11.83 11.83 0 0 0 4.36 13.41 11.8 11.8 0 0 0 14.09 0L128 179.83l52.58 37.83a12 12 0 0 0 18.47-13.41L179.18 143 231 105.7a11.83 11.83 0 0 0 4.39-13.41ZM124.21 22.88a3.93 3.93 0 0 1 7.59 0L151.62 84h-47.24ZM29.67 99.23A4 4 0 0 1 32 92h61.37l-14 43Zm41 112a4 4 0 0 1-6.15-4.47l19.08-58.8 37.51 27Zm15.52-71.26L101.78 92h52.44l15.55 47.93L128 170Zm105.21 66.79a4 4 0 0 1-6.17 4.46l-50.38-36.32 37.51-27Zm34.9-107.5L176.59 135l-14-43H224a4 4 0 0 1 2.36 7.22Z"
}));
var _default = exports.default = Pentagram;