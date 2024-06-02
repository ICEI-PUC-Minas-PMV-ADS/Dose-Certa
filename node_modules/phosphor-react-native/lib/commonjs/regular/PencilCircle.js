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
const PencilCircle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pencil-circle__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46ZM88 192a16 16 0 0 1 32 0v23.59a88 88 0 0 1-32-9.22Zm48 0a16 16 0 0 1 32 0v14.37a88 88 0 0 1-32 9.22Zm-28.73-56h41.46l11.58 25.1a31.93 31.93 0 0 0-32.31 9.77 31.93 31.93 0 0 0-32.31-9.77Zm7.39-16L128 91.09 141.34 120Zm75.56 70.23c-2 2-4.08 3.87-6.22 5.64V176a7.91 7.91 0 0 0-.74-3.35l-48-104a8 8 0 0 0-14.52 0l-48 104A7.91 7.91 0 0 0 72 176v19.87a88.917 88.917 0 0 1-6.22-5.64 88 88 0 1 1 124.44 0Z"
}));
var _default = exports.default = PencilCircle;