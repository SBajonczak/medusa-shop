import{u as b}from"./chunk-C76H5USB-CDMmkZB7.js";import{b as y,bf as m,bg as g,J as h}from"./index-B2cUNxal.js";var S=({prefix:t,pageSize:s=20})=>{const r=b(["offset","order","q","created_at","updated_at","sales_channel_id","category_id","collection_id","is_giftcard","tag_id","type_id","status","id"],t),{offset:d,sales_channel_id:o,created_at:p,updated_at:u,category_id:i,collection_id:e,tag_id:c,type_id:n,is_giftcard:l,status:a,order:f,q:_}=r;return{searchParams:{limit:s,offset:d?Number(d):0,sales_channel_id:o==null?void 0:o.split(","),created_at:p?JSON.parse(p):void 0,updated_at:u?JSON.parse(u):void 0,category_id:i==null?void 0:i.split(","),collection_id:e==null?void 0:e.split(","),is_giftcard:l?l==="true":void 0,order:f,tag_id:c?c.split(","):void 0,type_id:n==null?void 0:n.split(","),status:a==null?void 0:a.split(","),q:_},raw:r}},T=t=>{const{t:s}=y(),r=t==null?void 0:t.includes("product_types"),{product_types:d}=m({limit:1e3,offset:0},{enabled:!r}),o=t==null?void 0:t.includes("product_tags"),{product_tags:p}=g({limit:1e3,offset:0}),u=t==null?void 0:t.includes("sales_channel_id"),{sales_channels:i}=h({limit:1e3,fields:"id,name"},{enabled:!u});t==null||t.includes("categories"),t==null||t.includes("collections");let e=[];if(d&&!r){const l={key:"type_id",label:s("fields.type"),type:"select",multiple:!0,options:d.map(a=>({label:a.value,value:a.id}))};e=[...e,l]}if(p&&!o){const l={key:"tag_id",label:s("fields.tag"),type:"select",multiple:!0,options:p.map(a=>({label:a.value,value:a.id}))};e=[...e,l]}if(i){const l={key:"sales_channel_id",label:s("fields.salesChannel"),type:"select",multiple:!0,options:i.map(a=>({label:a.name,value:a.id}))};e=[...e,l]}const c={key:"status",label:s("fields.status"),type:"select",multiple:!0,options:[{label:s("products.productStatus.draft"),value:"draft"},{label:s("products.productStatus.proposed"),value:"proposed"},{label:s("products.productStatus.published"),value:"published"},{label:s("products.productStatus.rejected"),value:"rejected"}]},n=[{label:s("fields.createdAt"),key:"created_at"},{label:s("fields.updatedAt"),key:"updated_at"}].map(l=>({key:l.key,label:l.label,type:"date"}));return e=[...e,c,...n],e};export{T as a,S as u};
