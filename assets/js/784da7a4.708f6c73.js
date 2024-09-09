"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4597],{2007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>T,default:()=>F,frontMatter:()=>k,metadata:()=>C,toc:()=>A});var n=r(4848),s=r(8453),i=r(6540),a=r(4164),o=r(3104),l=r(6347),c=r(205),u=r(7485),d=r(1682),h=r(679);function f(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=m(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=p({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,h.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=l??d;return b({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var x=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==s&&(u(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=v(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,n.jsx)(w,{...t,...e}),(0,n.jsx)(g,{...t,...e})]})}function _(e){const t=(0,x.A)();return(0,n.jsx)(y,{...e,children:f(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:r,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(I.tabItem,s),hidden:r,children:t})}const k={sidebar_position:2},T="msconvert",C={id:"ms_server/msconvertConversion",title:"msconvert:Conversion",description:"The aim of conversion is to convert a format (in this case a Mass Spectrometry File) into a standardized (mzML) format.",source:"@site/docs/ms_server/msconvertConversion.md",sourceDirName:"ms_server",slug:"/ms_server/msconvertConversion",permalink:"/converter-service/docs/ms_server/msconvertConversion",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MS-Converter Server",permalink:"/converter-service/docs/ms_server/"},next:{title:"FileInfo:Validation",permalink:"/converter-service/docs/ms_server/fileinfoValidate"}},S={},A=[{value:"Input Files:",id:"input-files",level:2}];function E(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"msconvert",children:["msconvert",":Conversion"]})}),"\n",(0,n.jsxs)(t.p,{children:["The aim of conversion is to convert a format (in this case a Mass Spectrometry File) into a standardized (mzML) format. ",(0,n.jsx)("br",{}),"\nThe converter is based on ",(0,n.jsx)(t.a,{href:"https://github.com/ProteoWizard/container",children:"proteowizard image"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.h2,{id:"input-files",children:"Input Files:"}),"\n",(0,n.jsx)(t.p,{children:"It works for three types of input.\nSomething could be written on this side"}),"\n","\n",(0,n.jsxs)(_,{children:[(0,n.jsx)(V,{value:"folder_d",label:"Folder with .d/.D extention",default:!0,children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It refers to a mass spectrometry file format, which is stored in a folder with a .d extension. For instance, instruments like Agilent MassHunter generate output files organized within a folder that carries the ",(0,n.jsx)(t.code,{children:".d"})," extension."]}),"\n",(0,n.jsxs)(t.li,{children:["The folder needs to be converted to ",(0,n.jsx)(t.code,{children:".tar"})," extention with maintaining the name ",(0,n.jsx)(t.code,{children:"< name of folder >.d.tar"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.li,{children:["Example: ",(0,n.jsx)("br",{}),"\nIf the name of the main folder is ",(0,n.jsx)(t.code,{children:"test_folder_1.D"}),", then name of the .tar file should be ",(0,n.jsx)(t.code,{children:"test_folder_1.D.tar"})]}),"\n"]})}),(0,n.jsx)(V,{value:"raw_file",label:"Raw File",default:!0,children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It refers to the file with ",(0,n.jsx)(t.code,{children:".RAW"})," or ",(0,n.jsx)(t.code,{children:".raw"})," extention. For instance, instrument such as Thermo Scientific  produces ",(0,n.jsx)(t.code,{children:".RAW"})," file",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.li,{children:["The File can be directly used  for conversion. ",(0,n.jsx)("br",{})]}),"\n"]})}),(0,n.jsx)(V,{value:"wiff_file",label:"WIFF File",default:!0,children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It refers to the file that requires another secondary file i.e. ",(0,n.jsx)(t.code,{children:".wiff"})," and ",(0,n.jsx)(t.code,{children:".wiff.scan"})," extention.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.li,{children:["Both of the files need to be compressed together into ",(0,n.jsx)(t.code,{children:".tar"})," extention. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.li,{children:["Example: ",(0,n.jsx)("br",{}),"\nIf the main file is named ",(0,n.jsx)(t.code,{children:"test_file_1.wiff"}),", both the ",(0,n.jsx)(t.code,{children:".wiff"})," and ",(0,n.jsx)(t.code,{children:".wiff.scan"})," files should be compressed into a ",(0,n.jsx)(t.code,{children:".tar"})," archive, with the resulting file named ",(0,n.jsx)(t.code,{children:"test_file_1.tar"})]}),"\n"]})})]})]})}function F(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(E,{...e})}):E(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);