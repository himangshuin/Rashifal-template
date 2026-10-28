/* Template pack 3 — call-to-action posts (follow, WhatsApp booking, save/share, steps, limited slots) */
(()=>{
const Y='#ffc82e',K='#111111',F='Baloo Da 2';
const ph=(txt,x,y,w,h,o={})=>txt({txt:'🖼',x,y,w,h,fs:Math.round(Math.min(w,h)*.26),al:'c',va:1,lh:1,color:'#9aa3b2',bg:'#e4e0da',r:16,...o});
/* phone mockup with an Instagram-like profile screen. x,y,w = position & width (height = 2 x width) */
const phone=(txt,rect,x,y,w,T)=>{const s=w/400,S=v=>Math.round(v*s),R=o=>({...o,x:x+S(o.x),y:y+S(o.y),w:S(o.w),h:S(o.h)}),
 r=o=>rect({...R(o),r:o.r==null?undefined:S(o.r)}),t=o=>txt({...R(o),fs:S(o.fs||16),lh:1.25,color:o.color||K});
 r({x:0,y:0,w:400,h:800,r:56,bg:'#111111',sd:1});r({x:12,y:12,w:376,h:776,r:46,bg:'#ffffff'});r({x:130,y:22,w:140,h:30,r:15,bg:'#111111'});
 t({key:'x_ph',txt:'←   {{handle}}',x:28,y:66,w:340,h:40,fs:19,b:1});
 ph(txt,x+S(28),y+S(118),S(88),S(88),{r:'50%',bg:'#e7dccb',bw:S(4),bc:T.p});
 [['385','posts',130],['211K','followers',218],['1,140','following',306]].forEach(([n,l,px])=>t({txt:n+'\n'+l,x:px,y:128,w:80,h:70,fs:16,b:0,al:'c',va:1}));
 t({key:'x_bio',u:1,txt:'Astrologer & Psychic\nFollow me for daily Astrology and Tarot posts. Book your personal reading.',x:28,y:222,w:344,h:96,fs:14,fit:1});
 t({txt:'Follow',x:28,y:326,w:172,h:42,fs:17,b:1,color:'#ffffff',bg:'#3b82f6',r:8,al:'c',va:1});t({txt:'Message',x:208,y:326,w:112,h:42,fs:17,b:1,bg:'#efefef',r:8,al:'c',va:1});r({x:328,y:326,w:44,h:42,r:8,bg:'#efefef'});
 [['About Me',28],['Weekly',120],['Astrology',212],['Remedy',304]].forEach(([l,px],i)=>{ph(txt,x+S(px),y+S(390),S(64),S(64),{r:'50%',bg:['#e8d9c0','#e9c9c9','#d7c9e8','#c9e4d9'][i],bw:S(3),bc:T.p});t({txt:l,x:px-8,y:458,w:80,h:22,fs:12,al:'c'})});
 r({x:12,y:492,w:376,h:2,bg:'#e3e3e3'});
 [0,1,2].forEach(i=>{ph(txt,x+S(12+i*126),y+S(498),S(124),S(138),{r:0,bg:['#ecd8c0','#d8c9e0','#cfe0d6'][i]});ph(txt,x+S(12+i*126),y+S(640),S(124),S(138),{r:0,bg:['#d8c9e0','#cfe0d6','#ecd8c0'][i]})})};
const icoRow=(txt,rect,gx,x,y)=>['Heart icon','Comment icon','Send icon','Save icon'].forEach((g,i)=>{rect({x:x+i*100,y,w:78,h:78,r:20,bg:K,sd:1});gx(g,x+i*100+17,y+17,44,Y)});
const torn=(rect,gx,X,y,c)=>{gx('Torn paper edge',0,y,1080,c);X[X.length-1].h=46;rect({x:0,y:y+44,w:1080,h:1350-y-44+10,bg:c})};
const sticker=(txt,t,x,y,w,h,fs,rot)=>txt({key:'x_st',u:1,txt:t,x,y,w,h,fs,b:1,color:K,bg:Y,r:12,bw:5,bc:K,al:'c',va:1,lh:1.1,rot,sd:1,ff:F,fit:1});
const waPill=(txt,rect,gx,x,y,w,h,dark)=>{rect({x,y,w,h,r:h/2,bg:dark?K:'#ffffff',bw:3,bc:dark?'#6b6b6b':K,sd:1});gx('WhatsApp icon',x+22,y+Math.round((h-92)/2),92);
 txt({txt:'পৰামৰ্শৰ বাবে',x:x+130,y:y+14,w:w-150,h:30,fs:20,color:dark?'#ffffff':K,lh:1.2});txt({txt:'হোৱাটছএপত মেছেজ কৰক',x:x+130,y:y+46,w:w-150,h:36,fs:21,b:1,color:K,bg:Y,r:18,al:'c',va:1,lh:1.2,fit:1});txt({key:'x_ph2',txt:'{{phone}}',x:x+130,y:y+86,w:w-150,h:50,fs:42,b:1,color:dark?'#ffffff':K,lh:1.1,fit:1})};
const bar=(txt,x,y,w,h,t,c=K,bg=Y)=>txt({txt:t,x,y,w,h,fs:30,b:1,color:c,bg,r:h/2,al:'c',va:1,lh:1.2,bw:3,bc:K,fit:1});

window.TPX.push(
['Follow CTA','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:'#f7ecd8',bg2:'#f0dcb8'});
 txt({txt:'মিচ নকৰিবলৈ!',x:70,y:36,w:250,h:64,fs:30,b:1,color:K,bg:Y,r:8,al:'c',va:1,lh:1.2,bw:3,bc:K,fit:1});gx('3D Bell',325,18,86);gx('Alert ticks',410,18,60,K);
 sticker(txt,'পেজখন',78,120,400,126,84,-3);
 txt({key:'x_f',u:1,txt:'ফলো',x:70,y:260,w:470,h:230,fs:210,b:1,color:K,lh:1,ff:F,fit:1});txt({key:'x_k',u:1,txt:'কৰি ৰাখক',x:90,y:470,w:400,h:80,fs:56,b:1,color:K,lh:1.1,ff:F,fit:1});gx('Brush underline',90,548,320,Y);X[X.length-1].h=24;
 txt({key:'x_d',u:1,txt:'সাপ্তাহিক ৰাশিফল, জ্যোতিষ শাস্ত্ৰ, টেৰ’ কাৰ্ড ৰীডিং আৰু আধ্যাত্মিক জ্ঞানৰ বিশ্বাসী উৎস।',x:60,y:582,w:440,h:110,fs:25,color:'#2a2a2a',lh:1.4,fit:1});
 txt({txt:'আপুনি ইয়াত কি কি পাব?',x:60,y:708,w:410,h:56,fs:29,b:1,color:K,bg:Y,r:28,al:'c',va:1,lh:1.2,bw:3,bc:K,fit:1});
 [['Calendar icon','সাপ্তাহিক ৰাশিফল','প্ৰতি সপ্তাহৰ নিখুঁত ৰাশিফল'],['Zodiac wheel','জ্যোতিষ শাস্ত্ৰ','গ্ৰহ, নক্ষত্ৰৰ গভীৰ জ্ঞান'],['Cards icon','টেৰ’ কাৰ্ড','প্ৰেম, কেৰিয়াৰ আৰু জীৱনৰ বাৰ্তা'],['Lotus icon','প্ৰতিকাৰ আৰু উপায়','সমস্যাৰ সহজ সমাধান']].forEach(([g,t,d],i)=>{const y=782+i*94;
  rect({x:60,y,w:420,h:80,r:16,bg:'#ffffff',bw:3,bc:K,sd:1});rect({x:72,y:y+9,w:62,h:62,r:12,bg:Y,bw:2,bc:K});gx(g,82,y+19,42,K);
  txt({key:'x_t'+i,u:1,txt:t,x:150,y:y+8,w:320,h:36,fs:26,b:1,color:K,lh:1.2,fit:1});txt({key:'x_u'+i,u:1,txt:d,x:150,y:y+44,w:320,h:32,fs:19,color:'#444444',lh:1.2,fit:1})});
 phone(txt,rect,555,205,440,T);icoRow(txt,rect,gx,590,22);gx('Dashed arrow',795,125,170,K);
 torn(rect,gx,X,1190,K);waPill(txt,rect,gx,50,1200,470,138,1);rect({x:545,y:1212,w:3,h:110,bg:'#5a5a5a'});
 gx('3D Megaphone',570,1200,100);txt({txt:'নতুন পোষ্ট মিচ\nনকৰিবলৈ',x:680,y:1204,w:300,h:70,fs:25,b:1,color:'#ffffff',lh:1.2,fit:1});bar(txt,570,1276,400,60,'এতিয়াই ফলো কৰি ৰাখক!');
 rect({x:985,y:1218,w:80,h:80,r:'50%',bg:Y,bw:4,bc:'#ffffff'});gx('Save icon',1006,1236,38,K)}],
['Follow dark','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:'#121212',bg2:'#2a2118'});
 sticker(txt,'আমাক',70,70,320,100,64,-4);txt({key:'x_f',u:1,txt:'FOLLOW',x:50,y:200,w:470,h:200,fs:170,b:1,color:'#ffffff',lh:1,ff:'Bebas Neue',fit:1});
 txt({key:'x_k',u:1,txt:'ফলো কৰক',x:70,y:410,w:440,h:90,fs:66,b:1,color:Y,lh:1.1,ff:F,fit:1});
 ['প্ৰতিদিনৰ ৰাশিফল','টেৰ’ বাৰ্তা','বিশেষ প্ৰতিকাৰ'].forEach((t,i)=>{txt({key:'x_c'+i,u:1,txt:'✓  '+t,x:70,y:560+i*100,w:430,h:76,fs:32,b:1,color:'#ffffff',bg:'#ffffff1f',r:38,va:1,lh:1.2,fit:1})});
 phone(txt,rect,555,120,440,T);icoRow(txt,rect,gx,70,1000);
 rect({x:0,y:1130,w:1080,h:220,bg:Y});txt({txt:'ফলো কৰি ৰাখক · {{handle}}',x:60,y:1150,w:960,h:90,fs:54,b:1,color:K,al:'c',va:1,ff:F,fit:1});txt({txt:'নতুন পোষ্ট মিচ নকৰিবলৈ বেল আইকন টিপক 🔔',x:60,y:1240,w:960,h:60,fs:30,color:K,al:'c',va:1,b:1,fit:1})}],
['WhatsApp booking CTA','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:'#101010',bg2:'#241b12'});
 sticker(txt,'ব্যক্তিগত পৰামৰ্শ',70,70,520,100,56,-2);txt({key:'x_t',u:1,txt:'হোৱাটছএপত\nবুক কৰক',x:60,y:210,w:700,h:420,fs:150,b:1,color:'#ffffff',lh:1.05,ff:F,fit:1});
 gx('WhatsApp icon',770,230,250);gx('Sparkles',880,70,110,Y);
 [['প্ৰেম আৰু বিবাহ'],['কেৰিয়াৰ আৰু ধন'],['স্বাস্থ্য আৰু পৰিয়াল']].forEach(([t],i)=>{const y=670+i*110;rect({x:70,y,w:940,h:90,r:45,bg:'#ffffff',bw:3,bc:Y});rect({x:84,y:y+12,w:66,h:66,r:'50%',bg:Y});txt({txt:'✓',x:84,y:y+12,w:66,h:66,fs:40,b:1,color:K,al:'c',va:1,lh:1});txt({key:'x_b'+i,u:1,txt:t,x:170,y,w:820,h:90,fs:40,b:1,color:K,va:1,lh:1.2,fit:1})});
 torn(rect,gx,X,1040,Y);txt({txt:'এতিয়াই মেছেজ কৰক',x:60,y:1100,w:960,h:70,fs:42,b:1,color:K,al:'c',va:1,ff:F});txt({key:'x_ph2',txt:'{{phone}}',x:60,y:1170,w:960,h:130,fs:110,b:1,color:K,al:'c',va:1,ff:'Bebas Neue',fit:1})}],
