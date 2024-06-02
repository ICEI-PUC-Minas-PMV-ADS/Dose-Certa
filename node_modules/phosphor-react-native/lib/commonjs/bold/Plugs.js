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
const Plugs = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plugs-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m137 168 11.52-11.51a12 12 0 0 0-17-17L120 151l-15-15 11.52-11.51a12 12 0 0 0-17-17L88 119l-15.51-15.49a12 12 0 0 0-17 17L59 124l-20.46 20.49a36 36 0 0 0 0 50.91l2.55 2.54-25.58 25.57a12 12 0 0 0 17 17l25.57-25.58 2.54 2.55a36.06 36.06 0 0 0 50.91 0L132 197l3.51 3.52a12 12 0 0 0 17-17Zm-42.46 32.49a12 12 0 0 1-17 0l-22.03-22.06a12 12 0 0 1 0-17L76 141l39 39Zm146-185a12 12 0 0 0-17 0l-25.6 25.6-2.54-2.55a36.05 36.05 0 0 0-50.91 0L124 59l-3.51-3.52a12 12 0 0 0-17 17l80 80a12 12 0 0 0 17-17L197 132l20.49-20.49a36 36 0 0 0 0-50.91l-2.55-2.54 25.58-25.57a12 12 0 0 0-.03-16.98Zm-40 79L180 115l-39-39 20.49-20.49a12 12 0 0 1 17 0l22.06 22.06a12 12 0 0 1 0 17Z"
}));
var _default = exports.default = Plugs;