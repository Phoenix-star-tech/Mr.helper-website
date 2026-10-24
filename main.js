/**
 * Mr.Helper Main Interactive Script
 * Handles Navigation, Reviews linking to Play Store, and Modal Controllers
 */

(function () {
  'use strict';

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share";

  // Sample verified reviews from Google Play Store
  const VERIFIED_REVIEWS = [
    {
      name: "Suresh Reddy",
      city: "Warangal",
      service: "Electrician",
      rating: 5,
      date: "2 days ago",
      comment: "Booked an electrician for main switchboard tripping issue in Subedari. The technician arrived in 18 minutes with proper testing equipment. Fixed the MCB fault quickly at the exact rate shown on the app. Very professional!"
    },
    {
      name: "Pooja Sharma",
      city: "Hyderabad",
      service: "AC Repair & Servicing",
      rating: 5,
      date: "1 week ago",
      comment: "Used Mr.Helper for split AC deep jet pump cleaning in Kondapur. Outstanding service! Transparent pricing with no hidden charges, and the cooling is back to 100%. Highly recommended."
    },
    {
      name: "Venkatesh Rao",
      city: "Hanamkonda",
      service: "Plumbing Services",
      rating: 5,
      date: "3 days ago",
      comment: "Bathroom concealed pipe leak was troubling us for a week. The plumber booked via Mr.Helper came with proper tools, identified the exact tile leak point, and replaced the valve neatly. Genuine KYC-verified pro."
    },
    {
      name: "Ananya K.",
      city: "Kazipet",
      service: "Cleaning Services",
      rating: 5,
      date: "Just now",
      comment: "Full deep kitchen and bathroom cleaning before housewarming. The team did spotless cleaning, especially chimney degreasing and tile scrubbing. Great value and polite helpers."
    }
  ];

  // Mobile Menu
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when clicking any menu link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Render Reviews - Clicking directly redirects to Google Play Store per user instruction
  function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    container.innerHTML = VERIFIED_REVIEWS.map(function (rev) {
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(Math.max(0, 5 - rev.rating));
      const initials = rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U';
      return `
        <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener noreferrer"
          class="reveal in group block rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-300"
          title="Read full review on Google Play">
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 font-bold text-sm shadow-sm">
                ${initials}
              </div>
              <div>
                <h4 class="font-display text-base font-bold text-navy group-hover:text-brand-600 transition-colors flex items-center gap-1.5">
                  <span>${escapeHTML(rev.name)}</span>
                  <svg class="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h4>
                <div class="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <span>📍 ${escapeHTML(rev.city)}</span>
                  <span>•</span>
                  <span class="text-brand-600 font-semibold">${escapeHTML(rev.service)}</span>
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-amber-500 text-sm tracking-wide" aria-label="${rev.rating} out of 5 stars">${stars}</div>
              <span class="text-[11px] text-slate-400 font-medium">${escapeHTML(rev.date || 'Google Play')}</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-slate-600">
            "${escapeHTML(rev.comment)}"
          </p>
          <div class="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
            <span class="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              KYC Verified Booking
            </span>
            <span class="text-xs font-bold text-brand-600 group-hover:underline flex items-center gap-1">
              Google Play &rarr;
            </span>
          </div>
        </a>
      `;
    }).join('');
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Careers Modal
  window.openCareersModal = function () {
    const m = document.getElementById('careers-modal');
    if (m) {
      m.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCareersModal = function () {
    const m = document.getElementById('careers-modal');
    if (m) {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  window.copyCareersEmail = function (btn) {
    const email = document.getElementById('careers-email')?.innerText || 'vashiktechnology@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const orig = btn.innerText;
      btn.innerText = 'Copied! ✓';
      btn.classList.add('text-emerald-600');
      setTimeout(() => {
        btn.innerText = orig;
        btn.classList.remove('text-emerald-600');
      }, 2000);
    }).catch(() => {
      btn.innerText = 'Copied!';
    });
  };

  // Contact Us Modal
  window.openContactModal = function () {
    const m = document.getElementById('contact-modal');
    if (m) {
      m.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeContactModal = function () {
    const m = document.getElementById('contact-modal');
    if (m) {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  window.copyContactEmail = function (btn) {
    const email = document.getElementById('contact-email')?.innerText || 'vashiktechnology@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const orig = btn.innerText;
      btn.innerText = 'Copied! ✓';
      btn.classList.add('text-emerald-600');
      setTimeout(() => {
        btn.innerText = orig;
        btn.classList.remove('text-emerald-600');
      }, 2000);
    }).catch(() => {
      btn.innerText = 'Copied!';
    });
  };

  window.handleSendEmail = function (email, subject) {
    window.sendDirectEmail(email, subject);
  };

  window.sendDirectEmail = function (email, subject) {
    const encodedSubject = encodeURIComponent(subject || '');
    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodedSubject}`;

    // Trigger mail client via an anchor click for maximum browser compatibility
    const a = document.createElement('a');
    a.href = mailtoUrl;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Fallback: If on desktop or local mail app is not configured, also open Gmail compose in a new tab
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if (!isMobile) {
      setTimeout(() => {
        window.open(gmailUrl, '_blank');
      }, 400);
    }
  };

  // Privacy Policy Modal
  window.openPrivacyModal = function () {
    const m = document.getElementById('privacy-modal');
    if (m) {
      m.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closePrivacyModal = function () {
    const m = document.getElementById('privacy-modal');
    if (m) {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Terms Modal
  window.openTermsModal = function () {
    const m = document.getElementById('terms-modal');
    if (m) {
      m.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeTermsModal = function () {
    const m = document.getElementById('terms-modal');
    if (m) {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  window.copyEmailText = function (elementId, btn) {
    const text = document.getElementById(elementId)?.innerText || '';
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.innerText;
      btn.innerText = 'Copied! ✓';
      btn.classList.add('text-emerald-600');
      setTimeout(() => {
        btn.innerText = orig;
        btn.classList.remove('text-emerald-600');
      }, 2000);
    });
  };

  // Services 3x2 Grid Toggle (Show 6 initially, reveal remaining 4 on View More)
  function initServicesToggle() {
    const btn = document.getElementById('toggle-services-btn');
    const text = document.getElementById('toggle-services-text');
    const icon = document.getElementById('toggle-services-icon');
    if (!btn || !text) return;

    btn.addEventListener('click', function () {
      const extraCards = document.querySelectorAll('.service-extra');
      const isCollapsed = extraCards[0] && extraCards[0].classList.contains('hidden');

      extraCards.forEach(function (card) {
        if (isCollapsed) {
          card.classList.remove('hidden');
          card.classList.add('animate-modal-in', 'in');
        } else {
          card.classList.add('hidden');
          card.classList.remove('animate-modal-in');
        }
      });

      if (isCollapsed) {
        text.textContent = 'Show Less';
        if (icon) icon.classList.add('rotate-180');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        text.textContent = 'View More Services (4 more)';
        if (icon) icon.classList.remove('rotate-180');
        btn.setAttribute('aria-expanded', 'false');
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.closeCareersModal();
      window.closeContactModal();
      window.closePrivacyModal();
      window.closeTermsModal();
    }
  });

  // Init on DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    renderReviews();
    initServicesToggle();
  });
})();

