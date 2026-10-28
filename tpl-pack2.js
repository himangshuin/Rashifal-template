/* Template pack 2 — original layouts inspired by popular Instagram post styles (photo placeholders = 🖼 boxes, replace with your images) */
(()=>{
const HD=txt=>txt({key:'hd',txt:'{{handle}}',x:110,y:1262,w:860,h:50,fs:26,b:1,al:'c',lh:1.2});
const ph=(txt,x,y,w,h,o={})=>txt({txt:'🖼',x,y,w,h,fs:Math.round(Math.min(w,h)*.26),al:'c',va:1,lh:1,color:'#9aa3b2',bg:'#e4e0da',r:16,...o});
const sp=(txt,x,y,f,c,o=.7)=>txt({txt:'✦',x,y,w:70,h:70,fs:f,color:c,al:'c',lh:1.2,op:o});
window.TPX.push(
['Dark showcase','Promo',(T,rect,txt,gx)=>{const G='#c9a27a';rect({key:'bg',w:1080,h:1350,bg:'#0f1b2d',bg2:'#1d2c47'});rect({x:330,y:90,w:900,h:900,r:'50%',bw:3,bc:G,op:.45});
 [[640,120,320],[760,500,300],[620,860,320]].forEach(([x,y,s])=>ph(txt,x,y,s,s,{r:'50%',bg:'#e9e2d8',bw:6,bc:'#ffffff'}));
 txt({key:'x_t',u:1,txt:'বিশেষ\nছেল',x:70,y:140,w:520,h:300,fs:110,color:'#f3e9dc',lh:1.1,ff:'Baloo Da 2',b:1,fit:1});txt({key:'x_s',u:1,txt:'সীমিত সময়ৰ বাবে ছাড়',x:70,y:470,w:480,h:90,fs:32,color:'#cfc3b4',lh:1.4});
 txt({txt:'এতিয়াই বুক কৰক',x:70,y:600,w:320,h:80,fs:30,b:1,color:'#0f1b2d',bg:G,r:40,al:'c',va:1,lh:1.2});gx('Sparkles',380,120,140,G);gx('Sparkles',70,900,110,G);
 txt({txt:'{{phone}}\n{{handle}}',x:70,y:1120,w:500,h:110,fs:28,color:'#cfc3b4',lh:1.6})}],
['Mood board','Guide',(T,rect,txt,gx)=>{const d='#3b3228';rect({key:'bg',w:1080,h:1350,bg:'#efe8de'});
 txt({txt:'WEEKLY',x:60,y:60,w:420,h:80,fs:64,b:1,color:d,ff:'Montserrat',lh:1.2});txt({key:'x_t',u:1,txt:'Mood Board',x:60,y:130,w:380,h:110,fs:60,color:d,ff:'Playfair Display',lh:1.2,fit:1});
 [T.p,T.d,mix(T.p,'#ffffff',.6),mix(T.a,'#ffffff',.3)].forEach((c,i)=>rect({x:60,y:300+i*74,w:360,h:56,bg:c}));
 txt({key:'x_d',u:1,txt:'এই সপ্তাহৰ ভাইব আৰু ৰং ইয়াত লিখক…',x:60,y:620,w:360,h:240,fs:26,color:d,lh:1.5,fit:1});
 ph(txt,460,60,300,480,{bg:'#d8cfc2'});ph(txt,780,60,250,320,{bg:'#cdbfae'});ph(txt,780,400,250,420,{bg:'#e2d8ca'});ph(txt,460,560,300,260,{bg:'#cdbfae'});
 ph(txt,60,880,330,330,{bg:'#d8cfc2'});ph(txt,410,880,330,330,{bg:'#e2d8ca'});ph(txt,760,860,270,350,{bg:'#cdbfae'});HD(txt)}],
['Bold doodle title','Promo',(T,rect,txt,gx)=>{const p=T.p;rect({key:'bg',w:1080,h:1350,bg:'#f6ecdc'});
 txt({key:'x_t',u:1,txt:'আজিৰ\nৰহস্য',x:60,y:60,w:960,h:460,fs:200,b:1,color:p,lh:1,ff:'Baloo Da 2',fit:1,al:'c'});
 ph(txt,330,540,420,500,{r:36,bg:'#ead7bd',bw:8,bc:'#ffffff',rot:3});
 [['টাৰো',60,640,-12],['প্ৰেম',720,600,10],['কেৰিয়াৰ',60,880,8],['স্বাস্থ্য',730,860,-9]].forEach(([t,x,y,r])=>txt({txt:t,x,y,w:290,h:84,fs:34,b:1,color:p,al:'c',va:1,bw:4,bc:p,r:42,rot:r,lh:1.2}));
 gx('Doodle star',880,1010,120,'#111827');gx('Doodle heart',90,1060,130,p);gx('Spiral',860,170,130,'#111827');
 txt({key:'x_s',u:1,txt:'বিশেষ পৰামৰ্শ · ২০২৬',x:60,y:1180,w:960,h:60,fs:34,b:1,color:'#3b2f23',al:'c'});HD(txt)}],
['Happy birthday','Festival',(T,rect,txt,gx)=>{const d='#6b4a3a';rect({key:'bg',w:1080,h:1350,bg:'#f1e8de'});rect({x:-160,y:-120,w:520,h:520,r:'50%',bg:T.p,op:.3});rect({x:760,y:1000,w:460,h:460,r:'50%',bg:T.p,op:.3});
 txt({txt:'Happy',x:70,y:150,w:460,h:140,fs:110,color:d,ff:'Dancing Script',lh:1.1});txt({key:'x_t',u:1,txt:'Birthday',x:70,y:270,w:480,h:170,fs:120,color:d,ff:'Dancing Script',lh:1.1,fit:1});
 gx('Doodle heart',130,520,110,d);txt({key:'x_m',u:1,txt:'আপোনাৰ দিনটো সুখ আৰু আশীৰ্বাদেৰে ভৰি পৰক।',x:70,y:680,w:450,h:260,fs:32,color:d,lh:1.6,fit:1});
 ph(txt,610,170,390,480,{bw:14,bc:'#ffffff',rot:6,sd:1,r:6});ph(txt,420,720,420,480,{bw:14,bc:'#ffffff',rot:-5,sd:1,r:6});
 gx('Doodle heart',800,860,150,d);txt({txt:'{{handle}}',x:70,y:1250,w:500,h:50,fs:28,color:d,b:1})}],
['Search bar post','Engage',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#d6d6d6',bg2:'#8f8f8f'});
 txt({key:'x_t',u:1,txt:'যেতিয়া আপোনাৰ প্ৰশ্ন ইণ্টাৰনেটত এনে হয়:',x:70,y:90,w:940,h:300,fs:64,b:1,color:'#1f1f1f',lh:1.25,fit:1});
 rect({x:70,y:440,w:940,h:96,r:12,bg:'#ffffff',bw:3,bc:'#555555'});txt({key:'x_q',u:1,txt:'🔍  এই বছৰ মোৰ বিয়া হ\'ব নেকি?',x:100,y:440,w:880,h:96,fs:36,color:'#333333',va:1});
 gx('3D Arrow',150,570,260,'#222222');txt({key:'x_a',u:1,txt:'উত্তৰ জানিবলৈ\nজ্যোতিষীৰ ওচৰলৈ আহক',x:470,y:610,w:540,h:200,fs:42,b:1,color:'#1f1f1f',lh:1.3,fit:1});
 ph(txt,70,860,420,380,{bg:'#bdbdbd',r:30});txt({txt:'নিঃসংকোচে সোধক!',x:520,y:1000,w:490,h:120,fs:44,b:1,color:'#222222',bg:'#ffffff',r:24,al:'c',va:1,lh:1.2,rot:-3,sd:1})}],
['Sun quote','Quote',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#f7f0e4'});rect({x:430,y:90,w:760,h:760,r:'50%',bg:'#ffc233',bg2:'#ff8a1f'});
 gx('3D Lotus',620,260,240,'#1c1410','#1c1410');txt({txt:'{{handle}}',x:70,y:70,w:500,h:50,fs:28,b:1,color:'#1c1410',ff:'Poppins'});
 txt({key:'x_q',u:1,txt:'যেতিয়া উশাহ স্থিৰ হয়, মন স্পষ্ট হয়, আৰু ভাগ্য নিজেই বাট দেখুৱায়।',x:70,y:680,w:700,h:470,fs:64,b:1,color:'#1c1410',lh:1.3,ff:'Playfair Display',fit:1});
 txt({txt:'— আজিৰ বাণী',x:70,y:1180,w:500,h:50,fs:30,color:'#4b3f33'})}],
['Bold photo promo','Promo',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#e0561d',bg2:'#b8400f'});
 txt({key:'x_t',u:1,txt:'বিশেষ\nঅফাৰ!',x:60,y:60,w:960,h:420,fs:210,b:1,color:'#ffe3a8',lh:1,ff:'Baloo Da 2',al:'c',fit:1,ts:'Echo'});
 txt({key:'x_s',u:1,txt:'সীমিত সময়ৰ বাবে মাত্ৰ',x:60,y:480,w:960,h:60,fs:34,color:'#ffffff',al:'c',b:1});
 ph(txt,170,570,740,560,{r:'50% 50% 40px 40px',bg:'#f2c28f',bw:10,bc:'#ffffff'});gx('Sparkles',60,560,170,'#ffe3a8');gx('Sparkles',860,980,140,'#ffe3a8');
 txt({txt:'এতিয়াই বুক কৰক',x:60,y:1170,w:360,h:90,fs:34,b:1,color:'#e0561d',bg:'#ffffff',r:45,al:'c',va:1,lh:1.2,sd:1});txt({txt:'{{phone}}',x:460,y:1170,w:560,h:90,fs:36,b:1,color:'#ffffff',va:1,al:'r'})}],
