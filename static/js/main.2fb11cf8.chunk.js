(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(14),n(3)),m=n(4),s=n(6),c=n(5),u=n(7),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200*200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,n)))},d=function(e){var a=e.robots,n=a.map(function(e,n){return r.a.createElement(h,{key:a[n].id,id:a[n].id,name:a[n].name,email:a[n].email})});return r.a.createElement("div",null,n)},b=[{id:1,name:"Prakhar Rajput",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Tanisha Rajput",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Alka Rajput",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Doraemon",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Shinchan",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Shubham Verma",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"type here",onChange:a}))},g=(n(15),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(c.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:b,searchField:""},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter(function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:a}))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.2fb11cf8.chunk.js.map