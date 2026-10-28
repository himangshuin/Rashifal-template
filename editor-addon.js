/* Studio editor layer: left rail + panels (Templates, Elements, Text, Uploads, Background, Brand, Tools), Resize, rotate, context menu,
   floating toolbar, Present mode, zoom, drag & drop, paste images, quick colours, QR codes. Loaded last. */
(()=>{
const EA=window.EA,GFX=window.GFX3||[],TPX=window.TPX||[],MY={};GFX.forEach(g=>MY[g.n]=g);
const old={};['aT','aR','aI','aA','aC','aL'].forEach(i=>old[i]=$(i));
const nav=document.querySelector('.tools'),M=document.querySelector('.main'),hd=document.querySelector('header');
const rbBtn=[...nav.querySelectorAll('button')].find(b=>/Remove BG/.test(b.textContent));const rbFn=rbBtn&&rbBtn.onclick;
const th=()=>TH[P[cur].th??cur],A=()=>P[cur].els,PH=()=>EX.h;

/* ---------------- CSS ---------------- */
const css=document.createElement('style');css.textContent=`
:root{--ac2:#4f46e5;--rd:14px}
.main{grid-template-columns:84px 1fr 300px;grid-template-areas:"t a p"}.main.po{grid-template-columns:84px 348px 1fr 300px;grid-template-areas:"t n a p"}
.tools{grid-area:t;padding:10px 6px;gap:4px;overflow-y:auto;background:var(--sf)}.area{grid-area:a}aside{grid-area:p}
.tools button{background:none;border-radius:14px;padding:8px 2px 6px;font-size:11px;font-weight:600;color:var(--mu);position:relative;gap:4px}
.tools button svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.tools button:hover{background:var(--bg);color:var(--tx)}.tools button.on{background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;box-shadow:0 4px 14px rgba(124,58,237,.4)}
#pnl{grid-area:n;display:none;flex-direction:column;min-height:0;background:var(--sf);border-right:1px solid var(--bd);position:relative}.main.po #pnl{display:flex}
#pnl .ph{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 4px;font-size:17px}#pnl .ph button{border:0;background:none;font-size:16px;color:var(--mu)}
#pnl .pb{flex:1;overflow:auto;padding:6px 14px 18px;scroll-behavior:smooth}
#pnl .hdl{position:absolute;right:-13px;top:50%;width:26px;height:56px;padding:0;border-radius:99px;z-index:8;box-shadow:0 2px 10px rgba(0,0,0,.25);font-size:18px}
#drw{display:none!important}
.sq{display:flex;align-items:center;gap:8px;position:sticky;top:0;z-index:3;background:var(--sf);padding:6px 0 8px}.sq input{flex:1;padding:11px 14px;border:1.5px solid var(--bd);border-radius:14px;background:var(--bg);color:var(--tx);font:inherit}.sq input:focus{outline:0;border-color:var(--ac);box-shadow:0 0 0 3px rgba(124,58,237,.18)}.sq small{color:var(--mu);font-size:11px;white-space:nowrap}
.chp{display:flex;gap:6px;overflow-x:auto;padding:2px 0 10px;scrollbar-width:none}.chp::-webkit-scrollbar{display:none}.chp button{flex:0 0 auto;border-radius:99px;padding:5px 13px;font-size:12.5px}.chp button.on{background:var(--tx);color:var(--sf);border-color:var(--tx)}
.dots{display:flex;gap:6px;padding:0 0 10px;flex-wrap:wrap}.dots i{width:22px;height:22px;border-radius:50%;cursor:pointer;border:2px solid var(--sf);box-shadow:0 0 0 1px var(--bd);transition:.12s}.dots i:hover{transform:scale(1.15)}.dots i.on{box-shadow:0 0 0 2px var(--tx)}
.tgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.tc{position:relative;aspect-ratio:1080/var(--phn,1350);border-radius:12px;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2);transition:.15s}.tc:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,.28)}
.tc .c2{position:absolute;left:0;top:0;width:1080px;height:var(--ph,1350px);transform-origin:0 0}.tc .el,.pv .el,.pres .el{pointer-events:none}
.tc .lb{position:absolute;left:6px;bottom:6px;background:rgba(0,0,0,.66);color:#fff;padding:2px 9px;border-radius:99px;font-size:11px}
.tc .ov{position:absolute;inset:auto 0 0 0;display:none;gap:4px;padding:6px;background:linear-gradient(transparent,rgba(0,0,0,.6))}.tc:hover .ov{display:flex}.tc:hover .lb{display:none}.tc .ov button{flex:1;padding:5px 2px;font-size:11px;border:0;background:#fff;color:#111;font-weight:700}
.sh{display:flex;justify-content:space-between;align-items:center;margin:14px 0 6px}.sh b{font-size:14.5px}.sh button{border:0;background:none;color:var(--mu);font-size:12.5px;padding:2px 4px}.sh button:hover{color:var(--ac)}
.row{position:relative}.rs{display:flex;gap:9px;overflow-x:auto;scrollbar-width:none;padding:2px 2px 6px;scroll-snap-type:x proximity}.rs::-webkit-scrollbar{display:none}.rs .gc{flex:0 0 92px;scroll-snap-align:start}
.rn{position:absolute;right:-6px;top:38px;width:30px;height:30px;padding:0;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.3);z-index:2}
.egrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.gc{aspect-ratio:1;border-radius:14px;background:var(--bg);padding:10px;cursor:pointer;border:1px solid transparent;display:flex;flex-direction:column;gap:4px;transition:.12s;position:relative}.gc:hover{border-color:var(--ac);transform:translateY(-2px);box-shadow:0 6px 16px rgba(124,58,237,.22)}.gc .sv{flex:1;min-height:0;display:block}.gc .sv svg{width:100%;height:100%;display:block}.gc small{font-size:10px;color:var(--mu);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc.wide{grid-column:span 3;aspect-ratio:auto;height:78px}.gc.full{aspect-ratio:1}
.bk{display:flex;align-items:center;gap:8px;margin:2px 0 10px}.bk button{border:0;background:var(--bg);width:32px;height:32px;padding:0;border-radius:50%}.bk b{font-size:16px}
.big{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.big button{text-align:left;padding:12px 16px;border-radius:12px;background:var(--bg);border:0}.big button:hover{background:var(--ac);color:#fff}
.pgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pv{position:relative;height:96px;border-radius:12px;background:#fff;overflow:hidden;cursor:pointer;border:1px solid var(--bd);transition:.12s}.pv:hover{border-color:var(--ac);box-shadow:0 6px 16px rgba(124,58,237,.22)}
.fl{display:flex;flex-direction:column;gap:2px}.fl button{text-align:left;border:0;background:none;font-size:20px;padding:7px 10px;border-radius:10px}.fl button:hover{background:var(--bg)}
.up{border:2px dashed var(--bd);border-radius:16px;padding:18px;text-align:center;color:var(--mu);margin-bottom:12px}.up button{margin-top:8px}.ug{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ug div{aspect-ratio:1;border-radius:10px;background:repeating-conic-gradient(#e5e5e5 0 25%,#fff 0 50%) 0 0/14px 14px;overflow:hidden;cursor:pointer;border:1px solid var(--bd)}.ug img{width:100%;height:100%;object-fit:contain;display:block}.ug div:hover{border-color:var(--ac)}
.sw{display:flex;flex-wrap:wrap;gap:7px;margin:4px 0 8px}.sw i{width:30px;height:30px;border-radius:9px;cursor:pointer;border:1px solid var(--bd);transition:.12s}.sw i:hover{transform:scale(1.14)}.sw input{width:30px;height:30px;padding:0;border:0;background:none;cursor:pointer}
.sw .bgd{width:46px}.tl{display:grid;grid-template-columns:1fr 1fr;gap:10px}.tl button{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 6px;border-radius:14px;background:var(--bg);border:0;font-size:12.5px;font-weight:600}.tl button:hover{background:var(--ac);color:#fff}.tl b{font-size:24px;font-weight:400}
#pnl h6{margin:16px 0 6px;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--ac)}#pnl .row2{display:flex;gap:8px}#pnl select,#pnl input[type=text]{width:100%;padding:8px;border:1px solid var(--bd);border-radius:10px;background:var(--bg);color:var(--tx);font:inherit}#pnl label.ck{display:flex;gap:6px;align-items:center;font-size:13px;margin:6px 0}
#sel i.rh{left:50%;top:calc(-46px*var(--inv,1));cursor:grab;background:var(--ac);border-color:#fff;color:#fff;font-style:normal;display:grid;place-items:center;font-size:calc(11px*var(--inv,1));line-height:1}
#sel::before{content:"";position:absolute;left:50%;top:calc(-46px*var(--inv,1));width:calc(2px*var(--inv,1));height:calc(46px*var(--inv,1));background:#7c3aed;transform:translateX(-50%)}
#fb{position:fixed;z-index:40;display:none;gap:2px;padding:4px;background:var(--sf);border:1px solid var(--bd);border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.3)}#fb button{border:0;background:none;padding:6px 9px;border-radius:8px;font-size:15px}#fb button:hover{background:var(--bg)}
#cm{position:fixed;z-index:60;min-width:230px;background:var(--sf);border:1px solid var(--bd);border-radius:12px;padding:6px;box-shadow:0 14px 40px rgba(0,0,0,.35);display:none}#cm button{display:flex;justify-content:space-between;gap:20px;width:100%;border:0;background:none;text-align:left;padding:8px 12px;border-radius:8px}#cm button:hover{background:var(--bg)}#cm kbd{color:var(--mu);font:inherit;font-size:12px}#cm hr{border:0;border-top:1px solid var(--bd);margin:4px 0}
#rzm{position:fixed;z-index:60;width:290px;background:var(--sf);color:var(--tx);border:1px solid var(--bd);border-radius:14px;padding:8px;box-shadow:0 14px 40px rgba(0,0,0,.35);display:none}#rzm button{display:flex;justify-content:space-between;width:100%;border:0;background:none;padding:9px 12px;border-radius:9px;text-align:left}#rzm button:hover{background:var(--bg)}#rzm button.on{background:var(--ac);color:#fff}#rzm small{opacity:.7}#rzm .cu{display:flex;gap:6px;padding:8px 6px 4px;align-items:center;font-size:13px}#rzm input{width:80px;padding:6px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx);font:inherit}
#toast{position:fixed;left:50%;bottom:70px;transform:translate(-50%,20px);background:#111827;color:#fff;padding:10px 18px;border-radius:99px;opacity:0;pointer-events:none;transition:.25s;z-index:90;font-size:13px}#toast.o{opacity:1;transform:translate(-50%,0)}
.pres{position:fixed;inset:0;background:#000;z-index:100;overflow:hidden}.pres .pc{position:absolute}.pres .pn{position:fixed;bottom:14px;left:0;right:0;text-align:center;color:#fff8;font-size:13px}
#gridov{position:absolute;inset:0;pointer-events:none;display:none;background:linear-gradient(rgba(124,58,237,.18) 1px,transparent 1px) 0 0/54px 54px,linear-gradient(90deg,rgba(124,58,237,.18) 1px,transparent 1px) 0 0/54px 54px;outline:3px dashed rgba(255,45,154,.5);outline-offset:-60px}
#sv{font-size:12px;opacity:.85;margin-left:10px;font-weight:400}.qc{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 4px}.qc i{width:24px;height:24px;border-radius:7px;cursor:pointer;border:1px solid var(--bd)}.qc i:hover{transform:scale(1.15)}
.area{scrollbar-width:thin}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{background:var(--bd);border-radius:8px}
@media(max-width:900px){.main,.main.po{grid-template-columns:1fr;grid-template-areas:none}.tools,.area,aside{grid-area:auto}.tools{flex-direction:row;overflow-x:auto;border-bottom:1px solid var(--bd)}.tools button{flex:0 0 68px}
 #pnl{position:fixed;left:0;right:0;bottom:0;height:62vh;z-index:30;border-radius:18px 18px 0 0;box-shadow:0 -10px 34px rgba(0,0,0,.35);border:0}#pnl .hdl{display:none}.gc.wide{grid-column:span 3}}`;
document.head.appendChild(css);
const toastEl=document.createElement('div');toastEl.id='toast';document.body.appendChild(toastEl);let tt0;
const toast=m=>{toastEl.textContent=m;toastEl.classList.add('o');clearTimeout(tt0);tt0=setTimeout(()=>toastEl.classList.remove('o'),2200)};

/* ---------------- page-size adaption ---------------- */
function adaptEls(els,from,to){if(from===to)return els;const d=to-from,s=to/from;
 els.forEach(e=>{const fw=e.x<=0&&e.w>=1080;
  if(fw&&e.y<=0&&e.y+e.h>=from-2){e.h=to;return}
  if(d>0){if(fw&&e.y<=0)e.h+=Math.round(d/2);else if(fw&&e.y+e.h>=from-2){e.y+=Math.round(d/2);e.h+=Math.round(d/2)}else e.y=Math.round(e.y+d/2)}
  else if(fw){e.y=Math.round(e.y*s);e.h=Math.round(e.h*s)}
  else{e.x=Math.round(540+(e.x-540)*s);e.y=Math.round(e.y*s);e.w=Math.round(e.w*s);e.h=Math.round(e.h*s);
   if(e.t==='text'){e.fs=Math.max(8,Math.round(e.fs*s));if(e.ls)e.ls=+(e.ls*s).toFixed(1)}
   if(typeof e.r==='number')e.r=Math.round(e.r*s);if(e.bw)e.bw=Math.max(1,Math.round(e.bw*s))}});return els}
window.ADAPT=els=>adaptEls(els,1350,EX.h);
const tplB=tpl;tpl=function(i,ti){const X=tplB(i,ti);return EX.h===1350?X:adaptEls(X,1350,EX.h)};

/* ---------------- render hooks: rotation, new graphics ---------------- */
const pe0=paintEl;paintEl=function(n,el){pe0(n,el);
 if(el.t==='gfx'&&MY[el.g])n.innerHTML=GFX3R(MY[el.g],el.c,el.c2,'g'+el.id+'_'+String(el.c||'').slice(1)+String(el.c2||'').slice(1)+'_');
 n.style.transform=el.rot?`rotate(${el.rot}deg)`:''};
const us0=updSel;updSel=function(){us0();const el=sel&&get(sel);if(el){const s=$('sel');s.style.transform=el.rot?`rotate(${el.rot}deg)`:'';s.style.transformOrigin='50% 50%'}fbPos()};
{const rh=document.createElement('i');rh.className='rh';rh.dataset.h='rot';rh.textContent='↻';rh.title='Rotate (Shift = 15° steps)';$('sel').appendChild(rh)}
const pr0=persist;persist=function(){pr0();const s=$('sv');if(s)s.textContent='✓ Saved '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})};
{const b=hd.querySelector('b');if(b)b.insertAdjacentHTML('beforeend','<span id="sv"></span>')}

