import{u as p}from"./chunk-C76H5USB-CDMmkZB7.js";import{u as n}from"./chunk-W7625H47-Br5CflZ4.js";import{a as l}from"./chunk-B4FQDBC3-B8Hcv_2G.js";import{a as i}from"./chunk-MSDRGCRR-BESpLGqj.js";import{b as f,r as x,j as r}from"./index-B2cUNxal.js";import{c as T}from"./index-DFZh3Rvo.js";var C=({prefix:e,pageSize:a=20})=>{const s=p(["offset","q","order","created_at","updated_at"],e),{offset:o,q:c,order:m,created_at:u,updated_at:d}=s;return{searchParams:{limit:a,offset:o?Number(o):0,order:m,created_at:u?JSON.parse(u):void 0,updated_at:d?JSON.parse(d):void 0,q:c},raw:s}},F=()=>n(),t=T(),q=()=>{const{t:e}=f();return x.useMemo(()=>[t.accessor("value",{header:()=>e("fields.value"),cell:({getValue:a})=>r.jsx(i,{text:a()})}),t.accessor("created_at",{header:()=>e("fields.createdAt"),cell:({getValue:a})=>r.jsx(l,{date:a()})}),t.accessor("updated_at",{header:()=>e("fields.updatedAt"),cell:({getValue:a})=>r.jsx(l,{date:a()})})],[e])};export{F as a,q as b,C as u};
