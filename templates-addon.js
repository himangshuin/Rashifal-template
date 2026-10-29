/* Rashifal Studio - extra template sets, slide controls. Loaded after the main script. */
(()=>{
const RZ=R.map(x=>x.slice()),tplW=tpl,rbW=rebuild;TH[12]=TH[8];
let SET='weekly';
const SETS={weekly:'সাপ্তাহিক ৰাশিফল',monthly:'মাহেকীয়া ৰাশিফল',transit:'গ্ৰহ গোচৰ + ১২ ৰাশি',nakshatra:'নক্ষত্ৰ গোচৰ + ১২ ৰাশি',carousel:'Instagram Carousel'};
const sk=s=>s==='weekly'?SK:SK+'_'+s,NB=['১','২','৩'];
const mk=()=>{const X=[];return[X,o=>X.push(E({t:'rect',...o})),o=>X.push(E({t:'text',ff:FONTS[0],fs:24,color:'#222222',al:'l',lh:1.5,txt:'',...o}))]};
const FT=(rect,txt,a,b)=>{rect({key:'ft',x:40,y:1226,w:1000,h:96,r:48,bg:a,bg2:b,sd:1});txt({key:'ftt',txt:'গার্চেলৰ বিলিং: হোৱাটছএপ {{phone}}  ·  ফলো আৰু শ্বেয়াৰ কৰক 🔔',x:70,y:1226,w:940,h:96,fs:27,b:1,color:'#ffffff',al:'c',va:1,lh:1.3,fit:1})};
let CAN=8;for(let i=13;i<40;i++)TH[i]=TH[i%12];
const art=(T,r,x,y,s)=>E({t:'art',key:'art',u:1,ic:1,x,y,w:s,h:s,c1:T.a,c2:T.i2,gc:T.g,gl:r[2]});

/* ---------- MONTHLY (dark cosmic cards) ---------- */
function MO(i,ti){const r=RZ[i],T=TH[ti],p=T.p,d=T.d,K='#0f0c1d',[X,rect,txt]=mk();
 rect({key:'bg',w:1080,h:1350,bg:K,bg2:mix(d,K,.45)});
 rect({key:'ring',x:640,y:-240,w:720,h:720,r:'50%',bg:p,op:.28});
 txt({key:'wm',txt:r[2]+'\uFE0E',x:200,y:420,w:880,h:760,fs:560,al:'c',va:1,lh:1,color:'#ffffff',op:.05});
 txt({key:'title',txt:'মাহেকীয়া ৰাশিফল',x:50,y:56,w:700,h:90,fs:62,b:1,color:'#ffffff'});
 txt({key:'week',txt:'{{week}}',x:50,y:160,w:440,h:56,fs:28,b:1,color:K,bg:T.g,r:28,al:'c',va:1,lh:1.2});
 X.push(art(T,r,790,30,250));
 txt({key:'nm',txt:r[0]+' ৰাশি',x:50,y:240,w:720,h:130,fs:100,b:1,color:T.a,va:1,lh:1.2});
 txt({key:'en',txt:r[1],x:54,y:372,w:500,h:44,fs:30,color:'#cfc8e0',lh:1.2});
 [['প্ৰেম ❤️','prem'],['কৰ্মজীৱন 💼','career'],['শিক্ষা 🪷','edu']].forEach(([h,k],j)=>{const y=430+j*250;
  rect({key:k+'_c',x:40,y,w:1000,h:230,r:30,bg:mix(p,K,.72),bw:2,bc:mix(p,K,.45)});
  rect({key:k+'_b',x:40,y,w:14,h:230,r:'30px 0 0 30px',bg:T.a});
  txt({key:k+'_h',txt:h,x:84,y:y+14,w:900,h:40,fs:28,b:1,color:T.g,lh:1.3});
  txt({key:k,u:1,x:84,y:y+58,w:930,h:160,fs:22,al:'j',lh:1.55,fit:1,color:'#f1edfa'})});
 FT(rect,txt,p,d);return X}

/* ---------- TRANSIT / NAKSHATRA cover ---------- */
function CV(ti,v){const T=TH[ti],p=T.p,d=T.d,K='#0c1033',[X,rect,txt]=mk();
 rect({key:'bg',w:1080,h:1350,bg:v?K:p,bg2:v?mix(d,K,.5):d});
 rect({key:'o1',x:110,y:340,w:860,h:860,r:'50%',bw:3,bc:mix(p,'#ffffff',.55)});
 rect({key:'o2',x:250,y:480,w:580,h:580,r:'50%',bw:3,bc:mix(p,'#ffffff',.55)});
 rect({key:'d1',x:900,y:560,w:50,h:50,r:'50%',bg:T.g});rect({key:'d2',x:200,y:1080,w:36,h:36,r:'50%',bg:T.a});
 txt({key:'sym',u:1,txt:v?'☾\uFE0E':'♄\uFE0E',x:390,y:620,w:300,h:300,r:'50%',bg:T.a,bg2:T.i2,fs:170,color:'#ffffff',al:'c',va:1,lh:1,sd:1});
 txt({key:'title',txt:v?'নক্ষত্ৰ গোচৰ':'গ্ৰহ গোচৰ',x:60,y:70,w:960,h:140,fs:112,b:1,color:'#ffffff',al:'c',va:1,lh:1.2});
 txt({key:'sub',u:1,txt:(v?'বুধ গ্ৰহ ৰোহিণী নক্ষত্ৰত':'শনি গ্ৰহৰ মীন ৰাশিত প্ৰৱেশ')+'\n১২ ৰাশিৰ ফল →',x:60,y:220,w:960,h:120,fs:38,b:1,color:T.g,al:'c',lh:1.4});
 txt({key:'week',txt:'{{week}}',x:290,y:1130,w:500,h:60,fs:28,b:1,color:d,bg:'#ffffff',r:30,al:'c',va:1,lh:1.2});
 FT(rect,txt,p,d);return X}

/* ---------- TRANSIT (v=0, light) / NAKSHATRA (v=1, dark gold) rashi page ---------- */
function RP(i,ti,v){const r=RZ[i-1],T=TH[ti],p=T.p,d=T.d,K='#0c1033',[X,rect,txt]=mk(),
 H3=v?['সাধাৰণ ফল','সুযোগ','উপায়']:['প্ৰভাৱ','সুযোগ','সাৱধানতা'];
 rect({key:'bg',w:1080,h:1350,bg:v?K:mix(p,'#ffffff',.9),bg2:v?mix(d,K,.55):'#ffffff'});
 if(v){[[80,300,40],[960,330,30],[900,40,34]].forEach(([x,y,f],k)=>txt({key:'st'+k,txt:'✦',x,y,w:50,h:50,fs:f,color:T.g,al:'c',lh:1.2,op:.6}));
  X.push(art(T,r,415,30,250));
  txt({key:'week',txt:'{{week}}',x:40,y:120,w:340,h:50,fs:24,b:1,color:T.g,lh:1.2});
  txt({key:'nm',txt:r[0]+' ৰাশি',x:140,y:285,w:800,h:100,fs:84,b:1,color:T.g,al:'c',va:1,lh:1.2});
  txt({key:'tag',u:1,txt:'ৰোহিণী নক্ষত্ৰত বুধ',x:240,y:395,w:600,h:54,fs:28,b:1,color:K,bg:T.g,r:27,al:'c',va:1,lh:1.2})}
 else{rect({key:'hb',w:1080,h:310,bg:p,bg2:d,r:'0 0 60px 60px'});
  X.push(art(T,r,50,40,230));
  txt({key:'nm',txt:r[0]+' ৰাশি',x:310,y:40,w:700,h:120,fs:92,b:1,color:'#ffffff',va:1,lh:1.2});
  txt({key:'tag',u:1,txt:'শনি গ্ৰহৰ গোচৰ',x:310,y:165,w:700,h:56,fs:34,b:1,color:'#ffffff',lh:1.2});
  txt({key:'week',txt:'{{week}}',x:310,y:232,w:420,h:48,fs:24,b:1,color:d,bg:'#ffffff',r:24,al:'c',va:1,lh:1.2})}
 [['prem'],['career'],['edu']].forEach(([k],j)=>{const y=v?480+j*235:340+j*270,h=v?225:250;
  rect({key:k+'_c',x:40,y,w:1000,h,r:v?30:36,bg:v?mix(p,K,.78):'#ffffff',bw:2,bc:v?mix(T.g,K,.45):mix(p,'#ffffff',.7),sd:v?0:1});
  txt({key:k+'_n',txt:NB[j],x:62,y:y+16,w:64,h:64,r:'50%',bg:v?T.g:p,fs:34,b:1,color:v?K:'#ffffff',al:'c',va:1,lh:1});
  txt({key:k+'_h',txt:H3[j],x:146,y:y+18,w:800,h:48,fs:30,b:1,color:v?T.g:d,lh:1.3});
  txt({key:k,u:1,x:146,y:y+72,w:870,h:h-84,fs:22,al:'j',lh:1.55,fit:1,color:v?'#eef0ff':'#2b2f38'})});
 FT(rect,txt,p,d);return X}

/* ---------- INSTAGRAM CAROUSEL (8 generic slides) ---------- */
function CA(i,ti){const T=TH[ti],p=T.p,d=T.d,N=CAN,[X,rect,txt]=mk();
 if(i===0){rect({key:'bg',w:1080,h:1350,bg:p,bg2:d});rect({key:'o1',x:620,y:-260,w:800,h:800,r:'50%',bg:'#ffffff',op:.1});rect({key:'o2',x:-200,y:900,w:600,h:600,r:'50%',bg:'#ffffff',op:.08});
  txt({key:'title',u:1,txt:'আপোনাৰ শিৰোনাম ইয়াত',x:70,y:340,w:940,h:440,fs:112,b:1,color:'#ffffff',lh:1.25,va:1,fit:1});
  txt({key:'sub',u:1,txt:'এটি চমু উপশিৰোনাম',x:70,y:820,w:940,h:120,fs:40,color:T.g,lh:1.4});
  txt({key:'sw',txt:'Swipe  →',x:70,y:1160,w:300,h:70,fs:30,b:1,color:d,bg:'#ffffff',r:35,al:'c',va:1,lh:1.2});
  txt({key:'hd',txt:'{{handle}}',x:520,y:1160,w:490,h:70,fs:28,b:1,color:'#ffffff',al:'r',va:1,lh:1.2})}
 else if(i===N-1){rect({key:'bg',w:1080,h:1350,bg:d,bg2:p});
  txt({key:'title',u:1,txt:'ভাল লাগিলে ফলো, ছেভ আৰু শ্বেয়াৰ কৰক',x:70,y:300,w:940,h:380,fs:84,b:1,color:'#ffffff',al:'c',va:1,lh:1.3,fit:1});
  txt({key:'sub',u:1,txt:'আপোনাৰ মতামত কমেণ্টত জনাওক',x:70,y:700,w:940,h:100,fs:38,color:T.g,al:'c',lh:1.4});
  txt({key:'ic',txt:'❤️  💬  ↗  🔖',x:70,y:830,w:940,h:130,fs:90,al:'c',va:1,lh:1});
  txt({key:'hd',txt:'{{handle}}',x:290,y:1040,w:500,h:80,fs:34,b:1,color:d,bg:'#ffffff',r:40,al:'c',va:1,lh:1.2})}
 else{rect({key:'bg',w:1080,h:1350,bg:mix(p,'#ffffff',.92)});
  txt({key:'num',txt:'0'+i,x:500,y:0,w:560,h:440,fs:380,b:1,color:p,al:'r',lh:1.1,op:.1});
  rect({key:'bar',x:70,y:300,w:14,h:150,r:7,bg:p});
  txt({key:'h',u:1,txt:'শিৰোনাম '+i,x:110,y:290,w:860,h:170,fs:60,b:1,color:d,va:1,lh:1.25,fit:1});
  txt({key:'b',u:1,txt:'ইয়াত আপোনাৰ বিষয়বস্তু লিখক…',x:70,y:520,w:940,h:640,fs:36,lh:1.7,color:'#2b2f38',fit:1});
  for(let k=0;k<N;k++)rect({key:'dt'+k,x:70+k*38,y:1250,w:26,h:8,r:4,bg:k===i?p:mix(p,'#ffffff',.65)});
  txt({key:'hd',txt:'{{handle}}',x:560,y:1226,w:450,h:50,fs:26,b:1,color:d,al:'r',lh:1.2})}
 return X}

const tplX=(i,ti)=>SET==='monthly'?MO(i,ti):SET==='carousel'?CA(i,ti):i?RP(i,ti,SET==='nakshatra'?1:0):CV(ti,SET==='nakshatra'?1:0);
tpl=function(i,ti=i){return SET==='weekly'?tplW(i,ti):tplX(i,ti)};
rebuild=function(pi,ti){rbW(pi,SET==='carousel'&&ti===pi?(P[pi].th??8):ti)};
persist=function(){try{localStorage.setItem(sk(SET),JSON.stringify({P,IMG,cur,V,EX,RL:R}))}catch(e){$('st').textContent='Browser storage is full — large images may not be saved.'}};

const LB=s=>{const f=q=>RZ.map(x=>[x[0],x[1],x[2],q+x[3]]);
 return s==='weekly'?RZ.map(x=>x.slice()):s==='monthly'?f('monthly-'):s==='carousel'?[1,2,3,4,5,6,7,8].map(k=>['ছ্লাইড '+k,'Slide '+k,String(k),'slide']):[['কভাৰ','Cover','✦','cover'],...f(s+'-')]};
const capFor=i=>{if(SET==='weekly')return;if(SET==='carousel')return '✨\n{{handle}}\n\n#assam';
 const r=RZ[SET==='monthly'?i:i-1];if(SET==='monthly')return `${r[0]} ৰাশিৰ মাহেকীয়া ৰাশিফল ✨\n{{week}}\n\n#ৰাশিফল #monthlyhoroscope #${r[1]} #assam`;
 const w=SET==='transit'?'গ্ৰহ গোচৰ':'নক্ষত্ৰ গোচৰ';
 return i?`${r[0]} ৰাশিৰ ওপৰত ${w}ৰ প্ৰভাৱ ✨\n{{week}}\n\n#ৰাশিফল #${r[1]} #${SET} #assam`:`${w} — ১২ ৰাশিৰ ফল ✨\n{{week}}\n\nSwipe কৰি আপোনাৰ ৰাশি চাওক 👉\n#ৰাশিফল #${SET} #assam`};
function loadSet(){R.length=0;R.push(...LB(SET));let d=null;try{d=JSON.parse(localStorage.getItem(sk(SET))||'null')}catch(e){}
 if(d&&d.P&&d.RL&&d.RL.length===d.P.length){R.length=0;R.push(...d.RL)}
 if(d&&d.P&&d.P.length===R.length){P=d.P;Object.assign(IMG,d.IMG||{});EX.h=(d.EX&&d.EX.h)||1350;fitV()}
 else P=R.map((_,i)=>{const th=SET==='carousel'?8:i;return{bg:pageBg(th),th,els:tpl(i,th),cap:capFor(i)}});
 uid=Math.max(1,...P.flatMap(p=>p.els.map(e=>e.id)))+1;iid=Math.max(0,...Object.keys(IMG).map(k=>+k.slice(1)));
 CAN=R.length;cur=0;sel=null;H=[];hi=-1;render();fitV();commit()}

const ss=document.createElement('select');ss.style.cssText='border-radius:10px;padding:7px;font:inherit;font-weight:700;border:0;max-width:210px';
ss.innerHTML=Object.entries(SETS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
$('bOv').before(ss);$('b2').textContent='⬇ ZIP';$('b3').textContent='⬇ PDF';
ss.onchange=()=>{persist();SET=ss.value;try{localStorage.setItem('rashi_set',SET)}catch(e){}loadSet()};

/* ---------- project import / export helpers ---------- */
window.getSet=()=>SET;
window.importProject=d=>{
 if(!d||!Array.isArray(d.P)||!d.P.length||!d.P.every(p=>p&&Array.isArray(p.els)))throw new Error('This file has no slides (expected a project exported from Rashifal Studio).');
 let s=d.SET&&SETS[d.SET]?d.SET:null;
 if(!s){const t=d.P.map(p=>p.cap||'').join(' ');s=/নক্ষত্ৰ গোচৰ/.test(t)?'nakshatra':/গ্ৰহ গোচৰ/.test(t)?'transit':/মাহেকীয়া/.test(t)?'monthly':d.P.length===12?'weekly':SET}
 try{persist()}catch(e){}
 SET=s;ss.value=s;try{localStorage.setItem('rashi_set',SET)}catch(e){}
 const base=LB(s);R.length=0;R.push(...d.P.map((_,i)=>(d.RL&&d.RL[i])||base[i]||['ছ্লাইড '+(i+1),'Slide '+(i+1),'＋','slide']));
 P=d.P;Object.keys(IMG).forEach(k=>delete IMG[k]);Object.assign(IMG,d.IMG||{});Object.assign(V,d.V||{});EX.fmt=(d.EX&&d.EX.fmt)||'png';EX.scale=(d.EX&&d.EX.scale)||1;EX.h=(d.EX&&d.EX.h)||1350;
 uid=Math.max(1,...P.flatMap(p=>p.els.map(e=>e.id||0)))+1;iid=Math.max(0,...Object.keys(IMG).map(k=>+k.slice(1)||0));
 CAN=R.length;cur=0;sel=null;H=[];hi=-1;fitV();render();commit();persist();return{set:s,pages:P.length}};

/* ---------- add / duplicate / delete slides ---------- */
function renum(){CAN=P.length;P.forEach((pg,i)=>{const nm=pg.els.find(e=>e.key==='num');if(nm)nm.txt=String(i).padStart(2,'0');
 const dt=pg.els.filter(e=>/^dt\d+$/.test(e.key));if(dt.length){const y0=dt[0].y;pg.els=pg.els.filter(e=>!dt.includes(e));const c=TH[pg.th??8].p;for(let k=0;k<P.length;k++)pg.els.push(E({t:'rect',key:'dt'+k,x:70+k*38,y:y0,w:26,h:8,r:4,bg:k===i?c:mix(c,'#ffffff',.65)}))}})}
const done=()=>{sel=null;renum();render();commit()};
function addS(){const th=P[cur].th??cur,n=cur+1;CAN=P.length+1;const els=window.ADAPT?ADAPT(CA(1,th)):CA(1,th);els.find(e=>e.key==='num').txt=String(n).padStart(2,'0');
 P.splice(n,0,{bg:pageBg(th),th,els,cap:'✨\n{{handle}}\n\n#assam'});R.splice(n,0,['ছ্লাইড '+(n+1),'Slide '+(n+1),'＋','slide']);cur=n;done()}
function dupS(){const c=JSON.parse(JSON.stringify(P[cur]));c.els.forEach(e=>e.id=uid++);P.splice(cur+1,0,c);R.splice(cur+1,0,R[cur].slice());cur++;done()}
function delS(){if(P.length<2||!confirm('Delete this slide?'))return;P.splice(cur,1);R.splice(cur,1);cur=Math.min(cur,P.length-1);done()}
window.RS={ins(pg){const n=cur+1;P.splice(n,0,pg);R.splice(n,0,['ছ্লাইড '+(n+1),'Slide '+(n+1),'＋','slide']);cur=n;done()}};
const chW=chips;chips=function(){chW();[['＋ Slide','Add a new slide after this one',addS],['⧉ Copy','Duplicate this slide',dupS],['🗑','Delete this slide',delS]].forEach(([t,ti,f])=>{const b=document.createElement('button');b.textContent=t;b.title=ti;b.style.flex='0 0 auto';b.onclick=f;$('chips').appendChild(b)})};
hist=function(d){const k=hi+d;if(k<0||k>=H.length)return;hi=k;P=JSON.parse(H[hi]);while(R.length>P.length)R.pop();while(R.length<P.length)R.push(['ছ্লাইড '+(R.length+1),'Slide','＋','slide']);cur=Math.min(cur,P.length-1);sel=null;render();persist()};
try{const sv=localStorage.getItem('rashi_set');if(sv&&SETS[sv]&&sv!=='weekly'){SET=sv;ss.value=sv;loadSet()}else{const w=JSON.parse(localStorage.getItem(SK)||'null');if(w&&w.RL&&w.P&&w.RL.length===w.P.length&&w.P.length===P.length){R.length=0;R.push(...w.RL)}CAN=R.length;render();fitV()}}catch(e){}
})();
