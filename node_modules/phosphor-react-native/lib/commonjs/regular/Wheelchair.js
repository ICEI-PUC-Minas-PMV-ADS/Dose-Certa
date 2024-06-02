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
const Wheelchair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wheelchair__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M255.59 189.47a8 8 0 0 0-10.12-5.06l-17.42 5.81-28.9-57.8A8 8 0 0 0 192 128h-80v-24h56a8 8 0 0 0 0-16h-56v-9a32 32 0 1 0-16 0v10.81A72 72 0 0 0 112 232c33.52 0 63.69-22.71 71.75-54a8 8 0 1 0-15.5-4c-6.16 24-30.34 42-56.25 42a56 56 0 0 1-16-109.66V136a8 8 0 0 0 8 8h83.05l29.79 59.58a8 8 0 0 0 9.69 4l24-8a8 8 0 0 0 5.06-10.11ZM88 48a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z"
}));
var _default = exports.default = Wheelchair;