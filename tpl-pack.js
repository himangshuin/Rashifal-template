/* More ready-made designs. Each: [name, category, builder(T,rect,txt,gx,X)] — designed on a 1080x1350 page, auto-fitted to the current page size */
(()=>{
const HD=txt=>txt({key:'hd',txt:'{{handle}}',x:110,y:1262,w:860,h:50,fs:26,b:1,al:'c',lh:1.2});
const K='#0f0c1d';
const star=(txt,x,y,f,c,o=.6)=>txt({txt:'✦',x,y,w:60,h:60,fs:f,color:c,al:'c',lh:1.2,op:o});
window.TPX=[
['Daily tarot card','Astro',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:K,bg2:mix(d,K,.5)});[[90,120,40],[930,200,30],[140,1100,34],[940,1000,44],[520,60,26]].forEach(([x,y,f])=>star(txt,x,y,f,T.g));
 txt({txt:'আজিৰ টাৰো কাৰ্ড',x:60,y:70,w:960,h:120,fs:80,b:1,color:'#ffffff',al:'c',va:1,lh:1.2});
 gx('Tarot card back',300,230,480,p,T.g);gx('Sparkles',720,260,150,T.g);gx('Crescent moon',140,320,120,T.g);
 txt({key:'x_cn',u:1,txt:'কাৰ্ডৰ নাম',x:60,y:960,w:960,h:90,fs:60,b:1,color:T.g,al:'c',va:1,lh:1.2});
 txt({key:'x_cm',u:1,txt:'আজিৰ বাৰ্তা ইয়াত লিখক…',x:100,y:1060,w:880,h:150,fs:34,color:'#e8e3f5',al:'c',lh:1.5,fit:1});HD(txt)}],
['Stacked reviews','Review',(T,rect,txt,gx)=>{const p=T.p;rect({key:'bg',w:1080,h:1350,bg:'#16141c'});
 txt({txt:'গ্ৰাহকৰ মতামত',x:60,y:70,w:960,h:110,fs:76,b:1,color:'#ffffff',al:'c',va:1,lh:1.2});
 [[0,-3],[1,2],[2,-2],[3,3]].forEach(([j,r])=>{const y=230+j*265;rect({x:90,y,w:900,h:230,r:16,bg:'#24212d',bw:2,bc:'#3a3646',rot:r,sd:1});
  txt({key:'x_n'+j,u:1,txt:'গ্ৰাহকৰ নাম',x:120,y:y+18,w:560,h:46,fs:30,b:1,color:'#ffffff',rot:r});
  txt({txt:'★★★★★',x:700,y:y+18,w:270,h:46,fs:30,color:'#f5b301',al:'r',rot:r});
  txt({key:'x_r'+j,u:1,txt:'মন্তব্য ইয়াত লিখক…',x:120,y:y+76,w:840,h:140,fs:28,color:'#d6d2e2',lh:1.5,fit:1,rot:r})});HD(txt)}],
['Phone reviews','Review',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:mix(p,'#ffffff',.85),bg2:mix(d,'#ffffff',.5)});
 txt({txt:'What they say',x:60,y:70,w:960,h:130,fs:100,b:1,color:d,al:'c',va:1,lh:1.2,ff:'Playfair Display'});
 rect({x:330,y:240,w:420,h:900,r:60,bg:'#111827',bw:6,bc:'#374151',sd:1});rect({x:346,y:262,w:388,h:856,r:46,bg:p,bg2:d});gx('3D Sparkles',400,480,280,T.g);gx('Crescent moon',470,860,140,'#ffffff');
 [[90,330,'a'],[560,580,'b'],[110,830,'c']].forEach(([x,y,k])=>{rect({x,y,w:430,h:190,r:26,bg:'#ffffff',bw:2,bc:mix(p,'#ffffff',.7),sd:1});
  txt({key:'x_rn'+k,u:1,txt:'গ্ৰাহকৰ নাম',x:x+24,y:y+14,w:250,h:40,fs:24,b:1,color:d});txt({txt:'★★★★★',x:x+250,y:y+14,w:160,h:40,fs:22,color:'#f5b301',al:'r'});
  txt({key:'x_rt'+k,u:1,txt:'মন্তব্য ইয়াত লিখক…',x:x+24,y:y+62,w:384,h:116,fs:22,color:'#2b2f38',lh:1.45,fit:1})});HD(txt)}],
