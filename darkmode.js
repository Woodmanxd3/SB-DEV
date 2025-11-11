// Get the original background color from CSS
function getOriginalBgColor() {
  // Reset inline style to read CSS value
  document.body.style.backgroundColor = '';
  const bgColor = window.getComputedStyle(document.body).backgroundColor;
}

// Apply saved darkmode preference on page load
function applyDarkmode() {
  if (localStorage.getItem('setdarkmode') === 'enabled') {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    document.body.style.backgroundColor = getOriginalBgColor();
  }
}

// Toggle darkmode on/off and save preference
function toggleDarkmode() {
  const isDarkEnabled = localStorage.getItem('setdarkmode') === 'enabled';
  
  if (isDarkEnabled) {
    // Turn off darkmode
    localStorage.setItem('setdarkmode', 'disabled');
    document.body.style.backgroundColor = getOriginalBgColor();
  } else {
    // Turn on darkmode
    localStorage.setItem('setdarkmode', 'enabled');
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
  }
}

// Run on page load
applyDarkmode();
