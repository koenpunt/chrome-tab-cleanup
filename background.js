chrome.browserAction.onClicked.addListener(function(tab){
  if(!confirm('Close duplicate tabs?')) return;
  var urls = [], tabsToClose = [];
  chrome.tabs.query({currentWindow: true}, function(tabs){
    tabs.reverse().forEach(function(tab){
      if(~urls.indexOf(tab.url)){
        tabsToClose.push(tab.id);
      }else{
        urls.push(tab.url);
      }
    });
    chrome.tabs.remove(tabsToClose);
  });
});
