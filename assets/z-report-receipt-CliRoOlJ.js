import{ch as $,bO as b,bJ as h,cy as f,cz as y}from"./index-C8O7mnbc.js";const R={en:y,es:f};function w(t){return t.toLowerCase().startsWith("es")?"es":"en"}function I(t){return R[w(t)]}function L(t){const a=I(t);return{...a.stores.view.overview.zReportReceipt,cashPayment:a.stores.pos.cash,cardPayment:a.stores.pos.creditCard}}const P=`
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
`,C=$(P,t=>{const a=t.language??"en",e=L(a),s=i=>new Intl.NumberFormat(a,{minimumFractionDigits:2,maximumFractionDigits:2}).format(i),c=i=>h(i??t.date,a,t.timezone),o=i=>t.sales_by_tax[i]||{gross:0,vat:0},l=o(4),_=o(10),v=o(21),n=t.receipt_count??0,u=b.getState().receiptOptions.includeZReportPaymentVatBreakdown??!1,d=(i,m)=>{const r=t.sales_by_payment[i]||{gross_4:0,vat_4:0,gross_10:0,vat_10:0,gross_21:0,vat_21:0,total_vat:0},p=r.gross_4+r.gross_10+r.gross_21,g=[{label:m,value:s(p)}];return!u||p<=0?g:g.concat([{label:`${e.gross} 4%`,value:s(r.gross_4),isIndented:!0},{label:`${e.vat} 4%`,value:s(r.vat_4),isIndented:!0},{label:`${e.gross} 10%`,value:s(r.gross_10),isIndented:!0},{label:`${e.vat} 10%`,value:s(r.vat_10),isIndented:!0},{label:`${e.gross} 21%`,value:s(r.gross_21),isIndented:!0},{label:`${e.vat} 21%`,value:s(r.vat_21),isIndented:!0},{label:e.totalVat,value:s(r.total_vat),isIndented:!0}])};return{title:e.title,headerLines:[t.store_name,t.store_address,`${e.taxId}: ${t.store_tax_id??"-"}`,`${e.registerName}: ${t.register_name??"-"}`,`${e.registerId}: ${t.register_identifier??t.register_name??"-"}`,`${e.periodStart}: ${c(t.period_start)}`,`${e.periodEnd}: ${c(t.period_end)}`],salesLines:[`${e.totalSales}: ${s(t.total_sales)}`,`${e.totalNet}: ${s(t.total_net)}`,`${e.gross} 4%: ${s(l.gross)}`,`${e.vat} 4%: ${s(l.vat)}`,`${e.gross} 10%: ${s(_.gross)}`,`${e.vat} 10%: ${s(_.vat)}`,`${e.gross} 21%: ${s(v.gross)}`,`${e.vat} 21%: ${s(v.vat)}`,`${e.totalVat}: ${s(t.total_vat)}`],paymentRows:[...d("CASH",e.cashPayment),...d("CARD",e.cardPayment),{label:e.receiptCount,value:s(n)},{label:e.averagePerReceipt,value:s(t.average_receipt_total??(n>0?t.total_sales/n:0))}]}});export{C as z};
