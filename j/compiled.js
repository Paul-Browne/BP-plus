/*! imageCover | fullScreen | typeScale | middlize | ResImg | epicGrid | Paul Browne | GNU License | 2015 */
!function(){function a(a,b){var c=[window.innerWidth];return onresize=function(){var d=window.innerWidth,e=c.length;c.push(d),c[e]!==c[e-1]&&(clearTimeout(b),b=setTimeout(a,200))},a}helperize=function(){var a=window.innerWidth,b=document.getElementsByTagName("body")[0].style;for(b.fontSize=a/600+15+"px",b.lineHeight=a/8e3+1.4,a=document.querySelectorAll(".fullscreen, .fullheight"),b=0;b<a.length;b++)a[b].style.minheight=window.innerHeight+"px";for(a=document.querySelectorAll(".middlize, .vmid"),b=0;b<a.length;b++)a[b].style.top=(a[b].parentNode.offsetHeight-a[b].offsetHeight)/2+"px",a[b].parentNode.style.position="relative";for(a=document.getElementsByClassName("icovr"),b=0;b<a.length;b++){var c=a[b].offsetWidth,d=a[b].offsetHeight,e=c/d,f=a[b].children[0].naturalWidth,g=a[b].children[0].naturalHeight,h=f/g,i=a[b].children[0].style;e>=h&&(i.width="100%",i.height="auto",i.top=(d-g/(f/c))/2+"px",i.left=0),h>e&&(i.width="auto",i.height="100%",i.top=0,i.left=(c-f/(g/d))/2+"px")}},ResImg=function(){var a=document.getElementsByTagName("body")[0].getElementsByTagName("img");if(0!==a.length){var b;b=a[0].hasAttribute?function(a,b){return a.hasAttribute(b)}:function(a,b){return null!==a.getAttribute(b)};for(var c=window.devicePixelRatio?window.devicePixelRatio:1,d=0;d<a.length;d++){var e=a[d],f=c*e.parentNode.offsetWidth;if(b(e,"data-src")){for(var g=b(e,"data-src-base")?e.getAttribute("data-src-base"):"",h=e.getAttribute("data-src").split(","),i=0;i<h.length;i++){var j,k=h[i].replace(":","||").split("||");if(j=k[0],k=k[1],-1!==j.indexOf("<"))if(j=j.split("<"),h[i-1]){var l=h[i-1].split(/:(.+)/)[0].split("<");j=f<=j[1]&&f>l[1]}else j=f<=j[1];else j=j.split(">"),h[i+1]?(l=h[i+1].split(/:(.+)/)[0].split(">"),j=f>=j[1]&&f<l[1]):j=f>=j[1];if(j){f=1===(-1!==k.indexOf("//")?1:0)?k:g+k,e.src!==f&&e.setAttribute("src",f);break}}a[d].addEventListener("load",helperize)}}}},epicGrid=function(){for(var a=window.innerWidth,b=document.getElementsByTagName("*"),c=document.getElementsByClassName("egcf"),d=document.querySelectorAll('[class*="-col-"],[class*="-center-"]');0<c.length;)c[0].parentNode.removeChild(c[0]);for(c=0;c<d.length;++c){var e=d[c].style;e["float"]="none",e.width="100%",e.marginLeft=0,e.marginRight=0,e.position="relative",e.display="block"}for(d=0;d<b.length;++d)for(var c=b[d].children,f=e=0;f<c.length;++f){var g=RegExp("h-col-|h-center-","g"),h=RegExp("l-col-|l-center-","g"),i=RegExp("m-col-|m-center-","g"),j=RegExp("s-col-|s-center-","g"),k="x";a>320&&j.test(c[f].className)&&(k="s"),a>656&&i.test(c[f].className)&&(k="m"),a>1024&&h.test(c[f].className)&&(k="l"),a>1440&&g.test(c[f].className)&&(k="h");var j=new RegExp(k+"-center-\\d+-\\d+","g"),g=new RegExp(k+"-left-\\d+-\\d+","g"),h=new RegExp(k+"-right-\\d+-\\d+","g"),l=new RegExp(k+"-offset-\\d+-\\d+","g"),m=new RegExp(k+"-col-\\d+-\\d+|"+k+"-offset-\\d+-\\d+","g"),n=new RegExp(k+"-col-\\d+-\\d+|"+k+"-center-\\d+-\\d+","g"),i=new RegExp(k+"-left-\\d+-\\d+|"+k+"-right-\\d+-\\d+","g");if(!new RegExp(k+"-col-\\d+-\\d+","g").test(c[f].className)||g.test(c[f].className)||h.test(c[f].className)||(k=c[f].className.match(m).toString().match(/\d+/g),1<=Math.round(1e4*e)/1e4&&(e+=-1),0==Math.round(1e4*e)/1e4&&(c[f].className+=" eg-first"),e=2<k.length?e+(k[0]/k[1]+k[2]/k[3]):e+k[0]/k[1],0==Math.round(1e4*e)/1e4%1&&(k=document.createElement("br"),k.style.clear="both",k.className="egcf",c[f].parentNode.insertBefore(k,c[f].nextSibling))),n.test(c[f].className))for(k=c[f].className.match(n).toString().match(/\d+/g),c[f].style.width=k[0]/k[1]*(104-4*k[1])+4*k[0]-4+"%",c[f].style.marginLeft="4%",c[f].style["float"]="left",c[f].className.match(/eg\-first/g)&&(c[f].style.marginLeft=0),c[f].className.match(j)&&(c[f].style["float"]="none",c[f].style.marginLeft="auto",c[f].style.marginRight="auto"),c[f].className.match(l)&&(k=c[f].className.match(l).toString().match(/\d+/g),k=k[0]/k[1]*(104-4*k[1])+4*k[0]-4,c[f].style.marginLeft=k+8+"%",c[f].className.match(/eg\-first/g)&&(c[f].style.marginLeft=k+4+"%")),i.test(c[f].className)&&(i=c[f].className.match(i).toString().match(/\d+/g),i=i[0]/i[1]*(104-4*i[1])+4*i[0]-4,k=parseFloat(c[f].parentNode.style.width),c[f].className.match(g)&&(c[f].style.marginLeft=100/k*-(i+4)+"%",c[f].style.marginRight="4%",c[f].style["float"]="left"),c[f].className.match(h)&&(c[f].style["float"]="right",c[f].style.marginRight=100/k*-(i+4)+"%",c[f].style.marginLeft="4%")),g=document.getElementsByClassName("eg-first"),h=0;h<g.length;++h)g[0].className=g[0].className.replace(/\seg-first/,"")}ResImg(),helperize()},a(function(){epicGrid()})}();
/* === add your scripts here === */