/* ---------------- unified element library ---------------- */
const AL={};const ALL=[];
EA.L.forEach(([c,n,a,b,vb,s])=>{const o={n,c:c==='Astro'?'Astro & Tarot':c,a:a||0,b:b||0,vb:vb||'0 0 100 100',old:1};AL[n]=o;ALL.push(o)});
GFX.forEach(g=>{AL[g.n]=g;ALL.push(g)});
const ZN=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],GL='♈♉♊♋♌♍♎♏♐♑♒♓'.split('');
const ORD=['3D Stickers','Characters & Emojis','Astro & Tarot','Zodiac badges','Assam & Festival','Icons','Social','Business','Travel','Nature','Learn','Lines & Doodles','Arrows','Shapes','Decor','Frames & Borders','Patterns'],have=new Set(ALL.map(g=>g.c));
const CORDER=[...ORD.filter(c=>c==='Zodiac badges'||have.has(c)),...[...have].filter(c=>!ORD.includes(c))];
let pc=0;const dimV=vb=>vb.split(' ').map(Number);
const prevSvg=g=>g.old?EA.svg(EA.LIB[g.n],{c:g.a||th().p,c2:g.b||'#ffffff'}):GFX3R(g,g.a||th().p,g.b||'#ffffff','pv'+(pc++)+'_');
const zodList=()=>{const T=th(),o=[];[1,2,3].forEach(ic=>GL.forEach((gl,j)=>o.push({zod:1,gl,ic,n:ZN[j]+(ic>1?' '+ic:''),c:'Zodiac badges',T})));return o};
const zodSvg=z=>ICON({gl:z.gl,ic:z.ic,w:'100%',h:'100%',c1:z.T.a,c2:z.T.i2,id:'zp'+(pc++)});
let REC=[];try{REC=JSON.parse(localStorage.getItem('rashi_rec2')||'[]')}catch(e){}
const pushRec=n=>{const i=REC.indexOf(n);if(i>=0)REC.splice(i,1);REC.unshift(n);REC.length=Math.min(REC.length,14);try{localStorage.setItem('rashi_rec2',JSON.stringify(REC))}catch(e){}};
const mkG=(name,x,y,w,c,c2,T)=>{const G=AL[name],[,,W,H]=dimV(G.vb);return E({t:'gfx',g:name,x,y,w,h:Math.round(w*H/W),c:c||G.a||(T||th()).p,c2:c2||G.b||'#ffffff'})};
function addItem(it,at){
 if(it.zod){const T=th(),e=E({t:'art',ic:it.ic,x:410,y:Math.round((PH()-260)/2),w:260,h:260,c1:T.a,c2:T.i2,gc:T.g,gl:it.gl});if(at){e.x=Math.round(at.x-130);e.y=Math.round(at.y-130)}A().push(e);sel=e.id;render();commit();return}
 const G=AL[it.n],[,,W,H]=dimV(G.vb),r=W/H;pushRec(it.n);
 if(G.full&&!G.pat&&!at){const e=mkG(it.n,0,0,1080);e.h=PH();A().push(e);sel=e.id;render();commit();return}
 if(G.pat){const e=mkG(it.n,0,0,1080);e.h=PH();e.op=G.op||.25;const a=A(),i=a.findIndex(q=>q.key==='bg'||q.key==='bgx');a.splice(i+1,0,e);sel=e.id;render();commit();toast('Pattern added behind your content — use Opacity to adjust');return}
 const w=G.full?1000:r>2.2?820:r<.7?170:r>1.6?420:300,e=mkG(it.n,0,0,w);if(G.full)e.h=Math.round(1000*H/W);
 e.x=Math.round((at?at.x:540)-e.w/2);e.y=Math.round((at?at.y:PH()/2)-e.h/2);A().push(e);sel=e.id;render();commit()}

