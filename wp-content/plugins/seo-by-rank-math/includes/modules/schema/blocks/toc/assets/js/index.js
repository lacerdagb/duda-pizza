!function(){var e={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.blocks,t=lodash,r=wp.i18n,a=wp.blockEditor,l=wp.data,i=wp.components,o=wp.element,s=wp.dom;function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw l}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];return(0,t.forEach)(e,(function(r,a){var l;if(!(0,t.isEmpty)(r.content)&&r.level===e[0].level)if((null===(l=e[a+1])||void 0===l?void 0:l.level)>r.level){for(var i=e.length,o=a+1;o<e.length;o++)if(e[o].level===r.level){i=o;break}n.push({heading:r,children:d(e.slice(a+1,i))})}else n.push({heading:r,children:null})})),n}function m(e){var n=e.headings,l=void 0===n?{}:n,o=e.onHeadingUpdate,s=void 0===o?{}:o,c=e.edit,u=void 0===c?{}:c,d=e.toggleEdit,p=void 0===d?{}:d,h=e.hideHeading,f=void 0===h?{}:h,v=e.ListStyle,g=void 0===v?"ul":v,b=e.isSave,k=void 0!==b&&b;return(0,t.isEmpty)(l)?null:wp.element.createElement(React.Fragment,null,l.map((function(e){if(k&&e.heading.disable)return!1;var t=e.heading,n=t.content,l=t.link,o=t.disable,c=t.key,d="div"===g?"div":"li";return wp.element.createElement(d,{key:c,className:o?"disabled":""},k&&wp.element.createElement("a",{href:l},n),!k&&wp.element.createElement(a.RichText,{tagName:"a",value:n,allowedFormats:[],onChange:function(e){return s(e,c,!0)},placeholder:(0,r.__)("Heading text","rank-math")}),e.children&&wp.element.createElement(g,null,wp.element.createElement(m,{headings:e.children,onHeadingUpdate:s,edit:u,toggleEdit:p,hideHeading:f,ListStyle:g,isSave:k})),c===u&&wp.element.createElement(i.TextControl,{placeholder:(0,r.__)("Heading Link","rank-math"),value:l,onChange:function(e){return s(e,c)}}),!k&&wp.element.createElement("span",{className:"rank-math-block-actions"},wp.element.createElement(i.Button,{icon:u===c?"saved":"admin-links",className:"rank-math-item-visbility",onClick:function(){return p(u!==c&&c)},title:(0,r.__)("Edit Link","rank-math")}),wp.element.createElement(i.Button,{className:"rank-math-item-delete",icon:o?"hidden":"visibility",onClick:function(){return f(!o,c)},title:(0,r.__)("Hide","rank-math")})))})))}var p=function(e){var n=e.attributes,l=e.setAttributes,o=e.excludeHeadings,s=e.setExcludeHeadings;return wp.element.createElement(a.InspectorControls,null,wp.element.createElement(i.PanelBody,{title:(0,r.__)("Settings","rank-math")},wp.element.createElement(i.SelectControl,{label:(0,r.__)("Title Wrapper","rank-math"),value:n.titleWrapper,options:[{value:"h2",label:(0,r.__)("H2","rank-math")},{value:"h3",label:(0,r.__)("H3","rank-math")},{value:"h4",label:(0,r.__)("H4","rank-math")},{value:"h5",label:(0,r.__)("H5","rank-math")},{value:"h6",label:(0,r.__)("H6","rank-math")},{value:"p",label:(0,r.__)("P","rank-math")},{value:"div",label:(0,r.__)("DIV","rank-math")}],onChange:function(e){l({titleWrapper:e})}}),wp.element.createElement("br",null),wp.element.createElement("h3",null,(0,r.__)("Exclude Headings","rank-math")),wp.element.createElement("div",{className:"rank-math-toc-exclude-headings"},(0,t.map)(["h1","h2","h3","h4","h5","h6"],(function(e){return wp.element.createElement(i.CheckboxControl,{key:e,label:(0,r.__)("Heading ","rank-math")+(0,t.toUpper)(e),checked:(0,t.includes)(o,e),onChange:function(t){return s(e,t)}})})))))},h=n(184),f=n.n(h);const v=e=>(0,o.createElement)("path",e),g=({className:e,isPressed:t,...n})=>{const r={...n,className:f()(e,{"is-pressed":t})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",{...r})};var b=(0,o.createElement)(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(v,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}));var k=(0,o.createElement)(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(v,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"}));var y=(0,o.createElement)(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(v,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),w=function(e){var t=e.setAttributes;return wp.element.createElement(a.BlockControls,null,wp.element.createElement(i.Toolbar,{label:(0,r.__)("Table of Content Options","rank-math")},wp.element.createElement(i.ToolbarButton,{icon:b,label:(0,r.__)("Unordered List","rank-math"),onClick:function(){return t({listStyle:"ul"})}}),wp.element.createElement(i.ToolbarButton,{icon:k,label:(0,r.__)("Ordered List","rank-math"),onClick:function(){return t({listStyle:"ol"})}}),wp.element.createElement(i.ToolbarButton,{icon:y,label:(0,r.__)("None","rank-math"),onClick:function(){return t({listStyle:"div"})}})))};function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,o=[],s=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var H={attributes:{title:{type:"text"},headings:{type:"array",items:{type:"object"}},listStyle:{type:"text"},titleWrapper:{type:"text",default:"h2"},excludeHeadings:{type:"array"}},save:function(e){var t=e.attributes;if(0===t.headings.length)return null;var n=t.titleWrapper,r=d(t.headings),l=t.listStyle;return wp.element.createElement("div",a.useBlockProps.save(),t.title&&wp.element.createElement(n,{dangerouslySetInnerHTML:{__html:t.title}}),wp.element.createElement("nav",null,wp.element.createElement(l,null,wp.element.createElement(m,{headings:r,ListStyle:l,isSave:!0}))))}},x=[H];(0,e.registerBlockType)("rank-math/toc-block",{edit:function(e){var n,u=e.attributes,h=e.setAttributes,f=(0,a.useBlockProps)(),v=E((0,o.useState)(!1),2),g=v[0],b=v[1],k=E((0,o.useState)({}),2),y=k[0],_=k[1];u.listStyle||h({listStyle:rankMath.listStyle});var S=u.listStyle,H=null!==(n=u.title)&&void 0!==n?n:rankMath.tocTitle,x=(0,t.isUndefined)(u.excludeHeadings)?rankMath.tocExcludeHeadings:u.excludeHeadings,U=function(e){(0,t.includes)(x,e)?(0,t.remove)(x,(function(t){return t===e})):x.push(e),h({excludeHeadings:x}),_(!y)},C=(0,l.useDispatch)(a.store).__unstableMarkNextChangeAsNotPersistent,L=function(e,n){return(0,l.useSelect)((function(r){var i,o=r(a.store),u=o.getBlockAttributes,d=o.getBlockName,m=o.getClientIdsWithDescendants,p=(0,l.useDispatch)("core/reusable-blocks").__experimentalConvertBlockToStatic,h=m(),f=[],v=0,g=[],b=c(h);try{var k=function(){var r=i.value,a=d(r);if("core/block"===a){var l=u(r);if(!(0,t.isNull)(l.ref)){var o=wp.data.select("core").getEditedEntityRecord("postType","wp_block",l.ref),c=(0,t.map)(o.blocks,(function(e){return e.name}));(0,t.includes)(c,"rank-math/toc-block")&&!(0,t.isNull)(u(r))&&p(r)}return 0}if(!(0,t.includes)(["rank-math/faq-block","rank-math/howto-block","core/heading"],a))return 0;var m=u(r);if("rank-math/faq-block"===a||"rank-math/howto-block"===a){var h=m.titleWrapper;if((0,t.includes)(n,h)||(0,t.includes)(["div","p"],h))return 0;var b="rank-math/howto-block"===a?m.steps:m.questions;return(0,t.isEmpty)(b)||(0,t.forEach)(b,(function(n){var r=(0,t.isUndefined)(e)||(0,t.isEmpty)(e[f.length])?{content:"",level:"",disable:!1,isUpdated:!1,isGeneratedLink:!0}:e[f.length],a=!(0,t.isUndefined)(r.isGeneratedLink)&&r.isGeneratedLink,l=!(0,t.isUndefined)(r.isUpdated)&&r.isUpdated?r.content:n.title;f.push({key:n.id,content:(0,s.__unstableStripHTML)(l),level:parseInt(m.titleWrapper.replace("h","")),link:a?"#".concat(n.id):r.link,disable:!!r.disable&&r.disable,isUpdated:!(0,t.isUndefined)(r.isUpdated)&&r.isUpdated,isGeneratedLink:a})})),0}if("core/heading"===a){if((0,t.includes)(n,"h"+m.level))return 0;var k=(0,t.isUndefined)(e)||(0,t.isEmpty)(e[f.length])?{content:"",level:"",disable:!1,isUpdated:!1,isGeneratedLink:!0}:e[f.length],y=!(0,t.isUndefined)(k.isGeneratedLink)&&k.isGeneratedLink,w=m.anchor;((0,t.isEmpty)(m.anchor)||y)&&(w=(0,t.kebabCase)((0,s.__unstableStripHTML)(m.content))),(0,t.includes)(g,w)&&(w=w+"-"+(v+=1)),g.push(w),m.anchor=w;var E=(0,t.isString)(m.content)?(0,s.__unstableStripHTML)(m.content.replace(/(<br *\/?>)+/g," ")):"",_=!(0,t.isUndefined)(k.isUpdated)&&k.isUpdated?k.content:E;f.push({key:r,content:(0,s.__unstableStripHTML)(_),level:m.level,link:y?"#".concat(m.anchor):k.link,disable:!!k.disable&&k.disable,isUpdated:!(0,t.isUndefined)(k.isUpdated)&&k.isUpdated,isGeneratedLink:y})}};for(b.s();!(i=b.n()).done;)k()}catch(e){b.e(e)}finally{b.f()}return(0,t.isEqual)(e,f)?null:f}))}(u.headings,x);(0,o.useEffect)((function(){null!==L&&(C(),h({headings:L}))}),[L]);var A=d(u.headings);return(0,t.isUndefined)(u.headings)||0===u.headings.length?wp.element.createElement("div",f,wp.element.createElement(i.Placeholder,{label:(0,r.__)("Table of Contents","rank-math"),instructions:(0,r.__)("Add Heading blocks to this page to generate the Table of Contents.","rank-math")}),wp.element.createElement(p,{attributes:u,setAttributes:h,excludeHeadings:x,setExcludeHeadings:U})):wp.element.createElement("div",f,wp.element.createElement(a.RichText,{tagName:u.titleWrapper,value:H,onChange:function(e){h({title:e})},placeholder:(0,r.__)("Enter a title","rank-math")}),wp.element.createElement("nav",null,wp.element.createElement(S,null,wp.element.createElement(m,{headings:A,onHeadingUpdate:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,t.map)(u.headings,(function(t){return t.key===n&&(r?(t.content=e,t.isUpdated=!0):(t.isGeneratedLink=!1,t.link=e)),t}));h({headings:a})},edit:g,toggleEdit:b,hideHeading:function(e,n){var r=(0,t.map)(u.headings,(function(t){return t.key===n&&(t.disable=e),t}));h({headings:r})},ListStyle:S}))),wp.element.createElement(w,{setAttributes:h}),wp.element.createElement(p,{attributes:u,setAttributes:h,excludeHeadings:x,setExcludeHeadings:U}))},save:function(e){var n=e.attributes;if((0,t.isUndefined)(n.headings)||0===n.headings.length)return null;var r=n.titleWrapper,l=d(n.headings),i=n.listStyle;return wp.element.createElement("div",S({},a.useBlockProps.save(),{id:"rank-math-toc"}),n.title&&wp.element.createElement(r,{dangerouslySetInnerHTML:{__html:n.title}}),wp.element.createElement("nav",null,wp.element.createElement(i,null,wp.element.createElement(m,{headings:l,ListStyle:i,isSave:!0}))))},deprecated:x})}()}();