/* Original illustrated zodiac badges (line-art style). window.ICON(el) -> svg string */
window.ICON=function(el){
 const Z='♈♉♊♋♌♍♎♏♐♑♒♓',k=Math.max(0,Z.indexOf(String(el.gl||'')[0]));
 const ic=(S,A,B)=>{const
 P=(d,o={})=>`<path d="${d}" fill="${o.f||'none'}" stroke="${o.s||S}" stroke-width="${o.w||4}" stroke-linecap="round" stroke-linejoin="round"/>`,
 C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f||'#fff'}" stroke="${S}" stroke-width="3.5"/>`,
 D=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.5" fill="${S}"/>`,
 M=s=>s+`<g transform="translate(240 0) scale(-1 1)">${s}</g>`;
 const fish=`<g transform="rotate(-18 120 96)">${P('M76 96Q108 66 140 96Q108 126 76 96Z',{f:B})}${P('M140 96l24-17v34z',{f:A})}${D(92,92)}</g>`;
 const I=[
  M(P('M96 96C62 62 34 92 48 120C60 142 90 132 84 112C80 100 66 102 68 114',{s:A,w:7}))+P('M92 98Q120 88 148 98L138 148Q120 172 102 148Z',{f:'#fff'})+P('M120 100l7 12-7 12-7-12z',{f:B})+D(108,128)+D(132,128)+P('M113 152h14'),
  M(P('M92 92C62 96 42 80 46 54C60 72 76 76 96 80Z',{f:A}))+P('M90 92Q120 80 150 92L142 142Q120 176 98 142Z',{f:'#fff'})+M(P('M92 100L72 110'))+D(106,116)+D(134,116)+`<circle cx="120" cy="152" r="9" fill="none" stroke="${A}" stroke-width="5"/>`,
  M(P('M96 96C86 66 112 56 124 74C134 92 124 132 100 150C98 130 84 126 96 96Z',{f:B})+C(104,104,20)+D(98,102)+P('M96 114q6 5 12 0')),
  `<ellipse cx="120" cy="130" rx="34" ry="26" fill="${A}" stroke="${S}" stroke-width="4"/>`+M(P('M94 120Q60 116 58 84Q74 94 78 78Q96 86 92 106',{f:'#fff'})+P('M96 140L70 154M100 148L80 172'))+P('M110 104v-12M130 104v-12')+C(110,90,4)+C(130,90,4),
  Array.from({length:14},(_,j)=>C(+(120+54*Math.cos(j*Math.PI/7)).toFixed(1),+(120+54*Math.sin(j*Math.PI/7)).toFixed(1),15,A)).join('')+C(120,120,38)+P('M108 126h24l-12 13z',{f:S})+D(106,112)+D(134,112)+P('M120 139v8M106 150q14 9 28 0'),
  `<ellipse cx="120" cy="112" rx="46" ry="54" fill="${B}" stroke="${S}" stroke-width="4"/><ellipse cx="120" cy="120" rx="28" ry="37" fill="#fff" stroke="${S}" stroke-width="4"/>`+P('M92 106Q120 70 148 106Q120 90 92 106Z',{f:B})+D(108,122)+D(132,122)+P('M110 142q10 8 20 0',{s:A,w:5}),
  P('M56 92h128M120 66v98M94 166h52')+C(120,60,7,A)+M(P('M64 92L48 134M64 92L80 134')+P('M44 134Q64 158 84 134Z',{f:A})),
  P('M120 164C62 164 58 84 104 70C128 64 150 78 144 98',{s:B,w:9})+P('M144 98l-9 15 19-5z',{f:A})+`<ellipse cx="122" cy="166" rx="22" ry="12" fill="${B}" stroke="${S}" stroke-width="4"/>`+M(P('M102 172Q76 178 68 150Q86 158 90 146Q102 156 100 170Z',{f:'#fff'})),
  P('M72 58Q158 120 72 182',{s:B,w:7})+P('M72 58V182',{w:3})+P('M84 156L178 62')+P('M178 62l-28 6 22 22z',{f:A})+P('M84 156l-3 22M84 156l-22-3M94 146l-3 18M94 146l-18-3'),
  M(P('M98 96C70 94 62 62 82 44C82 64 96 74 106 84Z',{f:A}))+P('M98 94Q120 86 142 94L132 140Q120 160 108 140Z',{f:'#fff'})+M(P('M98 102L72 114L98 118Z',{f:B}))+P('M120 156l-7 22h14z',{f:'#fff'})+D(110,116)+D(130,116),
  P('M92 78h56l8 24Q164 148 120 168Q76 148 84 102Z',{f:B})+P('M88 78h64',{w:6})+P('M86 118l11 8 11-8 11 8 11-8 11 8 11-8',{s:'#fff'})+P('M156 100Q186 104 176 130',{s:A,w:6}),
  fish+`<g transform="rotate(180 120 120)">${fish}</g>`
 ];
 return I[k]};
 const sp=[[44,76],[196,70],[58,186],[190,176],[120,30],[120,212]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.4" fill="#2a2a33" opacity=".45"/>`).join('');
 const st=+el.ic||1,c1=el.c1||'#e07a3f',c2=el.c2||'#3a8f8a',H=`<svg viewBox="0 0 240 240" width="${el.w}" height="${el.h}">`;
 if(st===2){const bg=mix(c1,c2,.45),sh=mix(c1,c2,.85),id='cp'+el.id;let s='';for(let q=16;q>=1;q--)s+=`<g transform="translate(${q*3} ${q*3})">${ic(sh,sh,sh).replace(/#fff/g,sh)}</g>`;
  return H+`<defs><clipPath id="${id}"><circle cx="120" cy="120" r="116"/></clipPath></defs><circle cx="120" cy="120" r="116" fill="${bg}"/><g clip-path="url(#${id})">${s}</g>${ic(bg,'#fff','#fff')}</svg>`}
 if(st===3)return H+`<circle cx="120" cy="120" r="116" fill="#fff"/><circle cx="112" cy="128" r="86" fill="#ffd400"/>${sp}${ic('#16407e','#4aa3e0','#9fd2f5')}</svg>`;
 return H+`<circle cx="120" cy="120" r="116" fill="#fff" stroke="#2a2a33" stroke-width="3"/><circle cx="120" cy="120" r="98" fill="#e8e0d2"/>${sp}${ic('#2a2a33',c1,c2)}</svg>`};
