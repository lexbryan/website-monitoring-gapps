function getSS(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main");
  
  this.message_list = sanitizeList2D(ss.getRange("D2:E").getValues());
  this.email_list = sanitizeList1D(ss.getRange("A2:A").getValues());
  this.website_list = sanitizeList1D(ss.getRange("B2:B").getValues());
  this.status = sanitizeList1D(ss.getRange("C2:C").getValues());
}

function sanitizeList1D(list){
  var clean_list = new Array();
  
  for(var i=0; i<list.length; i++){
    if(list[i] != "") clean_list.push(list[i]);
    else break;
  }
  
  return clean_list;
}

function sanitizeList2D(list){
  var clean_list = new Array();
  
  for(var i=0; i<list.length; i++){
    if(list[i][0] != "") clean_list.push(list[i]);
    else break;
  }
  
  return clean_list;
}