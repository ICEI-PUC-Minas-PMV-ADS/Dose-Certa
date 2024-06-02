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
const Database = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "database-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M196 35.52C177.62 25.51 153.48 20 128 20s-49.62 5.51-68 15.52C39.37 46.79 28 62.58 28 80v96c0 17.42 11.37 33.21 32 44.48 18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52c20.66-11.27 32-27.06 32-44.48V80c0-17.42-11.37-33.21-32-44.48Zm8 92.48c0 17-31.21 36-76 36s-76-19-76-36v-8.46a88.9 88.9 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a88.9 88.9 0 0 0 8-4.94Zm-76-84c44.79 0 76 19 76 36s-31.21 36-76 36-76-19-76-36 31.21-36 76-36Zm0 168c-44.79 0-76-19-76-36v-8.46a88.9 88.9 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a88.9 88.9 0 0 0 8-4.94V176c0 17-31.21 36-76 36Z"
}));
var _default = exports.default = Database;