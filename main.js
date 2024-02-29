(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,'*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n}\n\n\nbody {\n\n    position: relative;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 100vw 100vw 100vw;\n    grid-template-rows: auto auto auto auto;\n    align-items: center;\n    justify-items: center;\n    font-family: "Aboreto", system-ui;\n}\n\nheader {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n    height: 60px;\n\n    background-color: rgb(70, 67, 85);\n}\n\n#content {\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1 {\n    position: sticky;\n    left: 20px;\n    right: 20px;\n   font-family: inherit;\n}\n\n#name {\n    animation: fadeIn 0.8s ease-in;\n}\n\n.logo-container {\n    position: relative;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 180px 35px 100px 35px 180px;\n    grid-template-rows: 180px 35px 100px 35px 180px;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n}\n\n.center {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n    animation: enlarge-in 2s ease-in-out;\n    width: 55px;\n}\n\n.petal {\n   transition: 1s;\n}\n\n.info {\n    position: absolute;\n    font-family: inherit;\n\n    animation: fadeIn 0.6s;\n}\n\n.top,\n.bottom {\n    width: 200px;\n}\n\n.left,\n.right {\n    height: 200px;\n    cursor: pointer;\n}\n\n#return.left, \n#return.right {\n    top: 0px;\n    bottom: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.top {\n    grid-column: 2 / 5;\n    grid-row: 1 / 3;\n    animation: fadeIn 0.8s, slideUp 0.6s;\n}\n\n#return.top {\n    top: 11vh;\n    left: 0px;\n    right: 0px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#return.top:hover {\n    transform: translateY(-12px);\n    transition: 0.5s;\n}\n\n\n.bottom {\n    cursor: pointer;\n    grid-column: 2 / 5;\n    grid-row: 4 / 6;\n    animation: fadeIn 0.8s ease-in, slideDown 0.6s;\n}\n\n.bottom:hover {\n    transform: translateY(12px);\n    transition: 0.5s;\n}\n\n.left {\n    animation: fadeIn 0.8s ease-in, slideLeft 0.6s;\n    grid-column: 1 / 3;\n    grid-row: 2 / 5;\n}\n\n.left-resize {\n    position: relative;\n    grid-column: 1 / 3;\n    grid-row: 2 / 5;\n    height: 50px;\n    left: -100vw;\n}\n\n@keyframes toLeft {\n    0% {}\n}\n\n.left:hover {\n    transform: translateX(-12px);\n    transition: 0.5s;\n}\n\n.right {\n    grid-column: 4 / 6;\n    grid-row: 2 / 5;\n    animation: fadeIn 0.8s ease-in, slideRight 0.6s;\n}\n\n.right:hover {\n    transform: translateX(12px);\n    transition: 0.5s;\n}\n\n@keyframes enlarge-in {\n    0% {\n        transform: scale(0);\n    }\n90% {\n    transform: scale(1);\n}\n95% {\n    transform: scale(0.99);\n}\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes slideUp {\n    0% {\n        transform: translateY(20px);\n    }\n\n    100% {\n        transform: translateY(0px);\n    }\n}\n\n@keyframes slideDown {\n    0% {\n        transform: translateY(-20px);\n    }\n\n    100% {\n        transform: translateY(0px);\n    }\n}\n\n@keyframes slideLeft {\n    0% {\n        transform: translateX(20px);\n    }\n\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n@keyframes slideRight {\n    0% {\n        transform: translateX(-20px);\n    }\n\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n.centerCol {\n    grid-column: 2 / 3;\n    height: calc(100vh - 60px);\n    width: 100%;\n    background-color: rgb(94, 90, 120);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: auto 1fr;\n}\n\n.leftCol {\n    grid-column: 1 / 2;\n    background-color: #5e5a78;\n    height: calc(100vh - 60px);\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.rightCol {\n    grid-column: 3 / 4;\n    background-color: #5e5a78;\n    height: calc(100vh - 60px);\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: 40% 40%;\n    grid-template-rows: auto;\n    place-content: center;\n}\n\n.returnBtn {\n    position: fixed;\n    max-height: 50px;\n    max-width: 50px;\n}\n\n.menuPage {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 100vh;\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 1fr;\n    background-color: #5e5a78;\n}\n\n.menuContainer{\n    overflow: scroll;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    padding: 90px 35px;\n}\n\n.menu {\n    background-color: #e1e1e1;\n    height: fit-content;\n    width: 80%;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 1fr;\n    padding: 0px 10px 20px;\n}\n\n.menuHeader {\n    background-color: #e1e1e1;\n    border-bottom: 0.8px solid black;\n}\n\n.menuItemsContainer > div{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 18px;\n}\n\nh3 {\n    margin-top: 10px;\n    border-bottom: 0.5px solid black;\n}\n\nh5 {\n    font-weight: 500;\n}\n\n.price {\nfont-size: 8px;\ntext-shadow: 0.3px 0.2px;\n}\n\n.dish {\nfont-size: 10px;\n}\n\n.aboutContainer {\n    width: 50%;\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 30px;\n    padding: 30px;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n}\n\n.aboutContainer p {\n    font-size: 15px;\n    line-height: 25px;\n}\n\ninput, \ntextarea {\nappearance: none;\nbackground-color: #928eab;\nborder: none;\nwidth: 100%;\npadding: 5px;\nresize: none;\nborder-radius: 3px;\nfont-family: inherit;\n}\n\ninput:focus,\ntextarea:focus {\n    outline: none;\n}\n\ninput::selection,\ntextarea::selection {\n   background: white;\n}\n\n.contactUs {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),m=t.n(p),u=t(208),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(u.A,h),u.A&&u.A.locals&&u.A.locals;const f=t.p+"edba8b37256191049f45.svg",g=t.p+"5433664d1fa5b8260165.svg",v=t.p+"e804fcb24029bedb771d.svg",y=t.p+"988768d4bf2f00cdb5a2.svg",x=t.p+"6546f0f550d0611b4c1b.svg";!function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");e.classList.add("leftCol"),n.classList.add("centerCol"),t.classList.add("rightCol"),r.classList.add("menuPage"),document.body.append(e,n,t,r),setTimeout((()=>{n.scrollIntoView({behavior:"auto",block:"end"})}),100),window.addEventListener("resize",(()=>{n.scrollIntoView({behavior:"smooth",block:"end"}),h()}));const o=document.createElement("img");o.classList.add("center"),o.src=f;const a=[],i=document.createElement("img"),c=document.createElement("img"),s=document.createElement("img"),d=document.createElement("img");i.classList.add("petal","top"),i.id="top",c.classList.add("petal","right"),c.id="right",s.classList.add("petal","bottom"),s.id="bottom",d.classList.add("petal","left"),d.id="left",i.src=g,c.src=v,s.src=y,d.src=x,a.push(i,c,s,d);const l=document.createElement("div");l.classList.add("logo-container"),n.appendChild(l),l.appendChild(o),setTimeout((()=>{a.forEach(((e,n)=>{setTimeout((()=>{l.appendChild(e)}),400*(n+1))}))}),2100);const p=document.querySelector("header"),m=document.createElement("h1");function u(e){let n;const t=e.target;if("return"!==t.id){let e,r;"left"===t.id?(n=document.querySelector(".leftCol"),r=document.querySelector("#right")):"right"===t.id?(n=document.querySelector(".rightCol"),r=document.querySelector("#left")):"bottom"===t.id?(n=document.querySelector(".menuPage"),r=document.querySelector("#top"),document.querySelector(".menuContainer").scrollTop=0):e="top",function(e,n){const t=n.cloneNode();t.id="return",t.classList.add("returnBtn"),"left"===e?t.style.right="16px":"right"===e&&(t.style.left="16px"),document.body.appendChild(t),t.addEventListener("click",(e=>{u(e),h()}),{once:!0})}(t.id,r)}else n=document.querySelector(".centerCol"),console.log(t.id);n.scrollIntoView({behavior:"smooth",block:"end"})}function h(){document.querySelectorAll(".returnBtn").forEach((e=>e.remove()))}function b(){document.querySelectorAll(".info").forEach((e=>e.remove()))}function w(e){const n=e.target,t=n.id,r=document.createElement("span");r.classList.add("info");const o=n.getBoundingClientRect();"left"===t?(r.textContent="About Us",r.style.left=o.left-100+"px"):"right"===t?(r.textContent="Contact Us",r.style.left=`${o.right+20}px`):(r.textContent="Menu",r.style.bottom="-16px"),l.appendChild(r)}m.id="name",m.textContent="The RoseBud",setTimeout((()=>{p.appendChild(m)}),4300),setTimeout((()=>{for(let e=1;e<a.length;e++){const n=a[e];n.addEventListener("click",u),n.addEventListener("mouseover",w),n.addEventListener("mouseleave",b)}}),4300);const C=document.createElement("header"),E=document.createElement("h1");E.textContent="Menus",C.appendChild(E);const k=document.createElement("div"),L=document.createElement("div"),S=document.createElement("div");k.classList.add("menuContainer"),L.classList.add("menu"),S.classList.add("menu"),L.id="Lunch",S.id="Dinner";const T=[{title:"Garden Salad",description:"Fresh mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette",price:"$6.99",category:"starter"},{title:"Vegetable Spring Rolls",description:"Crispy spring rolls filled with fresh vegetables, served with sweet chili sauce",price:"$8.99",category:"starter"},{title:"Soup of the Day",description:"Chef's daily selection of homemade soup, served with crusty bread",price:"$5.99",category:"starter"},{title:"Grilled Chicken Breast",description:"Juicy grilled chicken breast served with roasted vegetables and mashed potatoes",price:"$14.99",category:"main"},{title:"Pasta Primavera",description:"Linguine pasta tossed with seasonal vegetables in a light garlic sauce",price:"$12.99",category:"main"},{title:"Beef Burger",description:"Angus beef patty topped with lettuce, tomato, onion, and your choice of cheese, served with fries",price:"$13.99",category:"main"}],A=[{title:"Caprese Salad",description:"Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",price:"$9.99",category:"starter"},{title:"Spinach Artichoke Dip",description:"Creamy spinach and artichoke dip served with crispy tortilla chips",price:"$10.99",category:"starter"},{title:"Stuffed Mushrooms",description:"Mushroom caps filled with a savory blend of cream cheese, garlic, and herbs",price:"$8.99",category:"starter"},{title:"Grilled Ribeye Steak",description:"Juicy ribeye steak seasoned and grilled to perfection, served with mashed potatoes and steamed vegetables",price:"$24.99",category:"main"},{title:"Lemon Herb Roasted Chicken",description:"Tender roasted chicken marinated in lemon and herbs, served with wild rice and roasted vegetables",price:"$18.99",category:"main"},{title:"Pan-Seared Salmon",description:"Fresh salmon fillet pan-seared with a lemon dill sauce, served with quinoa and sautéed spinach",price:"$21.99",category:"main"},{title:"New York Cheesecake",description:"Classic creamy cheesecake topped with fresh strawberries",price:"$7.99",category:"dessert"},{title:"Chocolate Lava Cake",description:"Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream",price:"$8.99",category:"dessert"},{title:"Tiramisu",description:"Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder",price:"$9.99",category:"dessert"}];function I(e){const n=document.createElement("header");n.classList.add("menuHeader");const t=document.createElement("h2");t.textContent=e.id,n.appendChild(t);const r=document.createElement("div");r.classList.add("menuItemsContainer");const o=document.createElement("div"),a=document.createElement("h3");a.textContent="Starters",o.appendChild(a);const i=document.createElement("div"),c=document.createElement("h3");c.textContent="Mains",i.appendChild(c);const s=document.createElement("div"),d=document.createElement("h3");d.textContent="Deserts",s.appendChild(d);let l=[];l="Lunch"===e.id?T:A,l.forEach((e=>{const n=document.createElement("div");n.classList.add("dishContainer");const t=document.createElement("h5"),r=document.createElement("p");r.classList.add("dish");const a=document.createElement("p");a.classList.add("price"),t.textContent=e.title,r.textContent=e.description,a.textContent=e.price,n.append(t,r,a),"starter"===e.category?o.appendChild(n):"main"===e.category?i.appendChild(n):s.appendChild(n)})),r.append(o,i),"Dinner"===e.id&&r.appendChild(s),e.append(n,r)}I(L),I(S),k.append(L,S),r.append(C,k);const $=document.createElement("div");$.classList.add("aboutContainer");const q=document.createElement("h4");q.textContent="About Us";const j=document.createElement("p");j.innerHTML="Welcome to The RoseBud,<br>experience our thoughtfully curated menu, highlighting locally sourced ingredients. With our cozy ambiance and attentive service, you wont be dissapointed<br><br>Visit The RoseBud for an unforgettable experience",$.append(q,j),e.append($);const M=document.createElement("div");M.classList.add("contactUs");const z=document.createElement("h3");z.textContent="Our Info";const P=document.createElement("div"),B=document.createElement("div"),R=document.createElement("div"),N=document.createElement("h4"),U=document.createElement("h4"),D=document.createElement("h4"),Y=document.createElement("p"),F=document.createElement("p"),H=document.createElement("p");N.textContent="Phone Number:",U.textContent="Email:",D.textContent="Address:",Y.textContent="020 7123 4567",F.textContent="contact@therosebud.com",H.textContent="Galactic Sector Alpha-7, Nebula Prime, Starhaven",P.append(N,Y),B.append(U,F),R.append(D,H),M.append(z,P,B,R);const X=document.createElement("div");X.classList.add("contactUs");const O=document.createElement("h3");O.textContent="Enquire for reservation";const V=document.createElement("input");V.type="text",V.placeholder="Name";const G=document.createElement("input");G.type="email",G.placeholder="Email";const J=document.createElement("textarea");J.rows="8",J.resize="none",J.placeholder="Enquiry",X.append(O,V,G,J),t.append(M,X)}()})()})();