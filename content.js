let isEnabled = false;

chrome.runtime.onMessage.addListener(function(request) {
  if(request.action === "updateEnabled") {
    isEnabled = request.isEnabled;
  }
});

document.body.addEventListener('click', function(e) {
  if (e.target.nodeName === 'IMG' && isEnabled) {
    e.preventDefault();
    e.stopPropagation();

    let imageUrl = e.target.src;
    chrome.runtime.sendMessage({action: 'downloadImage', imageUrl: imageUrl});
  }
});

// initial fetch of enabled status
chrome.runtime.sendMessage({action: 'checkEnabled'});
