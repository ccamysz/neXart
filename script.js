class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  
  let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function showSlide(index) {
  if (!slides || dots.length === 0) return;
  slides.style.transform = `translateX(-${index * 100}vw)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

function goToSlide(index) {
  showSlide(index);
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(autoSlide, 6000); // muda a cada 6 segundos

  function switchTab(tab) {
    const tabs = document.querySelectorAll(".tab");
    const forms = document.querySelectorAll(".form");

    tabs.forEach(t => t.classList.remove("active"));
    forms.forEach(f => f.classList.remove("active"));

    document.querySelector(`.tab-switch .tab:nth-child(${tab === 'artista' ? 1 : 2})`).classList.add("active");
    document.getElementById(`form-${tab}`).classList.add("active");
  }
