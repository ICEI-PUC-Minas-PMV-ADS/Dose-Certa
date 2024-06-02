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
const Backpack = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "backpack-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 44.17V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v12.17A52.05 52.05 0 0 0 44 96v120a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V96a52.05 52.05 0 0 0-48-51.83ZM112 20h32a12 12 0 0 1 12 12v12h-56V32a12 12 0 0 1 12-12Zm60 144H84v-12a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm-88 8h56v12a4 4 0 0 0 8 0v-12h24v48H84Zm120 44a4 4 0 0 1-4 4h-20v-68a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v68H56a4 4 0 0 1-4-4V96a44.05 44.05 0 0 1 44-44h64a44.05 44.05 0 0 1 44 44ZM148 88a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Backpack;