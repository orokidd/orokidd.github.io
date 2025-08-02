// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Toggle project visibility
function toggleProjects(section) {
  const hiddenProjects = document.getElementById(section + "-hidden");
  const button = event.target;

  if (hiddenProjects.classList.contains("show")) {
    hiddenProjects.classList.remove("show");
    button.textContent = "Show More Projects";
  } else {
    hiddenProjects.classList.add("show");
    button.textContent = "Show Less Projects";
  }
}
