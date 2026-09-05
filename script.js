/**
 * ============================================================================
 * WEBSITE RESMI SEKOLAH — SCRIPT.JS
 * Vanilla JavaScript untuk Navigasi, Lightbox Galeri, Integrasi WhatsApp,
 * dan Interaksi UI.
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ==========================================================================
     1. PENGATURAN DATA SEKOLAH (EASY EDIT CONFIG)
     Silakan ubah data di bawah ini sesuai dengan identitas resmi sekolah.
     ========================================================================== */
  const schoolConfig = {
    // Nama & Slogan Sekolah
    name: "SDIT AN NAJAH",
    slogan: "Kuat iman, ilmu, & akhlak",

    // Nomor WhatsApp resmi sekolah (Gunakan kode negara tanpa tanda '+', contoh: 6281234567890)
    whatsappNumber: "6281264446836",

    // Alamat Sekolah
    address: "Jln. Bejo, Gg. Sejahtera No. 26",

    // Tautan Media Sosial Resmi
    social: {
      facebook: "https://www.facebook.com/share/1BEJNhWWeT/",
      youtube: "https://www.youtube.com/@tksdislamterpaduannajah7046",
      instagram: "https://www.instagram.com/sdit_annajah?igsi=MWxwYWVxcXhwMXFreA==",
      tiktok: "https://www.tiktok.com/@sdit.annajah?_r=1&_t=ZS-99HSjbhWvzE"
    },

    // Pengaturan Google Maps
    maps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.6429339072429!2d98.74004983174065!3d3.609282881240372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131303dcdf0db%3A0xc0599d2d40b92c5f!2sTKIT%20dan%20SDIT%20An%20Najah%20Deli%20Serdang!5e1!3m2!1sid!2sid!4v1787986269716!5m2!1sid!2sid",
      directionsUrl: "https://maps.app.goo.gl/RRBmpdAoVanFdJpz9"
    }
  };

  /* ==========================================================================
     2. DATA FOTO GALERI & KEGIATAN
     Struktur ini memungkinkan penambahan foto dan kegiatan baru dengan mudah.
     ========================================================================== */
  const galleryData = {
    perayaan: {
      title: "Pentas Seni",
      photos: [
        "images/kegiatan/perayaan-1.jpg",
        "images/kegiatan/perayaan-2.jpg"
      ]
    },
    studytour: {
      title: "Study Tour",
      photos: [
        "images/kegiatan/studytour-1.jpeg",
        "images/kegiatan/studytour-2.jpeg",
        "images/kegiatan/studytour-3.PNG",
        "images/kegiatan/studytour-4.PNG"
      ]
    },
    maulid: {
      title: "Sidang Tahfizh Al-Qur'an",
      photos: [
        "images/kegiatan/maulid-1.JPG",
        "images/kegiatan/maulid-2.JPG", 
      ]
    },
    upacara: {
      title: "Upacara 17 Agustus",
      photos: [
        "images/kegiatan/upacara-1.PNG",
        "images/kegiatan/upacara-2.PNG",
        "images/kegiatan/upacara-3.jpeg",
        "images/kegiatan/upacara-4.jpeg"
      ]
    },
    pramuka: {
      title: "maulid nabi",
      photos: [
        "images/kegiatan/maulidnabi1.jpeg",
        "images/kegiatan/maulidnabi2.jpeg",
        "images/kegiatan/maulidnabi3.jpg",
        "images/kegiatan/maulidnabi4.jpg"
      ]
    },
    tahfidz: {
      title: "Wisuda Tahfidz Al-Qur'an",
      photos: [
        "images/kegiatan/tahfidz-1.jpg",
        "images/kegiatan/tahfidz-2.jpg"
      ]
    },
    manasik: {
      title: "Reward Maghrib Mengaji",
      photos: [
        "images/kegiatan/manasik-1.jpeg",
        "images/kegiatan/manasik-2.jpeg"
      ]
    },
    classmeeting: {
      title: "Pemenang Lomba 17 Agustus",
      photos: [
        "images/kegiatan/classmeeting-1.jpeg",
        "images/kegiatan/classmeeting-2.jpeg",
        "images/kegiatan/classmeeting-3.jpeg",
        "images/kegiatan/classmeeting-4.jpeg"
      ]
    },
    marketday: {
      title: "Market Day & Kreativitas",
      photos: [
        "images/kegiatan/marketday-1.jpeg",
        "images/kegiatan/marketday-2.jpeg"
      ]
    }
  };

  /* ==========================================================================
     3. INISIALISASI TAUTAN WHATSAPP, MEDIA SOSIAL, & PETA SECARA DINAMIS
     ========================================================================== */
  function initDynamicLinks() {
    // Tombol WhatsApp Pendaftaran (Hero)
    const pendaftaranBtns = document.querySelectorAll(".js-wa-pendaftaran");
    const pendaftaranText = encodeURIComponent("Assalamu'alaikum, saya ingin mendapatkan informasi mengenai pendaftaran.");
    const pendaftaranUrl = `https://wa.me/${schoolConfig.whatsappNumber}?text=${pendaftaranText}`;
    
    pendaftaranBtns.forEach(btn => {
      btn.setAttribute("href", pendaftaranUrl);
    });

    // Tombol Floating WhatsApp (Pojok Kanan Bawah)
    const floatingWaBtn = document.querySelector(".js-wa-floating");
    const floatingWaText = encodeURIComponent("Assalamu'alaikum, saya ingin mendapatkan informasi mengenai sekolah.");
    const floatingWaUrl = `https://wa.me/${schoolConfig.whatsappNumber}?text=${floatingWaText}`;
    if (floatingWaBtn) {
      floatingWaBtn.setAttribute("href", floatingWaUrl);
    }

    // Tautan Langsung WhatsApp di Footer
    const directWaLinks = document.querySelectorAll(".js-wa-direct");
    directWaLinks.forEach(link => {
      link.setAttribute("href", `https://wa.me/${schoolConfig.whatsappNumber}`);
    });

    // Google Maps Iframe & Petunjuk Arah
    const mapIframe = document.getElementById("googleMapIframe");
    if (mapIframe && schoolConfig.maps.embedUrl) {
      mapIframe.setAttribute("src", schoolConfig.maps.embedUrl);
    }

    const directionsBtn = document.getElementById("btnDirections");
    if (directionsBtn && schoolConfig.maps.directionsUrl) {
      directionsBtn.setAttribute("href", schoolConfig.maps.directionsUrl);
    }

    // Media Sosial di Bagian Kontak
    const fbContact = document.querySelector(".social-btn.facebook");
    if (fbContact && schoolConfig.social.facebook) fbContact.setAttribute("href", schoolConfig.social.facebook);

    const ytContact = document.querySelector(".social-btn.youtube");
    if (ytContact && schoolConfig.social.youtube) ytContact.setAttribute("href", schoolConfig.social.youtube);

    const igContact = document.querySelector(".social-btn.instagram");
    if (igContact && schoolConfig.social.instagram) igContact.setAttribute("href", schoolConfig.social.instagram);

    const ttContact = document.querySelector(".social-btn.tiktok");
    if (ttContact && schoolConfig.social.tiktok) ttContact.setAttribute("href", schoolConfig.social.tiktok);

    // Media Sosial di Footer
    const footerSocials = document.querySelectorAll(".footer-social-icons a");
    if (footerSocials.length >= 4) {
      if (schoolConfig.social.facebook) footerSocials[0].setAttribute("href", schoolConfig.social.facebook);
      if (schoolConfig.social.youtube) footerSocials[1].setAttribute("href", schoolConfig.social.youtube);
      if (schoolConfig.social.instagram) footerSocials[2].setAttribute("href", schoolConfig.social.instagram);
      if (schoolConfig.social.tiktok) footerSocials[3].setAttribute("href", schoolConfig.social.tiktok);
    }
  }

  initDynamicLinks();

  /* ==========================================================================
     4. NAVBAR SCROLL EFFECT & ACTIVE STATE
     ========================================================================== */
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
    highlightCurrentSection();
  }

  function highlightCurrentSection() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  /* ==========================================================================
     5. MOBILE HAMBURGER MENU
     ========================================================================== */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Menutup menu mobile saat tautan menu diklik
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Menutup menu jika klik di luar navbar pada mobile
    document.addEventListener("click", (e) => {
      if (!siteHeader.contains(e.target) && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ==========================================================================
     6. FORMULIR KONTAK -> WHATSAPP SCRIPT
     ========================================================================== */
  const waContactForm = document.getElementById("waContactForm");
  const inputNama = document.getElementById("inputNama");
  const inputWhatsapp = document.getElementById("inputWhatsapp");
  const inputPesan = document.getElementById("inputPesan");

  if (waContactForm) {
    waContactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      // Validasi Nama
      if (!inputNama.value.trim()) {
        inputNama.classList.add("is-invalid");
        isValid = false;
      } else {
        inputNama.classList.remove("is-invalid");
      }

      // Validasi Nomor WhatsApp
      const waValue = inputWhatsapp.value.trim();
      const phoneRegex = /^[0-9+\s-]{8,18}$/;
      if (!waValue || !phoneRegex.test(waValue)) {
        inputWhatsapp.classList.add("is-invalid");
        isValid = false;
      } else {
        inputWhatsapp.classList.remove("is-invalid");
      }

      // Validasi Pesan
      if (!inputPesan.value.trim()) {
        inputPesan.classList.add("is-invalid");
        isValid = false;
      } else {
        inputPesan.classList.remove("is-invalid");
      }

      // Jika valid, format pesan dan alihkan ke WhatsApp
      if (isValid) {
        const textMessage = 
`Assalamu'alaikum, saya ${inputNama.value.trim()}.

Nomor WhatsApp: ${inputWhatsapp.value.trim()}

Pesan:
${inputPesan.value.trim()}`;

        const waTargetUrl = `https://wa.me/${schoolConfig.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
        
        // Buka tab WhatsApp
        window.open(waTargetUrl, "_blank", "noopener,noreferrer");

        // Reset form setelah kirim
        waContactForm.reset();
      }
    });

    // Hapus feedback error saat user mulai mengetik
    [inputNama, inputWhatsapp, inputPesan].forEach(input => {
      input.addEventListener("input", () => {
        if (input.value.trim()) {
          input.classList.remove("is-invalid");
        }
      });
    });
  }

  /* ==========================================================================
     7. MODAL LIGHTBOX GALERI (MULTI-FOTO & KEYBOARD ACCESSIBLE)
     ========================================================================== */
  const lightboxModal = document.getElementById("galleryLightbox");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCounter = document.getElementById("lightboxCounter");

  let currentActivityKey = null;
  let currentPhotoIndex = 0;

  // Membuka Lightbox untuk kegiatan tertentu
  function openLightbox(activityKey) {
    if (!galleryData[activityKey]) return;

    currentActivityKey = activityKey;
    currentPhotoIndex = 0;
    updateLightboxContent();

    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Mencegah scrolling background
    lightboxCloseBtn.focus();
  }

  // Menutup Lightbox
  function closeLightbox() {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Mengembalikan scrolling
  }

  // Memperbarui konten gambar dan counter di Lightbox
  function updateLightboxContent() {
    const activity = galleryData[currentActivityKey];
    if (!activity) return;

    const totalPhotos = activity.photos.length;
    const photoSrc = activity.photos[currentPhotoIndex];

    lightboxImg.src = photoSrc;
    lightboxImg.alt = `${activity.title} - Foto ${currentPhotoIndex + 1}`;
    lightboxTitle.textContent = activity.title;
    lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${totalPhotos}`;

    // Sembunyikan navigasi jika hanya ada 1 foto
    if (totalPhotos <= 1) {
      lightboxPrevBtn.style.display = "none";
      lightboxNextBtn.style.display = "none";
    } else {
      lightboxPrevBtn.style.display = "flex";
      lightboxNextBtn.style.display = "flex";
    }
  }

  // Navigasi ke Foto Berikutnya
  function showNextPhoto() {
    const activity = galleryData[currentActivityKey];
    if (!activity) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % activity.photos.length;
    updateLightboxContent();
  }

  // Navigasi ke Foto Sebelumnya
  function showPrevPhoto() {
    const activity = galleryData[currentActivityKey];
    if (!activity) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + activity.photos.length) % activity.photos.length;
    updateLightboxContent();
  }

  // Event Listeners Kartu Kegiatan
  const activityCards = document.querySelectorAll(".activity-card");
  activityCards.forEach(card => {
    const activityId = card.getAttribute("data-activity-id");

    card.addEventListener("click", () => {
      openLightbox(activityId);
    });

    // Dukungan navigasi keyboard (Enter & Space)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(activityId);
      }
    });
  });

  // Event Listeners Kontrol Lightbox
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", showNextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", showPrevPhoto);

  // Navigasi Keyboard (Escape, Panah Kiri, Panah Kanan)
  document.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      showNextPhoto();
    } else if (e.key === "ArrowLeft") {
      showPrevPhoto();
    }
  });

  /* ==========================================================================
     8. BACK TO TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById("backToTopBtn");

  function handleBackToTopVisibility() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }

  if (backToTopBtn) {
    window.addEventListener("scroll", handleBackToTopVisibility, { passive: true });
    
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================================================
     9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Hanya animasikan sekali
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback untuk browser lawas
    revealElements.forEach(el => el.classList.add("active"));
  }

  console.log("Website Resmi SDIT AN NAJAH berhasil diinisialisasi.");
});
// =========================================================
// POPUP BROSUR PPDB
// =========================================================

const brosurModal = document.getElementById("brosurModal");
const openBrosurBtn = document.getElementById("openBrosurBtn");
const closeBrosurBtn = document.getElementById("closeBrosurBtn");
const brosurOverlay = document.getElementById("brosurOverlay");


// BUKA BROSUR
openBrosurBtn.addEventListener("click", function () {
  brosurModal.classList.add("active");
  brosurModal.setAttribute("aria-hidden", "false");

  // Mencegah halaman belakang ikut scroll
  document.body.style.overflow = "hidden";
});


// TUTUP BROSUR
function closeBrosur() {
  brosurModal.classList.remove("active");
  brosurModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

closeBrosurBtn.addEventListener("click", closeBrosur);

brosurOverlay.addEventListener("click", closeBrosur);


// TUTUP DENGAN ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && brosurModal.classList.contains("active")) {
    closeBrosur();
  }
});