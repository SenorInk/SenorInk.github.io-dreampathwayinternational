// Function to include loader HTML
function includeLoader() {
  var loaderContainer = document.getElementById('loader-container');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loaderContainer.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "loader.html", true);
  xhttp.send();
}

// Include loader when the page starts loading
includeLoader();

// Remove loader when the page finishes loading
window.addEventListener('load', function() {
  var loaderContainer = document.getElementById('loader-container');
  loaderContainer.style.display = 'none';
});