['Service card','Promo',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:p,bg2:d});
 rect({x:80,y:110,w:920,h:1130,r:50,bg:'#ffffff',sd:1});
 txt({key:'x_sv',u:1,txt:'পৰামৰ্শ সেৱা',x:130,y:150,w:820,h:100,fs:66,b:1,color:d,va:1,lh:1.2,fit:1});
 txt({txt:'4.8',x:130,y:262,w:150,h:70,fs:56,b:1,color:'#111827',va:1});[0,1,2,3,4].forEach(j=>gx('Star',290+j*54,276,46));
 [['বুক কৰক',p,'#ffffff'],['প্ৰশ্ন সোধক',mix(p,'#ffffff',.85),d]].forEach(([t,bg,c],j)=>{txt({txt:t,x:130+j*300,y:358,w:270,h:76,fs:30,b:1,color:c,bg,r:38,al:'c',va:1,lh:1.2})});
 [[130,470,820,340],[130,830,400,330],[550,830,400,330]].forEach(([x,y,w,h],j)=>txt({txt:'🖼',x,y,w,h,fs:70,al:'c',va:1,bg:mix(p,'#ffffff',.84),r:30,lh:1,color:p,op:.9}));
 txt({key:'x_ds',u:1,txt:'সেৱাৰ বিৱৰণ ইয়াত লিখক…',x:130,y:1180,w:820,h:50,fs:26,color:'#2b2f38',lh:1.3,fit:1})}],
['Free guide','Promo',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#f5f1ea'});
 txt({txt:'GRAB THE',x:60,y:70,w:960,h:130,fs:110,b:1,color:'#111827',al:'c',va:1,lh:1.1,ff:'Bebas Neue'});txt({key:'x_ti',u:1,txt:'FREE GUIDE',x:60,y:190,w:960,h:170,fs:150,b:1,color:p,al:'c',va:1,lh:1.1,ff:'Bebas Neue'});
 txt({key:'x_su',u:1,txt:'আপোনাৰ উপশিৰোনাম ইয়াত',x:100,y:370,w:880,h:60,fs:34,color:'#374151',al:'c',ff:'Playfair Display',it:1});
 rect({x:230,y:470,w:620,h:640,r:24,bg:'#111827',rot:-4,sd:1});rect({x:250,y:490,w:580,h:600,r:14,bg:mix(p,'#ffffff',.75),rot:-4});txt({txt:'🖼',x:250,y:490,w:580,h:600,fs:100,al:'c',va:1,rot:-4,lh:1,op:.6});
 txt({txt:'FREE',x:760,y:430,w:200,h:200,r:'50%',bg:p,bg2:d,color:'#ffffff',fs:62,b:1,al:'c',va:1,rot:12,ff:'Bebas Neue',sd:1,lh:1});HD(txt)}],
['Simple guide cover','Guide',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#1c1917',bg2:mix(d,'#1c1917',.55)});txt({txt:'🖼  ইয়াত ফটো দিয়ক',x:0,y:0,w:1080,h:1350,fs:50,color:'#ffffff',al:'c',va:1,op:.15});
 txt({txt:'ৰাশিফল',x:70,y:70,w:400,h:40,fs:24,b:1,color:'#d6d3d1',ls:6,lh:1.2,up:1});txt({txt:'{{week}}',x:610,y:70,w:400,h:40,fs:24,b:1,color:'#d6d3d1',al:'r',lh:1.2});
 txt({key:'x_a',u:1,txt:'A Simple',x:70,y:840,w:940,h:130,fs:110,color:'#ffffff',lh:1.1,ff:'Montserrat'});txt({key:'x_b',u:1,txt:'Weekend Guide',x:70,y:960,w:940,h:130,fs:110,b:1,color:'#ffffff',lh:1.1,ff:'Montserrat',fit:1});
 rect({x:70,y:1110,w:120,h:6,r:3,bg:T.a});txt({key:'x_c',u:1,txt:'আপোনাৰ উপশিৰোনাম ইয়াত',x:70,y:1140,w:940,h:60,fs:32,color:'#e7e5e4',lh:1.3})}],
