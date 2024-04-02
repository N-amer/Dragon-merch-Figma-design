document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const navItems = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });
      navItems.forEach((item) => {
        item.addEventListener("click", function () {
          navItems.forEach((navItem) => {
            navItem.classList.remove("active");
          });
          this.classList.add("active");
        });
      });
    });
  });
});
