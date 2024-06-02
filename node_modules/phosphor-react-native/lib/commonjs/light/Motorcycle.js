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
const Motorcycle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "motorcycle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 122a38.48 38.48 0 0 0-7.87.82L200.9 104a57.83 57.83 0 0 1 15.1-2 6 6 0 0 0 0-12h-20.49L181.6 53.85A6 6 0 0 0 176 50h-32a6 6 0 0 0 0 12h27.88l10.77 28H152c-18 0-32.58 4.15-42.1 12a18.05 18.05 0 0 1-18.9 2.35c-13.1-5.97-60.6-25.16-65-26.89l-5.72-2.24A14.66 14.66 0 0 0 16 74a6 6 0 0 0-2.15 11.6c.46.18 47.13 18.26 72.23 29.67a30.12 30.12 0 0 0 31.47-4c7.34-6 19.25-9.25 34.46-9.25h24.89a70 70 0 0 0-28.32 39.13A17.85 17.85 0 0 1 131.32 154h-53.8a38 38 0 1 0 0 12h53.8a29.9 29.9 0 0 0 28.81-21.64 58 58 0 0 1 29.58-36l7.23 18.8A38 38 0 1 0 216 122ZM40 166h25.29a26 26 0 1 1 0-12H40a6 6 0 0 0 0 12Zm176 20a26 26 0 0 1-14.68-47.45l9.08 23.6a6 6 0 0 0 11.2-4.3l-9.08-23.61A26.64 26.64 0 0 1 216 134a26 26 0 0 1 0 52Z"
}));
var _default = exports.default = Motorcycle;