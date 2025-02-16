import{P as R}from"./chunk-YRY2CZ6I-DN73U3ao.js";import{b as C}from"./chunk-5OOAHPXU-pCxYgH-Y.js";import{R as T,f4 as v,j as e,b as y,a8 as _,t as h,H as F,T as S,v as s,I as u,B as g,ab as w,ac as n}from"./index-CXOwuGYo.js";import{S as N}from"./chunk-CBJWO6K6-BtmaqyLw.js";import{K as E}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{R as t,u as I}from"./chunk-AYRG2MQL-YqvrAt84.js";import"./index.esm-CZJuC6_q.js";import"./prompt-f7mTD0rZ.js";var M=n.object({name:n.string().min(1),code:n.string().min(1),rate:n.object({float:n.number().optional(),value:n.string().optional()}).optional(),is_combinable:n.boolean().optional()}),P=({taxRegion:c,isSublevel:i=!1})=>{const{t:a}=y(),{handleSuccess:x}=I(),r=_({defaultValues:{name:"",code:"",rate:{value:""},is_combinable:!1},resolver:w(M)}),{mutateAsync:d,isPending:m}=C(),b=r.handleSubmit(async o=>{var l;await d({tax_region_id:c.id,is_default:!0,name:o.name,code:o.code,rate:(l=o.rate)==null?void 0:l.float,is_combinable:o.is_combinable},{onSuccess:()=>{h.success(a("taxRegions.taxRates.create.successToast")),x()},onError:f=>{h.error(f.message)}})});return e.jsx(t.Form,{form:r,children:e.jsxs(E,{onSubmit:b,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(t.Header,{}),e.jsx(t.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(F,{children:a("taxRegions.taxRates.create.header")}),e.jsx(S,{size:"small",className:"text-ui-fg-subtle",children:a("taxRegions.taxRates.create.hint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"name",render:({field:o})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.name")}),e.jsx(s.Control,{children:e.jsx(u,{...o})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"rate",render:({field:{value:o,onChange:l,...f}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("taxRegions.fields.taxRate")}),e.jsx(s.Control,{children:e.jsx(R,{...f,value:o==null?void 0:o.value,onValueChange:(p,z,j)=>l({value:p,float:j==null?void 0:j.float})})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"code",render:({field:o})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("taxRegions.fields.taxCode")}),e.jsx(s.Control,{children:e.jsx(u,{...o})}),e.jsx(s.ErrorMessage,{})]})})]}),i&&e.jsx(N,{control:r.control,name:"is_combinable",label:a("taxRegions.fields.isCombinable.label"),description:a("taxRegions.fields.isCombinable.hint")})]})})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(g,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(g,{size:"small",type:"submit",isLoading:m,children:a("actions.save")})]})})]})})},q=()=>{const{id:c,province_id:i}=T(),{tax_region:a,isPending:x,isError:r,error:d}=v(i||c),m=!x&&!!a;if(r)throw d;return e.jsx(t,{children:m&&e.jsx(P,{taxRegion:a,isSublevel:!!i})})};export{q as Component};
