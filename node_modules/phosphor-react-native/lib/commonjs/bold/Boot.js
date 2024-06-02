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
const Boot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boot-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 104h-28V56a20 20 0 0 0-20-20H32a12 12 0 0 0-11.2 16.3c10.88 28.39 8.3 78.36-.33 108.38A12 12 0 0 0 20 164v36a20 20 0 0 0 20 20h26.11a20.16 20.16 0 0 0 9-2.11L86.83 212h14.34l11.77 5.89a20.16 20.16 0 0 0 9 2.11h28.22a20.16 20.16 0 0 0 8.95-2.11l11.72-5.89h14.34l11.77 5.89a20.16 20.16 0 0 0 8.95 2.11H232a20 20 0 0 0 20-20v-36a60.07 60.07 0 0 0-60-60ZM48 60h92v44h-24a12 12 0 0 0 0 24h76a36.07 36.07 0 0 1 33.94 24H47.21c5.54-27.92 7.02-63.59.79-92Zm180 136h-21.17l-11.77-5.89a20.16 20.16 0 0 0-8.95-2.11h-16.22a20.16 20.16 0 0 0-8.95 2.11L149.17 196h-26.34l-11.77-5.89a20.16 20.16 0 0 0-9-2.11H85.89a20.16 20.16 0 0 0-9 2.11L65.17 196H44v-20h184Z"
}));
var _default = exports.default = Boot;