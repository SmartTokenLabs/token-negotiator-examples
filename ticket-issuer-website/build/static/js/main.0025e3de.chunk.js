(this["webpackJsonpticket-issuer-website"]=this["webpackJsonpticket-issuer-website"]||[]).push([[0],{57:function(e,t,c){},63:function(e,t){},73:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(12),s=c.n(n),a=c(43),i=c.n(a),r=(c(57),c(1)),o=c.n(r),d=c(18),l=c(49),j=c(48),b=c(94),k=(c(73),c(11));var h=function(e){var t=e.tokenInstance,c=t.ticketClass,n=t.ticketId,s=t.devconId;return Object(k.jsxs)("div",{className:"ticketContainer",children:[Object(k.jsxs)("div",{className:"ticketDetails",children:[Object(k.jsx)(b.a,{className:"ticketClass",variant:"h5",component:"h2",children:c.toString()}),Object(k.jsx)(b.a,{className:"ticketId",variant:"body2",color:"textSecondary",component:"p",children:n&&n.toString()}),Object(k.jsxs)(b.a,{className:"devconId",variant:"body2",color:"textSecondary",component:"p",children:["Devcon ID: ",s&&s.toString()]})]}),Object(k.jsx)("img",{className:"ticketImg",src:"ticket_example_image.svg"})]})},m=(c(79),[{ticket:"MIGWMA0MATYCBWE3ap3-AgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAOOZKRpcE6tLBuPbfE_SmwPk2wNjbj5vpa6kkD7eqQXvBOCa0WNo8dEHKvipeUGZZEWWjJKxooB44dEYdQO70Vgc",secret:"45845870684",id:"mah@mah.com"},{ticket:"MIGXMA4MAjExAgVhN2qd_gIBAARBBCiWVcTBF25EmWQVpzVE1_-YnrvBlKn9G8f2tLQTxekGLJAAWjCQWIQzl7JkLd3LJP03zGdsHZn0ZCu3jwjiNpIDQgBbJBY1Ctlp_czUwB85yF1e5kpZ-lQ_-UZ7jaCYSFoEx028Jit1HIDLCJezKdsNn9c9IO7-HC-_r2ZLaYQ9GGrbHA==",secret:"45845870684",id:"mah@mah.com"},{ticket:"MIGTMAoMATYCAgDeAgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAEZYXbNmWXDsAqIc5uf7SirR-dLCMLdEVN5teFrV93VbcKE_DED8c6jtFQ5LH2SRXwPEtXZqWfEh1c2OHTEYqfwb",secret:"45845870684",id:"mah@mah.com"},{ticket:"MIGSMAkMATECAQECAQAEQQQollXEwRduRJlkFac1RNf_mJ67wZSp_RvH9rS0E8XpBiyQAFowkFiEM5eyZC3dyyT9N8xnbB2Z9GQrt48I4jaSA0IAOf4d0N9shWfPIgRXZPdBRhlRyIARDT0tJwNWYwy2ILVKnIy-qPzFsgdI6sZHm1OY6UsJKuDlp0A7EMC8vS5YhRs=",secret:"45845870684",id:"mah@mah.com"}]);var u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=new j.a({},"devcon-ticket",{});Object(n.useEffect)(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.negotiate();case 2:(t=e.sent)&&s(t);case 4:case"end":return e.stop()}}),e)}))),[]);var i=function(){var e=Object(d.a)(o.a.mark((function e(t){var c,n,i,r,d,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.event,n=t.ticket,i=t.secret,r=t.id,c.preventDefault(),d="http://localhost:3002/?ticket=".concat(n,"&secret=").concat(i,"&id=").concat(r),a.addTokenThroughIframe(d),e.next=6,a.negotiate();case 6:(l=e.sent).success&&s(l.tokens);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("main",{children:[Object(k.jsx)("a",{href:"/",children:Object(k.jsx)("img",{className:"logo",src:"./devcon.svg"})}),Object(k.jsx)("div",{className:"flexCenter",children:Object(k.jsx)("p",{children:"[DEMO Ticket Issuer Website]"})}),Object(k.jsx)("div",{className:"flexCenter",children:Object(k.jsx)("img",{className:"devcon_bogota",src:"./devcon_bogota.svg"})}),Object(k.jsx)("div",{className:"flexCenter",children:Object(k.jsx)("p",{children:"A Devcon ticket provides access to the event and special offers between the dates X-XX for hotel bookings, travel, restaurants and more."})}),Object(k.jsx)("div",{className:"flexCenter",children:Object(k.jsx)("p",{children:"Your tickets:"})}),Object(k.jsx)("div",{className:"flexCenter",children:Object(k.jsxs)("div",{className:"tokensWrapper",children:[c&&c.length>0&&c.map((function(e,t){return Object(k.jsx)(h,{tokenInstance:e},t)})),!c.length&&Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"- no ticket found -"}),Object(k.jsx)("p",{children:"Generate ticket:"}),Object(k.jsx)("div",{className:"ticketWrapper",children:m.map((function(e,t){return Object(k.jsx)("button",{className:"makeTicket",onClick:function(t){return i({event:t,ticket:e.ticket,secret:e.secret,id:e.id})},children:"Create Ticket"},t)}))})]})]})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(u,{})}),document.getElementById("root")),f()}},[[80,1,2]]]);
//# sourceMappingURL=main.0025e3de.chunk.js.map