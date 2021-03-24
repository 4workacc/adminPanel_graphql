const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument(
    {
      layout:'landscape',
      margins : { top:0, left: 30, right:0, bottom: 10}
    });

// DRAWING CANVAS BORDERS /////////////////////////////
function row( left, top, width, heigth) {
    doc.lineJoin('miter')
      .rect(left, top, width, heigth)
      .stroke()
    return doc
  }
//////////////////////////////////////////////////////
let generateHeader = ( ) => { 
    doc
    .font(dzFont)
    .fontSize(dzFontSize)
    .text(dzData.dzUnit, docMarginLeft,curTabHeightValue)
    .moveDown(2) 
    .text(dzData.dzDate)
    .moveDown(2)
    .text(dzData.dzTitle)
    .moveDown(1)
    .text(dzData.dzAbout)  
  
  doc  
    .font(dzFont)
    .fontSize(dzFontSize)
    .text(dzData.dzHeaderEmp, 600, curTabHeightValue)
    .moveDown(0.2)
    .text(dzData.dzHeaderOrg)
    .moveDown(0.2)
    .text(dzData.dzHeaderNACH)
    curTabHeightValue += 115;

  doc
    .font(dzFont)
    .fontSize(dzFontSize)
    .text("",50, curTabHeightValue)
    .text(dzData.dzText)
  
    curTabHeightValue += 20;
  }
//////////////////////////////////////////////////////
let generateLVSTab = ( ) => {  
    doc.fontSize(dzFontSize).text("", docMarginLeft, curTabHeightValue);
    doc.text( "Доступ к рeсурсам  ", docMarginLeft, curTabHeightValue )
    //header
    // row(docMarginLeft ,      curTabHeightValue +20, 20, 20)
    row(docMarginLeft + 20 ,  curTabHeightValue +20, 250, 20)
    row(docMarginLeft + 270,  curTabHeightValue +20, 150, 20)
    row(docMarginLeft + 420,  curTabHeightValue +20, 150, 20)
    row(docMarginLeft + 570, curTabHeightValue +20, 150, 20)
    //row0
    // row(docMarginLeft ,       curTabHeightValue + 40, 20,  50)
    row(docMarginLeft + 20 ,  curTabHeightValue + 40, 250, 50)
    row(docMarginLeft + 270,  curTabHeightValue + 40, 150, 50)
    row(docMarginLeft + 420,  curTabHeightValue + 40, 150, 50)
    row(docMarginLeft + 570,  curTabHeightValue + 40, 150, 50)
    doc
      .fontSize( dzFontSize )   
      .text("", docMarginLeft, curTabHeightValue)   
      .text("Имя пользователя",  docMarginLeft+10, curTabHeightValue+25, { width: 250, align: "center" })    
      .text("", docMarginLeft+265 , curTabHeightValue+25, { width: 150, align: "center" })    
      .text("", docMarginLeft+415, curTabHeightValue+25, { width: 150, align: "center" })    
      .text("", docMarginLeft+570, curTabHeightValue+25, {width: 150, align: "center" })
  
      .text("", docMarginLeft, curTabHeightValue+25)    
      .text(dzData.fio, docMarginLeft+20, curTabHeightValue + 45, { width: 250, align: "center" })
      .moveDown(0.2)
      .text(dzData.trans, { width: 250, align : "center"})
      .moveDown(0.2)
      .text(dzData.employer, { width: 250, align : "center"})
  
      .text(dzData.role ,docMarginLeft+265 , curTabHeightValue +60 , { width: 150, align: "center" })   
      .text(dzData.workTime, docMarginLeft+410, curTabHeightValue + 60, { width: 150, align: "center" })   
      .fontSize(dzFontSize - 2)
      .text(dzData.someInf, docMarginLeft+565, curTabHeightValue +60, {width: 150, align: "center" })
  
      curTabHeightValue += 100;
  }
