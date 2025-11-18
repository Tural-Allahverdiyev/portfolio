// Tema dəyişimi
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
});

// Burger menyu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  navLinks.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});
// 🔗 Naviqasiya linklərinə klik edəndə menyunu bağla və bölməyə get
const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    // menyunu bağla
    burger.classList.remove("active");
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    // həmin bölməyə smooth scroll et
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // navbar hündürlüyü qədər boşluq
        behavior: "smooth",
      });
    }
  });
});

// Dil dəyişimi (sadə toggle üçün)
// 🌐 Sadə dil dəyişimi (AZ ⇄ EN)
// 🌐 DİL DƏYİŞİMİ (AZ <-> EN)
const translations = {
  az: {
    about: "Haqqımda",
    projects: "Layihələr",
    contact: "Əlaqə",
    heroText1: "Salam, mən",
    heroText2: "Fullstack Developer",
    heroBtn: "Layihələrimə bax",
    aboutTitle: "Haqqımda",
    aboutP1:
      "Mən Tural Allahverdiyev, gecə saatlarında belə kod yazmaqdan zövq alan bir Fullstack Developerəm. Özümü bu sahədə yeni saysam da, sürətlə inkişaf etməyə və hər yazdığım sətirdə daha çox öyrənməyə çalışıram.",
    aboutP2:
      "HTML, CSS, JavaScript və React texnologiyaları ilə real layihələr hazırlayıram. Qarşıma məqsəd qoymuşam — Node.js və backend sahəsində də güclənmək və tam çevik layihələr yarada bilmək.",
    aboutP3:
      "Mənim üçün bu, sadəcə kod yazmaq deyil — yeni ideyaları həyata keçirmək, hər dəfə bir az daha yaxşısını bacarmaq deməkdir.",
    aboutBtn: "Layihələrimə bax",
    contactTitle: "Əlaqə",
    contactText:
      "Mənimlə əlaqə saxlamaq istəyirsinizsə, aşağıdakı formu doldura bilərsiniz 👇",
    formName: "Adınız",
    formEmail: "Email ünvanınız",
    formMessage: "Mesajınız...",
    formBtn: "Göndər",
    footerText: "© 2025 Tural Allahverdiyev. Bütün hüquqlar qorunur.",

    // 💼 Layihələr (AZ)
    projectTitle1: "Portfolio Saytı",
    projectDesc1:
      "HTML, CSS və JavaScript ilə hazırlanmış şəxsi portfolio layihəm.",
    projectTitle2: "GYM Saytı",
    projectDesc2:
      "İdman mərkəzi üçün responsive dizaynlı HTML, CSS və JS sayt.",
    projectTitle3: "Online Market",
    projectDesc3:
      "Sadə məhsul kataloqu və səbət funksiyası olan HTML, CSS və JS layihəsi.",
    projectTitle4: "Kalkulyator",
    projectDesc4:
      "Təmiz JavaScript ilə hazırlanmış interaktiv kalkulyator layihəsi.",
    projectBtnLive: "Canlı Bax",
    projectBtnGit: "GitHub",
    directContact: "Və ya birbaşa əlaqə saxlayın:",
    callText: "📞 Zəng et",
    whatsappText: "💬 WhatsApp ilə yaz",
    certificatesList: [
      {
        title: "CSS (Basic) — HackerRank",
        desc: "CSS əsasları üzrə HackerRank sertifikatına sahibəm.",
        btn: "Sertifikata Bax",
      },
      {
        title: "REACT (Basic) — HackerRank",
        desc: "React əsasları üzrə HackerRank sertifikatına sahibəm.",
        btn: "Sertifikata Bax",
      },
    ],
    certificates: "Sertifikatlar",
    projectTitle5: "SHOP.CO E-commerce",
    projectDesc5:
      "Modern dizayna sahib HTML, CSS və JavaScript ilə hazırlanmış e-commerce mağaza şablonu.",
  },
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    heroText1: "Hello, I'm",
    heroText2: "Fullstack Developer",
    heroBtn: "View My Projects",
    aboutTitle: "About Me",
    aboutP1:
      "I'm Tural Allahverdiyev — a Fullstack Developer who enjoys coding even late at night. Although I’m still new to the field, I’m constantly learning and improving with every line of code I write.",
    aboutP2:
      "I build real-world projects using HTML, CSS, JavaScript, and React. My goal is to strengthen my skills in Node.js and backend development to create fully dynamic projects.",
    aboutP3:
      "For me, this isn’t just about writing code — it’s about bringing new ideas to life and striving to be a little better with every project.",
    aboutBtn: "View My Projects",
    aboutBtn: "View My Projects",
    contactTitle: "Contact",
    contactText:
      "If you'd like to get in touch with me, please fill out the form below 👇",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message...",
    formBtn: "Send",
    footerText: "© 2025 Tural Allahverdiyev. All rights reserved.",

    // 💼 Projects (EN)
    projectTitle1: "Portfolio Website",
    projectDesc1: "My personal portfolio built with HTML, CSS, and JavaScript.",
    projectTitle2: "Gym Website",
    projectDesc2:
      "A responsive fitness center website made using HTML, CSS, and JS.",
    projectTitle3: "Online Market",
    projectDesc3:
      "A simple product catalog with a shopping cart built with HTML, CSS, and JS.",
    projectTitle4: "Calculator",
    projectDesc4: "An interactive calculator built with pure JavaScript.",
    projectBtnLive: "Live Demo",
    projectBtnGit: "GitHub",
    directContact: "Or contact me directly:",
    callText: "📞 Call",
    whatsappText: "💬 Message on WhatsApp",
    certificatesList: [
      {
        title: "CSS (Basic) — HackerRank",
        desc: "I am certified in CSS basics by HackerRank.",
        btn: "View Certificate",
      },
      {
        title: "REACT (Basic) — HackerRank",
        desc: "I am certified in React basics by HackerRank.",
        btn: "View Certificate",
      },
    ],
    certificates: "Certificates",
    projectTitle5: "SHOP.CO E-commerce",
    projectDesc5:
      "A modern and minimal e-commerce website template built with HTML, CSS, and JavaScript.",
  },
};

