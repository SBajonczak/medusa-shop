import{cb as m,aI as i,s as u,q as s,aU as n}from"./index-CXOwuGYo.js";var v=(a,r)=>{const{data:t,...e}=m({queryFn:async()=>u.admin.payment.listPaymentProviders(a),queryKey:[],...r});return{...t,...e}},c=(a,r,t)=>i({mutationFn:e=>u.admin.payment.capture(r,e),onSuccess:(e,y,d)=>{s.invalidateQueries({queryKey:n.details()}),s.invalidateQueries({queryKey:n.preview(a)})},...t}),l=(a,r,t)=>i({mutationFn:e=>u.admin.payment.refund(r,e),onSuccess:(e,y,d)=>{s.invalidateQueries({queryKey:n.details()}),s.invalidateQueries({queryKey:n.preview(a)})},...t});export{l as a,v as b,c as u};
