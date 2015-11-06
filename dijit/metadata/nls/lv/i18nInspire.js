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

define({documentTypes:{data:{caption:"INSPIRE (dati)",description:""},service:{caption:"INSPIRE (serviss)",description:""}},dataThemeKeywords:{caption:"Inspire datu tēma"},inspireServiceType:{discovery:"Atklāšanas serviss",view:"Skatīšanas serviss",download:"Lejupielādes serviss",transformation:"Transformācijas serviss",invoke:"Izsaukšanas serviss",other:"Cits serviss"},keywordSections:{dataTheme:"Inspire datu tēma",serviceCategory:"ISO 19119 servisa kategorija",gemetConcept:"GEMET koncepcija",otherKeywords:"Citi atslēgvārdi"},LanguageCode:{bul:"Bulgāru",cze:"Čehu",dan:"Dāņu",dut:"Holandiešu",eng:"Angļu",est:"Igauņu",fin:"Somu",fre:"Franču",ger:"Vācu",gre:"Grieķu",hun:"Ungāru",gle:"Gēlu (īru)",ita:"Itāliešu",lav:"Latviešu",lit:"Lietuviešu",mlt:"Maltiešu",pol:"Poļu",por:"Portugāļu",rum:"Rumāņu",slo:"Slovāku",slv:"Slovēņu",spa:"Spāņu",swe:"Zviedru",chi:"Ķīniešu",kor:"Korejiešu",nor:"Norvēģu",rus:"Krievu",tur:"Turku"},otherConstraints:{noLimitations:"Bez ierobežojumiem",confidentialityOfProceedings:"Publisko iestāžu ziņojumu konfidencialitāte...",internationalRelations:"Starptautiskās attiecības, sabiedrības drošība vai valsts aizsardzība",courseOfJustice:"Tiesvedības gaita, kādas personas iespēja saņemt taisnīgu lietas iztiesāšanu...",confidentialityOfCommercial:"Komerciālas vai nozares informācijas konfidencialitāte...",intellectualProperty:"Intelektuālā īpašuma tiesības",confidentialityOfPersonalData:"Personas datu un/vai lietu konfidencialitāte...",interestsOrProtection:"Ikvienas tās personas interešu aizsardzība, kas piegādāja informāciju...",protectionOfEnvironment:"Tās vides aizsardzība, uz kuru attiecas šī informācija...",freeText:"Brīvais teksts"},serviceType:{humanInteractionService:"100 Servisi attiecībā uz personu mijiedarbību ģeogrāfiskā skatījumā",humanCatalogueViewer:"101 Kataloga skatītājs",humanGeographicViewer:"102 Ģeogrāfisko datu skatītājs",humanGeographicSpreadsheetViewer:"103 Ģeogrāfisko datu izklājlapas skatītājs",humanServiceEditor:"104 Servisa redaktors",humanChainDefinitionEditor:"105 Ķēdes definīcijas redaktors",humanWorkflowEnactmentManager:"106 Darbplūsmas uzsākšanas vadītājs",humanGeographicFeatureEditor:"107 Ģeogrāfisko elementu redaktors",humanGeographicSymbolEditor:"108 Ģeogrāfisko simbolu redaktors ",humanFeatureGeneralizationEditor:"109 Elementu ģenerealizēšans redaktors",humanGeographicDataStructureViewer:"110 Ģeogrāfisko datu un struktūras skatītājs",infoManagementService:"200 Ģeogrāfiskā modeļa/informācijas pārvaldības serviss",infoFeatureAccessService:"201 Elementu piekļuves serviss",infoMapAccessService:"202 Kartes piekļuves serviss",infoCoverageAccessService:"203 Seguma piekļuves serviss",infoSensorDescriptionService:"204 Sensoru apraksta serviss",infoProductAccessService:"205 Produktu piekļuves serviss",infoFeatureTypeService:"206 Elementu tipu serviss",infoCatalogueService:"207 Kataloga serviss",infoRegistryService:"208 Reģistra serviss",infoGazetteerService:"209 Ģeogrāfisko nosaukumu rādītāju serviss",infoOrderHandlingService:"210 Citu apstrādes darbību serviss",infoStandingOrderService:"211 Regulārā maksājuma serviss",taskManagementService:"300 Ģeogrāfiskās darbplūsmas/uzdevumu pārvaldības serviss",chainDefinitionService:"301 Ķēdes definīcijas serviss",workflowEnactmentService:"302 Darbplūsmas uzsākšanas serviss",subscriptionService:"303 Abonēšanas serviss",spatialProcessingService:"400 Ģeogrāfiskās apstrādes serviss — telpisks",spatialCoordinateConversionService:"401 Koordinētās konvertēšanas serviss",spatialCoordinateTransformationService:"402 Koordinātu transformēšanas serviss",spatialCoverageVectorConversionService:"403 Seguma/vektoru konvertēšanas serviss",spatialImageCoordinateConversionService:"404 Attēlu koordinātu konvertēšanas serviss",spatialRectificationService:"405 Izlabošanas serviss",spatialOrthorectificationService:"406 Ortorektifikācijas serviss",spatialSensorGeometryModelAdjustmentService:"407 Sensoru ģeometrijas modeļu korekcijas serviss",spatialImageGeometryModelConversionService:"408 Attēlu ģeometrijas modeļu konvertēšanas serviss",spatialSubsettingService:"409 Apakškopas iegulšanas serviss",spatialSamplingService:"410 Paraugu ņemšanas serviss",spatialTilingChangeService:"411 Mozaīkošanas maiņas serviss",spatialDimensionMeasurementService:"412 Izmēru mērījumu serviss",spatialFeatureManipulationService:"413 Elementu manipulāciju serviss",spatialFeatureMatchingService:"414 Elementu saskaņošanas serviss",spatialFeatureGeneralizationService:"415 Elementu ģeneralizēšanas serviss",spatialRouteDeterminationService:"416 Maršruta noteikšanas serviss",spatialPositioningService:"417 Pozicionēšanas serviss",spatialProximityAnalysisService:"418 Tuvuma analīzes serviss",thematicProcessingService:"500 Ģeogrāfiskās apstrādes serviss — tematisks",thematicGoparameterCalculationService:"501 Ģeoparametru aprēķināšanas serviss",thematicClassificationService:"502 Tematiskās klasificēšanas serviss",thematicFeatureGeneralizationService:"503 Elementu ģeneralizēšanas serviss",thematicSubsettingService:"504 Apakškopas iegulšanas serviss",thematicSpatialCountingService:"505 Telpiskās uzskaites serviss",thematicChangeDetectionService:"506 Izmaiņu atklāšanas serviss",thematicGeographicInformationExtractionService:"507 Ģeogrāfiskās informācijas izvilkšanas serviss",thematicImageProcessingService:"508 Attēlu apstrādes serviss",thematicReducedResolutionGenerationService:"509 Samazinātas izšķirtspējas ģenerēšanas serviss",thematicImageManipulationService:"510 Attēlu manipulēšanas servisi",thematicImageUnderstandingService:"511 Attēlu izpratnes servisi",thematicImageSynthesisService:"512 Attēlu sintēzes servisi",thematicMultibandImageManipulationService:"513 Vairākjoslu attēlu manipulācija",thematicObjectDetectionService:"514 Objektu noteikšanas serviss",thematicGeoparsingService:"515 Ģeoparsēšanas serviss",thematicGeocodingService:"516 Ģeokodēšanas serviss",temporalProcessingService:"600 Ģeogrāfiskās apstrādes servisi — pagaidu",temporalReferenceSystemTransformationService:"601 Pagaidu atsauču sistēmas transformēšanas serviss",temporalSubsettingService:"602 Apakškopas iegulšanas serviss",temporalSamplingService:"603 Paraugu ņemšanas serviss",temporalProximityAnalysisService:"604 Pagaidu tuvuma analīzes serviss",metadataProcessingService:"700 Ģeogrāfiskās apstrādes servisi — metadati",metadataStatisticalCalculationService:"701 Statistikas datu aprēķina serviss",metadataGeographicAnnotationService:"702 Ģeogrāfisko anotāciju servisi",comService:"800 Ģeogrāfiskās saziņas servisi",comEncodingService:"801 Kodēšanas serviss",comTransferService:"802 Pārsūtīšanas serviss",comGeographicCompressionService:"803 Ģeogrāfisko datu saspiešanas serviss",comGeographicFormatConversionService:"804 Ģeogrāfisko formātu konvertēšanas serviss",comMessagingService:"805 Ziņapmaiņas serviss",comRemoteFileAndExecutableManagement:"806 Attālo failu un izpildāmības pārvaldība"},useLimitation:{noCondition:"Neviens nosacījums neattiecas",unknownCondition:"Nosacījumi nav zināmi",freeText:"Brīvais teksts"}});