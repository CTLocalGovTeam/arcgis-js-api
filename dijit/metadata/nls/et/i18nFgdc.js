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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Puudub",notComplete:"Lõpetamata",other:"Muu",present:"Esita",unknown:"Tundmatu",unpublishedMaterial:"Avaldamata materjal"},hints:{integerGreaterThanOne:"(sisestage täisarv > 1)",integer0To100:"(sisestage täisarv 0..100)"},citeinfo:{caption:"Tsitaadi teave",origin:"Lähetaja",pubdate:"Avaldamise kuupäev",pubtime:"Avaldamise aeg",title:"Pealkiri",edition:"Versioon",geoform:{caption:"Georuumiliste andmete esitamise vorm",atlas:"Atlas",audio:"Heli",diagram:"Diagramm",sDocument:"Dokument",globe:"Maakera",map:"Kaart",model:"Mudel",multiMediaPresentation:"Multimeedia esitus",profile:"Profiil",rasterDigitalData:"Digitaalsed rasterandmed",remoteSensingImage:"Kaugseirepilt",section:"Jaotis",spreadsheet:"Tööleht",tabularDigitalData:"Digitaalsed tabelandmed",vectorDigitalData:"Digitaalsed vektorandmed",video:"Video",view:"Vaatamine"},serinfo:{caption:"Jada teave",sername:"Jada nimi",issue:"Väljaande identifikaator"},pubinfo:{caption:"Avaldamise teave",pubplace:"Avaldamise koht",publish:"Publitseerija"},othercit:"Muud tsitaadi üksikasjad",onlink:"Veebilink (URL)"},cntinfo:{caption:"Kontaktinfo",section:{primary:"Esmane",phoneAndEmail:"Telefon ja e-post",hoursAndInstructions:"Tunnid ja juhised"},cntorgp:{caption:"Ettevõtte järgi",cntorg:"Organisatsioon",cntper:"Isik"},cntperp:{caption:"Isiku järgi",cntper:"Isik",cntorg:"Organisatsioon"},cntpos:"Paigutus",cntaddr:{caption:"Aadress",addrtype:{caption:"Aadressi tüüp",mailing:"Posti teel",physical:"Füüsiline",mailingAndPhysical:"Posti teel ja füüsiliselt"},address:"Aadress",city:"Suur linn",state:"Riik",postal:"Postiindeks",country:"Riik"},cntvoice:"Häälkõne",cnttdd:"TDD/TTY telefon (kuulmiskahjustusega)",cntfax:"Faks",cntemail:"Meiliaadress",hours:"Tundi",cntinst:"Juhised"},dataqual:{caption:"Andmete kvaliteedi teave",section:{attributeAccuracy:"Atribuudi täpsus",logicalConsistency:"Loogiline ühilduvus",completeness:"Täielikkus",positionalAccuracy:"Positsiooni täpsus",lineage:"Põlvnemine",cloudCover:"Pilvkate"},attracc:{caption:"Atribuuditäpsus",attraccr:"Atribuuditäpsuse aruanne",qattracc:{caption:"Kvantitatiivne atribuuditäpsuse hinnang",attraccv:"Atribuuditäpsuse väärtus",attracce:"Atribuuditäpsuse selgitus"}},logic:"Loogilise ühilduvuse aruanne",complete:"Täielikkuse aruanne",posacc:"Positsiooniline täpsus",horizpa:{caption:"Horisontaalne positsiooniline täpsus",horizpar:"Horisontaalse positsioonilise täpsuse aruanne",qhorizpa:{caption:"Kvantitatiivne horisontaalse positsioonilise täpsuse hinnang",horizpav:"Horisontaalse positsioonilise täpsuse väärtus",horizpae:"Horisontaalse positsioonilise täpsuse selgitus"}},vertacc:{caption:"Vertikaalne positsiooniline täpsus",vertaccr:"Vertikaalse positsiooni täpsuse aruanne",qvertpa:{caption:"Kvantitatiivne vertikaalse positsioonilise täpsuse hinnang",vertaccv:"Vertikaalse positsioonilise täpsuse väärtus",vertacce:"Vertikaalse positsioonilise täpsuse selgitus"}},lineage:{caption:"Päritolu"},srcinfo:{caption:"Allika teave",srccite:"Allika tsitaat",srcscale:"Allika mõõtkava nimetaja",typesrc:{caption:"Allika kandja tüüp",paper:"Paber",stableBaseMaterial:"Stabiilne materjal",microfiche:"Mikrofišš",microfilm:"Mikrofilm",audiocassette:"Helikassett",chart:"Diagramm",filmstrip:"Filmiriba",transparency:"Läbipaistvus",videocassette:"Videokassett",videodisc:"Videoketas",videotape:"Videolint",physicalModel:"Füüsiline mudel",computerProgram:"Arvutiprogramm",disc:"Ketas",cartridgeTape:"Kassetilint",magneticTape:"Magnetlint",online:"Võrguühendusega",cdrom:"CD-plaat",electronicBulletinBoard:"Elektrooniline teadetetahvel",electronicMailSystem:"E-posti süsteem"},srctime:"Sisuallika ajaperiood",srccurr:"Allika ajakohasuseviide",srccitea:"Allika tsitaadi lühend",srccontr:"Allika panus"},procstep:{caption:"Toimingu etapp",procdesc:"Toimingu kirjeldus",srcused:"Kasutatud allika tsitaadi lühend",procdate:"Toimingu kuupäev",proctime:"Toimingu aeg",srcprod:"Tekitatud allika tsitaadi lühend",proccont:"Toimingu kontakt"},cloud:"Pilvkate"},distinfo:{caption:"Jaotusjuhised",section:{distributor:"Edasimüüja",description:"Kirjeldus",orderProcess:"Tellimine",prerequisites:"Eeldused",availability:"Saadavus"},distrib:"Edasimüüja",resdesc:{caption:"Ressursi kirjeldus",liveData:"Reaalajas andmed ja kaardid",downloadableData:"Allalaaditavad andmed",offlineData:"Võrguühenduseta andmed",staticMapImages:"Staatilised kaardipildid",sDocument:"Muud dokumendid",application:"Rakendused",geographicService:"Geograafilised teenused",clearingHouse:"Andmekojad",mapFiles:"Kaardi failid",geographicActivies:"Geograafilised tegevused"},distliab:"Jaotuse kohustuste avaldus",custom:"Kohandatud tellimus",techpreq:"Tehnilised eeldused",availabl:"Saadavus"},eainfo:{caption:"Olemi ja atribuudi teave",overview:"Ülevaate kirjeldus",eaover:"Olemi ja atribuudi ülevaade",eadetcit:"Olemi ja atribuuti üksikasjade tsitaat"},idinfo:{caption:"Tuvastusteave",section:{timeAndStatus:"Aeg ja olek",constraints:"Piirangud",contact:"Kontakt",additional:"Täiendav"},citeinfo:"Tsitaat",descript:{caption:"Kirjeldus",sAbstract:"Ülevaade",purpose:"Eesmärk",supplinf:"Lisateave"},timeperd:{caption:"Sisu ajaperiood",current:{caption:"Ajakohasuse viide",groundCondition:"Maapinna seisund",publicationDate:"Avaldamise kuupäev"}},status:{caption:"Staatus",progress:{caption:"Edenemine",complete:"Valmis",inWork:"Töös",planned:"Plaanitud"},update:{caption:"Hoolduse ja uuendamise sagedus",continual:"Pidev",daily:"Iga päev",weekly:"Iga nädal",monthly:"Iga kuu",annually:"Iga-aastane",unknown:"Tundmatu",asNeeded:"Vajadusel",irregular:"Ebaregulaarne",nonePlanned:"Pole plaanitud"}},spdom:{caption:"Kuvaulatus",bounding:{caption:"Piiritlevad koordinaadid",westbc:"Läänepikkus",eastbc:"Idapikkus",northbc:"Põhjalaius",southbc:"Lõunalaius"}},keywords:{caption:"Märksõnad",theme:"Teema",place:"Koht",stratum:"Kiht",temporal:"Ajaline",thesaursus:"Seotud tesaurus",delimited:"Märksõnad",themektIsoTopicCategory:"ISO teema...",themektIsoTopicDialog:"ISO teema",placektGnis:"Geograafiliste nimede infosüsteem"},accconst:"Juurdepääsupiirang",useconst:"Kasuta piiranguid",ptcontac:"Ressursi kontakti punkt",browse:{caption:"Lehitsemisgraafika",browsen:"Lehitsemisgraafika URL",browsed:"Lehitsemisgraafikafaili kirjeldus",browset:"Lehitsemisgraafika failitüüp"},datacred:"Andmeallika krediit",secinfo:{caption:"Turbeteave",secsys:"Turvaklassi süsteem",secclass:{caption:"Turvaklass",topSecret:"Salastatud",secret:"Salajane",confidential:"Konfidentsiaalne",restricted:"Piiratud",unclassified:"Rühmitamata",sensitive:"Tundlik"},sechandl:"Turbekäsitluse kirjeldus"},sNative:"Kohaliku andmestiku keskkond",crossref:"Viide"},metadata:{idinfo:"Identifikaator",dataqual:"Kvaliteet",spdoinfo:"Ruumiandmete korraldamine",spref:"Koordinaatsüsteem",eainfo:"Olem ja atribuut",distinfo:"Jaotus",metainfo:"Metaandmed"},metainfo:{caption:"Metaandmete teave",section:{dates:"Metaandmete kuupäevad",contact:"Metaandmete kontakt",standard:"Metaandmete standard",additional:"Täiendav"},metd:"Metaandmete kuupäev",metrd:"Metaandmete läbivaatuse kuupäev",metfrd:"Metaandmete tulevase läbivaatuse kuupäev",metstdn:"Metaandmete standardi nimi",metstdv:"Metaandmete standardi versioon",metac:"Metaandmete juurdepääsupiirang",metuc:"Metaandmete kasutuspiirang",metsi:{caption:"Metaandmete turbeteave",metscs:"Metaandmete turvaklassi süsteem",metsc:"Metaandmete turvaklass",metshd:"Metaandmete turbekäsitluse kirjeldus"}},spref:{caption:"Koordinaatsüsteemi teave",horizsys:{caption:"Horisontaalne koordinaatsüsteem",geograph:{caption:"Geograafiline",latres:"Laiuskraadi resolutsioon",longres:"Pikkuskraadi resolutsioon",geogunit:{caption:"Geograafiluste koordinaatide ühikud",decimalDegrees:"Kümnendkraadid",decimalMinutes:"Kümnendminutid",decimalSeconds:"Kümnendsekundid",degreesAndDecimalMinutes:"Kraadid ja kümnendminutid",degreesMinutesAndDecimalSeconds:"Kraadid, minutid ja kümnendsekundid",radians:"Radiaanid",grads:"Järgud"}},planar:{caption:"Lame"},local:{caption:"Kohalik",localdes:"Kohalik kirjeldus",localgeo:"Kohalik geoteave"},geodetic:{caption:"Geodeetiline mudel",horizdn:{caption:"Horisontaalse daatumi nimi",nad83:"Põhja-Ameerika 1983. a daatum",nad27:"Põhja-Ameerika 1927. a daatum"},ellips:{caption:"Ellipsoidi nimi",grs80:"Geodeetiline viitesüsteem 80",clarke1866:"Clarke 1866"},semiaxis:"Suurpooltelg",denflat:"Lamendamissuhte nimetaja"}},vertdef:{caption:"Vertikaalne koordinaatsüsteem",altsys:{caption:"Kõrgussüsteem",altdatum:{caption:"Kõrgusdaatumi nimi",navd88:"Põhja-Ameerika 1988. a vertikaaldaatum",ngvd29:"1929. a riiklik geodeetiline vertikaaldaatum"},altres:"Kõrguse resolutsioon",altunits:{caption:"Kõrguse vahemaa ühikud",meters:"Meetrid",feet:"Jalad"},altenc:{caption:"Kõrguse kodeerimismeetod",explicit:"Horisontaalkoordinaadid sisaldavad eraldi kõrguskoordinaati",implicit:"Peitkoordinaat",attribute:"Atribuudiväärtused"}},depthsys:{caption:"Sügavussüsteem",depthdn:{caption:"Sügavusdaatumi nimi",option1:"Kohalik maapind",option2:"Kaardi daatum; mõõtmete vähendamise daatum",option3:"Madalaim mõõn",option4:"Kõrgeim tõus",option5:"Keskmine mõõn",option6:"Keskmine tõus",option7:"Keskmine merepinna tase",option8:"Geodeesia daatum",option9:"Keskmine kevadine mõõn",option10:"Keskmine kevadine tõus",option11:"Keskmine kvadratuurne mõõn",option12:"Keskmine kvadratuurne tõus",option13:"Keskmine madalaim mõõn",option14:"Keskmine kevadine madalaim mõõn",option15:"Keskmine kõrgem tõus",option16:"Keskmine kõrgem mõõn",option17:"Keskmine madalaim tõus",option18:"Kevadised looded",option19:"Troopiline madalaim mõõn",option20:"Kvadratuursed looded",option21:"Tõus",option22:"Kõrgem tõus",option23:"Mõõn",option24:"Mõõna daatum",option25:"Madalaim mõõn",option26:"Madalam mõõn",option27:"Madalaim tavaline mõõn",option28:"Keskmine loode tase",option29:"India kevadine mõõn",option30:"Maksimaalne tõus",option31:"Maksimaalne mõõn",option32:"Columbia jõe daatum",option33:"Mehhiko lahe ranniku mõõna daatum",option34:"Ekvatoriaalse kevade mõõn",option35:"Ligikaudne madalaim mõõn",option36:"Paranduseta"},depthres:"Sügavuse resolutsioon",depthdu:{caption:"Sügavuse vahemaa ühikud",meters:"Meetrid",feet:"Jalad"},depthem:{caption:"Sügavuse kodeerimismeetod",explicit:"Horisontaalkoordinaadid sisaldavad eraldi sügavuskoordinaati",implicit:"Peitkoordinaat",attribute:"Atribuudiväärtused"}}}},timeinfo:{caption:"Ajaperioodi teave",sngdate:"Üks kuupäev",mdattim:"Mitu kuupäeva",rngdates:"Kuupäevavahemik",caldate:"Kuupäev",time:"Aeg",begdate:"Alguskuupäev",begtime:"Alguskellaaeg",enddate:"Lõppkuupäev",endtime:"Lõppkellaaeg"}});