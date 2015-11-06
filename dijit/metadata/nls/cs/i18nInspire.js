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

define({documentTypes:{data:{caption:"INSPIRE (data)",description:""},service:{caption:"INSPIRE (služba)",description:""}},dataThemeKeywords:{caption:"Motiv datové sady Inspire"},inspireServiceType:{discovery:"Sužba Discovery",view:"Zobrazit službu",download:"Stáhnout službu",transformation:"Transformační služba",invoke:"Vyvolat službu",other:"Jiná služba"},keywordSections:{dataTheme:"Motiv datové sady Inspire",serviceCategory:"Kategorie služby ISO 19119",gemetConcept:"Koncepce GEMET",otherKeywords:"Další klíčová slova"},LanguageCode:{bul:"bulharština",cze:"Čeština",dan:"dánština",dut:"nizozemština",eng:"angličtina",est:"estonština",fin:"Finština",fre:"francouzština",ger:"němčina",gre:"řečtina",hun:"maďarština",gle:"gaelština (irština)",ita:"italština",lav:"lotyština",lit:"litevština",mlt:"maltština",pol:"polština",por:"portugalština",rum:"rumunština",slo:"slovenština",slv:"slovinština",spa:"španělština",swe:"švédština",chi:"čínština",kor:"korejština",nor:"norština",rus:"ruština",tur:"turečtina"},otherConstraints:{noLimitations:"Bez omezení",confidentialityOfProceedings:"Úroveň důvěrnosti úředních řízení…",internationalRelations:"Mezinárodní vztahy, veřejná bezpečnost nebo národní obrana",courseOfJustice:"Výkon spravedlnosti, právo kohokoli na spravedlivý proces…",confidentialityOfCommercial:"Úroveň důvěrnosti obchodních nebo průmyslových informací…",intellectualProperty:"Práva duševního vlastnictví",confidentialityOfPersonalData:"Úroveň důvěrnosti osobních údajů nebo složek…",interestsOrProtection:"Zájmy nebo ochrana jakékoli osoby, která informace poskytla…",protectionOfEnvironment:"Ochrana prostředí, jehož se takové informace týkají…",freeText:"Volný text"},serviceType:{humanInteractionService:"100 Geografické služby interakce s člověkem",humanCatalogueViewer:"101 Prohlížeč katalogu",humanGeographicViewer:"102 Geografický prohlížeč",humanGeographicSpreadsheetViewer:"103 Geografický prohlížeč kalkulačních tabulek",humanServiceEditor:"104 Editor služeb",humanChainDefinitionEditor:"105 Editor řetězcových definic",humanWorkflowEnactmentManager:"106 Manažer ustanovení toku pracovních činností",humanGeographicFeatureEditor:"107 Editor vzhledů geografických prvků",humanGeographicSymbolEditor:"108 Editor geografických značek ",humanFeatureGeneralizationEditor:"109 Editor generalizace vzhledů jevů",humanGeographicDataStructureViewer:"110 Prohlížeč struktury geografických dat",infoManagementService:"200 Geografické služby řízení modelů /informace",infoFeatureAccessService:"201 Služba zpřístupnění vzhledů jevů",infoMapAccessService:"202 Služba zpřístupnění map",infoCoverageAccessService:"203 Služba zpřístupnění pokrytí",infoSensorDescriptionService:"204 Služba popisu senzoru",infoProductAccessService:"205 Služba zpřístupnění produktu",infoFeatureTypeService:"206 Služby typu prvku",infoCatalogueService:"207 Katalogová služba",infoRegistryService:"208 Rejstříková služba",infoGazetteerService:"209 Služba Zeměpisný slovník",infoOrderHandlingService:"210 Služba zpracování objednávek",infoStandingOrderService:"211 Služba trvalých objednávek",taskManagementService:"300 Geografické služby řízení toků pracovních činností/úloh",chainDefinitionService:"301 Služba definování řetězce",workflowEnactmentService:"302 Služba ustanovení toku pracovních činností",subscriptionService:"303 Subskripční služba",spatialProcessingService:"400 Geografické služby zpracování – prostorové",spatialCoordinateConversionService:"401 Služba konverze souřadnic",spatialCoordinateTransformationService:"402 Služba transformace souřadnic",spatialCoverageVectorConversionService:"403 Služba konverze pokrytí/vektor",spatialImageCoordinateConversionService:"404 Služba konverze snímkových souřadnic",spatialRectificationService:"405 Služba překreslení",spatialOrthorectificationService:"406 Služba diferenciálního překreslení",spatialSensorGeometryModelAdjustmentService:"407 Služba rektifikace modelu geometrie senzoru",spatialImageGeometryModelConversionService:"408 Služba konverze modelu geometrie obrazu",spatialSubsettingService:"409 Služba vytváření podmnožin",spatialSamplingService:"410 Služba výběru",spatialTilingChangeService:"411 Služba změny dělení",spatialDimensionMeasurementService:"412 Služba měření rozměrů",spatialFeatureManipulationService:"413 Služby manipulace se vzhledy jevů",spatialFeatureMatchingService:"414 Služba vyrovnání vzhledů jevů",spatialFeatureGeneralizationService:"415 Služba generalizace vzhledů jevů",spatialRouteDeterminationService:"416 Služba zjiště ní trasy",spatialPositioningService:"417 Polohová služba",spatialProximityAnalysisService:"418 Služba analýzy sousednosti",thematicProcessingService:"500 Geografické služby zpracování – tematické",thematicGoparameterCalculationService:"501 Služba výpočtu geografických parametrů",thematicClassificationService:"502 Služba tematické klasifikace",thematicFeatureGeneralizationService:"503 Služba generalizace vzhledů jevů",thematicSubsettingService:"504 Služba vytváření podmnožin",thematicSpatialCountingService:"505 Služba prostorového počítání",thematicChangeDetectionService:"506 Služba detekce změn",thematicGeographicInformationExtractionService:"507 Geografické vyjímání geografické informace",thematicImageProcessingService:"508 Služba zpracování obrazu",thematicReducedResolutionGenerationService:"509 Služba generování sníženého rozlišení",thematicImageManipulationService:"510 Služby manipulace s obrazy",thematicImageUnderstandingService:"511 Služby porozumění obrazům",thematicImageSynthesisService:"512 Služby syntézy obrazů",thematicMultibandImageManipulationService:"513 Služby manipulace s vícepásmovými obrazy",thematicObjectDetectionService:"514 Služba detekce objektů",thematicGeoparsingService:"515 Služba geografické syntaktické analýzy",thematicGeocodingService:"516 Služba geografického kódování",temporalProcessingService:"600 Geografické služby zpracování – časové",temporalReferenceSystemTransformationService:"601 Služba transformace časových referenčních systémů",temporalSubsettingService:"602 Služba vytváření podmnožin",temporalSamplingService:"603 Služba výběru",temporalProximityAnalysisService:"604 Služba analýz časové sousednosti",metadataProcessingService:"700 Geografické služby zpracování – metadata",metadataStatisticalCalculationService:"701 Služba statistických výpočtů",metadataGeographicAnnotationService:"702 Geografické anotační služby",comService:"800 Geografické komunikační služby",comEncodingService:"801 Služba kódování",comTransferService:"802 Služba přenosu",comGeographicCompressionService:"803 Geografická služba komprimace",comGeographicFormatConversionService:"804 Geografická služba převodu formátu",comMessagingService:"805 Služba zpracování zpráv",comRemoteFileAndExecutableManagement:"806 Služba vzdálených souborů a proveditelného řízení"},useLimitation:{noCondition:"Neplatí žádné podmínky",unknownCondition:"Neznámé podmínky",freeText:"Volný text"}});