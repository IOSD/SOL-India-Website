// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});function ws_shift(k,i,c){var d=jQuery;var h=d(this);var b=c.find("li");var f=c.find(".ws_list");var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};var g=d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);var a=d("<div>").css(e).css({display:"none",zIndex:4}).appendTo(g);var j=d("<div>").css(e).css({display:"none",zIndex:3}).appendTo(g);this.go=function(l,p,n){var m=c.width();var o=c.height();a.append(d(i.get(l)).clone());j.append(d(i.get(p)).clone());if(k.responsive<3){a.find("img").css("width","100%");j.find("img").css("width","100%")}f.stop(true,true).hide().css({left:-l+"00%"});var q={left:[{left:-m},{left:0}],right:[{left:m},{left:0}],down:[{top:o},{top:0}],up:[{top:-o},{top:0}]}[k.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];if(k.support.transform){if(q[0].left){q[0]={translate:[q[0].left,0,0]}}else{q[0]={translate:[0,q[0].top,0]}}q[1]={translate:[0,0,0]}}a.show();j.show();wowAnimate(a,q[0],q[1],k.duration,"easeInOutCubic",function(){f.show();a.hide().html("");j.hide().html("");h.trigger("effectEnd")});wowAnimate(j,{scale:1,translate:[0,0,0]},{scale:0.5,translate:[0,0,0]},k.duration,"easeInOutCubic")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a}});function ws_lines(d,l,m){var e=jQuery;var f=e(this);var i=d.noCanvas||!document.createElement("canvas").getContext;var k=d.width,r=d.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_lines").appendTo(m);if(!i){var b=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=b.get(0).getContext("2d")}var s=[["rgb(187,187,187)",0.1,0.3],["rgb(179,179,179)",0.9,0.8],["rgb(182,182,182)",0.68,0.4],["rgb(185,185,185)",0.25,0.4],["rgb(204,204,204)",0.11,0.7],["rgb(195,195,195)",0.18,0.1],["rgb(198,198,198)",0.4,0.2],["rgb(201,201,201)",0.55,-0.04],["rgb(211,211,211)",0,0.95],["rgb(214,214,214)",0.5,0.8],["rgb(217,217,217)",0.9,0.1]];var a=[[0.5,0.4,0.3,0.2,0.1,0,0.1,0.2,0.3,0.4,0.5],[0,0.1,0.2,0.3,0.4,0.5,0.4,0.3,0.2,0.1,0],[0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5],[0.5,0.45,0.4,0.35,0.3,0.25,0.2,0.15,0.1,0.05,0],[0.7,0.3,0,0.1,0.5,0.3,0.4,0.1,0.6,0.2,0],];var q=["from-top","from-bottom","width-from-center","height-from-center","fill-half-fill-full"];var j=["easeOutExpo","easeOutCubic","easeOutBackCubic","easeOutBack"];var p=[45,-45,0,180,90,-90];function n(h){h.save();h.setTransform(1,0,0,1,0,0);h.clearRect(0,0,k,r);h.restore()}function c(G,D,I,w,C,y,z){var u=k;var E=r;if(z==45||z==-45){u=E=Math.sqrt(k*k+r*r)}if(z==90||z==-90){u=r;E=k}var B=(u-k)/2;var v=(E-r)/2;n(G);for(var x=0,A=I.length;x<A;x++){var F=I[x]*(1-D);var h=Math.max(0,Math.min(1,D-F));G.beginPath();G.fillStyle=s[x][0];if(w){G.fillStyle=s[x][0].replace(/rgb/g,"rgba").replace(/\)/g,","+Math.min(D+0.1,1)+")")}var H={x:0,y:0,w:0,h:0};switch(C){case"from-top":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=-1.5*E*(1-h)-v;break;case"from-bottom":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=1.5*E*(1-h)-v;break;case"width-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A)*h;H.h=E;H.x=(A-x-1)*u/A+(1-h)*u/A/2-B;H.y=-v;break;case"height-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break;case"fill-half-fill-full":if(h<0.5){if(y&&e.easing[y]){h=e.easing[y](0.5,h,0,0.5,0.5,0.5)}}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break}G.fillRect(H.x,H.y,H.w,H.h)}}this.go=function(C,x){if(i){m.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},d.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=m.width();r=m.height();var w=a[Math.floor(Math.random()*(a.length))];var E=a[Math.floor(Math.random()*(a.length))];b.attr({width:k,height:r});var A=l.get(x);for(var y=0,B=s.length;y<B;y++){var v=Math.abs(s[y][1]),h=Math.abs(s[y][2]);s[y][0]=t(A,{x:v*k,y:h*r,w:2,h:2})||s[y][0]}var D=q[Math.floor(Math.random()*(q.length))];var z=j[Math.floor(Math.random()*(j.length))];var u=p[Math.floor(Math.random()*(p.length))];o.translate(k/2,r/2);o.rotate(u*Math.PI/180);o.translate(-k/2,-r/2);wowAnimate(function(F){c(o,F,w,true,D,z,u)},0,1,d.duration/2,function(){m.find(".ws_list").css({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});D=q[Math.floor(Math.random()*(q.length))];z=j[Math.floor(Math.random()*(j.length))];wowAnimate(function(F){c(o,1-F,E,false,D,z,u)},0,1,d.duration/2,d.duration*0.15,function(){n(o);f.trigger("effectEnd")})})}};function t(D,u){u=u||{};var F=1,x=u.exclude||[],C;var z=document.createElement("canvas"),w=z.getContext("2d"),v=z.width=D.naturalWidth,J=z.height=D.naturalHeight;w.drawImage(D,0,0,D.naturalWidth,D.naturalHeight);try{C=w.getImageData(u.x?u.x:0,u.y?u.y:0,u.w?u.w:D.width,u.h?u.h:D.height)["data"]}catch(E){return false}var y=(u.w?u.w:D.width*u.h?u.h:D.height)||C.length,A={},H="",G=[],h={dominant:{name:"",count:0}};var B=0;while(B<y){G[0]=C[B];G[1]=C[B+1];G[2]=C[B+2];H=G.join(",");if(H in A){A[H]=A[H]+1}else{A[H]=1}if(x.indexOf(["rgb(",H,")"].join(""))===-1){var I=A[H];if(I>h.dominant.count){h.dominant.name=H;h.dominant.count=I}}B+=F*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_glass_parallax(d,l,m){var f=jQuery;var i=f(this);var j=d.parallax||0.25;var k=f("<div>").css({position:"absolute",display:"none",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_glass_parallax").appendTo(m);var h=!d.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(h){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(q){h=0}}function t(e){return Math.round(e*1000)/1000}var u=f("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)",zIndex:1}).appendTo(k);var s=u.clone().appendTo(k);var r=u.clone().css({width:"20%"}).appendTo(k);var c;var p=u.clone().appendTo(k).css({zIndex:0});this.go=function(C,A,x){var e=f(l.get(A));e={position:"absolute",width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")};x=x?1:-1;var E=f(l.get(A)).clone().css(e).appendTo(u);var z=f(l.get(C)).clone().css(e).appendTo(s);var v=f(l.get(C)).clone().css(e).appendTo(r);if(x==-1){r.css({left:"auto",right:0});v.css({left:"auto",right:0})}else{r.css({left:0,right:"auto"});v.css({left:0,right:"auto"})}var D=(m.width()||d.width)*1.3;var B=m.height()||d.height;var y;if(h){if(!c){c=f("<canvas>").css({position:"absolute",left:0,top:0}).attr({width:e.width,height:e.height}).appendTo(p)}c.css(e).attr({width:e.width,height:e.height});y=o(f(l.get(C)),e,10,c.get(0))}if(!h||!y){h=0}wowAnimate(function(G){G=f.easing.swing(G);var L=t(x*G*D),F=t(x*(-D+G*D-(1-G)*D*0.2)),J=t(x*(-D*1.4+G*(D*1.4+D/1.3))),w=t(-x*D*j*G),H=t(x*D*j*(1-G)),I=t(-x*D*(j+0.2)*G),K=t(x*(-D*0.2+G*D*0.4));if(d.support.transform){u.css("transform","translate3d("+L+"px,0,0)");E.css("transform","translate3d("+w+"px,0,0)");s.css("transform","translate3d("+F+"px,0,0)");z.css("transform","translate3d("+H+"px,0,0)");r.css("transform","translate3d("+J+"px,0,0)");v.css("transform","scale(1.6) translate3d("+I+"px,0,0)");p.css("transform","translate3d("+K+"px,0,0)")}else{u.css("left",L);E.css("margin-left",w);s.css("left",F);z.css("margin-left",H);r.css("left",J);v.css("margin-left",I);p.css("left",K)}},0,1,d.duration,function(){k.hide();E.remove();z.remove();v.remove();i.trigger("effectEnd")})};function o(C,A,B,v){var F=(parseInt(C.parent().css("z-index"))||0)+1;if(h){var I=v.getContext("2d");I.drawImage(C.get(0),0,0,A.width,A.height);if(!a(I,0,0,v.width,v.height,B)){return 0}return f(v)}var J=f("<div></div>").css({position:"absolute","z-index":F,left:0,top:0}).css(A).appendTo(v);var H=(Math.sqrt(5)+1)/2;var w=1-H/2;for(var z=0;w*z<B;z++){var D=Math.PI*H*z;var e=(w*z+1);var G=e*Math.cos(D);var E=e*Math.sin(D);f(document.createElement("img")).attr("src",C.attr("src")).css({opacity:1/(z/1.8+1),position:"absolute","z-index":F,left:Math.round(G)+"px",top:Math.round(E)+"px",width:"100%",height:"100%"}).appendTo(J)}return J}var g=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var n=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function a(am,U,S,v,w,ad){if(isNaN(ad)||ad<1){return}ad|=0;var ah;try{ah=am.getImageData(U,S,v,w)}catch(al){console.log("error:unable to access image data: "+al);return false}var C=ah.data;var ab,aa,aj,ag,J,M,G,A,B,R,H,T,P,X,ac,K,F,L,N,W;var ak=ad+ad+1;var Y=v<<2;var I=v-1;var af=w-1;var E=ad+1;var ae=E*(E+1)/2;var V=new b();var Q=V;for(aj=1;aj<ak;aj++){Q=Q.next=new b();if(aj==E){var D=Q}}Q.next=V;var ai=null;var Z=null;G=M=0;var O=g[ad];var z=n[ad];for(aa=0;aa<w;aa++){X=ac=K=A=B=R=0;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}for(aj=1;aj<E;aj++){ag=M+((I<aj?I:aj)<<2);A+=(Q.r=(F=C[ag]))*(W=E-aj);B+=(Q.g=(L=C[ag+1]))*W;R+=(Q.b=(N=C[ag+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next}ai=V;Z=D;for(ab=0;ab<v;ab++){C[M]=(A*O)>>z;C[M+1]=(B*O)>>z;C[M+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(G+((ag=ab+ad+1)<I?ag:I))<<2;X+=(ai.r=C[ag]);ac+=(ai.g=C[ag+1]);K+=(ai.b=C[ag+2]);A+=X;B+=ac;R+=K;ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=4}G+=v}for(ab=0;ab<v;ab++){ac=K=X=B=R=A=0;M=ab<<2;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}J=v;for(aj=1;aj<=ad;aj++){M=(J+ab)<<2;A+=(Q.r=(F=C[M]))*(W=E-aj);B+=(Q.g=(L=C[M+1]))*W;R+=(Q.b=(N=C[M+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next;if(aj<af){J+=v}}M=ab;ai=V;Z=D;for(aa=0;aa<w;aa++){ag=M<<2;C[ag]=(A*O)>>z;C[ag+1]=(B*O)>>z;C[ag+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(ab+(((ag=aa+E)<af?ag:af)*v))<<2;A+=(X+=(ai.r=C[ag]));B+=(ac+=(ai.g=C[ag+1]));R+=(K+=(ai.b=C[ag+2]));ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=v}}am.putImageData(ah,U,S);return true}function b(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_parallax(k,g,a){var c=jQuery;var f=c(this);var d=a.find(".ws_list");var b=k.parallax||0.25;var e=c("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(a);function j(l){return Math.round(l*1000)/1000}var i=c("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var h=i.clone().appendTo(e);this.go=function(l,r,p){var s=c(g.get(r));s={width:s.width(),height:s.height(),marginTop:s.css("marginTop"),marginLeft:s.css("marginLeft")};p=p?1:-1;var n=c(g.get(r)).clone().css(s).appendTo(i);var o=c(g.get(l)).clone().css(s).appendTo(h);var m=a.width()||k.width;var q=a.height()||k.height;d.hide();wowAnimate(function(v){v=c.easing.swing(v);var x=j(p*v*m),u=j(p*(-m+v*m)),t=j(-p*m*b*v),w=j(p*m*b*(1-v));if(k.support.transform){i.css("transform","translate3d("+x+"px,0,0)");n.css("transform","translate3d("+t+"px,0,0)");h.css("transform","translate3d("+u+"px,0,0)");o.css("transform","translate3d("+w+"px,0,0)")}else{i.css("left",x);n.css("margin-left",t);h.css("left",u);o.css("margin-left",w)}},0,1,k.duration,function(){e.hide();n.remove();o.remove();f.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_kenburns(d,l,m){var e=jQuery;var g=e(this);var f=document.createElement("canvas").getContext;var i=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(m);var o=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[0.5,1,1],to:[0.5,1,1.3]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[1,0.5,1],to:[1,0.5,1.2]},{from:[0,0.5,1.2],to:[0,0.5,1]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[0.5,0.5,1],to:[0.5,0.5,1.2]},{from:[0.5,0.5,1.3],to:[0.5,0.5,1]},{from:[0.5,1,1],to:[0.5,0,1.15]}];function c(h){return o[h?Math.floor(Math.random()*(f?o.length:Math.min(5,o.length))):0]}var k=d.width,p=d.height;var j,b;var a,r;function n(){a=e('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(i)}n();function s(w,t,h){var u={width:100*w[2]+"%"};u[t?"right":"left"]=-100*(w[2]-1)*(t?(1-w[0]):w[0])+"%";u[h?"bottom":"top"]=-100*(w[2]-1)*(h?(1-w[1]):w[1])+"%";if(!f){for(var v in u){if(/\%/.test(u[v])){u[v]=(/right|left|width/.test(v)?k:p)*parseFloat(u[v])/100+"px"}}}return u}function q(w,z,A){var t=e(w);t={width:t.width(),height:t.height(),marginTop:t.css("marginTop"),marginLeft:t.css("marginLeft")};if(f){if(b){b.stop(1)}b=j}if(r){r.remove()}r=a;n();if(A){a.hide();r.stop(true,true)}if(f){var y,x;var u,h;u=e('<canvas width="'+k+'" height="'+p+'"/>');u.css({position:"absolute",left:0,top:0}).css(t).appendTo(a);y=u.get(0).getContext("2d");h=u.clone().appendTo(a);x=h.get(0).getContext("2d");j=wowAnimate(function(B){var D=[z.from[0]*(1-B)+B*z.to[0],z.from[1]*(1-B)+B*z.to[1],z.from[2]*(1-B)+B*z.to[2]];x.drawImage(w,-k*(D[2]-1)*D[0],-p*(D[2]-1)*D[1],k*D[2],p*D[2]);y.clearRect(0,0,k,p);var C=y;y=x;x=C},0,1,d.duration+d.delay*2)}else{k=t.width;p=t.height;var v=e('<img src="'+w.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(a).css(s(z.from,z.from[0]>0.5,z.from[1]>0.5)).animate(s(z.to,z.from[0]>0.5,z.from[1]>0.5),{easing:"linear",queue:false,duration:(1.5*d.duration+d.delay)})}if(A){a.fadeIn(d.duration)}}if(d.effect.length==1){e(function(){l.each(function(h){e(this).css({visibility:"hidden"});if(h==d.startSlide){q(this,c(h),0)}})})}this.go=function(h,t){setTimeout(function(){g.trigger("effectEnd")},d.duration);q(l.get(h),c(h),1)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(q,p,o,m,l,n){if(k.support.transform){if(p.top){p.translate=[0,p.top||0,0]}if(o.top){o.translate=[0,o.top||0,0]}delete p.top;delete o.top}wowAnimate(q,p,o,m,l,"swing",n)}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.each(function(I){g(b(this),{width:0,opacity:0},{width:D,opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blinds(m,l,a){var g=jQuery;var k=g(this);var c=m.parts||3;var j=g(".ws_list",a);var h=g("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(a);var d=g("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(h);var e=[];var b=document.addEventListener;for(var f=0;f<c;f++){e[f]=g("<div>").css({position:b?"relative":"absolute",display:b?"inline-block":"block",height:"100%",width:(100/c+0.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:b?0:((100*f/c).toFixed(3)+"%")}).appendTo(h)}this.go=function(r,p,o){if(o==undefined){o=p>r?1:0}h.find("img").stop(true,true);h.show();var s=g(l[p]);var t={width:s.width()||m.width,height:s.height()||m.height};var u=s.clone().css(t).appendTo(d);u.from={left:0};u.to={left:(!o?1:-1)*u.width()*0.5};if(m.support.transform){u.from={translate:[u.from.left,0,0]};u.to={translate:[u.to.left,0,0]}}j.hide();wowAnimate(u,u.from,u.to,m.duration,m.duration*0.1,"swing");for(var q=0;q<e.length;q++){var n=e[q];var v=g(l[r]).clone().css({position:"absolute",top:0}).css(t).appendTo(n);v.from={left:(!o?-1:1)*v.width()-n.position().left};v.to={left:-n.position().left};if(m.support.transform){v.from={translate:[v.from.left,0,0]};v.to={translate:[v.to.left,0,0]}}wowAnimate(v,v.from,v.to,(m.duration/(e.length+1))*(o?(e.length-q+1):(q+2)),"swing",((!o&&q==e.length-1||o&&!q)?function(){k.trigger("effectEnd");h.hide().find("img").remove();u.remove()}:false))}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container2").wowSlider({effect:"shift,lines,glass_parallax,parallax,kenburns,slices,blinds",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:3,fullScreen:false,gestures:2,onBeforeStep:0,images:0});