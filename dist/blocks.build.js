!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";var n=r(2),__=(r.n(n),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-calculadora-juros",{title:__("Calculadora de Juros Compostos"),icon:"calculator",category:"widget",edit:function(){return wp.element.createElement("div",null,wp.element.createElement("div",{className:"calculadora-juros-wrapper"},wp.element.createElement("h3",null,"Calculadora de Juros Compostos")),wp.element.createElement("span",{className:"calculadora-juros-info"},"O widget da calculadora ser\xe1 exibido no portal nesta mesma posi\xe7\xe3o no conte\xfado."))},save:function(){return wp.element.createElement("calculadora",null)}})},function(e,t){}]);