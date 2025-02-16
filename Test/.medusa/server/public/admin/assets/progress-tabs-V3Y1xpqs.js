import{r as a,j as p,bB as ee,bU as te,bT as O,bV as ne,bW as re,E as P,a$ as oe,cD as ae}from"./index-CXOwuGYo.js";var se=Object.defineProperty,N=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&_(e,n,t[n]);if(N)for(var n of N(t))j.call(t,n)&&_(e,n,t[n]);return e},ce=(e,t)=>{var n={};for(var r in e)I.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&N)for(var r of N(e))t.indexOf(r)<0&&j.call(e,r)&&(n[r]=e[r]);return n};const y=a.forwardRef((e,t)=>{var n=e,{color:r="currentColor"}=n,o=ce(n,["color"]);return a.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},o),a.createElement("g",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},a.createElement("path",{d:"M3.933 2.132a6.4 6.4 0 0 1 2.322-.956M1.17 6.283a6.4 6.4 0 0 1 .97-2.362M3.933 12.868c.691.46 1.477.791 2.322.956M1.17 8.717c.165.86.5 1.66.97 2.362M8.745 1.176c.845.165 1.63.496 2.322.956M12.86 3.921a6.4 6.4 0 0 1 .97 2.362M8.745 13.824a6.4 6.4 0 0 0 2.322-.956M12.86 11.079c.47-.703.805-1.502.97-2.362"})),a.createElement("defs",null,a.createElement("clipPath",{id:"a"},a.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});y.displayName="CircleDottedLine";function T(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function ue(e,t=[]){let n=[];function r(s,i){const c=a.createContext(i),l=n.length;n=[...n,i];const u=d=>{var M;const{scope:m,children:g,...v}=d,b=((M=m==null?void 0:m[e])==null?void 0:M[l])||c,C=a.useMemo(()=>v,Object.values(v));return p.jsx(b.Provider,{value:C,children:g})};u.displayName=s+"Provider";function f(d,m){var b;const g=((b=m==null?void 0:m[e])==null?void 0:b[l])||c,v=a.useContext(g);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(i=>a.createContext(i));return function(c){const l=(c==null?void 0:c[e])||s;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return o.scopeName=e,[r,le(o,...t)]}function le(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const i=r.reduce((c,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...c,...d}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function A(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function D(...e){return t=>{let n=!1;const r=e.map(o=>{const s=A(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():A(e[o],null)}}}}function de(...e){return a.useCallback(D(...e),e)}var w=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function fe(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var L=e=>{const{present:t,children:n}=e,r=me(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),s=de(r.ref,pe(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:s}):null};L.displayName="Presence";function me(e){const[t,n]=a.useState(),r=a.useRef({}),o=a.useRef(e),s=a.useRef("none"),i=e?"mounted":"unmounted",[c,l]=fe(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const u=h(r.current);s.current=c==="mounted"?u:"none"},[c]),w(()=>{const u=r.current,f=o.current;if(f!==e){const m=s.current,g=h(u);e?l("MOUNT"):g==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&m!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),w(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,d=g=>{const b=h(r.current).includes(g.animationName);if(g.target===t&&b&&(l("ANIMATION_END"),!o.current)){const C=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},m=g=>{g.target===t&&(s.current=h(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:a.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function h(e){return(e==null?void 0:e.animationName)||"none"}function pe(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var F=a.forwardRef((e,t)=>{const{children:n,...r}=e,o=a.Children.toArray(n),s=o.find(ve);if(s){const i=s.props.children,c=o.map(l=>l===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:l);return p.jsx(E,{...r,ref:t,children:a.isValidElement(i)?a.cloneElement(i,void 0,c):null})}return p.jsx(E,{...r,ref:t,children:n})});F.displayName="Slot";var E=a.forwardRef((e,t)=>{const{children:n,...r}=e;if(a.isValidElement(n)){const o=he(n);return a.cloneElement(n,{...be(r,n.props),ref:t?D(t,o):o})}return a.Children.count(n)>1?a.Children.only(null):null});E.displayName="SlotClone";var ge=({children:e})=>p.jsx(p.Fragment,{children:e});function ve(e){return a.isValidElement(e)&&e.type===ge}function be(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...c)=>{s(...c),o(...c)}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function he(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ne=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],x=Ne.reduce((e,t)=>{const n=a.forwardRef((r,o)=>{const{asChild:s,...i}=r,c=s?F:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(c,{...i,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function V(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Pe({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=xe({defaultProp:t,onChange:n}),s=e!==void 0,i=s?e:r,c=V(n),l=a.useCallback(u=>{if(s){const d=typeof u=="function"?u(e):u;d!==e&&c(d)}else o(u)},[s,e,o,c]);return[i,l]}function xe({defaultProp:e,onChange:t}){const n=a.useState(e),[r]=n,o=a.useRef(r),s=V(t);return a.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),n}var Ce=ee.useId||(()=>{}),Te=0;function ye(e){const[t,n]=a.useState(Ce());return w(()=>{n(r=>r??String(Te++))},[e]),e||(t?`radix-${t}`:"")}var S="Tabs",[we,Oe]=ue(S,[O]),U=O(),[Ee,R]=we(S),W=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:o,defaultValue:s,orientation:i="horizontal",dir:c,activationMode:l="automatic",...u}=e,f=te(c),[d,m]=Pe({prop:r,onChange:o,defaultProp:s});return p.jsx(Ee,{scope:n,baseId:ye(),value:d,onValueChange:m,orientation:i,dir:f,activationMode:l,children:p.jsx(x.div,{dir:f,"data-orientation":i,...u,ref:t})})});W.displayName=S;var $="TabsList",k=a.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...o}=e,s=R($,n),i=U(n);return p.jsx(ne,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:r,children:p.jsx(x.div,{role:"tablist","aria-orientation":s.orientation,...o,ref:t})})});k.displayName=$;var B="TabsTrigger",G=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:o=!1,...s}=e,i=R(B,n),c=U(n),l=q(i.baseId,r),u=Z(i.baseId,r),f=r===i.value;return p.jsx(re,{asChild:!0,...c,focusable:!o,active:f,children:p.jsx(x.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":u,"data-state":f?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:l,...s,ref:t,onMouseDown:T(e.onMouseDown,d=>{!o&&d.button===0&&d.ctrlKey===!1?i.onValueChange(r):d.preventDefault()}),onKeyDown:T(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&i.onValueChange(r)}),onFocus:T(e.onFocus,()=>{const d=i.activationMode!=="manual";!f&&!o&&d&&i.onValueChange(r)})})})});G.displayName=B;var z="TabsContent",K=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:o,children:s,...i}=e,c=R(z,n),l=q(c.baseId,r),u=Z(c.baseId,r),f=r===c.value,d=a.useRef(f);return a.useEffect(()=>{const m=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(m)},[]),p.jsx(L,{present:o||f,children:({present:m})=>p.jsx(x.div,{"data-state":f?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":l,hidden:!m,id:u,tabIndex:0,...i,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:m&&s})})});K.displayName=z;function q(e,t){return`${e}-trigger-${t}`}function Z(e,t){return`${e}-content-${t}`}var Se=W,Re=k,Me=G,_e=K;const J=e=>a.createElement(Se,{...e});J.displayName="ProgressTabs";const Q=({status:e,className:t,...n})=>{const r=a.useMemo(()=>{switch(e){case"not-started":return y;case"in-progress":return ae;case"completed":return oe;default:return y}},[e]);return a.createElement("span",{className:P("text-ui-fg-muted group-data-[state=active]/trigger:text-ui-fg-interactive",t),...n},a.createElement(r,null))};Q.displayName="ProgressTabs.ProgressIndicator";const X=a.forwardRef(({className:e,children:t,status:n="not-started",...r},o)=>a.createElement(Me,{ref:o,className:P("txt-compact-small-plus transition-fg text-ui-fg-muted bg-ui-bg-subtle border-r-ui-border-base inline-flex h-[52px] w-full max-w-[200px] flex-1 items-center gap-x-2 border-r px-4 text-left outline-none","group/trigger overflow-hidden text-ellipsis whitespace-nowrap","disabled:bg-ui-bg-disabled disabled:text-ui-fg-muted","hover:bg-ui-bg-subtle-hover","focus-visible:bg-ui-bg-base focus:z-[1]","data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base",e),...r},a.createElement(Q,{status:n}),t));X.displayName="ProgressTabs.Trigger";const Y=a.forwardRef(({className:e,...t},n)=>a.createElement(Re,{ref:n,className:P("flex items-center",e),...t}));Y.displayName="ProgressTabs.List";const H=a.forwardRef(({className:e,...t},n)=>a.createElement(_e,{ref:n,className:P("outline-none",e),...t}));H.displayName="ProgressTabs.Content";const Ie=Object.assign(J,{Trigger:X,List:Y,Content:H});export{Ie as P};
