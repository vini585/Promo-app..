(()=>{
const $$=s=>document.querySelector(s);
const mk0=mk;
mk=function(txt,links,o){const r=mk0(txt,links,o);if(!r)return r;
 const c=r.t.replace(/\s*[-–—|:]?\s*R\$\s?[\d.]+(?:,\d{2})?.*$/,'').replace(/^[^\p{L}\p{N}]+/u,'').replace(/[^\p{L}\p{N}).!"”%]+$/u,'').trim();
 if(c.length>3)r.t=c;r.k=r.p?'prod':'cup';return r};
const kk=i=>i.p?'prod':'cup',catOf=i=>(CATS.find(c=>c[1].test(i.t+' '+i.txt))||['Outros'])[0];
const so=a=>sort===1?[...a].sort((x,y)=>sc(y)-sc(x)):sort===2?[...a].sort((x,y)=>(x.pn||1e12)-(y.pn||1e12)):a;
render=function(){
 const q=$$('#q').value.trim();
 const bp=base.filter(i=>kk(i)==='prod'),cnt={};bp.forEach(i=>{const c=catOf(i);cnt[c]=(cnt[c]||0)+1});
 const nc=base.filter(i=>kk(i)==='cup').length;
 const names=[...CATS.map(c=>c[0]),'Outros'].filter(n=>cnt[n]);
 const ss=['',...STORES.map(s=>s[0]).concat('Outras').filter(n=>base.some(i=>i.st===n))];
 $$('#cs').innerHTML=ss.map(n=>`<button data-s="${n}" class="${n===store?'on':''}">${n||'Todas as lojas'}</button>`).join('');
 $$('#cc').innerHTML=base.length?[['','Todas'],...names.map(n=>[n,n+' ('+cnt[n]+')']),...(nc?[['__cup','🎟 Cupons e sem preço ('+nc+')']]:[])].map(c=>`<button data-c="${c[0]}" class="${c[0]===cat?'on':''}">${c[1]}</button>`).join(''):'';
 $$('#so').textContent=MODES[sort];
 const pool=base.filter(i=>(!store||i.st===store)&&(!q||hit(i,q)));
 const P=pool.filter(i=>kk(i)==='prod'),C=pool.filter(i=>kk(i)==='cup');
 const flat=a=>{a=so(a);return a.length?a.slice(0,lim).map((i,n)=>card(i,n)).join('')+(a.length>lim?'<button class="mo" id="mo">Mostrar mais</button>':''):'<div class="msg">Nada encontrado com esse filtro.</div>'};
 let h='';
 if(!base.length)h=!chans.length?'<div class="msg">Adicione um canal do Telegram ou cole ofertas do WhatsApp no menu.<br><button id="ac">Abrir menu</button></div>':loading?'<div class="sk"></div><div class="sk"></div><div class="sk"></div>':`<div class="msg">${failed?'Não consegui ler os posts. Confira o @ do canal (público) e a internet.':'Nada por aqui ainda.'}</div>`;
 else if(cat==='__cup')h=flat(C);
 else if(cat)h=flat(P.filter(i=>catOf(i)===cat));
 else if(q)h=flat([...P,...C]);
 else{const secs=[...names.map(n=>[n,P.filter(i=>catOf(i)===n)]),['__cup',C]].filter(s=>s[1].length);
  h=secs.length?secs.map(([n,a])=>{a=so(a);return `<h2 class="sec">${n==='__cup'?'🎟 Cupons e sem preço':n} <span class="meta">${a.length}</span></h2>`+a.slice(0,4).map((i,k)=>card(i,k)).join('')+(a.length>4?`<button class="mo" data-cat="${n}">Ver todos (${a.length})</button>`:'')}).join(''):'<div class="msg">Nada encontrado com esse filtro.</div>'}
 $$('#v1').innerHTML=h;
 $$('#fc').textContent='Favoritos'+(watch.length+saved.length?' ('+(watch.length+saved.length)+')':'');
 $$('#wl').innerHTML=watch.length?watch.map(w=>{const m=base.filter(i=>hit(i,w.name)).slice(0,2);return `<div><div class="row" style="margin-bottom:6px"><b style="flex:1">${esc(w.name)}</b><button data-w="${w.id}" aria-label="Remover">✕</button></div>${m.length?m.map((i,n)=>card(i,n)).join(''):'<p class="meta">Sem promoção nos posts recentes.</p>'}</div>`}).join(''):'';
 $$('#sl').innerHTML=saved.length?saved.map((i,n)=>card(i,n,'s')).join(''):'<p class="msg" style="padding:16px">Toque na ☆ de uma oferta para salvar.</p>'};
search=function(){const t=$$('#sq').value.trim();if(!t)return;const m=base.filter(i=>i.p&&hit(i,t));
 $$('#sr').innerHTML=`<button id="sw" class="full pri">☆ Vigiar "${esc(t)}"</button><div class="meta" style="margin:14px 0 8px">Nas ofertas que você acompanha</div><div style="display:grid;gap:12px">${m.length?m.slice(0,20).map((i,n)=>card(i,n)).join(''):'<p class="meta">Nenhum post recente com esse nome.</p>'}</div><div class="meta" style="margin:16px 0 8px">Comparar preços nas lojas</div>${links(t)}`;
 $$('#sw').onclick=()=>{if(addW(t))toast('Vigiando "'+t+'". Veja em Favoritos.')}};
$$('#sb').onclick=search;
document.addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(b){cat=b.dataset.cat;lim=40;render();scrollTo(0,0)}});
$$('#cc').className='chips';$$('#cs').className='chips s';$$('#fx').insertBefore($$('#cc'),$$('#cs'));
render();
})();
