import{a1 as h,a3 as x,aF as S,an as E,af as N,b as p,a6 as F,r as _,a8 as C,fd as I,t as L,j as e,H as w,T as j,w as a,x as m,B as g,L as v,m as A,au as y,a9 as T,fe as V,u as M}from"./index-B2cUNxal.js";import{l as B}from"./index.modern-CV9zqLs9.js";import{T as b}from"./Trans-CdzClQ9r.js";import{A as k}from"./alert-dotqOJWE.js";import"./x-mark-mini-DW0AR4qG.js";var P=({className:s,checked:t,containerTransition:l={duration:.8,delay:.5,ease:[0,.71,.2,1.01]},pathTransition:c={duration:.8,delay:.6,ease:[.1,.8,.2,1.01]}})=>e.jsxs("div",{className:A("size-14 bg-ui-button-neutral shadow-buttons-neutral relative flex items-center justify-center rounded-xl","after:button-neutral-gradient after:inset-0 after:content-['']",s),children:[t&&e.jsx(y.div,{className:"size-5 absolute -right-[5px] -top-1 flex items-center justify-center rounded-full border-[0.5px] border-[rgba(3,7,18,0.2)] bg-[#3B82F6] bg-gradient-to-b from-white/0 to-white/20 shadow-[0px_1px_2px_0px_rgba(3,7,18,0.12),0px_1px_2px_0px_rgba(255,255,255,0.10)_inset,0px_-1px_5px_0px_rgba(255,255,255,0.10)_inset,0px_0px_0px_0px_rgba(3,7,18,0.06)_inset]",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:l,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx(y.path,{d:"M5.8335 10.4167L9.16683 13.75L14.1668 6.25",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:c})})}),e.jsx("svg",{width:"36",height:"38",viewBox:"0 0 36 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M30.85 6.16832L22.2453 1.21782C19.4299 -0.405941 15.9801 -0.405941 13.1648 1.21782L4.52043 6.16832C1.74473 7.79208 0 10.802 0 14.0099V23.9505C0 27.198 1.74473 30.1683 4.52043 31.7921L13.1251 36.7822C15.9405 38.4059 19.3903 38.4059 22.2056 36.7822L30.8103 31.7921C33.6257 30.1683 35.3307 27.198 35.3307 23.9505V14.0099C35.41 10.802 33.6653 7.79208 30.85 6.16832ZM17.6852 27.8317C12.8079 27.8317 8.8426 23.8713 8.8426 19C8.8426 14.1287 12.8079 10.1683 17.6852 10.1683C22.5625 10.1683 26.5674 14.1287 26.5674 19C26.5674 23.8713 22.6022 27.8317 17.6852 27.8317Z",className:"fill-ui-button-inverted relative drop-shadow-sm"})})]}),z=h({email:x().email()}),H=h({password:x().min(1),repeat_password:x().min(1)}).superRefine(({password:s,repeat_password:t},l)=>{s!==t&&l.addIssue({code:S.custom,message:E.t("resetPassword.passwordMismatch"),path:["repeat_password"]})}),K=h({entity_id:x(),provider:x(),exp:N(),iat:N()}),Z=s=>K.safeParse(s).success,q=()=>{const{t:s}=p(),t=M();return e.jsx("div",{className:"bg-ui-bg-base flex min-h-dvh w-dvw items-center justify-center",children:e.jsxs("div",{className:"m-4 flex w-full max-w-[300px] flex-col items-center",children:[e.jsx(P,{className:"mb-4"}),e.jsxs("div",{className:"mb-6 flex flex-col items-center",children:[e.jsx(w,{children:s("resetPassword.invalidLinkTitle")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle text-center",children:s("resetPassword.invalidLinkHint")})]}),e.jsx("div",{className:"flex w-full flex-col gap-y-3",children:e.jsx(g,{onClick:()=>t("/reset-password",{replace:!0}),className:"w-full",type:"submit",children:s("resetPassword.goToResetPassword")})}),e.jsx("span",{className:"txt-small my-6",children:e.jsx(b,{i18nKey:"resetPassword.backToLogin",components:[e.jsx(v,{to:"/login",className:"text-ui-fg-interactive transition-fg hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover outline-none"},"login-link")]})})]})})},$=({token:s})=>{const{t}=p(),[l,c]=_.useState(!1),r=s?B(s):null,o=r&&Z(r),i=C({resolver:T(H),defaultValues:{password:"",repeat_password:""}}),{mutateAsync:u,isPending:f}=V(s),d=i.handleSubmit(async({password:n})=>{r&&await u({password:n},{onSuccess:()=>{i.setValue("password",""),i.setValue("repeat_password",""),c(!0)},onError:R=>{L.error(R.message)}})});return o?e.jsx("div",{className:"bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center",children:e.jsxs("div",{className:"m-4 flex w-full max-w-[280px] flex-col items-center",children:[e.jsx(P,{className:"mb-4"}),e.jsxs("div",{className:"mb-6 flex flex-col items-center",children:[e.jsx(w,{children:t("resetPassword.resetPassword")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle text-center",children:t("resetPassword.newPasswordHint")})]}),e.jsx("div",{className:"flex w-full flex-col gap-y-3",children:e.jsx(a,{...i,children:e.jsxs("form",{onSubmit:d,className:"flex w-full flex-col gap-y-6",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(m,{type:"email",disabled:!0,value:r==null?void 0:r.entity_id}),e.jsx(a.Field,{control:i.control,name:"password",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Control,{children:e.jsx(m,{autoComplete:"new-password",type:"password",...n,placeholder:t("resetPassword.newPassword")})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:i.control,name:"repeat_password",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Control,{children:e.jsx(m,{autoComplete:"off",type:"password",...n,placeholder:t("resetPassword.repeatNewPassword")})}),e.jsx(a.ErrorMessage,{})]})})]}),l&&e.jsx(k,{dismissible:!0,variant:"success",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-base mb-1",children:t("resetPassword.successfulResetTitle")}),e.jsx("span",{children:t("resetPassword.successfulReset")})]})}),!l&&e.jsx(g,{className:"w-full",type:"submit",isLoading:f,children:t("resetPassword.resetPassword")})]})})}),e.jsx("span",{className:"txt-small my-6",children:e.jsx(b,{i18nKey:"resetPassword.backToLogin",components:[e.jsx(v,{to:"/login",className:"text-ui-fg-base transition-fg hover:text-ui-fg-base-hover focus-visible:text-ui-fg-base-hover outline-none"},"login-link")]})})]})}):e.jsx(q,{})},O=()=>{const{t:s}=p(),[t]=F(),[l,c]=_.useState(!1),r=t.get("token"),o=C({resolver:T(z),defaultValues:{email:""}}),{mutateAsync:i,isPending:u}=I(),f=o.handleSubmit(async({email:d})=>{await i({email:d},{onSuccess:()=>{o.setValue("email",""),c(!0)},onError:n=>{L.error(n.message)}})});return r?e.jsx($,{token:r}):e.jsx("div",{className:"bg-ui-bg-base flex min-h-dvh w-dvw items-center justify-center",children:e.jsxs("div",{className:"m-4 flex w-full max-w-[300px] flex-col items-center",children:[e.jsx(P,{className:"mb-4"}),e.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[e.jsx(w,{children:s("resetPassword.resetPassword")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle text-center",children:s("resetPassword.hint")})]}),e.jsx("div",{className:"flex w-full flex-col gap-y-3",children:e.jsx(a,{...o,children:e.jsxs("form",{onSubmit:f,className:"flex w-full flex-col gap-y-6",children:[e.jsx("div",{className:"mt-4 flex flex-col gap-y-3",children:e.jsx(a.Field,{control:o.control,name:"email",render:({field:d})=>e.jsxs(a.Item,{children:[e.jsx(a.Control,{children:e.jsx(m,{autoComplete:"email",...d,placeholder:s("fields.email")})}),e.jsx(a.ErrorMessage,{})]})})}),l&&e.jsx(k,{dismissible:!0,variant:"success",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-base mb-1",children:s("resetPassword.successfulRequestTitle")}),e.jsx("span",{children:s("resetPassword.successfulRequest")})]})}),e.jsx(g,{className:"w-full",type:"submit",isLoading:u,children:s("resetPassword.sendResetInstructions")})]})})}),e.jsx("span",{className:"txt-small my-6",children:e.jsx(b,{i18nKey:"resetPassword.backToLogin",components:[e.jsx(v,{to:"/login",className:"text-ui-fg-base transition-fg hover:text-ui-fg-base-hover focus-visible:text-ui-fg-base-hover outline-none"},"login-link")]})})]})})};export{O as Component};
