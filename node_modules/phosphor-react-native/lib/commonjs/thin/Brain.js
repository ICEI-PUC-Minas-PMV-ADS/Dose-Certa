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
const Brain = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "brain-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 124a52.1 52.1 0 0 0-32-48v-4a44 44 0 0 0-84-18.3A44 44 0 0 0 44 72v4a52 52 0 0 0 0 96v4a44 44 0 0 0 84 18.3 44 44 0 0 0 84-18.3v-4a52.07 52.07 0 0 0 32-48ZM88 212a36 36 0 0 1-36-36v-1.41A52.13 52.13 0 0 0 64 176h8a4 4 0 0 0 0-8h-8a44 44 0 0 1-14.67-85.5A4 4 0 0 0 52 78.73V72a36 36 0 0 1 72 0v78.75A44 44 0 0 0 88 132a4 4 0 0 0 0 8 36 36 0 0 1 0 72Zm104-44h-8a4 4 0 0 0 0 8h8a52.13 52.13 0 0 0 12-1.41V176a36 36 0 1 1-36-36 4 4 0 0 0 0-8 44 44 0 0 0-36 18.75V72a36 36 0 0 1 72 0v6.73a4 4 0 0 0 2.67 3.77A44 44 0 0 1 192 168Zm12-56a4 4 0 0 1-4 4h-4a32 32 0 0 1-32-32v-4a4 4 0 0 1 8 0v4a24 24 0 0 0 24 24h4a4 4 0 0 1 4 4ZM92 84a32 32 0 0 1-32 32h-4a4 4 0 0 1 0-8h4a24 24 0 0 0 24-24v-4a4 4 0 0 1 8 0Z"
}));
var _default = exports.default = Brain;