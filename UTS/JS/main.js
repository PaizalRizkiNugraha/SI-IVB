document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
    }, 1000);
  });
});


/*===== TOGGLE ICON NAFBAR ===== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*===== SCROLL SECTION ACTIVE LINK ===== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*===== STICKY NAVBAR ===== */
    let header = document.querySelector('header');
    header.classList.toggle('.sticky', window.scrollY > 100);

    /*===== REMOVE TOGGLE ICON AND NAFBAR ===== */
    menuIcon.classList,remove('fa-xmark');
    navbar.classList.remove('active');
};

/*===== SCROLL REVEAL ===== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

const contact = document.getElementById("contact");
contact.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    alert(
      `Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`
    );
    contact.reset();
  } else {
    alert("Silakan isi semua field!");
  }
});