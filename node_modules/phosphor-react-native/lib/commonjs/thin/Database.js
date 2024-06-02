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
  className: "database-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192.14 42.55C174.94 33.17 152.16 28 128 28s-46.94 5.17-64.14 14.55C45.89 52.35 36 65.65 36 80v96c0 14.35 9.89 27.65 27.86 37.45 17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c18-9.8 27.86-23.1 27.86-37.45V80c0-14.35-9.89-27.65-27.86-37.45ZM212 176c0 11.29-8.41 22.1-23.69 30.43C172.27 215.18 150.85 220 128 220s-44.27-4.82-60.31-13.57C52.41 198.1 44 187.29 44 176v-26.52c4.69 5.93 11.37 11.34 19.86 16 17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm0-48c0 11.29-8.41 22.1-23.69 30.43C172.27 167.18 150.85 172 128 172s-44.27-4.82-60.31-13.57C52.41 150.1 44 139.29 44 128v-26.52c4.69 5.93 11.37 11.34 19.86 16 17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm-23.69-17.57C172.27 119.18 150.85 124 128 124s-44.27-4.82-60.31-13.57C52.41 102.1 44 91.29 44 80s8.41-22.1 23.69-30.43C83.73 40.82 105.15 36 128 36s44.27 4.82 60.31 13.57C203.59 57.9 212 68.71 212 80s-8.41 22.1-23.69 30.43Z"
}));
var _default = exports.default = Database;