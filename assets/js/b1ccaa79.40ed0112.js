"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2652],{2643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const r={sidebar_position:2},l="Local Installation",o={id:"installations/local_installation",title:"Local Installation",description:"1. Prerequisites: Python 3.9 or higher",source:"@site/docs/installations/local_installation.md",sourceDirName:"installations",slug:"/installations/local_installation",permalink:"/converter-service/docs/installations/local_installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/converter-service/docs/installations/Requirements"},next:{title:"Docker Installation",permalink:"/converter-service/docs/installations/docker_installation"}},a={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"local-installation",children:"Local Installation"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Prerequisites: ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Python 3.9 or higher"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Clone the repository ",(0,i.jsx)(n.code,{children:"git clone https://git.rwth-aachen.de/linsherpa/ms_converter.git"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create a python virtual environment and activate it. ",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"Tips to create a python vitrual environment"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"python3 -m venv <your desired virtual environment name>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Activate the environment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"source <path to your desired virtual environment name>/bin/activate\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Install necessary requirements ",(0,i.jsx)(n.code,{children:"pip install -r requirements.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run the main file ",(0,i.jsx)(n.code,{children:"rest_api.py"})," :"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"python rest_api.py\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:" flask --app rest_api.py run\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["The URL will be available on ",(0,i.jsx)(n.code,{children:"http://localhost:5000/api-docs#"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);