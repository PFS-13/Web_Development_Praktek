import{j as e,q as g,r as d,W as N,Y as b}from"./app-CXMLlDzf.js";/* empty css             */import{T as f}from"./Topbar-DZxnKb94.js";import{M as y}from"./Modal-u9LjpSWo.js";import{P as C}from"./PrimaryButton-nlJQdIAK.js";import"./Dropdown-Deg8DapM.js";import"./transition-ClaWFr8Q.js";const M=a=>(console.log("actor asdarill",a),a.actor.map((i,l)=>e.jsx("div",{children:e.jsxs("div",{className:"media-element",children:[e.jsx("img",{src:i.link_photo,alt:""}),e.jsx("p",{className:"title",children:i.actor_name})]})},l)));function D(a){const n=g().props.auth.user,[i,l]=d.useState(!1);console.log("detail page ",n),console.log("props :",a);const[r,x]=d.useState(!1),o=()=>{n?x(!r):l(!0)},s=a.myMovie,{data:c,setData:m,post:h,processing:j,errors:k,reset:u}=N({rating:"",comment:""}),p=t=>{t.preventDefault(),h(route("comment"),{onFinish:()=>u("password","password_confirmation")})};return e.jsxs("div",{children:[e.jsx(b,{title:s.title}),e.jsx(f,{}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"movie-title",children:[e.jsx("div",{className:"real-title",children:s.title}),e.jsx("div",{className:"original-title",children:s.alternative_title})]}),e.jsxs("div",{className:"detail",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:s.link_posters})}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"genre",children:s.genres.split(", ").map((t,v)=>e.jsx("span",{children:t},v))}),e.jsxs("div",{className:"year",children:[e.jsx("strong",{children:"Year : "})," ",s.year]}),e.jsxs("div",{className:"availability",children:[e.jsx("strong",{children:"Availability :"})," ",s.availability]}),e.jsx("div",{className:"description",children:s.synopsis})]})]}),e.jsx("div",{className:"title",children:"Actor"}),e.jsx("div",{className:"media-scroller snaps-inline",children:e.jsx(M,{actor:a.actors})}),e.jsx("div",{className:"title",children:"Trailer"}),e.jsx("div",{className:"title",children:"Comments"}),e.jsxs("div",{className:"comment-section",children:[i&&e.jsxs("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:["Anda harus login untuk menmabahkan komentar",e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>l(!1)})]}),e.jsx("button",{id:"openModalBtn",className:"button_comment",onClick:o,children:"Leave a Comment"}),e.jsx("button",{id:"openModalBtn",className:"button_filter",children:"Filter"}),e.jsx("div",{className:"comments-box"})]}),e.jsx(y,{show:r,onClose:o,children:e.jsxs("form",{onSubmit:p,id:"commentForm",className:"p-4",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Leave a Comment"}),e.jsx("label",{htmlFor:"rating",children:"Rating:"}),e.jsx("input",{type:"",id:"rating",name:"rating",value:c.rating,onChange:t=>m("rating",t.target.value),required:!0}),e.jsx("label",{htmlFor:"comment",children:"Comment:"}),e.jsx("textarea",{id:"comment",name:"comment",value:c.comment,onChange:t=>m("comment",t.target.value),rows:"4",required:!0}),e.jsx(C,{className:"ms-4",disabled:j,children:"Submit"})]})})]})]})}export{D as default};