['Save & share CTA','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:'#f7ecd8',bg2:'#f0dcb8'});
 txt({txt:'ভাল লাগিলে…',x:70,y:60,w:360,h:64,fs:32,b:1,color:K,bg:Y,r:8,al:'c',va:1,lh:1.2,bw:3,bc:K});
 txt({key:'x_t',u:1,txt:'এই পোষ্টটো\nসংৰক্ষণ কৰক',x:60,y:150,w:960,h:330,fs:130,b:1,color:K,lh:1.05,ff:F,fit:1});gx('Brush underline',60,490,500,Y);X[X.length-1].h=40;
 [['Heart icon','লাইক কৰক','আপোনাৰ সমৰ্থন আমাৰ বাবে বহুত মূল্যৱান'],['Save icon','সংৰক্ষণ কৰক','পিছত পঢ়িবলৈ বা ব্যৱহাৰ কৰিবলৈ'],['Send icon','শ্বেয়াৰ কৰক','বন্ধু আৰু পৰিয়ালক পঠিয়াওক']].forEach(([g,t,d],i)=>{const y=560+i*190;
  rect({x:60,y,w:960,h:160,r:28,bg:'#ffffff',bw:4,bc:K,sd:1});rect({x:84,y:y+24,w:112,h:112,r:24,bg:K});gx(g,y>0?106:0,y+46,68,Y);
  txt({key:'x_a'+i,u:1,txt:t,x:224,y:y+22,w:760,h:70,fs:50,b:1,color:K,lh:1.2,ff:F,fit:1});txt({key:'x_e'+i,u:1,txt:d,x:224,y:y+94,w:760,h:50,fs:28,color:'#444444',lh:1.2,fit:1})});
 torn(rect,gx,X,1170,K);bar(txt,120,1226,840,80,'ফলো কৰক · {{handle}}')}],
