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
const Sneaker = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sneaker-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M255.8 162.93v-.31a43.94 43.94 0 0 0-29.8-37.26l-56.62-20.2-.24-.09a20 20 0 0 1-11.92-10.78L134.06 40l-.06-.16a20.06 20.06 0 0 0-25.11-10.64L33.17 56.73A20.07 20.07 0 0 0 20 75.53V192a20 20 0 0 0 20 20h196a20 20 0 0 0 20-20v-24.94c0-1.39-.07-2.76-.2-4.13ZM113.53 53.05l6 14-15.63 5.67a12 12 0 1 0 8.2 22.55l16.9-6.13 4.54 10.63-13.6 5A12 12 0 0 0 124 128a11.79 11.79 0 0 0 4.1-.73l19.57-7.11a43.86 43.86 0 0 0 13.8 7.64l56.62 20.2.23.08a19.89 19.89 0 0 1 6.84 3.91H44V78.33ZM44 188v-12h188v12Z"
}));
var _default = exports.default = Sneaker;