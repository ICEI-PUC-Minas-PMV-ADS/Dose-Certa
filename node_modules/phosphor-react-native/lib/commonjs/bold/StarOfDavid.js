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
const StarOfDavid = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-of-david-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m205.82 128 28.6-50A12 12 0 0 0 224 60h-57l-28.55-50A12 12 0 0 0 128 4a12 12 0 0 0-10.42 6.05L89 60H32a12 12 0 0 0-10.42 18l28.58 50-28.58 50A12 12 0 0 0 32 196h57l28.57 50a12 12 0 0 0 20.84 0L167 196h57a12 12 0 0 0 10.42-17.95Zm-2.5-44L192 103.81 180.68 84Zm-25.14 44L153 172h-50.1l-25.09-44 25.13-44H153ZM128 40.18 139.33 60h-22.67ZM52.68 84h22.61L64 103.82Zm0 87.92L64 152.18 75.29 172Zm75.32 43.9L116.66 196h22.67ZM180.68 172 192 152.19 203.32 172Z"
}));
var _default = exports.default = StarOfDavid;