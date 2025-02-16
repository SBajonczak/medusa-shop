import{R as b,b as p,fa as f,j as e,H as R,a8 as v,fb as g,t as m,v as s,I as h,B as j,ab as y,ac as i}from"./index-CXOwuGYo.js";import{K as E}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{b as n,u as F}from"./chunk-AYRG2MQL-YqvrAt84.js";import{T as C}from"./textarea-CPEozZ7R.js";import"./prompt-f7mTD0rZ.js";var S=i.object({value:i.string().min(1),label:i.string().min(1),description:i.string().optional()}),w=({returnReason:o})=>{const{t:r}=p(),{handleSuccess:t}=F(),l=v({defaultValues:{value:o.value,label:o.label,description:o.description??void 0},resolver:y(S)}),{mutateAsync:d,isPending:c}=g(o.id),u=l.handleSubmit(async a=>{await d(a,{onSuccess:({return_reason:x})=>{m.success(r("returnReasons.edit.successToast",{label:x.label})),t()},onError:x=>{m.error(x.message)}})});return e.jsx(n.Form,{form:l,children:e.jsxs(E,{className:"flex size-full flex-col overflow-hidden",onSubmit:u,children:[e.jsxs(n.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsx(s.Field,{control:l.control,name:"value",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:r("returnReasons.fields.value.tooltip"),children:r("returnReasons.fields.value.label")}),e.jsx(s.Control,{children:e.jsx(h,{...a,placeholder:r("returnReasons.fields.value.placeholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"label",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("returnReasons.fields.label.label")}),e.jsx(s.Control,{children:e.jsx(h,{...a,placeholder:r("returnReasons.fields.label.placeholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"description",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:r("returnReasons.fields.description.label")}),e.jsx(s.Control,{children:e.jsx(C,{...a,placeholder:r("returnReasons.fields.description.placeholder")})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(j,{variant:"secondary",size:"small",type:"button",children:r("actions.cancel")})}),e.jsx(j,{size:"small",type:"submit",isLoading:c,children:r("actions.save")})]})})]})})},N=()=>{const{id:o}=b(),{t:r}=p(),{return_reason:t,isPending:l,isError:d,error:c}=f(o),u=!l&&!!t;if(d)throw c;return e.jsxs(n,{children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{asChild:!0,children:e.jsx(R,{children:r("returnReasons.edit.header")})}),e.jsx(n.Description,{className:"sr-only",children:r("returnReasons.edit.subtitle")})]}),u&&e.jsx(w,{returnReason:t})]})};export{N as Component};
