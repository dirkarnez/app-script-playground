function doGet(e) {
  // if (e.parameter.action === 'getVocab') {
    
  //   if (e.parameter.format == "web") {
  //     return HtmlService.createHtmlOutputFromFile('vocab.html');
  //   }
  //   else if (e.parameter.format == "json") {
  //     return ContentService.createTextOutput(JSON.stringify(getVocab("json")));
  //   }
    
  //   return ContentService.createTextOutput("error");
  // }

  return ContentService.createTextOutput("hi");
  
  // return HtmlService.createHtmlOutputFromFile('upload.html');
}
