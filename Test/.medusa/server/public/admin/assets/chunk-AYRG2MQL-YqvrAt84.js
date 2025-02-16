import{r as t,cz as S,cy as re,cs as se,E as v,y as oe,X as ne,bs as de,cw as ce,cx as le,ct as ie,cB as ue,cv as pe,br as l,u as F,j as d,b as me,cC as ve,v as fe}from"./index-CXOwuGYo.js";import{P as g}from"./prompt-f7mTD0rZ.js";const N=e=>t.createElement(se,{...e});N.displayName="FocusModal";const b=t.forwardRef((e,a)=>t.createElement(ie,{ref:a,...e}));b.displayName="FocusModal.Trigger";const C=S;C.displayName="FocusModal.Close";const D=e=>t.createElement(ue,{...e});D.displayName="FocusModal.Portal";const j=t.forwardRef(({className:e,...a},s)=>t.createElement(pe,{ref:s,className:v("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a}));j.displayName="FocusModal.Overlay";const w=t.forwardRef(({className:e,overlayProps:a,portalProps:s,...r},o)=>t.createElement(D,{...s},t.createElement(j,{...a}),t.createElement(ce,{ref:o,className:v("bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",e),...r})));w.displayName="FocusModal.Content";const E=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:v("border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",a),...s},t.createElement("div",{className:"flex items-center gap-x-2"},t.createElement(S,{asChild:!0},t.createElement(oe,{size:"small",type:"button",variant:"transparent"},t.createElement(ne,null))),t.createElement(de,null,"esc")),e));E.displayName="FocusModal.Header";const T=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:v("border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",a),...s},e));T.displayName="FocusModal.Footer";const O=t.forwardRef(({className:e,...a},s)=>t.createElement(le,{ref:s,...a}));O.displayName="FocusModal.Title";const R=re;R.displayName="FocusModal.Description";const k=t.forwardRef(({className:e,...a},s)=>t.createElement("div",{ref:s,className:v("flex-1",e),...a}));k.displayName="FocusModal.Body";const i=Object.assign(N,{Trigger:b,Title:O,Description:R,Content:w,Header:E,Body:k,Close:C,Footer:T});var B=({form:e,blockSearchParams:a=!1,children:s,onClose:r})=>{const{t:o}=me(),{formState:{isDirty:u}}=e,n=ve(({currentLocation:p,nextLocation:f})=>{const{isSubmitSuccessful:y}=f.state||{};if(y)return r==null||r(!0),!1;const M=p.pathname!==f.pathname,ae=p.search!==f.search;if(a){const h=u&&(M||ae);return h||r==null||r(y),h}const x=u&&M;return x||r==null||r(y),x}),m=()=>{var p;(p=n==null?void 0:n.reset)==null||p.call(n)},c=()=>{var p;(p=n==null?void 0:n.proceed)==null||p.call(n),r==null||r(!1)};return d.jsxs(fe,{...e,children:[s,d.jsx(g,{open:n.state==="blocked",variant:"confirmation",children:d.jsxs(g.Content,{children:[d.jsxs(g.Header,{children:[d.jsx(g.Title,{children:o("general.unsavedChangesTitle")}),d.jsx(g.Description,{children:o("general.unsavedChangesDescription")})]}),d.jsxs(g.Footer,{children:[d.jsx(g.Cancel,{onClick:m,type:"button",children:o("actions.cancel")}),d.jsx(g.Action,{onClick:c,type:"button",children:o("actions.continue")})]})]})})]})},H=t.createContext(null),P=({prev:e,children:a})=>{const s=F(),[r,o]=t.useState(!0),u=t.useCallback(m=>{s(m||e,{replace:!0,state:{isSubmitSuccessful:!0}})},[s,e]),n=t.useMemo(()=>({handleSuccess:u,setCloseOnEscape:o,__internal:{closeOnEscape:r}}),[u,o,r]);return d.jsx(H.Provider,{value:n,children:a})},I=t.createContext(null),$=({children:e,onOpenChange:a})=>{const[s,r]=t.useState({}),o=c=>s[c]||!1,u=(c,p)=>{r(f=>({...f,[c]:p})),a(p)},n=c=>{r(p=>({...p,[c]:!1}))},m=c=>{r(p=>{const f={...p};return delete f[c],f})};return d.jsx(I.Provider,{value:{getIsOpen:o,setIsOpen:u,register:n,unregister:m},children:e})},_=()=>{const e=t.useContext(I);if(!e)throw new Error("useStackedModal must be used within a StackedModalProvider");return e},ge=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[u,n]=t.useState(!1);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=c=>{if(!c){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(c)};return d.jsx(l,{open:r,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(l.Content,{"aria-describedby":void 0,className:v({"!bg-ui-bg-disabled !inset-y-5 !right-5":u}),children:a})})})})},ye=l.Header,Fe=l.Title,Me=l.Description,xe=l.Body,he=l.Footer,Se=l.Close,Ne=B,$e=Object.assign(ge,{Header:ye,Title:Fe,Body:xe,Description:Me,Footer:he,Close:Se,Form:Ne}),be=()=>{const e=t.useContext(H);if(!e)throw new Error("useRouteModal must be used within a RouteModalProvider");return e},Ce=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[u,n]=t.useState(!1);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=c=>{if(!c){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(c)};return d.jsx(i,{open:r,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(De,{stackedModalOpen:u,children:a})})})})},De=({stackedModalOpen:e,children:a})=>{const{__internal:s}=be(),r=!s.closeOnEscape;return d.jsx(i.Content,{onEscapeKeyDown:r?o=>{o.preventDefault()}:void 0,className:v({"!bg-ui-bg-disabled !inset-x-5 !inset-y-3":e}),children:a})},je=i.Header,we=i.Title,Ee=i.Description,Te=i.Footer,Oe=i.Body,Re=i.Close,ke=B,_e=Object.assign(Ce,{Header:je,Title:we,Body:Oe,Description:Ee,Footer:Te,Close:Re,Form:ke}),Be=({id:e,children:a})=>{const{register:s,unregister:r,getIsOpen:o,setIsOpen:u}=_();return t.useEffect(()=>(s(e),()=>r(e)),[]),d.jsx(l,{open:o(e),onOpenChange:n=>u(e,n),children:a})},z=l.Close;z.displayName="StackedDrawer.Close";var K=l.Header;K.displayName="StackedDrawer.Header";var X=l.Body;X.displayName="StackedDrawer.Body";var A=l.Trigger;A.displayName="StackedDrawer.Trigger";var q=l.Footer;q.displayName="StackedDrawer.Footer";var G=l.Title;G.displayName="StackedDrawer.Title";var J=l.Description;J.displayName="StackedDrawer.Description";var Q=t.forwardRef(({className:e,...a},s)=>d.jsx(l.Content,{ref:s,className:v(e),overlayProps:{className:"bg-transparent"},...a}));Q.displayName="StackedDrawer.Content";var ze=Object.assign(Be,{Close:z,Header:K,Body:X,Content:Q,Trigger:A,Footer:q,Description:J,Title:G}),He=({id:e,onOpenChangeCallback:a,children:s})=>{const{register:r,unregister:o,getIsOpen:u,setIsOpen:n}=_();t.useEffect(()=>(r(e),()=>o(e)),[]);const m=c=>{n(e,c),a==null||a(c)};return d.jsx(i,{open:u(e),onOpenChange:m,children:s})},U=i.Close;U.displayName="StackedFocusModal.Close";var V=i.Header;V.displayName="StackedFocusModal.Header";var W=i.Body;W.displayName="StackedFocusModal.Body";var Y=i.Trigger;Y.displayName="StackedFocusModal.Trigger";var Z=i.Footer;Z.displayName="StackedFocusModal.Footer";var L=i.Title;L.displayName="StackedFocusModal.Title";var ee=i.Description;ee.displayName="StackedFocusModal.Description";var te=t.forwardRef(({className:e,...a},s)=>d.jsx(i.Content,{ref:s,className:v("!top-6",e),overlayProps:{className:"bg-transparent"},...a}));te.displayName="StackedFocusModal.Content";var Ke=Object.assign(He,{Close:U,Header:V,Body:W,Content:te,Trigger:Y,Footer:Z,Description:ee,Title:L});export{_e as R,Ke as S,_ as a,$e as b,ze as c,be as u};
