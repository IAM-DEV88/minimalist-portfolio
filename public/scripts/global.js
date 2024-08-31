document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuMobile = document.getElementById("menu-mobile");
    const mobileMenuItems =
      menuMobile?.querySelectorAll("a") ?? [];
    const sections = document.querySelectorAll(".section");
    const backToTopButton = document.getElementById("back-to-top");

    menuToggle?.addEventListener("click", function () {
      menuMobile?.classList.toggle("active");
    });

    // Agregar event listener a cada elemento del menú móvil
    mobileMenuItems.forEach((item) => {
      item.addEventListener("click", function () {
        menuMobile?.classList.remove("active");
      });
    });

    // Intersection Observer para manejar animaciones al entrar en la vista
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // Ajusta el threshold según tus necesidades
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        backToTopButton?.classList.add("show");
      } else {
        backToTopButton?.classList.remove("show");
      }
    });

    backToTopButton?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });