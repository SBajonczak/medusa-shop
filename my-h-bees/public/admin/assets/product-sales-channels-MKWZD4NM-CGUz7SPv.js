import{u as D,a as k,b as M,c as z}from"./chunk-6TVXQXDC-zLiEqW6m.js";import{a1 as B,ad as H,a3 as I,R as L,Q as N,j as e,b as A,a8 as Q,a9 as U,r as c,J as V,U as G,B as h,k as J}from"./index-B2cUNxal.js";import{D as O,c as X}from"./chunk-FPVDKY3X-XkzvJbhy.js";import{R as t,u as Z}from"./chunk-AYRG2MQL-GbdggpvT.js";import"./chunk-JGKUKVRC-DqzUCezG.js";import"./chunk-BKWQ2FHJ-BmTjIuZI.js";import"./format-Crog3Qdk.js";import"./chunk-C76H5USB-CDMmkZB7.js";import"./checkbox-g0huWiM-.js";import"./index-DFZh3Rvo.js";import"./command-bar-BtL2xZhh.js";import"./index-CYxiV7m6.js";import"./table-NYPFxblw.js";import"./arrow-up-mini-DiDVWOXk.js";import"./date-picker-BPH_vb3d.js";import"./popover-BC0U_9Dp.js";import"./x-mark-mini-DW0AR4qG.js";import"./triangle-left-mini-DgyMbiIl.js";import"./prompt-BbqanaXM.js";var $=B({sales_channels:H(I()).optional()}),q=50,p="sc",K=({product:a})=>{var u,m;const{t:o}=A(),{handleSuccess:l}=Z(),r=Q({defaultValues:{sales_channels:((u=a.sales_channels)==null?void 0:u.map(s=>s.id))??[]},resolver:U($)}),{setValue:n}=r,S=((m=a.sales_channels)==null?void 0:m.reduce((s,d)=>(s[d.id]=!0,s),{}))??{},[i,x]=c.useState(S);c.useEffect(()=>{const s=Object.keys(i);n("sales_channels",s,{shouldDirty:!0,shouldTouch:!0})},[i,n]);const f=D({pageSize:q,prefix:p}),{sales_channels:j,count:C,isLoading:v,isError:y,error:b}=V({...f},{placeholderData:J}),w=k(),E=M(),T=Y(),{mutateAsync:g,isPending:_}=G(a.id),P=r.handleSubmit(async s=>{const R=(s.sales_channels??[]).map(F=>({id:F}));await g({sales_channels:R},{onSuccess:()=>{l()}})});if(y)throw b;return e.jsx(t.Form,{form:r,children:e.jsxs("div",{className:"flex h-full flex-col overflow-hidden",children:[e.jsx(t.Header,{}),e.jsx(t.Body,{className:"flex-1 overflow-hidden",children:e.jsx(O,{data:j,columns:T,getRowId:s=>s.id,rowCount:C,isLoading:v,filters:w,rowSelection:{state:i,onRowSelectionChange:x},autoFocusSearch:!0,layout:"fill",emptyState:E,prefix:p})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(h,{size:"small",isLoading:_,onClick:P,children:o("actions.save")})]})})]})})},W=X(),Y=()=>{const a=z();return c.useMemo(()=>[W.select(),...a],[a])},Ce=()=>{const{id:a}=L(),{product:o,isLoading:l,isError:r,error:n}=N(a);if(r)throw n;return e.jsx(t,{children:!l&&o&&e.jsx(K,{product:o})})};export{Ce as Component};
