const PDF=(id,n)=>`assets/pdf/${id}/${String(n).padStart(3,'0')}.webp`;
const LIVE=(name,n)=>`assets/live/technopryad/${name}-${String(n).padStart(2,'0')}.webp`;
const CASE_COVERS={
  vedati:'assets/pdf/covers/vedati.webp',
  arca:'assets/pdf/covers/arca.webp',
  luvka:'assets/pdf/covers/luvka.webp',
  eden:PDF('eden',15),
  mahajuga:'assets/pdf/covers/mahajuga.webp',
  techstack:LIVE('poster',1),
  seven:PDF('seven',19),
  type:PDF('raw',25),
  yoshi:PDF('yoshi',12),
  pranna:PDF('pranna',45),
  glasses:'assets/pdf/hues/cover.webp',
  lsp:'assets/live/lsp/readymag-cover.webp'
};
const CASE_STORY={
  vedati:[
    [PDF('vedati',2),PDF('vedati',4),PDF('vedati',5)],
    [6,7,8,9,10,11,12,13,14,15,18,19].map(n=>PDF('vedati-research',n)),
    [PDF('vedati',17),PDF('vedati',36),PDF('vedati',37)],
    [PDF('vedati',10),PDF('vedati',12),PDF('vedati',13),PDF('vedati',14),PDF('vedati',17)],
    [PDF('vedati',36),PDF('vedati',37),PDF('vedati',38),PDF('vedati',40)],
    [PDF('vedati',21),PDF('vedati',22),PDF('vedati',23),PDF('vedati',24),PDF('vedati',25),PDF('vedati',26),PDF('vedati',27),PDF('vedati',29),PDF('vedati',31),PDF('vedati',32)]
  ],
  arca:[
    [PDF('arca',2),PDF('arca',4),PDF('arca',7),PDF('arca',9),PDF('arca',11)],
    [PDF('arca',12),PDF('arca',13),PDF('arca',14),PDF('arca',15),PDF('arca',16)],
    [PDF('arca',26),PDF('arca',27),PDF('arca',28),PDF('arca',30)],
    [PDF('arca',18),PDF('arca',19),PDF('arca',20),PDF('arca',29),PDF('arca',33),PDF('arca',34),PDF('arca',35)],
    [PDF('arca',24),PDF('arca',30),PDF('arca',31),PDF('arca',36),PDF('arca',37),PDF('arca',38),PDF('arca',40),PDF('arca',42)]
  ],
  luvka:[
    [PDF('luvka',1),PDF('luvka',2),PDF('luvka',3)],
    [PDF('luvka',5),PDF('luvka',6),PDF('luvka',7),PDF('luvka',8),PDF('luvka',9),PDF('luvka',10),PDF('luvka',11)],
    [PDF('luvka',14),PDF('luvka',15),PDF('luvka',16),PDF('luvka',17),PDF('luvka',18),PDF('luvka',19)],
    [PDF('luvka',33),PDF('luvka',34),PDF('luvka',35),PDF('luvka',36),PDF('luvka',37),PDF('luvka',38)],
    [PDF('luvka',22),PDF('luvka',23),PDF('luvka',25),PDF('luvka',27),PDF('luvka',29),PDF('luvka',34),PDF('luvka',37),PDF('luvka',38)]
  ],
  eden:[
    [PDF('eden',1),PDF('eden',2),PDF('eden',3),PDF('eden',4),PDF('eden',5),PDF('eden',6)],
    [PDF('eden',7),PDF('eden',8),PDF('eden',9),PDF('eden',10),PDF('eden',11),PDF('eden',12)],
    [PDF('eden',12),PDF('eden',13),PDF('eden',14)],
    [PDF('eden',13),PDF('eden',14),PDF('eden',15),PDF('eden',16),PDF('eden',17)],
    [PDF('eden',13),PDF('eden',14),PDF('eden',15),PDF('eden',16),PDF('eden',17)]
  ],
  mahajuga:[
    [PDF('mahajuga',21),PDF('mahajuga',22),PDF('mahajuga',23),PDF('mahajuga',24)],
    [PDF('mahajuga',25),PDF('mahajuga',26),PDF('mahajuga',27),PDF('mahajuga',28)],
    [PDF('mahajuga',30),PDF('mahajuga',31),PDF('mahajuga',33),PDF('mahajuga',34),PDF('mahajuga',35)],
    [PDF('mahajuga',37),PDF('mahajuga',38),PDF('mahajuga',39),PDF('mahajuga',40),PDF('mahajuga',42),PDF('mahajuga',44),PDF('mahajuga',48)],
    [PDF('mahajuga',49),PDF('mahajuga',50),PDF('mahajuga',51),PDF('mahajuga',52),PDF('mahajuga',53),PDF('mahajuga',54),PDF('mahajuga',55),PDF('mahajuga',56)]
  ],
  techstack:[
    [LIVE('poster',1),LIVE('generator',1),LIVE('multisite',1)],
    [LIVE('poster',1),LIVE('poster',2),LIVE('poster',3),LIVE('poster',4)],
    [LIVE('generator',1),LIVE('generator',2)],
    [LIVE('multisite',1),LIVE('multisite',2),LIVE('process',1),LIVE('process',2)],
    [LIVE('poster',2),LIVE('generator',2),LIVE('process',2)],
    [LIVE('poster',4),LIVE('generator',2),LIVE('multisite',2)]
  ]
};
const PDF_COUNTS={vedati:41,arca:45,luvka:38,eden:17,mahajuga:56,seven:27,raw:31,pranna:49};
function caseGallery(id){
  if(id==='techstack')return [['ВЕБ-ПЛАКАТ','poster',4],['ГЕНЕРАТОР','generator',2],['МНОГОСТРАНИЧНЫЙ САЙТ','multisite',2],['СТРАНИЦА САЙТА','process',2]].flatMap(([group,key,count])=>Array.from({length:count},(_,i)=>({src:LIVE(key,i+1),group,slide:i+1})));
  if(id==='vedati')return [
    ...[6,7,8,9,10,11,12,13,14,15,18,19].map(n=>({src:PDF('vedati-research',n),group:'ИССЛЕДОВАНИЕ: ГИПОТЕЗЫ, ОПРОС И СЦЕНАРИИ',slide:n})),
    ...[0,2,4,5,7,8,10,11,12,13,14,15,16,17,18].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИЯ И ДИЗАЙН-СИСТЕМА',slide:n})),
    ...[21,22,23,24,25,26,27,28,29,30,32,33].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИИ ПРОДВИЖЕНИЯ И НОСИТЕЛЕЙ',slide:n})),
    ...[36,37,38,40].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'БИБЛИОТЕКА И РЕАЛИЗАЦИЯ',slide:n}))
  ];
  if(id==='luvka')return Array.from({length:38},(_,i)=>i+1).filter(n=>n!==13).map(n=>({src:PDF('luvka',n),thumb:`assets/pdf-thumbs/luvka/${String(n).padStart(3,'0')}.webp`,group:n<=11?'КОНЦЕПЦИЯ И ИССЛЕДОВАНИЕ':n<=20?'ДИЗАЙН-СИСТЕМА':n<=31?'НОСИТЕЛИ':'ПРОТОТИП И ИНТЕРФЕЙС',slide:n}));
  if(id==='glasses')return Array.from({length:5},(_,i)=>({src:PDF('hues',i+1),group:'ПРОТОТИП HUES',slide:i+1}));
  if(id==='lsp')return [{src:CASE_COVERS.lsp,group:'РАБОТАЮЩИЙ ЛОНГРИД',slide:1}];
  if(id==='yoshi')return [...Array.from({length:15},(_,i)=>i+1),17].map(n=>({src:PDF('yoshi',n),thumb:`assets/pdf-thumbs/yoshi/${String(n).padStart(3,'0')}.webp`,group:'КАДРЫ И СЦЕНЫ ВИДЕО',slide:n}));
  const source={type:'raw'}[id]||id, count=PDF_COUNTS[source];
  if(count)return Array.from({length:count},(_,i)=>{const n=(source==='vedati'||source==='pranna')?i:i+1;return {src:PDF(source,n),thumb:`assets/pdf-thumbs/${source}/${String(n).padStart(3,'0')}.webp`,group:'МАТЕРИАЛЫ ПРОЕКТА',slide:n}});
  return (GALLERY_MANIFEST[id]||[]).map(item=>({...item,group:'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ'}));
}
