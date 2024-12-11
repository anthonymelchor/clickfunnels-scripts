<!-- Location code -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
      // Function to resolve IP-based location (State)
      function resolveLocationByIP() {
          var ipInfoApiUrl = 'https://ipinfo.io/json?token=519bd16c17daf4';

          fetch(ipInfoApiUrl)
              .then(response => response.json())
              .then(data => {
                  if (data) {
                      var state = data.region; // Assuming the 'region' field contains the state
                      if (state) {
                          console.log("User's State: " + state);
                          document.querySelectorAll('.state_code').forEach(el => {
                              el.textContent = state;
                          });
                      } else {
                          console.log("State not found.");
                      }
                  } else {
                      console.log("Failed to resolve location.");
                  }
              })
              .catch(error => console.error("Error fetching location data:", error));
      }

      // Call the function to resolve the location by IP
      resolveLocationByIP();
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      // Function to resolve IP-based location (City)
      function resolveLocationByCity() {
          var ipInfoApiUrlCity = 'https://ipinfo.io/json?token=519bd16c17daf4';

          fetch(ipInfoApiUrlCity)
              .then(response => response.json())
              .then(data => {
                  if (data) {
                      var city = data.city;
                      if (city) {
                          console.log("User's City: " + city);
                          document.querySelectorAll('.city_code').forEach(el => {
                              el.textContent = city;
                              el.style.cssText = 'font-family: Lato; font-weight: Normal; font-size: 20px; color: #000; text-align: justify; line-height: 1.2em;';
                          });
                      } else {
                          console.log("City not found.");
                      }
                  } else {
                      console.log("Failed to resolve location.");
                  }
              })
              .catch(error => console.error("Error fetching location data:", error));
      }

      // Call the function to resolve the location by IP
      resolveLocationByCity();
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      // Function to resolve IP-based location (ZIP Code)
      function resolveLocationByZip() {
          var ipInfoApiUrlZip = 'https://ipinfo.io/json?token=519bd16c17daf4';

          fetch(ipInfoApiUrlZip)
              .then(response => response.json())
              .then(data => {
                  if (data) {
                      var zip = data.postal;
                      if (zip) {
                          console.log("User's Zip: " + zip);
                          document.querySelectorAll('.zip_code').forEach(el => {
                              el.textContent = zip;
                              el.style.cssText = 'font-family: Lato; font-weight: Normal; font-size: 20px; color: #000; text-align: justify; line-height: 1.2em;';
                          });
                      } else {
                          console.log("Zip code not found.");
                      }
                  } else {
                      console.log("Failed to resolve location.");
                  }
              })
              .catch(error => console.error("Error fetching location data:", error));
      }

      // Call the function to resolve the location by IP
      resolveLocationByZip();
  });
</script>
<!-- END Location code -->
