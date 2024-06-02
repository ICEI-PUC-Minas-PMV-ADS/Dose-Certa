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
const FolderDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "folder-dashed-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 208a4 4 0 0 1-4 4H39.38A11.4 11.4 0 0 1 28 200.62V192a4 4 0 0 1 8 0v8.62a3.39 3.39 0 0 0 3.38 3.38H88a4 4 0 0 1 4 4Zm68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM28 80V56a12 12 0 0 1 12-12h52.69a11.9 11.9 0 0 1 8.48 3.52l29.66 29.65A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4Zm8-4h82.34L95.51 53.17A4 4 0 0 0 92.69 52H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z"
}));
var _default = exports.default = FolderDashed;