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
const BeerBottle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beer-bottle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m242.83 45.17-32-32a4 4 0 0 0-5.66 5.66l4.74 4.74-59.58 44.69-39.11 7.82a4 4 0 0 0-2 1.09l-83.36 83.32a20 20 0 0 0 0 28.28l41.37 41.37a20 20 0 0 0 28.28 0l83.32-83.31a4 4 0 0 0 1.09-2.05l7.82-39.11 44.69-59.58 4.74 4.74a4 4 0 1 0 5.66-5.66Zm-153 179.31a12 12 0 0 1-17 0l-41.32-41.37a12 12 0 0 1 0-17l8.49-8.45L98.34 216ZM104 210.34 45.66 152 96 101.66 154.34 160Zm76.8-108.74a3.89 3.89 0 0 0-.72 1.62L172.32 142 160 154.34 101.66 96 114 83.68l38.81-7.76a3.89 3.89 0 0 0 1.62-.72l61.22-45.92 11.1 11.1Z"
}));
var _default = exports.default = BeerBottle;