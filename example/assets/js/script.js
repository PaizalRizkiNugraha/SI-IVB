document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan loading screen setelah halaman selesai dimuat
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
    }, 1000); // Delay 1 detik untuk animasi
  });
});
// // Hobby Item Hover Effect
// const hobbyItems = document.querySelectorAll("hobbies");
// hobbyItems.forEach((item) => {
//   item.addEventListener("mouseenter", function () {
//     const desc = this.querySelector(".hobby-desc");
//     desc.classList.remove("hidden");
//   });

//   item.addEventListener("mouseleave", function () {
//     const desc = this.querySelector(".hobby-desc");
//     desc.classList.add("hidden");
//   });
// });
// Contact Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    alert(
      `Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`
    );
    contactForm.reset();
  } else {
    alert("Silakan isi semua field!");
  }
});

// Hire Button Click Event
const hireMeBtn = document.getElementById("hireMeBtn");

// Tambahkan fungsi untuk modal Hire Me
const hireModal = document.getElementById("hireModal");
const closeModal = document.getElementById("closeModal");
const hireForm = document.getElementById("hireForm");

hireMeBtn.addEventListener("click", function () {
  hireModal.classList.remove("hidden");
});

// Cek apakah elemen ada sebelum menambahkan event listener
if (closeModal) {
    closeModal.addEventListener("click", function () {
        hireModal.classList.add("hidden");
    });
}

// Tambahkan event listener untuk klik di luar modal
window.addEventListener("click", function (event) {
    if (event.target === hireModal) {
        hireModal.classList.add("hidden");
    }
});

// Handle hire form submission
hireForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("hireName").value;
    const email = document.getElementById("hireEmail").value;
    const project = document.getElementById("hireProject").value;
    
    if (name && email && project) {
        alert(`Terima kasih ${name}! Permintaan Anda untuk proyek ${project} telah terkirim.`);
        hireForm.reset();
        hireModal.classList.add("hidden");
    } else {
        alert("Silakan isi semua field!");
    }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".slide-up");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("slide-up");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load