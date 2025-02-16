import{t as N}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{S as L}from"./chunk-CBJWO6K6-BtmaqyLw.js";import{K as P}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{b as a,u as w}from"./chunk-AYRG2MQL-YqvrAt84.js";import{P as D}from"./chunk-ZVVQK46Y-DyC4Lwd_.js";import{R as M,b as F,Q as R,j as e,H as z,a as B,m as H,U,t as b,v as s,I as x,T as V,F as A,B as g,a1 as K,a2 as _,a3 as n,a4 as O}from"./index-CXOwuGYo.js";import{S as d}from"./select-CsIRquN0.js";import{T as Q}from"./textarea-CPEozZ7R.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-f7mTD0rZ.js";import"./check-pD2HlQS4.js";import"./triangles-mini-8WnZw7zb.js";var Z=K({status:O(["draft","published","proposed","rejected"]),title:n().min(1),subtitle:n().optional(),handle:n().min(1),material:n().optional(),description:n().optional(),discountable:_()}),$=({product:l})=>{const{t}=F(),{handleSuccess:c}=w(),{getFormFields:m,getFormConfigs:u}=B(),j=m("product","edit"),y=u("product","edit"),o=H({defaultValues:{status:l.status,title:l.title,material:l.material||"",subtitle:l.subtitle||"",handle:l.handle||"",description:l.description||"",discountable:l.discountable},schema:Z,configs:y,data:l}),{mutateAsync:E,isPending:v}=U(l.id),C=o.handleSubmit(async r=>{const{title:h,discountable:p,handle:i,status:T,...S}=r,I=N(S);await E({title:h,discountable:p,handle:i,status:T,...I},{onSuccess:({product:f})=>{b.success(t("products.edit.successToast",{title:f.title})),c()},onError:f=>{b.error(f.message)}})});return e.jsx(a.Form,{form:o,children:e.jsxs(P,{onSubmit:C,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(a.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:o.control,name:"status",render:({field:{onChange:r,ref:h,...p}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.status")}),e.jsx(s.Control,{children:e.jsxs(d,{...p,onValueChange:r,children:[e.jsx(d.Trigger,{ref:h,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:["draft","published","proposed","rejected"].map(i=>e.jsx(d.Item,{value:i,children:t(`products.productStatus.${i}`)},i))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"title",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.title")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"subtitle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.subtitle")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(V,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(x,{...r,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"material",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.material")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"description",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.description")}),e.jsx(s.Control,{children:e.jsx(Q,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(L,{control:o.control,name:"discountable",label:t("fields.discountable"),description:t("products.discountableHint")}),e.jsx(A,{fields:j,form:o})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(g,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(g,{size:"small",type:"submit",isLoading:v,children:t("actions.save")})]})})]})})},oe=()=>{const{id:l}=M(),{t}=F(),{product:c,isLoading:m,isError:u,error:j}=R(l,{fields:D});if(u)throw j;return e.jsxs(a,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{asChild:!0,children:e.jsx(z,{children:t("products.edit.header")})}),e.jsx(a.Description,{className:"sr-only",children:t("products.edit.description")})]}),!m&&c&&e.jsx($,{product:c})]})};export{oe as Component};
