document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuList = document.querySelector(".menu-list");

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
  });

  // Handle submenu touch events on mobile
  const handleMobileMenu = () => {
    if (window.innerWidth <= 768) {
      const submenus = document.querySelectorAll(".has-submenu");
      submenus.forEach((submenu) => {
        submenu.addEventListener("click", function (e) {
          if (e.target.closest(".has-submenu") === this) {
            e.preventDefault();
            const submenuList = this.querySelector(".submenu");
            submenuList.style.display =
              submenuList.style.display === "block" ? "none" : "block";
          }
        });
      });
    }
  };

  // Initialize mobile menu handling
  handleMobileMenu();

  // Update mobile menu handling when window is resized
  window.addEventListener("resize", handleMobileMenu);

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".menu") &&
      !e.target.closest(".hamburger") &&
      menuList.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      menuList.classList.remove("active");
    }
  });
});
