const segmentIds = ["anger", "disgust", "fear", "happiness", "sadness", "surprise"];
const emotionText = document.getElementById("selected-emotion");

segmentIds.forEach(id => {
  const segment = document.getElementById(id);
  if (segment) {
    segment.style.cursor = "pointer";

    segment.addEventListener("click", () => {
      // Deselect all
      segmentIds.forEach(otherId => {
        const otherSegment = document.getElementById(otherId);
        if (otherSegment) {
          otherSegment.classList.remove("selected");
        }
      });

      // Highlight selected
      segment.classList.add("selected");

      // Update text display
      const label = id.charAt(0).toUpperCase() + id.slice(1);
      if (emotionText) {
        emotionText.textContent = `Selected: ${label}`;
      }

      // Redirect
      window.location.href = `/greenHouse/${id}`;
    });
  }
});