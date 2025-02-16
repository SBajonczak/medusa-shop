import{b as u,R as f,bb as _,j as e,H as b,a8 as y,dG as C,t as j,v as s,cr as g,I as t,B as h,ab as v,a1 as E,a3 as i}from"./index-CXOwuGYo.js";import{K as F}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{b as l,u as I}from"./chunk-AYRG2MQL-YqvrAt84.js";import"./prompt-f7mTD0rZ.js";var L=E({email:i().email(),first_name:i().optional(),last_name:i().optional(),company_name:i().optional(),phone:i().optional()}),T=({customer:r})=>{const{t:a}=u(),{handleSuccess:c}=I(),o=y({defaultValues:{email:r.email||"",first_name:r.first_name||"",last_name:r.last_name||"",company_name:r.company_name||"",phone:r.phone||""},resolver:v(L)}),{mutateAsync:m,isPending:d}=C(r.id),p=o.handleSubmit(async n=>{await m({email:r.has_account?void 0:n.email,first_name:n.first_name||null,last_name:n.last_name||null,phone:n.phone||null,company_name:n.company_name||null},{onSuccess:({customer:x})=>{j.success(a("customers.edit.successToast",{email:x.email})),c()},onError:x=>{j.error(x.message)}})});return e.jsx(l.Form,{form:o,children:e.jsxs(F,{onSubmit:p,className:"flex flex-1 flex-col",children:[e.jsx(l.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:o.control,name:"email",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.email")}),e.jsx(s.Control,{children:e.jsx(g,{showTooltip:r.has_account,content:a("customers.edit.emailDisabledTooltip"),children:e.jsx(t,{...n,disabled:r.has_account})})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"first_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(t,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"last_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(t,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"company_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.company")}),e.jsx(s.Control,{children:e.jsx(t,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"phone",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.phone")}),e.jsx(s.Control,{children:e.jsx(t,{...n})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(h,{variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(h,{isLoading:d,type:"submit",variant:"primary",size:"small",children:a("actions.save")})]})})]})})},R=()=>{const{t:r}=u(),{id:a}=f(),{customer:c,isLoading:o,isError:m,error:d}=_(a);if(m)throw d;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(b,{children:r("customers.edit.header")})}),!o&&c&&e.jsx(T,{customer:c})]})};export{R as Component};