['Save the date','Engage',(T,rect,txt,gx)=>{const p=T.d;rect({key:'bg',w:1080,h:1350,bg:'#fffdf8'});
 txt({key:'x_m',u:1,txt:'অক্টোবৰ ২০২৬',x:60,y:60,w:960,h:100,fs:70,b:1,color:'#222222',al:'c',va:1});
 ['Su','Mo','Tu','We','Th','Fr','Sa'].forEach((w,i)=>txt({txt:w,x:60+i*137,y:190,w:137,h:56,fs:28,b:1,color:'#777777',al:'c',va:1}));
 for(let k=0;k<35;k++){const c=k%7,r=Math.floor(k/7);rect({x:60+c*137,y:250+r*170,w:137,h:170,bw:1,bc:'#d9d4c8'});if(k<31)txt({txt:String(k+1),x:70+c*137,y:258+r*170,w:60,h:50,fs:30,b:1,color:'#333333'})}
 rect({x:340,y:410,w:420,h:330,bg:p,rot:-4,sd:1});txt({txt:'SAVE\nTHE DATE',x:360,y:430,w:380,h:140,fs:70,b:1,color:'#ffffff',lh:1,rot:-4,ff:'Bebas Neue',al:'c',va:1});txt({key:'x_n',u:1,txt:'বিশেষ ঘোষণা আহি আছে…',x:380,y:590,w:300,h:120,fs:30,color:'#ffe4e4',lh:1.4,rot:-4,al:'c',va:1,fit:1});
 gx('Doodle heart',800,860,170,p);gx('Doodle star',60,1000,140,'#c9a22a');txt({txt:'{{handle}}',x:100,y:1220,w:880,h:50,fs:28,b:1,color:'#333333',al:'c'})}],
