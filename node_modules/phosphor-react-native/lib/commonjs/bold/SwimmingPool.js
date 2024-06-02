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
const SwimmingPool = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "swimming-pool-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 149.39a12 12 0 0 0 12-12V136h56v3.29a12 12 0 0 0 24 0V32a12 12 0 0 0-24 0v8h-56v-8a12 12 0 0 0-24 0v105.39a12 12 0 0 0 12 12ZM100 112v-12h56v12Zm56-48v12h-56V64ZM20 164a12 12 0 0 1 12-12c15.63 0 24 5.55 30.66 10 5.4 3.6 9 6 17.34 6s11.93-2.38 17.34-6c6.69-4.47 15-10 30.65-10s24 5.55 30.66 10c5.41 3.6 9 6 17.35 6s11.94-2.38 17.34-6c6.7-4.47 15-10 30.66-10a12 12 0 0 1 0 24c-8.37 0-11.94 2.38-17.35 6-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93 2.38-17.34 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12 12 0 0 1-12-12Zm216 44a12 12 0 0 1-12 12c-8.37 0-11.94 2.38-17.35 6-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93 2.38-17.34 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12 12 0 0 1 0-24c15.63 0 24 5.55 30.66 10 5.4 3.6 9 6 17.34 6s11.93-2.38 17.34-6c6.69-4.47 15-10 30.65-10s24 5.55 30.66 10c5.41 3.6 9 6 17.35 6s11.94-2.38 17.34-6c6.7-4.47 15-10 30.66-10a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = SwimmingPool;