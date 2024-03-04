document.addEventListener("DOMContentLoaded", function () {
    
    var educationSelect = document.getElementById("education");
    var servicesSelect = document.getElementById("services");
    var nearestOfficeSelect = document.getElementById("nearest-office");

    
    educationSelect.addEventListener("change", function () {
      disableSelectOption(educationSelect, "");
    });

    servicesSelect.addEventListener("change", function () {
      disableSelectOption(servicesSelect, "");
    });

    nearestOfficeSelect.addEventListener("change", function () {
      disableSelectOption(nearestOfficeSelect, "");
    });

    function disableSelectOption(selectElement, valueToDisable) {
      for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === valueToDisable) {
          selectElement.options[i].disabled = true;
        } else {
          selectElement.options[i].disabled = false;
        }
      }
    }
  });