"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(439),c=t(791),i=t(689),a=t(263),s=t(73),u=t(80),o=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],h=n[1],f=(0,i.UO)().movieId;if((0,c.useEffect)((function(){a.Z.get("".concat(u.nE).concat(f,"/reviews?api_key=").concat(u.$h)).then((function(e){return h(e.data.results)})).catch((function(){return(0,s.ZP)("Something went wrong, please try again")}))}),[f]),t)return t.length<1?(0,o.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,o.jsxs)("li",{children:["Author: ",t,(0,o.jsx)("p",{children:r})]},n)}))})})}}}]);
//# sourceMappingURL=186.0fbccc52.chunk.js.map