const langBtnSwitch = document.getElementById("langBtn");
let currentLang = "az";

langBtnSwitch.addEventListener("click", () => {
  currentLang = currentLang === "az" ? "en" : "az";
  langBtnSwitch.textContent = currentLang.toUpperCase();
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelector(".contact-info p").textContent = t.directContact;
  document.querySelectorAll(".contact-link")[0].textContent = t.callText;
  document.querySelectorAll(".contact-link")[1].textContent = t.whatsappText;
  document.querySelector("#projects h2").textContent = t.projects;
  document.querySelectorAll(".project-card h3")[0].textContent =
    t.projectTitle1;
  document.querySelectorAll(".project-card p")[0].textContent = t.projectDesc1;
  document.querySelectorAll(".project-card h3")[1].textContent =
    t.projectTitle2;
  document.querySelectorAll(".project-card p")[1].textContent = t.projectDesc2;
  document.querySelectorAll(".project-card h3")[2].textContent =
    t.projectTitle3;
  document.querySelectorAll(".project-card p")[2].textContent = t.projectDesc3;
  document.querySelectorAll(".project-card h3")[3].textContent =
    t.projectTitle4;
  document.querySelectorAll(".project-card p")[3].textContent = t.projectDesc4;
  document
    .querySelectorAll(".project-card .btn-outline:first-child")
    .forEach((btn) => (btn.textContent = t.projectBtnLive));
  document
    .querySelectorAll(".project-card .btn-outline:last-child")
    .forEach((btn) => (btn.textContent = t.projectBtnGit));
  // 5th project - SHOP.CO
  document.querySelectorAll(".project-card h3")[4].textContent =
    t.projectTitle5;
  document.querySelectorAll(".project-card p")[4].textContent = t.projectDesc5;

  // Certificates
  document.querySelector("section.certificates h2").textContent = t.certificates;


  // bütün sertifikat kartları
  const certCards = document.querySelectorAll(".cert-card");

  certCards.forEach((card, index) => {
    const data = t.certificatesList[index];
    if (!data) return;

    card.querySelector("h3").textContent = data.title;
    card.querySelector("p").textContent = data.desc;
    card.querySelector(".btn-outline").textContent = data.btn;
  });

  // Navbar
  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;
  document.querySelector('a[href="#certificates"]').textContent =
    t.certificates;

  // Hero
  document.querySelector(
    ".hero h1"
  ).innerHTML = `${t.heroText1} <span>Tural Allahverdiyev</span>`;
  document.querySelector(".hero p").textContent = t.heroText2;
  document.querySelector(".hero .cta-btn").textContent = t.heroBtn;

  // About
  document.querySelector(".about-text h2").textContent = t.aboutTitle;
  const aboutPs = document.querySelectorAll(".about-text p");
  aboutPs[0].textContent = t.aboutP1;
  aboutPs[1].textContent = t.aboutP2;
  aboutPs[2].textContent = t.aboutP3;
  document.querySelector(".about-text .btn-outline").textContent = t.aboutBtn;

  // Contact
  document.querySelector("#contact h2").textContent = t.contactTitle;
  document.querySelector("#contact p").textContent = t.contactText;
  document.querySelector('input[name="name"]').placeholder = t.formName;
  document.querySelector('input[name="email"]').placeholder = t.formEmail;
  document.querySelector('textarea[name="message"]').placeholder =
    t.formMessage;
  document.querySelector(".btn-send").textContent = t.formBtn;

  // Footer
  document.querySelector(".footer-content p").textContent = t.footerText;
}

// 📄 CV dropdown menyusu
const cvMenu = document.querySelector(".cv-menu");
const cvBtn = document.getElementById("cvBtn");
const cvDropdown = document.getElementById("cvDropdown");

cvBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (cvMenu.classList.contains("open")) {
    cvMenu.classList.remove("open");
  } else {
    cvMenu.classList.add("open");
  }
});

// Səhifəyə klikləyəndə bağlanır
document.addEventListener("click", (e) => {
  if (!cvMenu.contains(e.target)) {
    cvMenu.classList.remove("open");
  }
});

// 🔗 Naviqasiya linkinə klikləndikdə menyunu bağla və scroll et
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Target sekmənin id-si (məsələn: #about)
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Smooth scroll
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // navbar hündürlüyünə görə düzəliş
        behavior: "smooth",
      });
    }

    // ✅ Menyunu bağla və overlayi gizlət
    burger.classList.remove("active");
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
// 📍 Aktiv bölməni vurğula (scroll zamanı)
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) {
    console.warn("❌ Form tapılmadı!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Göndərilir...";
    status.className = "form-status loading";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();

        // ✅ Uğurlu animasiya
        status.innerHTML = `<div class="checkmark"></div> <span>Mesaj göndərildi!</span>`;
        status.className = "form-status success";

        // 4 saniyəyə status silinsin
        setTimeout(() => {
          status.innerHTML = "";
        }, 4000);
      } else {
        status.textContent = "❌ Xəta baş verdi. Yenidən yoxlayın.";
        status.className = "form-status error";
      }
    } catch (err) {
      status.textContent = "⚠️ Şəbəkə problemi. Bir az sonra yenidən yoxlayın.";
      status.className = "form-status error";
    }
  });
});
