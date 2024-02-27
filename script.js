// script.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("personnel-link").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action (e.g., following the link)
  
      // Generate and display profile information
      var profileContainer = document.getElementById("profile-container");
      var profile = document.getElementById("profile");
  
      // Sample profile information (replace with your actual data)
      var personnel = {
        name: "test test",
        position: "Immigration Consultant",
        contact: "Email: test.test@example.com<br>Phone: +123456789"
      };
  
      // Construct HTML for the profile
      var profileHTML = "<p><strong>Name:</strong> " + personnel.name + "</p>" +
                        "<p><strong>Position:</strong> " + personnel.position + "</p>" +
                        "<p><strong>Contact:</strong> " + personnel.contact + "</p>";
  
      // Set the profile HTML
      profile.innerHTML = profileHTML;
  
      // Show the profile container
      profileContainer.style.display = "block";
    });
  });
  
  
  
  
  
  