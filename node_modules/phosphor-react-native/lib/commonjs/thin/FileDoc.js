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
const FileDoc = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-doc-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52 148H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64Zm0 56H40v-48h12a24 24 0 0 1 0 48Zm166.77-6a4 4 0 0 1 .12 5.66A26.11 26.11 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.11 26.11 0 0 1 18.89 8.36 4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a18.15 18.15 0 0 0 13.11-5.9 4 4 0 0 1 5.66-.1ZM128 148c-15.44 0-28 14.36-28 32s12.56 32 28 32 28-14.36 28-32-12.56-32-28-32Zm0 56c-11 0-20-10.77-20-24s9-24 20-24 20 10.77 20 24-9 24-20 24Zm-80-88a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4Zm108-74.35L198.34 84H156Z"
}));
var _default = exports.default = FileDoc;