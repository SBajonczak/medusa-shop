import{dZ as E,b as f,j as e,H as F,a8 as L,by as j,d_ as N,t as g,v as s,I as u,B as p,ab as S,a1 as I,a3 as x}from"./index-CXOwuGYo.js";import{K as P}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{b as i,u as w}from"./chunk-AYRG2MQL-YqvrAt84.js";import{S as d}from"./select-CsIRquN0.js";import"./prompt-f7mTD0rZ.js";import"./check-pD2HlQS4.js";import"./triangles-mini-8WnZw7zb.js";var H=I({first_name:x().optional(),last_name:x().optional(),language:x()}),M=({user:t})=>{const{t:r,i18n:c}=f(),{handleSuccess:m}=w(),n=L({defaultValues:{first_name:t.first_name??"",last_name:t.last_name??"",language:c.language},resolver:S(H)}),y=async a=>{await c.changeLanguage(a)},_=j.sort((a,l)=>a.display_name.localeCompare(l.display_name)),{mutateAsync:b,isPending:v}=N(t.id),C=n.handleSubmit(async a=>{await b({first_name:a.first_name,last_name:a.last_name},{onError:l=>{g.error(l.message)}}),await y(a.language),g.success(r("profile.toast.edit")),m()});return e.jsx(i.Form,{form:n,children:e.jsxs(P,{onSubmit:C,className:"flex flex-1 flex-col",children:[e.jsx(i.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Field,{control:n.control,name:"first_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(u,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"last_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(u,{...a})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:n.control,name:"language",render:({field:{ref:a,...l}})=>{var h;return e.jsxs(s.Item,{className:"gap-y-4",children:[e.jsxs("div",{children:[e.jsx(s.Label,{children:r("profile.fields.languageLabel")}),e.jsx(s.Hint,{children:r("profile.edit.languageHint")})]}),e.jsxs("div",{children:[e.jsx(s.Control,{children:e.jsxs(d,{...l,onValueChange:l.onChange,children:[e.jsx(d.Trigger,{ref:a,className:"py-1 text-[13px]",children:e.jsx(d.Value,{placeholder:r("profile.edit.languagePlaceholder"),children:(h=_.find(o=>o.code===l.value))==null?void 0:h.display_name})}),e.jsx(d.Content,{children:j.map(o=>e.jsx(d.Item,{value:o.code,children:o.display_name},o.code))})]})}),e.jsx(s.ErrorMessage,{})]})]})}})]})}),e.jsx(i.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(i.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:v,children:r("actions.save")})]})})]})})},A=()=>{const{user:t,isPending:r,isError:c,error:m}=E(),{t:n}=f();if(c)throw m;return e.jsxs(i,{children:[e.jsx(i.Header,{className:"capitalize",children:e.jsx(i.Title,{asChild:!0,children:e.jsx(F,{children:n("profile.edit.header")})})}),!r&&t&&e.jsx(M,{user:t})]})};export{A as Component};
