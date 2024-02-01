import{r as d}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=d,y=Symbol.for("react.element"),v=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,O=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,a){var r,o={},p=null,u=null;a!==void 0&&(p=""+a),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)E.call(e,r)&&!B.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:p,ref:u,props:o,_owner:O.current}}s.Fragment=v;s.jsx=l;s.jsxs=l;f.exports=s;var R=f.exports;const j=R.jsx;function m({children:t,...e}){return j("button",{...e,children:t})}m.__docgenInfo={description:"",methods:[],displayName:"Button"};const S={title:"BaseComponent/Button",component:m,argTypes:{}},n={args:{children:"Button"}};var c,i,_;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(_=(i=n.parameters)==null?void 0:i.docs)==null?void 0:_.source}}};const b=["Default"];export{n as Default,b as __namedExportsOrder,S as default};
