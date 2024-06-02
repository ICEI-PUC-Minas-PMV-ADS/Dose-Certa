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
const PencilSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pencil-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l49.49 54.47-54.95 54.95a13.9 13.9 0 0 0-4.1 9.89V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1l51.87-51.9 49.11 54a6 6 0 0 0 8.88-8.08Zm67.28 91.84L68 179.52 48.48 160l52.65-52.64ZM46 208v-33.52L81.52 210H48a2 2 0 0 1-2-2Zm50-.49L76.49 188l51.31-51.31 18.58 20.45ZM225.91 74.79 181.22 30.1a14 14 0 0 0-19.8 0l-41.67 41.67a6 6 0 0 0 8.48 8.49l7.77-7.78L155.52 92l-9.11 9.1a6 6 0 1 0 8.49 8.49l9.1-9.11L183.52 120l-10.44 10.44a6 6 0 1 0 8.49 8.48l44.34-44.33a14 14 0 0 0 0-19.8Zm-8.49 11.31L192 111.52l-23.75-23.76L144.49 64l25.42-25.41a2 2 0 0 1 2.82 0l44.69 44.68a2 2 0 0 1 0 2.83Z"
}));
var _default = exports.default = PencilSlash;