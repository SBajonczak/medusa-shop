import{s as c}from"./chunk-BF3VCHXD-YEIYJiBe.js";import{aI as n,s as r,q as e,cT as u,cN as v}from"./index-B2cUNxal.js";var d="fulfillment_sets",s=v(d),f=(a,t)=>n({mutationFn:()=>r.admin.fulfillmentSet.delete(a),onSuccess:async(i,l,y)=>{await e.invalidateQueries({queryKey:s.detail(a)}),await e.invalidateQueries({queryKey:s.lists()}),await e.invalidateQueries({queryKey:u.all}),await e.invalidateQueries({queryKey:c.all})},...t}),K=(a,t)=>n({mutationFn:i=>r.admin.fulfillmentSet.createServiceZone(a,i),onSuccess:async(i,l,y)=>{await e.invalidateQueries({queryKey:s.lists()}),await e.invalidateQueries({queryKey:u.all})},...t}),Q=(a,t,i)=>n({mutationFn:l=>r.admin.fulfillmentSet.updateServiceZone(a,t,l),onSuccess:async(l,y,o)=>{await e.invalidateQueries({queryKey:s.lists()}),await e.invalidateQueries({queryKey:u.all})},...i}),q=(a,t,i)=>n({mutationFn:()=>r.admin.fulfillmentSet.deleteServiceZone(a,t),onSuccess:async(l,y,o)=>{await e.invalidateQueries({queryKey:s.lists()}),await e.invalidateQueries({queryKey:c.lists()}),await e.invalidateQueries({queryKey:u.all})},...i});export{q as a,K as b,Q as c,f as u};
