var $logoBlock=$(".logo-caps"),$searchGreen=$(".search-container");$currentScreen=$(window),$currentScreen.scroll(function(){"use strict";var e=$currentScreen.scrollTop();e>=25?($logoBlock.addClass("light-up"),$searchGreen.addClass(" make-blue")):($logoBlock.removeClass("light-up"),$searchGreen.removeClass(" make-blue"))}),function($){"use strict";$.fn.fitVids=function(e){var t={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var a=document.head||document.getElementsByTagName("head")[0],n=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">'+n+"</style>",a.appendChild(i.childNodes[1])}return e&&$.extend(t,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];t.customSelector&&e.push(t.customSelector);var a=".fitvidsignore";t.ignore&&(a=a+", "+t.ignore);var n=$(this).find(e.join(","));n=n.not("object object"),n=n.not(a),n.each(function(e){var t=$(this);if(!(t.parents(a).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=n/i;if(!t.attr("id")){var s="fitvid"+e;t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=t.util.clone(e[i]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var i in a)n[i]=a[i];return n},insertBefore:function(e,a,n,i){i=i||t.languages;var r=i[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==a)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=r[l]}return t.languages.DFS(t.languages,function(t,a){a===i[e]&&t!=e&&(this[t]=o)}),i[e]=o},DFS:function(e,a,n){for(var i in e)e.hasOwnProperty(i)&&(a.call(e,i,e[i],n||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],a):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],a,i))}},highlightAll:function(e,a){for(var n,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;n=i[r++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,i,r){for(var s,o,l=n;l&&!e.test(l.className);)l=l.parentNode;if(l&&(s=(l.className.match(e)||[,""])[1],o=t.languages[s]),o){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var c=n.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:n,language:s,grammar:o,code:c};if(t.hooks.run("before-highlight",u),i&&self.Worker){var d=new Worker(t.filename);d.onmessage=function(e){u.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u)}}},highlight:function(e,n,i){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),i)},tokenize:function(e,a){var n=t.Token,i=[e],r=a.rest;if(r){for(var s in r)a[s]=r[s];delete a.rest}e:for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var o=a[s];o="Array"===t.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,d=!!c.lookbehind,g=0,p=c.alias;c=c.pattern||c;for(var f=0;f<i.length;f++){var m=i[f];if(i.length>e.length)break e;if(!(m instanceof n)){c.lastIndex=0;var h=c.exec(m);if(h){d&&(g=h[1].length);var b=h.index-1+g,h=h[0].slice(g),w=h.length,k=b+w,y=m.slice(0,b+1),v=m.slice(k+1),P=[f,1];y&&P.push(y);var x=new n(s,u?t.tokenize(h,u):h,p);P.push(x),v&&P.push(v),Array.prototype.splice.apply(i,P)}}}}}return i},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var r={type:e.type,content:a.stringify(e.content,n,i),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}t.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+o+">"+r.content+"</"+r.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,i=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),Prism.languages.c=Prism.languages.extend("clike",{string:/("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/,keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//}),Prism.languages.insertBefore("c","string",{property:{pattern:/((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/i,lookbehind:!0,inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete Prism.languages.c["class-name"],delete Prism.languages.c["boolean"],Prism.languages.git={comment:/^#.*$/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,deleted:/^-(?!-).+$/m,inserted:/^\+(?!\+).+$/m,commit_sha1:/^commit \w{40}$/m},Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/i,operator:{pattern:/(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/m,lookbehind:!0}}),Prism.languages.latex={comment:/%.*?(\r?\n|$)$/m,string:/(\$)(\\?.)*?\1/,punctuation:/[{}]/,selector:/\\[a-z;,:\.]*/i},Prism.languages.objectivec=Prism.languages.extend("c",{keyword:/(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/,string:/(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/}),Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*?(\r?\n|$)/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|<\?php|<\?)/i,variable:/(\$\w+)\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t,a=0;t=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(t,e.grammar,"php"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/i,url:/([-a-z]+-)*url(?=\()/i,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","function",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/i,"boolean":/\b(true|false)\b/,"null":/\b(null)\b/,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/}),Prism.languages.swift=Prism.languages.extend("clike",{keyword:/\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/,number:/\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/}),!function(){if(self.Prism){var e={csharp:"C#",cpp:"C++"};Prism.hooks.add("before-highlight",function(t){var a=e[t.language]||t.language;t.element.setAttribute("data-language",a)})}}();var clock=Snap(".clock"),frame=clock.circle(32,32,30).attr({fill:"#ffffff",stroke:"#302F30",strokeWidth:4}),hours=clock.rect(29,18,6,22,3).attr({fill:"#40A73E",stroke:"#1D1D1D",strokeWidth:1}),minutes=clock.rect(30,15,4,25,2).attr({fill:"#40A73E",stroke:"#1D1D1D",strokeWidth:1}),seconds=clock.path("M30.5,38.625c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5c0-0.656-0.414-1.202-1-1.406V10.125c0-0.277-0.223-0.5-0.5-0.5s-0.5,0.223-0.5,0.5v27.094C30.914,37.423,30.5,37.969,30.5,38.625z M31,38.625c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S31,39.177,31,38.625z").attr({fill:"#F16D68"}),middle=clock.circle(32,32,3).attr({fill:"#1D1D1D",stroke:"#F16D68",strokeWidth:2}),updateTime=function(){var e,t,a,n,i;e=new Date,i=e.getSeconds(),n=e.getMinutes(),a=e.getHours(),a=a>12?a-12:a,a="00"==a?12:a,a+=n/60,hours.animate({transform:"r"+30*a+",32,32"},200,mina.elastic),minutes.animate({transform:"r"+6*n+",32,32"},200,mina.elastic),seconds.animate({transform:"r"+6*i+",32,32"},500,mina.elastic)};setInterval(updateTime,1e3);