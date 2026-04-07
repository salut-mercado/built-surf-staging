function r(e,t){const l=e.filter(n=>n.parent_category_id===t);return l.length===0?[t]:[t,...l.map(n=>r(e,n.id))].flat()}export{r as g};
