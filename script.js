document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav .nav-item a");
  const navLinksMobile = document.querySelectorAll(
    "#side-menu a:not([href='signUp.html'])"
  );
  const navItems = document.querySelectorAll(".nav-item");
  const burgerMenuClosed = document.getElementById("burger-menu-closed");
  const burgerMenuOpened = document.getElementById("burger-menu-opened");
  const sideMenu = document.getElementById("side-menu");
  const merchItems = document.querySelectorAll("[id^='merch-']");

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

  // Function to animate a specific merch item
  function animateMerchItem(merchItem) {
    const leftSide = merchItem.querySelector(".leftSide");
    const rightSide = merchItem.querySelector(".rightSide");
  
    // Trigger reflow to apply initial styles
    leftSide.offsetWidth;
    rightSide.offsetWidth;
    
    // Add transition properties after initial setup
    leftSide.style.transition = "opacity 2s";
    rightSide.style.transition = "opacity 2s";
  
    // Set opacity to 1 after a short delay to allow the transition to be observed
    setTimeout(() => {
      leftSide.classList.add("animate-left-to-right");
      rightSide.classList.add("animate-right-to-left");
      leftSide.style.opacity = 1;
      rightSide.style.opacity = 1;
    }, 100); // Adjust delay as needed
  }
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  document.addEventListener("scroll", () => {
    merchItems.forEach((item) => {
      if (isInViewport(item)) {
        animateMerchItem(item);
      }
    });
  });
});