/* ---------------- panel framework ---------------- */
const PN=document.createElement('div');PN.id='pnl';M.appendChild(PN);let openId=null;
const ico=p=>`<svg viewBox="0 0 24 24">${p}</svg>`;
const RAIL=[['tp','Templates',ico('<rect x="3" y="3" width="8" height="10" rx="1.5"/><rect x="13" y="3" width="8" height="6" rx="1.5"/><rect x="13" y="11" width="8" height="10" rx="1.5"/><rect x="3" y="15" width="8" height="6" rx="1.5"/>')],
['el','Elements',ico('<circle cx="7.5" cy="7.5" r="4"/><rect x="13" y="3.5" width="8" height="8" rx="1.5"/><path d="M7.5 13.5l4.5 7.5H3z"/><path d="M17 13l1.2 2.8 2.8.2-2.1 1.9.6 2.8-2.5-1.5-2.5 1.5.6-2.8-2.1-1.9 2.8-.2z"/>')],
['tx','Text',ico('<path d="M5 7V4.5h14V7M12 4.5v15M9 19.5h6"/>')],
['up','Uploads',ico('<path d="M12 16V5M7 10l5-5 5 5"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>')],
['bg','Background',ico('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15l5-5 5 5 3-3 5 5"/><circle cx="16" cy="8" r="1.5"/>')],
['br','Brand',ico('<path d="M4 18h16l1-10-5 4-4-7-4 7-5-4z"/>')],
['tl','Tools',ico('<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>')]];
nav.innerHTML='';RAIL.forEach(([id,t,i])=>{const b=document.createElement('button');b.dataset.p=id;b.innerHTML=i+t;b.onclick=()=>openP(id);nav.appendChild(b)});
const PAN={tp:['Templates',rTpl],el:['Elements',rEl],tx:['Text',rTx],up:['Uploads',rUp],bg:['Background',rBg],br:['Brand kit',rBr],tl:['Tools',rTl]};
function closeP(){openId=null;M.classList.remove('po');PN.innerHTML='';nav.querySelectorAll('button').forEach(b=>b.classList.remove('on'))}
function openP(id){if(openId===id){closeP();return}openId=id;M.classList.add('po');nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.p===id));
 PN.innerHTML=`<div class="ph"><b>${PAN[id][0]}</b><button class="x" title="Close">✕</button></div><div class="pb"></div><button class="hdl" title="Hide panel">‹</button>`;
 PN.querySelector('.x').onclick=PN.querySelector('.hdl').onclick=closeP;PAN[id][1](PN.querySelector('.pb'))}
const reopen=()=>{if(openId){const i=openId;openId=null;openP(i)}};

/* ---------------- TEMPLATES ---------------- */
const OLDC={'Quote':'Quote','Tips list':'Guide','Review':'Review','Panchang':'Astro','Lucky card':'Horoscope','Offer / CTA':'Promo','Photo caption':'Quote','Festival':'Festival','Kundali':'Astro','Q & A':'Engage'};
const ALLT=EA.TP.map(([n,f])=>({n,cat:OLDC[n]||'Other',f})).concat(TPX.map(([n,c,f])=>({n,cat:c,f})));
function buildT(f,T){const X=[],rect=o=>X.push(E({t:'rect',...o})),txt=o=>X.push(E({t:'text',ff:FONTS[0],fs:24,color:'#222222',al:'l',lh:1.5,txt:'',...o})),gx=(g,x,y,w,c,c2)=>X.push(mkG(g,x,y,w,c,c2,T));f(T,rect,txt,gx,X);return adaptEls(X,1350,PH())}
let tcat='All',tq='',tti=null;
function rTpl(b){const tc=['All',...new Set(ALLT.map(t=>t.cat))];
 b.innerHTML=`<div class="sq"><input id="tq" placeholder="Search templates" value="${esc(tq)}"><small>1080×${PH()}</small></div><div class="chp">${tc.map(c=>`<button class="${c===tcat?'on':''}">${c}</button>`).join('')}</div><div class="dots"> ${ZN.map((n,i)=>`<i data-t="${i}" title="${n}" style="background:${TH[i].p}" class="${(tti??(P[cur].th??cur))===i?'on':''}"></i>`).join('')}</div><div class="tgrid"></div>`;
 b.querySelector('#tq').oninput=e=>{tq=e.target.value;fillT(b)};b.querySelectorAll('.chp button').forEach(x=>x.onclick=()=>{tcat=x.textContent;rTpl(b)});b.querySelectorAll('.dots i').forEach(x=>x.onclick=()=>{tti=+x.dataset.t;rTpl(b)});fillT(b)}
