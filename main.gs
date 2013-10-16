function main(){
  var ss = new getSS();
  var email_list = ss.email_list;
  var website_list = ss.website_list;
  var custom_message_list = ss.message_list;
  var website_status = ss.status;
  var current_status = "";
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main");
  
  for(var i = 0; i < website_list.length; i++){
    var code = querySite(website_list[i]);
    
    if(code == 200) current_status = "up";
    else current_status = "down";
    
    if(website_status[i] != current_status){
      var status = getCodeValue(code);
      var message = custom_message_list[0][1]+"\n\n"+website_list[i] + " returns an HTTP code " + code + ": " + status+"\n\n"+custom_message_list[1][1];
      var subject = "Website Status (" + current_status +") :: " + website_list[i];

      sendMessage(message,subject,email_list);
      sendSms(subject);
      
      var color = "";
      
      if(current_status == "up") color = "green";
      else color = "red";
      
      sheet.getRange("C" + (i+2)).setValue(current_status).setBackground(color);
    }
  }
}

function sendMessage(message,subject,email_list){
  var email = GmailApp.sendEmail(email_list.toString(), subject, message);
}

function sendSms(subject){
  var creds = new creds();
  var now = new Date().getTime();
  var event = CalendarApp.getOwnedCalendarById(creds.google_calendar_id).createEvent(subject,
                            new Date(now+60000),
                            new Date(now+60000)).addSmsReminder(0); 

  //Utilities.sleep(2000);
  //event.deleteEvent();
}