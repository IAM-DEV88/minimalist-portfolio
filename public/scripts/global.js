document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuMobile = document.getElementById("menu-mobile");
    const mobileMenuItems =
      menuMobile?.querySelectorAll("a") ?? [];
    const sections = document.querySelectorAll(".section");
    const navContainer = document.getElementById("section-navigation");
    const scrollUpBtn = document.getElementById("scroll-up");
    const scrollDownBtn = document.getElementById("scroll-down");
    const navIndicator = document.getElementById("nav-indicator");
    const navLinks = document.querySelectorAll(".nav-link");

    // Función para actualizar el indicador de la navbar
    const updateNavIndicator = () => {
      let currentSectionId = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 200) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (currentSectionId) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
        if (activeLink && navIndicator) {
          navIndicator.style.width = `${activeLink.offsetWidth}px`;
          navIndicator.style.left = `${activeLink.offsetLeft}px`;
          navIndicator.style.opacity = "1";
          
          // Actualizar clases de texto
          navLinks.forEach(link => {
            link.classList.remove("text-cyan-400", "scale-110");
            link.classList.add("text-gray-400");
          });
          activeLink.classList.add("text-cyan-400", "scale-110");
          activeLink.classList.remove("text-gray-400");
        }
      } else if (navIndicator) {
        navIndicator.style.opacity = "0";
      }
    };

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
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const sortedSections = getSortedSections();
      
      // Mostrar el contenedor siempre
      navContainer?.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      navContainer?.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");

      // Lógica para ocultar botón UP solo en la primera sección (Hero)
      if (currentScroll < 100) {
        scrollUpBtn?.classList.add("opacity-0", "pointer-events-none", "scale-90");
        scrollUpBtn?.classList.remove("opacity-100", "pointer-events-auto", "scale-100");
      } else {
        scrollUpBtn?.classList.remove("opacity-0", "pointer-events-none", "scale-90");
        scrollUpBtn?.classList.add("opacity-100", "pointer-events-auto", "scale-100");
      }

      // Lógica para ocultar botón DOWN solo cuando no hay más secciones a las que bajar
      const lastSection = sortedSections[sortedSections.length - 1];
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 100);
      const isInLastSection = lastSection && currentScroll >= lastSection.offsetTop - 300;

      if (isAtBottom || isInLastSection) {
        scrollDownBtn?.classList.add("opacity-0", "pointer-events-none", "scale-90");
        scrollDownBtn?.classList.remove("opacity-100", "pointer-events-auto", "scale-100");
      } else {
        scrollDownBtn?.classList.remove("opacity-0", "pointer-events-none", "scale-90");
        scrollDownBtn?.classList.add("opacity-100", "pointer-events-auto", "scale-100");
      }

      updateNavIndicator();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavIndicator);
    // Ejecutar una vez al inicio para establecer estado correcto
    handleScroll();

    function getSortedSections() {
      return Array.from(sections).sort((a, b) => a.offsetTop - b.offsetTop);
    }

    scrollUpBtn?.addEventListener("click", () => {
      const currentScroll = window.scrollY;
      const sortedSections = getSortedSections();
      
      // Encontrar la sección anterior (la primera que esté por encima del scroll actual)
      const prevSection = [...sortedSections]
        .reverse()
        .find(section => section.offsetTop < currentScroll - 50);

      if (prevSection) {
        window.scrollTo({ top: prevSection.offsetTop, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    scrollDownBtn?.addEventListener("click", () => {
      const currentScroll = window.scrollY;
      const sortedSections = getSortedSections();
      
      // Encontrar la siguiente sección (la primera que esté por debajo del scroll actual)
      const nextSection = sortedSections
        .find(section => section.offsetTop > currentScroll + 50);

      if (nextSection) {
        window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
      }
    });
  });