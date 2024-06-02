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
const FolderSimpleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "folder-simple-dashed-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M124.4 84.8 94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l29.87 22.4a6 6 0 0 1-7.2 9.6ZM88 202H39.38a1.4 1.4 0 0 1-1.38-1.38V192a6 6 0 0 0-12 0v8.62A13.39 13.39 0 0 0 39.38 214H88a6 6 0 0 0 0-12Zm72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM32 158a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z"
}));
var _default = exports.default = FolderSimpleDashed;