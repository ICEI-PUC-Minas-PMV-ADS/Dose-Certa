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
  className: "game-controller-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 108h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 0 8Zm-72-8H92V88a4 4 0 0 0-8 0v12H72a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8Zm134.21 98.36a32 32 0 0 1-48.84 4.27l-.17-.18L148.29 156h-40.57l-40.91 46.44-.18.19A32.08 32.08 0 0 1 44 212a32 32 0 0 1-31.5-37.56l16.37-84.23A55.87 55.87 0 0 1 83.89 44H172a56.07 56.07 0 0 1 55.1 46.1.29.29 0 0 1 0 .1l16.37 84.16a31.86 31.86 0 0 1-5.26 24ZM172 148a48 48 0 1 0 0-96H83.9a47.9 47.9 0 0 0-47.16 39.67L20.36 175.9a24 24 0 0 0 19.48 27.73 24 24 0 0 0 21-6.58l42-47.69a4 4 0 0 1 3-1.36Zm63.63 27.83-11-56.66A56.09 56.09 0 0 1 172 156h-13l36.16 41.06a24 24 0 0 0 40.52-21.23Z"
}));
var _default = exports.default = GameController;