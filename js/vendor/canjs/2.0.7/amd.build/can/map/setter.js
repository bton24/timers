/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map/attributes"],function(e){e.classize=function(t,n){var r=t.split(e.undHash),i=0;for(;i<r.length;i++)r[i]=e.capitalize(r[i]);return r.join(n||"")};var t=e.classize,n=e.Map.prototype,r=n.__set;return n.__set=function(n,i,s,o,u){var a=t(n),f="set"+a,l=function(t){var r=u&&u.call(c,t);return r!==!1&&e.trigger(c,"error",[n,t],!0),!1},c=this;if(this[f]&&(i=this[f](i,function(e){r.call(c,n,e,s,o,l)},l))===undefined)return;return r.call(c,n,i,s,o,l),this},e.Map});