/* Studio add-on: background remover (AI + brushes + colour pick), photo filters/crop/sticker outline/shadow, text effects */
(()=>{
const st=document.createElement('style');st.textContent=`.ew{background:repeating-conic-gradient(#cfcfcf 0 25%,#fff 0 50%) 0 0/20px 20px;border-radius:10px;display:flex;justify-content:center;overflow:hidden}.ew canvas{max-width:100%;max-height:52vh;touch-action:none;cursor:crosshair}#md .bar button.on{background:var(--ac);color:#fff;border-color:var(--ac)}`;document.head.appendChild(st);
const lo=u=>new Promise((r,j)=>{const i=new Image();i.onload=()=>r(i);i.onerror=j;i.src=u});
const PR={None:{},'B&W':{sa:-100,co:10},Sepia:{sp:1},Vivid:{sa:45,co:15},Fade:{co:-15,br:12,sa:-20},Warm:{wm:30},Cool:{wm:-30},Dramatic:{co:40,br:-10,sa:-15}};
const fxOn=f=>!!f&&!!(f.br||f.co||f.sa||f.wm||f.sp||f.fh||f.fv||f.ow||f.sh||f.of==='cover');

/* ---------- photo pipeline (filters, flip, fill/fit, outline, shadow) baked to a bitmap so export matches ---------- */
const FC=new Map(),TM={},key=el=>el.src+'|'+JSON.stringify(el.fx)+'|'+el.w+'x'+el.h;
async function gen(el){const k=key(el);if(FC.has(k))return FC.get(k);
 const f=el.fx,im=await lo(IMG[el.src]),s=Math.min(1.5,1600/Math.max(el.w,el.h)),W=Math.max(8,Math.round(el.w*s)),H=Math.max(8,Math.round(el.h*s)),
 pad=Math.round(((f.ow||0)*1.2+(f.sh?26:0))*s),aw=W-2*pad,ah=H-2*pad,cover=f.of==='cover'&&!pad,
 ra=cover?Math.max(aw/im.width,ah/im.height):Math.min(aw/im.width,ah/im.height),dw=im.width*ra,dh=im.height*ra,
 mk=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;return c},T=mk(),t=T.getContext('2d',{willReadFrequently:true});
 t.translate(W/2,H/2);t.scale(f.fh?-1:1,f.fv?-1:1);t.drawImage(im,-dw/2,-dh/2,dw,dh);t.setTransform(1,0,0,1,0,0);
 if(f.br||f.co||f.sa||f.wm||f.sp){const d=t.getImageData(0,0,W,H),p=d.data,b=(f.br||0)*2.55,c=(f.co||0)*2.55,cf=259*(c+255)/(255*(259-c)),sa=1+(f.sa||0)/100,w=(f.wm||0)*.6,sp=f.sp||0;
  for(let i=0;i<p.length;i+=4){if(!p[i+3])continue;let r=p[i],g=p[i+1],u=p[i+2];
   if(sp){const a=.393*r+.769*g+.189*u,b2=.349*r+.686*g+.168*u,c2=.272*r+.534*g+.131*u;r+=(a-r)*sp;g+=(b2-g)*sp;u+=(c2-u)*sp}
   const y=.299*r+.587*g+.114*u;r=y+(r-y)*sa;g=y+(g-y)*sa;u=y+(u-y)*sa;
   p[i]=(r-128)*cf+128+b+w;p[i+1]=(g-128)*cf+128+b;p[i+2]=(u-128)*cf+128+b-w}
  t.putImageData(d,0,0)}
 const L=mk(),l=L.getContext('2d');
 if(f.ow){const Q=mk(),q=Q.getContext('2d');q.drawImage(T,0,0);q.globalCompositeOperation='source-in';q.fillStyle=f.oc||'#ffffff';q.fillRect(0,0,W,H);
  [1,.5].forEach(m=>{for(let a=0;a<24;a++){const g=a*Math.PI/12;l.drawImage(Q,Math.cos(g)*f.ow*s*m,Math.sin(g)*f.ow*s*m)}})}
 l.drawImage(T,0,0);
 const O=mk(),o=O.getContext('2d');if(f.sh){o.shadowColor='rgba(0,0,0,.4)';o.shadowBlur=22*s;o.shadowOffsetY=9*s}o.drawImage(L,0,0);
 const u=O.toDataURL('image/png');FC.set(k,u);if(FC.size>40)FC.delete(FC.keys().next().value);return u}
const TS={None:'',Soft:'0 6px 18px rgba(0,0,0,.35)',Lift:'0 8px 0 rgba(0,0,0,.25)',Echo:'6px 6px 0 rgba(0,0,0,.25),12px 12px 0 rgba(0,0,0,.12)',Neon:'N'};
const pe=paintEl;paintEl=function(n,el){pe(n,el);
 if(el.t==='img'&&fxOn(el.fx)&&IMG[el.src]){const im=n.firstChild,k=key(el);
  if(FC.has(k))im.src=FC.get(k);else{clearTimeout(TM[el.id]);TM[el.id]=setTimeout(()=>gen(el).then(()=>{const q=node(el.id);if(q&&get(el.id)===el)paintEl(q,el)}).catch(()=>{}),80)}}
 else if(el.t==='text'){const i=n.firstChild;if(i&&i.className==='in'){const s=i.style;if(el.it)s.fontStyle='italic';if(el.ls)s.letterSpacing=el.ls+'px';if(el.up)s.textTransform='uppercase';
  if(el.ts&&TS[el.ts])s.textShadow=(el.ol?OL+',':'')+(el.ts==='Neon'?[8,22,44].map(b=>`0 0 ${b}px ${el.color}`).join(','):TS[el.ts])}}};
const s0=snap;snap=async function(pi=cur){await Promise.all(P[pi].els.filter(e=>e.t==='img'&&fxOn(e.fx)&&IMG[e.src]).map(gen));return s0(pi)};

/* ---------- background remover editor ---------- */
let RB;async function rmbg(blob,pr){if(!RB){let err;for(const u of['https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.5.5/+esm','https://esm.sh/@imgly/background-removal@1.5.5']){try{RB=(await import(u)).removeBackground;if(RB)break}catch(x){err=x}}if(!RB)throw err||new Error('offline')}
 return RB(blob,{model:'isnet_fp16',output:{format:'image/png'},progress:pr})}
async function editor(el){let base,cur0;try{base=await lo(IMG[el.orig||el.src]);cur0=await lo(IMG[el.src])}catch(x){return}
 const W=base.naturalWidth,H=base.naturalHeight,cv=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;return c},B=cv(),K=cv();
 B.getContext('2d').drawImage(base,0,0);const k=K.getContext('2d',{willReadFrequently:true});k.drawImage(cur0,0,0,W,H);
 const m=modal(`<h3 style="margin:0 0 4px">Remove background</h3><p style="color:var(--mu);font-size:12px;margin:0 0 8px">Try <b>Auto</b> first, then tidy up: <b>Erase</b> removes, <b>Restore</b> brings the original back, <b>Pick colour</b> deletes a flat background in one click.</p>
 <div class="bar" style="margin:0 0 8px"><button class="pri" data-e="ai">✨ Auto remove (AI)</button><button data-e="erase" class="on">🧽 Erase</button><button data-e="restore">🖌 Restore</button><button data-e="color">🎯 Pick colour</button><button data-e="undo">↶ Undo</button><button data-e="reset">Reset</button></div>
 <div class="g2"><label style="font-size:12px">Brush size<input type="range" id="eb" min="6" max="120" value="40" style="width:100%"></label><label style="font-size:12px">Colour tolerance<input type="range" id="et" min="2" max="100" value="30" style="width:100%"></label></div>
 <label style="display:flex;gap:6px;margin:6px 0;font-size:13px"><input type="checkbox" id="ec" checked> Pick colour: only the connected area</label><div class="ew"></div><div id="es" style="font-size:12px;color:var(--mu);margin:6px 0">Ready</div>
 <div class="bar"><button class="pri" data-e="ok">Apply</button><button data-e="no">Cancel</button></div>`);
 m.querySelector('.ew').appendChild(K);
 const U=[],snp=()=>{U.push(k.getImageData(0,0,W,H));if(U.length>8)U.shift()},say=t=>m.querySelector('#es').textContent=t,V$=i=>+m.querySelector(i).value;
 let mode='erase',dn=0,lx,ly;
 const pt=e=>{const r=K.getBoundingClientRect();return[(e.clientX-r.left)*W/r.width,(e.clientY-r.top)*H/r.height,W/r.width]};
 const dab=(x,y,sc)=>{const r=V$('#eb')*sc/2;k.save();
  if(mode==='erase'){const g=k.createRadialGradient(x,y,r*.5,x,y,r);g.addColorStop(0,'rgba(0,0,0,1)');g.addColorStop(1,'rgba(0,0,0,0)');k.globalCompositeOperation='destination-out';k.fillStyle=g;k.beginPath();k.arc(x,y,r,0,7);k.fill()}
  else{k.beginPath();k.arc(x,y,r,0,7);k.clip();k.drawImage(B,0,0)}k.restore()};
 const pick=(x0,y0)=>{x0|=0;y0|=0;snp();const d=k.getImageData(0,0,W,H),p=d.data,o=(y0*W+x0)*4,sr=p[o],sg=p[o+1],sb=p[o+2],tol=V$('#et')*4.4,hit=i=>p[i+3]&&Math.hypot(p[i]-sr,p[i+1]-sg,p[i+2]-sb)<tol;
  if(m.querySelector('#ec').checked){const seen=new Uint8Array(W*H),stk=[y0*W+x0],go=(a,b)=>{if(a>=0&&b>=0&&a<W&&b<H&&!seen[b*W+a]){seen[b*W+a]=1;stk.push(b*W+a)}};seen[stk[0]]=1;
   while(stk.length){const q=stk.pop();if(!hit(q*4))continue;p[q*4+3]=0;const x=q%W,y=(q/W)|0;go(x+1,y);go(x-1,y);go(x,y+1);go(x,y-1)}}
  else for(let i=0;i<p.length;i+=4)if(hit(i))p[i+3]=0;
  k.putImageData(d,0,0)};
 K.onpointerdown=e=>{const[x,y,sc]=pt(e);if(mode==='color'){pick(x,y);return}snp();dn=1;K.setPointerCapture(e.pointerId);lx=x;ly=y;dab(x,y,sc)};
 K.onpointermove=e=>{if(!dn)return;const[x,y,sc]=pt(e),n=Math.max(1,Math.ceil(Math.hypot(x-lx,y-ly)/(V$('#eb')*sc/6)));for(let i=1;i<=n;i++)dab(lx+(x-lx)*i/n,ly+(y-ly)*i/n,sc);lx=x;ly=y};
 K.onpointerup=K.onpointercancel=()=>dn=0;
 const AI=async()=>{try{say('Loading AI model — the first run downloads about 40 MB, after that it is instant…');snp();
   const res=await rmbg(await(await fetch(IMG[el.orig||el.src])).blob(),(kk,c,t)=>say(String(kk).startsWith('fetch')?`Downloading model ${t?Math.round(c/t*100):''}%`:'Removing background…'));
   const im=await lo(URL.createObjectURL(res));k.clearRect(0,0,W,H);k.drawImage(im,0,0,W,H);say('Done — refine with Erase / Restore, then Apply.')}
  catch(x){U.pop();say('AI engine could not load ('+(x.message||x)+'). Check your internet, or use Pick colour + Erase.')}};
 m.addEventListener('click',e=>{const b=e.target.closest('[data-e]');if(!b)return;const a=b.dataset.e;
  if(a==='ai')AI();else if(a==='undo'){const s=U.pop();if(s)k.putImageData(s,0,0)}else if(a==='reset'){snp();k.clearRect(0,0,W,H);k.drawImage(B,0,0)}
  else if(a==='no')m.remove();
  else if(a==='ok'){const id='i'+(++iid);IMG[id]=K.toDataURL('image/png');el.orig=el.orig||el.src;el.src=id;m.remove();refresh(el);panel();commit()}
  else{mode=a;m.querySelectorAll('[data-e=erase],[data-e=restore],[data-e=color]').forEach(x=>x.classList.toggle('on',x===b));K.style.cursor=a==='color'?'copy':'crosshair'}})}

