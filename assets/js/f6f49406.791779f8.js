"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2560],{1093:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=s(4848),r=s(8453);const o={sidebar_position:3},c=void 0,d={id:"\u5e38\u7528\u547d\u4ee4/DNS\u4fee\u6539",title:"DNS\u4fee\u6539",description:"\u9e92\u9e9f\u64cd\u4f5c\u7cfb\u7edf\u81ea\u5e26\u56fe\u5f62\u5316DNS\u4fee\u6539\u5de5\u5177\uff0c\u4f46\u662f\u4fee\u6539\u540e\u5f80\u5f80\u4e0d\u80fd\u751f\u6548\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u79cd\u5f3a\u5236\u4fee\u6539\u7cfb\u7edfDNS\u7684\u65b9\u6cd5\u3002",source:"@site/docs/\u5e38\u7528\u547d\u4ee4/DNS\u4fee\u6539.md",sourceDirName:"\u5e38\u7528\u547d\u4ee4",slug:"/\u5e38\u7528\u547d\u4ee4/DNS\u4fee\u6539",permalink:"/docs/\u5e38\u7528\u547d\u4ee4/DNS\u4fee\u6539",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u4ef6\u6e90",permalink:"/docs/\u5e38\u7528\u547d\u4ee4/\u8f6f\u4ef6\u6e90"},next:{title:"\u4f7f\u7528\u6280\u5de7",permalink:"/docs/category/\u4f7f\u7528\u6280\u5de7"}},l={},i=[{value:"\u4fee\u6539resolved.conf\u6587\u4ef6",id:"\u4fee\u6539resolvedconf\u6587\u4ef6",level:3},{value:"\u91cd\u542f\u670d\u52a1\uff0c\u542f\u7528\u914d\u7f6e",id:"\u91cd\u542f\u670d\u52a1\u542f\u7528\u914d\u7f6e",level:3},{value:"\u67e5\u770b\u4fee\u6539\u7ed3\u679c",id:"\u67e5\u770b\u4fee\u6539\u7ed3\u679c",level:3},{value:"\u67e5\u8be2\u7cfb\u7edf\u5b89\u88c5\u8f6f\u4ef6",id:"\u67e5\u8be2\u7cfb\u7edf\u5b89\u88c5\u8f6f\u4ef6",level:3}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u9e92\u9e9f\u64cd\u4f5c\u7cfb\u7edf\u81ea\u5e26\u56fe\u5f62\u5316DNS\u4fee\u6539\u5de5\u5177\uff0c\u4f46\u662f\u4fee\u6539\u540e\u5f80\u5f80\u4e0d\u80fd\u751f\u6548\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u79cd\u5f3a\u5236\u4fee\u6539\u7cfb\u7edfDNS\u7684\u65b9\u6cd5\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4fee\u6539resolvedconf\u6587\u4ef6",children:"\u4fee\u6539resolved.conf\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/resolved.conf\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u91cd\u542f\u670d\u52a1\u542f\u7528\u914d\u7f6e",children:"\u91cd\u542f\u670d\u52a1\uff0c\u542f\u7528\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\nsudo systemctl restart systemd-resolved\n#\u5f00\u542f systemd-resolved \u670d\u52a1\uff08\u5982\u9700\u5219\u6267\u884c\uff09\nsudo systemctl enable systemd-resolved\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u4fee\u6539\u7ed3\u679c",children:"\u67e5\u770b\u4fee\u6539\u7ed3\u679c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemd-resolve --status\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728\u51fa\u73b0\u7684\u7ed3\u679c\u4e2d\u68c0\u67e5",(0,t.jsx)(n.code,{children:"DNS Servers"}),"\u548c",(0,t.jsx)(n.code,{children:"Fallback DNS Servers"}),"\uff08\u5907\u7528\uff09\u662f\u5426\u662f\u81ea\u5df1\u8bbe\u7f6e\u7684\u5730\u5740"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"DNS Servers: 114.114.114.114\nFallback DNS Servers: 223.6.6.6 \n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u8be2\u7cfb\u7edf\u5b89\u88c5\u8f6f\u4ef6",children:"\u67e5\u8be2\u7cfb\u7edf\u5b89\u88c5\u8f6f\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dpkg -l | grep name\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(6540);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);