['Moon & tithi','Astro',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#0c1033',bg2:mix(d,'#0c1033',.5)});[[100,130,36],[900,100,28],[160,1120,30],[900,1120,40]].forEach(([x,y,f])=>star(txt,x,y,f,T.g));
 txt({txt:'আজিৰ চন্দ্ৰ',x:60,y:60,w:960,h:110,fs:76,b:1,color:'#ffffff',al:'c',va:1,lh:1.2});txt({key:'x_week',txt:'{{week}}',x:290,y:180,w:500,h:50,fs:28,b:1,color:T.g,al:'c'});
 rect({x:290,y:270,w:500,h:500,r:'50%',bg:T.g,op:.18});gx('3D Moon',340,320,400,'#ffd54a');
 [['তিথি','পূৰ্ণিমা'],['নক্ষত্ৰ','ৰোহিণী'],['ৰাশি','বৃষ']].forEach(([h,v],j)=>{const y=830+j*130;rect({x:120,y,w:840,h:110,r:30,bg:'#ffffff',op:.1});txt({txt:h,x:150,y,w:300,h:110,fs:36,b:1,color:T.g,va:1});txt({key:'x_m'+j,u:1,txt:v,x:460,y,w:470,h:110,fs:42,b:1,color:'#ffffff',al:'r',va:1})})}],
['Lucky number','Astro',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:mix(p,'#ffffff',.9)});rect({x:140,y:150,w:800,h:800,r:'50%',bg:p,bg2:d});rect({x:190,y:200,w:700,h:700,r:'50%',bw:4,bc:'#ffffff',op:.6});
 txt({key:'x_num',u:1,txt:'৭',x:240,y:240,w:600,h:620,fs:420,b:1,color:'#ffffff',al:'c',va:1,lh:1,fit:1});gx('3D Sparkles',720,110,200,T.a);gx('3D Star',70,720,160,'#ffb800');
 txt({key:'x_t',u:1,txt:'আজিৰ শুভ সংখ্যা',x:60,y:990,w:960,h:100,fs:66,b:1,color:d,al:'c',va:1});txt({key:'x_d',u:1,txt:'সংখ্যাৰ অৰ্থ ইয়াত লিখক…',x:120,y:1100,w:840,h:130,fs:32,color:'#2b2f38',al:'c',lh:1.5,fit:1});HD(txt)}],
['Daily mantra','Astro',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#fdf6e7',bg2:mix(p,'#fdf6e7',.8)});gx('Mandala',140,150,800,p);gx('Yantra',290,300,500,p);
 txt({txt:'আজিৰ মন্ত্ৰ',x:60,y:50,w:960,h:100,fs:64,b:1,color:d,al:'c',va:1});
 rect({x:70,y:900,w:940,h:310,r:40,bg:'#ffffff',bw:3,bc:mix(p,'#ffffff',.5),sd:1});txt({key:'x_mt',u:1,txt:'ওঁ নমঃ শিৱায়',x:100,y:920,w:880,h:130,fs:70,b:1,color:p,al:'c',va:1,fit:1});txt({key:'x_mm',u:1,txt:'অৰ্থ ইয়াত লিখক…',x:110,y:1060,w:860,h:130,fs:30,color:'#2b2f38',al:'c',lh:1.5,fit:1});HD(txt)}],
['Book consultation','Promo',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:p,bg2:d});rect({x:-200,y:900,w:700,h:700,r:'50%',bg:'#ffffff',op:.08});
 rect({x:60,y:80,w:420,h:420,r:'50%',bg:'#ffffff',bw:10,bc:T.g});txt({txt:'🖼',x:60,y:80,w:420,h:420,fs:100,al:'c',va:1,lh:1,color:p,op:.5});
 txt({key:'x_nm',u:1,txt:'আপোনাৰ নাম',x:520,y:130,w:500,h:110,fs:60,b:1,color:'#ffffff',va:1,lh:1.2,fit:1});txt({key:'x_rl',u:1,txt:'জ্যোতিষ · টাৰো · সংখ্যাতত্ত্ব',x:520,y:250,w:500,h:110,fs:30,color:T.g,lh:1.4,fit:1});gx('Sparkles',880,360,130,T.g);
 ['প্ৰেম আৰু সম্পৰ্ক','কৰ্মজীৱন আৰু ধন','শিক্ষা আৰু স্বাস্থ্য'].forEach((t,j)=>{const y=560+j*150;rect({x:60,y,w:960,h:120,r:60,bg:'#ffffff',op:.14});gx('3D Check',80,y+16,88);txt({key:'x_s'+j,u:1,txt:t,x:190,y,w:800,h:120,fs:44,b:1,color:'#ffffff',va:1,fit:1})});
 txt({txt:'বুক কৰক · হোৱাটছএপ {{phone}}',x:100,y:1060,w:880,h:120,fs:44,b:1,color:d,bg:T.g,r:60,al:'c',va:1,lh:1.2,fit:1,sd:1})}],
