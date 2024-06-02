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
const Synagogue = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "synagogue-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204 60.4V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 180 80v49.11l-48-27.43V72a4 4 0 0 0-8 0v29.68l-48 27.43V80a20 20 0 0 0-16-19.6V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 36 80v136a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a12 12 0 0 1 24 0v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4V80a20 20 0 0 0-16-19.6Zm-4 7.6a12 12 0 0 1 12 12v28h-24V80a12 12 0 0 1 12-12ZM56 68a12 12 0 0 1 12 12v28H44V80a12 12 0 0 1 12-12Zm-12 48h24v96H44Zm84 40a20 20 0 0 0-20 20v36H76v-73.68l52-29.71 52 29.71V212h-32v-36a20 20 0 0 0-20-20Zm60 56v-96h24v96Z"
}));
var _default = exports.default = Synagogue;