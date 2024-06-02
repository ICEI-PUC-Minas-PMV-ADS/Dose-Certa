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
const Cat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cat-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222.83 33.54a16 16 0 0 0-18.14 3.15c-.14.14-.26.27-.38.41L187.05 57A111.28 111.28 0 0 0 69 57L51.69 37.1c-.12-.14-.24-.27-.38-.41a16 16 0 0 0-18.14-3.15A16.4 16.4 0 0 0 24 48.46V136c0 49 40.06 89.63 91.56 95.32a4 4 0 0 0 4.44-4v-32l-13.42-13.43a8.22 8.22 0 0 1-.41-11.37 8 8 0 0 1 11.49-.18L128 180.68l10.34-10.35a8 8 0 0 1 11.49.18 8.22 8.22 0 0 1-.41 11.37L136 195.31v32a4 4 0 0 0 4.44 4C191.94 225.62 232 185 232 136V48.46a16.4 16.4 0 0 0-9.17-14.92ZM84 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm20-64a8 8 0 1 1-16 0V69a8 8 0 0 1 16 0Zm32 0a8 8 0 1 1-16 0V64a8 8 0 0 1 16 0Zm16 0V69a8 8 0 0 1 16 0v19a8 8 0 1 1-16 0Zm20 64a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}));
var _default = exports.default = Cat;