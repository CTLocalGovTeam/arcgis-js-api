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

define({documentTypes:{data:{caption:"ISO 19115 (datos)",description:""},service:{caption:"ISO 19119 (Servicio)",description:""},gmi:{caption:"ISO 19115-2 (Imágenes y datos de cuadrícula)",description:""}},general:{reference:"Referencia"},sections:{metadata:"Metadatos",identification:"Identificación",distribution:"Distribución",quality:"Calidad",acquisition:"Adquisición"},metadataSection:{identifier:"Identificador",contact:"Contacte",date:"fecha",standard:"Estándar",reference:"Referencia"},identificationSection:{citation:"Citación",description:"Descripción",contact:"Contacte",thumbnail:"Miniatura",keywords:"Palabras Claves",constraints:"Restricciones",resource:"Recurso",resourceTab:{representation:"Representación",language:"Idioma",classification:"Clasificación",extent:"Extensión"},serviceResourceTab:{serviceType:"Tipo de servicio",extent:"Extensión",couplingType:"Tipo de acoplamiento",operation:"Operación",operatesOn:"Opera en"}},distributionSection:{},qualitySection:{scope:"Alcance",conformance:"Conformidad",lineage:"Linaje"},acquisitionSection:{requirement:"Requisito",objective:"Objetivo",instrument:"Instrumento",plan:"Plano",operation:"Operación",platform:"Plataforma",environment:"Entorno"},AbstractMD_Identification:{sAbstract:"Resumen",purpose:"Propósito",credit:"Créditos",pointOfContact:"Punto de contacto",resourceMaintenance:"Mantenimiento",graphicOverview:"Vista general gráfica",descriptiveKeywords:"Recopilación de palabras clave",resourceConstraints:"Restricciones"},CI_Address:{deliveryPoint:"Punto de entrega",city:"Ciudad",administrativeArea:"Área administrativa",postalCode:"Código postal",country:"País",electronicMailAddress:"Dirección de correo electrónico"},CI_Citation:{title:"Título",alternateTitle:"Título alternativo",identifier:"Identificador de recursos únicos",resource:{title:"Título de recurso",date:"Fecha de recurso"},specification:{title:"Título de especificación",date:"Fecha de especificación"}},CI_Contact:{phone:"Teléfono",address:"Dirección",onlineResource:"Recurso online",hoursOfService:"Horas de servicio",contactInstructions:"Instrucciones de contacto"},CI_Date:{date:"fecha",dateType:"Tipo de datos"},CI_DateTypeCode:{caption:"Tipo de datos",creation:"Fecha de creación",publication:"Fecha de publicación",revision:"Fecha de revisión"},CI_OnLineFunctionCode:{caption:"Función",download:"Descargar",information:"Información",offlineAccess:"Acceso fuera de línea",order:"Orden",search:"Búsqueda"},CI_OnlineResource:{caption:"Recurso online",linkage:"URL",protocol:"Protocolo",applicationProfile:"Perfil de aplicación",name:"Nombre",description:"Descripción",sFunction:"Función"},CI_ResponsibleParty:{caption:"Punto de contacto",individualName:"Nombre del individuo",organisationName:"Nombre de la organización",positionName:"Nombre del cargo",contactInfo:"Información de contacto",role:"Rol"},CI_RoleCode:{caption:"Rol",resourceProvider:"Proveedor del recurso",custodian:"Custodio",owner:"Propietario",user:"Usuario",distributor:"Distribuidor",originator:"Creador",pointOfContact:"Punto de contacto",principalInvestigator:"Investigador principal",processor:"Procesador",publisher:"Editor",author:"Autor"},CI_Telephone:{voice:"Voz",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Servicios web"},DQ_ConformanceResult:{caption:"Resultado de conformidad",explanation:"Explicación",degree:{caption:"Grado",validationPerformed:"Validación realizada",conformant:"Conforme",nonConformant:"No conforme"}},DQ_DataQuality:{report:"Informe"},DQ_Scope:{level:"Alcance (la información de calidad se aplica a)",levelDescription:"Descripción del nivel"},EX_Extent:{caption:"Extensión",description:"Descripción",geographicElement:"Extensión espacial",temporalElement:"Extensión temporal",verticalElement:"Extensión vertical"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitud de delimitación hacia el oeste",eastBoundLongitude:"Longitud de delimitación hacia el este",southBoundLatitude:"Latitud de delimitación hacia el sur",northBoundLatitude:"Latitud de delimitación hacia el norte"},EX_GeographicDescription:{caption:"Descripción geográfica"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Fecha de inicio",endPosition:"Fecha de fin"}},EX_VerticalExtent:{minimumValue:"Valor Mínimo",maximumValue:"Valor Máximo",verticalCRS:"CRS vertical"},Length:{caption:"de polilínea",uom:"Unidades de medida",km:"Kilómetros",m:"Metros",mi:"Millas",ft:"Pies"},LI_Lineage:{statement:"Declaración de linaje"},MD_BrowseGraphic:{fileName:"Examinar URL de gráfico",fileDescription:"Buscar captura de gráfico",fileType:"Examinar tipo de gráfico"},MD_ClassificationCode:{unclassified:"Sin clasificar",restricted:"Restringido",confidential:"Confidencial",secret:"Secreto",topSecret:"Alto secreto"},MD_Constraints:{caption:"Restricciones de uso",useLimitation:"Límite de uso"},MD_DataIdentification:{spatialRepresentationType:"Tipo de representación espacial",spatialResolution:"Resolución espacial",language:"Lenguaje de recurso",supplementalInformation:"Suplementario"},MD_DigitalTransferOptions:{onLine:"On-line"},MD_Distribution:{distributionFormat:"Formato de distribución",transferOptions:"Opciones de transferencia"},MD_Format:{name:"Nombre del Formato",version:"Versión de formato"},MD_Identifier:{caption:"URI",identifierCaption:"Identificador",code:"Código"},MD_Keywords:{delimitedCaption:"Palabras Claves",thesaurusName:"Diccionario asociado"},MD_KeywordTypeCode:{caption:"Tipo de palabra clave",discipline:"Disciplina",place:"Lugar",stratum:"Estrato",temporal:"Temporal",theme:"Tema"},MD_LegalConstraints:{caption:"Restricciones legales",accessConstraints:"Restricciones de acceso",useConstraints:"Restricciones de uso",otherConstraints:"Otras restricciones"},MD_MaintenanceFrequencyCode:{caption:"Frecuencia",continual:"Continuo",daily:"Diariamente",weekly:"Semanalmente",fortnightly:"Quincenalmente",monthly:"Mensualmente",quarterly:"Trimestralmente",biannually:"Bianualmente",annually:"Anualmente",asNeeded:"Según sea necesario",irregular:"Irregular",notPlanned:"No planificado",unknown:"Desconocido"},MD_Metadata:{caption:"Metadatos",fileIdentifier:"Identificador de archivos",language:"Lenguaje de metadatos",hierarchyLevel:"Nivel de jerarquía",hierarchyLevelName:"Nombre de nivel de jerarquía",contact:"Contacto de metadatos",dateStamp:"Fecha de metadatos",metadataStandardName:"Nombre estándar de metadatos",metadataStandardVersion:"Versión estándar de metadatos",referenceSystemInfo:"Sistema de Referencia",identificationInfo:"Identificación",distributionInfo:"Distribución",dataQualityInfo:"Calidad"},MD_ProgressCode:{caption:"MD_ProgressCode",completed:"Completado",historicalArchive:"Archivo histórico",obsolete:"Obsoleto",onGoing:"En curso",planned:"Planeado",required:"Obligatorio",underDevelopment:"En desarrollo"},MD_RepresentativeFraction:{denominator:"Denominador"},MD_Resolution:{equivalentScale:"Escala equivalente",distance:"Distancia"},MD_RestrictionCode:{copyright:"Derechos de autor",patent:"Patente",patentPending:"Patente pendiente",trademark:"Marca registrada",license:"Licencia",intellectualPropertyRights:"Derechos de propiedad intelectual",restricted:"Restringido",otherRestrictions:"Otras restricciones"},MD_ScopeCode:{attribute:"Atributo",attributeType:"Tipo de atributo",collectionHardware:"Hardware de adquisición",collectionSession:"Sesión de colección",dataset:"Dataset",series:"Series",nonGeographicDataset:"Dataset no geográfico",dimensionGroup:"Grupo de dimensiones",feature:"Entidad",featureType:"Tipo de entidad",propertyType:"Tipo de propiedad",fieldSession:"Sesión de campo",software:"Software",service:"Servicio",model:"Modelo",tile:"Entramado"},MD_ScopeDescription:{attributes:"Atributos",features:"Características",featureInstances:"Instancias de entidad",attributeInstances:"Instancias de atributo",dataset:"Dataset",other:"Otro"},MD_SecurityConstraints:{caption:"Restricciones de seguridad",classification:"Clasificación",userNote:"Nota del usuario",classificationSystem:"Sistema de clasificación",handlingDescription:"Descripción del manejo"},MD_SpatialRepresentationTypeCode:{caption:"Tipo de representación espacial",vector:"Vector",grid:"Cuadrícula",textTable:"Tabla de texto",tin:"TIN",stereoModel:"Modelo estéreo",video:"Vídeo"},MD_TopicCategoryCode:{caption:"Categoría de tema",boundaries:"Límites administrativos y políticos",farming:"Agricultura y ganadería",climatologyMeteorologyAtmosphere:"Atmósfera y clima",biota:"Biología y ecología",economy:"Negocios y economía",planningCadastre:"Catastro",society:"Cultura, sociedad y demografía",elevation:"Elevación y productos derivados",environment:"Medioambiente y protección",structure:"Infraestructuras y estructuras",geoscientificInformation:"Geología y geofísica",health:"Salud humana y enfermedades",imageryBaseMapsEarthCover:"Imágenes y mapas base",inlandWaters:"Recursos de aguas continentales",location:"Ubicaciones y redes geodésicas",intelligenceMilitary:"Asuntos militares",oceans:"Océanos y estuarios",transportation:"Redes de transporte",utilitiesCommunication:"Suministros y comunicación"},MI_ContextCode:{caption:"Contexto",acquisition:"Adquisición",pass:"Aprobado",wayPoint:"Punto de referencia"},MI_EnvironmentalRecord:{caption:"Condiciones ambientales",averageAirTemperature:"Temperatura media del aire",maxRelativeHumidity:"Humedad relativa máxima",maxAltitude:"Altitud máxima",meterologicalConditions:"Condiciones meteorológicas"},MI_Event:{identifier:"Identificador de evento",time:"Hora",expectedObjectiveReference:"Objetivo esperado (identificador de objetivo)",relatedSensorReference:"Sensor relacionado (identificador de instrumento)",relatedPassReference:"Paso relacionado (identificador de paso de plataforma)"},MI_GeometryTypeCode:{point:"Punto",linear:"Lineal",areal:"Área",strip:"Banda"},MI_Instrument:{citation:"Citación de instrumento",identifier:"Identificador de instrumento",sType:"Tipo de instrumento",description:"Descripción de instrumento",mountedOn:"Montado en",mountedOnPlatformReference:"Montado en (identificador de plataforma)"},MI_Metadata:{acquisitionInformation:"Adquisición"},MI_Objective:{caption:"Objetivo",identifier:"Identificador de objetivo",priority:"Prioridad de objetivo",sFunction:"Función de objetivo",extent:"Extensión",pass:"Paso de plataforma",sensingInstrumentReference:"Instrumento de sensor (identificador de instrumento)",objectiveOccurrence:"Eventos",sections:{identification:"Identificación",extent:"Extensión",pass:"Aprobado",sensingInstrument:"Instrumento de sensor",objectiveOccurrence:"Eventos"}},MI_ObjectiveTypeCode:{caption:"Tipo (técnica de captura para objetivo)",instantaneousCollection:"Captura instantánea",persistentView:"Vista persistente",survey:"Medición"},MI_Operation:{caption:"Operación",description:"Descripción de la operación",citation:"Citación de operación",identifier:"Identificador de operación",status:"Estado de operación",objectiveReference:"Objetivo relacionado (identificador de objetivo)",planReference:"Plan relacionado (identificador de plan)",significantEventReference:"Evento relacionado (identificador de evento)",platformReference:"Plataforma relacionada (identificador de plataforma)",sections:{identification:"Identificación",related:"Relacionado"}},MI_OperationTypeCode:{caption:"Tipo de operación",real:"Real",simulated:"Simulado",synthesized:"Sintetizado"},MI_Plan:{sType:"Geometría de muestreo para captura de datos",status:"Estado de plan",citation:"Citación de autoridad que solicita captura",satisfiedRequirementReference:"Requisito satisfecho (identificador de requisito)",operationReference:"Operación relacionada (identificador de operación)"},MI_Platform:{citation:"Citación de plataforma",identifier:"Identificador de plataforma",description:"Descripción de plataforma compatible con instrumento",sponsor:"Organización patrocinadora de plataforma",instrument:"Instrumentos montados en plataforma",instrumentReference:"Identificador de instrumento",sections:{identification:"Identificación",sponsor:"Patrocinador",instruments:"Instrumentos"}},MI_PlatformPass:{identifier:"Identificador de paso de plataforma",extent:"Extensión de paso de plataforma",relatedEventReference:"Evento relacionado (identificador de evento)"},MI_PriorityCode:{critical:"Crítico",highImportance:"Importancia alta",mediumImportance:"Importancia media",lowImportance:"Importancia baja"},MI_RequestedDate:{requestedDateOfCollection:"Fecha de solicitud de captura",latestAcceptableDate:"Última fecha aceptable"},MI_Requirement:{caption:"Requisito",citation:"Citación para material de orientación de requisitos",identifier:"Identificador de requisito",requestor:"Solicitante de requisito",recipient:"Destinatario de resultados de requisito",priority:"Prioridad de requisito",requestedDate:"Fecha solicitada",expiryDate:"Fecha de caducidad",satisifiedPlanReference:"Plan satisfecho (identificador de plan)",sections:{identification:"Identificación",requestor:"Solicitante",recipient:"Destinatario",priorityAndDates:"Prioridad y fechas",satisifiedPlan:"Plan satisfecho"}},MI_SequenceCode:{caption:"Secuencia",start:"Inicio",end:"Terminar",instantaneous:"Instantáneo"},MI_TriggerCode:{caption:"Desencadenador",automatic:"Automático",manual:"Manual",preProgrammed:"Preprogramado"},ObjectReference:{uuidref:"Referencia UUID",xlinkref:"Referencia a URL"},RS_Identifier:{caption:"Espacio de código plus de Id.",code:"Código",codeSpace:"Espacio del código"},SV_CouplingType:{loose:"Flexible",mixed:"Mixto",tight:"Ajustado"},SV_OperationMetadata:{operationName:"Nombre de operación",DCP:"DCP",connectPoint:"Punto de conexión"},SV_ServiceIdentification:{serviceType:"Tipo de servicio",couplingType:"Tipo de acoplamiento",containsOperations:"Metadatos de operación",operatesOn:"Opera en"},TM_Primitive:{indeterminatePosition:"Posición indeterminada",indeterminates:{before:"Antes",after:"Después",now:"Ahora",unknown:"Desconocido"}},gemet:{concept:{gemetConceptKeyword:"Palabra clave del concepto GEMET",tool:"Buscar...",dialogTitle:"GEMET - Palabra clave de concepto",searchLabel:"Buscar:",searchTip:"Buscar en GEMET"},theme:{tool:"Buscar...",dialogTitle:"GEMET - Tema de datos de Inspire"},ioerror:"Se produjo un error al comunicar con el servicio de GEMET: {url}",searching:"Buscando en GEMET...",noMatch:"No se encontraron resultados coincidentes.",languages:{bg:"Búlgaro",cs:"Checo",da:"Danés",nl:"Holandés",en:"Inglés",et:"Estonio",fi:"Finlandés",fr:"Francés",de:"Alemán",el:"Griego",hu:"Húngaro",ga:"Gaélico (Irlandés)",it:"Italiano",lv:"Letón",lt:"Lituano",mt:"Maltés",pl:"Polaco",pt:"Portugués",ro:"Rumano",sk:"Eslovaco",sl:"Esloveno",es:"Español",sv:"Sueco"}}});