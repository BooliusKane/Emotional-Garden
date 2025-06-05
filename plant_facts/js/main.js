function fetchPlant() {
  const apiKey = "sk-K5Uh6840c56b3d78f10851";
  const listURL = `https://perenual.com/api/species-list?key=${apiKey}&page=1`;

  $.ajax({
    url: listURL,
    type: "GET",
    dataType: "json",
    success: function (data) {
      const plantList = data.data;
      const randomPlant = plantList[Math.floor(Math.random() * plantList.length)];
      const id = randomPlant.id;

      const detailURL = `https://perenual.com/api/species/details/${id}?key=${apiKey}`;

      $.ajax({
        url: detailURL,
        type: "GET",
        dataType: "json",
        success: function (plant) {
          console.log("Detail API response:", plant);

          const commonName = plant.common_name || "Unknown";
          const scientificName = plant.scientific_name?.[0] || "Unknown";
          const image = plant.default_image ? plant.default_image.original_url : "../img/placeholder-plant.jpg";
          const hardinessEmbed = plant.hardiness_location?.full_iframe || null;

          const cardHTML = `
            <div class="unified-card">
              <div class="card-header">
                <img id="chia-head-sticker" src="img/chia head.png" alt="Chia Sticker">
                <h2>${commonName}</h2>
              </div>
              <div class="card-body">
                <img class="plant-image" src="${image}" alt="${commonName}">
                <div class="plant-traits">
                  <strong>Species:</strong> ${scientificName}<br>
                  <strong>Plant ID:</strong> ${plant.id}<br>
                </div>
                ${hardinessEmbed ? `<div class="hardiness-map">${hardinessEmbed}</div>` : ""}
                <div id="guide-box-placeholder"></div>
              </div>
            </div>
          `;

          $("#plant-card-container").html(cardHTML);

          const careGuideURL = `https://perenual.com/api/species-care-guide-list?species_id=${plant.id}&key=${apiKey}`;

          $.ajax({
            url: careGuideURL,
            type: "GET",
            dataType: "json",
            success: function (guideData) {
              const sections = guideData.data?.[0]?.section || [];
              if (sections.length === 0) return;

              let guideHTML = `<div class="care-guide-box"><h3>Care Guide</h3>`;
              sections.forEach(section => {
                guideHTML += `
                  <div class="guide-section">
                    <strong>${section.type}:</strong> ${section.description}
                  </div>`;
              });
              guideHTML += `</div>`;

              $("#guide-box-placeholder").html(guideHTML);
            }
          });

        },
        error: function () {
          $("#plant-card-container").html("Sorry! Couldn't load full plant details.");
        }
      });
    },
    error: function () {
      $("#plant-card-container").html("Failed to load plant list.");
    }
  });
}

$(document).ready(function () {
  fetchPlant();
  $("#new-plant").on("click", fetchPlant);
});

$(document).ready(function () {
  console.log("jQuery ready!");

  // LOADING SCREEN
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  function load(randomNumber) {
    let img = document.createElement('img');
    switch (randomNumber) {
      case 1: img.src = './img/leafgrub.png'; break;
      case 2: img.src = './img/sleepygrubsky.png'; break;
      case 3: img.src = './img/pupasoilgrub.png'; break;
      case 4: img.src = './img/barrowgrub.png'; break;
      case 5: img.src = './img/watergrub.png'; break;
      case 6: img.src = './img/unpaidgrub.png'; break;
    }
    return img;
  }

  let loadingscreen = load(randomNumber);
  $("#output").html(loadingscreen);

  let counter = 3;
  const counterInterval = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(counterInterval);
      $("#output").fadeOut(500, function () {
        $(this).remove(); 
        activateInteractions();
      });
    }
  }, 1000);

  // Function to activate all interactions
  function activateInteractions() {
  // MENU INTERACTIONS (moved here!)
  $("#menuIcon").on("click", function (event) {
    const $dropdown = $("#menuDropdown");

    if ($dropdown.hasClass("hidden")) {
      $dropdown.removeClass("hidden").css("display", "flex");
    } else {
      $dropdown.addClass("hidden").css("display", "none");
    }

    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest("#menuIcon, #menuDropdown").length) {
      $("#menuDropdown").addClass("hidden").css("display", "none");
    }
  });

  
}
  
});

console.log("jQuery ready!");

// Audio Effects
const clickSound = document.getElementById("click");

// General click effect
document.addEventListener("click", function (e) {
  if (e.target.closest("#chia")) return; // skip if clicked element is #chia or inside it

  clickSound.currentTime = 0;
  clickSound.play();
});

