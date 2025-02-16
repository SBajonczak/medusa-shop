import{V as p}from"./chunk-F6ZOHZVB-BElwkLbQ.js";import{u as z,a as H,b as M,c as V}from"./chunk-6TVXQXDC-C1P8beNi.js";import{R as B,b0 as N,j as s,b as A,a8 as K,r as j,J as $,et as G,t as x,B as S,ab as I,k as J,a1 as O,ad as Q,a3 as U}from"./index-CXOwuGYo.js";import{D as X,c as Z}from"./chunk-FPVDKY3X-BbcqtnSd.js";import{K as q}from"./chunk-6HTZNHPT-3-lwbP-z.js";import{R as n,u as W}from"./chunk-AYRG2MQL-YqvrAt84.js";import"./chunk-JGKUKVRC-BtBoq0g8.js";import"./chunk-BKWQ2FHJ-rsi0pu39.js";import"./format-BF4bqZ9w.js";import"./chunk-C76H5USB-DiXk35rX.js";import"./checkbox-B2cxnKzZ.js";import"./index-CXSP-pSV.js";import"./command-bar-DRtCGwvd.js";import"./index-cF6cl0r7.js";import"./table-CM6uyZRp.js";import"./arrow-up-mini-rmkGI0tx.js";import"./date-picker-D5mo_NtI.js";import"./popover-BFn5jE4U.js";import"./x-mark-mini-COfrev7H.js";import"./triangle-left-mini-5inixpx6.js";import"./prompt-f7mTD0rZ.js";var Y=O({sales_channels:Q(U()).optional()}),f=50,C="sc",ss=({location:e})=>{var m;const{t:a}=A(),{handleSuccess:i}=W(),r=K({defaultValues:{sales_channels:((m=e.sales_channels)==null?void 0:m.map(t=>t.id))??[]},resolver:I(Y)}),{setValue:c}=r,[u,y]=j.useState(ts(e)),b=t=>{const o=Object.keys(t);c("sales_channels",o,{shouldDirty:!0,shouldTouch:!0}),y(t)},v=z({pageSize:f,prefix:C}),{sales_channels:T,count:g,isPending:_,isError:E,error:w}=$({...v},{placeholderData:J}),k=H(),L=as(),R=M(),{mutateAsync:F,isPending:P}=G(e.id),D=r.handleSubmit(async t=>{var h;const o=(h=e.sales_channels)==null?void 0:h.map(l=>l.id),d=t.sales_channels??[];await F({add:d.filter(l=>!(o!=null&&o.includes(l))),remove:o==null?void 0:o.filter(l=>!d.includes(l))},{onSuccess:()=>{x.success(a("stockLocations.salesChannels.successToast")),i(`/settings/locations/${e.id}`)},onError:l=>{x.error(l.message)}})});if(E)throw w;return s.jsx(n.Form,{form:r,children:s.jsxs(q,{onSubmit:D,className:"flex h-full flex-col",children:[s.jsxs(n.Header,{children:[s.jsx(n.Title,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.header")})}),s.jsx(n.Description,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.hint")})})]}),s.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:s.jsx(X,{data:T,columns:L,filters:k,emptyState:R,prefix:C,rowSelection:{state:u,onRowSelectionChange:b},pageSize:f,isLoading:_,rowCount:g,layout:"fill",getRowId:t=>t.id})}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(S,{size:"small",variant:"secondary",type:"button",children:a("actions.cancel")})}),s.jsx(S,{size:"small",isLoading:P,type:"submit",children:a("actions.save")})]})})]})})},es=Z(),as=()=>{const e=V();return j.useMemo(()=>[es.select(),...e],[e])};function ts(e){var a;return((a=e.sales_channels)==null?void 0:a.reduce((i,r)=>(i[r.id]=!0,i),{}))??{}}var _s=()=>{const{location_id:e}=B(),{stock_location:a,isPending:i,isError:r,error:c}=N(e,{fields:"id,*sales_channels"}),u=!i&&!!a;if(r)throw c;return s.jsx(n,{children:u&&s.jsx(ss,{location:a})})};export{_s as Component};