['Blue hook','Promo',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#1554c9',bg2:'#0b3a99'});
 txt({txt:'এই ৰহস্য জানক',x:340,y:60,w:400,h:70,fs:30,b:1,color:'#1554c9',bg:'#ffd23f',r:35,al:'c',va:1,lh:1.2});
 txt({key:'x_t',u:1,txt:'আপোনাৰ ভাগ্য\nবদলাব পাৰে',x:60,y:170,w:960,h:420,fs:130,b:1,color:'#ffffff',lh:1.1,al:'c',fit:1,ol:1});
 txt({key:'x_s',u:1,txt:'ছিষ্টেমক হতবাক কৰক · সঠিক পথ বাছক',x:60,y:600,w:960,h:60,fs:32,color:'#cfe0ff',al:'c',b:1});
 rect({x:210,y:700,w:660,h:660,r:'50%',bg:'#ffffff'});ph(txt,250,730,580,620,{r:'50% 50% 0 0',bg:'#dbe6fb'});gx('3D Sparkles',60,720,200,'#ffd23f');gx('3D Star',830,770,170,'#ffd23f')}],
['Photo collage','Quote',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#f8e7e2',bg2:'#fbf3ea'});
 ph(txt,120,90,840,700,{r:24,bg:'#ecd2cb',bw:12,bc:'#ffffff',sd:1});
 ph(txt,70,640,360,420,{r:10,bg:'#e8cfc8',bw:12,bc:'#ffffff',rot:-5,sd:1});ph(txt,380,700,340,420,{r:10,bg:'#e3c6be',bw:12,bc:'#ffffff',rot:3,sd:1});ph(txt,680,620,340,420,{r:10,bg:'#e8cfc8',bw:12,bc:'#ffffff',rot:-3,sd:1});
 txt({key:'x_t',u:1,txt:'আপোনাৰ সুন্দৰ মুহূৰ্ত',x:60,y:1130,w:960,h:100,fs:60,b:1,color:'#7a4a3f',al:'c',va:1,ff:'Playfair Display',fit:1});HD(txt)}],
