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
const FileDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-dashed-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M84 224a12 12 0 0 1-12 12H56a20 20 0 0 1-20-20v-32a12 12 0 0 1 24 0v28h12a12 12 0 0 1 12 12ZM220 88v48a12 12 0 0 1-24 0v-32h-48a12 12 0 0 1-12-12V44h-16a12 12 0 0 1 0-24h32a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88Zm-60-8h23l-23-23ZM80 20H56a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V44h20a12 12 0 0 0 0-24Zm128 144a12 12 0 0 0-12 12v36h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-40a12 12 0 0 0-12-12Zm-160-8a12 12 0 0 0 12-12v-40a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12Zm104 56h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24Z"
}));
var _default = exports.default = FileDashed;