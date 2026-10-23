const PDF=(id,n)=>`assets/pdf/${id}/${String(n).padStart(3,'0')}.webp${id==='arca'?'?v=2':''}`;
const LIVE=(name,n)=>`assets/live/technopryad/${name}-${String(n).padStart(2,'0')}.webp`;
const CASE_COVERS={
  vedati:'assets/pdf/covers/vedati.webp',
  arca:'assets/pdf/covers/arca.webp',
  luvka:'assets/pdf/covers/luvka.webp',
  eden:PDF('eden',15),
  trueshkowski:PDF('pranna',17),
  mahajuga:'assets/pdf/covers/mahajuga.webp',
  techstack:'assets/technopryad-cover.png',
  seven:PDF('seven',19),
  type:PDF('raw',25),
  yoshi:PDF('yoshi',12),
  pranna:PDF('pranna',33),
  glasses:'assets/pdf/hues/cover.webp'
};
const CASE_STORY={
  glasses:[
    [PDF('hues',1)],
    [PDF('hues',2),PDF('hues',3)],
    [PDF('hues',4),PDF('hues',5)]
  ],
  yoshi:[
    [PDF('yoshi',1),PDF('yoshi',2)],
    [PDF('yoshi',3),PDF('yoshi',4),PDF('yoshi',12)],
    [PDF('yoshi',5),PDF('yoshi',6),PDF('yoshi',7),PDF('yoshi',8)],
    [PDF('yoshi',9),PDF('yoshi',10),PDF('yoshi',11),PDF('yoshi',14),PDF('yoshi',15)],
    [PDF('yoshi',17)]
  ],
  'eden-ai':[
    EDEN_AI_MEDIA['ИСХОДНЫЙ EDEN'],
    EDEN_AI_MEDIA['ПОИСК ВИЗУАЛЬНОГО ЯЗЫКА'],
    EDEN_AI_MEDIA['НАПИТКИ И ПЕЧАТЬ'],
    EDEN_AI_MEDIA['ПРОСТРАНСТВО'],
    [...EDEN_AI_MEDIA['МЕРЧ'],...EDEN_AI_MEDIA['МЕРЧ / ВАРИАНТЫ']]
  ],
  vedati:[
    [PDF('vedati',2),PDF('vedati',4),PDF('vedati',5)],
    [6,7,8,9,10,11,12,13,14,15,18,19].map(n=>PDF('vedati-research',n)),
    [PDF('vedati',17),PDF('vedati',36),PDF('vedati',37)],
    [PDF('vedati',10),PDF('vedati',12),PDF('vedati',13),PDF('vedati',14),PDF('vedati',17)],
    [PDF('vedati',35),PDF('vedati',36),PDF('vedati',37),PDF('vedati',38),PDF('vedati',39),PDF('vedati',40)],
    [20,21,22,23,24,25,26,27,28,29,30,31,32,33].map(n=>PDF('vedati',n))
  ],
  arca:[
    [PDF('arca',1),PDF('arca',2),PDF('arca',3),PDF('arca',4)],
    [PDF('arca',5),PDF('arca',6),PDF('arca',8),PDF('arca',10),PDF('arca',12),PDF('arca',13),PDF('arca',14),PDF('arca',15),PDF('arca',16)],
    [PDF('arca',17),PDF('arca',18),PDF('arca',19),PDF('arca',20),PDF('arca',21),PDF('arca',22),PDF('arca',23)],
    [PDF('arca',25),PDF('arca',26),PDF('arca',27),PDF('arca',28),PDF('arca',29),PDF('arca',30)],
    [PDF('arca',24),PDF('arca',31),PDF('arca',32),PDF('arca',33),PDF('arca',34),PDF('arca',35),PDF('arca',36),PDF('arca',37),PDF('arca',38),PDF('arca',39),PDF('arca',40),PDF('arca',41),PDF('arca',42),PDF('arca',43),PDF('arca',44),PDF('arca',45)]
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
  trueshkowski:[
    [PDF('pranna',3)],
    [PDF('pranna',4)],
    [PDF('pranna',6),PDF('pranna',7),PDF('pranna',8)],
    [PDF('pranna',9)],
    [PDF('pranna',10),PDF('pranna',11),PDF('pranna',12),PDF('pranna',13),PDF('pranna',19)],
    [PDF('pranna',14),PDF('pranna',15),PDF('pranna',16),PDF('pranna',17),PDF('pranna',18)]
  ],
  seven:[
    [],
    [],
    [PDF('seven',9),PDF('seven',11),PDF('seven',12)],
    [PDF('seven',14),PDF('seven',15),PDF('seven',16),PDF('seven',17),PDF('seven',18)],
    [PDF('seven',20),PDF('seven',21)],
    [PDF('seven',22),PDF('seven',23),PDF('seven',24),PDF('seven',25)]
  ],
  ai:[
    [AI_MEDIA['ИТОГОВАЯ СЕРИЯ'][0]],
    AI_MEDIA['ИСХОДНЫЙ АРХИВ'],
    AI_MEDIA['ПРОЦЕСС ОБУЧЕНИЯ'],
    AI_MEDIA['ТЕСТЫ МОДЕЛИ'],
    AI_MEDIA['СРАВНЕНИЕ / ОРИГИНАЛ'].flatMap((item,i)=>[item,AI_MEDIA['СРАВНЕНИЕ / ОБУЧЕННАЯ МОДЕЛЬ'][i]]),
    [],
    AI_MEDIA['ИТОГОВАЯ СЕРИЯ'].slice(1)
  ],
  mahajuga:[
    Array.from({length:10},(_,i)=>PDF('mahajuga',i+2)),
    Array.from({length:8},(_,i)=>PDF('mahajuga',i+12)),
    [20,21,22,23].map(n=>PDF('mahajuga',n)),
    [24,25,26,27,28,30,31,29].map(n=>PDF('mahajuga',n)),
    [32,33,34,35].map(n=>PDF('mahajuga',n)),
    Array.from({length:21},(_,i)=>PDF('mahajuga',i+36))
  ],
  techstack:[
    [],
    [LIVE('poster',1)],
    [LIVE('generator',1)],
    ['assets/live/technopryad/multisite-full.webp']
  ]
};
// Prompts are attached to the generated series shown beside them in the source screenshots.
const EDEN_PROMPTS={
  '004-after.webp':'logo design for brand «eden», it is a cafe garden greenhouse where butterflies fly inside, thin letters',
  '003-cup-pair.webp':'A fashion vhs photo of brochure written in HELVETICA THIN with menu cafe, Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, high resolution photography, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion',
  '006-green-cups.webp':'photo of Minimalist aesthetic iced coffee cups with black lids and straws, placed on a reflective dark table. One cup is filled with iced latte, showing a gradient from white milk at the bottom to dark coffee on top. The scene is well-lit, with a soft shadow and muted color palette, evoking a modern and stylish coffee shop vibe, Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, high resolution photography, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion',
  '008-dark-cups.webp':'minimalist aesthetic iced coffee cups with black lids and straws placed on a reflective dark table. The glasses feature green grainy blurred silhouettes, Japanese, Korean, Chinese style tree, leaf, nature designs with handwritten notes in Korean characters. Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion, including details about the coffee origins. The scene is well-lit, with a soft shadow and muted color palette, evoking a modern and stylish coffee shop vibe',
  '010-transparent-set.webp':'minimalistic scene with a transparent cup made of clear plastic, without any logos or prints. The lid is a dome-shaped clear plastic cover with a thick transparent straw. The background includes a stylish black-and-white gradient box, featuring green grainy blurred silhouettes, Japanese, Korean, Chinese style tree, leaf, nature designs with handwritten notes in Korean characters. The setting has soft, neutral lighting, and the overall aesthetic is clean, contemporary, and visually appealing. The scene evokes a sense of high-quality dessert presentation in a minimalist style. Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, high resolution photography, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion, including details about the coffee origins. The scene is well-lit, with a soft shadow and muted palette, evoking a modern and stylish coffee shop vibe',
  '012-greenhouse-1.webp':'A fashion vhs photo of enchanting greenhouse cafe with a glass ceiling and walls framed in black steel, allowing sunlight to stream in and illuminate the space. Inside, lush greenery and cascading vines cover the walls, while large potted plants and ferns fill the room with vibrant green hues. The seating includes cozy, earthy-toned sofas and black wrought-iron chairs around glass-topped tables. The floor has intricate mosaic tiles, adding a rustic charm. Butterflies of various colors flutter throughout the space, adding a magical and lively feel to the serene, natural environment. The atmosphere is warm and inviting, ideal for a peaceful escape. Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, high resolution photography, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion',
  '019-tote-small-1.webp':'studio fashion photo Stylish urban scene with a young dreamcore Asian dark aesthetic fantasy woman dressed in a cozy, woman holding in her hand small plush styled by miu miu y2k bag. The bag features a unique design featuring green, grainy, blurred silhouettes of trees, leaves and natural elements inspired by Japanese, Korean and Chinese art. Ethereal glow, wierdcore, odd core, detailed objects, sharp details, in a hyper realistic photographic style, hard motion, motion blur, high resolution photography, frame in motion, hyper realistic photography, 8k resolution, inspiration is projection art and high fashion. The surface of the bag also features handwritten Korean characters, giving it an organic and artistic touch. The scene takes place on a quiet street with wierdcore Chinese-style buildings in the background.'
};
for(const series of Object.values(EDEN_AI_MEDIA))for(const image of series){const file=image.src.split('/').pop();if(EDEN_PROMPTS[file])image.prompt=EDEN_PROMPTS[file]}
const PDF_COUNTS={vedati:41,arca:45,luvka:38,eden:17,mahajuga:56,seven:27,raw:31,pranna:49};
// Crop windows are percentages of the original HSE page captures. They display
// only the artwork while the explanation is typeset separately on this site.
const EXHIBITS={
  ai:[
    ...AI_MEDIA['ИСХОДНЫЙ АРХИВ'],
    ...AI_MEDIA['АРХИВ / МИНИАТЮРЫ'],
    ...AI_MEDIA['ПРОЦЕСС ОБУЧЕНИЯ'],
    ...AI_MEDIA['ТЕСТЫ МОДЕЛИ'],
    ...AI_MEDIA['СРАВНЕНИЕ / ОРИГИНАЛ'].flatMap((item,i)=>[{...item,group:'СРАВНЕНИЕ / ОРИГИНАЛ И МОДЕЛЬ'},{...AI_MEDIA['СРАВНЕНИЕ / ОБУЧЕННАЯ МОДЕЛЬ'][i],group:'СРАВНЕНИЕ / ОРИГИНАЛ И МОДЕЛЬ'}]),
    ...AI_MEDIA['ИТОГОВАЯ СЕРИЯ']
  ],
  'eden-ai':Object.values(EDEN_AI_MEDIA).flat()
};
CASE_COVERS.ai=AI_MEDIA['ИТОГОВАЯ СЕРИЯ'].find(item=>item.src.includes('018-series-1-1'));
CASE_COVERS['eden-ai']=EDEN_AI_MEDIA['ОБЛОЖКА'][0];
const CASE_ESSAYS={};
// Links transcribed from the original project screenshots. Keep the labels tied
// to the material shown, especially the three separate Arca scenarios.
const CASE_SLIDE_LINKS={
  vedati:{
    [PDF('vedati',38)]:['Открыть сайт','https://hseadc.github.io/VEDATI/'],
    [PDF('vedati',40)]:['Открыть репозиторий','https://github.com/HSEADC/VEDATI']
  },
  arca:{
    [PDF('arca',16)]:['Открыть исследование','https://figma.fun/YkVfT3'],
    [PDF('arca',26)]:['Смотреть видео: поиск на карте','https://clck.ru/3Mih7N'],
    [PDF('arca',27)]:['Смотреть видео: добавление объекта','https://clck.ru/3Mih6y'],
    [PDF('arca',28)]:['Смотреть видео: создание альбома','https://clck.ru/3Mih5r'],
    [PDF('arca',30)]:['Открыть прототип системы ачивок','https://figma.fun/1Gmul1'],
    [PDF('arca',35)]:['Открыть стикерпак','https://t.me/addstickers/arca2025'],
    [PDF('arca',36)]:['Смотреть скринкаст лендинга','https://clck.ru/3MigzP'],
    [PDF('arca',37)]:['Открыть лендинг arca','http://arcarem.tilda.ws/']
  }
};
const CASE_RESOURCES={
  vedati:[
    ['Открыть сайт','https://hseadc.github.io/VEDATI/'],
    ['Лонгрид в Figma','https://figma.fun/Ug7w06'],
    ['Мы в Pinterest','https://pin.it/6IBXzLfAE'],
    ['Стикеры Telegram','https://t.me/addstickers/veda_ty'],
    ['Репозиторий проекта','https://github.com/HSEADC/VEDATI']
  ],
  luvka:[
    ['Исследование в Figma','https://figma.fun/nMdJ5g'],
    ['Видео проекта','https://www.youtube.com/watch?v=fbeO25Lv_70']
  ],
  arca:[
    ['Исследование','https://figma.fun/YkVfT3'],
    ['Видео сценария 1: поиск на карте','https://clck.ru/3Mih7N'],
    ['Видео сценария 2: добавление объекта','https://clck.ru/3Mih6y'],
    ['Видео сценария 3: создание альбома','https://clck.ru/3Mih5r'],
    ['Прототип системы ачивок','https://figma.fun/1Gmul1'],
    ['Стикерпак','https://t.me/addstickers/arca2025'],
    ['Скринкаст лендинга','https://clck.ru/3MigzP'],
    ['Лендинг arca','http://arcarem.tilda.ws/']
  ],
  glasses:[['Видео прототипа','https://vimeo.com/1042404372?share=copy']],
};
function caseGallery(id){
  if(id==='techstack')return [['ВЕБ-ПЛАКАТ','poster',4],['ГЕНЕРАТОР','generator',2],['МНОГОСТРАНИЧНЫЙ САЙТ','multisite',2],['СТРАНИЦА САЙТА','process',2]].flatMap(([group,key,count])=>Array.from({length:count},(_,i)=>({src:LIVE(key,i+1),group,slide:i+1})));
  if(id==='vedati')return [
    ...[6,7,8,9,10,11,12,13,14,15,18,19].map(n=>({src:PDF('vedati-research',n),group:'ИССЛЕДОВАНИЕ: ГИПОТЕЗЫ, ОПРОС И СЦЕНАРИИ',slide:n})),
    ...[0,2,4,5,7,8,10,11,12,13,14,15,16,17,18].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИЯ И ДИЗАЙН-СИСТЕМА',slide:n})),
    ...[20,21,22,23,24,25,26,27,28,29,30,31,32,33].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИИ ПРОДВИЖЕНИЯ И НОСИТЕЛЕЙ',slide:n})),
    ...[35,36,37,38,39,40].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'БИБЛИОТЕКА И РЕАЛИЗАЦИЯ',slide:n}))
  ];
  if(id==='luvka')return Array.from({length:38},(_,i)=>i+1).filter(n=>n!==13).map(n=>({src:PDF('luvka',n),thumb:`assets/pdf-thumbs/luvka/${String(n).padStart(3,'0')}.webp`,group:n<=11?'КОНЦЕПЦИЯ И ИССЛЕДОВАНИЕ':n<=20?'ДИЗАЙН-СИСТЕМА':n<=31?'НОСИТЕЛИ':'ПРОТОТИП И ИНТЕРФЕЙС',slide:n}));
  if(id==='arca')return Array.from({length:45},(_,i)=>i+1).map(n=>({src:PDF('arca',n),thumb:`assets/pdf-thumbs/arca/${String(n).padStart(3,'0')}.webp?v=2`,group:n<=4?'ЗАДАЧА И ИДЕЯ':n<=16?'ИССЛЕДОВАНИЕ И ПОРТРЕТЫ':n<=24?'ДИЗАЙН-СИСТЕМА':n<=31?'СЦЕНАРИИ ПРИЛОЖЕНИЯ':'АЙДЕНТИКА И НОСИТЕЛИ',slide:n}));
  if(id==='glasses')return Array.from({length:5},(_,i)=>({src:PDF('hues',i+1),group:'ПРОТОТИП HUES',slide:i+1}));
  if(EXHIBITS[id])return EXHIBITS[id];
  if(id==='trueshkowski')return [0,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(n=>({src:PDF('pranna',n),group:n<=8?'ИССЛЕДОВАНИЕ И ПОИСК ИДЕИ':n<=10?'ВИЗУАЛЬНАЯ СИСТЕМА':'НОСИТЕЛИ И УПАКОВКА',slide:n}));
  if(id==='seven')return Array.from({length:25},(_,i)=>i+1).map(n=>({src:PDF('seven',n),thumb:`assets/pdf-thumbs/seven/${String(n).padStart(3,'0')}.webp`,group:n<=8?'БРИФ И ИССЛЕДОВАНИЕ':n<=13?'ИДЕЯ И ВИЗУАЛЬНАЯ СИСТЕМА':n<=19?'КОММУНИКАЦИЯ':n<=21?'ЦИФРОВАЯ СРЕДА':'ПРЕДМЕТНЫЕ НОСИТЕЛИ',slide:n}));
  if(id==='pranna')return [30,31,32,33,34,36,37,38,39,41,42,44,45,46,47].map(n=>({src:PDF('pranna',n),group:n<36?'АЙДЕНТИКА':n<41?'ПОСТЕРЫ И ПЕЧАТЬ':'ПРЕДМЕТНЫЕ НОСИТЕЛИ',slide:n}));
  if(id==='yoshi')return [...Array.from({length:15},(_,i)=>i+1),17].map(n=>({src:PDF('yoshi',n),thumb:`assets/pdf-thumbs/yoshi/${String(n).padStart(3,'0')}.webp`,group:'КАДРЫ И СЦЕНЫ ВИДЕО',slide:n}));
  if(id==='eden')return (GALLERY_MANIFEST.eden||[]).map(item=>({...item,group:'МАТЕРИАЛЫ ПРОЕКТА'}));
  const source={type:'raw'}[id]||id, count=PDF_COUNTS[source];
  if(count)return Array.from({length:count},(_,i)=>{const n=(source==='vedati'||source==='pranna')?i:i+1;return {src:PDF(source,n),thumb:`assets/pdf-thumbs/${source}/${String(n).padStart(3,'0')}.webp`,group:'МАТЕРИАЛЫ ПРОЕКТА',slide:n}});
  return (GALLERY_MANIFEST[id]||[]).map(item=>({...item,group:'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ'}));
}