['Event launch','Promo',(T,rect,txt,gx)=>{const n='#14284b',o='#f08a3c';rect({key:'bg',w:1080,h:1350,bg:'#fbf7ef'});
 txt({txt:'{{handle}}',x:60,y:60,w:500,h:40,fs:24,color:n,b:1});txt({txt:'● ● ● ● ●',x:700,y:60,w:320,h:40,fs:22,color:o,al:'r'});
 txt({key:'x_t',u:1,txt:'নতুন কোৰ্চ\nআৰম্ভ',x:60,y:140,w:560,h:300,fs:100,b:1,color:n,lh:1.1,fit:1,ff:'Baloo Da 2'});txt({key:'x_s',u:1,txt:'জ্যোতিষ শিকক সহজ ভাষাত',x:60,y:460,w:480,h:60,fs:30,b:1,color:n});
 ph(txt,600,130,420,600,{r:'50%',bg:'#dfe6ef',bw:10,bc:o});
 txt({key:'x_d',u:1,txt:'• সম্পূৰ্ণ প্ৰশিক্ষণ\n• ঘৰতে বহি শিকক\n• প্ৰমাণপত্ৰ',x:60,y:600,w:520,h:240,fs:36,color:'#2b3550',lh:1.7,fit:1});
 txt({txt:'ইনৰোল কৰক',x:60,y:930,w:340,h:90,fs:34,b:1,color:'#ffffff',bg:o,r:45,al:'c',va:1,lh:1.2,sd:1});
 txt({key:'x_dt',u:1,txt:'আৰম্ভ\n১৫ নৱেম্বৰ',x:650,y:900,w:370,h:150,fs:40,b:1,color:'#ffffff',bg:o,r:16,al:'c',va:1,lh:1.3,fit:1});txt({txt:'{{phone}}',x:60,y:1180,w:960,h:50,fs:30,color:n,b:1})}],
