/* ========= TRANSLATION DATA ========= */
const translations = {
  en: {
    nav_home: "Home",
    nav_skills: "Skills",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    about_title: "About.",
    projects_title: "Projects.",

    about_desc:
      "I am a game and web developer and Co-Founder of YCYL Studio. I develop 2D and 3D games using Unity and C#, focusing on gameplay systems, mechanics, and performance optimization. I also build modern websites and APIs, working on both frontend and backend development to create scalable, secure, and high-performance web applications. My work includes game prototypes, interactive experiences, dynamic websites, and custom API systems. I enjoy building systems from scratch and continuously improving my technical skills.",

    stat_projects: "Completed Projects",
    stat_years: "Years Experience",

    proj1_desc: "2D action stickman game created with Unity.",
    proj2_desc: "Indonesian mystery story game made with Unity.",
    proj3_desc: "Idle tower defense prototype with progression system.",

    view_project: "View Project",
    contact_email: "Email",
    contact_instagram: "Instagram",
  },

  id: {
    nav_home: "Beranda",
    nav_skills: "Keahlian",
    nav_about: "Tentang Saya",
    nav_projects: "Proyek",
    nav_contact: "Kontak",

    about_title: "Tentang Saya.",
    projects_title: "Proyek.",

    about_desc:
      "Saya adalah game dan web developer serta Co-Founder YCYL Studio. Saya mengembangkan game 2D dan 3D menggunakan Unity dan C#, dengan fokus pada sistem gameplay, mekanik game, dan optimasi performa. Saya juga membuat website modern dan API, mengerjakan frontend dan backend untuk menciptakan aplikasi web yang skalabel, aman, dan berkinerja tinggi. Proyek saya meliputi prototype game, pengalaman interaktif, website dinamis, dan sistem API kustom. Saya senang membangun sistem dari nol dan terus meningkatkan kemampuan teknis saya.",

    stat_projects: "Proyek Selesai",
    stat_years: "Tahun Pengalaman",

    proj1_desc: "Game aksi stickman 2D dibuat dengan Unity.",
    proj2_desc: "Game cerita misteri Indonesia dibuat dengan Unity.",
    proj3_desc: "Prototype game idle tower defense dengan sistem progres.",

    view_project: "Lihat Proyek",
    contact_email: "Email",
    contact_instagram: "Instagram",
  },
};

/* AUTO LANGUAGE DETECT */
let lang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("id") ? "id" : "en");

/* APPLY TRANSLATION */
function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.getElementById("langBtn").textContent = lang.toUpperCase();
  document
    .querySelectorAll(".mobileLang")
    .forEach((b) => (b.textContent = lang.toUpperCase()));

  document.getElementById("heroTitle").textContent =
    lang === "en" ? "Hi, I'm Jason." : "Halo, saya Jason.";

  localStorage.setItem("lang", lang);
}

/* TOGGLE LANG */
function toggleLang() {
  lang = lang === "en" ? "id" : "en";
  applyLanguage();
}

/* ROLE TEXT */
const roles = {
  en: ["Full-stack Developer", "Android Developer", "Unity Game Developer"],
  id: ["Pengembang Full-stack", "Pengembang Android", "Pengembang Game Unity"],
};

let roleIndex = 0;
const roleText = document.getElementById("roleText");

function changeRole() {
  roleText.style.opacity = 0;
  roleText.style.transform = "translateY(10px)";

  setTimeout(() => {
    roleText.textContent = roles[lang][roleIndex];
    roleIndex = (roleIndex + 1) % roles[lang].length;
    roleText.style.opacity = 1;
    roleText.style.transform = "translateY(0)";
  }, 400);
}

setInterval(changeRole, 2500);

/* MENU MOBILE */
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("navOverlay");

function toggleMenu() {
  nav.classList.toggle("open");
  overlay.classList.toggle("show");
}

overlay.onclick = () => {
  nav.classList.remove("open");
  overlay.classList.remove("show");
};

document.querySelectorAll(".navLinks a").forEach((link) => {
  link.onclick = () => {
    nav.classList.remove("open");
    overlay.classList.remove("show");
  };
});

/* INIT */
applyLanguage();
changeRole();
