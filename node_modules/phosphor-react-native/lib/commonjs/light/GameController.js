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
const GameController = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "game-controller-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 110h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12Zm-72-12H94V88a6 6 0 0 0-12 0v10H72a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12Zm135.84 101.5A34 34 0 0 1 212 214a34.11 34.11 0 0 1-24-9.95l-.26-.28L147.38 158h-38.76l-40.31 45.76-.31.24a34 34 0 0 1-24 10 34 34 0 0 1-33.46-39.91s0-.06 0-.1L26.9 89.88A57.89 57.89 0 0 1 83.89 42H172a58.07 58.07 0 0 1 57.05 47.63v.19L245.46 174v.11a33.75 33.75 0 0 1-5.62 25.39ZM172 146a46 46 0 0 0 0-92H83.89a45.9 45.9 0 0 0-45.18 38 .36.36 0 0 0 0 .1l-16.38 84.13a22 22 0 0 0 37.11 19.45l42-47.65a6 6 0 0 1 4.5-2Zm61.67 30.23-9.79-50.35A58.06 58.06 0 0 1 172 158h-8.63l33.19 37.68a22 22 0 0 0 37.11-19.45Z"
}));
var _default = exports.default = GameController;