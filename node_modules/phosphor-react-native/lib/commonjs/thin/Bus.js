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
const Bus = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bus-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 36H72a28 28 0 0 0-28 28v144a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h72v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V64a28 28 0 0 0-28-28ZM52 180v-64h152v64Zm152-72H52V76h152ZM84 208a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-20h32Zm116 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4Zm4-144H52v-4a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-104 80a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm72-68v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0ZM20 80v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0Z"
}));
var _default = exports.default = Bus;