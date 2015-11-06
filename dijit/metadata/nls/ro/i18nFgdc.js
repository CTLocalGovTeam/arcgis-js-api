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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Niciunul",notComplete:"Nu este finalizat",other:"Altul",present:"Prezent",unknown:"Necunoscut",unpublishedMaterial:"Material nepublicat"},hints:{integerGreaterThanOne:"(introduceţi un număr întreg > 1)",integer0To100:"(introduceţi un număr întreg 0..100)"},citeinfo:{caption:"Informaţii citaţie",origin:"Autor",pubdate:"Data publicării",pubtime:"Ora publicării",title:"Titlu",edition:"Ediţie",geoform:{caption:"Formular reprezentare spaţială date geospaţiale",atlas:"Atlas",audio:"Audio",diagram:"Diagramă",sDocument:"Document",globe:"Glob",map:"Hartă",model:"Model",multiMediaPresentation:"Prezentare multimedia",profile:"Profil",rasterDigitalData:"Date digitale raster",remoteSensingImage:"Imagine detecţie la distanţă",section:"Secţiune",spreadsheet:"Foaie de calcul",tabularDigitalData:"Date digitale tabulare",vectorDigitalData:"Date digitale vectoriale",video:"Video",view:"Vizualizare"},serinfo:{caption:"Informaţii serie",sername:"Nume serie",issue:"Identificare număr"},pubinfo:{caption:"Informaţii publicare",pubplace:"Locul publicării",publish:"Editor"},othercit:"Alte detalii despre citaţie",onlink:"Linkuri online (URL)"},cntinfo:{caption:"Informaţii de contact",section:{primary:"Principală",phoneAndEmail:"Telefon şi e-mail",hoursAndInstructions:"Ore şi instrucţiuni"},cntorgp:{caption:"După organizaţie",cntorg:"Organizaţie",cntper:"Persoană"},cntperp:{caption:"După persoană",cntper:"Persoană",cntorg:"Organizaţie"},cntpos:"Poziţie",cntaddr:{caption:"Adresă",addrtype:{caption:"Tip adresă",mailing:"Adresă poştală",physical:"Fizic",mailingAndPhysical:"Adresă poştală şi fizică"},address:"Adresă",city:"Oraş",state:"Stat",postal:"Cod poştal",country:"Ţară"},cntvoice:"Voce",cnttdd:"Telefon TDD/TTY (deficienţe de auz)",cntfax:"Fax",cntemail:"Adresă de e-mail",hours:"Ore",cntinst:"Instrucţiuni"},dataqual:{caption:"Informaţii calitate date",section:{attributeAccuracy:"Precizie atribute",logicalConsistency:"Consecvenţă logică",completeness:"Grad de finalizare",positionalAccuracy:"Precizie poziţională",lineage:"Descendenţă",cloudCover:"Acoperire cloud"},attracc:{caption:"Precizie atribute",attraccr:"Raport precizie atribute",qattracc:{caption:"Evaluare precizie atribute cantitativă",attraccv:"Valoare precizie atribute",attracce:"Explicaţie precizie atribute"}},logic:"Raport consecvenţă logică",complete:"Raport grad de finalizare",posacc:"Precizie poziţională",horizpa:{caption:"Precizie poziţională orizontală",horizpar:"Raport precizie poziţională orizontală",qhorizpa:{caption:"Evaluare precizie poziţională orizontală cantitativă",horizpav:"Valoare precizie poziţională orizontală",horizpae:"Explicaţie precizie poziţională orizontală"}},vertacc:{caption:"Precizie poziţională verticală",vertaccr:"Raport precizie poziţională verticală",qvertpa:{caption:"Evaluare precizie poziţională verticală cantitativă",vertaccv:"Valoare precizie poziţională verticală",vertacce:"Explicaţie precizie poziţională verticală"}},lineage:{caption:"Descendenţă"},srcinfo:{caption:"Informaţii sursă",srccite:"Citaţie sursă",srcscale:"Numitor scară sursă",typesrc:{caption:"Tip de media sursă",paper:"Hârtie",stableBaseMaterial:"Material bază stabilă",microfiche:"Microfiche",microfilm:"Microfilm",audiocassette:"Casetă audio",chart:"Diagramă",filmstrip:"Film",transparency:"Transparenţă",videocassette:"Casetă video",videodisc:"Disc video",videotape:"Bandă video",physicalModel:"Model fizic",computerProgram:"Program computer",disc:"Disc",cartridgeTape:"Bandă cartuş",magneticTape:"Bandă magnetică",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Panou informativ electronic",electronicMailSystem:"Sistem poştă electronică"},srctime:"Perioadă de timp sursă conţinut",srccurr:"Referinţă actualitate sursă",srccitea:"Abreviere citaţie sursă",srccontr:"Contribuţie sursă"},procstep:{caption:"Pas proces",procdesc:"Descriere proces",srcused:"Abreviere citaţie utilizată sursă",procdate:"Dată proces",proctime:"Timp proces",srcprod:"Abreviere citaţie produsă sursă",proccont:"Contact proces"},cloud:"Acoperire cloud"},distinfo:{caption:"Informaţii distribuţie",section:{distributor:"Distribuitor",description:"Descriere",orderProcess:"Proces comandă",prerequisites:"Condiţii prealabile",availability:"Disponibilitate"},distrib:"Distribuitor",resdesc:{caption:"Descriere resurse",liveData:"Hărţi şi date în timp real",downloadableData:"Date descărcabile",offlineData:"Date offline",staticMapImages:"Imagini de hartă statice",sDocument:"Alte documente",application:"Aplicaţii",geographicService:"Servicii geografice",clearingHouse:"Centre de schimb de informaţii",mapFiles:"Fişiere de hartă",geographicActivies:"Activităţi geografice"},distliab:"Declaraţie de răspundere distribuţie",custom:"Proces comandă personalizată",techpreq:"Condiţii tehnice prealabile",availabl:"Disponibilitate"},eainfo:{caption:"Informaţii entitate şi atribut",overview:"Descriere prezentare generală",eaover:"Prezentare generală entitate şi atribut",eadetcit:"Citaţie detalii entitate şi atribut"},idinfo:{caption:"Informaţii identificare",section:{timeAndStatus:"Oră şi stare",constraints:"Restricţii",contact:"Contact",additional:"Suplimentar"},citeinfo:"Citaţie",descript:{caption:"Descriere",sAbstract:"Abstract",purpose:"Scop",supplinf:"Informaţii suplimentare"},timeperd:{caption:"Perioadă de timp conţinut",current:{caption:"Referinţă actualitate",groundCondition:"Condiţie teren",publicationDate:"Data publicării"}},status:{caption:"Stare",progress:{caption:"Progres",complete:"Finalizat",inWork:"În lucru",planned:"Planificat"},update:{caption:"Frecvenţă întreţinere şi actualizare",continual:"Continuu",daily:"Zilnic",weekly:"Săptămânal",monthly:"Lunar",annually:"Anual",unknown:"Necunoscut",asNeeded:"După cum este necesar",irregular:"Neregulat",nonePlanned:"Nimic planificat"}},spdom:{caption:"Extindere",bounding:{caption:"Coordonate legare",westbc:"Longitudine legătură vest",eastbc:"Longitudine legătură est",northbc:"Latitudine legătură nord",southbc:"Latitudine legătură sud"}},keywords:{caption:"Keywords",theme:"Temă",place:"Loc",stratum:"Stratificare",temporal:"Temporal",thesaursus:"Dicţionar asociat",delimited:"Keywords",themektIsoTopicCategory:"Subiect ISO...",themektIsoTopicDialog:"Subiect ISO",placektGnis:"Sistem informaţii nume geografice"},accconst:"Restricţii de acces",useconst:"Utilizare restricţii",ptcontac:"Punct de contact pentru resursă",browse:{caption:"Grafic parcurgere",browsen:"URL grafic parcurgere",browsed:"Descriere fişier grafic parcurgere",browset:"Tip fişier grafic parcurgere"},datacred:"Credit set de date",secinfo:{caption:"Informaţii securitate",secsys:"Sistem de clasificare securitate",secclass:{caption:"Clasificare securitate",topSecret:"Secret de top",secret:"Secret",confidential:"Confidenţial",restricted:"Restricţionat",unclassified:"Neclasificat",sensitive:"Sensibil"},sechandl:"Descriere gestionare securitate"},sNative:"Mediu set de date nativ",crossref:"Referinţă încrucişată"},metadata:{idinfo:"Identificare",dataqual:"Calitate",spdoinfo:"Organizaţie date spaţiale",spref:"Referinţă spaţială",eainfo:"Entitate şi atribut",distinfo:"Distribuţie",metainfo:"Metadate"},metainfo:{caption:"Informaţii metadate",section:{dates:"Date metadate",contact:"Contact metadate",standard:"Contact metadate",additional:"Suplimentar"},metd:"Dată metadate",metrd:"Dată revizuire metadate",metfrd:"Dată revizuire viitoare metadate",metstdn:"Nume standard metadate",metstdv:"Versiune standard metadate",metac:"Restricţii acces metadate",metuc:"Restricţii utilizare metadate",metsi:{caption:"Informaţii securitate metadate",metscs:"Sistem de clasificare securitate metadate",metsc:"Clasificare securitate metadate",metshd:"Descriere gestionare securitate metadate"}},spref:{caption:"Informaţii referinţa spaţială",horizsys:{caption:"Sistem de coordonate orizontale",geograph:{caption:"Geografic",latres:"Rezoluţie latitudine",longres:"Rezoluţie longitudine",geogunit:{caption:"Unităţi coordonate geografice",decimalDegrees:"Grade zecimale",decimalMinutes:"Minute zecimale",decimalSeconds:"Secunde zecimale",degreesAndDecimalMinutes:"Grade şi minute zecimale",degreesMinutesAndDecimalSeconds:"Grade, minute şi secunde zecimale",radians:"Radiani",grads:"Grade"}},planar:{caption:"Planar"},local:{caption:"Local",localdes:"Descriere locală",localgeo:"Informaţii georeferinţa locală"},geodetic:{caption:"Model geodezic",horizdn:{caption:"Nume date orizontale",nad83:"Date nord-americane 1983",nad27:"Date nord-americane 1927"},ellips:{caption:"Nume elipsoid",grs80:"Sistem referinţe geodezice 80",clarke1866:"Clarke 1866"},semiaxis:"Axă semi-majoră",denflat:"Numitor raport de aplatizare"}},vertdef:{caption:"Sistem de coordonate verticale",altsys:{caption:"Sistem altitudine",altdatum:{caption:"Nume date altitudine",navd88:"Date verticale nord-americane 1988",ngvd29:"Date verticale geodezice naţionale 1929"},altres:"Rezoluţie altitudine",altunits:{caption:"Unităţi distanţă altitudine",meters:"Metri",feet:"Ft"},altenc:{caption:"Metodă codificare altitudine",explicit:"Coordonată explicită elevaţie inclusă în coordonatele orizontale",implicit:"Coordonată implicită",attribute:"Valori atribute"}},depthsys:{caption:"Sistem adâncime",depthdn:{caption:"Nume date adâncime",option1:"Suprafaţă locală",option2:"Date diagramă; date pentru reducere sondare",option3:"Cel mai jos val astronomic",option4:"Cel mai înalt val astronomic",option5:"Medie ape joase",option6:"Medie ape înalte",option7:"Nivel mediu mare",option8:"Date ridicare topografică",option9:"Medie izvoare ape joase",option10:"Medie izvoare ape înalte",option11:"Medie maree joasă de cvadratură",option12:"Medie maree înaltă de cvadratură",option13:"Medie ape joase scăzute",option14:"Medie izvoare ape joase scăzute",option15:"Medie ape înalte crescute",option16:"Medie ape joase crescute",option17:"Medie ape înalte scăzute",option18:"Maree puternică",option19:"Ape joase scăzute tropic",option20:"Maree de cvadratură",option21:"Ape înalte",option22:"Ape înalte crescute",option23:"Ape joase",option24:"Date ape joase",option25:"Ape joase scăzute la maximum",option26:"Ape joase scăzute",option27:"Ape joase normale scăzute la maximum",option28:"Nivel mediu maree",option29:"Ape joase maree indiană",option30:"Ape înalte complete şi încărcare",option31:"Ape joase complete şi încărcare",option32:"Date râul Columbia",option33:"Date ape joase coasta Golfului",option34:"Ape joase izvoare ecuatoriale",option35:"Cel mai jos val astronomic aproximativ",option36:"Nicio corecţie"},depthres:"Rezoluţie adâncime",depthdu:{caption:"Unităţi distanţă adâncime",meters:"Metri",feet:"Ft"},depthem:{caption:"Metodă codificare adâncime",explicit:"Coordonată explicită adâncime inclusă în coordonatele orizontale",implicit:"Coordonată implicită",attribute:"Valori atribute"}}}},timeinfo:{caption:"Informaţii perioadă de timp",sngdate:"O singură dată",mdattim:"Date multiple",rngdates:"Interval dată",caldate:"Dată",time:"Timp",begdate:"Data începerii",begtime:"Ora începerii",enddate:"Data de sfârşit",endtime:"Ora de sfârşit"}});