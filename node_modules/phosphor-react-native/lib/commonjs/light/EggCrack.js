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
const EggCrack = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "egg-crack-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33ZM128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30c10.52 0 24.12 9 36.78 23.77L123.52 100a6 6 0 0 0 3 9.82l26.48 6.61-6.87 34.39a6 6 0 0 0 4.7 7.06 6.08 6.08 0 0 0 1.17.12 6 6 0 0 0 5.87-4.82l8-40a6 6 0 0 0-4.42-7l-22.37-5.59 33.2-37.2q1.36 1.92 2.72 3.94c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74Z"
}));
var _default = exports.default = EggCrack;