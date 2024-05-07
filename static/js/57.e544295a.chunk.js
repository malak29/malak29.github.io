"use strict";(self.webpackChunkmalak_portfolio=self.webpackChunkmalak_portfolio||[]).push([[57,660,449],{7660:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});t(5043),t(4050);var s=t(579);const r=function(e){const{title:a}=e;return(0,s.jsx)("div",{className:"header",children:a})}},8057:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var s=t(5043),r=t(3519),c=t(1072),o=t(4282),n=t(4574),l=t(8885),d=t.n(l),i=t(7660),f=t(5724),m=t(4449),x=t(4331),u=t(579);const y={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}},b=e=>{var a;const t=(0,s.useContext)(n.Dx),{header:l}=e,[b,h]=(0,s.useState)(null),[p,N]=(0,s.useState)(!1);(0,s.useEffect)((()=>{fetch(f.A.projects,{method:"GET"}).then((e=>e.json())).then((e=>h(e))).catch((e=>e))}),[]);const g=p&&b?b.length:6;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.default,{title:l}),b?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsxs)(r.A,{style:y.containerStyle,children:[(0,u.jsx)(c.A,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=b.projects)||void 0===a?void 0:a.slice(0,g).map((e=>(0,u.jsx)(d(),{children:(0,u.jsx)(m.default,{project:e})},e.title)))}),!p&&(0,u.jsx)(o.A,{style:y.showMoreStyle,variant:t.bsSecondaryVariant,onClick:()=>N(!0),children:"show more"})]})}):(0,u.jsx)(x.default,{})]})}},4449:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var s=t(5043),r=t(6221),c=t(8139),o=t.n(c),n=t(7852),l=t(579);const d=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,n.oU)(s,"card-body"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));d.displayName="CardBody";const i=d,f=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,n.oU)(s,"card-footer"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));f.displayName="CardFooter";const m=f;var x=t(1778);const u=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,as:c="div",...d}=e;const i=(0,n.oU)(t,"card-header"),f=(0,s.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,l.jsx)(x.A.Provider,{value:f,children:(0,l.jsx)(c,{ref:a,...d,className:o()(r,i)})})}));u.displayName="CardHeader";const y=u,b=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,variant:r,as:c="img",...d}=e;const i=(0,n.oU)(t,"card-img");return(0,l.jsx)(c,{ref:a,className:o()(r?"".concat(i,"-").concat(r):i,s),...d})}));b.displayName="CardImg";const h=b,p=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...c}=e;return s=(0,n.oU)(s,"card-img-overlay"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));p.displayName="CardImgOverlay";const N=p,g=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="a",...c}=e;return s=(0,n.oU)(s,"card-link"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));g.displayName="CardLink";const j=g;var v=t(4488);const S=(0,v.A)("h6"),w=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r=S,...c}=e;return s=(0,n.oU)(s,"card-subtitle"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));w.displayName="CardSubtitle";const C=w,P=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="p",...c}=e;return s=(0,n.oU)(s,"card-text"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));P.displayName="CardText";const k=P,R=(0,v.A)("h5"),A=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r=R,...c}=e;return s=(0,n.oU)(s,"card-title"),(0,l.jsx)(r,{ref:a,className:o()(t,s),...c})}));A.displayName="CardTitle";const U=A,T=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,bg:r,text:c,border:d,body:f=!1,children:m,as:x="div",...u}=e;const y=(0,n.oU)(t,"card");return(0,l.jsx)(x,{ref:a,...u,className:o()(s,y,r&&"bg-".concat(r),c&&"text-".concat(c),d&&"border-".concat(d)),children:f?(0,l.jsx)(i,{children:m}):m})}));T.displayName="Card";const B=Object.assign(T,{Img:h,Title:U,Subtitle:C,Body:i,Link:j,Text:k,Header:y,Footer:m,ImgOverlay:N});var F=t(4282);const I=s.forwardRef(((e,a)=>{let{bsPrefix:t,bg:s="primary",pill:r=!1,text:c,className:d,as:i="span",...f}=e;const m=(0,n.oU)(t,"badge");return(0,l.jsx)(i,{ref:a,...f,className:o()(d,m,r&&"rounded-pill",c&&"text-".concat(c),s&&"bg-".concat(s))})}));I.displayName="Badge";const V=I;var E=t(4574),D=t(4819);const H={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},L=e=>{var a;const t=(0,s.useContext)(E.Dx),{project:c}=e;return(0,l.jsx)(r.A,{children:(0,l.jsxs)(B,{style:{...H.cardStyle,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor},text:t.bsSecondaryVariant,children:[(0,l.jsx)(B.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,l.jsxs)(B.Body,{children:[(0,l.jsx)(B.Title,{style:H.cardTitleStyle,children:c.title}),(0,l.jsx)(B.Text,{style:H.cardTextStyle,children:(o=c.bodyText,(0,l.jsx)(D.$,{children:o}))})]}),(0,l.jsx)(B.Body,{children:null===c||void 0===c||null===(a=c.links)||void 0===a?void 0:a.map((e=>(0,l.jsx)(F.A,{style:H.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),c.tags&&(0,l.jsx)(B.Footer,{style:{backgroundColor:t.cardFooterBackground},children:c.tags.map((e=>(0,l.jsx)(V,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:H.badgeStyle,children:e},e)))})]})});var o}},4282:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(8139),r=t.n(s),c=t(5043),o=t(4140),n=t(7852),l=t(579);const d=c.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:c="primary",size:d,active:i=!1,disabled:f=!1,className:m,...x}=e;const u=(0,n.oU)(s,"btn"),[y,{tagName:b}]=(0,o.Am)({tagName:t,disabled:f,...x}),h=b;return(0,l.jsx)(h,{...y,...x,ref:a,disabled:f,className:r()(m,u,i&&"active",c&&"".concat(u,"-").concat(c),d&&"".concat(u,"-").concat(d),x.href&&f&&"disabled")})}));d.displayName="Button";const i=d},6221:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(8139),r=t.n(s),c=t(5043),o=t(7852),n=t(579);const l=c.forwardRef(((e,a)=>{const[{className:t,...s},{as:c="div",bsPrefix:l,spans:d}]=function(e){let{as:a,bsPrefix:t,className:s,...c}=e;t=(0,o.oU)(t,"col");const n=(0,o.gy)(),l=(0,o.Jm)(),d=[],i=[];return n.forEach((e=>{const a=c[e];let s,r,o;delete c[e],"object"===typeof a&&null!=a?({span:s,offset:r,order:o}=a):s=a;const n=e!==l?"-".concat(e):"";s&&d.push(!0===s?"".concat(t).concat(n):"".concat(t).concat(n,"-").concat(s)),null!=o&&i.push("order".concat(n,"-").concat(o)),null!=r&&i.push("offset".concat(n,"-").concat(r))})),[{...c,className:r()(s,...d,...i)},{as:a,bsPrefix:t,spans:d}]}(e);return(0,n.jsx)(c,{...s,ref:a,className:r()(t,!d.length&&l)})}));l.displayName="Col";const d=l},1072:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(8139),r=t.n(s),c=t(5043),o=t(7852),n=t(579);const l=c.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,as:c="div",...l}=e;const d=(0,o.oU)(t,"row"),i=(0,o.gy)(),f=(0,o.Jm)(),m="".concat(d,"-cols"),x=[];return i.forEach((e=>{const a=l[e];let t;delete l[e],null!=a&&"object"===typeof a?({cols:t}=a):t=a;const s=e!==f?"-".concat(e):"";null!=t&&x.push("".concat(m).concat(s,"-").concat(t))})),(0,n.jsx)(c,{ref:a,...l,className:r()(s,d,...x)})}));l.displayName="Row";const d=l}}]);
//# sourceMappingURL=57.e544295a.chunk.js.map