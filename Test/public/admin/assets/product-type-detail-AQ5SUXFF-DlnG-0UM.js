import{u as P}from"./chunk-6FJ2PJHE-CxZhqdVX.js";import{u as T}from"./chunk-G3QXMPRB-BDg5ryP6.js";import{R as g,d as j,eN as c,a as v,j as r,dn as S,s as D,eO as _,q as w,b as l,H as m,A as C,e as q}from"./index-CXOwuGYo.js";import{u as k,_ as A}from"./chunk-RAKBTSZ7-Ca3F3okx.js";import"./lodash-C_kVtGbQ.js";import{u as E,a as N}from"./chunk-IPEN5VX6-Ch8imrWM.js";import"./chunk-JKKJMCX3-Bu3iNRFH.js";import{S as B}from"./chunk-2RQLKDBF-vhTFQ7rn.js";import{P as O}from"./pencil-square-S6N4pk9B.js";import{T as Q}from"./trash-CYDxF8Gp.js";import{C as y}from"./container-DB8VMxu-.js";import"./use-prompt-B_j165zA.js";import"./prompt-f7mTD0rZ.js";import"./chunk-IQBAUTU5-BTpmFl9f.js";import"./chunk-ADOCJB6L-R89hZut8.js";import"./chunk-P3UUX2T6-DhHphGjM.js";import"./index-CXSP-pSV.js";import"./chunk-YEDAFXMB-CK9N38yQ.js";import"./chunk-AOFGTNG6-B2wHsqt5.js";import"./table-CM6uyZRp.js";import"./chunk-WX2SMNCD-24idVSPR.js";import"./plus-mini-kqhqcrwq.js";import"./command-bar-DRtCGwvd.js";import"./index-cF6cl0r7.js";import"./chunk-C76H5USB-DiXk35rX.js";import"./chunk-BKWQ2FHJ-rsi0pu39.js";import"./format-BF4bqZ9w.js";import"./_isIndex-CD5X6UW0.js";import"./x-mark-mini-COfrev7H.js";import"./index-seHRa87r.js";import"./date-picker-D5mo_NtI.js";import"./popover-BFn5jE4U.js";import"./triangle-left-mini-5inixpx6.js";import"./Trans-MivfKE2Z.js";import"./check-pD2HlQS4.js";var ge=e=>{const{id:t}=e.params||{},{product_type:a}=c(t,void 0,{initialData:e.data,enabled:!!t});return a?r.jsx("span",{children:a.value}):null},z=e=>({queryKey:_.detail(e),queryFn:async()=>D.admin.productType.retrieve(e)}),je=async({params:e})=>{const t=e.id,a=z(t);return w.ensureQueryData(a)},L=({productType:e})=>{const{t}=l(),a=P(e.id);return r.jsxs(y,{className:"flex items-center justify-between",children:[r.jsx(m,{children:e.value}),r.jsx(C,{groups:[{actions:[{label:t("actions.edit"),icon:r.jsx(O,{}),to:"edit"}]},{actions:[{label:t("actions.delete"),icon:r.jsx(Q,{}),onClick:a}]}]})]})},u=10,M=({productType:e})=>{const{t}=l(),{searchParams:a,raw:i}=E({pageSize:u}),{products:o,count:n,isPending:s,isError:f,error:b}=q({...a,type_id:[e.id]}),h=N(["product_types"]),p=T(),{table:x}=k({columns:p,data:o,count:(o==null?void 0:o.length)||0,getRowId:d=>d.id,pageSize:u});if(f)throw b;return r.jsxs(y,{className:"divide-y p-0",children:[r.jsx("div",{className:"px-6 py-4",children:r.jsx(m,{level:"h2",children:t("products.domain")})}),r.jsx(A,{table:x,filters:h,isLoading:s,columns:p,count:n,pageSize:u,navigateTo:({original:d})=>`/products/${d.id}`,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],queryObject:i,search:!0,pagination:!0})]})},ve=()=>{const{id:e}=g(),t=j(),{product_type:a,isPending:i,isError:o,error:n}=c(e,void 0,{initialData:t}),{getWidgets:s}=v();if(i||!a)return r.jsx(S,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw n;return r.jsxs(B,{widgets:{after:s("product_type.details.after"),before:s("product_type.details.before")},showJSON:!0,showMetadata:!0,data:a,children:[r.jsx(L,{productType:a}),r.jsx(M,{productType:a})]})};export{ge as Breadcrumb,ve as Component,je as loader};
