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
const Cpu = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cpu-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 100h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4Zm-4 48h-40v-40h40Zm84 0h-20v-40h20a4 4 0 0 0 0-8h-20V56a12 12 0 0 0-12-12h-44V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H56a12 12 0 0 0-12 12v44H24a4 4 0 0 0 0 8h20v40H24a4 4 0 0 0 0 8h20v44a12 12 0 0 0 12 12h44v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h44a12 12 0 0 0 12-12v-44h20a4 4 0 0 0 0-8Zm-28 52a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Cpu;