/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/route","can/control"],function(e){return e.Control.processors.route=function(t,n,r,i,s){r=r||"",e.route.routes[r]||(r[0]==="/"&&(r=r.substring(1)),e.route(r));var o,u=function(t,n,u){if(e.route.attr("route")===r&&(t.batchNum===undefined||t.batchNum!==o)){o=t.batchNum;var a=e.route.attr();delete a.route,e.isFunction(s[i])?s[i](a):s[s[i]](a)}};return e.route.bind("change",u),function(){e.route.unbind("change",u)}},e});