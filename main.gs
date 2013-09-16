function main(){
  var ss = new getSS();
  var email_list = ss.email_list;
  var website_list = ss.website_list;
  var custom_message_list = ss.message_list;

  for(var i = 0; i < website_list.length; i++){
    var code = querySite(website_list[i]);

    if(code != 200){
      var status = getCodeValue(code);
      var message = custom_message_list[0][1]+"\n\n"+website_list[i] + " returns an HTTP code " + code + ": " + status+"\n\n"+custom_message_list[1][1];
      var subject = "Website Error (" + status +") :: " + website_list[i];

      sendMessage(message,subject,email_list);
      sendSms(subject);
    }
  }
}

function sendMessage(message,subject,email_list){
  var email = GmailApp.sendEmail(email_list.toString(), subject, message);
}

function sendSms(subject){
  var now = new Date().getTime();
  var event = CalendarApp.getOwnedCalendarById('l05s46vchba0vjf17fv6gn936c@group.calendar.google.com').createEvent(subject,
                            new Date(now+60000),
                            new Date(now+60000)).addSmsReminder(0);

  Utilities.sleep(1000);
  event.deleteEvent();
}
