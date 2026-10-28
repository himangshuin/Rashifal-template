/* UI/UX layer: context toolbar, panel tabs, slide thumbnails, export menu, dark mode, shortcuts */
(()=>{
const st=document.createElement('style');st.textContent=`
:root[data-theme="dark"]{--bg:#15131a;--sf:#221f2a;--tx:#f0ecf6;--mu:#9d95a8;--bd:#383242}
header{padding:8px 14px;gap:6px}header button,header select{border-radius:9px;padding:6px 10px;font-size:13px}
#ctx{display:flex;align-items:center;gap:4px;padding:6px 14px;background:var(--sf);border-bottom:1px solid var(--bd);overflow-x:auto;white-space:nowrap;min-height:46px}
#ctx .gp{display:flex;align-items:center;gap:4px;padding-right:8px;margin-right:4px;border-right:1px solid var(--bd)}
#ctx button{padding:5px 9px;font-size:13px;min-width:32px;border-radius:8px}#ctx button.on{background:var(--ac);color:#fff;border-color:var(--ac)}
#ctx select,#ctx input[type=number]{padding:5px 6px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx);font:inherit;font-size:13px}
#ctx input[type=number]{width:60px}#ctx input[type=color]{width:34px;height:30px;padding:1px;border:1px solid var(--bd);border-radius:8px;background:none;cursor:pointer}
#ctx .hint{color:var(--mu);font-size:13px}#ctx [hidden]{display:none!important}
.pt{display:flex;gap:4px;background:var(--bg);padding:3px;border-radius:10px;margin-bottom:8px}.pt button{flex:1;border:0;background:none;border-radius:8px}.pt button.on{background:var(--sf);box-shadow:0 1px 4px rgba(0,0,0,.18);font-weight:700}.pt button:disabled{opacity:.4}
.xp{position:relative}.xm{position:absolute;right:0;top:115%;background:var(--sf);border:1px solid var(--bd);border-radius:12px;padding:6px;display:none;flex-direction:column;gap:2px;min-width:200px;box-shadow:0 12px 32px rgba(0,0,0,.28);z-index:20}.xm.o{display:flex}
.xm button{background:none!important;color:var(--tx)!important;text-align:left;border:0!important;padding:9px 12px!important;font-weight:500!important}.xm button:hover{background:var(--bg)!important}
.chips{align-items:center;padding:8px 14px;gap:10px;background:var(--sf)}
.chips button.tb{flex:0 0 auto;position:relative;display:block;width:76px;height:min(calc(76px*var(--phn,1350)/1080),150px);padding:0;border-radius:10px;overflow:hidden;border:2px solid var(--bd);background:#fff!important}
.chips button.tb.on{border-color:var(--ac);box-shadow:0 0 0 3px rgba(124,58,237,.28)}
.chips .tb .c3{position:absolute;left:0;top:0;width:1080px;height:var(--ph,1350px);transform:scale(.0704);transform-origin:0 0;pointer-events:none}
.chips .tb .nn{position:absolute;left:4px;bottom:3px;background:rgba(0,0,0,.65);color:#fff;font-size:10px;padding:0 6px;border-radius:99px}
.chips button.tb.d::after{content:"✓";position:absolute;right:4px;top:3px;font-size:10px;color:#fff;background:#22a06b;border-radius:50%;width:16px;height:16px;display:grid;place-items:center}
.chips button.ab{flex:0 0 auto;height:96px;width:62px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:11px;border:2px dashed var(--bd);border-radius:10px;padding:0;background:none}
.chips button.ab b{font-size:22px;font-weight:400}.chips button.ab:hover{border-color:var(--ac);color:var(--ac)}
.zb{display:flex;align-items:center}.zb span{font-size:12px;color:var(--mu);margin:0 4px;min-width:44px;text-align:center}
.kb{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;font-size:13px}.kb kbd{background:var(--bg);border:1px solid var(--bd);border-radius:6px;padding:1px 7px;font-family:inherit}`;
document.head.appendChild(st);
const hd=document.querySelector('header');

/* theme + help + export menu */
const tg=document.createElement('button'),hp=document.createElement('button');tg.title='Light / dark mode';hp.textContent='?';hp.title='Keyboard shortcuts';
const setT=t=>{document.documentElement.dataset.theme=t;tg.textContent=t==='dark'?'☀':'🌙';try{localStorage.setItem('rashi_theme',t)}catch(e){}};
let t0=null;try{t0=localStorage.getItem('rashi_theme')}catch(e){}setT(t0||((window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light'));
tg.onclick=()=>setT(document.documentElement.dataset.theme==='dark'?'light':'dark');
hp.onclick=()=>modal('<h3 style="margin:0 0 12px">Keyboard shortcuts</h3><div class="kb">'+[['Double-click text','Edit text'],['Ctrl + C / V','Copy / paste element'],['Ctrl + Z / Y','Undo / redo'],['Arrow keys (Shift = 10px)','Nudge selected'],['Delete','Delete selected'],['Alt while dragging','Disable snapping'],['PageUp / PageDown','Previous / next slide'],['Ctrl + D','Duplicate selected'],['Ctrl + ] / [','Bring forward / send back'],['Ctrl + scroll','Zoom canvas'],['Right-click','Context menu'],['Shift while rotating','Snap to 15°'],['Ctrl + V (image)','Paste image from clipboard'],['Drag a file in','Upload image']].map(([k,v])=>`<kbd>${k}</kbd><span>${v}</span>`).join('')+'</div>');
const xp=document.createElement('div');xp.className='xp';const xb=document.createElement('button');xb.className='pr';xb.textContent='⬇ Export ▾';const xm=document.createElement('div');xm.className='xm';
[['b1','Current slide (PNG / JPG)'],['b2','All slides (ZIP + captions)'],['b3','All slides (PDF)']].forEach(([id,t])=>{const b=$(id);b.textContent=t;b.classList.remove('pr');xm.appendChild(b);b.addEventListener('click',()=>xm.classList.remove('o'))});
xp.append(xb,xm);xb.onclick=e=>{e.stopPropagation();xm.classList.toggle('o')};document.addEventListener('click',()=>xm.classList.remove('o'));
$('re').after(xp);hd.insertBefore(tg,xp);hd.insertBefore(hp,xp);

/* context toolbar */
const C=document.createElement('div');C.id='ctx';hd.after(C);
C.innerHTML=`<span class="hint" id="ch">Click an element to edit it · double-click text to type · use the left panels to add designs</span>
<div class="gp" id="gt" hidden><select id="cf" title="Font">${FONTS.map(f=>`<option>${f}</option>`).join('')}</select><button data-a="fs-" title="Smaller">A−</button><input type="number" id="cs" min="8" max="500" title="Font size"><button data-a="fs+" title="Larger">A+</button><button data-a="b" title="Bold"><b>B</b></button><button data-a="al-l" title="Align left">⇤</button><button data-a="al-c" title="Centre">↔</button><button data-a="al-r" title="Align right">⇥</button><button data-a="al-j" title="Justify">☰</button><input type="color" id="cc" title="Text colour"></div>
<div class="gp" id="gs" hidden><input type="color" id="cb" title="Main colour"><input type="color" id="cb2" title="Second colour"></div>
<div class="gp" id="ga" hidden><button data-a="fw" title="Bring forward">⬆</button><button data-a="bk" title="Send backward">⬇</button><button data-a="ch" title="Centre horizontally">⇔</button><button data-a="cv" title="Centre vertically">⇕</button><button data-a="lk" title="Lock position">🔒</button><button data-a="dp" title="Duplicate">⧉</button><button data-a="dl" title="Delete">🗑</button></div>`;
const k1=e=>e.t==='gfx'?'c':e.t==='art'?'c1':'bg',k2=e=>e.t==='gfx'||e.t==='art'?'c2':'bg2';
function ctxUpd(){const el=sel&&get(sel);$('ch').hidden=!!el;['gt','gs','ga'].forEach(i=>$(i).hidden=!el);if(!el)return;
 $('gt').hidden=el.t!=='text';$('gs').hidden=!['rect','gfx','art'].includes(el.t);
 if(el.t==='text'){$('cf').value=el.ff;if(document.activeElement!==$('cs'))$('cs').value=el.fs;$('cc').value=hex(el.color);C.querySelector('[data-a=b]').classList.toggle('on',!!el.b);['l','c','r','j'].forEach(a=>C.querySelector('[data-a=al-'+a+']').classList.toggle('on',(el.al||'l')===a))}
 else if(!$('gs').hidden){$('cb').value=hex(el[k1(el)]);$('cb2').value=hex(el[k2(el)])}
 C.querySelector('[data-a=lk]').classList.toggle('on',!!el.lk)}
C.addEventListener('input',e=>{const el=sel&&get(sel);if(!el)return;const t=e.target,i=t.id;
 if(i==='cf'){el.ff=t.value;document.fonts.load(`400 20px "${t.value}"`).then(()=>document.fonts.load(`800 20px "${t.value}"`)).then(()=>refresh(el))}
 else if(i==='cs')el.fs=Math.max(8,+t.value||el.fs);else if(i==='cc')el.color=t.value;
 else if(i==='cb')el[k1(el)]=t.value;else if(i==='cb2')el[k2(el)]=t.value;else return;
 refresh(el);panel()});
C.addEventListener('click',e=>{const b=e.target.closest('[data-a]'),el=sel&&get(sel);if(!b||!el)return;const a=b.dataset.a,A=P[cur].els,i=A.indexOf(el);
 if(a==='fs-'||a==='fs+')el.fs=Math.max(8,(el.fs||24)+(a==='fs+'?2:-2));
 else if(a==='b')el.b=el.b?0:1;else if(a.startsWith('al-'))el.al=a[3];
 else if(a==='ch')el.x=Math.round((1080-el.w)/2);else if(a==='cv')el.y=Math.round((1350-el.h)/2);else if(a==='lk')el.lk=el.lk?0:1;
 else if(a==='fw'&&i<A.length-1){A.splice(i,2,A[i+1],el);render();commit();return}
 else if(a==='bk'&&i>0){A.splice(i-1,2,el,A[i-1]);render();commit();return}
 else if(a==='dp'){const c={...JSON.parse(JSON.stringify(el)),id:uid++,x:el.x+24,y:el.y+24};delete c.key;A.push(c);sel=c.id;render();commit();return}
 else if(a==='dl'){del();return}
 refresh(el);panel()});
const rfW=refresh;refresh=function(el){rfW(el);ctxUpd()};

/* right panel tabs: Element / Page */
let PT='el';window.setPT=v=>{PT=v;panel()};const pn2=panel,sW=select;
select=function(id){if(id)PT='el';sW(id)};
const lyHTML=()=>`<div class="ly">${[...P[cur].els].reverse().map(e=>`<div class="lr${e.id===sel?' on':''}" data-ly="${e.id}"><span class="li">${e.t==='text'?'T':e.t==='img'?'🖼':e.t==='gfx'?'✦':e.t==='art'?'♈':'▭'}</span><span class="ln">${esc(e.t==='text'?(e.txt||'').replace(/\n/g,' ').slice(0,24)||'Text':(e.g||e.key||(e.t==='img'?'Image':'Shape')))}</span><button data-lyh="${e.id}" title="Show / hide">${e.hd?'🚫':'👁'}</button><button data-lyl="${e.id}" title="Lock">${e.lk?'🔒':'🔓'}</button><button data-lyu="${e.id}" title="Forward">↑</button><button data-lyd="${e.id}" title="Back">↓</button></div>`).join('')}</div>`;
panel=function(){const s=sel,el=s&&get(s),ly=PT==='ly',pg=!ly&&(!el||PT==='pg');if(ly)$('props').innerHTML='';else if(pg){sel=null;pn2();sel=s}else pn2();
 $('props').insertAdjacentHTML('afterbegin',`<div class="pt"><button data-pt="el" class="${pg||ly?'':'on'}" ${el?'':'disabled'}>Element</button><button data-pt="ly" class="${ly?'on':''}">Layers</button><button data-pt="pg" class="${pg?'on':''}">Page</button></div>`);
 if(ly)$('props').insertAdjacentHTML('beforeend',lyHTML());ctxUpd()};
$('props').addEventListener('click',e=>{const t=e.target,b=t.closest('[data-pt]');if(b&&!b.disabled){PT=b.dataset.pt;panel();return}
 const A=P[cur].els,g=k=>A.find(x=>x.id===+t.dataset[k]);
 if(t.dataset.lyh){const x=g('lyh');x.hd=x.hd?0:1;render();commit();return}
 if(t.dataset.lyl){const x=g('lyl');x.lk=x.lk?0:1;panel();commit();return}
 if(t.dataset.lyu){const x=g('lyu'),i=A.indexOf(x);if(i<A.length-1){A.splice(i,2,A[i+1],x);render();commit()}return}
 if(t.dataset.lyd){const x=g('lyd'),i=A.indexOf(x);if(i>0){A.splice(i-1,2,x,A[i-1]);render();commit()}return}
 const r=t.closest('[data-ly]');if(r&&!t.closest('button')){sel=+r.dataset.ly;updSel();panel()}});

/* slide thumbnails strip + navigation */
const zb=document.querySelector('.zb'),pv=document.createElement('button'),nx=document.createElement('button'),sn=document.createElement('span');sn.id='sn';pv.textContent='‹';nx.textContent='›';pv.title='Previous slide';nx.title='Next slide';zb.prepend(pv,sn,nx);
const go=d=>{const k=cur+d;if(k<0||k>=P.length)return;cur=k;sel=null;render();persist()};pv.onclick=()=>go(-1);nx.onclick=()=>go(1);
addEventListener('keydown',e=>{const a=document.activeElement;if(a&&(/INPUT|TEXTAREA|SELECT/.test(a.tagName)||a.isContentEditable))return;if(e.key==='PageUp'){e.preventDefault();go(-1)}if(e.key==='PageDown'){e.preventDefault();go(1)}});
const chW=chips,TC=new Map();
chips=function(){chW();const Z=$('chips'),kids=[...Z.children];
 kids.slice(0,P.length).forEach((b,i)=>{const pg=P[i],nb=document.createElement('button');nb.className='tb'+(i===cur?' on':'')+(/\bd\b/.test(b.className)?' d':'');nb.title=(R[i]?R[i][0]:'')||'Slide '+(i+1);
  const c=document.createElement('div');c.className='c3';c.style.background=pg.bg||'#fff';const key=pg.bg+JSON.stringify(pg.els)+JSON.stringify(V);
  if(TC.has(key))c.innerHTML=TC.get(key);else{pg.els.forEach(el=>{const n=document.createElement('div');n.className='el';c.appendChild(n);paintEl(n,el)});TC.set(key,c.innerHTML);if(TC.size>60)TC.delete(TC.keys().next().value)}
  nb.append(c);nb.insertAdjacentHTML('beforeend',`<span class="nn">${i+1}</span>`);nb.onclick=()=>{cur=i;sel=null;render();persist()};Z.replaceChild(nb,b)});
 kids.slice(P.length).forEach((b,j)=>{b.className='ab';const l=[['＋','Add'],['⧉','Copy'],['🗑','Delete']][j]||['•',''];b.innerHTML=`<b>${l[0]}</b>${l[1]}`});
 sn.textContent=`${cur+1} / ${P.length}`;const on=Z.querySelector('.tb.on');if(on&&on.scrollIntoView)on.scrollIntoView({inline:'nearest',block:'nearest'})};
render();
})();
