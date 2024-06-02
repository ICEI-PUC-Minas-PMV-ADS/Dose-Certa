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
const Rocket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rocket-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M148 224a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm-20-116a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm91.72 47-12.37 55.6a11.9 11.9 0 0 1-7.72 8.71 12.17 12.17 0 0 1-4 .69 11.94 11.94 0 0 1-7.43-2.6L159.85 196h-63.7l-28.34 21.4a11.94 11.94 0 0 1-7.43 2.6 12.17 12.17 0 0 1-4-.69 11.9 11.9 0 0 1-7.72-8.71L36.28 155a12 12 0 0 1 2.5-10.28l29.35-35.23c3.3-53.33 41.83-86.68 52.52-94.94a12 12 0 0 1 14.7 0c10.69 8.26 49.22 41.61 52.52 94.94l29.35 35.23a12 12 0 0 1 2.5 10.28ZM97.11 188h61.78C214.07 92.49 145 32.05 130.46 20.84a4 4 0 0 0-4.92 0C111 32.05 41.93 92.49 97.11 188Zm-7.52 2.93C75.12 165.56 68.93 142.52 68 122.06L44.92 149.8a4 4 0 0 0-.83 3.43l12.36 55.63a4 4 0 0 0 6.41 2.26l.09-.07Zm121.49-41.13L188 122.06c-.89 20.46-7.08 43.5-21.55 68.87l26.64 20.12.09.07a4 4 0 0 0 6.41-2.26l12.36-55.63a4 4 0 0 0-.87-3.43Z"
}));
var _default = exports.default = Rocket;