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
const GasCan = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gas-can-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 26h-76.69a13.94 13.94 0 0 0-9.9 4.1l-11.75 11.76L89.9 30.1a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.8l11.76 11.76L46.1 97.41a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14ZM54.59 65.41a2 2 0 0 1 0-2.82l24-24a2 2 0 0 1 2.82 0l11.76 11.75-26.83 26.83ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V107.31a2 2 0 0 1 .59-1.41l16-16 35.31-35.31 16-16a2 2 0 0 1 1.41-.59H200a2 2 0 0 1 2 2ZM182 64a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6Zm-2.4 60.8L138 156l41.6 31.2a6 6 0 1 1-7.2 9.6L128 163.5l-44.4 33.3a6 6 0 0 1-7.2-9.6L118 156l-41.6-31.2a6 6 0 0 1 7.2-9.6l44.4 33.3 44.4-33.3a6 6 0 1 1 7.2 9.6Z"
}));
var _default = exports.default = GasCan;