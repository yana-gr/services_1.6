!function(e){var t={};function s(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){"use strict";s.r(t);s(2);var o=document.querySelector(".mask"),a=document.querySelector(".sidebar"),n=document.querySelector(".header__burger"),r=document.querySelector(".sidebar__burger"),i=document.querySelector(".feedback"),l=document.querySelectorAll(".btn__chat"),c=document.querySelector(".feedback__btn-close"),d=document.querySelector(".modal-call"),u=document.querySelectorAll(".btn__call"),m=document.querySelector(".modal-call__btn-close");document.body.clientWidth<1365&&(n.addEventListener("click",(function(e){e.preventDefault(),a.classList.add("sidebar--show"),i.classList.remove("sidebar--show"),o.classList.add("mask--show"),d.classList.remove("sidebar--show")})),r.addEventListener("click",(function(e){e.preventDefault(),a.classList.remove("sidebar--show"),o.classList.remove("mask--show")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(a.classList.remove("sidebar--show"),o.classList.remove("mask--show"))}))),o.addEventListener("click",(function(e){e.target===o&&(o.classList.remove("mask--show"),a.classList.remove("sidebar--show"),i.classList.remove("sidebar--show"),d.classList.remove("sidebar--show"),document.body.style.overflow="")}));for(var _=0;_<l.length;_+=1)l[_].addEventListener("click",(function(e){e.preventDefault(),i.classList.add("sidebar--show"),a.classList.remove("sidebar--show"),o.classList.add("mask--show"),d.classList.remove("sidebar--show")}));c.addEventListener("click",(function(e){e.preventDefault(),i.classList.remove("sidebar--show"),o.classList.remove("mask--show")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(i.classList.remove("sidebar--show"),o.classList.remove("mask--show"))}));for(var v=0;v<u.length;v+=1)u[v].addEventListener("click",(function(e){e.preventDefault(),d.classList.add("sidebar--show"),a.classList.remove("sidebar--show"),o.classList.add("mask--show"),i.classList.remove("sidebar--show")}));if(m.addEventListener("click",(function(e){e.preventDefault(),d.classList.remove("sidebar--show"),o.classList.remove("mask--show")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(d.classList.remove("sidebar--show"),o.classList.remove("mask--show"))})),document.body.clientWidth<767)new Swiper(".brands__container",{slidesPerView:5,loop:!0,pagination:{el:".brands--swiper-pagination"}});if(document.body.clientWidth<767)new Swiper(".devices__container",{slidesPerView:3,loop:!0,pagination:{el:".devices--swiper-pagination"}});if(document.body.clientWidth<767)new Swiper(".prices__container",{slidesPerView:2,loop:!0,pagination:{el:".prices--swiper-pagination"}});var w=document.querySelector(".about__button"),b=document.querySelector(".about__article");w.addEventListener("click",(function(e){e.preventDefault(),b.classList.contains("about__article--show-all")?(b.classList.remove("about__article--show-all"),w.textContent="Читать далее",w.classList.remove("show__all--top"),w.classList.add("show__all--bottom")):(b.classList.add("about__article--show-all"),w.textContent="Свернуть",w.classList.remove("show__all--bottom"),w.classList.add("show__all--top"))}));var L=document.querySelector(".brands__all"),f=document.querySelector(".brands__container");L.addEventListener("click",(function(e){e.preventDefault(),f.classList.contains("brands__container--show-all")?(f.classList.remove("brands__container--show-all"),L.textContent="Показать все",L.classList.remove("show__all--top"),L.classList.add("show__all--bottom")):(f.classList.add("brands__container--show-all"),L.textContent="Скрыть",L.classList.remove("show__all--bottom"),L.classList.add("show__all--top"))}));var h=document.querySelector(".devices__all"),p=document.querySelector(".devices__container");h.addEventListener("click",(function(e){e.preventDefault(),p.classList.contains("devices__container--show-all")?(p.classList.remove("devices__container--show-all"),h.textContent="Показать все",h.classList.remove("show__all--top"),h.classList.add("show__all--bottom")):(p.classList.add("devices__container--show-all"),h.textContent="Скрыть",h.classList.remove("show__all--bottom"),h.classList.add("show__all--top"))})),console.log("Works!")},function(e,t,s){}]);
//# sourceMappingURL=bundle.js.map