function fillT(b){const g=b.querySelector('.tgrid');g.innerHTML='';const T=TH[tti??(P[cur].th??cur)]||th(),q=tq.trim().toLowerCase(),ti=tti??(P[cur].th??cur);
 ALLT.filter(t=>(tcat==='All'||t.cat===tcat)&&(!q||(t.n+' '+t.cat).toLowerCase().includes(q))).forEach(t=>{const d=document.createElement('div');d.className='tc';d.innerHTML='<div class="c2"></div><span class="lb"></span><div class="ov"><button data-a="a">＋ Add</button><button data-a="r">⇄ Replace</button></div>';d.querySelector('.lb').textContent=t.n;
  const c=d.firstChild,bg=mix(T.p,'#ffffff',.94);c.style.background=bg;g.appendChild(d);buildT(t.f,T).forEach(el=>{const n=document.createElement('div');n.className='el';c.appendChild(n);paintEl(n,el)});c.style.transform=`scale(${d.clientWidth/1080})`;
  d.onclick=e=>{const els=buildT(t.f,T),act=e.target.dataset.a;
   if(act==='r'){P[cur].els=els;P[cur].bg=bg;P[cur].th=ti;sel=null;render();commit();toast('Design applied to this slide')}
   else RS.ins({bg,th:ti,els,cap:'✨\n{{handle}}\n\n#assam'})}});
 if(!g.children.length)g.innerHTML='<p style="grid-column:span 2;color:var(--mu)">No templates match.</p>'}

/* ---------------- ELEMENTS ---------------- */
let ecat='All',eq='';
const card=(it,lab)=>{const G=it.zod?null:AL[it.n],full=G&&(G.pat||G.full);return `<div class="gc${G&&dimV(G.vb)[2]/dimV(G.vb)[3]>2.2&&!G.full?' wide':''}" draggable="true" data-n="${esc(it.n)}" ${it.zod?`data-z="${it.gl}|${it.ic}"`:''} title="${esc(it.n)}"><span class="sv">${it.zod?zodSvg(it):prevSvg(G)}</span>${lab?`<small>${esc(it.n)}</small>`:''}</div>`};
const findIt=el=>{const z=el.dataset.z;if(z){const [gl,ic]=z.split('|');return{zod:1,gl,ic:+ic,n:el.dataset.n,T:th()}}return{n:el.dataset.n}};
function rEl(b){b.innerHTML=`<div class="sq"><input id="eq" placeholder="Search graphics, stickers, frames…" value="${esc(eq)}"></div><div class="chp">${['All',...CORDER].map(c=>`<button class="${c===ecat?'on':''}">${c}</button>`).join('')}</div><div id="eb"></div>`;
 b.querySelector('#eq').oninput=e=>{eq=e.target.value;fillE(b)};b.querySelectorAll('.chp button').forEach(x=>x.onclick=()=>{ecat=x.textContent;eq='';rEl(b)});fillE(b)}
function fillE(b){const body=b.querySelector('#eb'),q=eq.trim().toLowerCase(),pool=()=>[...ALL,...zodList().filter(z=>z.ic===1)];let h='';
 const catItems=c=>c==='Zodiac badges'?zodList():ALL.filter(g=>g.c===c);
 if(q){const m=[...ALL,...zodList()].filter(g=>(g.n+' '+g.c).toLowerCase().includes(q));h=m.length?`<div class="egrid">${m.map(g=>card(g,1)).join('')}</div>`:'<p style="color:var(--mu)">Nothing found. Try “star”, “moon”, “heart”, “frame”…</p>'}
 else if(ecat!=='All'){const it=catItems(ecat);h=`<div class="bk"><button id="eback">←</button><b>${ecat}</b></div><div class="egrid">${it.map(g=>card(g,1)).join('')}</div>`}
 else{const rec=REC.map(n=>AL[n]).filter(Boolean);if(rec.length)h+=`<div class="sh"><b>Recently used</b></div><div class="row"><div class="rs">${rec.map(g=>card(g)).join('')}</div></div>`;
  CORDER.forEach(c=>{const it=catItems(c);if(!it.length)return;const rowI=c==='Zodiac badges'?it.filter(z=>z.ic===1):it;h+=`<div class="sh"><b>${c}</b><button data-see="${esc(c)}">See all</button></div><div class="row"><div class="rs">${rowI.slice(0,14).map(g=>card(g)).join('')}</div><button class="rn" title="Scroll">›</button></div>`})}
 body.innerHTML=h;
 body.querySelectorAll('.gc').forEach(el=>{el.onclick=()=>addItem(findIt(el));el.ondragstart=e=>{e.dataTransfer.setData('text/rashi',JSON.stringify({k:'el',z:el.dataset.z||null,n:el.dataset.n}));e.dataTransfer.effectAllowed='copy'}});
 body.querySelectorAll('[data-see]').forEach(x=>x.onclick=()=>{ecat=x.dataset.see;rEl(b)});body.querySelectorAll('.rn').forEach(x=>x.onclick=()=>x.parentNode.querySelector('.rs').scrollBy({left:230,behavior:'smooth'}));
 const bk=body.querySelector('#eback');if(bk)bk.onclick=()=>{ecat='All';rEl(b)}}

