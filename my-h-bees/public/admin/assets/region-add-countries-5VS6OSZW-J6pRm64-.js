import{u as k,a as T,b as E}from"./chunk-NOAFLTPV-B6ngUfA8.js";import{u as I,_ as A}from"./chunk-RAKBTSZ7-Bu3RmrcX.js";import{a1 as F,ad as z,a3 as B,R as D,e1 as H,j as o,b as M,r as g,a8 as N,a9 as K,cI as L,e3 as O,t as x,B as S}from"./index-B2cUNxal.js";import"./lodash-DtuFXUiK.js";import"./chunk-JKKJMCX3-CyUEcKra.js";import{K as V}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{R as n,u as q}from"./chunk-AYRG2MQL-GbdggpvT.js";import{C as b}from"./checkbox-g0huWiM-.js";import{c as G}from"./index-DFZh3Rvo.js";import"./chunk-C76H5USB-CDMmkZB7.js";import"./chunk-YEDAFXMB-CjoTmq6D.js";import"./chunk-AOFGTNG6-BLV7o1H7.js";import"./table-NYPFxblw.js";import"./chunk-WX2SMNCD-Vf-v85vZ.js";import"./plus-mini-CyYijR6V.js";import"./command-bar-BtL2xZhh.js";import"./index-CYxiV7m6.js";import"./chunk-BKWQ2FHJ-BmTjIuZI.js";import"./format-Crog3Qdk.js";import"./_isIndex-BNwOn8b5.js";import"./x-mark-mini-DW0AR4qG.js";import"./date-picker-BPH_vb3d.js";import"./popover-BC0U_9Dp.js";import"./triangle-left-mini-DgyMbiIl.js";import"./index-CUoVPeMN.js";import"./prompt-BbqanaXM.js";var Q=F({countries:z(B()).min(1)}),m=50,p="ac",U=({region:r})=>{const{t:e}=M(),{handleSuccess:a}=q(),[t,l]=g.useState({}),u=N({defaultValues:{countries:[]},resolver:K(Q)}),{setValue:h}=u;g.useEffect(()=>{const s=Object.keys(t).filter(i=>t[i]);h("countries",s,{shouldDirty:!0,shouldTouch:!0})},[t,h]);const{searchParams:C,raw:j}=k({pageSize:m,prefix:p}),{countries:_,count:f}=T({countries:L.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...C}),y=Z(),{table:R}=I({data:_||[],columns:y,count:f,enablePagination:!0,enableRowSelection:s=>{var i;return((i=r.countries)==null?void 0:i.findIndex(c=>c.iso_2===s.original.iso_2))===-1},getRowId:s=>s.iso_2,pageSize:m,rowSelection:{state:t,updater:l},prefix:p}),{mutateAsync:v,isPending:P}=O(r.id),w=u.handleSubmit(async s=>{var c;const i=[...((c=r.countries)==null?void 0:c.map(d=>d.iso_2))??[],...s.countries];await v({countries:i},{onSuccess:()=>{x.success(e("regions.toast.countries")),a()},onError:d=>{x.error(d.message)}})});return o.jsx(n.Form,{form:u,children:o.jsxs(V,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[o.jsx(n.Header,{children:o.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[o.jsx(n.Close,{asChild:!0,children:o.jsx(S,{size:"small",variant:"secondary",children:e("actions.cancel")})}),o.jsx(S,{size:"small",isLoading:P,type:"submit",children:e("actions.add")})]})}),o.jsx(n.Body,{className:"overflow-hidden",children:o.jsx(A,{table:R,columns:y,pageSize:m,count:f,search:"autofocus",pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:e("fields.name")},{key:"iso_2",label:e("fields.code")}],queryObject:j,prefix:p})})]})})},X=G(),Z=()=>{const r=E();return g.useMemo(()=>[X.display({id:"select",header:({table:e})=>o.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect();return o.jsx(b,{checked:e.getIsSelected()||a,disabled:a,onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}}),...r],[r])},je=()=>{const{id:r}=D(),{region:e,isPending:a,isError:t,error:l}=H(r,{fields:"*payment_providers"});if(t)throw l;return o.jsx(n,{children:!a&&e&&o.jsx(U,{region:e})})};export{je as Component};
