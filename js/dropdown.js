$(document).ready(function () {
  const $menuIcon = $("#menuIcon");
  const $menuDropdown = $("#menuDropdown");

  // Initial setup: make sure it's hidden and set to "none"
  $menuDropdown.addClass("hidden").css("display", "none");

  $menuIcon.on("click", function (event) {
    event.stopPropagation(); // prevent this click from triggering the doc click

    if ($menuDropdown.hasClass("hidden")) {
      $menuDropdown.removeClass("hidden").css("display", "flex");
    } else {
      $menuDropdown.addClass("hidden").css("display", "none");
    }
  });

  $(document).on("click", function (event) {
    // Only hide if click is *outside* the menu
    if (!$(event.target).closest("#menuIcon, #menuDropdown").length) {
      $menuDropdown.addClass("hidden").css("display", "none");
    }
  });
});