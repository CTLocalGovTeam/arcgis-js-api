// COPYRIGHT © 2015 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Нет",notComplete:"Не завершено",other:"Прочее",present:"Присутствует",unknown:"Нет данных",unpublishedMaterial:"Неопубликованный материал"},hints:{integerGreaterThanOne:"(введите целое значение > 1)",integer0To100:"(введите целое значение 0..100)"},citeinfo:{caption:"Информация ссылки",origin:"Автор",pubdate:"Дата публикации",pubtime:"Время публикации",title:"Название",edition:"Выпуск",geoform:{caption:"Форма представления геопространственных данных",atlas:"Атлас",audio:"Аудио",diagram:"Схема",sDocument:"Документ",globe:"Глобус",map:"Карта",model:"Модель",multiMediaPresentation:"Мультимедийная презентация",profile:"Профиль",rasterDigitalData:"Растровые цифровые данные",remoteSensingImage:"Данные дистанционного зондирования",section:"Секция",spreadsheet:"Электронная таблица",tabularDigitalData:"Табличные цифровые данные",vectorDigitalData:"Векторные цифровые данные",video:"Видео",view:"Просмотр"},serinfo:{caption:"Информация о сериях",sername:"Имя серий",issue:"Идентификатор команды"},pubinfo:{caption:"Информация о публикации",pubplace:"Место публикации",publish:"Публикатор"},othercit:"Прочие детали ссылки",onlink:"Онлайн соединение (URL)"},cntinfo:{caption:"Контактная информация:",section:{primary:"Основной",phoneAndEmail:"Телефон и e-mail",hoursAndInstructions:"Часы и инструкции"},cntorgp:{caption:"По организации",cntorg:"Организация",cntper:"Персона"},cntperp:{caption:"По сотруднику",cntper:"Персона",cntorg:"Организация"},cntpos:"Позиция",cntaddr:{caption:"Адрес",addrtype:{caption:"Тип адреса",mailing:"Почтовое",physical:"Физический",mailingAndPhysical:"Почтовый и физический"},address:"Адрес",city:"Город",state:"Штат",postal:"Почтовый индекс",country:"Округ"},cntvoice:"Голос",cnttdd:"Телефон TDD/TTY (для слабослышащих)",cntfax:"по факсу",cntemail:"Адрес e-mail",hours:"Часы",cntinst:"Инструкции"},dataqual:{caption:"Информация о качестве данных",section:{attributeAccuracy:"Атрибутивная точность",logicalConsistency:"Логическая согласованность",completeness:"Полнота",positionalAccuracy:"Позиционная точность",lineage:"Происхождение",cloudCover:"Облачный покров"},attracc:{caption:"Атрибутивная точность",attraccr:"Отчет о точности атрибутов",qattracc:{caption:"Оценка количественной атрибутивной точности",attraccv:"Значение точности атрибутов",attracce:"Объяснение точности атрибута"}},logic:"Отчет о логической последовательности",complete:"Отчет о завершенности",posacc:"Позиционная точность",horizpa:{caption:"Горизонтальная позиционная точность",horizpar:"Отчет о горизонтальной позиционной точности",qhorizpa:{caption:"Оценка количественной горизонтальное позиционной точности",horizpav:"Значение горизонтальной позиционной точности",horizpae:"Объяснение горизонтальной позиционной точности"}},vertacc:{caption:"Вертикальная позиционная точность",vertaccr:"Отчет о вертикальной позиционной точности",qvertpa:{caption:"Оценка количества вертикальной позиционной точности",vertaccv:"Значение вертикальной позиционной точности",vertacce:"Объяснение вертикальной позиционной точности"}},lineage:{caption:"Происхождение"},srcinfo:{caption:"Информация об источнике",srccite:"Ссылка на источник",srcscale:"Знаменатель масштаба источника",typesrc:{caption:"Тип медиа источника",paper:"Бумага",stableBaseMaterial:"Стабильный материал",microfiche:"Микрофиша",microfilm:"Микрофильм",audiocassette:"Аудиокассета",chart:"Диаграмма",filmstrip:"Пленка",transparency:"Прозрачность",videocassette:"Видеокассета",videodisc:"Видеодиск",videotape:"Видеолента",physicalModel:"Физическая модель",computerProgram:"Компьютерная программа",disc:"Диск",cartridgeTape:"Ленточный катридж",magneticTape:"Магнитная лента",online:"Онлайн",cdrom:"CD-ROM",electronicBulletinBoard:"Электронная доска объявлений",electronicMailSystem:"Система электронной почты"},srctime:"Исходный период времени содержания",srccurr:"Ссылка на актуальность источника",srccitea:"Аббревиатура ссылки на источник",srccontr:"Вклад источника"},procstep:{caption:"Шаг обработки",procdesc:"Описание процесса",srcused:"Источник использованной аббревиатуры ссылки",procdate:"Дата обработки",proctime:"Время обработки",srcprod:"Аббревиатура ссылки создания источника",proccont:"Контакт обработки"},cloud:"Облачный покров"},distinfo:{caption:"Информация о распространении",section:{distributor:"Дистрибьютор",description:"Описание",orderProcess:"Процесс заказа",prerequisites:"Предварительные условия",availability:"Доступность"},distrib:"Дистрибьютор",resdesc:{caption:"Описание ресурса",liveData:"Активные данные и карты",downloadableData:"Данные с возможностью загрузки",offlineData:"Автономные данные",staticMapImages:"Статические изображения карты",sDocument:"Прочие документы",application:"Приложения",geographicService:"Географические сервисы",clearingHouse:"Клиринговые палаты",mapFiles:"Файлы карты",geographicActivies:"Географическая активность"},distliab:"Обязательство распределения",custom:"Процесс пользовательского заказа",techpreq:"Технические условия",availabl:"Доступность"},eainfo:{caption:"Информация об объекте и атрибуте",overview:"Описание обзора",eaover:"Обзор элементов и атрибутов",eadetcit:"Ссылка на детали объектов и атрибутов"},idinfo:{caption:"Информация об идентификации",section:{timeAndStatus:"Время и статус",constraints:"Ограничения",contact:"Обратитесь в",additional:"Дополнительно"},citeinfo:"Ссылка",descript:{caption:"Описание",sAbstract:"Краткое описание",purpose:"Цель",supplinf:"Дополнительная информация"},timeperd:{caption:"Период времени содержания",current:{caption:"Актуальная ссылка",groundCondition:"Состояние грунта",publicationDate:"Дата публикации"}},status:{caption:"Статус",progress:{caption:"Обработка",complete:"Выполнено",inWork:"В работе",planned:"Планируется"},update:{caption:"Частота обслуживания и обновления",continual:"Непрерывный",daily:"Ежедневно",weekly:"Каждую неделю",monthly:"Каждый месяц",annually:"Ежегодно",unknown:"Нет данных",asNeeded:"По мере необходимости",irregular:"Нерегулярный",nonePlanned:"Нет запланированных"}},spdom:{caption:"Экстент",bounding:{caption:"Ограничивающие координаты",westbc:"Долгота западной границы",eastbc:"Долгота восточной границы",northbc:"Широта северной границы",southbc:"Широта южной границы"}},keywords:{caption:"Ключевые слова",theme:"Тема",place:"Место",stratum:"Ступень",temporal:"Временной",thesaursus:"Связанный тезаурус",delimited:"Ключевые слова",themektIsoTopicCategory:"Тема ISO...",themektIsoTopicDialog:"Тема ISO",placektGnis:"Информационная система географических названий"},accconst:"Ограничения доступа",useconst:"Ограничения на использование",ptcontac:"Точка контакта для ресурса",browse:{caption:"Обзор графики",browsen:"URL-адрес обзора графики",browsed:"Обзор описания графического файла",browset:"Обзор типа графического файла"},datacred:"Разрешение на передачу набора данных",secinfo:{caption:"Информация о безопасности",secsys:"Система классификации безопасности",secclass:{caption:"Классификация безопасности",topSecret:"Совершенно секретно",secret:"Секретно",confidential:"Конфиденциальный",restricted:"Ограничено",unclassified:"Неклассифицированный",sensitive:"Чувствительный"},sechandl:"Описание управления безопасностью"},sNative:"Параметры среды набора внутренних данных",crossref:"Перекрестная ссылка"},metadata:{idinfo:"Идентификация",dataqual:"Качество",spdoinfo:"Организация пространственных данных",spref:"Пространственная привязка",eainfo:"Элемент и атрибут",distinfo:"Распределение",metainfo:"Метаданные"},metainfo:{caption:"Информация о метаданных",section:{dates:"Даты метаданных",contact:"Контакт метаданных",standard:"Стандарт метаданных",additional:"Дополнительно"},metd:"Дата метаданных",metrd:"Дата просмотра метаданных",metfrd:"Дата просмотра будущих метаданных",metstdn:"Имя стандарта метаданных",metstdv:"Версия стандарта метаданных",metac:"Ограничения на доступ к метаданным",metuc:"Ограничения использования метаданных",metsi:{caption:"Информация о безопасности метаданных",metscs:"Система классификации безопасности метаданных",metsc:"Классификация безопасности метаданных",metshd:"Описание управления безопасностью метаданных"}},spref:{caption:"Информация о пространственной привязке",horizsys:{caption:"Горизонтальная система координат",geograph:{caption:"Географическая",latres:"Разрешение по широте",longres:"Разрешение по долготе",geogunit:{caption:"Единицы измерения географических координат",decimalDegrees:"Десятичные градусы",decimalMinutes:"Десятичные минуты",decimalSeconds:"Десятичные секунды",degreesAndDecimalMinutes:"Градусы и десятичные минуты",degreesMinutesAndDecimalSeconds:"Градусы, минуты и десятичные секунды",radians:"Радианы",grads:"Грады"}},planar:{caption:"Плановые"},local:{caption:"Локальный",localdes:"Локальное описание",localgeo:"Информация о локальной пространственной привязке"},geodetic:{caption:"Геодезическая модель",horizdn:{caption:"Горизонтальный датум",nad83:"Североамериканский датум 1983",nad27:"Североамериканский датум 1927"},ellips:{caption:"Название эллипсоида",grs80:"Geodetic Reference System 80",clarke1866:"Кларк 1866"},semiaxis:"Большая полуось",denflat:"Знаменатель уравнивающей пропорции"}},vertdef:{caption:"Вертикальная система координат",altsys:{caption:"Cистема высот",altdatum:{caption:"Имя датума высоты",navd88:"Североамериканский вертикальный датум 1988",ngvd29:"Национальный геодезический вертикальный датум 1929"},altres:"Разрешение по высоте",altunits:{caption:"Единицы измерения высоты",meters:"Метры (Meters)",feet:"Футы (Feet)"},altenc:{caption:"Метод кодировки высот",explicit:"Точная координата высоты, включенная в горизонтальные координаты",implicit:"Точная координата",attribute:"Значения атрибута"}},depthsys:{caption:"Система глубин",depthdn:{caption:"Название датума глубин",option1:"Локальная поверхность",option2:"Датум диаграммы; приведение к нулю глубины",option3:"Наинизший приливной уровень",option4:"Наивысший приливной уровень",option5:"Многолетний средний минимум уровня",option6:"Многолетний средний максимум уровня",option7:"Средний уровень моря",option8:"Датум геодезической съемки",option9:"Средний уровень малых сизигийных вод",option10:"Средний уровень полных вод",option11:"Средний уровень низких вод",option12:"Средняя высота квадратурного прилива",option13:"Средний уровень малых вод в квадратуры",option14:"Средние низкие малые сизигийные воды",option15:"Средний уровень полных вод в квадратуры",option16:"Средняя высокая малая вода",option17:"Средний уровень высоких вод в квадратуры",option18:"Сизигийный прилив",option19:"Низкая малая вода тропического прилива",option20:"Квадратурный прилив",option21:"Высшая точка прилива",option22:"Уровень полной воды в квадратуры",option23:"Низшая точка отлива",option24:"Нуль глубин",option25:"Наинизший отлив",option26:"Уровень малой воды в квадратуры",option27:"Наинизший нормальный отлив",option28:"Средний приливный уровень",option29:"Индийская сизигийная малая вода",option30:"Прикладной час порта для полной воды",option31:"прикладной час порта для малой воды",option32:"Датум Columbia River",option33:"Нуль глубин Мексиканского залива",option34:"Экваториальная сизигийная малая вода",option35:"Приблизительный наинизший астрономический прилив",option36:"Без исправлений"},depthres:"Разрешение по глубине",depthdu:{caption:"Единицы измерения глубины",meters:"Метры (Meters)",feet:"Футы (Feet)"},depthem:{caption:"Метод кодирования глубины",explicit:"Точная координата глубины, включенная в горизонтальные координаты",implicit:"Точная координата",attribute:"Значения атрибута"}}}},timeinfo:{caption:"Информация о периоде времени",sngdate:"Единственная дата",mdattim:"Несколько дат",rngdates:"Диапазон дат",caldate:"Дата",time:"Время",begdate:"Дата начала",begtime:"Время начала",enddate:"Дата окончания",endtime:"Время окончания"}});