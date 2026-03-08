import{g as R,o as C,p as L}from"./index-hmVj1B4c.js";const A=`
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
      <span class="receipt__value">{{receiptNumber}}</span>
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
    <div class="receipt__box receipt__center">{{{barcodeSvg}}}</div>
    <div class="receipt__center receipt__mono receipt__small">{{receiptBarcode}}</div>
    <div class="receipt__subtitle receipt__center receipt__mono">Salut ERP</div>
  </footer>
`,B={en:L,es:C};function h(e){return e.toLowerCase().startsWith("es")?"es":"en"}function g(e){return B[h(e)]}function o(e,t,r){return new Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}function _(e,t,r){return new Intl.NumberFormat(t,{minimumFractionDigits:r,maximumFractionDigits:r}).format(e)}function m(e,t){return _(e,t,2)}function N(e,t){const r=e==null?new Date:new Date(e);return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)}function E(e){const t=g(e);return{taxId:t.stores.pos.receipt.taxId,phone:t.stores.pos.receipt.phone,operationDateTime:t.stores.pos.receipt.operationDateTime,receiptId:t.stores.pos.receipt.receiptId,name:t.stores.pos.receipt.name,unitPrice:t.stores.pos.receipt.unitPrice,amount:t.stores.pos.receipt.amount,total:t.stores.pos.total,change:t.stores.pos.change,taxBreakdown:t.stores.pos.receipt.taxBreakdown,base:t.stores.pos.receipt.base,quota:t.stores.pos.receipt.quota,notProvided:t.common.notProvided}}function k(e){const t=e<=1?e*100:e;return Math.abs(t-4)<.5?4:Math.abs(t-10)<.5?10:21}const S=R(A,e=>{const t=h(e.language),r=g(t),u=E(t),i=e.store.currency??"EUR",p=u.notProvided,c=new Map([[4,{base:0,quota:0,itemCount:0}],[10,{base:0,quota:0,itemCount:0}],[21,{base:0,quota:0,itemCount:0}]]),b=e.items.map(s=>{const a=s.quantity*s.price,T=s.vatRate<=1?s.vatRate:s.vatRate/100,q=k(s.vatRate),d=a/(1+T),P=a-d,n=c.get(q);n&&(n.base+=d,n.quota+=P,n.itemCount+=1);const l=!!(s.isWeighted&&s.weightKg!=null),I=l?"1":_(s.quantity,t,Number.isInteger(s.quantity)?0:3),D=l?s.unitPricePerKg??s.price:s.price;return{name:s.name,displayQuantity:I,unitPrice:s.quantity>1?m(D,t):"",lineTotal:m(a,t),isWeighted:l,weightLine:l?`${_(s.weightKg??s.quantity,t,3)} kg x ${o(s.unitPricePerKg??s.price,t,i)}/kg = ${o(a,t,i)}`:void 0}}),v=[4,10,21].flatMap(s=>{const a=c.get(s)??{base:0,quota:0,itemCount:0};return a.itemCount===0?[]:[{rate:`${s}%`,base:o(a.base,t,i),quota:o(a.quota,t,i)}]}),f=Array.from(c.values()).reduce((s,a)=>s+a.base,0),y=Array.from(c.values()).reduce((s,a)=>s+a.quota,0),x=e.method==="cash"?r.stores.pos.cash:r.stores.pos.creditCard,w=e.method==="cash"?e.cash??e.total:e.total;return{storeName:e.store.name?.trim()||"Salut",storeTaxId:e.store.taxId?.trim()||p,address:e.store.address?.trim()||p,phone:e.store.phone?.trim()||p,operationDateTime:N(e.operationDate,t),receiptNumber:e.receiptNumber,receiptBarcode:e.receiptBarcode,barcodeSvg:e.barcodeSvg,items:b,total:o(e.total,t,i),paymentLabel:x,paymentAmount:o(w,t,i),change:e.change!=null?o(e.change,t,i):void 0,showChange:e.method==="cash"&&e.change!=null&&e.change>0,taxes:v,taxBaseTotal:o(f,t,i),taxQuotaTotal:o(y,t,i),labels:u}});export{S as saleReceipt};
