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
const SunHorizon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sun-horizon-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 154h-42.72a70.91 70.91 0 0 0 .72-10 70 70 0 0 0-140 0 70.91 70.91 0 0 0 .72 10H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM70 144a58 58 0 1 1 115.13 10H70.87a58.63 58.63 0 0 1-.87-10Zm144 56a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h160a6 6 0 0 1 6 6ZM74.63 42.69a6 6 0 0 1 10.74-5.37l8 16a6 6 0 0 1-10.74 5.36Zm-56 50.63a6 6 0 0 1 8.05-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.69-8.05Zm192 13.36a6 6 0 0 1 2.69-8.05l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69Zm-48-53.36 8-16a6 6 0 0 1 10.74 5.37l-8 16a6 6 0 1 1-10.74-5.36Z"
}));
var _default = exports.default = SunHorizon;