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

  //artistas

  const artistas = [
    { nome: "Ana Castro", profissao: "Ilustradora digital", imagem: "/imgs/pessoa1.jpeg", categoria: "artes-visuais" },
    { nome: "Lucas Mendes", profissao: "Escultor", imagem: "/imgs/pessoa2.jpeg", categoria: "artes-visuais" },
    { nome: "Renata Lima", profissao: "Fotógrafa", imagem: "/imgs/pessoa3.jpeg", categoria: "fotografia" },
    { nome: "Bruno Oliveira", profissao: "Pintor", imagem: "/imgs/pessoa4.jpeg", categoria: "artes-visuais" },
    { nome: "Julia Silva", profissao: "Fotógrafa", imagem: "/imgs/pessoa5.jpg", categoria: "fotografia" },
    { nome: "Firetx", profissao: "Grupo de dança", imagem: "/imgs/pessoa6.jpg", categoria: "danca" },
    { nome: "Caio Lisboa", profissao: "Músico e compositor", imagem: "/imgs/pessoa7.jpg", categoria: "musica" },
    { nome: "Theo Ramos", profissao: "Escultor e ceramista", imagem: "/imgs/pessoa8.jpg", categoria: "artes-visuais" },
    { nome: "Lívia Andrade", profissao: "Pintora e muralista", imagem: "/imgs/pessoa9.jpg", categoria: "artes-visuais" },
    { nome: "Lucas Azevedo", profissao: "Fotógrafo", imagem: "/imgs/pessoa10.jpg", categoria: "fotografia" },
    { nome: "Ayumi Takahashi", profissao: "Pintora", imagem: "/imgs/pessoa11.jpg", categoria: "artes-visuais" },
    { nome: "Otávio Klein", profissao: "Modelo", imagem: "/imgs/pessoa12.jpg", categoria: "moda" },
    { nome: "Jorge Mendez", profissao: "Cantor e Compositor", imagem: "/imgs/pessoa13.jpg", categoria: "musica" },
    { nome: "AZZ", profissao: "Grupo de dança", imagem: "/imgs/pessoa14.jpg", categoria: "danca" },
    { nome: "Elias Nobre", profissao: "Ator", imagem: "/imgs/pessoa15.jpg", categoria: "atuacao" },
    { nome: "Nina Lobo", profissao: "Cantora", imagem: "/imgs/pessoa16.jpg", categoria: "musica" },
    { nome: "Claire Dupont", profissao: "Cantora e Compositora", imagem: "/imgs/pessoa17.jpg", categoria: "musica" },
    { nome: "Luna Navarro", profissao: "Artista de body art", imagem: "/imgs/pessoa18.jpg", categoria: "outros" },
    { nome: "Gabriel Munhoz", profissao: "Modelo", imagem: "/imgs/pessoa19.jpg", categoria: "moda" },
    { nome: "Iara Vasques", profissao: "Estilista e figurinista teatral", imagem: "/imgs/pessoa20.jpg", categoria: "moda" }
  ];

  const cardsContainer = document.getElementById("cardsContainer");
  const searchInput = document.getElementById("searchInput");
  const filterToggle = document.getElementById("filterToggle");
  const filterList = document.getElementById("filterList");
  let filtroSelecionado = "";

  // Mostrar todos ao carregar
  renderCards(artistas);

  // Abrir/fechar dropdown
  filterToggle.addEventListener("click", () => {
    filterList.classList.toggle("hidden");
  });

  // Aplicar filtro ao clicar
  filterList.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      filtroSelecionado = item.dataset.categoria;
      aplicarFiltro();
      filterList.classList.add("hidden");
    });
  });

  // Filtrar ao digitar
  searchInput.addEventListener("input", aplicarFiltro);

  function aplicarFiltro() {
    const termoBusca = searchInput.value.toLowerCase();

    const filtrados = artistas.filter(artista => {
      const nomeMatch = artista.nome.toLowerCase().includes(termoBusca);
      const profissaoMatch = artista.profissao.toLowerCase().includes(termoBusca);
      const categoriaMatch = filtroSelecionado === "" || artista.categoria === filtroSelecionado;
      return (nomeMatch || profissaoMatch) && categoriaMatch;
    });

    renderCards(filtrados);
  }

  function renderCards(lista) {
    cardsContainer.innerHTML = "";
    lista.forEach(artista => {
      const card = document.createElement("div");
      card.className = "artist-card";
      card.innerHTML = `
        <img src="${artista.imagem}" alt="${artista.nome}">
        <div class="info">
          <h3>${artista.nome}</h3>
          <p>${artista.profissao}</p>
        </div>
        <button class="chat-btn" onclick="window.location.href='chat.html'">Conversar</button>
        <div class="rating">★★★★☆</div>
      `;
      cardsContainer.appendChild(card);
    });
  }