///////////////////////////////////////////////////////
let generate0Tab = () => {
    doc.fontSize(dzFontSize).text("", docMarginLeft, curTabHeightValue);
    
    doc.text("Доступ к ")
    .moveDown(2)
    curTabHeightValue += 20;
    docMarginLeft += 15;
    row ( docMarginLeft , curTabHeightValue, 100, 20);
    row ( docMarginLeft + 100, curTabHeightValue, 250, 20);
  
    row ( docMarginLeft + 350, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 440, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 530, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 620, curTabHeightValue, 90, 20);
  
    curTabHeightValue += 20;
  
    row ( docMarginLeft, curTabHeightValue, 100, 20);
    row ( docMarginLeft + 100, curTabHeightValue, 250, 20);
  
    row ( docMarginLeft + 350, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 440, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 530, curTabHeightValue, 90, 20);
    row ( docMarginLeft + 620, curTabHeightValue, 90, 20);
    
    curTabHeightValue -= 15;
    doc
    .text("", docMarginLeft, curTabHeightValue , { width : 100, align : "center"})
    .text("", docMarginLeft + 100, curTabHeightValue , { width : 250, align : "center"})
    .fontSize(8)
    .text("", docMarginLeft + 350, curTabHeightValue , { width : 90, align : "center"})
    .text("", docMarginLeft + 440, curTabHeightValue , { width : 90, align : "center"})
    .text("", docMarginLeft + 530, curTabHeightValue , { width : 90, align : "center"})
    .text("", docMarginLeft + 620, curTabHeightValue , { width : 90, align : "center"})
  
    doc
    .fontSize(dzFontSize)
    .text(dzData.code0, docMarginLeft, curTabHeightValue+20, { width : 100, align : "center"})
    .text(dzData.fio, docMarginLeft + 100, curTabHeightValue +20 , { width : 250, align : "center"})
    .fontSize(dzFontSize-2)
    .text(dzData.askd_r0, docMarginLeft + 350, curTabHeightValue +20 , { width : 90, align : "center"})
    .text(dzData.askd_r1, docMarginLeft + 440, curTabHeightValue  +20, { width : 90, align : "center"})
    .text(dzData.askd_r2, docMarginLeft + 530, curTabHeightValue  +20, { width : 90, align : "center"})
    .text(dzData.askd_r3, docMarginLeft + 620, curTabHeightValue +20 , { width : 90, align : "center"})
  
    curTabHeightValue += dzStep;
    docMarginLeft -= 15;
  }
///////////////////////////////////////////////////////
let generate1Tab = (startX, startY, data) => {
    doc.fontSize(dzFontSize).text("", startX, startY);
    doc.text("Доступ к ")
    .moveDown(2)
    startY += 20;
    startX -= 10;
  
    row ( startX , startY, 250, 20);
    row ( startX + 250, startY, 250, 20);
    row ( startX + 500, startY, 150, 20);
  
    startY += 20;
    row ( startX , startY, 250, 20);
    row ( startX + 250, startY, 250, 20);
    row ( startX + 500, startY, 150, 20);
  
    startY -= 15;
  
    doc.text("Login", startX, startY, {width: 250, align: "center"})
    doc.text("User", startX + 250, startY, {width: 250, align: "center"})
    doc.text("Emp", startX +500, startY, {width: 150, align: "center"})
  
    startY += 20;
    
    doc.text(data.trans+"@...", startX, startY, {width: 250, align: "center"})
    doc.text(data.fio, startX + 250, startY, {width: 250, align: "center"})
    doc.text(data.employer, startX +500, startY, {width: 150, align: "center"})
  
    curTabHeightValue += dzStep;
  }
///////////////////////////////////////////////////////
let generate2Tab = (startX, startY, data ) => {
    doc.fontSize(dzFontSize).text("", startX, startY);
    doc.text("Доступ к ")
    .moveDown(2)
    startY += 20;
    startX -= 10;
  
    row(startX, startY, 250, 20);
    row(startX +250 , startY, 150, 20);
    row(startX + 400, startY, 250, 20);
    row(startX + 650, startY, 50, 20);
  
    startY += 20;
  
    row(startX, startY, 250, 20);
    row(startX +250 , startY, 150, 20);
    row(startX + 400, startY, 250, 20);
    row(startX + 650, startY, 50, 20);
  }
///////////////////////////////////////////////////////
let curTabHeightValue = 10;
let docMarginLeft = 30;

let dzFont = "fonts/DejaVuSans.ttf";
let dzFontSize = 10;
let dzStep = 50;

let dzData = {
    isStaticRights : true, 
    dzHeaderEmp : " ",
    dzHeaderNACH : " ",
    dzHeaderOrg : "Ги",
    
    dzUnit : "Рг",
    dzTitle : "Да",
    dzDate : "10.10.1000",
    dzAbout : "О ователя",
   
    dzText : `В связика согласно:`,
    fio : "IvanovII",
    trans : "IvanovPP",
    employer : "  2",
    role : "TO",
    workTime : "08-00 - 20-00",
    someInf : "temp transfer 09.01.2020 - 02.03.2020",
    code0 : 1111,
    code1 : 2222,
    askd_r0 : "-",
    askd_r1 : "-",
    askd_r2 : "-",
    askd_r3 : "-"
}

///////////////////////////////////////////////////////
doc.pipe(fs.createWriteStream('output.pdf'));
generateHeader();
// generateLVSTab();
// generateASKDTab();

doc.end();