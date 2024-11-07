// Simple functionality to show an alert when a section is clicked
document.addEventListener("DOMContentLoaded", function() {
  const programsSection = document.getElementById("programs");
  const testimonialsSection = document.getElementById("testimonials");

  programsSection.addEventListener("click", () => {
    alert("Explore our wide range of programs!");
  });

  testimonialsSection.addEventListener("click", () => {
    alert("See what our students and parents say about us!");
  });
});
