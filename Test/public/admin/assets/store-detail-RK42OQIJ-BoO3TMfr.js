import{u as te,a as ie,b as ae}from"./chunk-NEZX6265-Wyn5mLhP.js";import{r as x,d as ne,g as oe,a as ce,j as e,dn as le,e4 as de,e5 as ue,q as Q,b as S,e1 as me,h as pe,b0 as ge,H as Y,T as l,A as E,Y as y,L as P,l as xe,e6 as K,W as he,k as fe,t as f}from"./index-CXOwuGYo.js";import{S as _e}from"./chunk-ADOCJB6L-R89hZut8.js";import{u as ve,_ as je}from"./chunk-RAKBTSZ7-Ca3F3okx.js";import"./lodash-C_kVtGbQ.js";import"./chunk-JKKJMCX3-Bu3iNRFH.js";import{S as ye}from"./chunk-2RQLKDBF-vhTFQ7rn.js";import{P as Ce}from"./pencil-square-S6N4pk9B.js";import{u as $}from"./use-prompt-B_j165zA.js";import{X as Se}from"./x-circle-DI3yxKcw.js";import{T as be}from"./trash-CYDxF8Gp.js";import{C as G}from"./container-DB8VMxu-.js";import{C as v}from"./command-bar-DRtCGwvd.js";import{c as we}from"./index-CXSP-pSV.js";import{C as B}from"./checkbox-B2cxnKzZ.js";import"./chunk-MSDRGCRR-CkodD_V6.js";import"./chunk-P3UUX2T6-DhHphGjM.js";import"./chunk-C76H5USB-DiXk35rX.js";import"./chunk-YEDAFXMB-CK9N38yQ.js";import"./chunk-AOFGTNG6-B2wHsqt5.js";import"./table-CM6uyZRp.js";import"./chunk-WX2SMNCD-24idVSPR.js";import"./plus-mini-kqhqcrwq.js";import"./chunk-BKWQ2FHJ-rsi0pu39.js";import"./format-BF4bqZ9w.js";import"./_isIndex-CD5X6UW0.js";import"./x-mark-mini-COfrev7H.js";import"./index-cF6cl0r7.js";import"./index-seHRa87r.js";import"./date-picker-D5mo_NtI.js";import"./popover-BFn5jE4U.js";import"./triangle-left-mini-5inixpx6.js";import"./Trans-MivfKE2Z.js";import"./check-pD2HlQS4.js";import"./prompt-f7mTD0rZ.js";var Pe=Object.defineProperty,C=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,H=(s,r,t)=>r in s?Pe(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t,ke=(s,r)=>{for(var t in r||(r={}))J.call(r,t)&&H(s,t,r[t]);if(C)for(var t of C(r))U.call(r,t)&&H(s,t,r[t]);return s},Te=(s,r)=>{var t={};for(var i in s)J.call(s,i)&&r.indexOf(i)<0&&(t[i]=s[i]);if(s!=null&&C)for(var i of C(s))r.indexOf(i)<0&&U.call(s,i)&&(t[i]=s[i]);return t};const V=x.forwardRef((s,r)=>{var t=s,{color:i="currentColor"}=t,o=Te(t,["color"]);return x.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:r},o),x.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"}),x.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m4.611 7.722 2 2.223 3.778-4.89"}))});V.displayName="CheckCircle";var Ee=()=>({queryKey:ue.details(),queryFn:async()=>de()}),xs=async()=>{const s=Ee();return Q.getQueryData(s.queryKey)??await Q.fetchQuery(s)},k=10,ze=({store:s})=>{var I,O,R,D,L,A,q,M;const[r,t]=x.useState({}),{searchParams:i,raw:o}=te({pageSize:k}),{currencies:c,count:a,isPending:m,isError:h,error:_}=ie({code:(I=s.supported_currencies)==null?void 0:I.map(n=>n.currency_code),...i},{placeholderData:fe,enabled:!!((O=s.supported_currencies)!=null&&O.length)}),{price_preferences:g,isPending:j,isError:p,error:u}=xe({attribute:"currency_code",value:(R=s.supported_currencies)==null?void 0:R.map(n=>n.currency_code)},{enabled:!!((D=s.supported_currencies)!=null&&D.length)}),z=Ie(),N=x.useMemo(()=>new Map(g==null?void 0:g.map(n=>[n.value,n])),[g]),X=c==null?void 0:c.map(n=>{var b;return{...n,is_tax_inclusive:(b=N.get(n.code))==null?void 0:b.is_tax_inclusive}}),{table:F}=ve({data:X??[],columns:z,count:a,getRowId:n=>n.code,rowSelection:{state:r,updater:t},enablePagination:!0,enableRowSelection:!0,pageSize:k,meta:{storeId:s.id,supportedCurrencies:s.supported_currencies,defaultCurrencyCode:(A=(L=s.supported_currencies)==null?void 0:L.find(n=>n.is_default))==null?void 0:A.currency_code,preferencesMap:N}}),{mutateAsync:Z}=K(s.id),{t:d}=S(),ee=$(),se=async()=>{var W;const n=Object.keys(r);await ee({title:d("general.areYouSure"),description:d("store.removeCurrencyWarning",{count:n.length}),confirmText:d("actions.remove"),cancelText:d("actions.cancel")})&&await Z({supported_currencies:((W=s.supported_currencies)==null?void 0:W.filter(w=>!n.includes(w.currency_code)))??[]},{onSuccess:()=>{t({}),f.success(d("store.toast.currenciesRemoved"))},onError:w=>{f.error(w.message)}})};if(h)throw _;if(p)throw u;const re=m||j;return e.jsxs(G,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(Y,{level:"h2",children:d("store.currencies")}),e.jsx(E,{groups:[{actions:[{icon:e.jsx(he,{}),label:d("actions.add"),to:"currencies"}]}]})]}),e.jsx(je,{orderBy:[{key:"name",label:d("fields.name")},{key:"code",label:d("fields.code")}],search:!0,pagination:!0,table:F,pageSize:k,columns:z,count:(q=s.supported_currencies)!=null&&q.length?a:0,isLoading:(M=s.supported_currencies)!=null&&M.length?re:!1,queryObject:o}),e.jsx(v,{open:!!Object.keys(r).length,children:e.jsxs(v.Bar,{children:[e.jsx(v.Value,{children:d("general.countSelected",{count:Object.keys(r).length})}),e.jsx(v.Seperator,{}),e.jsx(v.Command,{action:se,shortcut:"r",label:d("actions.remove")})]})})]})},Ne=({storeId:s,currency:r,supportedCurrencies:t,defaultCurrencyCode:i,preferencesMap:o})=>{var g,j;const{mutateAsync:c}=K(s),{t:a}=S(),m=$(),h=async()=>{await m({title:a("general.areYouSure"),description:a("store.removeCurrencyWarning",{count:1}),verificationInstruction:a("general.typeToConfirm"),verificationText:r.name,confirmText:a("actions.remove"),cancelText:a("actions.cancel")})&&await c({supported_currencies:t.filter(u=>u.currency_code!==r.code)},{onSuccess:()=>{f.success(a("store.toast.currenciesRemoved"))},onError:u=>{f.error(u.message)}})},_=async()=>{await c({supported_currencies:t.map(p=>{const u=o.get(p.currency_code);return{...p,is_tax_inclusive:p.currency_code===r.code?!(u!=null&&u.is_tax_inclusive):void 0}})},{onSuccess:()=>{f.success(a("store.toast.updatedTaxInclusivitySuccessfully"))},onError:p=>{f.error(p.message)}})};return e.jsx(E,{groups:[{actions:[{icon:(g=o.get(r.code))!=null&&g.is_tax_inclusive?e.jsx(Se,{}):e.jsx(V,{}),label:(j=o.get(r.code))!=null&&j.is_tax_inclusive?a("store.disableTaxInclusivePricing"):a("store.enableTaxInclusivePricing"),onClick:_}]},{actions:[{icon:e.jsx(be,{}),label:a("actions.remove"),onClick:h,disabled:r.code===i}]}]})},T=we(),Ie=()=>{const s=ae(),{t:r}=S();return x.useMemo(()=>[T.display({id:"select",header:({table:t})=>e.jsx(B,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:i=>t.toggleAllPageRowsSelected(!!i)}),cell:({row:t})=>e.jsx(B,{checked:t.getIsSelected(),onCheckedChange:i=>t.toggleSelected(!!i),onClick:i=>{i.stopPropagation()}})}),...s,T.accessor("is_tax_inclusive",{header:r("fields.taxInclusivePricing"),cell:({getValue:t})=>{const i=t();return e.jsx(_e,{color:i?"green":"grey",children:r(i?"fields.true":"fields.false")})}}),T.display({id:"actions",cell:({row:t,table:i})=>{const{supportedCurrencies:o,storeId:c,defaultCurrencyCode:a,preferencesMap:m}=i.options.meta;return e.jsx(Ne,{storeId:c,currency:t.original,supportedCurrencies:o,defaultCurrencyCode:a,preferencesMap:m})}})],[s,r])},Oe=({store:s})=>{var a,m,h;const{t:r}=S(),{region:t}=me(s.default_region_id,void 0,{enabled:!!s.default_region_id}),i=(a=s.supported_currencies)==null?void 0:a.find(_=>_.is_default),{sales_channel:o}=pe(s.default_sales_channel_id,{enabled:!!s.default_sales_channel_id}),{stock_location:c}=ge(s.default_location_id,{fields:"id,name"},{enabled:!!s.default_location_id});return e.jsxs(G,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(Y,{children:r("store.domain")}),e.jsx(l,{className:"text-ui-fg-subtle",size:"small",children:r("store.manageYourStoresDetails")})]}),e.jsx(E,{groups:[{actions:[{icon:e.jsx(Ce,{}),label:r("actions.edit"),to:"edit"}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:r("fields.name")}),e.jsx(l,{size:"small",leading:"compact",children:s.name})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:r("store.defaultCurrency")}),i?e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(y,{size:"2xsmall",children:(m=i.currency_code)==null?void 0:m.toUpperCase()}),e.jsx(l,{size:"small",leading:"compact",children:(h=i.currency)==null?void 0:h.name})]}):e.jsx(l,{size:"small",leading:"compact",children:"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:r("store.defaultRegion")}),e.jsx("div",{className:"flex items-center gap-x-2",children:t?e.jsx(y,{size:"2xsmall",asChild:!0,children:e.jsx(P,{to:`/settings/regions/${t.id}`,children:t.name})}):e.jsx(l,{size:"small",leading:"compact",children:"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:r("store.defaultSalesChannel")}),e.jsx("div",{className:"flex items-center gap-x-2",children:o?e.jsx(y,{size:"2xsmall",asChild:!0,children:e.jsx(P,{to:`/settings/sales-channels/${o.id}`,children:o.name})}):e.jsx(l,{size:"small",leading:"compact",children:"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:r("store.defaultLocation")}),e.jsx("div",{className:"flex items-center gap-x-2",children:c?e.jsx(y,{size:"2xsmall",asChild:!0,children:e.jsx(P,{to:`/settings/locations/${c.id}`,children:c.name})}):e.jsx(l,{size:"small",leading:"compact",children:"-"})})]})]})},hs=()=>{const s=ne(),{store:r,isPending:t,isError:i,error:o}=oe(void 0,{initialData:s}),{getWidgets:c}=ce();if(t||!r)return e.jsx(le,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw o;return e.jsxs(ye,{widgets:{before:c("store.details.before"),after:c("store.details.after")},data:r,hasOutlet:!0,showMetadata:!0,showJSON:!0,children:[e.jsx(Oe,{store:r}),e.jsx(ze,{store:r})]})};export{hs as Component,xs as loader};
