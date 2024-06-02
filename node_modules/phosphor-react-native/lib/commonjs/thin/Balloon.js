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
const Balloon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "balloon-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a84.09 84.09 0 0 0-84 84c0 22.57 9.08 47.63 24.28 67 12.68 16.17 28 26.81 44.22 31l-12.18 28.4A4 4 0 0 0 104 236h48a4 4 0 0 0 3.68-5.58L143.5 202c16.23-4.17 31.54-14.81 44.22-31 15.2-19.41 24.28-44.47 24.28-67a84.09 84.09 0 0 0-84-84Zm17.93 208h-35.86l10.48-24.46a60.56 60.56 0 0 0 14.9 0ZM128 196c-42.1 0-76-50.33-76-92a76 76 0 0 1 152 0c0 41.67-33.9 92-76 92Zm52-100.66a4 4 0 0 1-3.29 4.61 5 5 0 0 1-.66 0 4 4 0 0 1-3.95-3.34A45.31 45.31 0 0 0 135.34 60a4 4 0 0 1 1.32-7.9A53.46 53.46 0 0 1 180 95.34Z"
}));
var _default = exports.default = Balloon;