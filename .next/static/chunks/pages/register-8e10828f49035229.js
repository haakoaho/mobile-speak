(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(6455)}])},1382:function(e,r,n){"use strict";n.d(r,{A:function(){return t}}),n(9738).config();var t="https://9022-195-139-182-94.ngrok-free.app"},6455:function(e,r,n){"use strict";n.r(r);var t=n(7568),o=n(4924),s=n(6042),i=n(9396),u=n(7582),a=n(5893),c=n(7294),l=n(8024),p=n.n(l),m=n(1382),f=n(1163);r.default=function(){var e=(0,f.useRouter)(),r=(0,c.useState)({username:"",name:"",password:"",email:"",phoneNumber:""}),n=r[0],l=r[1],d=function(e){var r=e.target,t=r.name,u=r.value;l((0,i.Z)((0,s.Z)({},n),(0,o.Z)({},t,u)))},h=function(){var r=(0,t.Z)((function(r){var t;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:r.preventDefault(),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,fetch("".concat(m.A,"/api/users/register"),{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"y"},body:JSON.stringify(n)})];case 2:return o.sent().ok?(console.log("User registered successfully"),e.push("/login")):console.error("Failed to register user"),[3,4];case 3:return t=o.sent(),console.error("Failed to register user:",t),[3,4];case 4:return[2]}}))}));return function(e){return r.apply(this,arguments)}}();return(0,a.jsx)("div",{className:p().registerForm,children:(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsxs)("div",{className:p().formGroup,children:[(0,a.jsx)("label",{htmlFor:"username",children:"Username:"}),(0,a.jsx)("input",{type:"text",name:"username",id:"username",value:n.username,onChange:d,required:!0,placeholder:"Enter Username"})]}),(0,a.jsxs)("div",{className:p().formGroup,children:[(0,a.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,a.jsx)("input",{type:"text",name:"name",id:"name",value:n.name,onChange:d,required:!0,placeholder:"Enter Your Full Name"})]}),(0,a.jsxs)("div",{className:p().formGroup,children:[(0,a.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,a.jsx)("input",{type:"password",name:"password",id:"password",value:n.password,onChange:d,required:!0,placeholder:"Enter a Strong Password"})]}),(0,a.jsxs)("div",{className:p().formGroup,children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",value:n.email,onChange:d,required:!0,placeholder:"your.email@example.com"})]}),(0,a.jsxs)("div",{className:p().formGroup,children:[(0,a.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number (Optional):"}),(0,a.jsx)("input",{type:"text",name:"phoneNumber",id:"phoneNumber",value:n.phoneNumber,onChange:d,placeholder:"Enter Phone Number"})]}),(0,a.jsx)("button",{type:"submit",className:p().submitButton,children:"Register"})]})})}},8024:function(e){e.exports={registerForm:"register_registerForm__YTTBC",formGroup:"register_formGroup__HjDDg",submitButton:"register_submitButton__GGsyk"}},6647:function(){},4924:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,{Z:function(){return t}})},6042:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(4924);function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(r){(0,t.Z)(e,r,n[r])}))}return e}},9396:function(e,r,n){"use strict";function t(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}n.d(r,{Z:function(){return t}})}},function(e){e.O(0,[774,714,995,888,179],(function(){return r=4722,e(e.s=r);var r}));var r=e.O();_N_E=r}]);