(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(25),a(4)),l=a(5),u=a(7),s=a(6),h=a(8),d=(a(27),{selected:"#018786",plain:"#03DAC6",path:["#03DAC6","#90ee02","#df55f2","#ff9e22"]}),f=[{date:"2013-01",value:53},{date:"2013-02",value:165},{date:"2013-03",value:269},{date:"2013-04",value:344},{date:"2013-05",value:376},{date:"2013-06",value:410},{date:"2013-07",value:421},{date:"2013-08",value:405},{date:"2013-09",value:376},{date:"2013-10",value:359},{date:"2013-11",value:392},{date:"2013-12",value:433}],m=a(12);function v(e,t){var a=Math.random()*(t-e)+e;return Math.floor(a)}function p(){var e=[{x:v(60,100),y:v(100,120)}];return Object(m.times)(10,function(t){var a=e[t];e.push({x:a.x+10,y:v(100,120)})}),e}var b=["apples","oranges","trees"];function y(){var e=[];return Object(m.times)(10,function(t){var a={index:t};Object(m.forEach)(b,function(e){a[e]=v(0,100)}),e.push(a)}),e}var g=a(10),O=a(2),j=a(18),x=a(14),w="TOP",E="LEFT",k="BOTTOM",S="RIGHT",A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={},a.axisRef=Object(n.createRef)(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateAxis()}},{key:"componentDidUpdate",value:function(){this.updateAxis()}},{key:"updateAxis",value:function(){var e=Object(j.a)(this.axisRef.current).call(this.state.axis);this.props.orientation===k&&this.props.rotateText&&e.selectAll("text").style("text-anchor","end").attr("dx","-1em").attr("dy","-.2em").attr("transform","rotate(-65)")}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y;return r.a.createElement("g",{className:"axis",ref:this.axisRef,transform:"translate(".concat(t,", ").concat(a,")")})}}],[{key:"getAxis",value:function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:E){case w:return x.d;case k:return x.a;case E:return x.b;case S:return x.c;default:return x.b}}},{key:"getDerivedStateFromProps",value:function(e){var a=e.orientation,n=e.scale,r=e.tickFormat,c=r||function(e){return e};return{axis:t.getAxis(a)().scale(n).tickFormat(c)}}}]),t}(n.PureComponent),P=a(11),D=60,F=60,R=60,B=60,C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={bars:[],hoveredBar:null,xScale:Object(g.a)(),yScale:Object(g.b)()},a.hoverBar=function(e,t){var n=null;t&&a.state.bars.forEach(function(t,a){a===e&&(n=a)}),a.setState({hoveredBar:n})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height,c=this.state,i=c.hoveredBar,o=c.bars,l=c.xScale,u=c.yScale;return r.a.createElement("svg",{width:a,height:n},o.map(function(t,a){return r.a.createElement("rect",{onMouseOver:function(){return e.hoverBar(a,!0)},onMouseOut:function(){return e.hoverBar(a,!1)},key:a,x:t.x,y:t.y,width:t.width,height:t.height,fill:i===a?d.selected:t.fill})}),r.a.createElement("g",null,r.a.createElement(A,{timeFormat:Object(P.a)("%b"),scale:l,orientation:k,rotateText:!0,x:0,y:n-B}),r.a.createElement(A,{timeFormat:function(e){return"".concat(e)},scale:u,orientation:E,x:F,y:0})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e.data)return null;var a=e.data,n=e.width,r=e.height,c=t.xScale,i=t.yScale,o=a.map(function(e){return e.date}),l=Object(O.e)(a,function(e){return e.value});return c.rangeRound([F,n-R]).padding(.1).domain(o),i.range([r-B,D]).domain([0,l]).nice(),{bars:a.map(function(e){var t=i(e.value),a=i(0);return{x:c(e.date),y:t,height:a-t,width:c.bandwidth(),fill:d.plain}})}}}]),t}(n.PureComponent),G=a(13),M=60,T=60,W=60,N=60,I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={lines:[],circles:[],xScale:Object(g.b)(),yScale:Object(g.b)(),lineGenerator:Object(G.c)()},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderAxis",value:function(){var e=this.props.height,t=this.state,a=t.xScale,n=t.yScale;return r.a.createElement("g",null,r.a.createElement(A,{scale:a,orientation:k,x:0,y:e-N-W}),r.a.createElement(A,{scale:n,orientation:E,x:0,y:0}))}},{key:"renderData",value:function(){var e=this.state,t=e.lines,a=e.circles;return r.a.createElement(n.Fragment,null,t.map(function(e,t){return r.a.createElement("path",{key:t,d:e.path,strokeWidth:2,fill:"none",stroke:e.fill})}),a.map(function(e,t){return r.a.createElement("circle",{key:t,cx:e.x,cy:e.y,fill:e.fill,stroke:"#fff",r:5})}))}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return r.a.createElement("svg",{width:t,height:a},r.a.createElement("g",{transform:"translate(".concat(M,", ").concat(W,")")},this.renderAxis(),this.renderData()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.data,n=e.width,r=e.height,c=e.multi,i=e.curve,o=e.showDataPoints,l=t.xScale,u=t.yScale,s=t.lineGenerator,h=c?Object(m.flatten)(a):a,f=Object(O.d)(h,function(e){return e.x}),v=Object(O.d)(h,function(e){return e.y});l.range([0,n-T-M]).domain([.98*f[0],1.02*f[1]]).nice(),u.range([r-N-W,0]).domain([.98*v[0],1.02*v[1]]).nice(),s.x(function(e){return l(e.x)}),s.y(function(e){return u(e.y)}),i&&s.curve(G.b);var p=[],b=[];return(c?a:[a]).forEach(function(e,t){var a=d.path[t];p.push({path:s(e),fill:a}),o&&e.forEach(function(e){var t={x:l(e.x),y:u(e.y),fill:a};b.push(t)})}),{lines:p,circles:b}}}]),t}(n.PureComponent),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={arcGenerator:Object(G.a)(),pieGenerator:Object(G.d)(),slices:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=this.state.slices;return r.a.createElement("svg",{height:a,width:t},r.a.createElement("g",{transform:"translate(".concat(t/2,", ").concat(a/2,")")},n.map(function(e,t){return r.a.createElement("path",{key:t,d:e.path,fill:e.fill})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.data,n=e.colors,r=e.width,c=e.arcWidth,i=t.arcGenerator,o=t.pieGenerator,l=r/2,u=l-c;return o.value(function(e){return e}).sort(null),i.innerRadius(u).outerRadius(l),{slices:o(a).map(function(e,t){return{path:i(e),fill:n[t]}})}}}]),t}(n.PureComponent),H=a(19),L=60,U=60,$=60,q=60,z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={bars:[],xScale:Object(g.a)(),yScale:Object(g.b)(),colorScale:Object(g.c)(H.a)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=this.state,c=n.bars,i=n.xScale,o=n.yScale;return r.a.createElement("svg",{width:t,height:a},c.map(function(e,t){return r.a.createElement("rect",{key:t,x:e.x,y:e.y,width:e.width,height:e.height,fill:e.fill})}),r.a.createElement("g",null,r.a.createElement(A,{timeFormat:Object(P.a)("%b"),scale:i,orientation:k,x:0,y:a-q}),r.a.createElement(A,{timeFormat:function(e){return"".concat(e)},scale:o,orientation:E,x:L,y:0})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.data,n=e.width,r=e.height,c=e.keys,i=t.xScale,o=t.yScale,l=t.colorScale,u=function(e){return e.index},s=a.map(u),h=Object(G.e)().keys(c)(a),d=Object(O.e)(h,function(e){return Object(O.e)(e,function(e){return e[1]})});l.domain([0,c.length-1]),i.rangeRound([L,n-U]).padding(.1).domain(s);var f=[r-q,$];o.range(f).domain([0,d]).nice();var v=h.map(function(e,t){return e.map(function(e){var a=i(u(e.data)),n=o(e[1]);return{x:a,y:n,height:Math.abs(o(e[0])-n),width:i.bandwidth(),fill:l(t)}})});return{bars:Object(m.flatten)(v)}}}]),t}(n.PureComponent),K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"React D3 Playground")),r.a.createElement("div",{className:"charts-container"},r.a.createElement(C,{width:400,height:500,data:f}),r.a.createElement(I,{width:400,height:500,multi:!0,data:[p(),p(),p()]}),r.a.createElement(I,{width:400,height:500,showDataPoints:!0,multi:!0,data:[p(),p()]}),r.a.createElement(I,{width:400,height:500,showDataPoints:!0,multi:!0,curve:!0,data:[p()]}),r.a.createElement(J,{width:200,height:200,data:[20,10,50,70,30],colors:d.path,arcWidth:30}),r.a.createElement(z,{width:400,height:400,data:y(),keys:b})))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.57ea5c27.chunk.js.map