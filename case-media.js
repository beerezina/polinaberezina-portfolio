const PDF=(id,n)=>`assets/pdf/${id}/${String(n).padStart(3,'0')}.webp`;
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
    [PDF('arca',27),PDF('arca',28),PDF('arca',30)],
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
  trueshkowski:[
    [PDF('pranna',0),PDF('pranna',8)],
    [PDF('pranna',9),PDF('pranna',11)],
    [PDF('pranna',13),PDF('pranna',19)],
    [PDF('pranna',14),PDF('pranna',16),PDF('pranna',17),PDF('pranna',18)],
    [PDF('pranna',12),PDF('pranna',15)]
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
// Crop windows are percentages of the original HSE page captures. They display
// only the artwork while the explanation is typeset separately on this site.
const EXHIBITS={
  ai:[
    {src:'assets/full/ai/018.webp',crop:[16.1,16.4,23,41.9],caption:'Сгенерированная серия: тюльпаны и предметная сцена',group:'ИТОГОВАЯ СЕРИЯ'},
    {src:'assets/full/ai/018.webp',crop:[41,16.4,23,41.9],caption:'Сгенерированная серия: интерьер и естественный свет',group:'ИТОГОВАЯ СЕРИЯ'},
    {src:'assets/full/ai/018.webp',crop:[65.7,16.4,23,41.9],caption:'Сгенерированная серия: свечи и текстиль',group:'ИТОГОВАЯ СЕРИЯ'},
    {src:'assets/full/ai/012.webp',crop:[53.4,19.9,35.4,64.7],caption:'Результат обучения: цветы в интерьере',group:'СРАВНЕНИЕ И ТЕСТЫ'},
    {src:'assets/full/ai/013.webp',crop:[53.4,22.7,35.4,64.7],caption:'Результат обучения: клубника и мягкий свет',group:'СРАВНЕНИЕ И ТЕСТЫ'},
    {src:'assets/full/ai/014.webp',crop:[53.4,25.6,35.4,64.7],caption:'Результат обучения: свечи и ткань',group:'СРАВНЕНИЕ И ТЕСТЫ'}
  ],
  'eden-ai':[
    {src:'assets/full/eden-ai/009.webp',crop:[18.9,17.5,68.2,75],caption:'Эксперименты со стаканами и печатной графикой',group:'ВИЗУАЛЬНЫЕ ТЕСТЫ'},
    {src:'assets/full/eden-ai/010.webp',crop:[18.9,17.5,68.2,74],caption:'Варианты фирменных носителей eden',group:'ВИЗУАЛЬНЫЕ ТЕСТЫ'},
    {src:'assets/full/eden-ai/014.webp',crop:[16.1,13,72.6,86.8],caption:'Вариант пространства кафе-оранжереи',group:'ПРОСТРАНСТВО'},
    {src:'assets/full/eden-ai/016.webp',crop:[16.1,13,72.6,86.8],caption:'Сумка с графикой бренда',group:'МЕРЧ'},
    {src:'assets/full/eden-ai/018.webp',crop:[16.1,13,72.6,86.8],caption:'Графика на сумке крупным планом',group:'МЕРЧ'}
  ],
  lsp:[
    {src:'assets/full/lsp/012.webp',crop:[20,17,69,78],caption:'Главный экран лонгрида в браузере',group:'ЭКРАНЫ ЛОНГРИДА'},
    {src:'assets/full/lsp/013.webp',crop:[8,6,84,90],caption:'Сцена лонгрида с красной типографикой',group:'ЭКРАНЫ ЛОНГРИДА'}
  ]
};
CASE_COVERS.ai=EXHIBITS.ai[0];
CASE_COVERS['eden-ai']=EXHIBITS['eden-ai'][0];
const CASE_ESSAYS={
  ai:[
    {eyebrow:'01 / ИДЕЯ',title:'Не просто похожая картинка',text:'Я собрала изображения с близким настроением: свет, мягкие ткани, цветы, еда и домашние предметы. Задача эксперимента — проверить, сможет ли обученная модель удерживать общее ощущение этих сцен, а не повторять один конкретный кадр.'},
    {eyebrow:'02 / МЕТОД',title:'Собрать визуальный словарь',text:'Референсы стали датасетом для обучения LoRA. Затем я проверяла модель на разных сюжетах с одинаковой эстетической задачей и сравнивала результаты с исходными изображениями.'},
    {eyebrow:'03 / РЕЗУЛЬТАТ',title:'Стиль через свет и композицию',text:'Итоговая серия показывает, как один визуальный язык переносится между натюрмортом, интерьером и предметной съёмкой. Справа в сравнительных кадрах — результаты модели; исходные фотографии не выдаются за сгенерированные.'}
  ],
  'eden-ai':[
    {eyebrow:'01 / ИДЕЯ',title:'Проверить бренд на новых носителях',text:'Для eden я исследовала, как генеративные инструменты могут помочь представить айдентику на стаканах, в пространстве кафе и на мерче. Это визуальные концепции, а не фотографии произведённой упаковки или готового кафе.'},
    {eyebrow:'02 / ЭКСПЕРИМЕНТ',title:'От графики к среде',text:'Зелёная растительная графика появляется на стаканах и печатных материалах, затем переходит в интерьер оранжереи. Так можно проверить, сохраняется ли характер бренда за пределами логотипа.'},
    {eyebrow:'03 / РЕЗУЛЬТАТ',title:'Серия применений',text:'Отдельные кадры показывают носители крупно: упаковку, пространство и сумку. В портфолио они собраны как проектные пробы с помощью Midjourney, без интерфейса страницы, из которой взяты материалы.'}
  ],
  lsp:[
    {eyebrow:'01 / ЗАДАЧА',title:'Песня как цифровой рассказ',text:'Лонгрид посвящён треку ЛСП «Милая девочка Саша» — истории отношений, в которой сцены меняются вместе с эмоциональным состоянием героев. Мне было важно передать это через последовательность экранов, типографику и движение.'},
    {eyebrow:'02 / РЕШЕНИЕ',title:'Сцены вместо пересказа',text:'Структура ведёт зрителя от знакомства и ощущения близости к трагическому повороту. Тёмная палитра, яркие цветовые акценты и контрастный набор текста задают ритм чтения. Полную интерактивную версию можно открыть по ссылке выше.'}
  ]
};
function caseGallery(id){
  if(id==='techstack')return [['ВЕБ-ПЛАКАТ','poster',4],['ГЕНЕРАТОР','generator',2],['МНОГОСТРАНИЧНЫЙ САЙТ','multisite',2],['СТРАНИЦА САЙТА','process',2]].flatMap(([group,key,count])=>Array.from({length:count},(_,i)=>({src:LIVE(key,i+1),group,slide:i+1})));
  if(id==='vedati')return [
    ...[6,7,8,9,10,11,12,13,14,15,18,19].map(n=>({src:PDF('vedati-research',n),group:'ИССЛЕДОВАНИЕ: ГИПОТЕЗЫ, ОПРОС И СЦЕНАРИИ',slide:n})),
    ...[0,2,4,5,7,8,10,11,12,13,14,15,16,17,18].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИЯ И ДИЗАЙН-СИСТЕМА',slide:n})),
    ...[21,22,23,24,25,26,27,28,29,30,32,33].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'КОНЦЕПЦИИ ПРОДВИЖЕНИЯ И НОСИТЕЛЕЙ',slide:n})),
    ...[36,37,38,40].map(n=>({src:PDF('vedati',n),thumb:`assets/pdf-thumbs/vedati/${String(n).padStart(3,'0')}.webp`,group:'БИБЛИОТЕКА И РЕАЛИЗАЦИЯ',slide:n}))
  ];
  if(id==='luvka')return Array.from({length:38},(_,i)=>i+1).filter(n=>n!==13).map(n=>({src:PDF('luvka',n),thumb:`assets/pdf-thumbs/luvka/${String(n).padStart(3,'0')}.webp`,group:n<=11?'КОНЦЕПЦИЯ И ИССЛЕДОВАНИЕ':n<=20?'ДИЗАЙН-СИСТЕМА':n<=31?'НОСИТЕЛИ':'ПРОТОТИП И ИНТЕРФЕЙС',slide:n}));
  if(id==='arca')return Array.from({length:45},(_,i)=>i+1).filter(n=>n!==26&&n!==32).map(n=>({src:PDF('arca',n),thumb:`assets/pdf-thumbs/arca/${String(n).padStart(3,'0')}.webp`,group:'МАТЕРИАЛЫ ПРОЕКТА',slide:n}));
  if(id==='glasses')return Array.from({length:5},(_,i)=>({src:PDF('hues',i+1),group:'ПРОТОТИП HUES',slide:i+1}));
  if(EXHIBITS[id])return EXHIBITS[id];
  if(id==='trueshkowski')return [0,9,11,12,13,14,15,16,17,18,19].map(n=>({src:PDF('pranna',n),group:n<11?'СИСТЕМА':'НОСИТЕЛИ И УПАКОВКА',slide:n}));
  if(id==='pranna')return [30,31,32,33,34,36,37,38,39,41,42,44,45,46,47].map(n=>({src:PDF('pranna',n),group:n<36?'АЙДЕНТИКА':n<41?'ПОСТЕРЫ И ПЕЧАТЬ':'ПРЕДМЕТНЫЕ НОСИТЕЛИ',slide:n}));
  if(id==='yoshi')return [...Array.from({length:15},(_,i)=>i+1),17].map(n=>({src:PDF('yoshi',n),thumb:`assets/pdf-thumbs/yoshi/${String(n).padStart(3,'0')}.webp`,group:'КАДРЫ И СЦЕНЫ ВИДЕО',slide:n}));
  const source={type:'raw'}[id]||id, count=PDF_COUNTS[source];
  if(count)return Array.from({length:count},(_,i)=>{const n=(source==='vedati'||source==='pranna')?i:i+1;return {src:PDF(source,n),thumb:`assets/pdf-thumbs/${source}/${String(n).padStart(3,'0')}.webp`,group:'МАТЕРИАЛЫ ПРОЕКТА',slide:n}});
  return (GALLERY_MANIFEST[id]||[]).map(item=>({...item,group:'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ'}));
}
