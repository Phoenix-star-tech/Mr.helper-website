/**
 * MR. HELPER - INTERACTIVE CLIENT CONTROLLER
 * Handles local search, city selector, modal popups, FAQs, and Play Store redirection
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearchWidget();
  initModals();
  initFaqAccordion();
  initBookingEstimator();
  initMoreServicesToggle();
});

/* Navigation Bar */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      toggleBtn.innerHTML = navMenu.classList.contains('mobile-open') ? '✕' : '☰';
    });
  }
}

/* Local SEO Search & Route Redirector */
function initSearchWidget() {
  const searchForm = document.getElementById('localSearchForm');
  const serviceSelect = document.getElementById('searchService');
  const citySelect = document.getElementById('searchCity');
  const routeBtn = document.getElementById('btnSearchNow');

  // Populate options dynamically if select elements exist and are empty
  if (serviceSelect && serviceSelect.options.length <= 1 && typeof MR_HELPER_DATA !== 'undefined') {
    MR_HELPER_DATA.services.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.slug;
      opt.textContent = `${s.icon} ${s.name}`;
      serviceSelect.appendChild(opt);
    });
  }

  if (citySelect && citySelect.options.length <= 1 && typeof MR_HELPER_DATA !== 'undefined') {
    MR_HELPER_DATA.cities.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.slug;
      opt.textContent = `📍 ${c.name} (${c.state})`;
      citySelect.appendChild(opt);
    });
  }

  const handleRoute = (e) => {
    if (e) e.preventDefault();
    const service = serviceSelect?.value || 'plumber';
    const city = citySelect?.value || 'hyderabad';

    // Target specific dedicated SEO landing page if available, else open services page with query params
    const staticCombinations = [
      'plumber-in-hyderabad',
      'plumber-in-warangal',
      'plumber-in-hanamkonda',
      'electrician-in-hyderabad',
      'electrician-in-warangal',
      'electrician-in-hanamkonda',
      'ac-repair-in-hyderabad',
      'ac-repair-in-warangal',
      'home-cleaning-in-hyderabad',
      'home-cleaning-in-warangal'
    ];

    const targetSlug = `${service}-in-${city}`;
    const isInServicesSubfolder = window.location.pathname.includes('/services/');
    const basePath = isInServicesSubfolder ? '' : 'services/';

    if (staticCombinations.includes(targetSlug)) {
      window.location.href = `${basePath}${targetSlug}.html`;
    } else {
      // Direct to services catalog with filters
      window.location.href = `${isInServicesSubfolder ? '../' : ''}services.html?service=${service}&city=${city}`;
    }
  };

  if (searchForm) {
    searchForm.addEventListener('submit', handleRoute);
  }
  if (routeBtn) {
    routeBtn.addEventListener('click', handleRoute);
  }

  // Handle city pill quick clicks
  const cityPills = document.querySelectorAll('.city-pill');
  cityPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const city = pill.getAttribute('data-city');
      if (city && citySelect) {
        citySelect.value = city;
        cityPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  });
}

/* Modal Controller (Booking Only) */
function initModals() {
  const bookingTriggers = document.querySelectorAll('.trigger-book-modal');
  const bookModal = document.getElementById('bookModal');
  const closeBtns = document.querySelectorAll('.modal-close-btn, .modal-overlay');

  bookingTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || 'Home Service';
      const inputService = document.getElementById('modalServiceInput');
      if (inputService) inputService.value = serviceName;
      if (bookModal) bookModal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      }
    });
  });
}

/* FAQ Accordion */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close other accordions
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* Live Booking Estimator */
function initBookingEstimator() {
  const bookForm = document.getElementById('quickBookingForm');
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = document.getElementById('modalServiceInput')?.value || 'Home Service';
      const phone = document.getElementById('modalUserPhone')?.value || '';
      const city = document.getElementById('modalUserCity')?.value || 'Hyderabad';
      
      // Open WhatsApp booking or direct to Google Play
      const message = `Hello Mr. Helper! I need to book *${service}* in *${city}*. My phone is ${phone}. Please confirm technician availability.`;
      const encodedMsg = encodeURIComponent(message);
      
      // Notify user and launch Play Store / WhatsApp
      alert(`Booking request initiated for ${service} in ${city}! Opening Mr. Helper official channel...`);
      window.open(`https://wa.me/919123456789?text=${encodedMsg}`, '_blank');
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  }
}

/* Toggle Expand / Collapse Extra Services */
function initMoreServicesToggle() {
  const toggleBtn = document.getElementById('btnToggleMoreServices');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const extraCards = document.querySelectorAll('.service-card-extra');
    if (!extraCards.length) return;

    const isExpanded = extraCards[0].classList.contains('visible');
    if (isExpanded) {
      extraCards.forEach(card => card.classList.remove('visible'));
      toggleBtn.innerHTML = '<span>View More Services (4+)</span> <span>↓</span>';
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      extraCards.forEach(card => card.classList.add('visible'));
      toggleBtn.innerHTML = '<span>Show Fewer Services</span> <span>↑</span>';
    }
  });
}
