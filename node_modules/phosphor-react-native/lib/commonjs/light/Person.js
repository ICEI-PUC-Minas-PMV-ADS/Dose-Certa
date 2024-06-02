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
const Person = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 70a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm88.88 113.42-45.21-51.26A30 30 0 0 0 149.17 74h-42.34a30 30 0 0 0-22.5 10.15l-45.21 51.27A18 18 0 0 0 64.46 161l21.11-16.93-18.13 68.85a18 18 0 0 0 32.75 14.94L128 180l27.81 47.91a18 18 0 0 0 32.75-14.94l-18.13-68.87 21.11 16.9a18 18 0 0 0 25.34-25.56Zm-8.63 16.82a6 6 0 0 1-8.49 0 4.15 4.15 0 0 0-.49-.44l-35.51-28.48a6 6 0 0 0-9.56 6.2l22.87 86.93a7.66 7.66 0 0 0 .37 1 6 6 0 0 1-10.88 5.07 4.37 4.37 0 0 0-.25-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05a4.37 4.37 0 0 0-.25.48 6 6 0 0 1-10.88-5.07 7.66 7.66 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-2.53-6.53 6.07 6.07 0 0 0-3.27-1 6 6 0 0 0-3.76 1.32L56.73 151.8a4.15 4.15 0 0 0-.49.44 6 6 0 0 1-8.49-8.49l.26-.27 45.32-51.39a18 18 0 0 1 13.5-6.09h42.34a18 18 0 0 1 13.5 6.09L208 143.48l.26.27a6 6 0 0 1-.01 8.49Z"
}));
var _default = exports.default = Person;