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
const Popcorn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "popcorn-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228.14 75.66a6 6 0 0 0-5.79-1.43l-1.41.4a42 42 0 0 0-54.07-30.52 42 42 0 0 0-77.74 0 42 42 0 0 0-54.07 30.52l-1.41-.4a6 6 0 0 0-7.49 7.14l30.55 129.84A14 14 0 0 0 70.34 222h115.32a14 14 0 0 0 13.63-10.79l30.55-129.84a6 6 0 0 0-1.7-5.71ZM76 54a29.54 29.54 0 0 1 14 3.49 6 6 0 0 0 8.68-4 30 30 0 0 1 58.56 0 6 6 0 0 0 8.67 4A29.6 29.6 0 0 1 180 54a30 30 0 0 1 29.39 23.94l-41.07 11.73-35.12-14a14 14 0 0 0-10.4 0l-35.12 14-41.07-11.73A30 30 0 0 1 76 54Zm85.44 45.84L146.75 210h-37.5L94.56 99.84l32.7-13.08a2 2 0 0 1 1.48 0Zm-93 108.62L40.18 88.58l42.39 12.11L97.15 210H70.34a2 2 0 0 1-1.95-1.54Zm119.22 0a2 2 0 0 1-2 1.54h-26.81l14.58-109.31 42.39-12.11Z"
}));
var _default = exports.default = Popcorn;