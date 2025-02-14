import{D as C}from"./chunk-77TK23EH-oQvnm0M_.js";import{C as S}from"./chunk-MW4K5NNY-3YLBIR1y.js";import{a1 as L,a3 as a,b,R as z,aS as I,j as s,H as M,a8 as w,a9 as A,c_ as O,t as y,w as e,x as l,B as _}from"./index-B2cUNxal.js";import{K as D}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{b as d,u as N}from"./chunk-AYRG2MQL-GbdggpvT.js";import"./triangles-mini-Bx0nb1n6.js";import"./prompt-BbqanaXM.js";var R=L({address_1:a().min(1),address_2:a().optional(),country_code:a().min(2).max(2),city:a().optional(),postal_code:a().optional(),province:a().optional(),company:a().optional(),phone:a().optional()});function T({order:i}){var p,x,m,j,h,u,g,f;const{t:n}=b(),{handleSuccess:t}=N(),o=w({defaultValues:{address_1:((p=i.shipping_address)==null?void 0:p.address_1)||"",address_2:((x=i.shipping_address)==null?void 0:x.address_2)||"",city:((m=i.shipping_address)==null?void 0:m.city)||"",company:((j=i.shipping_address)==null?void 0:j.company)||"",country_code:((h=i.shipping_address)==null?void 0:h.country_code)||"",phone:((u=i.shipping_address)==null?void 0:u.phone)||"",postal_code:((g=i.shipping_address)==null?void 0:g.postal_code)||"",province:((f=i.shipping_address)==null?void 0:f.province)||""},resolver:A(R)}),{mutateAsync:c,isPending:E}=O(i.id),F=o.handleSubmit(async r=>{try{await c({shipping_address:r}),y.success(n("orders.edit.shippingAddress.requestSuccess")),t()}catch(v){y.error(v.message)}});return s.jsx(d.Form,{form:o,children:s.jsxs(D,{onSubmit:F,className:"flex size-full flex-col overflow-hidden",children:[s.jsx(d.Body,{className:"flex-1 overflow-auto",children:s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(e.Field,{control:o.control,name:"address_1",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:n("fields.address")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"address_2",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.address2")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"postal_code",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.postalCode")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"city",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.city")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"country_code",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:n("fields.country")}),s.jsx(e.Control,{children:s.jsx(S,{...r,disabled:!0})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"province",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.state")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"company",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.company")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"phone",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:n("fields.phone")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})})]})}),s.jsx(d.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(d.Close,{asChild:!0,children:s.jsx(_,{variant:"secondary",size:"small",children:n("actions.cancel")})}),s.jsx(_,{isLoading:E,type:"submit",variant:"primary",size:"small",children:n("actions.save")})]})})]})})}var $=()=>{const{t:i}=b(),n=z(),{order:t,isPending:o,isError:c}=I(n.id,{fields:C});if(!o&&c)throw new Error("Order not found");return s.jsxs(d,{children:[s.jsx(d.Header,{children:s.jsx(M,{children:i("orders.edit.shippingAddress.title")})}),t&&s.jsx(T,{order:t})]})};export{$ as Component};
