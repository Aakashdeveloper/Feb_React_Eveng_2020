(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(0),u=i.n(a),n=i(8),r=i.n(n),o=i(1),l=i(2),s=i(4),m=i(3),c=i(5),d=(i(14),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:"React App",userinput:"User Text here"},i}return Object(c.a)(t,e),Object(l.a)(t,[{key:"inputCapture",value:function(e){console.log(e.target.value),this.setState({userinput:e.target.value?e.target.value:"User Text Here"}),this.props.userText(e.target.value)}},{key:"buttonClick",value:function(e){console.log("hhiiiii")}},{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("div",{className:"logo",onClick:function(){console.log("hhiiiii")}},this.state.title),u.a.createElement("center",null,u.a.createElement("input",{onChange:this.inputCapture.bind(this)}),u.a.createElement("p",null,this.state.userinput)),u.a.createElement("hr",null))}}]),t}(a.Component)),p=function(e){console.log("<<<<In NewsList>>>>",e);var t=e.newsdata.map((function(e){return u.a.createElement("div",{key:e.id},u.a.createElement("h3",null,e.title),u.a.createElement("div",null,e.feed))}));return u.a.createElement("div",null,t)},v=i(6),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={news:v,filtered:v},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"filterNews",value:function(e){var t=this.state.news.filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1||t.feed.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({filtered:t})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d,{userText:function(t){return e.filterNews(t)}}),u.a.createElement(p,{newsdata:this.state.filtered}))}}]),t}(a.Component);r.a.render(u.a.createElement(h,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{"id":2,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{"id":3,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":4,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":5,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":6,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]')},9:function(e,t,i){e.exports=i(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.25659bfe.chunk.js.map