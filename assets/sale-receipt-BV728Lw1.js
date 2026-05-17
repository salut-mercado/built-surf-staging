import{ch as R,cy as D,cz as S,bJ as C}from"./index-C8O7mnbc.js";const A=`
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
    <div class="receipt__barcode-wrap">
      <div class="receipt__barcode-full">{{{barcodeSvg}}}</div>
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
    {{#if receiptQrSvg}}
      <div class="receipt__promo">
        <div class="receipt__qr-box">{{{receiptQrSvg}}}</div>
        <div class="receipt__promo-copy">
          <div class="receipt__promo-title">Salut ERP</div>
          <div class="receipt__promo-text">{{labels.qrPromoLine1}}</div>
          <div class="receipt__promo-text">{{labels.qrPromoLine2}}</div>
        </div>
      </div>
    {{else}}
      <div class="receipt__promo-copy receipt__promo-copy--solo">
        <div class="receipt__promo-title">Salut ERP</div>
        <div class="receipt__promo-text">{{labels.qrPromoLine1}}</div>
        <div class="receipt__promo-text">{{labels.qrPromoLine2}}</div>
      </div>
    {{/if}}
  </footer>
`,B={en:S,es:D};function h(e){return e.toLowerCase().startsWith("es")?"es":"en"}function g(e){return B[h(e)]}function a(e,t,o){return new Intl.NumberFormat(t,{style:"currency",currency:o,minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}function d(e,t,o){return new Intl.NumberFormat(t,{minimumFractionDigits:o,maximumFractionDigits:o}).format(e)}function m(e,t){return d(e,t,2)}function E(e,t,o){const c=typeof e=="number"?new Date(e):e??null;return C(c,t,o)}function N(e){const t=g(e);return{taxId:t.stores.pos.receipt.taxId,phone:t.stores.pos.receipt.phone,operationDateTime:t.stores.pos.receipt.operationDateTime,receiptId:t.stores.pos.receipt.receiptId,name:t.stores.pos.receipt.name,unitPrice:t.stores.pos.receipt.unitPrice,amount:t.stores.pos.receipt.amount,total:t.stores.pos.total,change:t.stores.pos.change,taxBreakdown:t.stores.pos.receipt.taxBreakdown,base:t.stores.pos.receipt.base,quota:t.stores.pos.receipt.quota,qrPromoLine1:t.stores.pos.receipt.qrPromoLine1,qrPromoLine2:t.stores.pos.receipt.qrPromoLine2,notProvided:t.common.notProvided}}function Q(e){const t=e<=1?e*100:e;return Math.abs(t-4)<.5?4:Math.abs(t-10)<.5?10:21}const F=R(A,e=>{const t=h(e.language),o=g(t),c=N(t),i=e.store.currency??"EUR",_=c.notProvided,n=new Map([[4,{base:0,quota:0,itemCount:0}],[10,{base:0,quota:0,itemCount:0}],[21,{base:0,quota:0,itemCount:0}]]),b=e.items.map(s=>{const r=s.quantity*s.price,P=s.vatRate<=1?s.vatRate:s.vatRate/100,T=Q(s.vatRate),u=r/(1+P),w=r-u,p=n.get(T);p&&(p.base+=u,p.quota+=w,p.itemCount+=1);const l=!!(s.isWeighted&&s.weightKg!=null),L=l?"1":d(s.quantity,t,Number.isInteger(s.quantity)?0:3),I=l?s.unitPricePerKg??s.price:s.price;return{name:s.name,displayQuantity:L,unitPrice:s.quantity>1?m(I,t):"",lineTotal:m(r,t),isWeighted:l,weightLine:l?`${d(s.weightKg??s.quantity,t,3)} kg x ${a(s.unitPricePerKg??s.price,t,i)}/kg = ${a(r,t,i)}`:void 0}}),v=[4,10,21].flatMap(s=>{const r=n.get(s)??{base:0,quota:0,itemCount:0};return r.itemCount===0?[]:[{rate:`${s}%`,base:a(r.base,t,i),quota:a(r.quota,t,i)}]}),f=Array.from(n.values()).reduce((s,r)=>s+r.base,0),y=Array.from(n.values()).reduce((s,r)=>s+r.quota,0),x=e.method==="cash"?o.stores.pos.cash:o.stores.pos.creditCard,q=e.method==="cash"?e.cash??e.total:e.total;return{storeName:e.store.name?.trim()||"Salut",storeTaxId:e.store.taxId?.trim()||_,address:e.store.address?.trim()||_,phone:e.store.phone?.trim()||_,operationDateTime:E(e.operationDate,t,e.store.timezone),receiptNumber:e.receiptNumber,receiptBarcode:e.receiptBarcode,barcodeSvg:e.barcodeSvg,receiptQrSvg:e.receiptQrSvg,items:b,total:a(e.total,t,i),paymentLabel:x,paymentAmount:a(q,t,i),change:e.change!=null?a(e.change,t,i):void 0,showChange:e.method==="cash"&&e.change!=null&&e.change>0,taxes:v,taxBaseTotal:a(f,t,i),taxQuotaTotal:a(y,t,i),labels:c}});export{F as s};
