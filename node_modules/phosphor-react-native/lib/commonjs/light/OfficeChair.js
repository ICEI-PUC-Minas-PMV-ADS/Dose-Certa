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
const OfficeChair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "office-chair-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246 128a6 6 0 0 1-6 6h-18.39A46.07 46.07 0 0 1 176 174h-42v28h26a30 30 0 0 1 30 30 6 6 0 0 1-12 0 18 18 0 0 0-18-18h-26v18a6 6 0 0 1-12 0v-18H96a18 18 0 0 0-18 18 6 6 0 0 1-12 0 30 30 0 0 1 30-30h26v-28H80a46.07 46.07 0 0 1-45.61-40H16a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6 34 34 0 0 0 34 34h96a34 34 0 0 0 34-34 6 6 0 0 1 6-6h24a6 6 0 0 1 6 6Zm-176.57 9.17A14 14 0 0 1 66.14 126l13.72-96a14.07 14.07 0 0 1 13.86-12h68.56a14.07 14.07 0 0 1 13.86 12l13.72 96A14 14 0 0 1 176 142H80a14 14 0 0 1-10.57-4.83Zm9.06-7.86A2 2 0 0 0 80 130h96a2 2 0 0 0 1.51-.69 2 2 0 0 0 .47-1.59l-13.72-96a2 2 0 0 0-2-1.72H93.72a2 2 0 0 0-2 1.72l-13.72 96a2 2 0 0 0 .49 1.59Z"
}));
var _default = exports.default = OfficeChair;