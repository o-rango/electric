var pageComponent=webpackJsonppageComponent([6],{138:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),l=o(c),s=n(2),d=o(s);n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12);var p=n(139),u=o(p),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l.default);d.default.register(m,u.default),t.default=m},139:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.VzWyg=void 0;var c,l=n(0),s=o(l),d=n(2),p=o(d);goog.loadModule(function(e){function t(e,t,o){var c=function(){a("article",null,null,"id","base"),a("h2"),i("Base Layout"),r("h2"),a("p"),i("All projects must have a "),a("code"),i("layouts/base.soy"),r("code"),i(" file. This file is responsible for the HTML boilerplate of your site. Every page will be rendered with this layout."),r("p"),l({code:'&#123;namespace base&#125;\n\n/**\n */\n&#123;template .render private="true"&#125;\n    {@param content: ?}\n    {@param page: ?}\n    {@param serialized: ?}\n    {@param site: ?}\n\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta content="minimum-scale=1.0, width=device-width" name="viewport">\n        <meta name="description" content="{$page.description ?: \'\'}">\n\n        <title>{$page.title} - {$site.title}</title>\n\n        \x3c!-- inject:css --\x3e\n        \x3c!-- endinject --\x3e\n\n        <link rel="stylesheet" href="/styles/main.css">\n\n        \x3c!-- inject:js --\x3e\n        \x3c!-- endinject --\x3e\n    </head>\n    <body>\n        \x3c!-- inject:metal:js --\x3e\n            <div>\n                {$content}\n            </div>\n        \x3c!-- endinject --\x3e\n\n        \x3c!-- inject:codemirror:js --\x3e\n        \x3c!-- endinject --\x3e\n    </body>\n    </html>\n&#123;/template&#125;',mode:"text/x-soy"},null,o),a("p"),i("This layout can be editted to fit the needs of your project, but it must use "),a("code"),i("base"),r("code"),i(" as the "),a("code"),i("namespace"),r("code"),i(", and it must include the "),a("code"),i("{$content}"),r("code"),i(" variable which renders the content of each page."),r("p"),a("h3"),i("Inject Tags"),r("h3"),a("p"),i("Inside the "),a("code"),i("base.soy"),r("code"),i(" template there are multiple inject tags that are used by electric to import resources and scripts."),r("p"),a("h4"),a("code"),i("inject:css"),r("code"),i("/"),a("code"),i("inject:js"),r("code"),r("h4"),a("p"),i("These tags are used to inject "),a("code"),i("link"),r("code"),i(" and "),a("code"),i("script"),r("code"),i(" tags for all thirdparty resources located in "),a("code"),i("dist/vendor"),r("code"),i("."),r("p"),a("h4"),a("code"),i("inject:metal:js"),r("code"),r("h4"),a("p"),i("During the "),a("code"),i("generate"),r("code"),i(" task they are replaced with the necessary code for automatically invoking Metal components that have been implemented in your project's "),a("code"),i("soy"),r("code"),i(" files."),r("p"),a("p"),i("Note: these tags only need to be included in the "),a("code"),i("base"),r("code"),i(" template."),r("p"),a("p"),i("The injected code is what implements the "),a("code"),i("serialized"),r("code"),i(" param that is defined at the start of the template. "),a("code"),i("serialized"),r("code"),i(" is stringified meta data that Metal consumes to render each page."),r("p"),a("h4"),a("code"),i("inject:codemirror:js"),r("code"),r("h4"),a("p"),i("CodeMirror is responsible for Electric's built in syntax highlighting. This script locates all code examples and applies the appropriate syntax highlighting."),r("p"),r("article"),a("article",null,null,"id","sub"),a("h2"),i("Sub Layouts"),r("h2"),a("p"),i("Additional layouts can be created in the "),a("code"),i("layouts"),r("code"),i(" folder of your project. These layouts are simply "),a("code"),i("soy"),r("code"),i(" templates that can be implemented by individual pages."),r("p"),l({code:'&#123;namespace docs&#125;\n\n/**\n */\n&#123;template .render&#125;\n    {@param content: ?}\n    {@param elementClasses: ?}\n    {@param page: ?}\n    {@param site: ?}\n\n    <div class="{$elementClasses ?: \'main\'}">\n        <div class="topper">\n            <h1>{$site.title}</h1>\n        </div>\n\n        <div class="content">\n            <h2>{$page.title}</h2>\n\n            {$content}\n        </div>\n    </div>\n&#123;/template&#125;',mode:"text/x-soy"},null,o),a("p"),i("This template can be implemented by both "),a("code"),i("soy"),r("code"),i(" and "),a("code"),i("markdown"),r("code"),i(" files. The following example implements the "),a("code"),i("docs"),r("code"),i(" layout."),r("p"),a("h3"),a("code"),i("soy"),r("code"),i(" example."),r("h3"),a("p"),i("Sub layouts are rendered using soy's "),a("a",null,null,"href","https://developers.google.com/closure/templates/docs/commands#call"),i("call command"),r("a"),i("."),r("p"),l({code:'---\ndescription: "Page description."\ntitle: "Page"\n---\n\n&#123;namespace page&#125;\n\n/**\n */\n&#123;template .render&#125;\n    {call docs.render data="all"}\n        {param content kind="html"}\n            <span>Hello, World!</span>\n        {/param}\n    {/call}\n&#123;/template&#125;',mode:"text/x-soy"},null,o),a("p"),i("The "),a("code"),i('data="all"'),r("code"),i(" property needs to be set if the layout in question needs to implement any of the global params ("),a("code"),i("site"),r("code"),i(" or "),a("code"),i("page"),r("code"),i(")."),r("p"),a("h3"),a("code"),i("markdown"),r("code"),i(" example."),r("h3"),a("p"),i("Markdown implementation doesn't require any "),a("code"),i("soy"),r("code"),i(" code, rather it leverages the front matter "),a("code"),i("layout"),r("code"),i(" property to determine the layout."),r("p"),l({code:'---\ndescription: "Page description."\nlayout: "docs"\ntitle: "Page"\n---\n\n# Hello, World!',mode:"markdown"},null,o),a("p"),i("By specifying "),a("code"),i('layout: "docs"'),r("code"),i(", the generator will look for a soy template in the layouts directory with the "),a("code"),i("docs"),r("code"),i(" namespace."),r("p"),a("p"),i("See the section on "),a("a",null,null,"href","/docs/configuration#options"),i("configuration"),r("a"),i(" for info on configuring the markdown engine."),r("p");r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};s(n.$$assignDefaults({content:c},e),null,o)}goog.module("VzWyg.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),l=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),s=p.default.getTemplate("docs.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="VzWyg.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=c=e,e});var u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);p.default.register(u,c),t.VzWyg=u,t.templates=c,t.default=c}},[138]);