/* ---------------- TEXT ---------------- */
const tx=o=>E({t:'text',ff:FONTS[0],fs:48,color:'#222222',al:'l',lh:1.3,txt:'',x:0,y:0,w:600,h:100,...o});
const TP=[
['Outline title','#ffffff',T=>[tx({txt:'ৰাশিফল',w:700,h:220,fs:150,b:1,color:T.p,al:'c',va:1,ol:1,lh:1.2,ff:'Baloo Da 2'})]],
['Golden echo','#1b1530',T=>[tx({txt:'Golden Day',w:760,h:160,fs:110,b:1,color:'#f5b301',al:'c',va:1,ts:'Echo',ff:'Playfair Display'})]],
['Neon night','#14082e',T=>[tx({txt:'শুভ ৰাতি',w:620,h:170,fs:96,b:1,color:'#ff7bd5',al:'c',va:1,ts:'Neon',bg:'#14082e',r:36})]],
['Pill label','#ffffff',T=>[tx({txt:'বিশেষ অফাৰ',w:520,h:110,fs:48,b:1,color:'#ffffff',al:'c',va:1,bg:T.p,bg2:T.d,r:55,sd:1})]],
['Outline tag','#ffffff',T=>[tx({txt:'আজিৰ ৰাশিফল',w:560,h:100,fs:44,b:1,color:T.p,al:'c',va:1,bw:5,bc:T.p,r:20})]],
['Highlight','#ffffff',T=>[tx({txt:'গুৰুত্বপূৰ্ণ কথা',w:560,h:100,fs:44,b:1,color:'#3b2f0b',al:'c',va:1,bg:'#ffe066',r:10})]],
['Quote block','#ffffff',T=>[tx({txt:'“',x:0,y:0,w:200,h:200,fs:220,b:1,color:T.p,op:.4,lh:1}),tx({txt:'আপোনাৰ উদ্ধৃতি ইয়াত লিখক',x:20,y:130,w:620,h:140,fs:44,b:1,color:T.d,lh:1.4})]],
['Stacked title','#ffffff',T=>[tx({txt:'ৰাশিফল',x:0,y:0,w:560,h:40,fs:24,b:1,color:T.p,ls:6,up:1,lh:1.2}),tx({txt:'সাপ্তাহিক ফল',x:0,y:44,w:560,h:120,fs:84,b:1,color:T.d,lh:1.2,fit:1}),tx({txt:'১২ ৰাশিৰ বাবে',x:0,y:170,w:560,h:50,fs:30,color:'#4b5563',lh:1.2})]],
['Number badge','#ffffff',T=>[tx({txt:'১',w:150,h:150,fs:88,b:1,color:'#ffffff',al:'c',va:1,bg:T.p,bg2:T.d,r:'50%',sd:1,lh:1})]],
['Date chip','#e5e7eb',T=>[tx({txt:'মঙলবাৰ · ২৮ অক্টোবৰ',w:620,h:84,fs:34,b:1,color:T.d,al:'c',va:1,bg:'#ffffff',r:42,bw:3,bc:T.p})]],
['Hashtag','#ffffff',T=>[tx({txt:'#ৰাশিফল',w:520,h:90,fs:60,b:1,color:T.p,al:'c',va:1,ff:'Poppins'})]],
['Mystic serif','#ffffff',T=>[tx({txt:'MYSTIC TAROT',w:760,h:110,fs:64,b:1,color:T.d,al:'c',va:1,ff:'Cinzel',ls:8})]],
['Script','#ffffff',T=>[tx({txt:'Good Vibes',w:640,h:170,fs:120,color:T.p,al:'c',va:1,ff:'Dancing Script',b:1})]],
['Bold impact','#ffffff',T=>[tx({txt:'FREE READING',w:760,h:180,fs:150,color:T.d,al:'c',va:1,ff:'Bebas Neue'})]]];
function placeEls(els){const x0=Math.min(...els.map(e=>e.x)),y0=Math.min(...els.map(e=>e.y)),x1=Math.max(...els.map(e=>e.x+e.w)),y1=Math.max(...els.map(e=>e.y+e.h)),dx=Math.round(540-(x0+x1)/2),dy=Math.round(PH()/2-(y0+y1)/2);els.forEach(e=>{e.x+=dx;e.y+=dy;A().push(e)});sel=els[els.length-1].id;render();commit()}
function mini(els,box){const x0=Math.min(...els.map(e=>e.x)),y0=Math.min(...els.map(e=>e.y)),bw=Math.max(...els.map(e=>e.x+e.w))-x0,bh=Math.max(...els.map(e=>e.y+e.h))-y0,c=document.createElement('div');c.style.cssText=`position:absolute;left:0;top:0;width:${bw}px;height:${bh}px;transform-origin:0 0`;box.appendChild(c);
 els.forEach(e=>{const n=document.createElement('div');n.className='el';c.appendChild(n);paintEl(n,{...e,x:e.x-x0,y:e.y-y0})});const s=Math.min((box.clientWidth-14)/bw,(box.clientHeight-14)/bh,1);c.style.transform=`translate(${(box.clientWidth-bw*s)/2}px,${(box.clientHeight-bh*s)/2}px) scale(${s})`}
const FL=['Noto Serif Bengali','Noto Sans Bengali','Hind Siliguri','Baloo Da 2','Anek Bangla','Poppins','Montserrat','Playfair Display','Cinzel','Bebas Neue','Pacifico','Dancing Script','Lobster'];
function applyFont(f){const el=sel&&get(sel);if(el&&el.t==='text'){el.ff=f;document.fonts.load(`400 20px "${f}"`).then(()=>document.fonts.load(`800 20px "${f}"`)).then(()=>refresh(el));refresh(el);panel();toast('Font changed to '+f)}else{const e=tx({txt:'নতুন লেখা · New text',x:240,y:Math.round(PH()/2-50),w:600,h:100,ff:f,fs:56,al:'c'});A().push(e);sel=e.id;render();commit()}}
function rTx(b){b.innerHTML=`<div class="big"><button id="th1" style="font-size:26px;font-weight:800">শিৰোনাম যোগ কৰক</button><button id="th2" style="font-size:19px;font-weight:700">উপশিৰোনাম যোগ কৰক</button><button id="th3" style="font-size:14px">সামান্য লেখা যোগ কৰক · body text</button></div><h6>Styles</h6><div class="pgrid" id="tpg"></div><h6>Fonts <span style="text-transform:none;letter-spacing:0;opacity:.7">— applies to the selected text</span></h6><div class="fl" id="fl">${FL.map(f=>`<button data-f="${f}" style="font-family:'${f}'">${f}</button>`).join('')}</div>`;
 const add=(o)=>{const e=tx({x:140,y:Math.round(PH()/2-60),w:800,...o});A().push(e);sel=e.id;render();commit()};
 b.querySelector('#th1').onclick=()=>add({txt:'শিৰোনাম',h:140,fs:110,b:1,al:'c',va:1,color:th().d});b.querySelector('#th2').onclick=()=>add({txt:'উপশিৰোনাম',h:90,fs:64,b:1,al:'c',va:1,color:th().p});b.querySelector('#th3').onclick=()=>add({txt:'আপোনাৰ লেখা ইয়াত লিখক',h:80,fs:38,al:'c',va:1});
 const g=b.querySelector('#tpg');TP.forEach(([n,bg,f])=>{const d=document.createElement('div');d.className='pv';d.title=n;d.style.background=bg;g.appendChild(d);mini(f(th()),d);d.onclick=()=>placeEls(f(th()))});
 b.querySelectorAll('#fl button').forEach(x=>x.onclick=()=>applyFont(x.dataset.f))}