['Auspicious timings','Astro',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#1c3f8f',bg2:'#0e6f73'});
 txt({txt:'Auspicious',x:60,y:60,w:960,h:130,fs:110,color:'#ffffff',ff:'Dancing Script',al:'c',lh:1.1});txt({key:'x_t',u:1,txt:'শুভ সময়',x:60,y:190,w:960,h:140,fs:110,b:1,color:'#ffffff',al:'c',va:1,fit:1,ts:'Neon'});
 gx('Sparkles',880,70,150,'#ffffff');gx('Sparkles',50,260,100,'#ffffff');
 [['06:30 AM','ব্ৰহ্ম মুহূৰ্ত'],['09:15 AM','অভিজিৎ মুহূৰ্ত'],['12:00 PM','শুভ চৌঘড়ীয়া'],['04:45 PM','গোধূলি লগ্ন']].forEach(([t,d],i)=>{const y=420+i*195;
  txt({txt:t,x:70,y,w:300,h:120,fs:40,b:1,color:'#1c3f8f',al:'c',va:1,r:14,bg:'#ffffff',lh:1.2});
  txt({key:'x_r'+i,u:1,txt:d,x:390,y,w:620,h:120,fs:38,color:'#ffffff',va:1,bg:'#ffffff22',r:14,lh:1.3})});
 txt({txt:'{{handle}}',x:100,y:1250,w:880,h:50,fs:26,b:1,color:'#ffffff',al:'c'})}],
['Maroon services','Promo',(T,rect,txt,gx)=>{const g='#e5c07b';rect({key:'bg',w:1080,h:1350,bg:'#4a0d12',bg2:'#26070a'});gx('Mandala',-220,-160,780,'#6a2a2e');
 txt({txt:'প্ৰফেছনেল',x:60,y:90,w:560,h:80,fs:56,b:1,color:g,ff:'Noto Serif Bengali'});txt({key:'x_t',u:1,txt:'টাৰো ৰীডাৰ',x:60,y:170,w:620,h:200,fs:130,b:1,color:'#ff4d4d',lh:1.1,fit:1,ff:'Baloo Da 2'});
 ph(txt,640,80,380,540,{r:'50%',bg:'#6b1a20',bw:6,bc:g,color:'#c98'});txt({txt:'আজিয়ে\nবুক কৰক',x:600,y:500,w:180,h:180,fs:26,b:1,color:'#ffffff',bg:'#e0272f',r:'50%',al:'c',va:1,lh:1.2,rot:-8,sd:1});
 [['০১','প্ৰেম আৰু বিবাহ'],['০২','কেৰিয়াৰ আৰু ধন'],['০৩','স্বাস্থ্য আৰু শিক্ষা']].forEach(([n,t],i)=>{const y=720+i*140;txt({txt:n,x:60,y,w:140,h:100,fs:60,color:g,b:1,va:1});txt({key:'x_s'+i,u:1,txt:t,x:210,y,w:700,h:100,fs:42,color:'#fbe9d0',va:1});rect({x:60,y:y+112,w:960,h:2,bg:g,op:.4})});
 rect({x:0,y:1210,w:1080,h:140,bg:'#f4dcc0'});txt({txt:'{{phone}} · {{handle}}',x:60,y:1210,w:960,h:140,fs:38,b:1,color:'#4a0d12',al:'c',va:1})}],
['Scrapbook','Festival',(T,rect,txt,gx)=>{const d='#4a403a';rect({key:'bg',w:1080,h:1350,bg:'#cbc5bd',bg2:'#e6e1d9'});rect({x:0,y:-10,w:1080,h:70,bg:'#f3f0ea',r:'0 0 40px 60px'});
 txt({txt:'HAPPY',x:60,y:120,w:960,h:100,fs:70,color:d,ff:'Cinzel',ls:12,al:'c',b:1});txt({key:'x_t',u:1,txt:'Birthday',x:60,y:210,w:960,h:170,fs:140,color:d,ff:'Dancing Script',al:'c',fit:1});
 ph(txt,90,420,430,540,{bw:14,bc:'#ffffff',rot:-5,sd:1,r:4});ph(txt,540,480,430,540,{bw:14,bc:'#ffffff',rot:5,sd:1,r:4});
 rect({x:230,y:400,w:170,h:56,bg:'#b89466',op:.85,rot:-8});rect({x:660,y:460,w:170,h:56,bg:'#b89466',op:.85,rot:8});gx('Doodle heart',420,930,140,d);gx('Doodle heart',620,1010,100,d);
 txt({key:'x_m',u:1,txt:'আপোনাৰ জীৱনত আনন্দ আৰু শুভকামনা সদায় থাকক।',x:130,y:1100,w:820,h:130,fs:34,color:d,al:'c',lh:1.5,fit:1})}],
