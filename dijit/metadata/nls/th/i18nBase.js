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

define({general:{cancel:"ยกเลิก",close:"ปิด",none:"ไม่มีเลย",ok:"ตกลง",other:"อื่นๆ",stamp:"กำหนด",now:"ตอนนี้",choose:"เลือกหนึ่งอย่าง:"},editor:{noMetadata:"ไม่มีข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) สำหรับไอเท็มนี้",xmlViewOnly:"ประเภทของข้อมูลเมตาที่เกี่ยวข้องกับไอเท็มนี้ ไม่ได้รับการสนับสนุนให้แก้ไขได้ ข้อมูลเมตาจะต้องอยู่ในรูปแบบของ ArcGIS",editorDialog:{caption:"Metadata",captionPattern:"ข้อมูลที่ใช้แสดงรายละเอียดสำหรับ {title}"},primaryToolbar:{view:"วิว",viewXml:"แสดง XML",edit:"แก้ไข",initializing:"กำลังโหลด...",startingEditor:"กำลังเปิดเครื่องมือแก้ไข…",loadingDocument:"กำลังโหลดเอกสาร…",updatingDocument:"กำลังปรับปรุงเอกสาร…",generatingView:"กำลังสร้างมุมมองแสดงผล...",errors:{errorGeneratingView:"เกิดข้อผิดพลาดขึ้นระหว่างการสร้างมุมมองแสดงผล",errorLoadingDocument:"เกิดข้อผิดพลาดขึ้นระหว่างการโหลดเอกสาร"}},changesNotSaved:{prompt:"เอกสารของคุณมีการเปลี่ยนแปลง โดยยังไม่ได้บันทึก",dialogTitle:"ปิดเครื่องมือแก้ไข ข้อมูลที่ใช้แสดงรายละเอียด",closeButton:"ปิด"},download:{caption:"ดาวน์โหลด",dialogTitle:"ดาวน์โหลด",prompt:"กดที่นี่เพื่อดาวน์โหลดไฟล์ของคุณ"},load:{caption:"เปิด",dialogTitle:"เปิด",typeTab:"เอกสารใหม่",fileTab:"เปิดไฟล์",templateTab:"ต้นแบบ",itemTab:"ไอเท็มของคุณ",filePrompt:"เลือกไฟล์ ArcGIS Metadata XML ในเครื่อง โดยข้อมูลเมตาจะต้องอยู่ในรูปแบบของ ArcGIS",templatePrompt:"สร้างข้อมูลเมตา",pullItem:"กรอกข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ตามรายการของไอเท็ม",importWarning:"ไฟล์ที่เลือกจะไม่อยู่ในรูปแบบของ ArcGIS ข้อมูลเมตาที่ต้องการอัปโหลดจะต้องอยู่ในรูปแบบของ ArcGIS",loading:"กำลังโหลด...",noMetadata:"ข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) สามารถสร้างขึ้นสำหรับไอเท็มนี้ได้ ด้วยการเลือกหนึ่งในรายการต่อไปนี้",unrecognizedMetadata:"ประเภทของข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ที่เกี่ยวของกับไอเท็มนิ้ ไม่สามารถใช้งานด้วยเครื่องมือแก้ไขได้ ข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ที่ใช้งานได้ สามารถสร้างได้โดยเลือกหนึ่งในรายการต่อไปนี้",errorLoading:"เกิดข้อผิดพลาดขึ้นระหว่างการโหลด",warnings:{badFile:"ไฟล์ที่เลือกไม่สามารถโหลดได้",notAnXml:"ไฟล์ที่เลือกไม่ใช่ไฟล์ XML",notSupported:"ไม่สามารถใช้ไฟล์ประเภทนี้ได้"}},save:{caption:"บันทึก",dialogTitle:"บันทึกข้อมูลที่ใช้แสดงรายละเอียด",working:"กำลังบันทึกข้อมูลที่ใช้แสดงรายละเอียด...",errorSaving:"เกิดข้อผิดพลาดขึ้น ข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ของคุณยังไม่ถูกบันทึก",saveDialog:{pushCaption:"ปรับปรุงการเปลี่ยนแปลงไปที่ไอเท็มของคุณ"}},saveAndClose:{caption:"บันทึก & ปิด"},saveDraft:{caption:"บันทึกลงเครื่อง",dialogTitle:"บันทึกลงเครื่อง"},validate:{caption:"การตรวจสอบ",dialogTitle:"การตรวจสอบ",docIsValid:"เอกสารของคุณถูกต้อง"},del:{caption:"ลบ",dialogTitle:"ลบข้อมูลที่ใช้แสดงรายละเอียด",prompt:"คุณต้องการลบข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ใช่หรือไม่?",working:"กำลังลบข้อมูลที่ใช้แสดงรายละเอียด...",errorDeleting:"เกิดข้อผิดพลาดขึ้น ข้อมูลที่ใช้แสดงรายละเอียด (เมตาดาต้า) ของคุณยังไม่ถูกลบ"},transform:{caption:"แปลง",dialogTitle:"แปลงเป็น",prompt:"",working:"กำลังแปลง...",errorTransforming:"เกิดข้อผิดพลาดขึ้นระหว่างการแปลงเอกสารของคุณ"},errorDialog:{dialogTitle:"มีข้อผิดพลาด"}},arcgis:{portal:{metadataButton:{caption:"Metadata"}}},calendar:{button:"ปฏิทิน…",title:"ปฏิทิน"},geoExtent:{button:"กำหนดขอบเขตทางภูมิศาสตร์...",title:"ขอบเขตทางภูมิศาสตร์",navigate:"เลื่อน",draw:"วาดสี่เหลี่ยมผืนผ้า",drawHint:"กดลงเพื่อเริ่มและปล่อยให้ไปจุดสุดท้าย"},hints:{date:"(yyyy หรือ yyyy-mm หรือ yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy หรือ yyyy-mm หรือ yyyy-mm-dd หรือ yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(ใช้จุลภาค หรือ ขึ้นบรรทัดใหม่เพื่อแยก)",fgdcDate:"(yyyy หรือ yyyy-mm หรือ yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(กรอกเลขจำนวนเต็ม)",latitude:"(องศาทศนิยม)",longitude:"(องศาทศนิยม)",number:"(กรอกตัวเลข)",numberGreaterThanZero:"(กรอกตัวเลข > 0)"},isoTopicCategoryCode:{caption:"ประเภทของหัวข้อ",boundaries:"ขอบเขตการบริหารและการปกครอง",farming:"เกษตร และฟาร์ม",climatologyMeteorologyAtmosphere:"บรรยากาศ และภูมิอากาศ",biota:"ชีววิทยา และนิเวศวิทยา",economy:"ธุรกิจ และเศรษฐกิจ",planningCadastre:"ที่ดิน",society:"วัฒนธรรม สังคม และประชากรศาสตร์",elevation:"ข้อมูลความสูง และข้อมูลที่เกี่ยวข้อง",environment:"สิ่งแวดล้อมและการอนุรักษ์",structure:"สิ่งอำนวยความสะดวกและสิ่งปลูกสร้าง",geoscientificInformation:"ธรณีวิทยาและธรณีฟิสิกส์",health:"สุขภาพของมนุษย์ และโรคภัยไข้เจ็บ",imageryBaseMapsEarthCover:"ภาพถ่ายและแผนที่ฐาน",inlandWaters:"ทรัพยากรน้ำจืด",location:"สถานที่และโครงข่ายหมุดรังวัด",intelligenceMilitary:"ทหาร",oceans:"มหาสมุทร และบริเวณปากแม่น้ำ",transportation:"โครงข่ายการขนส่ง",utilitiesCommunication:"สาธารณูปโภค และการสื่อสาร"},multiplicity:{moveElementDown:"ย้ายส่วนนี้ลง",moveElementUp:"ย้ายส่วนนี้ขึ้น",removeElement:"ลบส่วนนี้",repeatElement:"ทำส่วนนี้ซ้ำ"},optionalNode:{switchTip:"รวม หรือไม่รวมส่วนนี้"},serviceTypes:{featureService:"ฟีเจอรเซอร์วิส",mapService:"เซอร์วิสแผนที่",imageService:"เซอร์วิสภาพ",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"ตกลง",empty:"ค่านี่จำเป็น",date:"ค่านี้ต้องเป็นวันที่",integer:"ค่านี้ต้องเป็นเลขจำนวนเต็ม",number:"ค่านี้ต้องเป็นตัวเลข",other:"ค่าไม่ถูกต้อง"},validationPane:{clearMessages:"ล้างข้อความ",prompt:"(คลิกที่แต่ละข้อความด้านล่าง และให้ข้อมูลที่จำเป็นในฟิลด์ที่ระบุ)"}});