/* ---------------- UPLOADS ---------------- */
function addImg(id,w,h,at){const W=Math.min(600,w),H=Math.round(W*h/w),e=E({t:'img',src:id,w:W,h:H,x:Math.round((at?at.x:540)-W/2),y:Math.round((at?at.y:PH()/2)-H/2)});A().push(e);sel=e.id;render();commit()}
function upFiles(files,at){[...files].filter(f=>/^image\//.test(f.type)).forEach(f=>readImg(f,(id,w,h)=>{addImg(id,w,h,at);reopen()}))}
const dimOf=id=>new Promise(r=>{const i=new Image();i.onload=()=>r([i.naturalWidth,i.naturalHeight]);i.src=IMG[id]});
const fU=document.createElement('input');fU.type='file';fU.accept='image/*';fU.multiple=true;fU.hidden=true;document.body.appendChild(fU);fU.onchange=e=>{upFiles(e.target.files);e.target.value=''};
function rUp(b){const ids=Object.keys(IMG).sort((a,c)=>+c.slice(1)-+a.slice(1));
 b.innerHTML=`<div class="up">Drop images here, paste with Ctrl+V,<br>or choose files<br><button class="pri" id="ub">⬆ Upload files</button></div>${ids.length?`<h6>Your images (${ids.length})</h6><div class="ug">${ids.map(i=>`<div data-i="${i}" draggable="true"><img src="${IMG[i]}"></div>`).join('')}</div>`:'<p style="color:var(--mu)">Nothing uploaded yet.</p>'}`;
 b.querySelector('#ub').onclick=()=>fU.click();
 b.querySelectorAll('.ug div').forEach(d=>{d.onclick=async()=>{const[w,h]=await dimOf(d.dataset.i);addImg(d.dataset.i,w,h)};d.ondragstart=e=>e.dataTransfer.setData('text/rashi',JSON.stringify({k:'img',i:d.dataset.i}))})}

/* ---------------- BACKGROUND ---------------- */
let bgAll=false;
const GR=[...EA.BG,['Lavender','#a18cd1','#fbc2eb'],['Peach','#ffecd2','#fcb69f'],['Mint','#d4fc79','#96e6a1'],['Sky','#a1c4fd','#c2e9fb'],['Berry','#8e2de2','#4a00e0'],['Dusk','#fa709a','#fee140'],['Teal','#0f2027','#2c5364'],['Blush','#fff1eb','#ace0f9']];
function setBg(a,b){(bgAll?P.map((_,i)=>i):[cur]).forEach(i=>{const pg=P[i];let e=pg.els.find(x=>x.key==='bg'||x.key==='bgx');if(!e){e=E({t:'rect',key:'bgx',w:1080,h:PH(),x:0,y:0});pg.els.unshift(e)}e.bg=a;if(b)e.bg2=b;else delete e.bg2;pg.bg=a});render();commit()}
function rBg(b){const T=th(),sw=[T.p,T.d,T.a,T.i2,T.g,mix(T.p,'#ffffff',.9),mix(T.p,'#ffffff',.7),'#ffffff','#f5f1ea','#111827','#0f0c29','#000000'];
 b.innerHTML=`<label class="ck"><input type="checkbox" id="ba" ${bgAll?'checked':''}> Apply to all slides</label><h6>Solid colour</h6><div class="sw"><input type="color" id="bc" value="${hex(P[cur].bg)}" title="Custom colour">${sw.map(c=>`<i data-c="${c}" style="background:${c}"></i>`).join('')}</div><h6>Gradients</h6><div class="sw">${GR.map(([n,a,c])=>`<i class="bgd" data-g="${a}|${c}" title="${n}" style="background:linear-gradient(120deg,${a},${c})"></i>`).join('')}</div><h6>Patterns <span style="text-transform:none;letter-spacing:0;opacity:.7">— added over the background</span></h6><div class="egrid">${GFX.filter(g=>g.pat).map(g=>card(g,1)).join('')}</div><h6>Photo</h6><div class="bar" style="margin-top:0"><button id="bph" class="pri">Use a photo as background</button></div>`;
 b.querySelector('#ba').onchange=e=>bgAll=e.target.checked;b.querySelector('#bc').oninput=e=>setBg(e.target.value);
 b.querySelectorAll('[data-c]').forEach(i=>i.onclick=()=>setBg(i.dataset.c));b.querySelectorAll('[data-g]').forEach(i=>i.onclick=()=>{const[a,c]=i.dataset.g.split('|');setBg(a,c)});
 b.querySelectorAll('.gc').forEach(el=>el.onclick=()=>addItem(findIt(el)));
 b.querySelector('#bph').onclick=()=>{const f=document.createElement('input');f.type='file';f.accept='image/*';f.onchange=e=>readImg(e.target.files[0],(id)=>{const el=E({t:'img',src:id,x:0,y:0,w:1080,h:PH(),fx:{of:'cover'}}),a=A(),i=a.findIndex(q=>q.key==='bg'||q.key==='bgx');a.splice(i+1,0,el);sel=el.id;render();commit()});f.click()}}

/* ---------------- BRAND ---------------- */
const BR=(()=>{try{return JSON.parse(localStorage.getItem('rashi_brand')||'null')}catch(e){return null}})()||{colors:['#7c3aed','#4338ca','#ffd24d','#e0272f','#111827','#ffffff'],logo:null,hf:'Noto Serif Bengali',bf:'Noto Sans Bengali'};
const saveBR=()=>{try{localStorage.setItem('rashi_brand',JSON.stringify(BR))}catch(e){toast('Logo is too big to store — try a smaller file')}};
function applyColor(c){const el=sel&&get(sel);if(!el){toast('Select an element first');return}const k=el.t==='text'?'color':el.t==='gfx'?'c':el.t==='art'?'c1':el.t==='rect'?'bg':null;if(!k)return;el[k]=c;refresh(el);panel()}
function rBr(b){b.innerHTML=`<h6>Brand colours <span style="text-transform:none;letter-spacing:0;opacity:.7">— click to apply to the selection</span></h6><div class="sw">${BR.colors.map((c,i)=>`<i data-c="${c}" data-i="${i}" style="background:${c}" title="${c}  (right-click to remove)"></i>`).join('')}<input type="color" id="bn" title="Add a colour" value="#ff4d8d"></div><h6>Logo</h6><div class="bar" style="margin-top:0"><button id="bl">${BR.logo?'Replace logo':'Upload logo'}</button>${BR.logo?'<button id="bla" class="pri">Add logo to slide</button>':''}</div>${BR.logo?`<div class="ug" style="grid-template-columns:96px;margin-top:8px"><div><img src="${BR.logo}"></div></div>`:''}<h6>Brand fonts</h6><label style="font-size:12px;color:var(--mu)">Heading font<select id="bh">${FL.map(f=>`<option ${f===BR.hf?'selected':''}>${f}</option>`).join('')}</select></label><label style="font-size:12px;color:var(--mu)">Body font<select id="bb">${FL.map(f=>`<option ${f===BR.bf?'selected':''}>${f}</option>`).join('')}</select></label><div class="bar"><button id="bth">Add heading</button><button id="btb">Add body text</button></div><h6>Page details</h6><label style="font-size:12px;color:var(--mu)">Handle {{handle}}<input type="text" id="vh" value="${esc(V.handle)}" placeholder="@yourpage"></label><label style="font-size:12px;color:var(--mu)">WhatsApp {{phone}}<input type="text" id="vp" value="${esc(V.phone)}"></label><div class="bar"><button id="bhd">Add handle text</button></div>`;
 b.querySelectorAll('[data-c]').forEach(i=>{i.onclick=()=>applyColor(i.dataset.c);i.oncontextmenu=e=>{e.preventDefault();BR.colors.splice(+i.dataset.i,1);saveBR();rBr(b)}});
 b.querySelector('#bn').onchange=e=>{BR.colors.push(e.target.value);saveBR();rBr(b)};
 b.querySelector('#bl').onclick=()=>{const f=document.createElement('input');f.type='file';f.accept='image/*';f.onchange=e=>readImg(e.target.files[0],(id)=>{BR.logo=IMG[id];delete IMG[id];saveBR();rBr(b)});f.click()};
 const la=b.querySelector('#bla');if(la)la.onclick=()=>{const id='i'+(++iid);IMG[id]=BR.logo;dimOf(id).then(([w,h])=>addImg(id,Math.min(w,300),h*Math.min(w,300)/w))};
 b.querySelector('#bh').onchange=e=>{BR.hf=e.target.value;saveBR()};b.querySelector('#bb').onchange=e=>{BR.bf=e.target.value;saveBR()};
 const addT=o=>{const e=tx({x:140,y:Math.round(PH()/2-60),w:800,al:'c',va:1,...o});A().push(e);sel=e.id;render();commit()};
 b.querySelector('#bth').onclick=()=>addT({txt:'শিৰোনাম',h:140,fs:100,b:1,ff:BR.hf,color:th().d});b.querySelector('#btb').onclick=()=>addT({txt:'আপোনাৰ লেখা ইয়াত লিখক',h:90,fs:40,ff:BR.bf});
 b.querySelector('#vh').oninput=e=>{V.handle=e.target.value;A().forEach(refreshNow);persist()};b.querySelector('#vp').oninput=e=>{V.phone=e.target.value;A().forEach(refreshNow);persist()};
 b.querySelector('#bhd').onclick=()=>addT({txt:'{{handle}}',h:60,fs:30,b:1,y:Math.round(PH()-120),color:th().d})}

/* ---------------- TOOLS ---------------- */
let gridOn=false;const gov=document.createElement('div');gov.id='gridov';$('stage').appendChild(gov);
function loadQR(){return window.qrcode?Promise.resolve():new Promise((r,j)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';s.onload=r;s.onerror=()=>j(new Error('offline'));document.head.appendChild(s)})}
async function makeQR(text,fg,bg){await loadQR();const q=qrcode(0,'M');q.addData(text);q.make();const n=q.getModuleCount(),m=2,S=20,W=(n+2*m)*S,c=document.createElement('canvas');c.width=c.height=W;const x=c.getContext('2d');x.fillStyle=bg;x.fillRect(0,0,W,W);x.fillStyle=fg;for(let r=0;r<n;r++)for(let k=0;k<n;k++)if(q.isDark(r,k))x.fillRect((k+m)*S,(r+m)*S,S,S);return c.toDataURL('image/png')}
function qrModal(){const m=modal(`<h3 style="margin:0 0 6px">QR code</h3><p style="color:var(--mu);font-size:12px;margin:0 0 8px">Link, WhatsApp URL, website… It becomes a normal picture you can move and resize.</p><input type="text" id="qt" value="https://wa.me/${esc(V.phone)}" style="width:100%;padding:9px;border:1px solid var(--bd);border-radius:10px;background:var(--bg);color:var(--tx);font:inherit"><div class="row2" style="margin:8px 0"><label style="font-size:12px">Colour <input type="color" id="qf" value="${hex(th().d)}"></label><label style="font-size:12px">Background <input type="color" id="qb" value="#ffffff"></label></div><div class="bar"><button class="pri" id="qg">Add QR to slide</button></div><div id="qs" style="font-size:12px;color:var(--mu);margin-top:6px"></div>`);
 m.querySelector('#qg').onclick=async()=>{try{m.querySelector('#qs').textContent='Generating…';const u=await makeQR(m.querySelector('#qt').value,m.querySelector('#qf').value,m.querySelector('#qb').value),id='i'+(++iid);IMG[id]=u;addImg(id,400,400);m.remove()}catch(e){m.querySelector('#qs').textContent='Could not load the QR library (needs internet once): '+e.message}}}
function rTl(b){b.innerHTML=`<div class="tl"><button data-t="aT"><b>T</b>Text box</button><button data-t="aR"><b>◼</b>Rectangle</button><button data-t="aC"><b>●</b>Circle</button><button data-t="aL"><b>―</b>Line</button><button data-t="aA"><b>✦</b>Zodiac badge</button><button data-t="aI"><b>🖼</b>Photo</button><button data-t="rb"><b>✂</b>Remove BG</button><button data-t="qr"><b>▦</b>QR code</button><button data-t="grid"><b>#</b>${gridOn?'Hide':'Show'} grid</button><button data-t="pres"><b>▶</b>Present</button></div>`;
 b.querySelectorAll('[data-t]').forEach(x=>x.onclick=()=>{const t=x.dataset.t;if(t==='qr')qrModal();else if(t==='rb'){if(rbFn)rbFn()}else if(t==='grid'){gridOn=!gridOn;gov.style.display=gridOn?'block':'none';rTl(b)}else if(t==='pres')present();else old[t].onclick()})}

/* ---------------- floating toolbar + context menu ---------------- */
const fb=document.createElement('div');fb.id='fb';fb.innerHTML='<button data-f="dup" title="Duplicate (Ctrl+D)">⧉</button><button data-f="lk" title="Lock">🔒</button><button data-f="dl" title="Delete">🗑</button><button data-f="more" title="More">⋯</button>';document.body.appendChild(fb);
function fbPos(){const el=sel&&get(sel);if(!el||el.hd||(typeof drag!=='undefined'&&drag)||(document.activeElement&&document.activeElement.isContentEditable)){fb.style.display='none';return}
 const r=$('sel').getBoundingClientRect(),a=$('area').getBoundingClientRect();if(r.bottom<a.top||r.top>a.bottom||r.right<a.left||r.left>a.right){fb.style.display='none';return}
 fb.style.display='flex';fb.querySelector('[data-f=lk]').textContent=el.lk?'🔓':'🔒';let y=r.top-46-12-fb.offsetHeight;if(y<a.top+4)y=r.bottom+14;if(y>a.bottom-fb.offsetHeight)y=a.bottom-fb.offsetHeight-6;
 let x=r.left+r.width/2-fb.offsetWidth/2;x=Math.max(a.left+4,Math.min(x,a.right-fb.offsetWidth-4));fb.style.left=x+'px';fb.style.top=y+'px'}
$('area').addEventListener('scroll',fbPos);addEventListener('resize',fbPos);addEventListener('pointerup',()=>setTimeout(fbPos,0));
function dupEl(el){const c={...JSON.parse(JSON.stringify(el)),id:uid++,x:el.x+24,y:el.y+24};delete c.key;A().push(c);sel=c.id;render();commit()}
function ordEl(el,m){const a=A(),i=a.indexOf(el);a.splice(i,1);if(m==='f')a.splice(Math.min(i+1,a.length),0,el);else if(m==='b')a.splice(Math.max(i-1,0),0,el);else if(m==='F')a.push(el);else a.unshift(el);render();commit()}
function pasteEl(){if(!CB)return;const c=JSON.parse(CB);c.id=uid++;c.x+=24;c.y+=24;delete c.key;A().push(c);sel=c.id;render();commit()}
const cm=document.createElement('div');cm.id='cm';document.body.appendChild(cm);
function showCM(x,y){const el=sel&&get(sel);const it=el?[['Copy','Ctrl+C',()=>{CB=JSON.stringify(el);toast('Copied')}],['Paste','Ctrl+V',pasteEl],['Duplicate','Ctrl+D',()=>dupEl(el)],0,['Bring forward','Ctrl+]',()=>ordEl(el,'f')],['Send backward','Ctrl+[',()=>ordEl(el,'b')],['Bring to front','',()=>ordEl(el,'F')],['Send to back','',()=>ordEl(el,'B')],0,['Centre on page','',()=>{el.x=Math.round((1080-el.w)/2);el.y=Math.round((PH()-el.h)/2);refresh(el);commit()}],['Reset rotation','',()=>{el.rot=0;refresh(el);panel();commit()}],[el.lk?'Unlock':'Lock','',()=>{el.lk=el.lk?0:1;updSel();commit()}],[el.hd?'Show':'Hide','',()=>{el.hd=el.hd?0:1;render();commit()}],0,['Delete','Del',()=>del()]]
  :[['Paste','Ctrl+V',pasteEl],['Add text','',()=>old.aT.onclick()],['Add image…','',()=>fU.click()],['Page background…','',()=>openP('bg')]];
 cm.innerHTML='';it.forEach(t=>{if(!t){cm.appendChild(document.createElement('hr'));return}const b=document.createElement('button');b.innerHTML=`<span>${t[0]}</span><kbd>${t[1]}</kbd>`;b.onclick=()=>{cm.style.display='none';t[2]()};cm.appendChild(b)});
 cm.style.display='block';cm.style.left=Math.min(x,innerWidth-cm.offsetWidth-8)+'px';cm.style.top=Math.min(y,innerHeight-cm.offsetHeight-8)+'px'}
fb.addEventListener('click',e=>{const b=e.target.closest('[data-f]'),el=sel&&get(sel);if(!b||!el)return;const f=b.dataset.f;if(f==='dup')dupEl(el);else if(f==='dl')del();else if(f==='lk'){el.lk=el.lk?0:1;updSel();commit()}else{const r=b.getBoundingClientRect();showCM(r.left,r.bottom+6)}});
$('area').addEventListener('contextmenu',e=>{e.preventDefault();const n=e.target.closest('.el');if(n)select(+n.dataset.id);else select(null);showCM(e.clientX,e.clientY)});
addEventListener('pointerdown',e=>{if(!cm.contains(e.target))cm.style.display='none';if(!rz.contains(e.target)&&e.target!==rzB)rz.style.display='none'},true);

/* ---------------- Resize ---------------- */
const SIZES=[['Instagram Post','4:5',1350],['Square','1:1',1080],['Story / Reel','9:16',1920],['Pinterest Pin','2:3',1620],['Landscape','16:9',608],['Facebook / Link','1.91:1',565],['A4 Document','1:1.414',1527]];
const rz=document.createElement('div');rz.id='rzm';document.body.appendChild(rz);let lastRz=null;
const rzB=document.createElement('button');rzB.textContent='⤢ Resize';rzB.title='Change the page size';$('bOv').before(rzB);
function applyResize(h){h=Math.max(300,Math.min(3000,Math.round(h)));if(h===EX.h)return;lastRz={h:EX.h,P:JSON.stringify(P)};P.forEach(pg=>adaptEls(pg.els,EX.h,h));EX.h=h;fitV();sel=null;render();H=[];hi=-1;commit();persist();toast(`Resized to 1080×${h}. Check the layout — use Resize ▸ Undo if needed`)}
function rzMenu(){rz.innerHTML=SIZES.map(([n,r,h])=>`<button data-h="${h}" class="${h===EX.h?'on':''}"><span>${n}</span><small>${r} · 1080×${h}</small></button>`).join('')+`<div class="cu">Custom height <input type="number" id="rzc" value="${EX.h}" min="300" max="3000"> px <button id="rzg" style="width:auto;padding:6px 10px">Go</button></div><div style="font-size:11px;padding:2px 8px;opacity:.7">Width is always 1080 px. Applies to all slides.</div>${lastRz?'<button id="rzu">↶ Undo last resize</button>':''}`;
 const r=rzB.getBoundingClientRect();rz.style.display='block';rz.style.left=Math.max(8,Math.min(r.left,innerWidth-300))+'px';rz.style.top=r.bottom+6+'px'}
rzB.onclick=e=>{e.stopPropagation();rz.style.display==='block'?rz.style.display='none':rzMenu()};
rz.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.h){rz.style.display='none';applyResize(+b.dataset.h)}else if(b.id==='rzg'){applyResize(+rz.querySelector('#rzc').value);rz.style.display='none'}else if(b.id==='rzu'&&lastRz){EX.h=lastRz.h;P=JSON.parse(lastRz.P);lastRz=null;fitV();sel=null;render();H=[];hi=-1;commit();persist();rz.style.display='none';toast('Resize undone')}};

/* ---------------- Present ---------------- */
function present(){let i=cur;const o=document.createElement('div');o.className='pres';o.innerHTML='<div class="pc"></div><div class="pn">← → to navigate · Esc to exit</div>';document.body.appendChild(o);const c=o.firstChild;
 const show=()=>{c.innerHTML='';c.style.cssText=`width:1080px;height:${EX.h}px;background:${P[i].bg||'#fff'};left:0;top:0;transform-origin:0 0;overflow:hidden`;const s=Math.min(innerWidth/1080,innerHeight/EX.h)*.96;c.style.transform=`translate(${(innerWidth-1080*s)/2}px,${(innerHeight-EX.h*s)/2}px) scale(${s})`;P[i].els.forEach(el=>{const n=document.createElement('div');n.className='el';c.appendChild(n);paintEl(n,el)})};
 const key=e=>{if(e.key==='Escape'){close()}else if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){i=Math.min(P.length-1,i+1);show()}else if(e.key==='ArrowLeft'||e.key==='PageUp'){i=Math.max(0,i-1);show()}e.stopPropagation()};
 const close=()=>{removeEventListener('keydown',key,true);o.remove()};addEventListener('keydown',key,true);o.onclick=()=>{i=(i+1)%P.length;show()};show()}
const pB=document.createElement('button');pB.textContent='▶ Present';pB.onclick=present;$('bOv').before(pB);

/* ---------------- zoom, drop, paste, shortcuts ---------------- */
const zl=document.createElement('span');zl.id='zl';zl.style.cssText='font-size:12px;color:var(--mu);min-width:42px;text-align:center';$('z+').before(zl);
const fv0=fitV;fitV=function(){fv0();zl.textContent=Math.round(scale*100)+'%';fbPos()};fitV();
$('area').addEventListener('wheel',e=>{if(!e.ctrlKey&&!e.metaKey)return;e.preventDefault();zm=Math.max(.3,Math.min(3,(zm||1)*(e.deltaY<0?1.1:.91)));fitV()},{passive:false});
const toCanvas=e=>{const r=$('cv').getBoundingClientRect();return{x:(e.clientX-r.left)/scale,y:(e.clientY-r.top)/scale}};
$('area').addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy'});
$('area').addEventListener('drop',e=>{e.preventDefault();const at=toCanvas(e),dt=e.dataTransfer;
 if(dt.files&&dt.files.length){upFiles(dt.files,at);return}
 let d;try{d=JSON.parse(dt.getData('text/rashi'))}catch(x){return}
 if(d.k==='el')addItem(d.z?{zod:1,gl:d.z.split('|')[0],ic:+d.z.split('|')[1],n:d.n,T:th()}:{n:d.n},at);
 else if(d.k==='img')dimOf(d.i).then(([w,h])=>addImg(d.i,w,h,at))});
addEventListener('paste',e=>{const a=document.activeElement;if(a&&(/INPUT|TEXTAREA|SELECT/.test(a.tagName)||a.isContentEditable))return;const f=[...(e.clipboardData?e.clipboardData.items:[])].find(i=>i.type.startsWith('image/'));if(f){e.preventDefault();upFiles([f.getAsFile()])}});
addEventListener('keydown',e=>{const a=document.activeElement;if(a&&(/INPUT|TEXTAREA|SELECT/.test(a.tagName)||a.isContentEditable))return;const m=e.ctrlKey||e.metaKey,el=sel&&get(sel);if(!m||!el)return;
 if(e.key==='d'||e.key==='D'){e.preventDefault();dupEl(el)}else if(e.key===']'){e.preventDefault();ordEl(el,e.shiftKey?'F':'f')}else if(e.key==='['){e.preventDefault();ordEl(el,e.shiftKey?'B':'b')}});

/* ---------------- right panel: quick colours + rotation ---------------- */
const pn0=panel;panel=function(){pn0();const el=sel&&get(sel),pr=$('props'),tab=pr.querySelector('.pt');if(!el||!tab||!tab.querySelector('[data-pt=el].on'))return;
 const k=el.t==='text'?'color':el.t==='gfx'?'c':el.t==='art'?'c1':el.t==='rect'?'bg':null;
 if(k){const T=th(),cs=[T.p,T.d,T.a,T.i2,T.g,'#ffffff','#111827','#f5b301','#e0272f','#2fbf71','#2563eb','#ff4d8d',...BR.colors];tab.insertAdjacentHTML('afterend',`<h5 style="border:0;margin-top:0">Quick colours</h5><div class="qc">${[...new Set(cs)].map(c=>`<i data-qc="${c}" style="background:${c}" title="${c}"></i>`).join('')}</div>`)}
 pr.insertAdjacentHTML('beforeend',`<h5>Rotate</h5><div class="g2"><label>Angle °<input type="number" data-k="rot" step="1" value="${el.rot||0}"></label><label>&nbsp;<button data-rot0="1" style="width:100%">Reset</button></label></div><div style="font-size:11px;color:var(--mu);margin-top:4px">Or drag the ↻ handle above the element (Shift = 15° steps).</div>`)};
$('props').addEventListener('click',e=>{const q=e.target.closest('[data-qc]');if(q)applyColor(q.dataset.qc);if(e.target.dataset.rot0){const el=sel&&get(sel);if(el){el.rot=0;refresh(el);panel();commit()}}});

/* ---------------- start ---------------- */
window.CV={addItem,applyResize,present,openP,adaptEls};
render();fitV();if(innerWidth>900)openP('tp');
})();
