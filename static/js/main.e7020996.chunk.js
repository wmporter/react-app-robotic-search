(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),i=t.n(r),c=(t(14),t(3)),l=t(4),s=t(6),u=t(5),h=t(7),d=function(e){var n=e.name,t=e.email,o=e.id;e.username;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return a.a.createElement("div",null,n.map(function(e,t){return a.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}),";")},m=function(e){var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"700px"}},e.children)},v=(t(15),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).onSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({robots:n})})}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchField,o=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return n.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"ROBOFRIENDS"),a.a.createElement(m,{searchChange:this.onSearchChange}),a.a.createElement(g,null,a.a.createElement(f,{robots:o}))):a.a.createElement("h1",null,"Loading...")}}]),n}(o.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(16);i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(n,e)})}}()},8:function(e,n,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.e7020996.chunk.js.map