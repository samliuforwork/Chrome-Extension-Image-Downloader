let count = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'downloadImage') {
    count++;
    let imageName = ("0" + count).slice(-2) + '.png';

    chrome.storage.sync.get('saveAs', function(data) {
      chrome.downloads.download({
        url: request.imageUrl,
        filename: imageName,
        saveAs: data.saveAs
      })
    });
  } else if (request.action === 'checkEnabled') {
    chrome.storage.sync.get('enabled', function(data) {
      chrome.tabs.sendMessage(sender.tab.id, {action: "updateEnabled", isEnabled: data.enabled});
    });
  }
});

chrome.storage.onChanged.addListener(function(changes) {
  if(changes.enabled) {
    chrome.tabs.query({}, function(tabs) {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {action: "updateEnabled", isEnabled: changes.enabled.newValue});
      }
    });
  }
});
