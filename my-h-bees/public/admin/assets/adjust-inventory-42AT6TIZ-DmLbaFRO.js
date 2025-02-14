import{R as I,b as q,dQ as L,a_ as w,j as e,H as N,a5 as r,a8 as S,a9 as F,v as C,dY as R,t as g,w as l,x as z,B as b,T as k}from"./index-B2cUNxal.js";import{c as _}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as A}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{b as d,u as E}from"./chunk-AYRG2MQL-GbdggpvT.js";import"./prompt-BbqanaXM.js";var u=({title:n,value:t})=>e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(k,{className:"px-2 py-1.5",size:"small",leading:"compact",children:n}),e.jsx(k,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t})]}),Q=({item:n,level:t,location:x})=>{const{t:s}=q(),{handleSuccess:v}=E(),j=r.object({stocked_quantity:r.union([r.number(),r.string()])}).superRefine((o,i)=>{const y=o.stocked_quantity?_(o.stocked_quantity):null;if(y===null){i.addIssue({code:r.ZodIssueCode.invalid_type,expected:"number",received:"undefined",path:["stocked_quantity"]});return}y<t.reserved_quantity&&i.addIssue({code:r.ZodIssueCode.custom,message:s("inventory.adjustInventory.errors.stockedQuantity",{quantity:t.reserved_quantity}),path:["stocked_quantity"]})}),a=S({defaultValues:{stocked_quantity:t.stocked_quantity},resolver:F(j)}),c=C({control:a.control,name:"stocked_quantity"}),m=c?_(c)-t.reserved_quantity:0-t.reserved_quantity,{mutateAsync:h,isPending:f}=R(n.id,t.location_id),p=a.handleSubmit(async o=>{await h({stocked_quantity:_(o.stocked_quantity)},{onSuccess:()=>{g.success(s("inventory.toast.updateLevel")),v()},onError:i=>{g.error(i.message)}})});return e.jsx(d.Form,{form:a,children:e.jsxs(A,{onSubmit:p,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(d.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border",children:[e.jsx(u,{title:s("fields.title"),value:n.title??"-"}),e.jsx(u,{title:s("fields.sku"),value:n.sku}),e.jsx(u,{title:s("locations.domain"),value:x.name}),e.jsx(u,{title:s("inventory.reserved"),value:t.reserved_quantity}),e.jsx(u,{title:s("inventory.available"),value:m})]}),e.jsx(l.Field,{control:a.control,name:"stocked_quantity",render:({field:{onChange:o,value:i,...y}})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{children:s("fields.inStock")}),e.jsx(l.Control,{children:e.jsx(z,{type:"number",value:i,onChange:o,...y})}),e.jsx(l.ErrorMessage,{})]})})]}),e.jsx(d.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(d.Close,{asChild:!0,children:e.jsx(b,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(b,{type:"submit",size:"small",isLoading:f,children:s("actions.save")})]})})]})})},K=()=>{const{id:n,location_id:t}=I(),{t:x}=q(),{inventory_item:s,isPending:v,isError:j,error:a}=L(n),c=s==null?void 0:s.location_levels.find(p=>p.location_id===t),{stock_location:m,isLoading:h}=w(t),f=!v&&s&&c&&!h&&m;if(j)throw a;return e.jsxs(d,{children:[e.jsx(d.Header,{children:e.jsx(N,{children:x("inventory.manageLocations")})}),f&&e.jsx(Q,{item:s,level:c,location:m})]})};export{K as Component};
