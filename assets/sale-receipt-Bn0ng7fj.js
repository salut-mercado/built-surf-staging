import{g as R,o as C,p as L}from"./index-B8iDZSj4.js";const A=`
  <header class="receipt__header">
    <div class="receipt__title">{{storeName}}</div>
    <div class="receipt__stack receipt__small">
      <div>{{labels.taxId}}: {{storeTaxId}}</div>
      <div>{{address}}</div>
      <div>{{labels.phone}}: {{phone}}</div>
    </div>
  </header>

  <section class="receipt__section receipt__mono receipt__small">
    <div class="receipt__row">
      <span class="receipt__label">{{labels.operationDateTime}}</span>
      <span class="receipt__value">{{operationDateTime}}</span>
    </div>
    <div class="receipt__row">
      <span class="receipt__label">{{labels.receiptId}}</span>
      <span class="receipt__value">{{receiptId}}</span>
    </div>
  </section>

  <section class="receipt__section">
    <table class="receipt__grid receipt__mono receipt__grid--tight">
      <thead>
        <tr>
          <th>x</th>
          <th>{{labels.name}}</th>
          <th class="receipt__right">{{labels.unitPrice}}</th>
          <th class="receipt__right">{{labels.amount}}</th>
        </tr>
      </thead>
      <tbody>
        {{#each items}}
          <tr class="{{#if isWeighted}}receipt__item-main{{/if}}">
            <td>{{displayQuantity}}</td>
            <td>{{name}}</td>
            <td class="receipt__right">{{#if unitPrice}}{{unitPrice}}{{/if}}</td>
            <td class="receipt__right">{{lineTotal}}</td>
          </tr>
          {{#if isWeighted}}
            <tr class="receipt__item-subline">
              <td></td>
              <td colspan="3">{{weightLine}}</td>
            </tr>
          {{/if}}
        {{/each}}
      </tbody>
    </table>
  </section>

  <section class="receipt__section">
    <div class="receipt__row receipt__total">
      <span class="receipt__label">{{labels.total}}</span>
      <span class="receipt__value">{{total}}</span>
    </div>
    <div class="receipt__row receipt__mono">
      <span class="receipt__label">{{paymentLabel}}</span>
      <span class="receipt__value">{{paymentAmount}}</span>
    </div>
    {{#if showChange}}
      <div class="receipt__row receipt__mono">
        <span class="receipt__label">{{labels.change}}</span>
        <span class="receipt__value">{{change}}</span>
      </div>
    {{/if}}
  </section>

  <section class="receipt__section">
    <table class="receipt__grid receipt__mono receipt__grid--tight receipt__small">
      <thead>
        <tr>
          <th>IVA</th>
          <th class="receipt__right">{{labels.base}}</th>
          <th class="receipt__right">{{labels.quota}}</th>
        </tr>
      </thead>
      <tbody>
        {{#each taxes}}
          <tr>
            <td>{{rate}}</td>
            <td class="receipt__right">{{base}}</td>
            <td class="receipt__right">{{quota}}</td>
          </tr>
        {{/each}}
        <tr>
          <td><strong>{{labels.total}}</strong></td>
          <td class="receipt__right"><strong>{{taxBaseTotal}}</strong></td>
          <td class="receipt__right"><strong>{{taxQuotaTotal}}</strong></td>
        </tr>
      </tbody>
    </table>
  </section>

  <footer class="receipt__section">
    <div class="receipt__box receipt__mono">{{labels.qrPlaceholder}}</div>
    <div class="receipt__subtitle receipt__center receipt__mono">Salut ERP</div>
  </footer>
`,E={en:L,es:C};function m(t){return t.toLowerCase().startsWith("es")?"es":"en"}function g(t){return E[m(t)]}function i(t,e,r){return new Intl.NumberFormat(e,{style:"currency",currency:r,minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}function _(t,e,r){return new Intl.NumberFormat(e,{minimumFractionDigits:r,maximumFractionDigits:r}).format(t)}function h(t,e){return _(t,e,2)}function k(t,e){const r=t==null?new Date:new Date(t);return new Intl.DateTimeFormat(e,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)}function B(t){const e=g(t);return{taxId:e.stores.pos.receipt.taxId,phone:e.stores.pos.receipt.phone,operationDateTime:e.stores.pos.receipt.operationDateTime,receiptId:e.stores.pos.receipt.receiptId,name:e.stores.pos.receipt.name,unitPrice:e.stores.pos.receipt.unitPrice,amount:e.stores.pos.receipt.amount,total:e.stores.pos.total,change:e.stores.pos.change,taxBreakdown:e.stores.pos.receipt.taxBreakdown,base:e.stores.pos.receipt.base,quota:e.stores.pos.receipt.quota,qrPlaceholder:e.stores.pos.receipt.qrPlaceholder,notProvided:e.common.notProvided}}function F(t){const e=t<=1?t*100:t;return Math.abs(e-4)<.5?4:Math.abs(e-10)<.5?10:21}const N=R(A,t=>{const e=m(t.language),r=g(e),u=B(e),o=t.store.currency??"EUR",p=u.notProvided,n=new Map([[4,{base:0,quota:0,itemCount:0}],[10,{base:0,quota:0,itemCount:0}],[21,{base:0,quota:0,itemCount:0}]]),b=t.items.map(s=>{const a=s.quantity*s.price,q=s.vatRate<=1?s.vatRate:s.vatRate/100,P=F(s.vatRate),d=a/(1+q),T=a-d,c=n.get(P);c&&(c.base+=d,c.quota+=T,c.itemCount+=1);const l=!!(s.isWeighted&&s.weightKg!=null),I=l?"1":_(s.quantity,e,Number.isInteger(s.quantity)?0:3),D=l?s.unitPricePerKg??s.price:s.price;return{name:s.name,displayQuantity:I,unitPrice:s.quantity>1?h(D,e):"",lineTotal:h(a,e),isWeighted:l,weightLine:l?`${_(s.weightKg??s.quantity,e,3)} kg x ${i(s.unitPricePerKg??s.price,e,o)}/kg = ${i(a,e,o)}`:void 0}}),v=[4,10,21].flatMap(s=>{const a=n.get(s)??{base:0,quota:0,itemCount:0};return a.itemCount===0?[]:[{rate:`${s}%`,base:i(a.base,e,o),quota:i(a.quota,e,o)}]}),f=Array.from(n.values()).reduce((s,a)=>s+a.base,0),y=Array.from(n.values()).reduce((s,a)=>s+a.quota,0),x=t.method==="cash"?r.stores.pos.cash:r.stores.pos.creditCard,w=t.method==="cash"?t.cash??t.total:t.total;return{storeName:t.store.name?.trim()||"Salut",storeTaxId:t.store.taxId?.trim()||p,address:t.store.address?.trim()||p,phone:t.store.phone?.trim()||p,operationDateTime:k(t.operationDate,e),receiptId:t.receiptId,items:b,total:i(t.total,e,o),paymentLabel:x,paymentAmount:i(w,e,o),change:t.change!=null?i(t.change,e,o):void 0,showChange:t.method==="cash"&&t.change!=null&&t.change>0,taxes:v,taxBaseTotal:i(f,e,o),taxQuotaTotal:i(y,e,o),labels:u}});export{N as saleReceipt};
