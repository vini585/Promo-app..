(()=>{
const wd=i=>new Set(norm(i.t).replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(x=>x.length>2));
function dd(a){const out=[];for(const i of a){const w=wd(i);
 if(!out.some(o=>{if(o.url===i.url)return true;if(!i.p||o.p!==i.p)return false;const v=o._w||(o._w=wd(o));let n=0;w.forEach(x=>v.has(x)&&n++);return n/Math.max(1,Math.min(w.size,v.size))>=.6}))out.push(i)}return out}
const R0=render;
render=function(){const m=LS('manual',[]);items=dd([...items.filter(i=>!i.man),...m].sort((a,b)=>b.ts-a.ts));R0()};
const box=document.createElement('div');
box.innerHTML='<h2>Colar oferta do WhatsApp</h2><textarea id="pw" rows="4" placeholder="Copie a mensagem no WhatsApp e cole aqui"></textarea><button id="pa" class="full pri">Adicionar à lista</button><button id="pc" class="full">Limpar ofertas coladas</button><p class="meta" style="margin-top:6px">A mensagem precisa ter o link da oferta.</p>';
document.querySelector('#pn').insertBefore(box,document.querySelector('#cl'));
document.querySelector('#pa').onclick=()=>{
 const t=document.querySelector('#pw').value.trim();
 const u=t.match(/https?:\/\/[^\s<>")]+/g)||[];
 const url=u.find(l=>STORES.some(s=>s[1].test(l)))||u[0];
 if(!url)return toast('Não achei nenhum link nessa mensagem.');
 const lines=t.split('\n').map(s=>s.trim()).filter(s=>s&&!/^https?:/.test(s));
 const pr=t.match(/R\$\s?[\d.]+(?:,\d{2})?/),cp=t.match(/cupom[:\s]+([A-Za-z0-9]{3,})/i);
 const o={id:'m'+Date.now(),man:1,t:(lines[0]||'Oferta').replace(/[*_~]/g,'').trim(),txt:t,p:pr?pr[0]:'',cp:cp?cp[1]:'',url,st:(STORES.find(s=>s[1].test(url))||['Outras'])[0],img:'',ts:Date.now(),ch:'WhatsApp'};
 SV('manual',[o,...LS('manual',[])].slice(0,30));
 document.querySelector('#pw').value='';document.querySelector('#dr').classList.remove('open');
 render();toast('Oferta adicionada à lista.')};
document.querySelector('#pc').onclick=()=>{SV('manual',[]);render();toast('Ofertas coladas removidas.')};
})();
