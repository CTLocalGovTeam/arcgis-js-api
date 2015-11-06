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

define({general:{cancel:"Avbryt",close:"Stäng",none:"Inga",ok:"OK",other:"Annat",stamp:"Stämpel",now:"Nu",choose:"Välj en:"},editor:{noMetadata:"Det finns inga metadata för det här objektet.",xmlViewOnly:"Den typ av metadata som är associerad med det här objektet stöds inte av redigeraren. Metadata måste vara i ArcGIS-format.",editorDialog:{caption:"Metadata",captionPattern:"Metadata för {title}"},primaryToolbar:{view:"Visa",viewXml:"Visa XML",edit:"Ändra",initializing:"Läser in...",startingEditor:"Startar redigerare...",loadingDocument:"Läser in dokument...",updatingDocument:"Uppdaterar dokument...",generatingView:"Skapar vy...",errors:{errorGeneratingView:"Ett fel uppstod när vyn skapades.",errorLoadingDocument:"Ett fel uppstod när dokumentet lästes in."}},changesNotSaved:{prompt:"Dokumentet har ändringar som inte har sparats.",dialogTitle:"Stäng metadataredigeraren",closeButton:"Stäng"},download:{caption:"Hämta",dialogTitle:"Hämta",prompt:"Klicka här för att hämta din fil."},load:{caption:"Öppna",dialogTitle:"Öppna",typeTab:"Nytt dokument",fileTab:"Öppna fil",templateTab:"En mall",itemTab:"Ditt objekt",filePrompt:"Välj en lokal ArcGIS Metadata XML-fil. Metadata måste vara i ArcGIS-format.",templatePrompt:"Skapa metadata",pullItem:"Fyll i metadata med objektdetaljer.",importWarning:"Den valda filen visas inte i ArcGIS-format. Överförda metadata måste vara i ArcGIS-format.",loading:"Läser in...",noMetadata:"Metadata kan skapas för objektet genom att välja något av följande alternativ.",unrecognizedMetadata:"Den typ av metadata som är associerad med det här objektet stöds inte av redigeraren. Metadata som stöds kan skapas genom att välja något av följande alternativ.",errorLoading:"Det uppstod ett fel vid inläsning.",warnings:{badFile:"Det gick inte att läsa in den valda filen.",notAnXml:"Den valda filen är inte en XML-fil.",notSupported:"Den här typen av fil stöds inte."}},save:{caption:"Spara",dialogTitle:"Spara metadata",working:"Sparar metadata...",errorSaving:"Ett fel uppstod. Dina metadata sparades inte.",saveDialog:{pushCaption:"Tillämpa ändringar på objektet"}},saveAndClose:{caption:"Spara och stäng"},saveDraft:{caption:"Spara lokal kopia",dialogTitle:"Spara lokal kopia"},validate:{caption:"Validera",dialogTitle:"Validering",docIsValid:"Ditt dokument är giltigt."},del:{caption:"Ta bort",dialogTitle:"Ta bort metadata",prompt:"Är du säker på att du vill ta bort de här metadata?",working:"Tar bort metadata...",errorDeleting:"Ett fel uppstod. Dina metadata togs inte bort."},transform:{caption:"Transformera",dialogTitle:"Transformera till",prompt:"",working:"Transformerar...",errorTransforming:"Ett fel uppstod när dokumentet transformerades."},errorDialog:{dialogTitle:"Ett fel uppstod"}},arcgis:{portal:{metadataButton:{caption:"Metadata"}}},calendar:{button:"Kalender...",title:"Kalender"},geoExtent:{button:"Ange geografisk utbredning...",title:"Geografisk utbredning",navigate:"Navigera",draw:"Rita en rektangel",drawHint:"Tryck ned för att starta och släpp för att avsluta."},hints:{date:"(yyyy eller yyyy-mm eller yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy eller yyyy-mm eller yyyy-mm-dd eller yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(separera med komma eller ny rad)",fgdcDate:"(yyyy eller yyyy-mm eller yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(ange ett heltal)",latitude:"(decimalgrader)",longitude:"(decimalgrader)",number:"(ange ett tal)",numberGreaterThanZero:"(ange ett tal > 0)"},isoTopicCategoryCode:{caption:"Ämneskategori",boundaries:"Administrativa och politiska gränser",farming:"Jordbruk och lantbruk",climatologyMeteorologyAtmosphere:"Atmosfär och klimat",biota:"Biologi och ekologi",economy:"Affärsliv och ekonomi",planningCadastre:"Fastigheter",society:"Kultur, samhälle och demografi",elevation:"Höjd och härledda produkter",environment:"Miljö och naturvård",structure:"Anläggningar och byggnader",geoscientificInformation:"Geologisk och geofysisk",health:"Hälsa och sjukdom",imageryBaseMapsEarthCover:"Bilder och baskartor",inlandWaters:"Inlandsvattenresurser",location:"Platser och geodetiska nätverk",intelligenceMilitary:"Militär",oceans:"Hav och flodmynningar",transportation:"Transportnät",utilitiesCommunication:"Allmännyttiga tjänster och kommunikationer"},multiplicity:{moveElementDown:"Flytta sektionen nedåt",moveElementUp:"Flytta sektionen uppåt",removeElement:"Ta bort sektionen",repeatElement:"Upprepa sektionen"},optionalNode:{switchTip:"Inkludera eller utelämna sektionen."},serviceTypes:{featureService:"Geoobjektstjänst",mapService:"Karttjänst",imageService:"Bildtjänst",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Ett värde är obligatoriskt.",date:"Värdet måste vara ett datum.",integer:"Värdet måste vara ett heltal.",number:"Värdet måste vara ett tal.",other:"Ogiltigt värde."},validationPane:{clearMessages:"Rensa meddelanden",prompt:"(klicka på varje meddelande nedan och ange nödvändig information i det fält som anges)"}});