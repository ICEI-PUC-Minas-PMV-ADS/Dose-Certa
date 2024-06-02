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
const FilmSlate = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "film-slate-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 108H71.26L209 71.64a4 4 0 0 0 2.84-4.92l-8.16-30a11.92 11.92 0 0 0-14.54-8.31L36.83 68.61a11.78 11.78 0 0 0-7.26 5.53A11.59 11.59 0 0 0 28.41 83l7.67 28.19a3.87 3.87 0 0 0-.08.81v88a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-88a4 4 0 0 0-4-4Zm-90-54.67 38 21.92-47.92 12.65L78.12 66Zm65.16-17.2a4 4 0 0 1 1-.13 3.88 3.88 0 0 1 3.84 2.81l7.1 26.12-28.1 7.42-38-21.92Zm-154.7 42a3.86 3.86 0 0 1 2.37-1.8l28.27-7.46 38 21.91-61.85 16.34-7.12-26.18a3.66 3.66 0 0 1 .37-2.8ZM212 200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h168Z"
}));
var _default = exports.default = FilmSlate;