/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map","can/list"],function(e,t){return e.each([e.Map,e.Model],function(t){if(t===undefined)return;var n=function(e){return typeof e=="object"&&e!==null&&e};e.extend(t,{attributes:{},convert:{date:function(e){var t=typeof e;return t==="string"?(e=Date.parse(e),isNaN(e)?null:new Date(e)):t==="number"?new Date(e):e},number:function(e){return parseFloat(e)},"boolean":function(e){return e==="false"||e==="0"||!e?!1:!0},"default":function(t,n,r,i){if(e.Map.prototype.isPrototypeOf(i.prototype)&&typeof i.model=="function"&&typeof i.models=="function")return i[e.isArray(t)?"models":"model"](t);if(e.Map.prototype.isPrototypeOf(i.prototype))return e.isArray(t)&&typeof i.List=="function"?new i.List(t):new i(t);if(typeof i=="function")return i(t,n);var s=e.getObject(i),o=window,u;return i.indexOf(".")>=0&&(u=i.substring(0,i.lastIndexOf(".")),o=e.getObject(u)),typeof s=="function"?s.call(o,t,n):t}},serialize:{"default":function(e,t){return n(e)&&e.serialize?e.serialize():e},date:function(e){return e&&e.getTime()}}});var r=t.setup;t.setup=function(t,n,i){var s=this;r.call(s,t,n,i),e.each(["attributes"],function(e){if(!s[e]||t[e]===s[e])s[e]={}}),e.each(["convert","serialize"],function(n){t[n]!==s[n]&&(s[n]=e.extend({},t[n],s[n]))})}}),e.Map.prototype.__convert=function(e,t){var n=this.constructor,r=this.attr(e),i,s;return n.attributes&&(i=n.attributes[e],s=n.convert[i]||n.convert["default"]),t===null||!i?t:s.call(n,t,r,function(){},i)},e.List.prototype.serialize=function(t,n){return e.makeArray(e.Map.prototype.serialize.apply(this,arguments))},e.Map.prototype.serialize=function(t,n){var r={},i=this.constructor,s={};return n=e.isArray(n)?n:[],n.push(this._cid),t!==undefined?s[t]=this[t]:s=this.__get(),e.each(s,function(t,s){var o,u;t instanceof e.Map&&e.inArray(t._cid,n)>-1?r[s]=t.attr("id"):(o=i.attributes?i.attributes[s]:0,u=i.serialize?i.serialize[o]:0,r[s]=t&&typeof t.serialize=="function"?t.serialize(undefined,n):u?u(t,o):t)}),typeof s.length!="undefined"&&(r.length=s.length),t!==undefined?r[t]:r},e.Map});