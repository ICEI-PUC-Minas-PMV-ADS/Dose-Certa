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
  className: "file-dashed-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6ZM214 88v48a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88Zm-56-6h35.51L158 46.49ZM80 26H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12Zm128 144a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6ZM48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6Zm104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = FileDashed;