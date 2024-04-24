document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav .nav-item a");
  const navLinksMobile = document.querySelectorAll("#navbar-menu .nav-item a");
  const navItems = document.querySelectorAll(".nav-item");
  const burgerMenuClosed = document.getElementById("burger-menu-closed");
  const burgerMenuOpened = document.getElementById("burger-menu-opened");
  const sideMenu = document.getElementById("side-menu");

  burgerMenuClosed.addEventListener("click", () => {
    sideMenu.classList.remove("hidden");
    sideMenu.classList.toggle("block");
  });

  burgerMenuOpened.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
    sideMenu.classList.remove("block");
  });

  // navbar navigations
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });

      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      this.closest(".nav-item").classList.add("active");
    });
  });

  // menu navigations
  navLinksMobile.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });

      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      this.closest(".nav-item").classList.add("active");
    });
  });
});
