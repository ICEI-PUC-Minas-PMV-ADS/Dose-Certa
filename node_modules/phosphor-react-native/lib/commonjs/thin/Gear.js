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
const Gear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gear-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 80a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm83.93-32.49q.13-3.51 0-7l15.83-19.79a4 4 0 0 0 .75-3.53A103.64 103.64 0 0 0 218 75.9a4 4 0 0 0-3-2l-25.19-2.8a88.885 88.885 0 0 0-4.95-4.95L182.07 41a4 4 0 0 0-2-3 104 104 0 0 0-25.25-10.5 4 4 0 0 0-3.53.74l-19.78 15.83q-3.51-.14-7 0L104.7 28.24a4 4 0 0 0-3.53-.75A103.64 103.64 0 0 0 75.9 38a4 4 0 0 0-2 3l-2.8 25.19a88.885 88.885 0 0 0-4.95 4.95L41 73.93a4 4 0 0 0-3 2 104 104 0 0 0-10.5 25.25 4 4 0 0 0 .74 3.53l15.83 19.78q-.14 3.51 0 7L28.24 151.3a4 4 0 0 0-.75 3.53A103.64 103.64 0 0 0 38 180.1a4 4 0 0 0 3 2l25.19 2.8c1.58 1.71 3.24 3.37 4.95 4.95l2.8 25.2a4 4 0 0 0 2 3 104 104 0 0 0 25.28 10.46 4 4 0 0 0 3.53-.74l19.78-15.83q3.51.13 7 0l19.79 15.83a4 4 0 0 0 2.5.88 4 4 0 0 0 1-.13A103.64 103.64 0 0 0 180.1 218a4 4 0 0 0 2-3l2.8-25.19c1.71-1.58 3.37-3.24 4.95-4.95l25.2-2.8a4 4 0 0 0 3-2 104 104 0 0 0 10.46-25.28 4 4 0 0 0-.74-3.53Zm.17 42.83-24.67 2.74a4 4 0 0 0-2.55 1.32 76.2 76.2 0 0 1-6.48 6.48 4 4 0 0 0-1.32 2.55l-2.74 24.66a95.45 95.45 0 0 1-19.64 8.15l-19.38-15.51a4 4 0 0 0-2.5-.87h-.24a73.67 73.67 0 0 1-9.16 0 4 4 0 0 0-2.74.87l-19.37 15.5a95.33 95.33 0 0 1-19.65-8.13l-2.74-24.67a4 4 0 0 0-1.32-2.55 76.2 76.2 0 0 1-6.48-6.48 4 4 0 0 0-2.55-1.32l-24.66-2.74a95.45 95.45 0 0 1-8.15-19.64l15.51-19.38a4 4 0 0 0 .87-2.74 77.76 77.76 0 0 1 0-9.16 4 4 0 0 0-.87-2.74l-15.5-19.37a95.33 95.33 0 0 1 8.13-19.65l24.67-2.74a4 4 0 0 0 2.55-1.32 76.2 76.2 0 0 1 6.48-6.48 4 4 0 0 0 1.32-2.55l2.74-24.66a95.45 95.45 0 0 1 19.64-8.15l19.38 15.51a4 4 0 0 0 2.74.87 73.67 73.67 0 0 1 9.16 0 4 4 0 0 0 2.74-.87l19.37-15.5a95.33 95.33 0 0 1 19.65 8.13l2.74 24.67a4 4 0 0 0 1.32 2.55 76.2 76.2 0 0 1 6.48 6.48 4 4 0 0 0 2.55 1.32l24.66 2.74a95.45 95.45 0 0 1 8.15 19.64l-15.51 19.38a4 4 0 0 0-.87 2.74 77.76 77.76 0 0 1 0 9.16 4 4 0 0 0 .87 2.74l15.5 19.37a95.33 95.33 0 0 1-8.13 19.65Z"
}));
var _default = exports.default = Gear;