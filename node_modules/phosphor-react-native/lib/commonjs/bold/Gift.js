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
const Gift = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gift-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 68h-25.94A33.82 33.82 0 0 0 196 49.69 36.62 36.62 0 0 0 158.31 12 33.44 33.44 0 0 0 134 23.25a54.65 54.65 0 0 0-6 8.3 54.65 54.65 0 0 0-6-8.3A33.44 33.44 0 0 0 97.69 12 36.62 36.62 0 0 0 60 49.69 33.82 33.82 0 0 0 65.94 68H40a20 20 0 0 0-20 20v32a20 20 0 0 0 16 19.6V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-60.4a20 20 0 0 0 16-19.6V88a20 20 0 0 0-20-20Zm-4 48h-72V92h72Zm-60-76.83a9.59 9.59 0 0 1 7-3.17h.35A12.62 12.62 0 0 1 172 49a9.59 9.59 0 0 1-3.17 7c-6.9 6.12-18.25 9.26-27.63 10.76 1.5-9.34 4.64-20.69 10.8-27.59Zm-64.3.53a12.8 12.8 0 0 1 8.91-3.7H97a9.59 9.59 0 0 1 7 3.17c6.12 6.9 9.26 18.24 10.75 27.61C105.45 65.27 94 62.13 87.17 56A9.59 9.59 0 0 1 84 49a12.72 12.72 0 0 1 3.7-9.3ZM44 92h72v24H44Zm16 48h56v56H60Zm80 56v-56h56v56Z"
}));
var _default = exports.default = Gift;