/* ---------- panel sections ---------- */
const sl=(k,l,v)=>`<label>${l}<input type="range" data-fx="${k}" min="-100" max="100" value="${v||0}" style="width:100%"></label>`;
const shp=[['Square',0],['Rounded',48],['Circle','50%'],['Arch','999px 999px 0 0']];
const pn=panel;panel=function(){pn();const el=sel&&get(sel),pr=$('props'),tab=pr.querySelector('.pt');if(!el||(tab&&!tab.querySelector('[data-pt=el].on')))return;
 if(el.t==='img'){const f=el.fx||{};tab.insertAdjacentHTML('afterend',`<h5 style="border:0;margin-top:0">Photo tools</h5><div class="bar" style="margin-top:6px"><button class="pri" data-fa="bg">✂ Remove background</button>${el.orig?'<button data-fa="orig">Undo cut-out</button>':''}</div>
  <label>Filter<select data-fx="pr">${Object.keys(PR).map(n=>`<option ${n===(f.pr||'None')?'selected':''}>${n}</option>`).join('')}</select></label>${sl('br','Brightness',f.br)}${sl('co','Contrast',f.co)}${sl('sa','Saturation',f.sa)}${sl('wm','Warmth',f.wm)}
  <div class="bar"><button data-fa="fh">⇋ Flip</button><button data-fa="fv">⇵ Flip</button><button data-fa="cover">${f.of==='cover'?'Fit inside':'Fill frame'}</button></div>
  <label>Frame shape</label><div class="bar" style="margin-top:4px">${shp.map(([n,v])=>`<button data-fa="shape" data-v="${v}">${n}</button>`).join('')}</div>
  <div class="g2"><label>Sticker outline<input type="range" data-fx="ow" min="0" max="40" value="${f.ow||0}" style="width:100%"></label><label>Outline colour<input type="color" data-fx="oc" value="${hex(f.oc||'#ffffff')}"></label></div>
  <label class="ck"><input type="checkbox" data-fx="sh" ${f.sh?'checked':''}> Soft shadow</label><div class="bar"><button data-fa="back">Use as page background</button></div>`)}
 if(el.t==='text')pr.insertAdjacentHTML('beforeend',`<h5>Text effects</h5><label>Shadow / glow<select data-tx="ts">${Object.keys(TS).map(n=>`<option ${n===(el.ts||'None')?'selected':''}>${n}</option>`).join('')}</select></label><label>Letter spacing<input type="number" data-tx="ls" value="${el.ls||0}"></label><label class="ck"><input type="checkbox" data-tx="it" ${el.it?'checked':''}> Italic</label><label class="ck"><input type="checkbox" data-tx="up" ${el.up?'checked':''}> UPPERCASE</label>`)};
