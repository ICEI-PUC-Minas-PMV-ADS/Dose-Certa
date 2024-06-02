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
const PersonArmsSpread = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-arms-spread-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 70a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm101.55 66.14A17.66 17.66 0 0 0 212 74H44a18 18 0 0 0-7.55 34.34h.1l52.32 23-21.44 81.5A18 18 0 0 0 84 238a18.07 18.07 0 0 0 16.19-10.14L128 180l27.81 47.91a18 18 0 0 0 32.73-14.94l-21.44-81.5 52.32-23h.1a17.66 17.66 0 0 0 10.03-20.33Zm-15 9.29-56.95 25.08a6 6 0 0 0-3.39 7l22.87 86.93a7.66 7.66 0 0 0 .37 1 6 6 0 0 1-10.88 5.07 4.3 4.3 0 0 0-.24-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05c-.09.16-.17.31-.25.48a6 6 0 0 1-8 2.9 6 6 0 0 1-2.9-8 7.66 7.66 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-3.39-7L41.47 97.43A6 6 0 0 1 44 86h168a6 6 0 0 1 2.56 11.43Z"
}));
var _default = exports.default = PersonArmsSpread;