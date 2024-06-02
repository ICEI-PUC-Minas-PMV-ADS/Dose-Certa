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
const Syringe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "syringe-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m236.24 67.76-48-48a6 6 0 0 0-8.48 8.48L199.51 48 168 79.51l-35.76-35.75a6 6 0 1 0-8.48 8.48l7.75 7.76-85.41 85.41a13.94 13.94 0 0 0-4.1 9.9v50.2l-22.24 22.25a6 6 0 1 0 8.48 8.48L50.49 214h50.2a13.94 13.94 0 0 0 9.9-4.1L196 124.49l7.76 7.75a6 6 0 0 0 8.48-8.48L176.49 88 208 56.49l19.76 19.75a6 6 0 0 0 8.48-8.48ZM102.1 201.41a2 2 0 0 1-1.41.59H54v-46.69a2 2 0 0 1 .59-1.41L74 134.49l21.76 21.75a6 6 0 1 0 8.48-8.48L82.49 126 98 110.49l21.76 21.75a6 6 0 0 0 8.48-8.48L106.49 102 140 68.49 187.51 116Z"
}));
var _default = exports.default = Syringe;