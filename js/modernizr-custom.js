/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-audio-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-checked-classlist-contenteditable-contextmenu-cookies-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customelements-display_runin-displaytable-ellipsis-emoji-eventlistener-filereader-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-forcetouch-framed-fullscreen-generatedcontent-getrandomvalues-hairline-hiddenscroll-hovermq-hsla-htmlimports-ie8compat-inlinesvg-input-inputtypes-json-lastchild-ligatures-lowbattery-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-picture-pointerevents-pointermq-postmessage-preserve3d-queryselector-regions-rgba-scrollsnappoints-search-shapes-siblinggeneral-smil-subpixelfont-supports-svg-svgclippaths-svgfilters-svgforeignobject-target-textalignlast-textshadow-touchevents-unicode-userselect-vibrate-video-wrapflow-printshiv-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,s;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),x.push((r?"":"no-")+s.join("-"))}}function o(e){var t=z.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?z.className.baseVal=t:z.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function d(e,t){return!!~(""+e).indexOf(t)}function l(t,n,i){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[i];return r}function c(e,t){return e-1===t||e===t||e+1===t}function u(e,t){if("object"==typeof e)for(var n in e)O(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,n,i,r){var o,d,l,c,u="modernizr",p=a("div"),f=s();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:u+(i+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+u,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",c=z.style.overflow,z.style.overflow="hidden",z.appendChild(f)),d=n(p,e),f.fake?(f.parentNode.removeChild(f),z.style.overflow=c,z.offsetHeight):p.parentNode.removeChild(p),!!d}function h(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?h(r,n||t):r);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(g(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+g(t[r])+":"+i+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function b(e,t,r,o){function s(){c&&(delete U.style,delete U.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var l=v(e,r);if(!i(l,"undefined"))return l}for(var c,u,f,h,m,g=["modernizr","tspan","samp"];!U.style&&g.length;)c=!0,U.modElem=a(g.shift()),U.style=U.modElem.style;for(f=e.length,u=0;f>u;u++)if(h=e[u],m=U.style[h],d(h,"-")&&(h=p(h)),U.style[h]!==n){if(o||i(r,"undefined"))return s(),"pfx"==t?h:!0;try{U.style[h]=r}catch(b){}if(U.style[h]!=m)return s(),"pfx"==t?h:!0}return s(),!1}function y(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+V.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?b(s,t,r,o):(s=(e+" "+$.join(a+" ")+a).split(" "),m(s,t,n))}function T(e,t,i){return y(e,n,n,t,i)}var x=[],w=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k=e.CSS;Modernizr.addTest("cssescape",k?"function"==typeof k.escape:!1);var S="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",S||E),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("framed",e.location!=top.location);var z=t.documentElement;Modernizr.addTest("contextmenu","contextMenu"in z&&"HTMLMenuItemElement"in e),Modernizr.addTest("cssall","all"in z.style),Modernizr.addTest("classlist","classList"in z);var _="svg"===z.nodeName.toLowerCase();_||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=k.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=k.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),k.elements=n+" "+e,l(t)}function o(e){var t=C[e[x]];return t||(t={},w++,e[x]=w,C[w]=t),t}function a(e,n,i){if(n||(n=t),g)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():T.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||y.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,s=i(),d=s.length;d>a;a++)r.createElement(s[a]);return r}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return k.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(k,t.frag)}function l(e){e||(e=t);var i=o(e);return!k.shivCSS||m||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||d(e,i),e}function c(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),a=[];r--;)t=n[r],o.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement(E+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function p(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+E+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[r]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(a._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,r,a=o(e),s=e.namespaces,d=e.parentWindow;return!z||e.printShived?e:("undefined"==typeof s[E]&&s.add(E),d.attachEvent("onbeforeprint",function(){t();for(var o,a,s,d=e.styleSheets,l=[],u=d.length,f=Array(u);u--;)f[u]=d[u];for(;s=f.pop();)if(!s.disabled&&S.test(s.media)){try{o=s.imports,a=o.length}catch(h){a=0}for(u=0;a>u;u++)f.push(o[u]);try{l.push(s.cssText)}catch(h){}}l=p(l.reverse().join("")),r=c(e),i=n(e,l)}),d.attachEvent("onafterprint",function(){f(r),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,g,v="3.7.3",b=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",w=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,g=!0}}();var k={elements:b.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:b.shivCSS!==!1,supportsUnknownElements:g,shivMethods:b.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:r};e.html5=k,l(t);var S=/^$|\b(?:all|print)\b/,E="html5shiv",z=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();k.type+=" print",k.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=k)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("contenteditable",function(){if("contentEditable"in z){var e=a("div");return e.contentEditable=!0,"true"===e.contentEditable}}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,i=a("canvas"),r=i.getContext("2d");return r.fillStyle="#f00",r.textBaseline="top",r.font="32px Arial",r.fillText("🐨",0,0),0!==r.getImageData(n,n,1,1).data[0]}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=a("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation}),Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=a("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,i=e.CSS,r=!1;return i&&i.supports&&i.supports("(transform-style: preserve-3d)")?!0:(t=a("a"),n=a("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),z.appendChild(t),r=n.getBoundingClientRect(),z.removeChild(t),r=r.width&&r.width<4)}),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var P=function(){function e(e,t){var r;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&i&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r):!1}var i=!("onblur"in t.documentElement);return e}();C.hasEvent=P,Modernizr.addTest("inputsearchevent",P("search"));var j=a("input"),N="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),M={};Modernizr.input=function(t){for(var n=0,i=t.length;i>n;n++)M[t[n]]=!!(t[n]in j);return M.list&&(M.list=!(!a("datalist")||!e.HTMLDataListElement)),M}(N);var R="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};Modernizr.inputtypes=function(e){for(var i,r,o,a=e.length,s="1)",d=0;a>d;d++)j.setAttribute("type",i=e[d]),o="text"!==j.type&&"style"in j,o&&(j.value=s,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&j.style.WebkitAppearance!==n?(z.appendChild(j),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(j,null).WebkitAppearance&&0!==j.offsetHeight,z.removeChild(j)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?j.checkValidity&&j.checkValidity()===!1:j.value!=s)),A[e[d]]=!!o;return A}(R);var L=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=L,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+L.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=a("a");return e.style.cssText=L.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=L.length-1;o>r;r++)e=0===r?"to ":"",i+=t+L[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=L.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),i=n.style;return i.cssText=e+L.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)});var W={elem:a("modernizr")};Modernizr._q.push(function(){delete W.elem}),Modernizr.addTest("csschunit",function(){var e,t=W.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=W.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e}),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")});var B={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var O;!function(){var e={}.hasOwnProperty;O=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=u}),Modernizr.addAsyncTest(function(){var n,i,r=function(e){z.contains(e)||z.appendChild(e)},o=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},d=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),u("flash",function(){return n}),t&&h.contains(t)){for(;t.parentNode!==h;)t=t.parentNode;h.removeChild(t)}};try{i="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(n=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||i),n||_)d(!1);else{var c,p,f=a("embed"),h=s();if(f.type="application/x-shockwave-flash",h.appendChild(f),!("Pan"in f||i))return r(h),d("blocked",f),void o(h);c=function(){return r(h),z.contains(h)?(z.contains(f)?(p=f.style.cssText,""!==p?d("blocked",f):d(!0,f)):d("blocked"),void o(h)):(h=t.body||h,f=a("embed"),f.type="application/x-shockwave-flash",h.appendChild(f),setTimeout(c,1e3))},setTimeout(c,10)}}),u("htmlimports","import"in a("link"));var F=C.testStyles=f;Modernizr.addTest("hiddenscroll",function(){return F("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",L.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");F(i,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("unicode",function(){var e,t=a("span"),n=a("span");return F("#modernizr{font-family:Arial,sans;font-size:300em;}",function(i){t.innerHTML=_?"妇":"&#5987;",n.innerHTML=_?"☆":"&#9734;",i.appendChild(t),i.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),Modernizr.addTest("checked",function(){return F("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),F("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var q=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();q?Modernizr.addTest("fontface",!1):F('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),Modernizr.addTest("hairline",function(){return F("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),Modernizr.addTest("cssinvalid",function(){return F("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),F("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),F("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),F("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+L.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return F("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),F("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return F("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),F("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt(l(t,null,"height"),10);Modernizr.addTest("cssvhunit",i==n)}),F("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,a=i.clientHeight/100,s=parseInt(50*Math.max(o,a),10),d=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",c(s,d)||c(s,d-r))},3),F("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,a=i.clientHeight/100,s=parseInt(50*Math.min(o,a),10),d=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvminunit",c(s,d)||c(s,d-r))},3),F("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvwunit",i==n)});var H=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=H,Modernizr.addTest("mediaqueries",H("only all")),Modernizr.addTest("hovermq",H("(hover)")),Modernizr.addTest("pointermq",H("(pointer:coarse),(pointer:fine),(pointer:none)"));var I="Moz O ms Webkit",$=C._config.usePrefixes?I.toLowerCase().split(" "):[];C._domPrefixes=$,Modernizr.addTest("pointerevents",function(){var e=!1,t=$.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)P($[t]+"pointerdown")&&(e=!0);return e});var V=C._config.usePrefixes?I.split(" "):[];C._cssomPrefixes=V;var D=function(t){var i,r=L.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var a=0;r>a;a++){var s=L[a],d=s.toUpperCase()+"_"+i;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=D;var U={style:W.elem.style};Modernizr._q.unshift(function(){delete U.style});var G=C.testProp=function(e,t,i){return b([e],n,t,i)};Modernizr.addTest("textshadow",G("textShadow","1px 1px")),C.testAllProps=y;var J=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?D(e):(-1!=e.indexOf("-")&&(e=p(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return P(J("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!J("exitFullscreen",t,!1)&&!J("cancelFullScreen",t,!1))),Modernizr.addTest("vibrate",!!J("vibrate",navigator)),Modernizr.addTest("lowbattery",function(){var e=.2,t=J("battery",navigator);return!!(t&&!t.charging&&t.level<=e)});var X,Y=J("crypto",e);if(Y&&"getRandomValues"in Y&&"Uint32Array"in e){var K=new Uint32Array(10),Z=Y.getRandomValues(K);X=Z&&i(Z[0],"number")}Modernizr.addTest("getrandomvalues",!!X),Modernizr.addTest("backgroundblendmode",J("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!J("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(_)return!1;var e=J("flowFrom"),t=J("flowInto"),i=!1;if(!e||!t)return i;var r=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),z.appendChild(o);var c,u,p=s.getBoundingClientRect();return s.style[t]=l,c=s.getBoundingClientRect(),u=parseInt(c.left-p.left,10),z.removeChild(o),42==u?i=!0:(z.appendChild(r),p=r.getBoundingClientRect(),r.style[t]=l,c=r.getBoundingClientRect(),p.height>0&&p.height!==c.height&&0===c.height&&(i=!0)),s=d=o=r=n,i}),Modernizr.addTest("wrapflow",function(){var e=J("wrapFlow");if(!e||_)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=a("div"),r=a("div"),o=a("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",i.appendChild(r),i.appendChild(o),z.appendChild(i);var s=o.offsetLeft;return z.removeChild(i),r=o=i=n,150==s}),C.testAllProps=T,Modernizr.addTest("ligatures",T("fontFeatureSettings",'"liga" 1')),Modernizr.addTest("cssanimations",T("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("appearance",T("appearance")),Modernizr.addTest("backdropfilter",T("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return T("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return T("backgroundPositionX","3px",!0)&&T("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",T("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",T("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",T("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",T("backgroundSize","cover")),Modernizr.addTest("borderimage",T("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",T("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",T("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",T("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=T("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=T("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||T(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",T("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",T("grid-template-rows","none",!0)),Modernizr.addTest("displayrunin",T("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",T("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return T("filter","blur(2px)");var e=a("a");return e.style.cssText=L.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",T("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",T("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",T("flexAlign","end",!0)),Modernizr.addTest("flexwrap",T("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=a("div"),n=a("span"),i=e.style,r=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",
t.body.insertBefore(e,d),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+L.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var i=a("div"),r=a("span"),o=i.style,s=0,d=!1,l=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,u),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>s,n?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",c=r.offsetWidth>s):c=!0,l===!0&&c===!0&&(d=!0),t.body.removeChild(i),i.removeChild(r),d}catch(p){return!1}}function s(n){try{var i,r=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?d=e.find(s+s):(i=e.self.document.body.createTextRange(),d=i.findText(s+s))}catch(c){d=!1}return t.body.removeChild(o),t.body.removeChild(r),d}catch(c){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!T("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),u("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",T("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",T("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",T("boxReflect","above",!0)),Modernizr.addTest("cssresize",T("resize","both",!0)),Modernizr.addTest("scrollsnappoints",T("scrollSnapType")),Modernizr.addTest("shapes",T("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",T("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&T("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!T("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in z.style)){var n,i="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(i+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransformslevel2",function(){return T("translate","45px",!0)}),Modernizr.addTest("csstransitions",T("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",T("userSelect","none",!0)),r(),o(x),delete C.addTest,delete C.addAsyncTest;for(var Q=0;Q<Modernizr._q.length;Q++)Modernizr._q[Q]();e.Modernizr=Modernizr}(window,document);