['Book in 3 steps','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:'#fdf6e8'});
 sticker(txt,'সহজ পদ্ধতি',70,60,420,100,56,-3);txt({key:'x_t',u:1,txt:'পৰামৰ্শ লোৱাৰ\n৩টা পদক্ষেপ',x:60,y:190,w:960,h:300,fs:110,b:1,color:K,lh:1.05,ff:F,fit:1});
 [['১','মেছেজ কৰক','হোৱাটছএপত আপোনাৰ নাম আৰু জন্ম বিৱৰণ পঠিয়াওক'],['২','সময় বাছক','আপোনাৰ সুবিধামতে ফ’ন বা ভিডিঅ’ কল ঠিক কৰক'],['৩','সমাধান পাওক','বিশদ ৰিডিং আৰু সহজ প্ৰতিকাৰ লওক']].forEach(([n,t,d],i)=>{const y=520+i*200;
  rect({x:70,y,w:940,h:170,r:30,bg:'#ffffff',bw:4,bc:K,sd:1});txt({txt:n,x:94,y:y+25,w:120,h:120,fs:80,b:1,color:K,bg:Y,r:'50%',al:'c',va:1,lh:1,bw:4,bc:K,ff:F});
  txt({key:'x_s'+i,u:1,txt:t,x:240,y:y+20,w:740,h:62,fs:46,b:1,color:K,lh:1.2,ff:F,fit:1});txt({key:'x_d'+i,u:1,txt:d,x:240,y:y+86,w:740,h:70,fs:28,color:'#444444',lh:1.3,fit:1})});
 torn(rect,gx,X,1120,K);waPill(txt,rect,gx,305,1190,470,138,1)}],
