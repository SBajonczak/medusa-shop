import{G as f}from"./chunk-N6PBCMOV-CPTGKJ_3.js";import{G as g}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import{a5 as n,R as v,a_ as y,ar as S,j as e,b as F,a8 as _,a9 as w,t as h,H as b,w as m,x as Z,G as k,B as j}from"./index-B2cUNxal.js";import"./chunk-RAKBTSZ7-Bu3RmrcX.js";import"./lodash-DtuFXUiK.js";import"./chunk-X5VECN6S-71YahJmA.js";import"./chunk-JKKJMCX3-CyUEcKra.js";import{b as C}from"./chunk-GVRV2SOJ-CYEqj34T.js";import{K as L}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{R as a,u as E,S as N}from"./chunk-AYRG2MQL-GbdggpvT.js";import"./chunk-NOAFLTPV-B6ngUfA8.js";import"./chunk-C76H5USB-CDMmkZB7.js";import"./index-DFZh3Rvo.js";import"./checkbox-g0huWiM-.js";import"./chunk-YEDAFXMB-CjoTmq6D.js";import"./chunk-AOFGTNG6-BLV7o1H7.js";import"./table-NYPFxblw.js";import"./chunk-WX2SMNCD-Vf-v85vZ.js";import"./plus-mini-CyYijR6V.js";import"./command-bar-BtL2xZhh.js";import"./index-CYxiV7m6.js";import"./x-mark-mini-DW0AR4qG.js";import"./chunk-BKWQ2FHJ-BmTjIuZI.js";import"./format-Crog3Qdk.js";import"./_isIndex-BNwOn8b5.js";import"./date-picker-BPH_vb3d.js";import"./popover-BC0U_9Dp.js";import"./triangle-left-mini-DgyMbiIl.js";import"./index-CUoVPeMN.js";import"./chunk-BF3VCHXD-YEIYJiBe.js";import"./prompt-BbqanaXM.js";var D=n.object({name:n.string().min(1),countries:n.array(n.object({iso_2:n.string().min(2),display_name:n.string()})).min(1)});function G({fulfillmentSet:l,type:d,location:o}){const{t:s}=F(),{handleSuccess:p}=E(),t=_({defaultValues:{name:"",countries:[]},resolver:w(D)}),{mutateAsync:u,isPending:i}=C(l.id),x=t.handleSubmit(async r=>{await u({name:r.name,geo_zones:r.countries.map(({iso_2:c})=>({country_code:c,type:"country"}))},{onSuccess:()=>{h.success(s("stockLocations.serviceZones.create.successToast",{name:r.name})),p(`/settings/locations/${o.id}`)},onError:c=>{h.error(c.message)}})});return e.jsx(a.Form,{form:t,children:e.jsxs(L,{className:"flex h-full flex-col overflow-hidden",onSubmit:x,children:[e.jsx(a.Header,{}),e.jsx(a.Body,{className:"flex flex-1 flex-col items-center overflow-auto",children:e.jsxs(N,{id:g,children:[e.jsx("div",{className:"flex flex-1 flex-col items-center",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsx(b,{children:d==="pickup"?s("stockLocations.serviceZones.create.headerPickup",{location:o.name}):s("stockLocations.serviceZones.create.headerShipping",{location:o.name})}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(m.Field,{control:t.control,name:"name",render:({field:r})=>e.jsxs(m.Item,{children:[e.jsx(m.Label,{children:s("fields.name")}),e.jsx(m.Control,{children:e.jsx(Z,{...r})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(k,{children:s("stockLocations.serviceZones.fields.tip")}),e.jsx(f,{form:t})]})}),e.jsx(f.AreaDrawer,{form:t})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(j,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(j,{type:"submit",size:"small",isLoading:i,children:s("actions.save")})]})})]})})}function de(){var r;const{fset_id:l,location_id:d}=v(),{stock_location:o,isPending:s,isFetching:p,isError:t,error:u}=y(d,{fields:"*fulfillment_sets"}),i=(r=o==null?void 0:o.fulfillment_sets)==null?void 0:r.find(c=>c.id===l),x=(i==null?void 0:i.type)==="pickup"?"pickup":"shipping";if(!s&&!p&&!i)throw S({message:`Fulfillment set with ID: ${l} was not found.`},404);if(t)throw u;return e.jsx(a,{prev:`/settings/locations/${d}`,children:i&&e.jsx(G,{fulfillmentSet:i,location:o,type:x})})}export{de as Component};
