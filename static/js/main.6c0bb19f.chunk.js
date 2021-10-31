(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(6),r=n.n(o),s=n(3),i=n(5),a=n(15),u=n(14),l="CHANGE_USER",d="CLEAR_USER",b=function(e){return function(t){return t(function(e){return{type:l,payload:e}}(e))}},j=function(){return function(e){return e({type:d})}},f=0,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.payload;case d:return 0;default:return e}},p=n(2),h=n(10),_="https://mate.academy/students-api";var m="LOAD_ACTIVE",v="LOAD_COMPLETED",x="SHOW_ALL",y="LOAD_TODOS",T=v,L=m,C=x,N="DELETE_TODO",g="FILTER_TODOS",S={todos:[],visibleTodos:[],filterSettings:x},U=function(e){return{type:y,payload:e}},E=function(e){return{type:C,payload:e}},I=function(e){return{type:L,payload:e}},A=function(e){return{type:T,payload:e}},k=function(e){return{type:N,payload:e}},w=function(e){return{type:g,payload:e}},D=function(){return function(e){return fetch("".concat(_,"/todos")).then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return e.userId-t.userId}))})).then((function(t){return e(U(t))}))}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{filterSettings:x,todos:Object(h.a)(t.payload),visibleTodos:Object(h.a)(t.payload)};case L:return Object(p.a)(Object(p.a)({},e),{},{filterSettings:m,visibleTodos:e.todos.filter((function(e){return!e.completed&&e.title.toLowerCase().includes(t.payload.toLowerCase())}))});case T:return Object(p.a)(Object(p.a)({},e),{},{filterSettings:v,visibleTodos:e.todos.filter((function(e){return e.completed&&e.title.toLowerCase().includes(t.payload.toLowerCase())}))});case C:return Object(p.a)(Object(p.a)({},e),{},{filterSettings:C,visibleTodos:Object(h.a)(e.todos)});case N:return Object(p.a)(Object(p.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload})),visibleTodos:e.visibleTodos.filter((function(e){return e.id!==t.payload}))});case g:return Object(p.a)(Object(p.a)({},e),{},{visibleTodos:e.todos.filter((function(e){return e.title.toLowerCase().includes(t.payload.toLowerCase())})).filter((function(t){return(e.filterSettings!==L||!t.completed)&&!(e.filterSettings===T&&!t.completed)}))});default:return e}},F=function(e){return e.todos.visibleTodos},H=function(e){return e.selectedUserId},J=Object(i.combineReducers)({selectedUserId:O,todos:R}),M=Object(i.createStore)(J,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(a.a))),W=(n(27),n(8)),B=n(9),G=n.n(B),P=n(16),V=(n(30),n(1)),q=Object(s.b)((function(e){return{todos:F(e),selectedUserId:H(e)}}))((function(e){var t=e.selectedUserId,n=e.todos,o=Object(c.useState)(""),r=Object(W.a)(o,2),i=r[0],a=r[1],u=Object(s.c)(),l=Object(c.useCallback)(Object(P.debounce)((function(e){return u(w(e))}),1e3),[]);Object(c.useEffect)((function(){u(D())}),[]);return Object(V.jsxs)("div",{className:"TodoList",children:[Object(V.jsxs)("div",{className:"TodoList__control",children:[Object(V.jsx)("input",{className:"TodoList__input",type:"text",placeholder:"Search",value:i,onChange:function(e){a(e.target.value),l(e.target.value)}}),Object(V.jsxs)("select",{className:"TodoList__select",onChange:function(e){return function(e){switch(e){case x:u(E(i));break;case m:u(I(i));break;case v:u(A(i))}}(e.target.value)},children:[Object(V.jsx)("option",{value:x,children:"All"}),Object(V.jsx)("option",{value:m,children:"Active"}),Object(V.jsx)("option",{value:v,children:"Completed"})]})]}),Object(V.jsx)("h2",{children:"Todos:"}),Object(V.jsx)("div",{className:"TodoList__list-container",children:Object(V.jsx)("ul",{className:"TodoList__list",children:n.map((function(e){return Object(V.jsxs)("li",{className:G()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(V.jsxs)("label",{htmlFor:"input",children:[Object(V.jsx)("input",{name:"input",type:"checkbox",readOnly:!0}),Object(V.jsx)("p",{children:e.title})]}),Object(V.jsxs)("div",{className:"buttons-block",children:[Object(V.jsx)("button",{type:"button",className:G()({button:!0,"TodoList__user-button":!0}),onClick:function(){return u(k(e.id))},children:"Delete todo"}),Object(V.jsx)("button",{className:G()({button:!0,"TodoList__user-button":!0,"TodoList__user-button--selected":t===e.userId}),type:"button",onClick:function(){return n=e.userId,void u(n!==t?b(n):j());var n},children:"User#".concat(e.userId.toString())})]})]},e.id)}))})})]})})),z=(n(32),Object(s.b)((function(e){return{currentUserId:H(e)}}))((function(e){var t=e.currentUserId,n=Object(c.useState)(null),o=Object(W.a)(n,2),r=o[0],i=o[1],a=Object(s.c)();return Object(c.useEffect)((function(){var e;(e=t,fetch("".concat(_,"/users/").concat(e)).then((function(e){return e.json()})).catch((function(){return{id:0,name:""}})).then((function(e){return e}))).then((function(e){return i(e)}))}),[t]),r&&Object(V.jsxs)("div",{className:"CurrentUser",children:[Object(V.jsx)("h2",{className:"CurrentUser__title",children:Object(V.jsx)("span",{children:r.id?"Selected user: ".concat(r.id):"Could not find user"})}),Object(V.jsx)("h3",{className:"CurrentUser__name",children:r.name?r.name:"No information about this user"}),Object(V.jsx)("p",{className:"CurrentUser__email",children:r.email}),Object(V.jsx)("p",{className:"CurrentUser__phone",children:r.phone}),Object(V.jsx)("button",{className:"CurrentUser__clear",type:"button",onClick:function(){return a(j())},children:"Clear"})]})}))),K=function(){var e=Object(s.d)(H);return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)("div",{className:"App__sidebar",children:Object(V.jsx)(q,{})}),Object(V.jsx)("div",{className:"App__content",children:Object(V.jsx)("div",{className:"App__content-container",children:e?Object(V.jsx)(z,{}):"No user selected"})})]})},Q=function(){return Object(V.jsx)(s.a,{store:M,children:Object(V.jsx)(K,{})})};r.a.render(Object(V.jsx)(Q,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6c0bb19f.chunk.js.map