import{R as _}from"./chunk-IQ2LC4FN-Cn1wJvz9.js";import"./chunk-W6N53UNG-Cj2P1_RV.js";import{a5 as s,an as p,R as E,b as v,da as q,j as r,H as S,d4 as A,db as B,dc as C,dd as z,r as D,a8 as H,a9 as U,B as P}from"./index-B2cUNxal.js";import{K}from"./chunk-6HTZNHPT-QGXi6K3-.js";import{b as m,u as L}from"./chunk-AYRG2MQL-GbdggpvT.js";import"./x-mark-mini-DW0AR4qG.js";import"./select-DUiSx8mp.js";import"./triangles-mini-Bx0nb1n6.js";import"./check-rfip2cOG.js";import"./plus-mini-CyYijR6V.js";import"./prompt-BbqanaXM.js";var M=s.object({type:s.string().optional(),rules:s.array(s.object({id:s.string().optional(),attribute:s.string().min(1,{message:p.t("promotions.form.required")}),operator:s.string().min(1,{message:p.t("promotions.form.required")}),values:s.union([s.number().min(1,{message:p.t("promotions.form.required")}),s.string().min(1,{message:p.t("promotions.form.required")}),s.array(s.string()).min(1,{message:p.t("promotions.form.required")})]),required:s.boolean().optional(),disguised:s.boolean().optional(),field_type:s.string().optional()}))}),N=({promotion:e,ruleType:f,handleSubmit:l,isSubmitting:a})=>{const{t:d}=v(),[n,i]=D.useState([]),u=H({defaultValues:{rules:[],type:e.type},resolver:U(M)}),c=u.handleSubmit(l(n));return r.jsx(m.Form,{form:u,children:r.jsxs(K,{onSubmit:c,className:"flex h-full flex-col",children:[r.jsx(m.Body,{children:r.jsx(_,{form:u,ruleType:f,setRulesToRemove:i,rulesToRemove:n,promotion:e})}),r.jsx(m.Footer,{children:r.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[r.jsx(m.Close,{asChild:!0,children:r.jsx(P,{size:"small",variant:"secondary",disabled:a,children:d("actions.cancel")})}),r.jsx(P,{size:"small",type:"submit",isLoading:a,children:d("actions.save")})]})})]})})},V=e=>e.field_type==="number"?parseInt(e.values):e.values,$=({promotion:e,rules:f,ruleType:l})=>{const{handleSuccess:a}=L(),{mutateAsync:d}=A(e.id),{mutateAsync:n}=B(e.id,l),{mutateAsync:i}=C(e.id,l),{mutateAsync:u,isPending:c}=z(e.id,l),b=o=>async function(g){const h={},{rules:x=[]}=g,w=x.filter(t=>t.disguised),F=(o==null?void 0:o.filter(t=>t.disguised))||[];for(const t of w)h[t.attribute]=V(t);for(const t of F)h[t.attribute]=null;const y=x.filter(t=>!t.disguised),j=y.filter(t=>!("id"in t)),R=y.filter(t=>typeof t.id=="string");Object.keys(h).length&&await d({application_method:h}),j.length&&await n({rules:j.map(t=>({attribute:t.attribute,operator:t.operator,values:t.values}))}),o!=null&&o.length&&await i({rule_ids:o.map(t=>t.id).filter(Boolean)}),R.length&&await u({rules:R.map(t=>({id:t.id,attribute:t.attribute,operator:t.operator,values:t.values}))}),a()};return r.jsx(N,{promotion:e,rules:f,ruleType:l,handleSubmit:b,isSubmitting:c})},tt=()=>{var o,g;const e=E();if(!["rules","buy-rules","target-rules"].includes(e.ruleType))throw"invalid page";const{t:l}=v(),a=e.ruleType,d=e.id,n=[],{promotion:i,isPending:u,isError:c,error:b}=q(d);if(i&&(a==="rules"?n.push(...i.rules||[]):a==="target-rules"?n.push(...((o=i==null?void 0:i.application_method)==null?void 0:o.target_rules)||[]):a==="buy-rules"&&n.push(...((g=i.application_method)==null?void 0:g.buy_rules)||[])),c)throw b;return r.jsxs(m,{children:[r.jsx(m.Header,{children:r.jsx(S,{children:l(`promotions.edit.${a}.title`)})}),!u&&i&&r.jsx($,{promotion:i,rules:n,ruleType:a})]})};export{tt as Component};
