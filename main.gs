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
      //Browser.msgBox(message);
      sendMessage(message,subject,email_list);
    }
  }
}

function sendMessage(message,subject,email_list){
  var email = GmailApp.sendEmail(email_list, subject, message);
}
