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
const HandsPraying = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-praying-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m238.15 177.18-35.53-35.53L166.45 22.3A25.75 25.75 0 0 0 128 8a25.75 25.75 0 0 0-38.45 14.3L53.38 141.65l-35.53 35.53a20 20 0 0 0 0 28.28l32.69 32.69a20 20 0 0 0 28.28 0l48.29-48.28c.31-.31.6-.62.89-.94.29.32.58.63.89.94l48.29 48.28a20 20 0 0 0 28.28 0l32.69-32.69a20 20 0 0 0 0-28.28ZM64.68 218.35l-27-27 11-11 27 27Zm51.32-59.6a19.85 19.85 0 0 1-5.86 14.14l-17.46 17.46-27-27 6.83-6.83a11.94 11.94 0 0 0 3-5l37-122.23a1.78 1.78 0 0 1 3.48.52Zm47.5 31.78-17.64-17.64a19.85 19.85 0 0 1-5.86-14.14v-129a1.78 1.78 0 0 1 3.48-.52l37 122.23a11.94 11.94 0 0 0 3 5l7.6 7.6Zm27.82 27.82-10.85-10.84 27.63-26.44 10.25 10.25Z"
}));
var _default = exports.default = HandsPraying;