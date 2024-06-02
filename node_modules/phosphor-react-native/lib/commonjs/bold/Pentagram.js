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
  className: "pentagram-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243 89.83A19.94 19.94 0 0 0 224 76h-58.15l-18.8-57.95A19.93 19.93 0 0 0 109 18L90.15 76H32a20 20 0 0 0-11.7 36.22l47.1 33.89-18.07 55.7a20 20 0 0 0 30.74 22.39L128 189.71l47.89 34.45a20 20 0 0 0 30.78-22.35l-18.07-55.7 47.15-33.92A20 20 0 0 0 243 89.83ZM128 37.11 140.62 76h-25.24ZM44.42 100h37.94l-7.18 22.13Zm31.51 97.6 11.93-36.78 19.59 14.1Zm19.71-60.75 12-36.85h40.82l12 36.85L128 160.14Zm52.91 38.07 19.59-14.1 11.93 36.78Zm32.27-52.79L173.64 100h37.94Z"
}));
var _default = exports.default = Pentagram;