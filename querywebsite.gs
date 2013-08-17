function querySite(url) {
  var ping = 666;

  try{
    ping = UrlFetchApp.fetch(url).getResponseCode();
  }
  catch(err){
  }
  return ping;
}

function getWebsiteStatus(website_list){
 var list = new Array();
 var ss = new getSS();

 //header
 list.push(ss.message_list[0][1]+"\n");

 for(var i = 0; i<website_list.length; i++){
   list.push(website_list[i]+" :: " + querySite(website_list[i]) +" :: "+ getMessage(querySite(website_list[i])));
 }

 //footer
 list.push("\n" + ss.message_list[2][1]);

 return list;
}