(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return o})},35:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",function(){return r})},36:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",function(){return o})},37:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",function(){return u})},38:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}e.d(n,"a",function(){return r})},39:function(t,n,e){"use strict";e.r(n);var o=e(34),r=e(35),u=e(37),c=e(36),i=e(38),f=e(0),a=e.n(f),l=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(c.a)(n).call(this,t))).state={t:0,v:!0},e.ti=null,console.log("constucted."),e}return Object(i.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("mounted."),this.ti=setInterval(function(){console.log("updated."),t.setState({t:t.state.t+1})},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.ti)}},{key:"render",value:function(){return a.a.createElement("div",null,"Clock ",this.state.v&&this.state.t)}}]),n}(f.Component);n.default=l}}]);
//# sourceMappingURL=3.d9de0fab.chunk.js.map