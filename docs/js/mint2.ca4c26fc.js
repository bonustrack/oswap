(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mint2"],{"543c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"container-sm px-3"},[s("PoolNav",{attrs:{default:1}}),s("BoxSelectPool",{model:{value:t.pool,callback:function(e){t.pool=e},expression:"pool"}}),t.pool.asset0&&t.pool.reserve0&&t.pool.reserve1?s("Box",{staticClass:"d-flex"},[s("div",{staticClass:"flex-auto"},[s("label",{staticClass:"d-block",attrs:{for:"amount"}},[t._v(" Deposit "),s("LabelBalance",{attrs:{asset:t.asset},on:{select:t.setAmount}})],1),s("InputAmount",{attrs:{id:"amount",asset:t.asset},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),s("div",{staticClass:"text-right mt-4 ml-4"},[s("ButtonSelectToken",{attrs:{default:t.pool.asset0,values:[t.pool.asset0,t.pool.asset1]},model:{value:t.asset,callback:function(e){t.asset=e},expression:"asset"}})],1)]):t._e(),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn-submit px-6 rounded-2 mb-3",attrs:{type:"submit",disabled:!t.asset||!t.amount}},[t._v(" Add liquidity ")])])],1)])},o=[],n=(s("96cf"),s("1da1")),l=s("90a9"),u={data:function(){return{pool:!1,asset:"",amount:""}},watch:{pool:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e!==s&&(this.amount="");case 1:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}()},methods:{setAmount:function(t){this.amount=t},handleSubmit:function(){var t={mint:"1"},e=this.pool.address;location.href=Object(l["g"])(e,t,this.amount,this.asset)}}},i=u,r=s("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=mint2.ca4c26fc.js.map