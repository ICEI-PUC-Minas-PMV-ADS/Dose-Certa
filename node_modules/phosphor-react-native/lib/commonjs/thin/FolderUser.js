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
const FolderUser = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "folder-user-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M207.5 199.3a28 28 0 1 0-31 0 36.24 36.24 0 0 0-20.37 23.7 4 4 0 0 0 2.84 4.89 3.7 3.7 0 0 0 1 .14 4 4 0 0 0 3.87-3c3.29-12.38 14.85-21 28.13-21s24.84 8.65 28.13 21a4 4 0 1 0 7.73-2.05 36.22 36.22 0 0 0-20.33-23.68ZM172 176a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm44-100h-86.34l-28.49-28.49A12 12 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84h180a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4Z"
}));
var _default = exports.default = FolderUser;