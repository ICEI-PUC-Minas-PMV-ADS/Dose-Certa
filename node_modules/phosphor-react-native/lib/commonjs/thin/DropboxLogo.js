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
const DropboxLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dropbox-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234.28 152.71 187 120l47.25-32.71a4 4 0 0 0 0-6.58l-52-36a4 4 0 0 0-4.56 0L128 79.14 78.28 44.71a4 4 0 0 0-4.56 0l-52 36a4 4 0 0 0 0 6.58L69 120l-47.28 32.71a4 4 0 0 0 0 6.58l52 36a4 4 0 0 0 4.56 0L128 160.86l49.72 34.43a4 4 0 0 0 4.56 0l52-36a4 4 0 0 0 0-6.58ZM128 151.14 83 120l45-31.14L173 120Zm52-98.27L225 84l-45 31.13L135 84Zm-104 0L121 84l-45 31.13L31 84Zm0 134.26L31 156l45-31.13L121 156Zm104 0L135 156l45-31.13L225 156Zm-24.82 22.05a4 4 0 0 1-1 5.57l-23.89 16.54a4 4 0 0 1-4.56 0l-23.89-16.54a4 4 0 0 1 4.56-6.58l21.61 15 21.61-15a4 4 0 0 1 5.56 1.01Z"
}));
var _default = exports.default = DropboxLogo;