['Limited slots','CTA',(T,rect,txt,gx,X)=>{rect({key:'bg',w:1080,h:1350,bg:Y,bg2:'#ffb300'});gx('3D Bell',830,60,170);
 txt({txt:'জৰুৰী ঘোষণা',x:70,y:70,w:380,h:64,fs:32,b:1,color:'#ffffff',bg:K,r:8,al:'c',va:1,lh:1.2});
 txt({key:'x_t',u:1,txt:'মাত্ৰ ৫টা\nছ’ট বাকী!',x:50,y:180,w:960,h:480,fs:200,b:1,color:K,lh:1,ff:F,fit:1});
 txt({key:'x_s',u:1,txt:'এই মাহৰ বিশেষ পৰামৰ্শ শেষ হ’বলৈ আৰু অলপ বাকী',x:70,y:690,w:940,h:80,fs:38,b:1,color:K,lh:1.3,fit:1});
 rect({x:70,y:800,w:940,h:70,r:35,bg:'#ffffff',bw:4,bc:K});rect({x:70,y:800,w:700,h:70,r:35,bg:K});txt({txt:'৭৫% ভৰ্তি',x:70,y:800,w:700,h:70,fs:34,b:1,color:Y,al:'c',va:1,lh:1.2});
 [['📅','শেষ তাৰিখ: ৩০ অক্টোবৰ'],['🎁','প্ৰথম ৫ জনৰ বাবে বিশেষ ছাড়']].forEach(([i,t],k)=>txt({key:'x_i'+k,u:1,txt:i+'  '+t,x:70,y:920+k*100,w:940,h:80,fs:38,b:1,color:K,bg:'#ffffff66',r:40,va:1,lh:1.2,fit:1}));
 torn(rect,gx,X,1150,K);waPill(txt,rect,gx,305,1196,470,138,1)}]
);})();
