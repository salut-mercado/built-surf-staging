import{bX as $,bB as b,cd as h,ce as f}from"./index-tUBExPnK.js";const y={en:f,es:h};function w(t){return t.toLowerCase().startsWith("es")?"es":"en"}function R(t){return y[w(t)]}function I(t){const i=R(t);return{...i.stores.view.overview.zReportReceipt,cashPayment:i.stores.pos.cash,cardPayment:i.stores.pos.creditCard}}const L=`
  <header class="receipt__header">
    <div class="receipt__title">{{title}}</div>
  </header>

  <section class="receipt__section receipt__mono">
    <div class="receipt__stack">
      {{#each headerLines}}
        <div>{{this}}</div>
      {{/each}}
    </div>
  </section>

  <div class="receipt__divider"></div>

  <section class="receipt__section receipt__mono">
    <div class="receipt__stack">
      {{#each salesLines}}
        <div>{{this}}</div>
      {{/each}}
    </div>
  </section>

  <div class="receipt__divider"></div>

  <section class="receipt__section receipt__mono">
    {{#each paymentRows}}
      <div class="receipt__row{{#if isIndented}} receipt__muted{{/if}}">
        <span class="receipt__label"{{#if isIndented}} style="padding-left: 1.5em;"{{/if}}>{{label}}</span>
        <span class="receipt__value">{{value}}</span>
      </div>
    {{/each}}
  </section>
`,C=$(L,t=>{const i=t.language??"en",e=I(i),s=a=>new Intl.NumberFormat(i,{minimumFractionDigits:2,maximumFractionDigits:2}).format(a),l=a=>{const o=new Date(a??t.date);return Number.isNaN(o.getTime())?a??t.date:new Intl.DateTimeFormat(i,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(o)},n=a=>t.sales_by_tax[a]||{gross:0,vat:0},_=n(4),d=n(10),v=n(21),c=t.receipt_count??0,m=b.getState().receiptOptions.includeZReportPaymentVatBreakdown??!1,u=(a,o)=>{const r=t.sales_by_payment[a]||{gross_4:0,vat_4:0,gross_10:0,vat_10:0,gross_21:0,vat_21:0,total_vat:0},g=r.gross_4+r.gross_10+r.gross_21,p=[{label:o,value:s(g)}];return!m||g<=0?p:p.concat([{label:`${e.gross} 4%`,value:s(r.gross_4),isIndented:!0},{label:`${e.vat} 4%`,value:s(r.vat_4),isIndented:!0},{label:`${e.gross} 10%`,value:s(r.gross_10),isIndented:!0},{label:`${e.vat} 10%`,value:s(r.vat_10),isIndented:!0},{label:`${e.gross} 21%`,value:s(r.gross_21),isIndented:!0},{label:`${e.vat} 21%`,value:s(r.vat_21),isIndented:!0},{label:e.totalVat,value:s(r.total_vat),isIndented:!0}])};return{title:e.title,headerLines:[t.store_name,t.store_address,`${e.taxId}: ${t.store_tax_id??"-"}`,`${e.registerName}: ${t.register_name??"-"}`,`${e.registerId}: ${t.register_identifier??t.register_name??"-"}`,`${e.periodStart}: ${l(t.period_start)}`,`${e.periodEnd}: ${l(t.period_end)}`],salesLines:[`${e.totalSales}: ${s(t.total_sales)}`,`${e.totalNet}: ${s(t.total_net)}`,`${e.gross} 4%: ${s(_.gross)}`,`${e.vat} 4%: ${s(_.vat)}`,`${e.gross} 10%: ${s(d.gross)}`,`${e.vat} 10%: ${s(d.vat)}`,`${e.gross} 21%: ${s(v.gross)}`,`${e.vat} 21%: ${s(v.vat)}`,`${e.totalVat}: ${s(t.total_vat)}`],paymentRows:[...u("CASH",e.cashPayment),...u("CARD",e.cardPayment),{label:e.receiptCount,value:s(c)},{label:e.averagePerReceipt,value:s(t.average_receipt_total??(c>0?t.total_sales/c:0))}]}});export{C as z};
