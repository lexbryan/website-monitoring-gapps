function main(){
  var ss = new getSS();
  var email_list = ss.email_list;
  var website_list = ss.website_list;

  var website_status = getWebsiteStatus(website_list);
  var message = createMessage(website_status);

  sendMessage(message,email_list);
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

function createMessage(website_status){
  var message = "";

  for(var i = 0; i < website_status.length; i++){
      message = message + website_status[i] + "\n";
  }

  return message;
}

function sendMessage(message,email_list){
  var email = GmailApp.sendEmail(email_list, "Website Monitor", message)

  return email;
}


