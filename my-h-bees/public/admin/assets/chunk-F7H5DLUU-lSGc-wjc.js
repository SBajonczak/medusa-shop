import{b as c,u as i,aP as u,t as a}from"./index-B2cUNxal.js";import{u as l}from"./use-prompt-B4umtCdS.js";var f=t=>{const{t:e}=c(),s=i(),r=l(),{mutateAsync:n}=u(t.id);return async()=>{await r({title:e("general.areYouSure"),description:e("categories.delete.confirmation",{name:t.name}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await n(void 0,{onSuccess:()=>{a.success(e("categories.delete.successToast",{name:t.name})),s("/categories",{replace:!0})},onError:o=>{a.error(o.message)}})}};export{f as u};
