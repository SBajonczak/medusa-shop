import{u as y,_ as b}from"./chunk-RAKBTSZ7-Bu3RmrcX.js";import{a as x,j as i,b as o,ek as P,H as j,T as _,B as v,L as S,r as T,k,el as w,A,t as u}from"./index-B2cUNxal.js";import"./lodash-DtuFXUiK.js";import"./chunk-JKKJMCX3-CyUEcKra.js";import{S as C}from"./chunk-2RQLKDBF-BdCdTidT.js";import{u as D}from"./chunk-C76H5USB-CDMmkZB7.js";import{T as E}from"./trash-D1zXr3Ek.js";import{u as z}from"./use-prompt-B4umtCdS.js";import{C as L}from"./container-2AHpL-fQ.js";import{c as N}from"./index-DFZh3Rvo.js";import"./chunk-YEDAFXMB-CjoTmq6D.js";import"./chunk-AOFGTNG6-BLV7o1H7.js";import"./table-NYPFxblw.js";import"./chunk-WX2SMNCD-Vf-v85vZ.js";import"./plus-mini-CyYijR6V.js";import"./command-bar-BtL2xZhh.js";import"./index-CYxiV7m6.js";import"./chunk-BKWQ2FHJ-BmTjIuZI.js";import"./format-Crog3Qdk.js";import"./_isIndex-BNwOn8b5.js";import"./x-mark-mini-DW0AR4qG.js";import"./date-picker-BPH_vb3d.js";import"./popover-BC0U_9Dp.js";import"./triangle-left-mini-DgyMbiIl.js";import"./index-CUoVPeMN.js";import"./Trans-CdzClQ9r.js";import"./check-rfip2cOG.js";import"./prompt-BbqanaXM.js";var q=({profile:e})=>{const{t}=o(),a=z(),{mutateAsync:s}=w(e.id),r=async()=>{await a({title:t("shippingProfile.delete.title"),description:t("shippingProfile.delete.description",{name:e.name}),verificationText:e.name,verificationInstruction:t("general.typeToConfirm"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await s(void 0,{onSuccess:()=>{u.success(t("shippingProfile.delete.successToast",{name:e.name}))},onError:n=>{u.error(n.message)}})};return i.jsx(A,{groups:[{actions:[{icon:i.jsx(E,{}),label:t("actions.delete"),onClick:r}]}]})},p=N(),H=()=>{const{t:e}=o();return T.useMemo(()=>[p.accessor("name",{header:e("fields.name"),cell:t=>t.getValue()}),p.accessor("type",{header:e("fields.type"),cell:t=>t.getValue()}),p.display({id:"actions",cell:({row:t})=>i.jsx(q,{profile:t.original})})],[e])},I=()=>{const{t:e}=o();let t=[];t.push({key:"name",label:e("fields.name"),type:"string"}),t.push({key:"type",label:e("fields.type"),type:"string"});const a=[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(s=>({key:s.key,label:s.label,type:"date"}));return t=[...t,...a],t},O=({pageSize:e=20,prefix:t})=>{const a=D(["offset","q","order","created_at","updated_at","name","type"],t);return{searchParams:{limit:e,offset:a.offset?parseInt(a.offset):0,q:a.q,order:a.order,created_at:a.created_at?JSON.parse(a.created_at):void 0,updated_at:a.updated_at?JSON.parse(a.updated_at):void 0,name:a.name,type:a.type},raw:a}},c=20,B=()=>{const{t:e}=o(),{raw:t,searchParams:a}=O({pageSize:c}),{shipping_profiles:s,count:r,isLoading:d,isError:n,error:f}=P(a,{placeholderData:k}),m=H(),g=I(),{table:h}=y({data:s,columns:m,count:r,enablePagination:!0,getRowId:l=>l.id,pageSize:c});if(n)throw f;return i.jsxs(L,{className:"divide-y p-0",children:[i.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[i.jsxs("div",{children:[i.jsx(j,{children:e("shippingProfile.domain")}),i.jsx(_,{className:"text-ui-fg-subtle",size:"small",children:e("shippingProfile.subtitle")})]}),i.jsx("div",{children:i.jsx(v,{size:"small",variant:"secondary",asChild:!0,children:i.jsx(S,{to:"create",children:e("actions.create")})})})]}),i.jsx(b,{table:h,pageSize:c,count:r,columns:m,filters:g,orderBy:[{key:"name",label:e("fields.name")},{key:"type",label:e("fields.type")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],isLoading:d,navigateTo:l=>l.id,queryObject:t,search:!0,pagination:!0})]})},fe=()=>{const{getWidgets:e}=x();return i.jsx(C,{widgets:{before:e("shipping_profile.list.before"),after:e("shipping_profile.list.after")},children:i.jsx(B,{})})};export{fe as Component};
