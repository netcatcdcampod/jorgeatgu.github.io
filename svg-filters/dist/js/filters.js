$(document).ready(function(){function e(e,t){$(e).click(function(){$("img").removeClass().addClass(t)})}function t(){$(w).click(function(){var e=document.getElementsByTagName("body"),t=i[~~(Math.random()*i.length)];$(e).each(function(){$(e).addClass(t),setTimeout(function(){$(e).removeClass(t)},3500)})})}function n(){$(p).animate({left:"-100%"},400),$("img").removeClass()}function a(){$(p).animate({left:"0"},400).addClass("panel-bottom").css("height",o)}function l(){$("#holder").css("height",c)}function r(e,t){$(e).click(function(){$(t).removeClass("hide")})}var i=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","morpho-uno","morpho-dos","multitable","begamma","bulence"],o=$(".section-buttons").outerHeight()+15,u=$("picture").find("img"),c=$(u).outerHeight(),s=$(".section-buttons").find("button"),d=$("#panel-btn-close"),p=$(".panel"),m=($(".panel-info"),$(".panel-input")),f=$(".btn-saturate"),b=$(".btn-saturotate"),x=$(".btn-rotamatrix"),y=$(".btn-tablen"),h=$(".btn-multitable"),v=$(".btn-dishue"),g=$(".btn-matrix"),B=$(".btn-matrix-dos"),C=$(".btn-hueRotate"),F=$(".btn-luminance"),E=$(".btn-discrete"),G=$(".btn-discrete-dos"),I=$(".btn-table"),V=$(".btn-table-dos"),M=$(".btn-identity"),T=$(".btn-linear"),R=$(".btn-gamma"),S=$(".btn-turbulence"),z=$(".btn-sepia"),k=$(".btn-turbu-map"),A=$(".btn-con-matrix-uno"),D=$(".btn-con-matrix-dos"),N=$(".btn-map-uno"),j=$(".btn-map-dos"),q=$(".btn-blur-uno"),H=$(".btn-blur-dos"),O=$(".btn-morpho-uno"),U=$(".btn-morpho-dos"),w=$(".btn-poison"),J=$(".btn-begamma"),K=$(".btn-bulence"),L=$("#panel-saturate"),P=$("#panel-huerotate"),Q=$("#panel-luminance"),W=$("#panel-linear"),X=$("#panel-turbulence"),Y=$("#panel-gamma"),Z=$("#panel-blur"),_=$("#panel-morpho"),ee=$("#panel-morpho-dilate"),te=$("#panel-saturotate"),ne=$("#panel-discrete"),ae=$("#panel-discrete-dos"),le=$("#panel-matrix"),re=$("#panel-matrix-dos"),ie=$("#panel-table"),oe=$("#panel-table-dos"),ue=$("#panel-identity"),ce=$("#panel-turbumap"),se=$("#panel-sepia"),de=$("#panel-fematrix"),pe=$("#panel-fematrix-dos"),me=$("#panel-blur-dos"),fe=$("#panel-rotamatrix"),be=$("#panel-multitable"),$e=$("#panel-tablen"),xe=$("#panel-dishue"),ye=document.getElementById("panel-code-saturate"),he=document.getElementById("panel-code-huerotate");$(ye).text('<filter id="saturate-customize">\n <feColorMatrix type="saturate" values="14"/>\n</filter>'),$(he).text('<filter id="huerotate-customize">\n <feColorMatrix type="hueRotate" values="90"/>\n</filter>');var ve=document.getElementById("panel-code-gamma");$(ve).text('<filter id="gamma-customize">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="1" exponent="1"/>\n<feFuncG type="gamma" amplitude="0.4" exponent="0.25"/>\n<feFuncB type="gamma" amplitude="1" exponent="1"/>\n</feComponentTransfer>\n</filter>');var ge=document.getElementById("panel-code-blur");$(ge).text('<filter id="blur-customize">\n <feGaussianBlur stdDeviation="3"/>\n</filter>');var Be=document.getElementById("panel-code-morpho");$(Be).text('<filter id="morpho-customize">\n <feGaussianBlur operator="erode" in="SourceGraphic" radius="3"/>\n</filter>');var Ce=document.getElementById("panel-code-morpho-dilate");$(Ce).text('<filter id="morpho-customize-dilate">\n <feGaussianBlur operator="dilate" in="SourceGraphic" radius="6"/>\n</filter>');var Fe=document.getElementById("panel-code-saturotate");$(Fe).text('<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n <feColorMatrix type="saturate" result="saturado" values="20"/>\n <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="291"/>\n</filter>');var Ee=document.getElementById("panel-code-turbulence");$(Ee).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="0" k2="1" k3="-3" k4="0.01"/>\n</filter>');var Ge=document.getElementById("panel-code-linear");$(Ge).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="0.5" intercept="0.25"/>\n<feFuncG type="linear" slope="0.5" intercept="0"/>\n<feFuncB type="linear" slope="0.5" intercept="0.5"/>\n</feComponentTransfer>\n</filter>');var Ie=document.getElementById("panel-code-matrix");$(Ie).text('<filter id="matrix">\n<feColorMatrix type="matrix" in="SourceGraphic" values="-1 2 -3 0 -.5 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"/>\n</filter>');var Ve=document.getElementById("panel-code-matrix-dos");$(Ve).text('<filter id="matrix">\n<feColorMatrix type="matrix" in="SourceGraphic" values="-1 2 -3 0 -.5 2 1 0 0 0 0 3 0 0 0 0 0 1 1 0"/>\n</filter>');var Me=document.getElementById("panel-code-luminance");$(Me).text('<filter id="luminanceToAlpha" filterUnits="objectBoundingBox">\n<feColorMatrix id="luminance-value" type="luminanceToAlpha" in="SourceGraphic"/>\n</filter>');var Te=document.getElementById("panel-code-discrete");$(Te).text('<filter id="discrete">\n<feFuncR type="discrete" tableValues="0 .5 1 1"/>\n<feFuncG type="discrete" tableValues="0 .5 1"\n<feFuncB type="discrete" tableValues="0 .5 "\n</filter>');var Re=document.getElementById("panel-code-discrete-dos");$(Re).text('<filter id="discrete-dos">\n<feFuncR type="discrete" tableValues="0 .5 1 1"/>\n<feFuncG type="discrete" tableValues="0 .5 1"\n<feFuncB type="discrete" tableValues="0 .5 "\n</filter>');var Se=document.getElementById("panel-code-table");$(Se).text('<filter id="table">\n<feFuncR type="table" tableValues="1 0 1" exponent="5"/>\n<feFuncG type="table" tableValues="1 0 1" exponent="2"\n<feFuncB type="table" tableValues="1 0 1" exponent="5"\n</filter>');var ze=document.getElementById("panel-code-table-dos");$(ze).text('<filter id="table">\n<feFuncR type="table" tableValues="1 0 1" exponent="5"/>\n<feFuncG type="table" tableValues="1 10 1" exponent="2"\n<feFuncB type="table" tableValues="1 5 1" exponent="5"\n</filter>');var ke=document.getElementById("panel-code-identity");$(ke).text('<filter id="table">\n<feFuncR type="identity"/>\n<feFuncG type="identity"\n<feFuncB type="identity"\n<feFuncA type="identity"\n</filter>');var Ae=document.getElementById("panel-code-turbumap");$(Ae).text('<filter id="turbuMap">\n <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="turbulence" data-filterId="3"/>\n<feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence" scale="40"/>\n</filter>');var De=document.getElementById("panel-code-sepia");$(De).text('<filter id="sepiatone">\n<feColorMatrix type="matrix" values=".343 .669 .119 0 0 .249 .626 .130 0 0 .172 .334 .111 0 0 .000 .000 .000 1 0"/>\n</filter>');var Ne=document.getElementById("panel-code-fematrix");$(Ne).text('<filter id="sepiatone">\n<feConvolveMatrix order="3" kernelMatrix="-1 -1 3 -2 1 -1 -1 1 -1"/>\n</filter>');var je=document.getElementById("panel-code-fematrix-dos");$(je).text('<filter id="sepiatone">\n<feConvolveMatrix order="4" kernelMatrix="-2 2 1 -1 -1 3 2 1 -1 0 -1 -4 -1 1 0 0"/>\n</filter>');var qe=document.getElementById("panel-code-blur-dos");$(qe).text('<filter id="sepiatone">\n<feGaussianBlur stdDeviation= "9"/>\n</filter>');var He=document.getElementById("panel-code-rotamatrix");$(He).text('<filter id="rotamatrix">\n<feColorMatrix type="hueRotate" result="romatrix"  values="245"/>\n<feColorMatrix type="matrix" in="romatrix" in2="SourceGraphic" values="-1 2 -3 0 -.5 2 1 0 0 0 0 3 1 0 0 0 0 1 1 0"/>\n</filter>');var Oe=document.getElementById("panel-code-multitable");$(Oe).text('<filter id="multitable">\n<feComponentTransfer result="tablas">\n<feFuncR type="table" tableValues="1 0 1" exponent="5"/>\n<feFuncG type="table" tableValues="1 0 1" exponent="2"/>\n<feFuncB type="table" tableValues="1 0 1" exponent="5"/>\n</feComponentTransfer>\n<feColorMatrix type="saturate" in="tablas" in2="SourceGraphic" values="-5"/>\n</filter>');var Ue=document.getElementById("panel-code-tablen");$(Ue).text('<filter id="multitable">\n<feComponentTransfer result="tablas">\n<feFuncR type="table" tableValues="1 0 1" exponent="5"/>\n<feFuncG type="table" tableValues="1 0 1" exponent="2"/>\n<feFuncB type="table" tableValues="1 0 1" exponent="5"/>\n</feComponentTransfer>\n<feColorMatrix type="saturate" in="tablas" in2="SourceGraphic" values="-5"/>\n</filter>');var we=document.getElementById("panel-code-dishue");$(we).text('<filter id="dishue">\n<feComponentTransfer result="lsd">\n<feFuncR type="discrete" tableValues="0 .5 1 1"/>\n<feFuncG type="discrete" tableValues="0 .5 1"/>\n<feFuncB type="discrete" tableValues="0 .5"/>\n</feComponentTransfer>\n<feColorMatrix type="hueRotate" in="lsd" in2="SourceGraphic" values="-180"/>\n</filter>');var Je=new Clipboard(".panel-btn-copy");Je.on("success",function(e){function t(){$(n).text("Copied!").addClass("success"),setTimeout(function(){$(n).removeClass("success").text("Copy to clipboard")},1e3)}var n=document.getElementsByClassName("panel-btn-copy");setTimeout(t,300)}),Je.on("error",function(e){}),$(s).click(function(){"undefined"!=typeof $(this).data("panel")&&a()}),$(d).click(function(){n(),$(m).addClass("hide")}),l(),t(),e(f,i[0]),e(b,i[1]),e(x,i[2]),e(y,i[3]),e(v,i[4]),e(g,i[5]),e(B,i[6]),e(C,i[7]),e(F,i[8]),e(E,i[9]),e(G,i[10]),e(I,i[11]),e(V,i[12]),e(M,i[13]),e(T,i[14]),e(R,i[15]),e(S,i[16]),e(z,i[17]),e(k,i[18]),e(A,i[19]),e(D,i[20]),e(N,i[21]),e(j,i[22]),e(q,i[23]),e(H,i[24]),e(O,i[25]),e(U,i[26]),e(h,i[27]),e(J,i[28]),e(K,i[29]),r(f,L),r(C,P),r(F,Q),r(T,W),r(S,X),r(R,Y),r(q,Z),r(H,Z),r(O,_),r(U,ee),r(b,te),r(E,ne),r(G,ae),r(g,le),r(B,re),r(I,ie),r(V,oe),r(M,ue),r(k,ce),r(z,se),r(A,de),r(D,pe),r(H,me),r(x,fe),r(h,be),r(y,$e),r(v,xe)});