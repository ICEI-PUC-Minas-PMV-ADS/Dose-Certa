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
const Siren = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "siren-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M122 16V8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0Zm78 30a6 6 0 0 0 4.24-1.76l8-8a6 6 0 1 0-8.48-8.48l-8 8A6 6 0 0 0 200 46ZM51.76 44.24a6 6 0 0 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48ZM137 74.08a6 6 0 1 0-2 11.84c20 3.34 35 21.44 35 42.08a6 6 0 0 0 12 0c0-26.43-19.35-49.61-45-53.92ZM230 176v24a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-24a14 14 0 0 1 14-14h2v-34a86 86 0 0 1 86-86h.65c47.06.35 85.35 39.38 85.35 87v33h2a14 14 0 0 1 14 14ZM54 162h148v-33c0-41-32.94-74.7-73.44-75H128a74 74 0 0 0-74 74Zm164 14a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"
}));
var _default = exports.default = Siren;