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
  className: "dribbble-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm83.13 96h-3.12a172.63 172.63 0 0 0-41.39 5.06A171.26 171.26 0 0 0 156 97.39a172.34 172.34 0 0 0 32.9-27.15A83.72 83.72 0 0 1 211.13 116ZM170 55.3a148.53 148.53 0 0 1-27 21.88 173.29 173.29 0 0 0-30.58-31.71A83.52 83.52 0 0 1 170 55.3Zm-84.46.27a149.23 149.23 0 0 1 35.9 32.87A147.73 147.73 0 0 1 64 100c-5 0-10-.26-14.94-.75a84.49 84.49 0 0 1 36.47-43.68ZM44 128c0-1.73.07-3.44.17-5.14A175.15 175.15 0 0 0 64 124a171.8 171.8 0 0 0 70.84-15.22 145.82 145.82 0 0 1 8.92 19.65 170.71 170.71 0 0 0-21.52 10.44 173 173 0 0 0-53.68 48.44A83.77 83.77 0 0 1 44 128Zm43.77 73.72a149 149 0 0 1 46.46-42.06 147.2 147.2 0 0 1 16-7.94 148.52 148.52 0 0 1 2.67 28 148.66 148.66 0 0 1-2.9 29.34 83.81 83.81 0 0 1-62.22-7.34Zm88.29-4.89c.56-5.68.86-11.4.86-17.14a172.57 172.57 0 0 0-3.72-35.54A148.85 148.85 0 0 1 208 140h3.11a84.07 84.07 0 0 1-35.05 56.83Z"
}));
var _default = exports.default = DribbbleLogo;