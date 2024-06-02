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
const DribbbleLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dribbble-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.81 96.3c-3.26-.19-6.54-.3-9.8-.3a166.44 166.44 0 0 0-45.25 6.29A164.28 164.28 0 0 0 148.33 96c-.14-.25-.3-.49-.44-.74a166.34 166.34 0 0 0 40.79-33.71 89.79 89.79 0 0 1 29.13 60.75Zm-38.52-68.21a154.52 154.52 0 0 1-37.9 31.11 167 167 0 0 0-42.51-42.36 89.87 89.87 0 0 1 80.41 11.25Zm-93.58-5.51a155 155 0 0 1 45 42.27A153.71 153.71 0 0 1 64 106a156.8 156.8 0 0 1-22.84-1.69 90.37 90.37 0 0 1 44.55-55.73ZM38 128a90.17 90.17 0 0 1 .79-11.92A167.23 167.23 0 0 0 64 118a165.69 165.69 0 0 0 73.29-17c.22.37.46.73.67 1.1a152.2 152.2 0 0 1 13.38 29.9 164.57 164.57 0 0 0-26.09 12.11 167 167 0 0 0-55.68 52.29A89.84 89.84 0 0 1 38 128Zm41.19 75.58a155.24 155.24 0 0 1 52.05-49.12 152.9 152.9 0 0 1 23.38-10.93 154.31 154.31 0 0 1 4.3 36.16 154.78 154.78 0 0 1-3.81 34.13 89.88 89.88 0 0 1-75.92-10.24Zm89.24 4.81a166.76 166.76 0 0 0 2.49-28.7 166.67 166.67 0 0 0-4.86-39.87A154.6 154.6 0 0 1 208 134c3.25 0 6.52.11 9.77.32a90.16 90.16 0 0 1-49.34 74.07Z"
}));
var _default = exports.default = DribbbleLogo;