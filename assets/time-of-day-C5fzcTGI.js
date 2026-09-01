const n=u=>{if(!u)return null;const[r,t]=u.split(":").map(Number);return Number.isNaN(r)||Number.isNaN(t)||r<0||r>23||t<0||t>59?null:r*60+t};export{n as t};
