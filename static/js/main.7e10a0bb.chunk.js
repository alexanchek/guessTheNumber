(this.webpackJsonpguess_number=this.webpackJsonpguess_number||[]).push([[0],{24:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"createNumber",(function(){return d})),r.d(n,"setUserNumber",(function(){return p})),r.d(n,"setWin",(function(){return j})),r.d(n,"setTrials",(function(){return S})),r.d(n,"SetHelperMessage",(function(){return m}));var c,a=r(0),u=r(5),s=r.n(u),i=r(4),o=r(3),b=r(9),l=r.n(b),E=r(10);!function(e){e.CREATE_NUMBER="CREATE_NUMBER",e.SET_USERNUMBER="SET_USERNUMBER",e.SET_WIN="SET_WIN",e.SET_TRIALS="SET_TRIALS",e.RESET_TRIALS="RESET_TRIALS",e.SET_HELPER_MESSAGE="SET_HELPER_MESSAGE"}(c||(c={}));var d=function(){return function(e){var t=String(Math.ceil(10*Math.random()));e({type:c.CREATE_NUMBER,payload:t}),e({type:c.SET_WIN,payload:!1}),e({type:c.RESET_TRIALS}),e({type:c.SET_USERNUMBER,payload:""})}},p=function(e){return function(t){t({type:c.SET_USERNUMBER,payload:e})}},j=function(e){return function(t){t({type:c.SET_WIN,payload:e})}},S=function(e,t){return function(){var r=Object(E.a)(l.a.mark((function r(n){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n({type:c.SET_TRIALS}),parseInt(e)===parseInt(t)?n(j(!0)):(n(j(!1)),parseInt(e)>parseInt(t)?n(m("LESS")):n(m("")));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(e){return"LESS"===e?function(e){e({type:c.SET_HELPER_MESSAGE,payload:"The number must be greater!"})}:function(e){e({type:c.SET_HELPER_MESSAGE,payload:"The number must be less!"})}},f=function(){var e=Object(i.b)();return Object(o.bindActionCreators)(n,e)},T=i.c,O=r(1),y={btn_pd2:{paddingTop:"2rem"}},h=function(e){var t=e.text,r=e.action;return Object(O.jsx)("div",{style:y.btn_pd2,children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:r,children:t})})},_=r(13),R={btn_pd2:{paddingTop:"2rem"}},v=function(){var e=f(),t=e.setUserNumber,r=e.setTrials,n=T((function(e){return e.number})),c=n.numberUser,u=n.numberComputer,s=n.win,i=Object(a.useState)(""),o=Object(_.a)(i,2),b=o[0],l=o[1];return Object(O.jsx)("div",{style:R.btn_pd2,children:Object(O.jsx)("form",{id:"form-control",children:Object(O.jsx)("input",{className:"form-control",type:"number",placeholder:"Your turn, sir!",value:c,onChange:function(e){l(e.target.value),t(e.target.value)},onKeyPress:function(e){if("Enter"===e.key){if(e.preventDefault(),s)return;t(b),r(u,c)}}})})})},g={container:{margin:"auto"},bigSize:{width:"40rem",height:"40rem"}},x=function(){var e=f(),t=e.createNumber,r=e.setTrials,n=T((function(e){return e.number})),c=n.numberComputer,a=n.numberUser,u=n.win,s=n.trials,i=n.helperMessage;return Object(O.jsx)("div",{style:g.container,children:Object(O.jsx)("div",{className:"card",style:g.bigSize,children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("div",{className:"card-title",style:g.title,children:Object(O.jsx)("h2",{children:"Guess a number"})}),"computer guessed the number. Are you able to guess it?",Object(O.jsx)(v,{}),Object(O.jsx)(h,{text:"Let's try it!",action:function(){u||r(c,a)}}),Object(O.jsx)(h,{text:"Please, refresh the number",action:function(){t()}}),!u&&s>0?Object(O.jsxs)("div",{children:[" ",i," You tried ",s," times"]}):null,u?Object(O.jsxs)("div",{children:["Congratulations! You win! you tried ",s," times."]}):null]})})})},N={center:{background:"#999999",display:"flex",position:"absolute",top:0,bottom:0,right:0,left:0}},M=function(){var e=f().createNumber;return Object(a.useEffect)((function(){e()}),[]),Object(O.jsx)("div",{style:N.center,children:Object(O.jsx)(x,{})})},U=r(11),A=r(2),I={numberComputer:"0",numberUser:"0",win:!1,trials:0,helperMessage:null},L=Object(o.combineReducers)({number:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.CREATE_NUMBER:return Object(A.a)(Object(A.a)({},e),{},{numberComputer:t.payload});case c.SET_USERNUMBER:return Object(A.a)(Object(A.a)({},e),{},{numberUser:t.payload});case c.SET_WIN:return Object(A.a)(Object(A.a)({},e),{},{win:t.payload});case c.SET_TRIALS:return Object(A.a)(Object(A.a)({},e),{},{trials:e.trials+1});case c.RESET_TRIALS:return Object(A.a)(Object(A.a)({},e),{},{trials:0});case c.SET_HELPER_MESSAGE:return Object(A.a)(Object(A.a)({},e),{},{helperMessage:t.payload});default:return e}}}),w=r(12),C=Object(o.createStore)(L,Object(w.composeWithDevTools)(Object(o.applyMiddleware)(U.a)));s.a.render(Object(O.jsx)(i.a,{store:C,children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7e10a0bb.chunk.js.map