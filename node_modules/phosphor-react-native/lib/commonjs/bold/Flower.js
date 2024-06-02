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
const Flower = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flower-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M215.64 128a44 44 0 0 0-43.82-75.9 44 44 0 0 0-87.64 0A44 44 0 0 0 40.36 128a44 44 0 0 0 43.82 75.89 44 44 0 0 0 87.64 0A44 44 0 0 0 215.64 128ZM108 128a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm72.35-53.32a20 20 0 1 1 20 34.64c-2.65 1.53-10.52 4.88-30.1 6.42a44.08 44.08 0 0 0-10.52-18.18c11.13-16.2 17.97-21.35 20.62-22.88ZM128 36a20 20 0 0 1 20 20c0 3.06-1 11.55-9.49 29.28a43.79 43.79 0 0 0-21 0C109 67.55 108 59.06 108 56a20 20 0 0 1 20-20ZM48.33 82a20 20 0 0 1 27.32-7.32c2.65 1.53 9.49 6.68 20.62 22.88a44.08 44.08 0 0 0-10.52 18.18c-19.58-1.54-27.45-4.89-30.1-6.42A20 20 0 0 1 48.33 82Zm27.32 99.32a20 20 0 1 1-20-34.64c2.65-1.53 10.52-4.88 30.1-6.42a44.08 44.08 0 0 0 10.52 18.18c-11.13 16.2-17.97 21.35-20.62 22.88ZM128 220a20 20 0 0 1-20-20c0-3.06 1-11.55 9.49-29.28a43.79 43.79 0 0 0 21 0C147 188.45 148 196.94 148 200a20 20 0 0 1-20 20Zm79.67-46a20 20 0 0 1-27.32 7.32c-2.65-1.53-9.49-6.68-20.62-22.88a44.08 44.08 0 0 0 10.52-18.18c19.58 1.54 27.45 4.89 30.1 6.42a20 20 0 0 1 7.32 27.32Z"
}));
var _default = exports.default = Flower;