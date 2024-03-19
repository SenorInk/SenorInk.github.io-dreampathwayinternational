document.addEventListener("DOMContentLoaded", function () {
    
    var educationSelect = document.getElementById("education");
    var servicesSelect = document.getElementById("services");
    var nearestOfficeSelect = document.getElementById("nearest-office");
    var dreamCountrySelect = document.getElementById("dream-country");

    
    educationSelect.addEventListener("change", function () {
      disableSelectOption(educationSelect, "");
    });

    servicesSelect.addEventListener("change", function () {
      disableSelectOption(servicesSelect, "");
    });

    nearestOfficeSelect.addEventListener("change", function () {
      disableSelectOption(nearestOfficeSelect, "");
    });

    nearestOfficeSelect.addEventListener("change", function () {
      disableSelectOption(dreamCountrySelect, "");
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

  function showOtherInput(selectElement) {
    var otherInput = document.getElementById('other-country');
    if (selectElement.value === 'Others') {
      otherInput.style.display = 'block';
      otherInput.setAttribute('required', 'required'); // set the required attribute
    } else {
      otherInput.style.display = 'none';
      otherInput.removeAttribute('required'); // remove the required attribute
    }
  }