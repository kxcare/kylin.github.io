"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4820],{5127:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const o={sidebar_position:6},c=void 0,a={id:"\u7cfb\u7edf\u76f8\u5173/\u5e38\u7528\u811a\u672c",title:"\u5e38\u7528\u811a\u672c",description:"\u4e00\u952e\u5907\u4efdKylin+WPS\u5e8f\u5217\u53f7",source:"@site/docs/\u7cfb\u7edf\u76f8\u5173/\u5e38\u7528\u811a\u672c.md",sourceDirName:"\u7cfb\u7edf\u76f8\u5173",slug:"/\u7cfb\u7edf\u76f8\u5173/\u5e38\u7528\u811a\u672c",permalink:"/docs/\u7cfb\u7edf\u76f8\u5173/\u5e38\u7528\u811a\u672c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u786c\u94fe\u63a5",permalink:"/docs/\u7cfb\u7edf\u76f8\u5173/\u8f6f\u786c\u94fe\u63a5"},next:{title:"\u5bc6\u94a5\u73af\u5220\u9664",permalink:"/docs/\u7cfb\u7edf\u76f8\u5173/\u5bc6\u94a5\u73af\u5220\u9664"}},r={},l=[{value:"\u4e00\u952e\u5907\u4efdKylin+WPS\u5e8f\u5217\u53f7",id:"\u4e00\u952e\u5907\u4efdkylinwps\u5e8f\u5217\u53f7",level:3},{value:"\u539f\u751f\u5fae\u4fe1\u6700\u65b0\u7248\u672c\u53f7\u67e5\u8be2",id:"\u539f\u751f\u5fae\u4fe1\u6700\u65b0\u7248\u672c\u53f7\u67e5\u8be2",level:3},{value:"WPS\u66f4\u65b0\u811a\u672c",id:"wps\u66f4\u65b0\u811a\u672c",level:3}];function h(n){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u4e00\u952e\u5907\u4efdkylinwps\u5e8f\u5217\u53f7",children:"\u4e00\u952e\u5907\u4efdKylin+WPS\u5e8f\u5217\u53f7"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(6889).A+"",children:"\u70b9\u6211\u4e0b\u8f7d.sh\u6587\u4ef6"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\n# \u83b7\u53d6\u5f53\u524d\u811a\u672c\u6240\u5728\u6587\u4ef6\u5939\u7684\u8def\u5f84\nscript_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\n\n# \u673a\u7bb1\u5e8f\u5217\u53f7\njx_file="/usr/sbin/dmidecode"\nif [ -x "$jx_file" ]; then\n\tjx_content="\u673a\u7bb1\u5e8f\u5217\u53f7\uff1a$(sudo $jx_file -t 1 | grep -i \'Serial Number\' | awk \'{print $3}\')"\nelse\n\techo "\u6ca1\u6709\u627e\u5230\u673a\u7bb1\u5e8f\u5217\u53f7\u6587\u4ef6"\nfi\n\n# \u9e92\u9e9f\u6ce8\u518c\u7801\nzcm_file="/usr/bin/kylin_gen_register"\nif [ -x "$zcm_file" ]; then\n\tzcm_content="\u9e92\u9e9f\u6ce8\u518c\u7801\uff1a$(sudo "$zcm_file")"\nelse\n\techo "\u6ca1\u6709\u627e\u5230\u6ce8\u518c\u7801\u6587\u4ef6"\nfi\n\n# \u9e92\u9e9f\u6fc0\u6d3b\u7801\njhm_file="/etc/.kyactivation"\nif [ -s "$jhm_file" ]; then\n\tjhm_content="$(cat "$jhm_file")"\n\t# \u63d2\u5165\u8fde\u5b57\u7b26\n\tjhm_content="\u9e92\u9e9f\u6fc0\u6d3b\u7801\uff1a$(echo $jhm_content | sed \'s/..../&-/g; s/-$//\')"\nelse\n\techo "\u6ca1\u6709\u627e\u5230\u6fc0\u6d3b\u7801\u6587\u4ef6"\nfi\n\n# \u5ba2\u6237\u670d\u52a1\u53f7\nfwh_file="/usr/bin/kylin_serial"\nif [ -x "$fwh_file" ]; then\n\tfwh_content="\u5ba2\u6237\u670d\u52a1\u53f7\uff1a$(sudo "$fwh_file")"\nelse\n\techo "\u6ca1\u6709\u627e\u5230\u670d\u52a1\u53f7\u6587\u4ef6"\nfi\n\n# WPS\u5e8f\u5217\u53f7\nwps_file="/opt/kingsoft/.auth/license2.dat"\nif [ -s "$wps_file" ]; then\n\twps_content="$(tail -c 60 $wps_file | head -c 50 | tr -d \'\\00\')"\n\twps_content="WPS\u5e8f\u5217\u53f7\uff1a$(echo $wps_content | sed \'s/...../&-/g; s/-$//\')"\nelse\n\techo "\u6ca1\u6709\u627e\u5230WPS\u5e8f\u5217\u53f7\u6587\u4ef6"\nfi\n\n# \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\noutput_file="$script_dir/Kylin\u7cfb\u7edf\u5e8f\u5217\u53f7\u5907\u4efd.txt"\n\n# \u5c06\u5185\u5bb9\u8f93\u51fa\u5230\u5907\u4efd\u6587\u4ef6\necho -e "$jx_content\\n$zcm_content\\n$jhm_content\\n$fwh_content\\n$wps_content" > "$output_file"\necho "\u5907\u4efd\u6587\u4ef6\u5df2\u751f\u6210: $output_file"\n\necho \u6309\u4efb\u610f\u952e\u9000\u51fa\nread -n 1\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u539f\u751f\u5fae\u4fe1\u6700\u65b0\u7248\u672c\u53f7\u67e5\u8be2",children:"\u539f\u751f\u5fae\u4fe1\u6700\u65b0\u7248\u672c\u53f7\u67e5\u8be2"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(5433).A+"",children:"\u70b9\u6211\u4e0b\u8f7d.sh\u6587\u4ef6"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\n# \u66f4\u65b0\u6e90\u6587\u4ef6\necho "\u66f4\u65b0\u6e90\u6587\u4ef6"\nsudo apt update\necho "\u6210\u529f\u66f4\u65b0\u6e90\u6587\u4ef6"\n\necho "\u67e5\u8be2\u8f6f\u4ef6\u7248\u672c\u53f7"\n# \u5b9a\u4e49\u8981\u83b7\u53d6\u6570\u636e\u7684\u7f51\u5740\nwebsite_url="https://archive2.kylinos.cn/DEB/KYLIN_DEB/pool/all/"\n\n# \u53d1\u9001HTTP\u8bf7\u6c42\u83b7\u53d6\u7f51\u7ad9\u6570\u636e\nwebsite_data=$(wget -qO- "$website_url")\n\n# \u5224\u65ad\u8fd4\u56de\u7684\u6570\u636e\u662f\u5426\u6709\u6548\nif [[ -n "$website_data" ]]; then\n    # \u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u63d0\u53d6\u4ee5 "wechat-beta" \u5f00\u5934\u7684\u5185\u5bb9\n    pattern=\'<a href="(wechat-beta_[^"]+\\.deb)">\'\n    matches=$(echo "$website_data" | grep -Eo "$pattern")\n\n    # \u63d0\u53d6\u7248\u672c\u53f7\uff0c\u5e76\u627e\u5230\u6700\u65b0\u7248\u672c\n    latest_version=""\n    for match in $matches; do\n        version=$(echo "$match" | grep -Eo \'wechat-beta_([0-9]+\\.){3}[0-9]+\' | cut -d\'_\' -f2)\n        if [[ -z "$latest_version" || "$version" > "$latest_version" ]]; then\n            latest_version=$version\n        fi\n    done\n\n    # \u8f93\u51fa\u6700\u65b0\u7248\u672c\n    echo "\u5fae\u4fe1\u6700\u65b0\u7248\u672c\uff1a$latest_version"\nelse\n    echo "\u65e0\u6cd5\u83b7\u53d6\u7f51\u7ad9\u6570\u636e\u3002"\nfi\n\n\necho \u6309\u4efb\u610f\u952e\u9000\u51fa\nread -n 1\n'})}),"\n",(0,s.jsx)(e.h3,{id:"wps\u66f4\u65b0\u811a\u672c",children:"WPS\u66f4\u65b0\u811a\u672c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(344).A+"",children:"\u70b9\u6211\u4e0b\u8f7d.sh\u6587\u4ef6"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\nDATA_DIR=$(pwd)\n\necho "remove wps-offie"\nsudo dpkg -r  wps-office\necho "success remove wps-office"\n\nsleep 2\necho "Clean up WPS cache"\nif [ -d /opt/kingsoft ]; then\n\tsudo rm -rf /opt/wps\nfi\nsudo rm -rf ${HOME}/.local/share/Kingsoft\nsudo rm -rf ${HOME}/.config/Kingsoft\necho "success Clean"\nsleep 2\n\necho "start install WPS"\nsudo dpkg -i ${DATA_DIR}/wps-office*.deb\necho "success install WPS"\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},344:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/files/wps\u66f4\u65b0\u811a\u672c-bb84d6379d30e3e2bbf71e59ff1abc1a.sh"},6889:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/files/\u4e00\u952e\u5907\u4efdKylin+WPS\u5e8f\u5217\u53f7-9546c5542f0247353b427eaa56e7f07c.sh"},5433:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/files/\u539f\u751f\u5fae\u4fe1\u6700\u65b0\u7248\u672c\u53f7\u67e5\u8be2-be4089cf2beb78fbc4fb1c5949218293.sh"},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);