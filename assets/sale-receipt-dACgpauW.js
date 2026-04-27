import{bX as D,cd as R,ce as C}from"./index-Ch2KspXP.js";const S=`
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
`,A={en:C,es:R};function h(t){return t.toLowerCase().startsWith("es")?"es":"en"}function g(t){return A[h(t)]}function a(t,e,i){return new Intl.NumberFormat(e,{style:"currency",currency:i,minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}function _(t,e,i){return new Intl.NumberFormat(e,{minimumFractionDigits:i,maximumFractionDigits:i}).format(t)}function m(t,e){return _(t,e,2)}function B(t,e){const i=t==null?new Date:new Date(t);return new Intl.DateTimeFormat(e,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(i)}function E(t){const e=g(t);return{taxId:e.stores.pos.receipt.taxId,phone:e.stores.pos.receipt.phone,operationDateTime:e.stores.pos.receipt.operationDateTime,receiptId:e.stores.pos.receipt.receiptId,name:e.stores.pos.receipt.name,unitPrice:e.stores.pos.receipt.unitPrice,amount:e.stores.pos.receipt.amount,total:e.stores.pos.total,change:e.stores.pos.change,taxBreakdown:e.stores.pos.receipt.taxBreakdown,base:e.stores.pos.receipt.base,quota:e.stores.pos.receipt.quota,qrPromoLine1:e.stores.pos.receipt.qrPromoLine1,qrPromoLine2:e.stores.pos.receipt.qrPromoLine2,notProvided:e.common.notProvided}}function N(t){const e=t<=1?t*100:t;return Math.abs(e-4)<.5?4:Math.abs(e-10)<.5?10:21}const k=D(S,t=>{const e=h(t.language),i=g(e),d=E(e),o=t.store.currency??"EUR",p=d.notProvided,c=new Map([[4,{base:0,quota:0,itemCount:0}],[10,{base:0,quota:0,itemCount:0}],[21,{base:0,quota:0,itemCount:0}]]),v=t.items.map(s=>{const r=s.quantity*s.price,P=s.vatRate<=1?s.vatRate:s.vatRate/100,w=N(s.vatRate),u=r/(1+P),L=r-u,n=c.get(w);n&&(n.base+=u,n.quota+=L,n.itemCount+=1);const l=!!(s.isWeighted&&s.weightKg!=null),T=l?"1":_(s.quantity,e,Number.isInteger(s.quantity)?0:3),I=l?s.unitPricePerKg??s.price:s.price;return{name:s.name,displayQuantity:T,unitPrice:s.quantity>1?m(I,e):"",lineTotal:m(r,e),isWeighted:l,weightLine:l?`${_(s.weightKg??s.quantity,e,3)} kg x ${a(s.unitPricePerKg??s.price,e,o)}/kg = ${a(r,e,o)}`:void 0}}),b=[4,10,21].flatMap(s=>{const r=c.get(s)??{base:0,quota:0,itemCount:0};return r.itemCount===0?[]:[{rate:`${s}%`,base:a(r.base,e,o),quota:a(r.quota,e,o)}]}),f=Array.from(c.values()).reduce((s,r)=>s+r.base,0),y=Array.from(c.values()).reduce((s,r)=>s+r.quota,0),x=t.method==="cash"?i.stores.pos.cash:i.stores.pos.creditCard,q=t.method==="cash"?t.cash??t.total:t.total;return{storeName:t.store.name?.trim()||"Salut",storeTaxId:t.store.taxId?.trim()||p,address:t.store.address?.trim()||p,phone:t.store.phone?.trim()||p,operationDateTime:B(t.operationDate,e),receiptNumber:t.receiptNumber,receiptBarcode:t.receiptBarcode,barcodeSvg:t.barcodeSvg,receiptQrSvg:t.receiptQrSvg,items:v,total:a(t.total,e,o),paymentLabel:x,paymentAmount:a(q,e,o),change:t.change!=null?a(t.change,e,o):void 0,showChange:t.method==="cash"&&t.change!=null&&t.change>0,taxes:b,taxBaseTotal:a(f,e,o),taxQuotaTotal:a(y,e,o),labels:d}});export{k as s};
