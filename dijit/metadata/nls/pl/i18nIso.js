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

define({documentTypes:{data:{caption:"ISO 19115 (dane)",description:""},service:{caption:"ISO 19119 (usługa)",description:""},gmi:{caption:"ISO 19115-2 (dane zobrazowań i siatki)",description:""}},general:{reference:"Odniesienie"},sections:{metadata:"Metadane",identification:"Identyfikacja",distribution:"Dystrybucja",quality:"Jakość",acquisition:"Przejęcie"},metadataSection:{identifier:"Identyfikator",contact:"Kontakt",date:"Data",standard:"Standard",reference:"Odniesienie"},identificationSection:{citation:"Przytoczenie",description:"Opis",contact:"Kontakt",thumbnail:"Miniatura",keywords:"Słowa kluczowe",constraints:"Ograniczenia",resource:"Zasób",resourceTab:{representation:"Reprezentacja",language:"Język",classification:"Klasyfikacja",extent:"Zasięg"},serviceResourceTab:{serviceType:"Typ usługi",extent:"Zasięg",couplingType:"Typ powiązania",operation:"Działanie",operatesOn:"Działa na"}},distributionSection:{},qualitySection:{scope:"Zakres",conformance:"Zgodność",lineage:"Pochodzenie"},acquisitionSection:{requirement:"Wymaganie",objective:"Cel",instrument:"Instrument",plan:"Plan subskrypcji",operation:"Działanie",platform:"Platforma",environment:"Środowisko"},AbstractMD_Identification:{sAbstract:"Streszczenie",purpose:"Cel",credit:"Udostępniający zasoby",pointOfContact:"Punkt kontaktowy",resourceMaintenance:"Konserwacja",graphicOverview:"Przegląd graficzny",descriptiveKeywords:"Zbiór danych słów kluczowych",resourceConstraints:"Ograniczenia"},CI_Address:{deliveryPoint:"Punkt dostawy",city:"Miasto",administrativeArea:"Region administracyjny",postalCode:"Kod pocztowy",country:"Kraj",electronicMailAddress:"Adres e-mail"},CI_Citation:{title:"Tytuł",alternateTitle:"Tytuł alternatywny",identifier:"Unikatowy identyfikator zasobu",resource:{title:"Tytuł zasobu",date:"Data zasobu"},specification:{title:"Tytuł specyfikacji",date:"Data specyfikacji"}},CI_Contact:{phone:"Telefon",address:"Adres",onlineResource:"Zasób online",hoursOfService:"Godziny otwarcia",contactInstructions:"Instrukcje dotyczące kontaktu"},CI_Date:{date:"Data",dateType:"Rodzaj dat"},CI_DateTypeCode:{caption:"Rodzaj dat",creation:"Data utworzenia",publication:"Data publikacji",revision:"Data weryfikacji"},CI_OnLineFunctionCode:{caption:"Funkcja",download:"Pobierz",information:"Informacje",offlineAccess:"Dostęp offline",order:"Kolejność",search:"Wyszukaj"},CI_OnlineResource:{caption:"Zasób online",linkage:"Adres URL",protocol:"Protokół",applicationProfile:"Profil aplikacji",name:"Nazwa",description:"Opis",sFunction:"Funkcja"},CI_ResponsibleParty:{caption:"Punkt kontaktowy",individualName:"Nazwa indywidualna",organisationName:"Nazwa instytucji",positionName:"Nazwa pozycji",contactInfo:"Dane kontaktowe",role:"Rola"},CI_RoleCode:{caption:"Rola",resourceProvider:"Dostawca zasobów",custodian:"Nadzorca",owner:"Właściciel",user:"Użytkownik",distributor:"Dystrybutor",originator:"Twórca",pointOfContact:"Punkt kontaktowy",principalInvestigator:"Główny badacz",processor:"Procesor",publisher:"Publikujący",author:"Autor"},CI_Telephone:{voice:"Poczta głosowa",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Usługi_internetowe"},DQ_ConformanceResult:{caption:"Wynik zgodności",explanation:"Objaśnienie",degree:{caption:"Poziom",validationPerformed:"Walidacja wykonana",conformant:"Zgodny",nonConformant:"Niezgodny"}},DQ_DataQuality:{report:"Raport"},DQ_Scope:{level:"Zakres (informacja o jakości)",levelDescription:"Opis poziomu"},EX_Extent:{caption:"Zasięg",description:"Opis",geographicElement:"Zasięg przestrzenny",temporalElement:"Zasięg tymczasowy",verticalElement:"Zasięg pionowy"},EX_GeographicBoundingBox:{westBoundLongitude:"Graniczna długość geograficzna zachodnia",eastBoundLongitude:"Graniczna długość geograficzna wschodnia",southBoundLatitude:"Graniczna szerokość geograficzna południowa",northBoundLatitude:"Graniczna szerokość geograficzna północna"},EX_GeographicDescription:{caption:"Opis geograficzny"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Data początkowa",endPosition:"Data końcowa"}},EX_VerticalExtent:{minimumValue:"Wartość minimalna",maximumValue:"Wartość maksymalna",verticalCRS:"Pionowe CRS"},Length:{caption:"Długość",uom:"Jednostki pomiaru",km:"Kilometry",m:"Metry",mi:"Mile",ft:"Stopy"},LI_Lineage:{statement:"Oświadczenie pochodzenia"},MD_BrowseGraphic:{fileName:"Przeglądaj adresy URL grafik",fileDescription:"Przeglądaj nazwy grafik",fileType:"Przeglądaj typy grafik"},MD_ClassificationCode:{unclassified:"Niesklasyfikowane",restricted:"Ograniczone",confidential:"Poufne",secret:"Tajne",topSecret:"Ściśle tajne"},MD_Constraints:{caption:"Ograniczenia wykorzystania",useLimitation:"Limit wykorzystania"},MD_DataIdentification:{spatialRepresentationType:"Typ reprezentacji przestrzennej",spatialResolution:"Rozdzielczość przestrzenna",language:"Język zasobu",supplementalInformation:"Dodatkowy"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Format dystrybucji",transferOptions:"Opcje transferu"},MD_Format:{name:"Nazwa formatu",version:"Wersja formatu"},MD_Identifier:{caption:"URI",identifierCaption:"Identyfikator",code:"Kod"},MD_Keywords:{delimitedCaption:"Słowa kluczowe",thesaurusName:"Powiązany słownik"},MD_KeywordTypeCode:{caption:"Typ słów kluczowych",discipline:"Dyscyplina",place:"Miejsce",stratum:"Warstwa",temporal:"Tymczasowa",theme:"Motyw"},MD_LegalConstraints:{caption:"Ograniczenia prawne",accessConstraints:"Ograniczenia dostępu",useConstraints:"Używaj ograniczeń",otherConstraints:"Inne ograniczenia"},MD_MaintenanceFrequencyCode:{caption:"Częstotliwość",continual:"Stale",daily:"Codziennie",weekly:"Co tydzień",fortnightly:"Co dwa tygodnie",monthly:"Co miesiąc",quarterly:"Co kwartał",biannually:"Co pół roku",annually:"Co rok",asNeeded:"Według potrzeb",irregular:"Nieregularnie",notPlanned:"Niezaplanowany",unknown:"Nieznane"},MD_Metadata:{caption:"Metadane",fileIdentifier:"Identyfikator pliku",language:"Język metadanych",hierarchyLevel:"Poziom hierarchii",hierarchyLevelName:"Nazwa poziomu hierarchii",contact:"Kontakt metadanych",dateStamp:"Data metadanych",metadataStandardName:"Standardowa nazwa metadanych",metadataStandardVersion:"Standardowa wersja metadanych",referenceSystemInfo:"System referencyjny",identificationInfo:"Identyfikacja",distributionInfo:"Dystrybucja",dataQualityInfo:"Jakość"},MD_ProgressCode:{caption:"Kod postępów",completed:"Ukończone",historicalArchive:"Archiwum historyczne",obsolete:"Nieaktualne",onGoing:"Bieżące",planned:"Planowane",required:"Wymagane",underDevelopment:"W opracowaniu"},MD_RepresentativeFraction:{denominator:"Denominator"},MD_Resolution:{equivalentScale:"Skala równorzędna",distance:"Odległość"},MD_RestrictionCode:{copyright:"Prawa autorskie",patent:"Patent",patentPending:"Patent w opracowaniu",trademark:"Znak firmowy",license:"Licencja",intellectualPropertyRights:"Prawa własności intelektualnej",restricted:"Ograniczone",otherRestrictions:"Inne ograniczenia"},MD_ScopeCode:{attribute:"Atrybut",attributeType:"Typ atrybutu",collectionHardware:"Sprzęt pobierczy",collectionSession:"Sesja pobiercza",dataset:"Zestaw danych",series:"Serie",nonGeographicDataset:"Zestaw danych niegeograficznych",dimensionGroup:"Grupa wymiarów",feature:"Obiekt",featureType:"Typ obiektu",propertyType:"Typ właściwości",fieldSession:"Sesja terenowa",software:"Oprogramowanie",service:"Usługa",model:"Model",tile:"Kafel"},MD_ScopeDescription:{attributes:"Atrybuty",features:"Obiekty",featureInstances:"Przykłady obiektów",attributeInstances:"Przykłady atrybutów",dataset:"Zestaw danych",other:"Inne"},MD_SecurityConstraints:{caption:"Ograniczenia bezpieczeństwa",classification:"Klasyfikacja",userNote:"Notka użytkownika",classificationSystem:"System klasyfikacji",handlingDescription:"Opis obsługi"},MD_SpatialRepresentationTypeCode:{caption:"Typ reprezentacji przestrzennej",vector:"Wektor",grid:"Siatka",textTable:"Tabela tekstowa",tin:"Trójkąty (TIN)",stereoModel:"Model stereo",video:"Wideo"},MD_TopicCategoryCode:{caption:"Kategoria tematów",boundaries:"Granice administracyjne i polityczne",farming:"Rolnictwo i uprawy",climatologyMeteorologyAtmosphere:"Klimat i meteorologia",biota:"Biologia i ekologia",economy:"Biznes i gospodarka",planningCadastre:"Kataster",society:"Kultura, społeczeństwo i demografia",elevation:"Dane wysokości i produkty pochodne",environment:"Środowisko i ochrona",structure:"Obiekty inżynieryjne",geoscientificInformation:"Geologia i geofizyka",health:"Zdrowie i choroby",imageryBaseMapsEarthCover:"Zobrazowania i mapy bazowe",inlandWaters:"Zasoby wodne (wewnątrzlądowe)",location:"Lokalizacje i sieci geodezyjne",intelligenceMilitary:"Wojskowość",oceans:"Oceany i ujścia",transportation:"Sieci transportowe",utilitiesCommunication:"Usługi komunalne i łączność"},MI_ContextCode:{caption:"Kontekst",acquisition:"Przejęcie",pass:"Przejście",wayPoint:"Punkt trasy"},MI_EnvironmentalRecord:{caption:"Warunki środowiskowe",averageAirTemperature:"Przeciętna temperatura powietrza",maxRelativeHumidity:"Maksymalna wilgotność względna",maxAltitude:"Wysokość maksymalna",meterologicalConditions:"Warunki meteorologiczne"},MI_Event:{identifier:"Identyfikator zdarzenia",time:"Czas",expectedObjectiveReference:"Oczekiwany cel (identyfikator obiektu)",relatedSensorReference:"Czujnik powiązany (identyfikator instrumentu)",relatedPassReference:"Powiązane przejście (identyfikator przejścia platformy)"},MI_GeometryTypeCode:{point:"Punkt",linear:"Liniowy",areal:"Obszarowy",strip:"Pasmowy"},MI_Instrument:{citation:"Przytoczenie instrumentów",identifier:"Identyfikator instrumentu",sType:"Typ instrumentu",description:"Opis instrumentu",mountedOn:"Zamontowany na",mountedOnPlatformReference:"Zamontowany na (identyfikator platformy)"},MI_Metadata:{acquisitionInformation:"Przejęcie"},MI_Objective:{caption:"Cel",identifier:"Identyfikator celu",priority:"Priorytet celów",sFunction:"Funkcja celu",extent:"Zasięg",pass:"Przejście platformy",sensingInstrumentReference:"Instrument odczytu (identyfikator instrumentu)",objectiveOccurrence:"Zdarzenia",sections:{identification:"Identyfikacja",extent:"Zasięg",pass:"Przejście",sensingInstrument:"Instrument odczytu",objectiveOccurrence:"Zdarzenia"}},MI_ObjectiveTypeCode:{caption:"Typ (technika gromadzenia dla celu)",instantaneousCollection:"Błyskawiczne gromadzenie",persistentView:"Trwały widok",survey:"Geodezja"},MI_Operation:{caption:"Działanie",description:"Opis operacji",citation:"Przytoczenie operacji",identifier:"Identyfikator operacji",status:"Status operacji",objectiveReference:"Powiązany cel (identyfikator celu)",planReference:"Powiązany plan (identyfikator planu)",significantEventReference:"Powiązane wydarzenie (identyfikator wydarzenia)",platformReference:"Powiązana platforma (identyfikator platformy)",sections:{identification:"Identyfikacja",related:"Powiązane"}},MI_OperationTypeCode:{caption:"Typ operacji",real:"Realna",simulated:"Symulacja",synthesized:"Syntetyzowana"},MI_Plan:{sType:"Geometria próbek dla gromadzenia danych",status:"Status planu",citation:"Przytoczenie instytucji wymagającej gromadzenia",satisfiedRequirementReference:"Spełniony wymóg (identyfikator wymogu)",operationReference:"Operacja powiązana (identyfikator operacji)"},MI_Platform:{citation:"Przytoczenie platformy",identifier:"Identyfikator platformy",description:"Opis platformy obsługującej instrument",sponsor:"Instytucja sponsorująca dla platformy",instrument:"Instrument(y) zamontowany(e) na platformie",instrumentReference:"Identyfikator instrumentu",sections:{identification:"Identyfikacja",sponsor:"Sponsor",instruments:"Instrumenty"}},MI_PlatformPass:{identifier:"Identyfikator przejścia platformy",extent:"Zasięg przejścia platformy",relatedEventReference:"Powiązane wydarzenie (identyfikator wydarzenia)"},MI_PriorityCode:{critical:"Krytyczne",highImportance:"Duża ważność",mediumImportance:"Średnia ważność",lowImportance:"Mała ważność"},MI_RequestedDate:{requestedDateOfCollection:"Wymagana data gromadzenia",latestAcceptableDate:"Najpóźniejsza akceptowalna data"},MI_Requirement:{caption:"Wymaganie",citation:"Przytoczenie materiałów zawierających wytyczne wymagań",identifier:"Identyfikator wymagania",requestor:"Wnioskujący o wymogi",recipient:"Odbiorca wyniku wymagania",priority:"Priorytet wymagania",requestedDate:"Żądana data",expiryDate:"Data wygaśnięcia",satisifiedPlanReference:"Zrealizowany plan (identyfikator planu)",sections:{identification:"Identyfikacja",requestor:"Wnioskodawca",recipient:"Odbiorca",priorityAndDates:"Priorytet i daty",satisifiedPlan:"Zrealizowany plan"}},MI_SequenceCode:{caption:"Sekwencja",start:"Uruchom",end:"Zakończ",instantaneous:"Błyskawiczny"},MI_TriggerCode:{caption:"Włącznik",automatic:"Automatycznie",manual:"Manualnie",preProgrammed:"Wstępnie zaprogramowane"},ObjectReference:{uuidref:"Odniesienie UUID",xlinkref:"Odniesienie URL"},RS_Identifier:{caption:"Miejsce na kod ID Plus",code:"Kod",codeSpace:"Miejsce na kod"},SV_CouplingType:{loose:"Luźne",mixed:"Mieszane",tight:"Ścisłe"},SV_OperationMetadata:{operationName:"Nazwa operacji",DCP:"DCP",connectPoint:"Połącz punkt"},SV_ServiceIdentification:{serviceType:"Typ_usługi",couplingType:"Typ powiązania",containsOperations:"Metadane operacji",operatesOn:"Działa na"},TM_Primitive:{indeterminatePosition:"Pozycja nieokreślona",indeterminates:{before:"Przed",after:"Po",now:"Teraz",unknown:"Nieznane"}},gemet:{concept:{gemetConceptKeyword:"Koncepcyjne słowo kluczowe GEMET",tool:"Odszukaj...",dialogTitle:"GEMET — koncepcyjne słowo kluczowe",searchLabel:"Wyszukaj:",searchTip:"Przeszukiwanie GEMET"},theme:{tool:"Odszukaj...",dialogTitle:"GEMET — motyw danych Inspire"},ioerror:"Wystąpił błąd przy komunikacji z usługą GEMET: {url}",searching:"Przeszukiwanie GEMET...",noMatch:"Nie znaleziono pasujących wyników.",languages:{bg:"Bułgarski",cs:"Czeski",da:"Duński",nl:"Holenderski",en:"Angielski",et:"Estoński",fi:"Fiński",fr:"Francuski",de:"Niemiecki",el:"Grecki",hu:"Węgierski",ga:"Celtycki (irlandzki)",it:"Włoski",lv:"Łotewski",lt:"Litewski",mt:"Maltański",pl:"Polski",pt:"Portugalski",ro:"Rumuński",sk:"Słowacki",sl:"Słoweński",es:"Hiszpański",sv:"Szwedzki"}}});