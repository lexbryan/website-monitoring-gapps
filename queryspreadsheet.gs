function getSS(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main");

  this.message_list = sanitizeList2D(ss.getRange("C2:D").getValues());
  this.email_list = sanitizeList1D(ss.getRange("A2:A").getValues());
  this.website_list = sanitizeList1D(ss.getRange("B2:B").getValues());
}

function getMessage(code){
  var ss = new getSS();

  var message_list = ss.message_list;

  for(var i = 0; i < message_list.length; i++){
      if(code.toString() == message_list[i][0]) return message_list[i][1];
  }

  return message_list[1][1];
}