['Do & Don\'t','Guide',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:mix(p,'#ffffff',.92)});txt({key:'x_ti',u:1,txt:'আজি কি কৰিব · কি নকৰিব',x:60,y:60,w:960,h:130,fs:60,b:1,color:d,al:'c',va:1,fit:1});
 [['কৰিব','#2fbf71',60,'3D Check'],['নকৰিব','#e0272f',550,'3D Heart']].forEach(([h,c,x,g],j)=>{rect({x,y:220,w:470,h:980,r:40,bg:'#ffffff',bw:4,bc:c,sd:1});rect({x,y:220,w:470,h:110,r:'40px 40px 0 0',bg:c});txt({txt:h,x,y:220,w:470,h:110,fs:56,b:1,color:'#ffffff',al:'c',va:1});
  [0,1,2].forEach(k=>{const y=360+k*270;txt({txt:j?'✕':'✓',x:x+20,y:y+10,w:70,h:70,r:'50%',bg:c,fs:40,b:1,color:'#ffffff',al:'c',va:1,lh:1});txt({key:(j?'n':'d')+k,u:1,txt:'ইয়াত লিখক…',x:x+104,y,w:350,h:250,fs:30,color:'#2b2f38',lh:1.5,fit:1})})});HD(txt)}],
['This or that','Engage',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:p});rect({y:0,w:1080,h:675,bg:p,bg2:d});rect({y:675,w:1080,h:675,bg:'#ffffff',bg2:mix(p,'#ffffff',.8)});
 txt({key:'x_a',u:1,txt:'বিকল্প ক',x:80,y:150,w:920,h:380,fs:130,b:1,color:'#ffffff',al:'c',va:1,fit:1});txt({key:'x_b',u:1,txt:'বিকল্প খ',x:80,y:820,w:920,h:380,fs:130,b:1,color:d,al:'c',va:1,fit:1});
 txt({txt:'VS',x:400,y:555,w:280,h:240,r:'50%',bg:T.g,color:d,fs:110,b:1,al:'c',va:1,lh:1,ff:'Bebas Neue',sd:1,bw:10,bc:'#ffffff'});}],
['Love match','Horoscope',(T,rect,txt,gx,X)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#ffe4ec',bg2:'#ffc2d6'});[[110,150,36],[920,220,30],[130,1120,28],[930,1050,40]].forEach(([x,y,f])=>star(txt,x,y,f,'#e0275c'));
 txt({txt:'প্ৰেমৰ মিল',x:60,y:60,w:960,h:130,fs:92,b:1,color:'#9d174d',al:'c',va:1});
 [[90,'♈',T.p],[630,'♎','#e0275c']].forEach(([x,g,c],j)=>{X.push(E({t:'art',key:'x_art'+j,u:1,ic:1,x,y:260,w:360,h:360,c1:mix(c,'#ffffff',.4),c2:c,gc:'#ffffff',gl:g}))});
 gx('3D Heart',420,340,240);txt({key:'x_pc',u:1,txt:'৮৫%',x:290,y:700,w:500,h:240,fs:200,b:1,color:'#e0275c',al:'c',va:1,lh:1,fit:1});
 txt({key:'x_ds',u:1,txt:'দুয়োৰে সম্পৰ্কৰ বিষয়ে ইয়াত লিখক…',x:100,y:960,w:880,h:230,fs:36,color:'#831843',al:'c',lh:1.5,fit:1});HD(txt)}],
['Announcement','Promo',(T,rect,txt,gx)=>{const p=T.p,d=T.d;rect({key:'bg',w:1080,h:1350,bg:'#fff7e0',bg2:'#ffe28a'});gx('3D Megaphone',640,90,340);gx('3D Sparkles',60,80,220);gx('Squiggle',90,1120,300,p);
 txt({key:'x_ti',u:1,txt:'নতুন ঘোষণা!',x:60,y:470,w:960,h:210,fs:150,b:1,color:d,al:'c',va:1,fit:1,ol:1});txt({key:'x_su',u:1,txt:'আপোনাৰ বাতৰি ইয়াত লিখক…',x:100,y:710,w:880,h:260,fs:50,color:'#3b2f0b',al:'c',lh:1.45,fit:1});
 txt({txt:'বিতং জানিবলৈ {{phone}}',x:140,y:1030,w:800,h:110,fs:44,b:1,color:'#ffffff',bg:p,bg2:d,r:55,al:'c',va:1,lh:1.2,fit:1,sd:1});HD(txt)}]
];
})();
