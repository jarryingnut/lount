(this["webpackJsonplount-frontend"]=this["webpackJsonplount-frontend"]||[]).push([[0],{226:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(56),s=n.n(o),c=n(78),i=n(26),l=n(271),u=n(14),d=n(184),j=n(54),b=n(136),h=n(227),m=n(220),O=n(166),g=n(167),x=n(75),p=n(5),f=Object(d.a)({uri:"/graphql/"});f=Object(O.a)((function(e,t){var n=t.headers,a=localStorage.getItem("chat-token");return{headers:Object(u.a)(Object(u.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})).concat(f);var v=window.location.host,w=new g.a({uri:"ws://".concat(v,"/graphql/"),options:{reconnect:!0,connectionParams:{Authorization:"Bearer ".concat(localStorage.getItem("chat-token"))}}}),y=Object(j.split)((function(e){var t=e.query,n=Object(x.e)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),w,f),S=new b.a({link:y,cache:new h.a});function C(e){return Object(p.jsx)(m.a,Object(u.a)({client:S},e))}var E,A,k,R,U,_,$,M,P,z=n(278),L=n(254),I=n(37),D=n.n(I),T=n(57),q=n(6),Y=n(257),G=n(277),W=n(64),B=n(83),N=Object(B.a)(E||(E=Object(W.a)(["\n  query login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      username\n      email\n      createdAt\n      token\n      \n    }\n  }\n"]))),J=Object(B.a)(A||(A=Object(W.a)(["\nmutation register(\n  $username: String!\n  $email: String!\n  $password: String!\n  $confirmPassword: String!\n  $imageUrl: String\n) {\n  register(\n    username: $username\n    email: $email\n    password: $password\n    confirmPassword: $confirmPassword\n    imageUrl: $imageUrl\n  ) {\n    username\n    email\n    createdAt\n  }\n}\n"]))),F=Object(B.a)(k||(k=Object(W.a)(["\nquery getUsers {\n  getUsers {\n    username\n    createdAt\n    token\n    imageUrl\n    latestMessage {\n        uuid\n        from\n        to\n        content\n        createdAt\n      }\n  }\n}\n"]))),V=Object(B.a)(R||(R=Object(W.a)(["\n  query getMessages($from: String!) {\n    getMessages(from: $from) {\n      uuid\n      from\n      to\n      content\n      createdAt\n      reactions {\n        uuid\n        content\n      }\n    }\n  }\n"]))),Q=Object(B.a)(U||(U=Object(W.a)(["\n  mutation sendMessage($to: String!, $content: String!) {\n    sendMessage(to: $to, content: $content) {\n      uuid\n      from\n      to\n      content\n      createdAt\n    }\n  }\n"]))),H=Object(B.a)(_||(_=Object(W.a)(["\n  mutation reactToMessage($uuid: String!, $content: String!) {\n    reactToMessage(uuid: $uuid, content: $content) {\n      uuid\n    }\n  }\n"]))),K=Object(B.a)($||($=Object(W.a)(["\nsubscription newMessage {\n  newMessage {\n    uuid\n    from\n    to\n    content\n    createdAt\n  }\n}\n"]))),X=Object(B.a)(M||(M=Object(W.a)(["\nsubscription newReaction {\n  newReaction {\n    uuid\n    content\n    message {\n      uuid\n      from\n      to\n    }\n  }\n}\n"]))),Z=n(256),ee=n(272),te=n(28),ne=n(258),ae=n(259),re=n(276),oe=n(16),se=Object(a.createContext)(void 0),ce=Object(a.createContext)(void 0),ie=function(e,t){var n,a,r,o=t.payload,s=o.username,c=o.message,i=o.messages,l=o.reaction;switch(t.type){case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});case"SET_USER_MESSAGES":return r=(a=Object(oe.a)(e.users)).findIndex((function(e){return e.username===s})),a[r]=Object(u.a)(Object(u.a)({},a[r]),{},{messages:i}),Object(u.a)(Object(u.a)({},e),{},{users:a});case"SET_SELECTED_USER":return a=e.users.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{selected:e.username===t.payload})})),Object(u.a)(Object(u.a)({},e),{},{users:a});case"ADD_MESSAGE":r=(a=Object(oe.a)(e.users)).findIndex((function(e){return e.username===s})),c.reactions=[];var d=Object(u.a)(Object(u.a)({},a[r]),{},{messages:a[r].messages?[c].concat(Object(oe.a)(a[r].messages)):null,latestMessage:c});return a[r]=d,Object(u.a)(Object(u.a)({},e),{},{users:a});case"ADD_REACTION":r=(a=Object(oe.a)(e.users)).findIndex((function(e){return e.username===s}));var j=Object(u.a)({},a[r]),b=null===(n=j.messages)||void 0===n?void 0:n.findIndex((function(e){return e.uuid===l.message.uuid}));if(b>-1){var h,m=Object(oe.a)(j.messages),O=Object(oe.a)(null===(h=m[b])||void 0===h?void 0:h.reactions),g=O.findIndex((function(e){return e.uuid===l.uuid}));g>-1?O[g]=l:O=[].concat(Object(oe.a)(O),[l]),m[b]=Object(u.a)(Object(u.a)({},m[b]),{},{reactions:O}),j=Object(u.a)(Object(u.a)({},j),{},{messages:m}),a[r]=j}return Object(u.a)(Object(u.a)({},e),{},{users:a});default:throw new Error("Unknown action type")}},le=function(e){var t=e.children,n=Object(a.useReducer)(ie,{users:null}),r=Object(q.a)(n,2),o=r[0],s=r[1];return Object(p.jsx)(ce.Provider,{value:s,children:Object(p.jsx)(se.Provider,{value:o,children:t})})},ue=r.a.memo(r.a.memo(le)),de=function(){return Object(a.useContext)(se)},je=function(){return Object(a.useContext)(ce)},be=n(170),he=n.n(be),me=n(72),Oe=n.n(me),ge=n(171),xe=Object(a.createContext)(void 0),pe=Object(a.createContext)(void 0),fe=localStorage.getItem("chat-token");if(fe){var ve=Object(ge.a)(fe),we=new Date(1e3*ve.exp);new Date>we?localStorage.removeItem("chat-token"):P=ve}else console.log("No token found");var ye=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("chat-token",t.payload.token),Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case"LOGOUT":return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{user:null});default:throw new Error("Unknown action type")}},Se=function(e){var t=e.children,n=Object(a.useReducer)(ye,{user:P}),r=Object(q.a)(n,2),o=r[0],s=r[1];return Object(p.jsx)(pe.Provider,{value:s,children:Object(p.jsx)(xe.Provider,{value:o,children:t})})},Ce=function(){return Object(a.useContext)(xe)},Ee=function(){return Object(a.useContext)(pe)},Ae=n(269),ke=n(252),Re=n(185),Ue=n(270),_e=n(255),$e=n(174);function Me(e){var t=e.message,n=Ce(),r=null===n||void 0===n?void 0:n.user,o=t.from===r.username,s=!o,c=Object(a.useState)(!1),i=Object(q.a)(c,2),l=i[0],u=i[1],d=Object(oe.a)(new Set(t.reactions&&t.reactions.map((function(e){return e.content})))),j=Object(G.a)(H,{onError:function(e){return console.log(e)},onCompleted:function(e){return u(!1)}}),b=Object(q.a)(j,1)[0],h=Object(p.jsxs)(Ae.a,{placement:"top",isOpen:l,children:[Object(p.jsx)(Ae.c,{children:Object(p.jsx)(ke.a,{"aria-label":"reactionButton",onClick:function(){return u(!l)},color:"gray.300",isRound:!0,bg:"whiteAlpha.500",_focus:{boxShadow:"none"},icon:Object(p.jsx)($e.a,{})})}),Object(p.jsx)(Ae.b,{display:"flex",px:"0",py:"1",alignItems:"center",width:"40",borderRadius:"3xl",_focus:{boxShadow:"none"},children:["\u2764\ufe0f","\ud83d\ude06","\ud83d\ude2f","\ud83d\ude22","\ud83d\ude21","\ud83d\udc4d","\ud83d\udc4e"].map((function(e){return Object(p.jsx)(Re.a,{display:"contents",onClick:function(){return function(e){b({variables:{uuid:t.uuid,content:e}}),console.log(e),u(!l)}(e)},_hover:{fontSize:"2xl"},children:"".concat(e,"  ")},e)}))})]});return Object(p.jsx)(L.a,{width:"100%",mb:"5",children:Object(p.jsxs)(ee.a,{mx:"5",my:"5",mb:"0",ml:Oe()({auto:o}),mr:Oe()({auto:s}),justifyContent:"flex-start",children:[o&&h,Object(p.jsx)(Ue.a,{placement:"auto",m:"0",label:he()(t.createdAt).format("MMMM DD, YYYY @ h:mm a"),fontSize:"sm",hasArrow:!0,bg:"gray.300",children:Object(p.jsxs)(_e.a,{py:"1.5",px:"3",borderRadius:"2xl",position:"relative",bgColor:Oe()({"blue.400":o,"green.400":s}),children:[t.reactions.length>0&&Object(p.jsxs)(_e.a,{position:"absolute",right:"-10px",bottom:"-20px",bg:"gray.50",p:"1",borderRadius:"3xl",fontSize:"xs",color:"gray.500",children:[d," ",t.reactions.length]}),Object(p.jsx)(Z.a,{color:"whiteAlpha.900",children:t.content},"message.uuid")]})}),s&&h]})})}var Pe=r.a.memo(Me),ze=n(89),Le=n(178);var Ie=function(){var e,t=de(),n=je(),r=null===t||void 0===t||null===(e=t.users)||void 0===e?void 0:e.find((function(e){return!0===e.selected})),o=null===r||void 0===r?void 0:r.messages,s=Object(Y.a)(V),c=Object(q.a)(s,2),i=c[0],l=c[1],u=l.loading,d=l.data,j=Object(G.a)(Q,{onError:function(e){return console.log(e)}}),b=Object(q.a)(j,1)[0];Object(a.useEffect)((function(){r&&!r.messages&&i({variables:{from:r.username}})}),[r]),Object(a.useEffect)((function(){d&&n({type:"SET_USER_MESSAGES",payload:{username:null===r||void 0===r?void 0:r.username,messages:d.getMessages}})}),[d]);var h,m,O,g=Object(ze.a)({initialValues:{messageContent:""},onSubmit:function(){var e=Object(T.a)(D.a.mark((function e(t,n){var a,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.messageContent,o=n.resetForm,""!==a.trim()&&r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,b({variables:{to:null===r||void 0===r?void 0:r.username,content:a}});case 6:o();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()});return o||u?u?h=Object(p.jsx)("p",{children:"Loading.."}):o.length>0?h=o.map((function(e){return Object(p.jsx)(Pe,{message:e},e.uuid)})):0===o.length&&(m=Object(p.jsx)("p",{children:"You are now connected! send your first message!"})):(h=Object(p.jsx)(Z.a,{fontWeight:"light",color:"gray.500",children:"Select a friend"}),O=!0),Object(p.jsxs)(ee.c,{width:"70%",justifyContent:"flex-start",bgColor:"whiteAlpha.900",children:[Object(p.jsx)(ee.c,{overflowY:"scroll",width:"100%",height:"90%",flexDirection:"column-reverse",children:h}),Object(p.jsx)(te.a.form,{width:"100%",onSubmit:g.handleSubmit,mt:"10px",children:Object(p.jsxs)(ne.a,{mx:"5",mb:"2",height:"10%",width:"95%",children:[Object(p.jsx)(ae.b,{children:Object(p.jsx)(Le.a,{}),as:"button",type:"submit",fontSize:"xl"}),Object(p.jsx)(re.a,{type:"text",name:"messageContent",onChange:g.handleChange,value:g.values.messageContent,"area-label":"messageContent",placeholder:Oe()({"You are now connected! send your first message!":m}),bg:"gray.100",focusBorderColor:"none",borderColor:"gray.50",isDisabled:O})]})})]})},De=n(260),Te=n(261);var qe=function(){var e,t,n=je(),a=de(),r=null===a||void 0===a?void 0:a.users,o=null===r||void 0===r||null===(e=r.find((function(e){return!0===e.selected})))||void 0===e?void 0:e.username,s=Object(De.a)(F,{onError:function(e){return console.log(e)},onCompleted:function(e){return n({type:"SET_USERS",payload:e.getUsers})}}).loading;return!r||s?t=Object(p.jsx)("p",{children:"Loading.."}):0===r.length?t=Object(p.jsx)("p",{children:"No users have joined yet"}):r.length>0&&(t=r.map((function(e){var t=o===e.username;return Object(p.jsxs)(L.a,{width:"100%",as:"button",p:"3",justifyContent:"flex-start",_hover:{bg:"gray.200"},onClick:function(){return n({type:"SET_SELECTED_USER",payload:e.username})},bg:Oe()({"gray.200":t}),children:[Object(p.jsx)(Te.a,{src:e.imageUrl||"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",mx:"3",size:"md"}),Object(p.jsxs)(ee.c,{alignItems:"flex-start",isTruncated:!0,children:[Object(p.jsx)(Z.a,{fontSize:"md",children:e.username}),Object(p.jsx)(Z.a,{fontWeight:"thin",fontSize:"sm",children:e.latestMessage?e.latestMessage.content:"You are now connected!"})]})]},e.username)}))),Object(p.jsx)(ee.c,{bgColor:"gray.100",width:"30%",overflowY:"scroll",children:t})};function Ye(){var e=je(),t=Ce().user,n=Object(z.a)(K),r=n.data,o=n.error,s=Object(z.a)(X),c=s.data,i=s.error;return Object(a.useEffect)((function(){if(o&&console.log(o),r){var n=r.newMessage,a=t.username===n.to?n.from:n.to;e({type:"ADD_MESSAGE",payload:{username:a,message:n}})}}),[o,r]),Object(a.useEffect)((function(){if(i&&console.log(i),c){var n=c.newReaction,a=t.username===n.message.to?n.message.from:n.message.to;e({type:"ADD_REACTION",payload:{username:a,reaction:n}})}}),[i,c]),Object(p.jsxs)(L.a,{m:"24",bg:"white.100",height:"lg",children:[Object(p.jsx)(qe,{}),Object(p.jsx)(Ie,{})]})}var Ge=n(101),We=n(102),Be=n(181),Ne=n(268),Je=n(262),Fe=n(103),Ve=n(263),Qe=function(){var e=Object(a.useState)(),t=Object(q.a)(e,2),n=t[0],r=t[1],o=Object(i.g)(),s=Object(Ne.a)(),c=Object(G.a)(J,{update:function(e,t){o.push("/login"),s({title:"Account created.",description:"We've created your account for you. Login and start chatting",status:"success",duration:9e3,isClosable:!0})},onError:function(e){r(e.graphQLErrors[0].extensions.errors),s({title:"Bad inputs",position:"bottom-right",description:"Check your credentials and try again",status:"error",duration:3e3,isClosable:!0})}}),l=Object(q.a)(c,2),u=l[0],d=l[1].loading,j=Object(ze.a)({initialValues:{email:"",username:"",password:"",confirmPassword:"",imageUrl:""},onSubmit:function(){var e=Object(T.a)(D.a.mark((function e(t,n){var a,r,o,s,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,r=t.password,o=t.email,s=t.confirmPassword,c=t.imageUrl,i=n.resetForm,e.prev=2,e.next=5,u({variables:{email:o,username:a,password:r,confirmPassword:s,imageUrl:c}});case 5:i(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log({error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}()});return Object(p.jsx)(ee.c,{spacing:"5",p:"10",pt:"5",margin:"20",children:Object(p.jsx)("form",{onSubmit:j.handleSubmit,children:Object(p.jsxs)(ee.b,{spacing:3,bg:"orange.100",w:"350px",p:5,boxShadow:"m",rounded:"lg",children:[Object(p.jsx)(Je.a,{src:"LountWithText.png",mx:"auto",mt:5,mb:5,width:"30%"}),Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(Ge.b,{})}),Object(p.jsx)(re.a,{type:"text",name:"username",placeholder:"username","area-label":"username",onChange:j.handleChange,value:j.values.username,bg:"white",borderColor:(null===n||void 0===n?void 0:n.username)?"red.400":"whiteAlpha.200"})]}),(null===n||void 0===n?void 0:n.username)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===n||void 0===n?void 0:n.username})]}),Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(Be.a,{})}),Object(p.jsx)(re.a,{type:"text",name:"email",placeholder:"Email","aria-label":"Email",onChange:j.handleChange,value:j.values.email,bg:"white",borderColor:(null===n||void 0===n?void 0:n.email)?"red.400":"whiteAlpha.200"})]}),(null===n||void 0===n?void 0:n.email)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===n||void 0===n?void 0:n.email})]}),Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(We.a,{})}),Object(p.jsx)(re.a,{type:"password",placeholder:"Password","aria-label":"Password",name:"password",onChange:j.handleChange,value:j.values.password,bg:"white",borderColor:(null===n||void 0===n?void 0:n.password)?"red.400":"whiteAlpha.200"})]}),(null===n||void 0===n?void 0:n.password)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===n||void 0===n?void 0:n.password})]}),Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(We.a,{})}),Object(p.jsx)(re.a,{type:"password",name:"confirmPassword",placeholder:"Confirm Password","aria-label":"confirmPassword",onChange:j.handleChange,value:j.values.confirmPassword,bg:"white",borderColor:(null===n||void 0===n?void 0:n.confirmPassword)?"red.400":"whiteAlpha.200"})]}),(null===n||void 0===n?void 0:n.confirmPassword)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===n||void 0===n?void 0:n.confirmPassword})]}),Object(p.jsx)(Fe.a,{children:Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(Ge.a,{})}),Object(p.jsx)(re.a,{type:"text",name:"imageUrl",placeholder:"Profile picture URL","aria-label":"imageUrl",onChange:j.handleChange,value:j.values.imageUrl,bg:"white"})]})}),Object(p.jsx)(Re.a,{type:"submit",boxShadow:"sm",_hover:{boxShadow:"md"},_active:{boxShadow:"lg"},width:"100",disabled:d,bg:"orange.200",color:"orange.500",children:d?"loading..":"Register"}),Object(p.jsx)(Z.a,{fontSize:"sm",textAlign:"center",color:"teal.500",children:"Created by Jarryingnut \ud83d\udc68\u200d\ud83d\udcbb"})]})})})},He=function(){var e=Ee(),t=Object(Ne.a)(),n=Object(a.useState)(),r=Object(q.a)(n,2),o=r[0],s=r[1],c=Object(Y.a)(N,{onError:function(e){t({title:"Authentication Error",position:"bottom-right",description:"Check your credentials",status:"error",duration:3e3,isClosable:!0}),s(e.graphQLErrors[0].extensions.errors)},onCompleted:function(){var t=Object(T.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.login,t.next=3,e({type:"LOGIN",payload:a});case 3:window.location.href="/";case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),i=Object(q.a)(c,2),l=i[0],u=i[1].loading,d=Object(ze.a)({initialValues:{username:"",password:""},onSubmit:function(){var e=Object(T.a)(D.a.mark((function e(t,n){var a,r,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,r=t.password,o=n.resetForm,e.prev=2,e.next=5,l({variables:{username:a,password:r}});case 5:o(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}()});return Object(p.jsx)(ee.c,{spacing:"10",p:"10",margin:"20",children:Object(p.jsx)("form",{onSubmit:d.handleSubmit,children:Object(p.jsxs)(ee.b,{spacing:5,bg:"orange.100",w:"350px",p:5,boxShadow:"m",rounded:"lg",children:[Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsx)(Je.a,{src:"LountWithText.png",mx:"auto",mt:12,mb:10,width:"30%"}),Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(Ge.b,{})}),Object(p.jsx)(re.a,{type:"text",name:"username",placeholder:"Username",onChange:d.handleChange,value:d.values.username,"area-label":"username",bg:"white",borderColor:(null===o||void 0===o?void 0:o.username)?"red.400":"whiteAlpha.200"})]}),(null===o||void 0===o?void 0:o.username)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===o||void 0===o?void 0:o.username})]}),Object(p.jsxs)(Fe.a,{isRequired:!0,children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsx)(ae.a,{children:Object(p.jsx)(We.a,{})}),Object(p.jsx)(re.a,{type:"password",placeholder:"Password","aria-label":"Password",name:"password",onChange:d.handleChange,value:d.values.password,bg:"white",borderColor:(null===o||void 0===o?void 0:o.password)?"red.400":"whiteAlpha.200"})]}),(null===o||void 0===o?void 0:o.password)&&Object(p.jsx)(Ve.a,{color:"red.400",fontSize:"xs",children:null===o||void 0===o?void 0:o.password})]}),Object(p.jsx)(Re.a,{type:"submit",boxShadow:"sm",_hover:{boxShadow:"md"},_active:{boxShadow:"lg"},width:"100",bg:"orange.200",color:"orange.500",disabled:u,children:u?"loading..":"Login"}),Object(p.jsx)(Z.a,{fontSize:"sm",textAlign:"center",color:"teal.400",children:"Created by Jarryingnut \ud83d\udc68\u200d\ud83d\udcbb "})]})})})},Ke=n(264),Xe=function(){var e,t=Ee(),n=Ce(),a=Object(Ne.a)(),r=function(){var e=Object(T.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"LOGOUT"});case 2:a({title:"See you again!",description:"You have logged out successfully",status:"success",duration:5e3,isClosable:!0});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===n||void 0===n?void 0:n.user)?Object(p.jsxs)(L.a,{align:"center",px:"40",bg:"gray.200",py:"0.5",color:"gray.600",children:[Object(p.jsx)(_e.a,{px:"2",children:Object(p.jsx)(Je.a,{w:"30px",src:"/lountchat.png",alt:"Logo"})}),Object(p.jsx)(Ke.a,{}),Object(p.jsxs)(L.a,{alignItems:"center",children:[Object(p.jsx)(Z.a,{size:"sm",fontWeight:"semibold",mr:"5",children:"".concat(null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.username," is logged in ")}),Object(p.jsx)(Re.a,{_hover:{color:"teal.400"},onClick:r,variant:"outline",borderRadius:"sm",children:"Logout"})]})]}):Object(p.jsxs)(L.a,{align:"center",px:"40",bg:"whiteAlpha.800",py:"1.5",color:"gray.600",children:[Object(p.jsx)(_e.a,{px:"2",children:Object(p.jsx)(Je.a,{w:"30px",src:"/lountchat.png",alt:"Logo"})}),Object(p.jsx)(_e.a,{px:"2",children:Object(p.jsx)(Z.a,{size:"sm",fontWeight:"semibold",_hover:{color:"teal.400"},children:Object(p.jsx)(c.b,{to:"/login",children:"Login"})})}),Object(p.jsx)(_e.a,{px:"2",children:Object(p.jsx)(Z.a,{size:"sm",fontWeight:"semibold",_hover:{color:"teal.400"},children:Object(p.jsx)(c.b,{to:"/register",children:"Register"})})})]})},Ze=n(265),et=Object(Ze.a)({styles:{global:{body:{bgGradient:"linear(to-r, #74ebd5, #ACB6E5)"}}}});function tt(e){var t=Ce().user;return console.log("dynamic",t),e.authenticated&&!t?Object(p.jsx)(i.a,{to:"/login"}):e.guest&&t?Object(p.jsx)(i.a,{to:"/"}):Object(p.jsx)(i.b,Object(u.a)({component:e.component},e))}var nt=function(){return Object(p.jsx)(C,{children:Object(p.jsx)(l.a,{theme:et,children:Object(p.jsx)(ue,{children:Object(p.jsx)(Se,{children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(Xe,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsx)(tt,{exact:!0,path:"/",component:Ye,authenticated:!0}),Object(p.jsx)(tt,{path:"/register",component:Qe,guest:!0}),Object(p.jsx)(tt,{path:"/login",component:He,guest:!0})]})]})})})})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(nt,{})}),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.5c44b9ab.chunk.js.map