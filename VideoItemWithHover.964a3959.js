import{D as x,E as y,G as m,H as I,d as o,I as g,j as n,J as H,K as R,L as S}from"./index.37ff1b91.js";const V=x,G=y;function A(r,t,e){return function(){var f;const c=V(),i=(f=e.id)!=null?f:e.apiString,a=G(d=>d.discover[t]),s=a?a[i]:void 0,[h]=m(),[v]=I();o.exports.useEffect(()=>{(!a||!s)&&c(g({mediaType:t,itemKey:i}))},[a,s]),o.exports.useEffect(()=>{s&&s.page===0&&u(s.page+1)},[s]);const u=o.exports.useCallback(d=>{e.id?h({mediaType:t,genreId:e.id,page:d}):v({mediaType:t,apiString:e.apiString,page:d})},[]);return s?n(r,{genre:e,data:s,handleNext:u}):n(H,{})}}class P extends o.exports.PureComponent{render(){return n("div",{ref:this.props.innerRef,style:{zIndex:9,cursor:"pointer",borderRadius:.5,width:"100%",position:"relative",paddingTop:"calc(9 / 16 * 100%)"},children:n("img",{src:this.props.src,style:{top:0,height:"100%",objectFit:"cover",position:"absolute",borderRadius:"4px"},onPointerEnter:()=>{this.props.handleHover(!0)},onPointerLeave:()=>{this.props.handleHover(!1)}})})}}const l=o.exports.forwardRef((r,t)=>n(P,{...r,innerRef:t}));l.displayName="VideoItemWithHoverRef";function w({video:r}){const t=R(),e=o.exports.useRef(null),[p,c]=o.exports.useState(!1),{data:i}=S(void 0);return o.exports.useEffect(()=>{p&&t(e.current,r)},[p]),n(l,{ref:e,handleHover:c,src:`${i==null?void 0:i.images.base_url}w300${r.backdrop_path}`})}export{w as V,A as w};
