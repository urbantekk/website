
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  loader.style.transition = 'opacity 0.6s ease';
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 600);
});



  const hoverSound = document.getElementById('hover-sound');
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });
    function scrollToNextSection() {
      document.getElementById('scroll-sound').play();
      const firstSection = document.querySelector('section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
      const flash = document.getElementById('glitch-flash');
      flash.style.opacity = '1';
      setTimeout(() => flash.style.opacity = '0', 100);
    }

    const nav = document.getElementById('mainNav');
    const footer = document.getElementById('pageFooter');
    const header = document.querySelector('header');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
        nav.classList.remove('sticky');
        footer.classList.remove('visible');
          
        } else {
        nav.classList.add('sticky');
        footer.classList.add('visible');
          
        }
      });
    }, { threshold: 0.1 });
    observer.observe(header);

    const logo = document.querySelector(".logo-parallax");
    document.addEventListener("mousemove", function(e) {
      const offsetX = (e.clientX / window.innerWidth - 0.5) * 10;
      const offsetY = (e.clientY / window.innerHeight - 0.5) * 10;
      logo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    const slogans = [
      "HardTekk. Laut. Echt. UrbanTekk.",
      "Mehr Druck als dein Herz verträgt.",
      "Sound, der dich trifft wie 'ne Wand."
    ];
    const sloganEl = document.getElementById('active-slogan');
    setInterval(() => {
      sloganEl.style.opacity = 0;
      setTimeout(() => {
        const next = Math.floor(Math.random() * slogans.length);
        sloganEl.textContent = slogans[next];
        sloganEl.style.opacity = 1;
      }, 300);
    }, 5000);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      particlesJS('particles-js', {
        particles: {
          number: { value: 20 },
          size: { value: 2 },
          color: { value: ['#ffffff', '#00ffff', '#ff007f'] },
          opacity: {
            value: 0.1,
            random: true,
            anim: { enable: true, speed: 1.2, opacity_min: 0.03, sync: false }
          },
          shape: { type: 'circle' },
          line_linked: { enable: false },
          move: { enable: true, speed: 0.3, direction: 'none', out_mode: 'out' }
        },
        interactivity: { events: { onhover: { enable: false }, onclick: { enable: false } } },
        retina_detect: true
      });
    };
    document.head.appendChild(script);
    const parallaxBox = document.querySelector('.about-parallax-box');
  const contactBox = document.querySelector('.contact-box');
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  if (contactBox) contactObserver.observe(contactBox);
  const parallaxObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        parallaxBox.classList.add('visible');
      } else {
        parallaxBox.classList.remove('visible');
      }
    });
  }, { threshold: 0.5 });
  if (parallaxBox) parallaxObserver.observe(parallaxBox);
  const scrollSound = document.getElementById('scroll-sound');
  document.body.addEventListener('click', () => {
    scrollSound.play().catch(() => {});
    scrollSound.pause();
    scrollSound.currentTime = 0;
  }, { once: true });
  document.querySelectorAll('.parallax-scroll').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
  });
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  const logoBurst = document.querySelector('.logo-burst');
  let triggered = false;
  window.addEventListener('scroll', () => {
    if (!triggered && window.scrollY > 100) {
      logoBurst.classList.add('active');
      triggered = true;
      setTimeout(() => logoBurst.classList.remove('active'), 800);
    }
  });
  function updateCountdown() {
    const eventDate = new Date('2025-05-03T21:00:00');
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      document.getElementById('countdown').textContent = 'LIVE NOW';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').textContent = `Beginn in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();



  document.querySelectorAll('footer a').forEach(link => {
    if (link.textContent.includes('Impressum')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('impressum-modal').style.display = 'block';
      });
    }
    if (link.textContent.includes('Datenschutz')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('datenschutz-modal').style.display = 'block';
      });
    }
  });



  if (localStorage.getItem('cookiesAccepted')) {
    document.addEventListener('DOMContentLoaded', () => {
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.style.display = 'none';
    });
  }

  // Burger-Menü nur sichtbar nach Header
const burgerToggle = document.getElementById('burger-toggle');
const navElement = document.getElementById('mainNav');
const headerElement = document.querySelector('header');

if (burgerToggle && navElement && headerElement) {
  const burgerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Nur auf kleinen Bildschirmen (max-width: 768px)
      if (window.innerWidth <= 768) {
        burgerToggle.style.display = entry.isIntersecting ? 'none' : 'block';
      } else {
        burgerToggle.style.display = 'none';
      }
    });
  }, { threshold: 0.1 });
  burgerObserver.observe(headerElement);

  burgerToggle.addEventListener('click', () => {
  navElement.classList.add('open');
  burgerToggle.style.display = 'none';
  document.getElementById('close-nav').style.display = 'block';
});

document.getElementById('close-nav').addEventListener('click', () => {
  navElement.classList.remove('open');
  burgerToggle.style.display = 'block';
  document.getElementById('close-nav').style.display = 'none';
});

// Menü automatisch schließen bei Klick auf einen Link (nur mobil)
navElement.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navElement.classList.contains('open')) {
      navElement.classList.remove('open');
      burgerToggle.style.display = 'block';
      document.getElementById('close-nav').style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('club-mode');
    });
  }
});

}


