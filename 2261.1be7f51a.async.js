"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2261],{303840:function(Ce,K,x){Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;const A=k(x(554434));function k(P){return P&&P.__esModule?P:{default:P}}const b=A;K.default=b,Ce.exports=b},722967:function(Ce,K,x){x.d(K,{Z:function(){return ee}});var A=x(487462),k=x(601413),b=x(297685),P=x(912402),we=x(294184),fe=x.n(we),ye=x(267656),Se=x(491304),r=x(850344),i=x(821770),d=x(915105),L=x(580334),t=x(667294);function s(){var e=(0,t.useState)({id:0,callback:null}),n=(0,b.Z)(e,2),c=n[0],f=n[1],u=(0,t.useCallback)(function(v){f(function(l){var h=l.id;return{id:h+1,callback:v}})},[]);return(0,t.useEffect)(function(){var v;(v=c.callback)===null||v===void 0||v.call(c)},[c]),u}var R=x(440228),C=x(72512),Z=t.createContext(null),_=Z;function be(e){var n=t.useContext(_),c=n.notFoundContent,f=n.activeIndex,u=n.setActiveIndex,v=n.selectOption,l=n.onFocus,h=n.onBlur,M=e.prefixCls,y=e.options,S=y[f]||{};return t.createElement(C.ZP,{prefixCls:"".concat(M,"-menu"),activeKey:S.key,onSelect:function(O){var F=O.key,T=y.find(function(W){var D=W.key;return D===F});v(T)},onFocus:l,onBlur:h},y.map(function(w,O){var F=w.key,T=w.disabled,W=w.className,D=w.style,Y=w.label;return t.createElement(C.sN,{key:F,disabled:T,className:W,style:D,onMouseEnter:function(){u(O)}},Y)}),!y.length&&t.createElement(C.sN,{disabled:!0},c))}var Me=be,de={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},G=function(n){var c=n.prefixCls,f=n.options,u=n.children,v=n.visible,l=n.transitionName,h=n.getPopupContainer,M=n.dropdownClassName,y=n.direction,S=n.placement,w="".concat(c,"-dropdown"),O=t.createElement(Me,{prefixCls:w,options:f}),F=(0,t.useMemo)(function(){var T;return y==="rtl"?T=S==="top"?"topLeft":"bottomLeft":T=S==="top"?"topRight":"bottomRight",T},[y,S]);return t.createElement(R.Z,{prefixCls:w,popupVisible:v,popup:O,popupPlacement:F,popupTransitionName:l,builtinPlacements:de,getPopupContainer:h,popupClassName:M},u)},E=G,H=function(){return null},V=H;function j(e){var n=e.selectionStart;return e.value.slice(0,n)}function U(e,n){return n.reduce(function(c,f){var u=e.lastIndexOf(f);return u>c.location?{location:u,prefix:f}:c},{location:-1,prefix:""})}function $(e){return(e||"").toLowerCase()}function X(e,n,c){var f=e[0];if(!f||f===c)return e;for(var u=e,v=n.length,l=0;l<v;l+=1)if($(u[l])!==$(n[l])){u=u.slice(l);break}else l===v-1&&(u=u.slice(v));return u}function J(e,n){var c=n.measureLocation,f=n.prefix,u=n.targetText,v=n.selectionStart,l=n.split,h=e.slice(0,c);h[h.length-l.length]===l&&(h=h.slice(0,h.length-l.length)),h&&(h="".concat(h).concat(l));var M=X(e.slice(v),u.slice(v-c-f.length),l);M.slice(0,l.length)===l&&(M=M.slice(l.length));var y="".concat(h).concat(f).concat(u).concat(l);return{text:"".concat(y).concat(M),selectionLocation:y.length}}function ae(e,n){e.setSelectionRange(n,n),e.blur(),e.focus()}function le(e,n){return!n||e.indexOf(n)===-1}function q(e,n){var c=n.value,f=c===void 0?"":c,u=e.toLowerCase();return f.toLowerCase().indexOf(u)!==-1}var I=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],N=["suffix","prefixCls","classes","value"],ie=(0,t.forwardRef)(function(e,n){var c=e.prefixCls,f=c===void 0?"rc-mentions":c,u=e.className,v=e.style,l=e.prefix,h=l===void 0?"@":l,M=e.split,y=M===void 0?" ":M,S=e.notFoundContent,w=S===void 0?"Not Found":S,O=e.value,F=e.defaultValue,T=e.children,W=e.options,D=e.open,Y=e.validateSearch,$e=Y===void 0?le:Y,Be=e.filterOption,Ee=Be===void 0?q:Be,Ie=e.onChange,Ne=e.onKeyDown,Te=e.onKeyUp,Ke=e.onPressEnter,Ae=e.onSearch,Pe=e.onSelect,He=e.onFocus,Re=e.onBlur,ct=e.transitionName,ft=e.placement,dt=e.direction,vt=e.getPopupContainer,ht=e.dropdownClassName,Ve=e.rows,pt=Ve===void 0?1:Ve,mt=(0,P.Z)(e,I),ve=(0,t.useMemo)(function(){return Array.isArray(h)?h:[h]},[h]),se=(0,t.useRef)(null),Ze=(0,t.useRef)(null),Oe=function(){var o,a;return(o=se.current)===null||o===void 0||(a=o.resizableTextArea)===null||a===void 0?void 0:a.textArea};t.useImperativeHandle(n,function(){var m,o;return{focus:function(){var p;return(p=se.current)===null||p===void 0?void 0:p.focus()},blur:function(){var p;return(p=se.current)===null||p===void 0?void 0:p.blur()},textarea:(m=se.current)===null||m===void 0||(o=m.resizableTextArea)===null||o===void 0?void 0:o.textArea}});var gt=(0,t.useState)(!1),je=(0,b.Z)(gt,2),he=je[0],Ue=je[1],xt=(0,t.useState)(""),Xe=(0,b.Z)(xt,2),Ye=Xe[0],ze=Xe[1],Ct=(0,t.useState)(""),Qe=(0,b.Z)(Ct,2),_e=Qe[0],wt=Qe[1],yt=(0,t.useState)(0),Ge=(0,b.Z)(yt,2),Je=Ge[0],qe=Ge[1],St=(0,t.useState)(0),et=(0,b.Z)(St,2),Fe=et[0],Le=et[1],bt=(0,t.useState)(!1),tt=(0,b.Z)(bt,2),Mt=tt[0],nt=tt[1],Et=(0,i.default)("",{defaultValue:F,value:O}),ot=(0,b.Z)(Et,2),te=ot[0],It=ot[1];(0,t.useEffect)(function(){he&&Ze.current&&(Ze.current.scrollTop=Oe().scrollTop)},[he]);var Nt=t.useMemo(function(){if(D)for(var m=0;m<ve.length;m+=1){var o=ve[m],a=te.lastIndexOf(o);if(a>=0)return[!0,"",o,a]}return[he,Ye,_e,Je]},[D,he,ve,te,Ye,_e,Je]),pe=(0,b.Z)(Nt,4),ne=pe[0],We=pe[1],me=pe[2],ke=pe[3],De=t.useCallback(function(m){var o;return W&&W.length>0?o=W.map(function(a){var p;return(0,k.Z)((0,k.Z)({},a),{},{key:(p=a==null?void 0:a.key)!==null&&p!==void 0?p:a.value})}):o=(0,r.Z)(T).map(function(a){var p=a.props,z=a.key;return(0,k.Z)((0,k.Z)({},p),{},{label:p.children,key:z||p.value})}),o.filter(function(a){return Ee===!1?!0:Ee(m,a)})},[T,W,Ee]),ge=t.useMemo(function(){return De(We)},[De,We]),Tt=s(),Pt=function(o,a,p){Ue(!0),ze(o),wt(a),qe(p),Le(0)},oe=function(o){Ue(!1),qe(0),ze(""),Tt(o)},rt=function(o){It(o),Ie==null||Ie(o)},Rt=function(o){var a=o.target.value;rt(a)},at=function(o){var a,p=o.value,z=p===void 0?"":p,Q=J(te,{measureLocation:ke,targetText:z,prefix:me,selectionStart:(a=Oe())===null||a===void 0?void 0:a.selectionStart,split:y}),re=Q.text,ue=Q.selectionLocation;rt(re),oe(function(){ae(Oe(),ue)}),Pe==null||Pe(o,me)},Zt=function(o){var a=o.which;if(Ne==null||Ne(o),!!ne){if(a===d.Z.UP||a===d.Z.DOWN){var p=ge.length,z=a===d.Z.UP?-1:1,Q=(Fe+z+p)%p;Le(Q),o.preventDefault()}else if(a===d.Z.ESC)oe();else if(a===d.Z.ENTER){if(o.preventDefault(),!ge.length){oe();return}var re=ge[Fe];at(re)}}},Ot=function(o){var a=o.key,p=o.which,z=o.target,Q=j(z),re=U(Q,ve),ue=re.location,xe=re.prefix;if(Te==null||Te(o),[d.Z.ESC,d.Z.UP,d.Z.DOWN,d.Z.ENTER].indexOf(p)===-1)if(ue!==-1){var ce=Q.slice(ue+xe.length),ut=$e(ce,y),kt=!!De(ce).length;ut?(a===xe||a==="Shift"||ne||ce!==We&&kt)&&Pt(ce,xe,ue):ne&&oe(),Ae&&ut&&Ae(ce,xe)}else ne&&oe()},Ft=function(o){!ne&&Ke&&Ke(o)},lt=(0,t.useRef)(),it=function(o){window.clearTimeout(lt.current),!Mt&&o&&He&&He(o),nt(!0)},st=function(o){lt.current=window.setTimeout(function(){nt(!1),oe(),Re==null||Re(o)},0)},Lt=function(){it()},Wt=function(){st()};return t.createElement("div",{className:fe()(f,u),style:v},t.createElement(Se.Z,(0,A.Z)({ref:se,value:te},mt,{rows:pt,onChange:Rt,onKeyDown:Zt,onKeyUp:Ot,onPressEnter:Ft,onFocus:it,onBlur:st})),ne&&t.createElement("div",{ref:Ze,className:"".concat(f,"-measure")},te.slice(0,ke),t.createElement(_.Provider,{value:{notFoundContent:w,activeIndex:Fe,setActiveIndex:Le,selectOption:at,onFocus:Lt,onBlur:Wt}},t.createElement(E,{prefixCls:f,transitionName:ct,placement:ft,direction:dt,options:ge,visible:!0,getPopupContainer:vt,dropdownClassName:ht},t.createElement("span",null,me))),te.slice(ke+me.length)))}),B=(0,t.forwardRef)(function(e,n){var c=e.suffix,f=e.prefixCls,u=e.classes,v=e.value,l=(0,P.Z)(e,N);return t.createElement(ye.Q,{inputElement:t.createElement(ie,(0,A.Z)({prefixCls:f,ref:n},l)),suffix:c,prefixCls:f,classes:u,value:v})});B.Option=V;var g=B,ee=g},517423:function(Ce,K,x){x.d(K,{Z:function(){return Se}});const A=r=>typeof r=="object"&&r!=null&&r.nodeType===1,k=(r,i)=>(!i||r!=="hidden")&&r!=="visible"&&r!=="clip",b=(r,i)=>{if(r.clientHeight<r.scrollHeight||r.clientWidth<r.scrollWidth){const d=getComputedStyle(r,null);return k(d.overflowY,i)||k(d.overflowX,i)||(L=>{const t=(s=>{if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch(R){return null}})(L);return!!t&&(t.clientHeight<L.scrollHeight||t.clientWidth<L.scrollWidth)})(r)}return!1},P=(r,i,d,L,t,s,R,C)=>s<r&&R>i||s>r&&R<i?0:s<=r&&C<=d||R>=i&&C>=d?s-r-L:R>i&&C<d||s<r&&C>d?R-i+t:0,we=r=>{const i=r.parentElement;return i==null?r.getRootNode().host||null:i},fe=(r,i)=>{var d,L,t,s;if(typeof document=="undefined")return[];const{scrollMode:R,block:C,inline:Z,boundary:_,skipOverflowHiddenElements:be}=i,Me=typeof _=="function"?_:B=>B!==_;if(!A(r))throw new TypeError("Invalid target");const de=document.scrollingElement||document.documentElement,G=[];let E=r;for(;A(E)&&Me(E);){if(E=we(E),E===de){G.push(E);break}E!=null&&E===document.body&&b(E)&&!b(document.documentElement)||E!=null&&b(E,be)&&G.push(E)}const H=(L=(d=window.visualViewport)==null?void 0:d.width)!=null?L:innerWidth,V=(s=(t=window.visualViewport)==null?void 0:t.height)!=null?s:innerHeight,{scrollX:j,scrollY:U}=window,{height:$,width:X,top:J,right:ae,bottom:le,left:q}=r.getBoundingClientRect();let I=C==="start"||C==="nearest"?J:C==="end"?le:J+$/2,N=Z==="center"?q+X/2:Z==="end"?ae:q;const ie=[];for(let B=0;B<G.length;B++){const g=G[B],{height:ee,width:e,top:n,right:c,bottom:f,left:u}=g.getBoundingClientRect();if(R==="if-needed"&&J>=0&&q>=0&&le<=V&&ae<=H&&J>=n&&le<=f&&q>=u&&ae<=c)return ie;const v=getComputedStyle(g),l=parseInt(v.borderLeftWidth,10),h=parseInt(v.borderTopWidth,10),M=parseInt(v.borderRightWidth,10),y=parseInt(v.borderBottomWidth,10);let S=0,w=0;const O="offsetWidth"in g?g.offsetWidth-g.clientWidth-l-M:0,F="offsetHeight"in g?g.offsetHeight-g.clientHeight-h-y:0,T="offsetWidth"in g?g.offsetWidth===0?0:e/g.offsetWidth:0,W="offsetHeight"in g?g.offsetHeight===0?0:ee/g.offsetHeight:0;if(de===g)S=C==="start"?I:C==="end"?I-V:C==="nearest"?P(U,U+V,V,h,y,U+I,U+I+$,$):I-V/2,w=Z==="start"?N:Z==="center"?N-H/2:Z==="end"?N-H:P(j,j+H,H,l,M,j+N,j+N+X,X),S=Math.max(0,S+U),w=Math.max(0,w+j);else{S=C==="start"?I-n-h:C==="end"?I-f+y+F:C==="nearest"?P(n,f,ee,h,y+F,I,I+$,$):I-(n+ee/2)+F/2,w=Z==="start"?N-u-l:Z==="center"?N-(u+e/2)+O/2:Z==="end"?N-c+M+O:P(u,c,e,l,M+O,N,N+X,X);const{scrollLeft:D,scrollTop:Y}=g;S=Math.max(0,Math.min(Y+S/W,g.scrollHeight-ee/W+F)),w=Math.max(0,Math.min(D+w/T,g.scrollWidth-e/T+O)),I+=Y-S,N+=D-w}ie.push({el:g,top:S,left:w})}return ie},ye=r=>r===!1?{block:"end",inline:"nearest"}:(i=>i===Object(i)&&Object.keys(i).length!==0)(r)?r:{block:"start",inline:"nearest"};function Se(r,i){if(!r.isConnected||!(t=>{let s=t;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(r))return;const d=(t=>{const s=window.getComputedStyle(t);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(r);if((t=>typeof t=="object"&&typeof t.behavior=="function")(i))return i.behavior(fe(r,i));const L=typeof i=="boolean"||i==null?void 0:i.behavior;for(const{el:t,top:s,left:R}of fe(r,ye(i))){const C=s-d.top+d.bottom,Z=R-d.left+d.right;t.scroll({top:C,left:Z,behavior:L})}}}}]);
