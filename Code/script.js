document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav .nav-item a");
  const navItems = document.querySelectorAll(".nav-item");
  const burgerMenu = document.getElementById('burger-menu');
  const sideMenu = document.getElementById('side-menu');

burgerMenu.addEventListener('click', () => {
  sideMenu.classList.toggle('-translate-x-full')
});

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });

      // Toggle active class for navigation items
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      this.closest('.nav-item').classList.add('active');
    });
  });
});
