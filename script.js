// AOS (scroll animasiyası)
AOS.init({ duration: 800, once: true });

// İl
document.getElementById("year").textContent = new Date().getFullYear();

// Tema (Dark/Light)
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
}
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Dil resursları
const i18n = {
  az: {
    brand: "Tural <span>Allahverdiyev</span>",
    nav_about: "Haqqımda",
    nav_projects: "Layihələr",
    nav_contact: "Əlaqə",
    nav_cv: "CV",
    cv_az: "CV (AZ)",
    cv_en: "CV (EN)",
    hero_title: 'Salam, mən <span class="highlight">Tural Allahverdiyev</span>',
    hero_role: "Fullstack Developer • UI Enthusiast",
    hero_cta: "Layihələrimə bax",
    about_title: "Haqqımda",
    about_text:
      "Mən Tural Allahverdiyev, gənc olmasam da yeni başlayan bir Fullstack Developerəm. Müasir veb texnologiyalarla istifadəçi yönümlü, dinamik və funksional interfeyslər hazırlayıram. Məqsədim dizaynla funksionallığı birləşdirərək insanlara rahat, cəlbedici və işlək həllər təqdim etməkdir. Bu yolda özümə inanıram və düşünürəm ki, istənilən dizaynı qısa müddətdə funksional şəkildə həyata keçirə bilərəm. Keçmişdə mühasibatlıq və anbar idarəçiliyi kimi sahələrdə çalışmışam və bu təcrübələr mənə sistemli düşünmə, məsuliyyət və detallara diqqət kimi bacarıqlar qazandırıb. Daha ətraflı məlumat üçün CV faylımla tanış ola bilərsiniz.",
    projects_title: "Layihələr",
    proj_shopco_desc: "HTML, CSS və JS ilə hazırladığım responsive GYM.",
    proj_calc_desc: "JavaScript ilə yazılmış müasir kalkulyator interfeysi.",
    contact_title: "Əlaqə",
    contact_text: "Gəlin birlikdə əla nəsə yaradaq!",
    contact_btn: "Email göndər",
    live_demo: "Canlı bax",
    contact_btn_call: "Yaz və ya zəng et",
    contact_btn_email: "Email",
    copy_email: "Kopyala",
    send_email: "Buradan göndər",
    call_btn: "📞 Zəng et",
    whatsapp_btn: "💬 WhatsApp-da yaz",
  },
  en: {
    brand: "Tural <span>Allahverdiyev</span>",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_cv: "CV",
    cv_az: "CV (AZ)",
    cv_en: "CV (EN)",
    hero_title: 'Hi, I\'m <span class="highlight">Tural Allahverdiyev</span>',
    hero_role: "Fullstack Developer • UI Enthusiast",
    hero_cta: "View My Work",
    about_title: "About Me",
    about_text:
      "I’m Tural Allahverdiyev, a beginner yet passionate Fullstack Developer. I build user-oriented, dynamic and functional interfaces with modern web technologies. My goal is to combine design and functionality to deliver smooth, attractive and practical experiences. I believe in myself and I can turn almost any design into a working solution in a short time. In the past I worked in accounting and warehouse management, which strengthened my structured mindset, responsibility and attention to detail. For more information, please check my CV.",
    projects_title: "Projects",
    proj_shopco_desc:
      "A responsive online shop built with HTML, CSS and JavaScript.",
    proj_calc_desc: "A modern calculator interface built with JavaScript.",
    contact_title: "Contact",
    contact_text: "Let’s build something great together!",
    contact_btn: "Send Email",
    live_demo: "Live Demo",
    contact_btn_call: "Write or call",
    contact_btn_email: "Email",
    copy_email: "Copy",
    send_email: "Send from here",
    call_btn: "📞 Call me",
    whatsapp_btn: "💬 Message on WhatsApp",
  },
};

// Dil tətbiqi
const langBtn = document.getElementById("langBtn");
const savedLang = localStorage.getItem("lang") || "az";
applyLang(savedLang);
langBtn.textContent = savedLang.toUpperCase();

function applyLang(lang) {
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;
    // HTML içində span və s. üçün innerHTML istifadə edirik
    el.innerHTML = dict[key];
  });
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

// Dil düyməsi
langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "az";
  const next = current === "az" ? "en" : "az";
  applyLang(next);
  langBtn.textContent = next.toUpperCase();
});

// CV açılan menyu
const cvMenu = document.querySelector(".cv-menu");
const cvBtn = document.getElementById("cvBtn");
const cvDropdown = document.getElementById("cvDropdown");

cvBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (cvMenu.classList.contains("open")) {
    // bağlanma animasiyası
    cvDropdown.classList.add("closing");
    setTimeout(() => {
      cvMenu.classList.remove("open");
      cvDropdown.classList.remove("closing");
    }, 300);
  } else {
    // açılma animasiyası
    cvMenu.classList.add("open");
  }
});

document.addEventListener("click", (e) => {
  if (!cvMenu.contains(e.target)) {
    cvDropdown.classList.add("closing");
    setTimeout(() => {
      cvMenu.classList.remove("open");
      cvDropdown.classList.remove("closing");
    }, 300);
  }
});

// 🍔 Burger menyu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
  } else {
    navLinks.classList.add("open");
    overlay.classList.add("active");
  }

  burger.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  navLinks.classList.remove("open");
  overlay.classList.remove("active");
});
// Menyudan klikləyəndə avtomatik bağlansın
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
  });
});

// 📞 Əlaqə hissəsi

// --- Elementləri seçirik
const callBtn = document.getElementById("callBtn");
const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");
const emailBox = document.getElementById("emailBox");
const copyEmail = document.getElementById("copyEmail");
const emailText = document.getElementById("emailText");

// --- Zəng et
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = "tel:+994555479988";
  });
}

// --- WhatsApp-da yaz
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/994555479988", "_blank");
  });
}

// --- Email bölməsini aç / bağla
if (emailBtn && emailBox) {
  emailBtn.addEventListener("click", () => {
    emailBox.classList.toggle("show");
  });
}

// --- Emaili kopyala
if (copyEmail && emailText) {
  copyEmail.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.textContent);
    copyEmail.textContent = "📋 Kopyalandı!";
    setTimeout(() => (copyEmail.textContent = "📋 Kopyala"), 2000);
  });
}
