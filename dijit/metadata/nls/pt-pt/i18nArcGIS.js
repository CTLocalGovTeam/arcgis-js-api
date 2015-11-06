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

define({documentTypes:{arcgis:{caption:"Metadados ArcGIS",editorCaption:"Metadados",description:""}},emptyOption:"Vazio",conditionals:{ISO19139A1_ROW4:"Se o Nível de Hierarquia de Conjunto de Dados é Metadados, uma Caixa Delimitadora Geográfica ou Descrição Geográfica é necessária.",ISO19139A1_ROW6:"Um Identificador de Conjunto de Dados ou Nome de Conjunto de Dados é necessário.",ISO19139A1_ROW7:"Se Outras Restrições é escolhido, Outras Restrições são necessárias.",ISO19139A1_ROW9:"Se o Âmbito não é um Conjunto de Dados ou Series um Nível Descrição é necessário.",ISO19139A1_ROW10_11_12:"Se Âmbito é um Conjunto de Dados ou Séries; um de Declaração, Processo de Passo, ou Fonte de Dados é necessário.",ISO19139A1_ROW15:"Se o Check Point Disponível é seleccionado, uma Descrição Check Point é necessária.",ISO19139A1_ROW18:"Se Distribuição está documentado um formato ou Distribuidor/Formato é necessário.",INSPIRE_AccessLimitation:" Pelo menos um código de restrição de acesso ou código de classificação de segurança jurídica é necessário. (INSPIRE)",INSPIRE_UseLimitation:" Pelo menos uma limitação de uso é necessária. (INSPIRE)",INSPIRE_ConformanceResult:"Um relatório Domínio de Consistência requer um Resultado de Conformidade. (INSPIRE)",INSPIRE_DomainConsistency:"Um relatório Domínio de Consistência é necessário. (INSPIRE)",INSPIRE_LineageStatement:"Se o Âmbito é Conjunto de Dados ou Series, uma Declaração de Linhagem é necessária. (INSPIRE).",FGDC_DescIfTemporal:"Uma Descrição é necessária para uma Extensão Temporal. (FGDC)",FGDC_Keywords:"Um Tópico, Tag ou Tema Palavra-Chave é necessária. (FGDC)",FGDC_Reports:"Relatórios de Omissão Integral e Coerência Conceptual são obrigatórios. (FGDC)",FGDC_Temporal:"Pelo menos uma Extensão Temporal é necessária. (FGDC)",NAP_Contact:"Um Endereço/Ponto de Entrega, número de telefone/voz ou Recurso Online/URL é necessário. (NAP)",GEN_BoundingBox:"Pelo menos uma Caixa Delimitadora Geográfica é necessária.",GEN_ReportResult:"Quer seja um resultado de Conformidade ou Quantitativo é necessário .",minLessThanMax:"O Valor Mínimo deve ser menor do que o valor máximo."},hints:{integerGreaterThanZero:"(insira um número inteiro > 0)",integerGreaterThanOne:"(insira um número inteiro > 1)",integer0To100:"(insira um número inteiro 0..100)",maxScale:"(insira um número inteiro > 0, e.g. 50000)",minScale:"(insira um número inteiro > 0, e.g. 150000000)",number0To100:"(insira um número 0..100)",number0To360:"(insira um número 0..360)",number90To90:"(insira um número -90..90)",listOfDoubles:"(inserir uma lista de números, use o espaço para separar)"},htmlEditor:{button:"Editar..."},sections:{overview:"Visão Geral",esri:"Esri",resource:"Recurso",reference:"Referência",content:"Conteúdo",distribution:"Distribuição",quality:"Qualidade",eainfo:"Campos",representation:"Representação",metadata:"Metadados"},metadataStyle:{caption:"Estilo Metadados ArcGIS",changeButton:"Alterar...",dialogTitle:"Escolher Estilo Metadados",updating:"Actualizar documento...","Item Description":"Descrição de Item","FGDC CSDGM Metadata":"Metadados FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"Especificação de Implementação Metadados ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Especificação de Implementação Metadados ISO 19139 GML3.2","INSPIRE Metadata Directive":"Directiva Metadados INSPIRE","North American Profile of ISO19115 2003":"Perfil Norte Americano do ISO19115 2003"},aggrInfo:{caption:"Informação Agregada",datasetHint:"Um Identificador de Conjunto de Dados ou Nome de Conjunto de Dados é necessário.",aggrDSIdent:"Identificador de Conjunto de Dados",aggrDSName:"Nome de Conjunto de Dados"},appSchInfo:{caption:"Esquema de Aplicação",asName:"Nome de Esquema",asSchLang:"Linguagem de Esquema",asCstLang:"Linguagem de Constrangimento",asAscii:"ASCII",asGraFile:"Ficheiro Gráfico",asGraFile_src:"Fonte de Ficheiro Gráfico",asSwDevFile:"Ficheiro de Desenvolvimento Software",asSwDevFile_src:"Fonte de Ficheiro de Desenvolvimento Software",asSwDevFiFt:"Formato de Ficheiro de Desenvolvimento Software"},citation:{caption:"Citação",section:{titlesAndDates:"Mosaicos & Datas",links:"URLs do",identifiers:"Identificadores",presentation:"Formulário",other:"Outro",edition:"Edição",series:"Séries"},conditionalDate:{caption:"Data de Citação",msg:"Uma das Datas de Criação, Data de Publicação Ou Data de Revisão é necessária.",msg_nap:"Uma data de citação é necessária."},resTitle:"Título",resAltTitle:"Título Alternativo",collTitle:"Título Colectivo",date:{createDate:"Data de Criação",pubDate:"Data de Publicação",reviseDate:"Data de Revisão",notavailDate:"Data Não Disponível",inforceDate:"Data Em Força",adoptDate:"Data Adoptada",deprecDate:"Data Preterida",supersDate:"Data Substituída"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identificador",identCode:"Código",identAuth:"Citação de Autoridade"},resEd:"Edição",resEdDate:"Data de Edição",datasetSeries:{seriesName:"Nome",issId:"Assunto",artPage:"Página"},otherCitDet:"Outros Detalhes",contactCaption:"Contacto de Citação"},cntAddress:{caption:"Endereço",delPoint:"Ponto de Entrega",city:"Cidade",adminArea:"Área Administrativa",postCode:"Código Postal",country:"País",eMailAdd:"Correio Eletrónico",addressType:{caption:"Tipo de Endereço",postal:"Código postal",physical:"Físico",both:"Ambos"}},cntOnlineRes:{caption:"Recurso Online",linkage:"URL",protocol:"Protocolo",appProfile:"Perfil de Aplicação",orName:"Nome",orDesc:"Descrição"},cntPhone:{caption:"Telefone",voiceNum:"Voz",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identificador",identCode:"Código",idCodeSpace:"Espaço de Código",idVersion:"Versão",identAuth:"Citação de Autoridade"},constraints:{caption:"Restrições",useLimit:"Limitação de Uso",general:{caption:"Geral"},legal:{caption:"Aviso Legal",accessConsts:"Restrições de acesso",useConsts:"Utilize restrições",othConsts:"Outras restrições"},security:{caption:"Segurança",classSys:"Sistema de Classificação",userNote:"Nota de Utilizador",handDesc:"Descrição Manipulação"}},contInfo:{caption:"Informações do conteúdo",section:{CovDesc:"Descrição de Cobertura",ImgDesc:"Descrição de Imagem",FetCatDesc:"Catálogo de Elemento"},attDesc:"Descrição de Atributo",covDim:{caption:"Faixa ou Banda",seqID:"Identificador de Sequência",seqIDType:"Tipo de Identificador de Sequência",dimDescrp:"Descritor"},RangeDim:{caption:"Dimensão de Alcance"},Band:{caption:"Banda",minVal:"Valor Mínimo",maxVal:"Valor Máximo",valUnit:"Valor de Unidades",pkResp:"Pico de Resposta",bitsPerVal:"Bits por Valor",toneGrad:"Gradação de Tom",sclFac:"Factor de Escala",offset:"Offset"},CovDesc:{caption:"Descrição de Cobertura",section:{description:"Descrição",rangesAndBands:"Intervalos e Bandas"}},ImgDesc:{caption:"Descrição de Imagem",section:{description:"Descrição",rangesAndBands:"Intervalos e Bandas"},illElevAng:"Iluminação Ângulo de Elevação",illAziAng:"Iluminação Ângulo de Azimute",cloudCovPer:"Percentagem de Nebulosidade",cmpGenQuan:"Qualidade de compressão",trianInd:"Indicador Triangulação?",radCalDatAv:"Disponibilidade de Dados de Calibração Radiométrica?",camCalInAv:"Disponibilidade de Câmara Informações de Calibração?",filmDistInAv:"Disponibilidade de Informações do Filme de Distorção?",lensDistInAv:"Disponibilidade de Informação de Distorção de Lentes?",imagQuCode:"Qualidade de Código",prcTypCde:"Nível de Código de Processamento"},FetCatDesc:{caption:"Catálogo de Elemento",section:{description:"Descrição",featureTypes:"Tipos de Elemento",citation:"Citação"},compCode:"Cumpre com o ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citação de Catálogo Elemento",catFetTyps:{caption:"Tipo de Elemento",genericName:"Nome",codeSpace:"Espaço de Código"}}},contact:{caption:"Contacto",section:{name:"Nome de Contacto",info:"Informação de Contacto",hoursAndInstructions:"Horas & Instruções"},conditionalName:{caption:"Nome de Contacto",msg:"Um de Nome Individual, Nome de Organização ou Nome de Posição é necessário.",msg_fgdc:"Um de Nome Individual ou Nome de Organização."},rpIndName:"Nome Individual",rpOrgName:"Nome da Organização",rpPosName:"Nome de Posição",rpCntInfo:"Informação de Contacto",cntHours:"Horas de Serviço",cntInstr:"Instruções de Contacto"},distInfo:{caption:"Informação de Distribuição",section:{format:"Formatar",distributor:"Distribuidor",transfer:"Opções de Transferência"},distFormat:{caption:"Formato de Distribuição",formatName:"Nome de Formato",formatVer:"Versão de Formato",formatAmdNum:"Número de Emenda",formatSpec:"Especificação",fileDecmTech:"Técnica de Descompressão",formatInfo:"Conteúdo de Informação"},distributor:{caption:"Distribuidor"},distTranOps:{caption:"Opções de Transferência Digital",section:{unitsAndSize:"Unidades"},unitsODist:"Unidades de Distribuição",transSize:"Tamanho de Transferência",offLineMed:{caption:"Médio Off-line",medDensity:"Densidade",medDenUnits:"Unidades de Densidade",medVol:"Volumes",medNote:"Nota Média"}},distorOrdPrc:{caption:"Processo de Ordenação",resFees:"Honorários",planAvDtTm:"Data Disponível",planAvTmPd:{caption:"Período de Tempo Disponível",tmBegin:"Data/Hora de Começo",tmEnd:"Data/Hora de Fim"},ordInstr:"Instruções de Ordenamento",ordTurn:"Inversão de Marcha"}},dqInfo:{caption:"Qualidade de Dados",section:{scope:"Âmbito",report:"Relatório",lineage:"Linhagem"},dqScope:{section:{level:"Nível",extent:"Estender"},scpLvl:"Nível de Âmbito",scpLvlDesc:"Descrição de Nível",scpExt:"Extensão de Âmbito"},report:{section:{measure:"Medida",evaluation:"Avaliação",result:"Resultado",conformance:"Conformidade"},measDesc:"Discrição de Medida",measName:"Nome de Medida",measDateTm:"Data de Medida",measId:"Identificador de Medida",evalMethDesc:"Método de Avaliação",evalProc:"Processo de Citação",ConResult:{caption:"Resultado de Conformidade",conExpl:"Explicação",conSpec:"Especificação",conPass:{caption:"Grau",_1:"Conformidade",_0:"Não Conformidade"}},QuanResult:{caption:"Resultado Quantitativo",quanVal:"Valor",quanValType:"Tipo de Valor",quanValUnit:"Valor de Unidades",errStat:"Erro de Estatística"}},dataLineage:{section:{statement:"Afirmação",dataSource:"Fonte de Dados",prcStep:"Etapa de Processo"},statement:"Declaração de Linhagem",dataSource:{caption:"Fonte de Dados",section:{description:"Descrição",srcRefSys:"Sistema de Referência",srcExt:"Estender",srcCitatn:"Citação"},srcDesc:"Descrição de Fonte",srcScale:{rfDenom:"Denominador de Escala"},srcRefSys:"Sistema de Referência de Fonte",srcExt:"Extensão de Fonte",srcCitatn:"Citação de Fonte"},prcStep:{caption:"Etapa de Processo",section:{description:"Descrição",stepProc:"Processador",stepSrc:"Fonte de Dados"},stepDesc:"Descrição de Processo",stepRat:"Racional",stepDateTm:"Data do Passo de Processo",stepProc:"Processador",stepSrc:"Fonte de Dados"}}},eainfo:{caption:"Informação de Entidade e Atributo",section:{detailed:"Detalhes",overview:"Visão Geral"},detailed:{caption:"Detalhe de Entidade e Informação",section:{enttyp:"Entidade",attr:"Atributos"},enttyp:{caption:"Tipo de Entidade",enttypl:"Rótulo",enttypt:"Objecto",enttypc:"Contagem",enttypd:"Definição",enttypds:"Fonte de Definição"},attr:{caption:"Atributo",section:{description:"Descrição",value:"Valor",domain:"Domínio"},attrlabl:"Rótulo",attalias:"Nome Alternativo",attrdef:"Definição",attrdefs:"Fonte de Definição",attrtype:"Tipo",attwidth:"Largura",atprecis:"Precisão",attscale:"Escala",atindex:"Indexação",attrvai:{attrva:"Valor de Explicação",attrvae:"Valor de Precisão"},attrmfrq:"Valor de Frequência de Medição",begdatea:"A partir da data de Valores",enddatea:"Data Final de Valores",attrdomv:{caption:"Domínio",edom:{caption:"Enumerado",edomv:"Valor",edomvd:"Definição",edomvds:"Fonte de Definição"},rdom:{caption:"Intervalo",rdommin:"Valor Mínimo",rdommax:"Valor Máximo",rdommean:"Média",rdomstdv:"Desvio Padrão",attrunit:"Unidades",attrmres:"Resolução de Medida"},codesetd:{caption:"Codeset",codesetn:"Nome",codesets:"Fonte"},udom:{caption:"Irrepresentável"}}}},overview:{caption:"Visão Geral",eaover:"Resumo",eadetcit:"Citação"}},extent:{caption:"Estender",section:{description:"Descrição",geographic:"Geográficos",temporal:"Temporal",vertical:"Vertical"},exDesc:"Descrição de Extensão",geoEle:{caption:"Extensão Geográfica",GeoBndBox:{caption:"Caixa Delimitadora",esriExtentType:"Extensão é para pesquisa?",exTypeCode:"Extensão contem o recurso?",westBL:"Longitude Delimitadora Oeste",eastBL:"Longitude Delimitadora Este",southBL:"Longitude Delimitadora Sul",northBL:"Longitude Delimitadora Norte"},GeoDesc:{caption:"Descrição Geográfica",exTypeCode:"Descrição contem o recurso?",identCode:"Código"}},tempEle:{caption:"Extensão Temporal",TM_Period:"Período de Tempo",TM_Instant:"Instante de Tempo",tmPosition:"Data",tmBegin:"Data de Começo",tmEnd:"Data de Fim"},vertEle:{caption:"Extensão Vertical",vertMinVal:"Valor Mínimo",vertMaxVal:"Valor Máximo"}},graphOver:{caption:"Navegar Gráfico",bgFileName:"Navegar URL de Gráfico",bgFileDesc:"Navegar Descrição de Gráfico",bgFileType:"Navegar Tipo de Ficheiro Gráfico"},keywords:{caption:"Palavras Chave",section:{topicCategory:"Tópico",searchKeys:"Palavras-chave",themeKeys:"Tema",placeKeys:"Local",tempKeys:"Temporal",discKeys:"Disciplina",stratKeys:"Estrato",productKeys:"Produto",subTopicCatKeys:"Sub Tópico",otherKeys:"Outro"},delimited:"Palavras Chave",searchKeys:"Palavras-chave",themeKeys:"Palavras Chave Tema",placeKeys:"Palavras Chave Lugar",tempKeys:"Palavras Chave Temporais",discKeys:"Palavras Chave Disciplina",stratKeys:"Palavras Chave Estrato",productKeys:"Palavras Chave Produto",subTopicCatKeys:"Palavras Chave Sub Tópico",otherKeys:"Outras Palavras Chave",thesaName:"Citação Enciclopédia",thesaLang:"Linguagem Enciclopédia"},locales:{caption:"Locais",locale:"Local",resTitle:"Título",idAbs:"Resumo"},maintenance:{caption:"Manutenção",section:{frequency:"Frequência",scope:"Âmbito",note:"Nota"},usrDefFreq:"Frequência Costume",dateNext:"Próxima Actualização",maintScp:"Actualização Âmbito",upScpDesc:{caption:"Descrição Âmbito",attribSet:"Atributos",attribIntSet:"Instancias de Atributo",featSet:"Utilidades",featIntSet:"Instancias de Elemento",datasetSet:"Conjunto de Dados",other:"Outras Instancias"},maintNote:"Nota de Manutenção",maintCont:"Contacto de manutenção"},metadata:{section:{profile:"Perfil",details:"Âmbito"},mdFileID:"Identificador de Ficheiro",mdParentID:"Identificador de Parente",datasetURI:"URI Conjunto de Dados",dataSetFn:"Função Conjunto de Dados",mdDateSt:"Data Metadados",mdLang:"Linguagem Metadados",mdChar:"Conjunto de Caracteres",mdHrLv:"Nível Hierárquico",mdHrLvName:"Nome de Nível Hierárquico",mdContact:"Contacto Metadados",mdMaint:"Manutenção Metadado",mdConst:"Constringir Metadado"},porCatInfo:{caption:"Citação Retrato"},refSysInfo:{caption:"Referência Espacial"},resource:{section:{citation:"Citação",details:"Detalhes",description:"Descrição",keywords:"Palavras Chave",status:"Estado",resolution:"Resolução",representation:"Representação",browse:"Navegar Gráfico",format:"Formatar",usage:"Utilização",aggregateInfo:"Agregação",additional:"Adicional"},idAbs:"Descrição (Abstracto)",idPurp:"Resumo (Propósito)",suppInfo:"Informações Complementares",idCredit:"Créditos",envirDesc:"Ambiente de Processamento",dataLang:"Linguagem de Recurso",dataExt:"Extensão de Recurso",idPoC:"Ponto de Contacto",resMaint:"Manutenção de Recurso",resConst:"Restrições de Recurso",dsFormat:"Formato de Recurso",dataScale:{caption:"Escala de Dados",equScale:"Resolução de Escala",scaleDist:"Distancia de Resolução",scaleDist_value:"Distância"},idSpecUse:{caption:"Uso de Recurso",specUsage:"Uso Especifico",usageDate:"Data de Uso",usrDetLim:"Limitações",usrCntInfo:"Contacto de Uso"}},service:{caption:"Serviço",svType:"Tipo de Serviço",svType_Name:"Nome",svAccProps:"Propriedades de Acesso",svCouplRes:{caption:"Recurso Acoplado",svOpName:"Nome de Operação",svResCitId:"Identificador de Recurso"},svCoupleType:"Tipo de Acoplamento"},scaleRange:{caption:"Amplitude de Escala",maxScale:"Escala Máxima",minScale:"Escala Mínima"},spatRepInfo:{caption:"Representação Espacial",section:{dimension:"Dimensão",parameters:"Parâmetros"},numDims:"Número de Dimensões",tranParaAv:"Disponibilidade de Parâmetro de Transformação?",axisDimension:{caption:"Dimensão",dimSize:"Dimensão",dimResol:{caption:"Resolução",_value:"Valor de Resolução",uom:"Unidades de Resolução"}},VectSpatRep:{caption:"Vector",geometObjs:"Objectos Geométricos",geoObjCnt:"Contagem de objectos"},GridSpatRep:{caption:"Grelha"},Georect:{caption:"Georectified",section:{centerPoint:"Ponto Central",cornerPts:"Pontos de Cantos"},chkPtAv:"Disponibilidade de Validar Ponto?",chkPtDesc:"Descrição de Validar Ponto",ptInPixel:"Ponto em Pixel",transDimDesc:"Descrição de Transformação de Dimensão",transDimMap:"Mapeamento de Transformação de Dimensão",cornerPts:{caption:"Ponto do Canto",pos:"Posição",gmlDesc:"Descrição",gmlDescRef:"Referência",gmlIdent:"Identificador",codeSpace:"Identificador Codespace"}},Georef:{caption:"Georeferenceable",ctrlPtAv:"Disponibilidade de Ponto de Controlo?",orieParaAv:"Disponibilidade de Parâmetro de Orientação?",orieParaDs:"Descrição de Parâmetro de Orientação",georefPars:"Parâmetros Georeferenced",paraCit:"Citação de Parâmetro"},Indref:{caption:"Indirecta"}},booleanOptions:{_false:"Não",_true:"Sim"},codelist:{CountryCode:"País",LanguageCode:"Idioma",MonetaryUnits:"Unidades Monetárias",MonetaryUnits_empty:"Nenhuma moeda universal",PresentationForm:"FGDC Formulário de Apresentação de Dados Geospaciais",CI_PresentationFormCode:"Formulário de Apresentação",CI_RoleCode:"Papel",CI_OnLineFunctionCode:"Função",IMS_ContentType:"Tipo de Conteúdo",DQ_ElementDimension:"Dimensão",DQ_ElementType:"Tipo de Relatório",DQ_EvaluationMethodTypeCode:"Tipo de Avaliação",DS_AssociationTypeCode:"Tipo de Associação",DS_InitiativeTypeCode:"Tipo de Iniciativa",LI_SourceType:"Tipo de Fonte",MD_CellGeometryCode:"Célula de Geometria",MD_CharacterSetCode:"Conjunto de Caracteres",MD_ClassificationCode:"Classificação",MD_CoverageContentTypeCode:"Tipo de Conteúdo",MD_DimensionNameTypeCode:"Tipo de Dimensão",MD_GeometricObjectTypeCode:"Tipo de Objecto Geométrico",MD_ImagingConditionCode:"Condição de Imagem",MD_MaintenanceFrequenceCode:"Frequência de Actualização",MD_MediumFormatCode:"Formato de Código",MD_MediumNameCode:"Nome Médio",MD_PixelOrientationCode:"Orientação Pixel",MD_ProgressCode:"Estado",MD_RestrictionCode:"Código de Restrição",MD_ScopeCode:"Âmbito",MD_SpatialRepresentationTypeCode:"Tipo de Representação Espacial",MD_TopicCategoryCode:"Categoria de Tópico",MD_TopologyLevelCode:"Nível de Topologia",RS_Dimension:"Dimensão",SV_CouplingType:"Tipo de Acoplamento",UCUM:"Unidades",UCUM_Length:"Unidades de Distância"}});