function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=f||u||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var a,o,i,r,l,f,u=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,i=o;return a=o=void 0,u=t,r=e.apply(i,n)}function S(e){return u=e,l=setTimeout(O,t),s?y(e):r}function j(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-u>=i}function O(){var e=g();if(j(e))return h(e);l=setTimeout(O,function(e){var n=t-(e-f);return c?d(n,i-(e-u)):n}(e))}function h(e){return l=void 0,v&&a?y(e):(a=o=void 0,r)}function w(){var e=g(),n=j(e);if(a=arguments,o=this,f=e,n){if(void 0===l)return S(f);if(c)return l=setTimeout(O,t),y(f)}return void 0===l&&(l=setTimeout(O,t)),r}return t=b(t)||0,p(n)&&(s=!!n.leading,i=(c="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=f=o=l=void 0},w.flush=function(){return void 0===l?r:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||r.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:a,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),S={email:"",message:""};S.email=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")).email:"",S.message=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")).message:"",y.email.value=S.email,y.message.value=S.message;y.addEventListener("input",e(t)((()=>{S.email=y.email.value,S.message=y.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(S)}),500)),y.addEventListener("submit",(e=>{y.email.value&&y.message.value?(e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(`\n    {\n        email : ${S.email},\n        message: ${S.message}\n    }`),y.email.value="",y.message.value=""):alert("Please, complete all fields")}));
//# sourceMappingURL=03-feedback.dbf1bdc4.js.map