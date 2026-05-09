
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-carousel-track]");
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");

  if (carousel && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: -carousel.clientWidth * 0.8,
        behavior: "smooth"
      });
    });

    nextButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: carousel.clientWidth * 0.8,
        behavior: "smooth"
      });
    });
  }

  const searchInput = document.querySelector("[data-project-search]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-project-card]");

  let activeFilter = "all";

  function filterProjects() {
    const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";

    projectCards.forEach((card) => {
      const tags = card.dataset.tags || "";

      const matchesSearch = tags.includes(searchValue);
      const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);

      if (matchesSearch && matchesFilter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      activeFilter = button.dataset.filter;
      filterProjects();
    });
  });
});