$('props').addEventListener('input',e=>{const t=e.target,el=sel&&get(sel);if(!el)return;
 if(t.dataset.tx){el[t.dataset.tx]=t.type==='checkbox'?+t.checked:t.type==='number'?+t.value||0:t.value;return refresh(el)}
 const k=t.dataset.fx;if(!k)return;const f=el.fx=el.fx||{};
 if(k==='pr'){Object.assign(f,{br:0,co:0,sa:0,wm:0,sp:0},PR[t.value]||{});f.pr=t.value;refresh(el);return panel()}
 f[k]=t.type==='checkbox'?+t.checked:t.type==='color'?t.value:+t.value;refresh(el)});
$('props').addEventListener('click',e=>{const b=e.target.closest('[data-fa]'),el=sel&&get(sel);if(!b||!el)return;const a=b.dataset.fa,f=el.fx=el.fx||{};
 if(a==='bg')return editor(el);
 if(a==='orig'){el.src=el.orig;delete el.orig}
 else if(a==='fh'||a==='fv')f[a]=f[a]?0:1;
 else if(a==='cover')f.of=f.of==='cover'?'':'cover';
 else if(a==='shape'){const v=b.dataset.v;el.r=isNaN(v)?v:+v}
 else if(a==='back'){Object.assign(el,{x:0,y:0,w:1080,h:1350,r:0});f.of='cover';const A=P[cur].els;A.splice(A.indexOf(el),1);A.splice(A.findIndex(q=>q.key==='bg'||q.key==='bgx')+1,0,el);render();commit();return}
 refresh(el);panel();commit()});
const nb=document.createElement('button');nb.innerHTML='<i>✂</i>Remove BG';nb.onclick=()=>{const el=sel&&get(sel);if(el&&el.t==='img')editor(el);else $('st').textContent='Select an image first (add one with Image), then click Remove BG.'};document.querySelector('.tools').append(nb);
panel();
})();
