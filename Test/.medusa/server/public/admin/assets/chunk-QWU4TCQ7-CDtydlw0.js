import{u as _,a as O,b as H}from"./chunk-ZJRFL6ZN-SNXnUw0o.js";import{u as L,_ as M}from"./chunk-RAKBTSZ7-Ca3F3okx.js";import{b as N,r as l,dv as q,k as Q,j as o,B as k}from"./index-CXOwuGYo.js";import{S as X,c as Z}from"./chunk-AYRG2MQL-YqvrAt84.js";import{c as J}from"./index-CXSP-pSV.js";import{C as y}from"./checkbox-B2cxnKzZ.js";var u=50,m="cg",j=t=>t.reduce((e,r)=>(e[r.id]=!0,e),{}),se=({state:t,setState:e,type:r})=>{const{t:a}=N(),[c,p]=l.useState(j(t)),[f,h]=l.useState(t);l.useEffect(()=>{p(j(t)),h(t)},[t]);const{searchParams:w,raw:v}=_({pageSize:u,prefix:m}),{customer_groups:i,count:S,isLoading:I,isError:P,error:R}=q({...w,fields:"id,name,customers.id"},{placeholderData:Q}),E=n=>{const g=typeof n=="function"?n(c):n,x=Object.keys(c),b=Object.keys(g),A=b.filter(s=>!x.includes(s)),D=x.filter(s=>!b.includes(s)),F=(i==null?void 0:i.filter(s=>A.includes(s.id)).map(s=>({id:s.id,name:s.name})))||[],B=f.filter(s=>!D.includes(s.id));h([...B,...F]),p(g)},G=()=>{e(f)},z=O(),C=U(),{table:T}=L({data:i||[],columns:C,count:S,enablePagination:!0,enableRowSelection:!0,getRowId:n=>n.id,rowSelection:{state:c,updater:E},pageSize:u,prefix:m}),d=r==="focus"?X:Z;if(P)throw R;return o.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[o.jsx(d.Body,{className:"min-h-0 p-0",children:o.jsx(M,{table:T,columns:C,pageSize:u,count:S,isLoading:I,filters:z,orderBy:[{key:"name",label:a("fields.name")},{key:"created_at",label:a("fields.createdAt")},{key:"updated_at",label:a("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:m,queryObject:v})}),o.jsxs(d.Footer,{children:[o.jsx(d.Close,{asChild:!0,children:o.jsx(k,{variant:"secondary",size:"small",type:"button",children:a("actions.cancel")})}),o.jsx(k,{type:"button",size:"small",onClick:G,children:a("actions.save")})]})]})},K=J(),U=()=>{const t=H();return l.useMemo(()=>[K.display({id:"select",header:({table:e})=>o.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>o.jsx(y,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...t],[t])};export{se as P};
