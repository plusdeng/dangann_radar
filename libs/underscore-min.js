(function(){function n(n){function r(r,t,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=t(e,r[a],a,r)}return e}return function(t,e,u,i){e=d(e,i,4);var o=!A(t)&&y.keys(t),a=(o||t).length,c=n>0?0:a-1;return arguments.length<3&&(u=t[o?o[c]:c],c+=n),r(t,e,u,o,c,a)}}function r(n){return function(r,t,e){t=m(t,e);for(var u=w(r),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(t(r[i],i,r))return i;return-1}}function t(n,r,t){return function(e,u,i){var o=0,a=w(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(t&&i&&a)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(c.call(e,o,a),y.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,r){var t=E.length,e=n.constructor,u=y.isFunction(e)&&e.prototype||i,o="constructor";for(y.has(n,o)&&!y.contains(r,o)&&r.push(o);t--;)o=E[t],o in n&&n[o]!==u[o]&&!y.contains(r,o)&&r.push(o)}var u=Array.prototype,i=Object.prototype,o=Function.prototype,a=u.push,c=u.slice,f=i.toString,l=i.hasOwnProperty,s=Array.isArray,p=Object.keys,v=o.bind,h=Object.create,g=function(){},y=function(n){return n instanceof y?n:this instanceof y?void(this._wrapped=n):new y(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):root._=y,y.VERSION="1.8.3";var d=function(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}},m=function(n,r,t){return null==n?y.identity:y.isFunction(n)?d(n,r,t):y.isObject(n)?y.matcher(n):y.property(n)};y.iteratee=function(n,r){return m(n,r,1/0)};var b=function(n,r){return function(t){var e=arguments.length;if(2>e||null==t)return t;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];r&&void 0!==t[f]||(t[f]=i[f])}return t}},x=function(n){if(!y.isObject(n))return{};if(h)return h(n);g.prototype=n;var r=new g;return g.prototype=null,r},_=function(n){return function(r){return null==r?void 0:r[n]}},j=Math.pow(2,53)-1,w=_("length"),A=function(n){var r=w(n);return"number"==typeof r&&r>=0&&j>=r};y.each=y.forEach=function(n,r,t){r=d(r,t);var e,u;if(A(n))for(e=0,u=n.length;u>e;e++)r(n[e],e,n);else{var i=y.keys(n);for(e=0,u=i.length;u>e;e++)r(n[i[e]],i[e],n)}return n},y.map=y.collect=function(n,r,t){r=m(r,t);for(var e=!A(n)&&y.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i},y.reduce=y.foldl=y.inject=n(1),y.reduceRight=y.foldr=n(-1),y.find=y.detect=function(n,r,t){var e;return e=A(n)?y.findIndex(n,r,t):y.findKey(n,r,t),void 0!==e&&-1!==e?n[e]:void 0},y.filter=y.select=function(n,r,t){var e=[];return r=m(r,t),y.each(n,function(n,t,u){r(n,t,u)&&e.push(n)}),e},y.reject=function(n,r,t){return y.filter(n,y.negate(m(r)),t)},y.every=y.all=function(n,r,t){r=m(r,t);for(var e=!A(n)&&y.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},y.some=y.any=function(n,r,t){r=m(r,t);for(var e=!A(n)&&y.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},y.contains=y.includes=y.include=function(n,r,t,e){return A(n)||(n=y.values(n)),("number"!=typeof t||e)&&(t=0),y.indexOf(n,r,t)>=0},y.invoke=function(n,r){var t=c.call(arguments,2),e=y.isFunction(r);return y.map(n,function(n){var u=e?r:n[r];return null==u?u:u.apply(n,t)})},y.pluck=function(n,r){return y.map(n,y.property(r))},y.where=function(n,r){return y.filter(n,y.matcher(r))},y.findWhere=function(n,r){return y.find(n,y.matcher(r))},y.max=function(n,r,t){var e,u,i=-(1/0),o=-(1/0);if(null==r&&null!=n){n=A(n)?n:y.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else r=m(r,t),y.each(n,function(n,t,e){u=r(n,t,e),(u>o||u===-(1/0)&&i===-(1/0))&&(i=n,o=u)});return i},y.min=function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r&&null!=n){n=A(n)?n:y.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else r=m(r,t),y.each(n,function(n,t,e){u=r(n,t,e),(o>u||u===1/0&&i===1/0)&&(i=n,o=u)});return i},y.shuffle=function(n){for(var r,t=A(n)?n:y.values(n),e=t.length,u=Array(e),i=0;e>i;i++)r=y.random(0,i),r!==i&&(u[i]=u[r]),u[r]=t[i];return u},y.sample=function(n,r,t){return null==r||t?(A(n)||(n=y.values(n)),n[y.random(n.length-1)]):y.shuffle(n).slice(0,Math.max(0,r))},y.sortBy=function(n,r,t){return r=m(r,t),y.pluck(y.map(n,function(n,t,e){return{value:n,index:t,criteria:r(n,t,e)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(e>t||void 0===e)return-1}return n.index-r.index}),"value")};var O=function(n){return function(r,t,e){var u={};return t=m(t,e),y.each(r,function(e,i){var o=t(e,i,r);n(u,e,o)}),u}};y.groupBy=O(function(n,r,t){y.has(n,t)?n[t].push(r):n[t]=[r]}),y.indexBy=O(function(n,r,t){n[t]=r}),y.countBy=O(function(n,r,t){y.has(n,t)?n[t]++:n[t]=1}),y.toArray=function(n){return n?y.isArray(n)?c.call(n):A(n)?y.map(n,y.identity):y.values(n):[]},y.size=function(n){return null==n?0:A(n)?n.length:y.keys(n).length},y.partition=function(n,r,t){r=m(r,t);var e=[],u=[];return y.each(n,function(n,t,i){(r(n,t,i)?e:u).push(n)}),[e,u]},y.first=y.head=y.take=function(n,r,t){return null==n?void 0:null==r||t?n[0]:y.initial(n,n.length-r)},y.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},y.last=function(n,r,t){return null==n?void 0:null==r||t?n[n.length-1]:y.rest(n,Math.max(0,n.length-r))},y.rest=y.tail=y.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},y.compact=function(n){return y.filter(n,y.identity)};var k=function(n,r,t,e){for(var u=[],i=0,o=e||0,a=w(n);a>o;o++){var c=n[o];if(A(c)&&(y.isArray(c)||y.isArguments(c))){r||(c=k(c,r,t));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else t||(u[i++]=c)}return u};y.flatten=function(n,r){return k(n,r,!1)},y.without=function(n){return y.difference(n,c.call(arguments,1))},y.uniq=y.unique=function(n,r,t,e){y.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=m(t,e));for(var u=[],i=[],o=0,a=w(n);a>o;o++){var c=n[o],f=t?t(c,o,n):c;r?(o&&i===f||u.push(c),i=f):t?y.contains(i,f)||(i.push(f),u.push(c)):y.contains(u,c)||u.push(c)}return u},y.union=function(){return y.uniq(k(arguments,!0,!0))},y.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=w(n);u>e;e++){var i=n[e];if(!y.contains(r,i)){for(var o=1;t>o&&y.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},y.difference=function(n){var r=k(arguments,!0,!0,1);return y.filter(n,function(n){return!y.contains(r,n)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(n){for(var r=n&&y.max(n,w).length||0,t=Array(r),e=0;r>e;e++)t[e]=y.pluck(n,e);return t},y.object=function(n,r){for(var t={},e=0,u=w(n);u>e;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},y.findIndex=r(1),y.findLastIndex=r(-1),y.sortedIndex=function(n,r,t,e){t=m(t,e,1);for(var u=t(r),i=0,o=w(n);o>i;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i},y.indexOf=t(1,y.findIndex,y.sortedIndex),y.lastIndexOf=t(-1,y.findLastIndex),y.range=function(n,r,t){null==r&&(r=n||0,n=0),t=t||1;for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;e>i;i++,n+=t)u[i]=n;return u};var F=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=x(n.prototype),o=n.apply(i,u);return y.isObject(o)?o:i};y.bind=function(n,r){if(v&&n.bind===v)return v.apply(n,c.call(arguments,1));if(!y.isFunction(n))throw new TypeError("Bind must be called on a function");var t=c.call(arguments,2),e=function(){return F(n,e,r,this,t.concat(c.call(arguments)))};return e},y.partial=function(n){var r=c.call(arguments,1),t=function(){for(var e=0,u=r.length,i=Array(u),o=0;u>o;o++)i[o]=r[o]===y?arguments[e++]:r[o];for(;e<arguments.length;)i.push(arguments[e++]);return F(n,t,this,this,i)};return t},y.bindAll=function(n){var r,t,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(r=1;e>r;r++)t=arguments[r],n[t]=y.bind(n[t],n);return n},y.memoize=function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return y.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},y.delay=function(n,r){var t=c.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)},y.defer=y.partial(y.delay,y,1),y.throttle=function(n,r,t){var e,u,i,o=null,a=0;t||(t={});var c=function(){a=t.leading===!1?0:y.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=y.now();a||t.leading!==!1||(a=f);var l=r-(f-a);return e=this,u=arguments,0>=l||l>r?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||t.trailing===!1||(o=setTimeout(c,l)),i}},y.debounce=function(n,r,t){var e,u,i,o,a,c=function(){var f=y.now()-o;r>f&&f>=0?e=setTimeout(c,r-f):(e=null,t||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=y.now();var f=t&&!e;return e||(e=setTimeout(c,r)),f&&(a=n.apply(i,u),i=u=null),a}},y.wrap=function(n,r){return y.partial(r,n)},y.negate=function(n){return function(){return!n.apply(this,arguments)}},y.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},y.after=function(n,r){return function(){return--n<1?r.apply(this,arguments):void 0}},y.before=function(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),1>=n&&(r=null),t}},y.once=y.partial(y.before,2);var S=!{toString:null}.propertyIsEnumerable("toString"),E=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(n){if(!y.isObject(n))return[];if(p)return p(n);var r=[];for(var t in n)y.has(n,t)&&r.push(t);return S&&e(n,r),r},y.allKeys=function(n){if(!y.isObject(n))return[];var r=[];for(var t in n)r.push(t);return S&&e(n,r),r},y.values=function(n){for(var r=y.keys(n),t=r.length,e=Array(t),u=0;t>u;u++)e[u]=n[r[u]];return e},y.mapObject=function(n,r,t){r=m(r,t);for(var e,u=y.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=r(n[e],e,n);return o},y.pairs=function(n){for(var r=y.keys(n),t=r.length,e=Array(t),u=0;t>u;u++)e[u]=[r[u],n[r[u]]];return e},y.invert=function(n){for(var r={},t=y.keys(n),e=0,u=t.length;u>e;e++)r[n[t[e]]]=t[e];return r},y.functions=y.methods=function(n){var r=[];for(var t in n)y.isFunction(n[t])&&r.push(t);return r.sort()},y.extend=b(y.allKeys),y.extendOwn=y.assign=b(y.keys),y.findKey=function(n,r,t){r=m(r,t);for(var e,u=y.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],r(n[e],e,n))return e},y.pick=function(n,r,t){var e,u,i={},o=n;if(null==o)return i;y.isFunction(r)?(u=y.allKeys(o),e=d(r,t)):(u=k(arguments,!1,!1,1),e=function(n,r,t){return r in t},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},y.omit=function(n,r,t){if(y.isFunction(r))r=y.negate(r);else{var e=y.map(k(arguments,!1,!1,1),String);r=function(n,r){return!y.contains(e,r)}}return y.pick(n,r,t)},y.defaults=b(y.allKeys,!0),y.create=function(n,r){var t=x(n);return r&&y.extendOwn(t,r),t},y.clone=function(n){return y.isObject(n)?y.isArray(n)?n.slice():y.extend({},n):n},y.tap=function(n,r){return r(n),n},y.isMatch=function(n,r){var t=y.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0};var M=function(n,r,t,e){if(n===r)return 0!==n||1/n===1/r;if(null==n||null==r)return n===r;n instanceof y&&(n=n._wrapped),r instanceof y&&(r=r._wrapped);var u=f.call(n);if(u!==f.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!==+n?+r!==+r:0===+n?1/+n===1/r:+n===+r;case"[object Date]":case"[object Boolean]":return+n===+r}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(y.isFunction(o)&&o instanceof o&&y.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var c=t.length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if(c=n.length,c!==r.length)return!1;for(;c--;)if(!M(n[c],r[c],t,e))return!1}else{var l,s=y.keys(n);if(c=s.length,y.keys(r).length!==c)return!1;for(;c--;)if(l=s[c],!y.has(r,l)||!M(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0};y.isEqual=function(n,r){return M(n,r)},y.isEmpty=function(n){return null==n?!0:A(n)&&(y.isArray(n)||y.isString(n)||y.isArguments(n))?0===n.length:0===y.keys(n).length},y.isElement=function(n){return!(!n||1!==n.nodeType)},y.isArray=s||function(n){return"[object Array]"===f.call(n)},y.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){y["is"+n]=function(r){return f.call(r)==="[object "+n+"]"}}),y.isArguments(arguments)||(y.isArguments=function(n){return y.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(y.isFunction=function(n){return"function"==typeof n||!1}),y.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},y.isNaN=function(n){return y.isNumber(n)&&n!==+n},y.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===f.call(n)},y.isNull=function(n){return null===n},y.isUndefined=function(n){return void 0===n},y.has=function(n,r){return null!=n&&l.call(n,r)},y.noConflict=function(){return root._=previousUnderscore,this},y.identity=function(n){return n},y.constant=function(n){return function(){return n}},y.noop=function(){},y.property=_,y.propertyOf=function(n){return null==n?function(){}:function(r){return n[r]}},y.matcher=y.matches=function(n){return n=y.extendOwn({},n),function(r){return y.isMatch(r,n)}},y.times=function(n,r,t){var e=Array(Math.max(0,n));r=d(r,t,1);for(var u=0;n>u;u++)e[u]=r(u);return e},y.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},y.now=Date.now||function(){return(new Date).getTime()};var I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=y.invert(I),B=function(n){var r=function(r){return n[r]},t="(?:"+y.keys(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}};y.escape=B(I),y.unescape=B(N),y.result=function(n,r,t){var e=null==n?void 0:n[r];return void 0===e&&(e=t),y.isFunction(e)?e.call(n):e};var T=0;y.uniqueId=function(n){var r=++T+"";return n?n+r:r},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},K=/\\|'|\r|\n|\u2028|\u2029/g,z=function(n){return"\\"+q[n]};y.template=function(n,r,t){!r&&t&&(r=t),r=y.defaults({},r,y.templateSettings);var e=RegExp([(r.escape||R).source,(r.interpolate||R).source,(r.evaluate||R).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(r,t,e,o,a){return i+=n.slice(u,a).replace(K,z),u=a+r.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),r}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(r.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,y)},f=r.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},y.chain=function(n){var r=y(n);return r._chain=!0,r};var D=function(n,r){return n._chain?y(r).chain():r};y.mixin=function(n){y.each(y.functions(n),function(r){var t=y[r]=n[r];y.prototype[r]=function(){var n=[this._wrapped];return a.apply(n,arguments),D(this,t.apply(y,n))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=u[n];y.prototype[n]=function(){var t=this._wrapped;return r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],D(this,t)}}),y.each(["concat","join","slice"],function(n){var r=u[n];y.prototype[n]=function(){return D(this,r.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}).call(this);