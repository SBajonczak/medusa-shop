import{u as Z}from"./chunk-6CNRNROJ-BZ8pQfcz.js";import{C as O}from"./chunk-W6N53UNG-Cj2P1_RV.js";import{o as ee,p as z}from"./chunk-ZQRKUG6J-n0zNqMGq.js";import{D as $,c as re,a as te}from"./chunk-GE4APTT2-d2WZkLED.js";import{a5 as p,ao as ne,a3 as H,af as se,R as ie,Q as ae,j as e,b as w,r as b,a8 as le,a9 as oe,av as ce,i as K,v as F,y as R,t as de,B as P,H as G,w as r,x as V,ab as S,s as ue,z as B,I as me,g as xe,l as pe}from"./index-B2cUNxal.js";import{c as D}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as he}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{R as N,u as W,b as ve}from"./chunk-AYRG2MQL-GbdggpvT.js";import{X as fe}from"./x-mark-mini-DW0AR4qG.js";import{P as g}from"./progress-tabs-BkwBI_mU.js";import"./triangles-mini-Bx0nb1n6.js";import"./plus-mini-CyYijR6V.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-BNwOn8b5.js";import"./index.esm-BhNN9JfJ.js";import"./index-DFZh3Rvo.js";import"./checkbox-g0huWiM-.js";import"./prompt-BbqanaXM.js";var I=p.object({title:p.string().min(1),sku:p.string().optional(),manage_inventory:p.boolean().optional(),allow_backorder:p.boolean().optional(),inventory_kit:p.boolean().optional(),options:p.record(p.string()),prices:ne(H(),H().or(se()).optional()).optional(),inventory:p.array(p.object({inventory_item_id:p.string(),required_quantity:ee})).optional()}),A=I.pick({title:!0,sku:!0,manage_inventory:!0,allow_backorder:!0,inventory_kit:!0,options:!0}),je=Object.keys(A.shape),X=I.pick({prices:!0}),ge=Object.keys(X.shape);function ye({form:s,product:a}){const{t:o}=w(),l=F({control:s.control,name:"manage_inventory"});return e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-8 py-16",children:[e.jsx(G,{level:"h1",children:o("products.variant.create.header")}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(r.Field,{control:s.control,name:"title",render:({field:t})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:o("fields.title")}),e.jsx(r.Control,{children:e.jsx(V,{...t})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:s.control,name:"sku",render:({field:t})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.sku")}),e.jsx(r.Control,{children:e.jsx(V,{...t})}),e.jsx(r.ErrorMessage,{})]})}),a.options.map(t=>e.jsx(r.Field,{control:s.control,name:`options.${t.title}`,render:({field:{value:c,onChange:i,...n}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t.title}),e.jsx(r.Control,{children:e.jsx(O,{value:c,onChange:m=>{i(m)},...n,options:t.values.map(m=>({label:m.value,value:m.value}))})})]})},t.id))]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(r.Field,{control:s.control,name:"manage_inventory",render:({field:{value:t,onChange:c,...i}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"bg-ui-bg-component shadow-elevation-card-rest flex gap-x-3 rounded-lg p-4",children:[e.jsx(r.Control,{children:e.jsx(S,{className:"mt-[2px]",checked:t,onCheckedChange:n=>c(!!n),...i})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r.Label,{children:o("products.variant.inventory.manageInventoryLabel")}),e.jsx(r.Hint,{children:o("products.variant.inventory.manageInventoryHint")})]})]}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:s.control,name:"allow_backorder",disabled:!l,render:({field:{value:t,onChange:c,...i}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"bg-ui-bg-component shadow-elevation-card-rest flex gap-x-3 rounded-lg p-4",children:[e.jsx(r.Control,{children:e.jsx(S,{checked:t,onCheckedChange:n=>c(!!n),...i,disabled:!l})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r.Label,{children:o("products.variant.inventory.allowBackordersLabel")}),e.jsx(r.Hint,{children:o("products.variant.inventory.allowBackordersHint")})]})]}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:s.control,name:"inventory_kit",render:({field:{value:t,onChange:c,...i}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"bg-ui-bg-component shadow-elevation-card-rest flex gap-x-3 rounded-lg p-4",children:[e.jsx(r.Control,{children:e.jsx(S,{checked:t,onCheckedChange:n=>c(!!n),...i,disabled:!l})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r.Label,{children:o("products.variant.inventory.inventoryKit")}),e.jsx(r.Hint,{children:o("products.variant.inventory.inventoryKitHint")})]})]}),e.jsx(r.ErrorMessage,{})]})})]})]})})}var be=ye;function _e({form:s}){const{t:a}=w(),o=R({control:s.control,name:"inventory"}),l=o.fields,t=Z({queryKey:["inventory_items"],queryFn:i=>ue.admin.inventoryItem.list(i),getOptions:i=>i.inventory_items.map(n=>({label:n.title,value:n.id}))}),c=(i,n)=>l==null?void 0:l.some((m,v)=>v!=n&&m.inventory_item_id===i.value);return e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsx("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:e.jsxs("div",{id:"organize",className:"flex flex-col gap-y-8",children:[e.jsx(G,{children:a("products.create.inventory.heading")}),e.jsxs("div",{className:"grid gap-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r.Label,{children:s.getValues("title")}),e.jsx(r.Hint,{children:a("products.create.inventory.label")})]}),e.jsx(P,{size:"small",variant:"secondary",type:"button",onClick:()=>{o.append({inventory_item_id:"",required_quantity:""})},children:a("actions.add")})]}),o.fields.map((i,n)=>e.jsxs("li",{className:"bg-ui-bg-component shadow-elevation-card-rest grid grid-cols-[1fr_28px] items-center gap-1.5 rounded-xl p-1.5",children:[e.jsxs("div",{className:"grid grid-cols-[min-content,1fr] items-center gap-1.5",children:[e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(B,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${n}.inventory_item_id`,children:a("fields.item")})}),e.jsx(r.Field,{control:s.control,name:`inventory.${n}.inventory_item_id`,render:({field:m})=>e.jsx(r.Item,{children:e.jsx(r.Control,{children:e.jsx(O,{...m,options:t.options.map(v=>({...v,disabled:c(v,n)})),searchValue:t.searchValue,onSearchValueChange:t.onSearchValueChange,fetchNextPage:t.fetchNextPage,className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",placeholder:a("products.create.inventory.itemPlaceholder")})})})}),e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(B,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${n}.required_quantity`,children:a("fields.quantity")})}),e.jsx(r.Field,{control:s.control,name:`inventory.${n}.required_quantity`,render:({field:{onChange:m,value:v,...y}})=>e.jsxs(r.Item,{children:[e.jsx(r.Control,{children:e.jsx(V,{type:"number",className:"bg-ui-bg-field-component",min:0,value:v,onChange:q=>{const k=q.target.value;m(k===""?null:Number(k))},...y,placeholder:a("products.create.inventory.quantityPlaceholder")})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(me,{type:"button",size:"small",variant:"transparent",className:"text-ui-fg-muted",onClick:()=>o.remove(n),children:e.jsx(fe,{})})]},i.id))]})]})})})}var Ce=_e;function Ne({form:s}){const{store:a}=xe(),{regions:o}=K({limit:9999}),{price_preferences:l}=pe({}),{setCloseOnEscape:t}=W(),c=ke({currencies:a==null?void 0:a.supported_currencies,regions:o,pricePreferences:l}),i=F({control:s.control});return e.jsx($,{columns:c,data:[i],state:s,onEditingChange:n=>t(!n)})}var we=te(),ke=({currencies:s=[],regions:a=[],pricePreferences:o=[]})=>{const{t:l}=w();return b.useMemo(()=>[we.column({id:l("fields.title"),header:l("fields.title"),cell:t=>{const c=t.row.original;return e.jsx($.ReadonlyCell,{context:t,children:e.jsx("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:e.jsx("span",{className:"truncate",children:c.title})})})},disableHiding:!0}),...re({currencies:s.map(t=>t.currency_code),regions:a,pricePreferences:o,getFieldName:(t,c)=>{var i;return(i=t.column.id)!=null&&i.startsWith("currency_prices")?`prices.${c}`:`prices.${c}`},t:l})],[l,s,a,o])},Fe=Ne,Pe={detail:"in-progress",price:"not-started",inventory:"not-started"},qe=({product:s})=>{const{t:a}=w(),{handleSuccess:o}=W(),[l,t]=b.useState("detail"),[c,i]=b.useState(Pe),n=le({defaultValues:{sku:"",title:"",manage_inventory:!1,allow_backorder:!1,inventory_kit:!1,options:{}},resolver:oe(I)}),{mutateAsync:m,isPending:v}=ce(s.id),{regions:y}=K({limit:9999}),q=b.useMemo(()=>y!=null&&y.length?y.reduce((d,j)=>(d[j.id]=j.currency_code,d),{}):{},[y]),k=F({control:n.control,name:"manage_inventory"}),T=F({control:n.control,name:"inventory_kit"}),L=R({control:n.control,name:"inventory"}),_=k&&T,f=b.useMemo(()=>_?["detail","price","inventory"]:["detail","price"],[_]);b.useEffect(()=>{T&&L.fields.length===0&&L.append({inventory_item_id:"",required_quantity:void 0})},[T]);const M=d=>{if(l===d)return;if(f.indexOf(d)<f.indexOf(l)){i(u=>({...u,[l]:"not-started",[d]:"in-progress"})),t(d);return}const j=f.slice(0,f.indexOf(d));for(const u of j)if(u==="detail"){if(!z(n,je,A)){i(h=>({...h,[u]:"in-progress"})),t(u);return}i(h=>({...h,[u]:"completed"}))}else if(u==="price"){if(!z(n,ge,X)){i(h=>({...h,[u]:"in-progress"})),t(u);return}i(h=>({...h,[u]:"completed"}))}i(u=>({...u,[l]:"completed",[d]:"in-progress"})),t(d)},Q=d=>{if(f.indexOf(d)+1>=f.length)return;const j=f[f.indexOf(d)+1];M(j)},J=n.handleSubmit(async d=>{const{allow_backorder:j,manage_inventory:u,sku:h,title:U}=d;await m({title:U,sku:h||void 0,allow_backorder:j,manage_inventory:u,options:d.options,prices:Object.entries(d.prices??{}).map(([x,E])=>{if(E===""||E===void 0)return;const C={},Y=D(E);return x.startsWith("reg_")?(C.rules={region_id:x},C.currency_code=q[x]):C.currency_code=x,C.amount=Y,C}).filter(Boolean),inventory_items:(d.inventory||[]).map(x=>!x.required_quantity||!x.inventory_item_id?!1:{...x,required_quantity:D(x.required_quantity)}).filter(Boolean)},{onSuccess:()=>{o()},onError:x=>{de.error(x.message)}})});return e.jsx(N.Form,{form:n,children:e.jsx(g,{value:l,onValueChange:d=>M(d),className:"flex h-full flex-col overflow-hidden",children:e.jsxs(he,{onSubmit:J,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(N.Header,{children:e.jsx("div",{className:"flex w-full items-center justify-between gap-x-4",children:e.jsx("div",{className:"-my-2 w-full max-w-[600px] border-l",children:e.jsxs(g.List,{className:"grid w-full grid-cols-3",children:[e.jsx(g.Trigger,{status:c.detail,value:"detail",children:a("priceLists.create.tabs.details")}),e.jsx(g.Trigger,{status:c.price,value:"price",children:a("priceLists.create.tabs.prices")}),!!_&&e.jsx(g.Trigger,{status:c.inventory,value:"inventory",children:a("products.create.tabs.inventory")})]})})})}),e.jsxs(N.Body,{className:"size-full overflow-hidden",children:[e.jsx(g.Content,{className:"size-full overflow-y-auto",value:"detail",children:e.jsx(be,{form:n,product:s})}),e.jsx(g.Content,{className:"size-full overflow-y-auto",value:"price",children:e.jsx(Fe,{form:n})}),!!_&&e.jsx(g.Content,{className:"size-full overflow-hidden",value:"inventory",children:e.jsx(Ce,{form:n})})]}),e.jsx(N.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(ve.Close,{asChild:!0,children:e.jsx(P,{variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(Te,{tab:l,next:Q,isLoading:v,inventoryTabEnabled:!!_})]})})]})})})},Te=({tab:s,next:a,isLoading:o,inventoryTabEnabled:l})=>{const{t}=w();return l&&s==="inventory"||!l&&s==="price"?e.jsx(P,{type:"submit",variant:"primary",size:"small",isLoading:o,children:t("actions.save")},"submit-button"):e.jsx(P,{type:"button",variant:"primary",size:"small",onClick:()=>a(s),children:t("actions.continue")},"next-button")},Qe=()=>{const{id:s}=ie(),{product:a,isLoading:o,isError:l,error:t}=ae(s);if(l)throw t;return e.jsx(N,{children:!o&&a&&e.jsx(qe,{product:a})})};export{Qe as Component};
