window.cn=window.cn||{};window.cn.ApllyTmpl=function(b,e){var c=document.getElementById(e).innerHTML;if(c.replace){var a,d;for(a in b)b.hasOwnProperty(a)&&(d=new RegExp("{"+a+"}","g"),c=c.replace(d,null!==b[a]?b[a]:""));return c}};
window.cf=window.cf||{};window.cf.hlr=function(a){var b;if(a.getAttribute("x-hlr"))for(var d=a.getAttribute("x-hlr").split(" "),c=0,e=d.length;c<e;c++)if(b=d[c],window.cf.fn[b])window.cf.fn[b](a)};document.documentElement.addEventListener("click",function(a){var b;a.srcElement?b=a.srcElement:b=a.target;b.getAttribute("x-hlr")&&(a.preventDefault(),window.cf.hlr(b))},!1);
window.cf.fn=window.cf.fn||{};window.cf.fn.ViewChange=function(b){var a=b.getAttribute("x-viewChangeAct");if(window.cf.fn.ViewChange[a])window.cf.fn.ViewChange[a](b)};window.cf.fn=window.cf.fn||{};window.cf.fn.ViewChange=function(a){var b=a.getAttribute("x-viewChangeAct");if(window.cf.fn.ViewChange[b])window.cf.fn.ViewChange[b](a)};window.cf.fn.ViewChange.Details=function(a){var b=window.cf.gVar.json;a=a.getAttribute("x-viewChangeID");jQuery(".content").html(window.cn.ApllyTmpl(b[a],"OrderDetails"));for(var c=0,d=b[a].Lines.length;c<d;c++)jQuery(".OrderDetails__Lines").append(window.cn.ApllyTmpl(b[a].Lines[c],"OrderDetails__Lines"))};
window.cf.fn.ViewChange.List=function(a){a=window.cf.gVar.json;jQuery(".content").html(window.cn.ApllyTmpl(a[b],"OrderView"));for(var b=0,c=a.length;b<c;b++)a[b].index=b,jQuery(".OrderView__List").append(window.cn.ApllyTmpl(a[b],"OrderView__List"))};