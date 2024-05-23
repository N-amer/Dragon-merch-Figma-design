document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav .nav-item a");
  const navLinksMobile = document.querySelectorAll("#side-menu a:not([href='signUp.html'])");
  const navItems = document.querySelectorAll(".nav-item");
  const burgerMenuClosed = document.getElementById("burger-menu-closed");
  const burgerMenuOpened = document.getElementById("burger-menu-opened");
  const sideMenu = document.getElementById("side-menu");

  burgerMenuClosed.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");
    sideMenu.classList.add("translate-x-0");
  });

  burgerMenuOpened.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-0");
    sideMenu.classList.add("translate-x-full");
  });

  // Navbar navigations
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

  // Menu navigations
  navLinksMobile.forEach((link) => {
    link.addEventListener("click", function (event) {
      document.getElementById("side-menu").classList.remove("translate-x-0");
      document.getElementById("side-menu").classList.add("translate-x-full");

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      event.preventDefault();
    });
  });

  // Cards flip
  document.querySelectorAll('.flip-btn').forEach(item => {
    item.addEventListener('click', event => {
      const cardInner = item.closest('.relative').querySelector('.flip-card-inner');
      cardInner.classList.toggle('rotate-y-180');
    })
  });
});
