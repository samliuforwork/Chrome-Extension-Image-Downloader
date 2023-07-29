// document.addEventListener("DOMContentLoaded", function(){
//   const toggleSwitch = document.getElementById('toggleSwitch');
//   const toggleSaveAs = document.getElementById('toggleSaveAs');

//   chrome.storage.sync.get('enabled', function(data) {
//     toggleSwitch.checked = data.enabled;
//     toggleSaveAs.checked = data.saveAs;
//   });

//   toggleSwitch.addEventListener('change', function() {
//     chrome.storage.sync.set({enabled: toggleSwitch.checked});
//   });

//   toggleSaveAs.addEventListener('change', function() {
//     chrome.storage.sync.set({saveAs: toggleSaveAs.checked});
//   });
// });

document.addEventListener("DOMContentLoaded", function(){
  const toggleSwitch = document.getElementById('toggleSwitch');
  const toggleSaveAs = document.getElementById('toggleSaveAs');

  // Retrieve both 'enabled' and 'saveAs' state from storage when popup loads
  chrome.storage.sync.get(['enabled', 'saveAs'], function(data) {
    toggleSwitch.checked = data.enabled;
    toggleSaveAs.checked = data.saveAs; // Apply the 'saveAs' state to the checkbox
  });

  toggleSwitch.addEventListener('change', function() {
    chrome.storage.sync.set({enabled: toggleSwitch.checked});
  });

  toggleSaveAs.addEventListener('change', function() {
    chrome.storage.sync.set({saveAs: toggleSaveAs.checked}); // Save the state when the checkbox is toggled
  });
});