['Gradient quote','Quote',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#ffb347',bg2:'#ff3d5a'});
 txt({txt:'দৈনিক প্ৰেৰণা',x:70,y:70,w:600,h:50,fs:30,color:'#fff4e6',b:1,ff:'Playfair Display'});
 txt({key:'x_q',u:1,txt:'এখোজ এখোজকৈ আগবাঢ়ক। ভাগ্যই আপোনাৰ সৈতে আছে।',x:70,y:360,w:900,h:700,fs:110,color:'#fff4e6',lh:1.2,ff:'Playfair Display',fit:1});HD(txt)}],
['Huge title','Promo',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#ffffff'});
 txt({txt:'20',x:60,y:60,w:200,h:40,fs:26,b:1,color:'#111111',ff:'Montserrat'});txt({key:'x_b',u:1,txt:'আপোনাৰ নাম',x:340,y:60,w:400,h:40,fs:26,b:1,color:'#111111',al:'c'});txt({txt:'26',x:820,y:60,w:200,h:40,fs:26,b:1,color:'#111111',al:'r',ff:'Montserrat'});
 txt({key:'x_t',u:1,txt:'TAROT',x:20,y:120,w:1040,h:520,fs:340,color:'#111111',al:'c',va:1,lh:1,ff:'Bebas Neue',fit:1});
 ph(txt,290,420,500,800,{r:30,bg:'#eceae6',color:'#b9b4aa'});gx('Sparkles',70,560,130,'#111111');gx('Sparkles',840,820,150,'#111111');gx('Sparkles',130,1000,90,'#111111');
 txt({key:'x_s',u:1,txt:'পৰামৰ্শ ৷ ভৱিষ্যদ্বাণী ৷ সমাধান',x:100,y:1250,w:880,h:50,fs:28,b:1,color:'#111111',al:'c'})}],
['Minimal journal','Guide',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#f4efe6'});txt({txt:'{{handle}}',x:70,y:70,w:500,h:40,fs:26,color:'#b3261e',b:1,ff:'Poppins'});
 txt({key:'x_t',u:1,txt:'4 Simple\nJournaling\nIdeas',x:70,y:200,w:940,h:760,fs:190,color:'#b3261e',lh:1.05,ff:'Playfair Display',fit:1,b:1});
 rect({x:70,y:1120,w:940,h:3,bg:'#b3261e',op:.55});txt({key:'x_s',u:1,txt:'আপোনাৰ নাম',x:70,y:1150,w:500,h:50,fs:30,color:'#b3261e',b:1});txt({txt:'Swipe →',x:620,y:1150,w:390,h:50,fs:30,color:'#b3261e',al:'r',b:1})}],
['Folder contents','Guide',(T,rect,txt,gx)=>{rect({key:'bg',w:1080,h:1350,bg:'#e6ebf3',bg2:'#cfd9ea'});
 txt({key:'x_t',u:1,txt:'WHAT\'S INSIDE\nTHIS FOLDER',x:60,y:70,w:960,h:240,fs:100,b:1,color:'#14213d',al:'c',lh:1.05,ff:'Montserrat',fit:1});
 rect({x:200,y:350,w:680,h:300,r:16,bg:'#ffffff',sd:1});[['টাৰো পঢ়া','#cfe3ff'],['ৰাশিফল','#ffffff'],['সংখ্যাতত্ত্ব','#ffffff']].forEach(([t,c],i)=>{rect({x:216,y:366+i*92,w:648,h:80,r:10,bg:c});txt({key:'x_f'+i,u:1,txt:t,x:240,y:366+i*92,w:600,h:80,fs:34,color:'#14213d',va:1})});
 ph(txt,120,720,400,480,{bw:12,bc:'#ffffff',rot:-6,sd:1,r:6,bg:'#d3dbe8'});ph(txt,360,760,400,480,{bw:12,bc:'#ffffff',rot:3,sd:1,r:6,bg:'#c9d3e3'});ph(txt,620,720,360,440,{bw:12,bc:'#ffffff',rot:7,sd:1,r:6,bg:'#d3dbe8'});HD(txt)}]
);})();
