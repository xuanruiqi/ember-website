"use strict";define("xuanruiqicom-ember/app",["exports","ember","xuanruiqicom-ember/resolver","ember-load-initializers","xuanruiqicom-ember/config/environment"],function(e,t,a,n,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("xuanruiqicom-ember/components/app-version",["exports","ember-cli-app-version/components/app-version","xuanruiqicom-ember/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("xuanruiqicom-ember/components/fa-icon",["exports","ember-cli-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("xuanruiqicom-ember/components/fa-list-icon",["exports","ember-cli-font-awesome/components/fa-list-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("xuanruiqicom-ember/components/fa-list",["exports","ember-cli-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("xuanruiqicom-ember/components/fa-stack",["exports","ember-cli-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("xuanruiqicom-ember/controllers/articles",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{}})}),define("xuanruiqicom-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("xuanruiqicom-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("xuanruiqicom-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","xuanruiqicom-ember/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("xuanruiqicom-ember/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("xuanruiqicom-ember/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("xuanruiqicom-ember/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("xuanruiqicom-ember/initializers/export-application-global",["exports","ember","xuanruiqicom-ember/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n,r=a.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("xuanruiqicom-ember/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("xuanruiqicom-ember/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("xuanruiqicom-ember/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("xuanruiqicom-ember/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("xuanruiqicom-ember/models/article",["exports","ember-data/model","ember-data/attr"],function(e,t,a){e.default=t.default.extend({title:(0,a.default)("string"),author:(0,a.default)("string"),body:(0,a.default)("string"),createTime:(0,a.default)("date"),updateTime:(0,a.default)("date")})}),define("xuanruiqicom-ember/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("xuanruiqicom-ember/router",["exports","ember","xuanruiqicom-ember/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){this.route("more"),this.route("quotes"),this.route("credits"),this.route("contact")}),e.default=n}),define("xuanruiqicom-ember/routes/contact",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("xuanruiqicom-ember/routes/credits",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("xuanruiqicom-ember/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("xuanruiqicom-ember/routes/more",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("xuanruiqicom-ember/routes/quotes",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("xuanruiqicom-ember/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("xuanruiqicom-ember/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"xuanruiqicom-ember/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment(" \n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    \n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(3);return n[0]=e.createMorphAt(t,2,2,a),n[1]=e.createMorphAt(e.childAt(t,[4,1]),1,1),n[2]=e.createMorphAt(t,6,6,a),n},statements:[["inline","partial",["navbar"],[],["loc",[null,[8,0],[8,20]]],0,0],["content","outlet",["loc",[null,[11,8],[11,18]]],0,0,0,0],["inline","partial",["footer"],[],["loc",[null,[15,0],[15,20]]],0,0]],locals:[],templates:[]}}())}),define("xuanruiqicom-ember/templates/contact",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:24,column:4}},moduleName:"xuanruiqicom-ember/templates/contact.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Contact Information");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    You could reach me in various ways. Your best shot to keep in touch\n    with me would be by shooting an email to:\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","mailto:me@xuanruiqi.com");var r=e.createTextNode("me@xuanruiqi.com");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", or to my\n    departmental email address, xqi01 [at] cs.tufts.edu\n    (replace [at] with @) for professional correspondence.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    You could also find me on LinkedIn\n    (");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.linkedin.com/in/xuanruiqi");var r=e.createTextNode("Xuanrui Qi");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("),\n    Github (");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/xuanruiqi");var r=e.createTextNode("@xuanruiqi");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("), or\n    Quora (");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.quora.com/profile/Xuanrui-Qi");var r=e.createTextNode("Xuanrui Qi");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(").\n    I will usually accept LinkedIn connection invitations, and I'm\n    also willing to collaborate with people on Github open source projects.\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("xuanruiqicom-ember/templates/credits",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:27,column:4}},moduleName:"xuanruiqicom-ember/templates/credits.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Credits");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    Frontend built with ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.emberjs.com");var r=e.createTextNode("Ember.js");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" and\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.getbootstrap.com");var r=e.createTextNode("Bootstrap");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(".\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode('\n    CSS theme:\n    "Flatly" by ');e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://bootswatch.com");var r=e.createTextNode("Bootswatch");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", licensed\n    under the MIT License. Adapted with modifications.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    Backend built with ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.rubyonrails.org");var r=e.createTextNode("Ruby on Rails");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    and ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://cloud.google.com/datastore");var r=e.createTextNode("Google Cloud Datastore");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(".\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    Hosted on ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://cloud.google.com/appengine");var r=e.createTextNode("Google App Engine");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(".\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("xuanruiqicom-ember/templates/footer",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:11,column:12},end:{line:11,column:41}},moduleName:"xuanruiqicom-ember/templates/footer.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Credits");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:13,column:9}},moduleName:"xuanruiqicom-ember/templates/footer.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("footer");e.setAttribute(a,"class","footer center-block");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p");e.setAttribute(n,"name","credits"),e.setAttribute(n,"class","text-center");var r=e.createTextNode("Xuanrui Qi © 2016, all rights reserved\n        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("Licensed under the Mozilla Public License\n        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[2,1]),4,4),n},statements:[["block","link-to",["credits"],[],0,null,["loc",[null,[11,12],[11,53]]]]],locals:[],templates:[e]}}())}),define("xuanruiqicom-ember/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:17,column:4}},moduleName:"xuanruiqicom-ember/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("About Me");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    I am Xuanrui Qi, a junior at ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.tufts.edu");var r=e.createTextNode("Tufts University");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", majoring in\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.cs.tufts.edu/");var r=e.createTextNode("computer science");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" and\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://ase.tufts.edu/ir/");var r=e.createTextNode("international relations");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", and minoring in\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://math.tufts.edu");var r=e.createTextNode("mathematics");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(". I am an aspiring computer scientist,\n    determined to bridge the gap between technology and society, as well as a political scientist\n    in the making, a frequent traveller, and a person inspired by a kaleidoscope of\n    different cultures.\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("xuanruiqicom-ember/templates/more",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:50,column:34},end:{line:50,column:83}},moduleName:"xuanruiqicom-ember/templates/more.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode(" a few of my favorite quotes");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:52,column:0}},moduleName:"xuanruiqicom-ember/templates/more.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("More about me...");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    Well, it's difficult to describe myself in words, but I'll try my best. I hail from the harbor city of\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://en.wikipedia.org/wiki/Shenzhen");var r=e.createTextNode("Shenzhen, China");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(". For those of you who\n    don't know, it's the 14th most populous city in the world and a major economic & technological hub in\n    Southern China. Before I came to the States for college, I studied at\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://en.wikipedia.org/wiki/Shenzhen_Middle_School");var r=e.createTextNode("Shenzhen Middle School");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("'s\n    International Department. Later, I moved to Massachusetts (the Boston Area, to be specific) to attend\n    Tufts. Boston is very different from Shenzhen, but it's also a great place. Especially in October!\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    Currently, I'm an undergraduate at Tufts University in the School of Engineering's BSCS Class of 2018.\n    I am interested in programming language theory, design and implementation, problems with concurrency,\n    formal logic, and computer vision.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    I program in C, ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.python.org");var r=e.createTextNode("Python");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.java.com");var r=e.createTextNode("Java");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(",\n    C++, Scheme, ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.erlang.org");var r=e.createTextNode("Erlang");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(",\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.javascript.com");var r=e.createTextNode("JavaScript");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.haskell.org");var r=e.createTextNode("Haskell");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(",\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.ruby-lang.org");var r=e.createTextNode("Ruby");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" (which the backend of this website is written in), and\n    I also do a bit of shell scripting in bash.\n    I've programmed websites (for example, this one), ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.htc.com/us/smartphones/htc-10/"),e.setAttribute(n,"title","currently, it's an HTC 10");var r=e.createTextNode("my Android phone");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(", and a few UNIX command line applications\n    (for fun). Em, I've built a few fun ones too: I have implemented Tetris, Boggle\n    (for a class project), and Conway's Game of Life. I am also a student member of the\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.IEEE.org");var r=e.createTextNode("IEEE");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.computer.org");var r=e.createTextNode("Computer\n    Society");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" and of the ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://www.acm.org");var r=e.createTextNode("ACM");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(". I use\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://releases.ubuntu.com/16.04/");var r=e.createTextNode('Ubuntu 16.04 LTS "Xenial Xerus"');e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" and\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://www.android.com/versions/marshmallow-6-0/");var r=e.createTextNode('Android 6.0 "Marshmallow"');e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" for\n    my PC and phone respectively (although I also work with Microsoft Windows a bit).\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    I'm enthusiastic about travelling. Besides the U.S. and China, I've also been to Japan, Australia,\n    France, Italy, Germany, and a few other countries. That's probably why I became interested in\n    international relations. Like every single traveller, I am also a food person. I love exploring\n    culinary traditions (and, yes, I cook a lot)!\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    By the way, I'd like to share ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode(" with you.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[13]),1,1),n},statements:[["block","link-to",["quotes"],[],0,null,["loc",[null,[50,34],[50,95]]]]],locals:[],templates:[e]}}())}),define("xuanruiqicom-ember/templates/navbar",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:22,column:8},end:{line:22,column:60}},moduleName:"xuanruiqicom-ember/templates/navbar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("a");e.setAttribute(a,"href","");var n=e.createTextNode("Home");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:23,column:8},end:{line:23,column:68}},moduleName:"xuanruiqicom-ember/templates/navbar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("a");e.setAttribute(a,"href","");var n=e.createTextNode("More About Me");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:24,column:8},end:{line:24,column:65}},moduleName:"xuanruiqicom-ember/templates/navbar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("a");e.setAttribute(a,"href","");var n=e.createTextNode("Contact");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:28,column:6}},moduleName:"xuanruiqicom-ember/templates/navbar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-default navbar-fixed-top");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","navbar-toggle collapsed"),e.setAttribute(i,"data-toggle","collapse"),e.setAttribute(i,"data-target","#bs-example-navbar-collapse-1");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","sr-only");var o=e.createTextNode("Toggle navigation");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","navbar-brand"),e.setAttribute(i,"href","#");var d=e.createTextNode("Xuanrui");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","collapse navbar-collapse"),e.setAttribute(r,"id","bs-example-navbar-collapse-1");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav navbar-nav");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2,1,3,1]),r=new Array(3);return r[0]=e.createMorphAt(n,1,1),r[1]=e.createMorphAt(n,3,3),r[2]=e.createMorphAt(n,5,5),r},statements:[["block","link-to",["index"],["tagName","li"],0,null,["loc",[null,[22,8],[22,72]]]],["block","link-to",["more"],["tagName","li"],1,null,["loc",[null,[23,8],[23,80]]]],["block","link-to",["contact"],["tagName","li"],2,null,["loc",[null,[24,8],[24,77]]]]],locals:[],templates:[e,t,a]}}())}),define("xuanruiqicom-ember/templates/quotes",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"xuanruiqicom-ember/templates/quotes.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("\n   - Copyright(c) 2016 Xuanrui Qi\n   - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/.\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Some of My Favorite Quotes");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("blockquote"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createElement("i"),i=e.createTextNode("On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.");e.appendChild(r,i),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode('"It is only with the heart that one can see rightly; what is essential is invisible to the eye."');e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("Antoine de Saint-Exupéry,  ");e.appendChild(n,r);var r=e.createElement("i"),i=e.createTextNode("Le Petit Prince");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(" (");e.appendChild(n,r);var r=e.createElement("i"),i=e.createTextNode("The Little Prince");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(").");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("blockquote"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode('"I decline to accept the end of man."');e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("William Faulkner, at the Nobel Prize Banquet (1949).");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");
e.appendChild(t,a);var a=e.createElement("blockquote"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createElement("i"),i=e.createTextNode("Die Philosophen haben die Welt nur verschieden interpretiert, es kömmt drauf an,\n          sie zu verändern.");e.appendChild(r,i),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode('"The philosophers have only interpreted the world, in different ways; the point, however,\n       is to change it."');e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("Karl Marx, ");e.appendChild(n,r);var r=e.createElement("i"),i=e.createTextNode("Theses on Feuerbach");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(" (1845).");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("xuanruiqicom-ember/config/environment",["ember"],function(e){var t="xuanruiqicom-ember";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),r=JSON.parse(unescape(n)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("xuanruiqicom-ember/app").default.create({name:"xuanruiqicom-ember",version:"0.0.0+00d6d5e3"});