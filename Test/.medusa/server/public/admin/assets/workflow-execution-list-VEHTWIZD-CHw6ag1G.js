import{u as x,g as w,a as g}from"./chunk-RPAL6FHW-BXGPwaLO.js";import{S as h}from"./chunk-ADOCJB6L-R89hZut8.js";import{u as b,_ as E}from"./chunk-RAKBTSZ7-Ca3F3okx.js";import{a as k,j as t,b as u,H as j,T as v,r as S,Y as T,k as C}from"./index-CXOwuGYo.js";import"./lodash-C_kVtGbQ.js";import"./chunk-JKKJMCX3-Bu3iNRFH.js";import{S as P}from"./chunk-2RQLKDBF-vhTFQ7rn.js";import{u as _}from"./chunk-C76H5USB-DiXk35rX.js";import{C as y}from"./container-DB8VMxu-.js";import{c as z}from"./index-CXSP-pSV.js";import"./chunk-YEDAFXMB-CK9N38yQ.js";import"./chunk-AOFGTNG6-B2wHsqt5.js";import"./table-CM6uyZRp.js";import"./chunk-WX2SMNCD-24idVSPR.js";import"./plus-mini-kqhqcrwq.js";import"./command-bar-DRtCGwvd.js";import"./index-cF6cl0r7.js";import"./chunk-BKWQ2FHJ-rsi0pu39.js";import"./format-BF4bqZ9w.js";import"./_isIndex-CD5X6UW0.js";import"./x-mark-mini-COfrev7H.js";import"./index-seHRa87r.js";import"./date-picker-D5mo_NtI.js";import"./popover-BFn5jE4U.js";import"./triangle-left-mini-5inixpx6.js";import"./Trans-MivfKE2Z.js";import"./check-pD2HlQS4.js";var c=z(),L=()=>{const{t:e}=u();return S.useMemo(()=>[c.accessor("transaction_id",{header:e("workflowExecutions.transactionIdLabel"),cell:({getValue:s})=>t.jsx(T,{size:"2xsmall",children:s()})}),c.accessor("state",{header:e("fields.state"),cell:({getValue:s})=>{const o=s(),r=g(o),a=w(e,o);return t.jsx(h,{color:r,children:t.jsx("span",{className:"capitalize",children:a})})}}),c.accessor("execution",{header:e("workflowExecutions.progressLabel"),cell:({getValue:s})=>{var i;const o=(i=s())==null?void 0:i.steps;if(!o)return"0 of 0 steps";const r=Object.values(o).filter(n=>n.id!==R),a=r.filter(n=>n.invoke.state==="done");return e("workflowExecutions.stepsCompletedLabel",{completed:a.length,count:r.length})}})],[e])},R="_root",W=({pageSize:e=20,prefix:s})=>{const o=_(["q","offset"],s),{offset:r,...a}=o;return{searchParams:{limit:e,offset:r?parseInt(r):0,...a},raw:o}},m=20,D=()=>{const{t:e}=u(),{searchParams:s,raw:o}=W({pageSize:m}),{workflow_executions:r,count:a,isLoading:i,isError:n,error:f}=x({...s},{placeholderData:C}),p=L(),{table:d}=b({data:r||[],columns:p,count:a,pageSize:m,enablePagination:!0,getRowId:l=>l.id});if(n)throw f;return t.jsxs(y,{className:"divide-y p-0",children:[t.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:t.jsxs("div",{children:[t.jsx(j,{children:e("workflowExecutions.domain")}),t.jsx(v,{className:"text-ui-fg-subtle",size:"small",children:e("workflowExecutions.subtitle")})]})}),t.jsx(E,{table:d,columns:p,count:a,isLoading:i,pageSize:m,navigateTo:l=>`${l.id}`,search:!0,pagination:!0,queryObject:o,noRecords:{message:e("workflowExecutions.list.noRecordsMessage")}})]})},le=()=>{const{getWidgets:e}=k();return t.jsx(P,{widgets:{after:e("workflow.list.after"),before:e("workflow.list.before")},hasOutlet:!1,children:t.jsx(D,{})})};export{le as Component};
