import{r as C,aM as be}from"./index-CXOwuGYo.js";var u=function(){return u=Object.assign||function(r){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(r[n]=a[n])}return r},u.apply(this,arguments)};function Be(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a}function V(e,r,a){if(a||arguments.length===2)for(var t=0,i=r.length,n;t<i;t++)(n||!(t in r))&&(n||(n=Array.prototype.slice.call(r,0,t)),n[t]=r[t]);return e.concat(n||Array.prototype.slice.call(r))}var O=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Le={k:1e3,m:1e6,b:1e9},Ue=function(e,r){r===void 0&&(r=".");var a=new RegExp("(\\d+(".concat(O(r),"\\d*)?)([kmb])$"),"i"),t=e.match(a);if(t){var i=t[1],n=t[3],o=Le[n.toLowerCase()];return Number(i.replace(r,"."))*o}},Ge=function(e,r){r===void 0&&(r=",");var a=new RegExp(O(r),"g");return e.replace(a,"")},Me=function(e,r){var a=O(r.join("")),t=new RegExp("[^\\d".concat(a,"]"),"gi");return e.replace(t,"")},le=function(e){var r=e.value,a=e.groupSeparator,t=a===void 0?",":a,i=e.decimalSeparator,n=i===void 0?".":i,o=e.allowDecimals,c=o===void 0?!0:o,l=e.decimalsLimit,N=l===void 0?2:l,E=e.allowNegativeValue,d=E===void 0?!0:E,v=e.disableAbbreviations,P=v===void 0?!1:v,p=e.prefix,f=p===void 0?"":p,m=e.transformRawValue,A=m===void 0?function($){return $}:m,w=A(r);if(w==="-")return w;var D=P?[]:["k","m","b"],I=new RegExp("((^|\\D)-\\d)|(-".concat(O(f),")")),ae=I.test(w),j=RegExp("(\\d+)-?".concat(O(f))).exec(r)||[],F=j[0],z=j[1],J=f?F?w.replace(F,"").concat(z):w.replace(f,""):w,Q=Ge(J,t),K=Me(Q,V([t,n],D,!0)),B=K;if(!P){if(D.some(function($){return $===K.toLowerCase().replace(n,"")}))return"";var X=Ue(K,n);X&&(B=String(X))}var L=ae&&d?"-":"";if(n&&B.includes(n)){var U=K.split(n),Y=U[0],G=U[1],M=N&&G?G.slice(0,N):G,Z=c?"".concat(n).concat(M):"";return"".concat(L).concat(Y).concat(Z)}return"".concat(L).concat(B)},$e=function(e,r,a){if(a!==void 0&&e.length>1){if(a===0)return e.replace(r,"");if(e.includes(r)){var t=e.split(r),i=t[0],n=t[1];if(n.length===a)return e;if(n.length>a)return"".concat(i).concat(r).concat(n.slice(0,a))}var o=e.length>a?new RegExp("(\\d+)(\\d{".concat(a,"})")):new RegExp("(\\d)(\\d+)"),c=e.match(o);if(c){var i=c[1],n=c[2];return"".concat(i).concat(r).concat(n)}}return e},he=function(e,r){var a=r.groupSeparator,t=a===void 0?",":a,i=r.decimalSeparator,n=i===void 0?".":i,o=new RegExp("\\d([^".concat(O(t)).concat(O(n),"0-9]+)")),c=e.match(o);return c?c[1]:void 0},q=function(e){var r=e.value,a=e.decimalSeparator,t=e.intlConfig,i=e.decimalScale,n=e.prefix,o=n===void 0?"":n,c=e.suffix,l=c===void 0?"":c;if(r===""||r===void 0)return"";if(r==="-")return"-";var N=new RegExp("^\\d?-".concat(o?"".concat(O(o),"?"):"","\\d")).test(r),E=a!=="."?Te(r,a,N):r;a&&a!=="-"&&E.startsWith(a)&&(E="0"+E);var d={minimumFractionDigits:i||0,maximumFractionDigits:20},v=t?new Intl.NumberFormat(t.locale,t.currency?u(u({},d),{style:"currency",currency:t.currency}):d):new Intl.NumberFormat(void 0,d),P=v.formatToParts(Number(E)),p=We(P,e),f=he(p,u({},e)),m=r.slice(-1)===a?a:"",A=E.match(RegExp("\\d+\\.(\\d+)"))||[],w=A[1];return i===void 0&&w&&a&&(p.includes(a)?p=p.replace(RegExp("(\\d+)(".concat(O(a),")(\\d+)"),"g"),"$1$2".concat(w)):f&&!l?p=p.replace(f,"".concat(a).concat(w).concat(f)):p="".concat(p).concat(a).concat(w)),l&&m?"".concat(p).concat(m).concat(l):f&&m?p.replace(f,"".concat(m).concat(f)):f&&l?p.replace(f,"".concat(m).concat(l)):[p,m,l].join("")},Te=function(e,r,a){var t=e;return r&&r!=="."&&(t=t.replace(RegExp(O(r),"g"),"."),a&&r==="-"&&(t="-".concat(t.slice(1)))),t},We=function(e,r){var a=r.prefix,t=r.groupSeparator,i=r.decimalSeparator,n=r.decimalScale,o=r.disableGroupSeparators,c=o===void 0?!1:o;return e.reduce(function(l,N,E){var d=N.type,v=N.value;return E===0&&a?d==="minusSign"?[v,a]:d==="currency"?V(V([],l,!0),[a],!1):[a,v]:d==="currency"?a?l:V(V([],l,!0),[v],!1):d==="group"?c?l:V(V([],l,!0),[t!==void 0?t:v],!1):d==="decimal"?n!==void 0&&n===0?l:V(V([],l,!0),[i!==void 0?i:v],!1):d==="fraction"?V(V([],l,!0),[n!==void 0?v.slice(0,n):v],!1):V(V([],l,!0),[v],!1)},[""]).join("")},He={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},qe=function(e){var r=e||{},a=r.locale,t=r.currency,i=a?new Intl.NumberFormat(a,t?{currency:t,style:"currency"}:void 0):new Intl.NumberFormat;return i.formatToParts(1000.1).reduce(function(n,o,c){return o.type==="currency"?c===0?u(u({},n),{currencySymbol:o.value,prefix:o.value}):u(u({},n),{currencySymbol:o.value,suffix:o.value}):o.type==="group"?u(u({},n),{groupSeparator:o.value}):o.type==="decimal"?u(u({},n),{decimalSeparator:o.value}):n},He)},ye=function(e){return RegExp(/\d/,"gi").test(e)},ze=function(e,r,a){if(r===void 0&&(r="."),a===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var t=e.split(r),i=t[0],n=t[1];if(a===0)return i;var o=n||"";if(o.length<a)for(;o.length<a;)o+="0";else o=o.slice(0,a);return"".concat(i).concat(r).concat(o)},Je=function(e){var r=e.selectionStart,a=e.value,t=e.lastKeyStroke,i=e.stateValue,n=e.groupSeparator,o=r,c=a;if(i&&o){var l=a.split("");return t==="Backspace"&&i[o]===n&&(l.splice(o-1,1),o-=1),t==="Delete"&&i[o]===n&&(l.splice(o,1),o+=1),c=l.join(""),{modifiedValue:c,cursorPosition:o}}return{modifiedValue:c,cursorPosition:r}},Qe=C.forwardRef(function(e,r){var a=e.allowDecimals,t=a===void 0?!0:a,i=e.allowNegativeValue,n=i===void 0?!0:i,o=e.id,c=e.name,l=e.className,N=e.customInput,E=e.decimalsLimit,d=e.defaultValue,v=e.disabled,P=v===void 0?!1:v,p=e.maxLength,f=e.value,m=e.onValueChange,A=e.fixedDecimalLength,w=e.placeholder,D=e.decimalScale,I=e.prefix,ae=e.suffix,j=e.intlConfig,F=e.step,z=e.min,J=e.max,Q=e.disableGroupSeparators,K=Q===void 0?!1:Q,B=e.disableAbbreviations,X=B===void 0?!1:B,L=e.decimalSeparator,U=e.groupSeparator,Y=e.onChange,G=e.onFocus,M=e.onBlur,Z=e.onKeyDown,$=e.onKeyUp,we=e.transformRawValue,ce=e.formatValueOnBlur,xe=ce===void 0?!0:ce,Ve=Be(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue","formatValueOnBlur"]);if(L&&ye(L))throw new Error("decimalSeparator cannot be a number");if(U&&ye(U))throw new Error("groupSeparator cannot be a number");var _=C.useMemo(function(){return qe(j)},[j]),g=L||_.decimalSeparator||"",T=U||_.groupSeparator||"";if(g&&T&&g===T&&K===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var W={decimalSeparator:g,groupSeparator:T,disableGroupSeparators:K,intlConfig:j,prefix:I||_.prefix,suffix:ae},te={decimalSeparator:g,groupSeparator:T,allowDecimals:t,decimalsLimit:E||A||2,allowNegativeValue:n,disableAbbreviations:X,prefix:I||_.prefix,transformRawValue:we},fe=C.useState(function(){return d!=null?q(u(u({},W),{decimalScale:D,value:String(d)})):f!=null?q(u(u({},W),{decimalScale:D,value:String(f)})):""}),b=fe[0],H=fe[1],se=C.useState(!1),ne=se[0],Ee=se[1],pe=C.useState(0),oe=pe[0],ie=pe[1],de=C.useState(0),ve=de[0],Re=de[1],me=C.useState(null),Ce=me[0],Ne=me[1],k=C.useRef(null);C.useImperativeHandle(r,function(){return k.current});var ge=function(s,y){Ee(!0);var S=Je({selectionStart:y,value:s,lastKeyStroke:Ce,stateValue:b,groupSeparator:T}),h=S.modifiedValue,x=S.cursorPosition,R=le(u({value:h},te));if(!(p&&R.replace(/-/g,"").length>p)){if(R===""||R==="-"||R===g){m&&m(void 0,c,{float:null,formatted:"",value:""}),H(R),ie(1);return}var ee=g?R.replace(g,"."):R,Ie=parseFloat(ee),ue=q(u({value:R},W));if(x!=null){var re=x+(ue.length-s.length);re=re<=0?I?I.length:0:re,ie(re),Re(ve+1)}if(H(ue),m){var je={float:Ie,formatted:ue,value:R};m(R,c,je)}}},Oe=function(s){var y=s.target,S=y.value,h=y.selectionStart;ge(S,h),Y&&Y(s)},De=function(s){return G&&G(s),b?b.length:0},Fe=function(s){var y=s.target.value,S=le(u({value:y},te));if(S==="-"||S===g||!S){H(""),M&&M(s);return}var h=$e(S,g,A),x=ze(h,g,D!==void 0?D:A),R=parseFloat(x.replace(g,".")),ee=q(u(u({},W),{value:x}));m&&xe&&m(x,c,{float:R,formatted:ee,value:x}),H(ee),M&&M(s)},ke=function(s){var y=s.key;if(Ne(y),F&&(y==="ArrowUp"||y==="ArrowDown")){s.preventDefault(),ie(b.length);var S=parseFloat(f!=null?String(f).replace(g,"."):le(u({value:b},te)))||0,h=y==="ArrowUp"?S+F:S-F;if(z!==void 0&&h<Number(z)||J!==void 0&&h>Number(J))return;var x=String(F).includes(".")?Number(String(F).split(".")[1].length):void 0;ge(String(x?h.toFixed(x):h).replace(".",g))}Z&&Z(s)},Ae=function(s){var y=s.key,S=s.currentTarget.selectionStart;if(y!=="ArrowUp"&&y!=="ArrowDown"&&b!=="-"){var h=he(b,{groupSeparator:T,decimalSeparator:g});if(h&&S&&S>b.length-h.length&&k.current){var x=b.length-h.length;k.current.setSelectionRange(x,x)}}$&&$(s)};C.useEffect(function(){f==null&&d==null&&H("")},[d,f]),C.useEffect(function(){ne&&b!=="-"&&k.current&&document.activeElement===k.current&&k.current.setSelectionRange(oe,oe)},[b,oe,k,ne,ve]);var Ke=function(){return f!=null&&b!=="-"&&(!g||b!==g)?q(u(u({},W),{decimalScale:ne?void 0:D,value:String(f)})):b},Se=u({type:"text",inputMode:"decimal",id:o,name:c,className:l,onChange:Oe,onBlur:Fe,onFocus:De,onKeyDown:ke,onKeyUp:Ae,placeholder:w,disabled:P,value:Ke(),ref:k},Ve);if(N){var Pe=N;return be.createElement(Pe,u({},Se))}return be.createElement("input",u({},Se))});Qe.displayName="CurrencyInput";export{Qe as C,q as f};
