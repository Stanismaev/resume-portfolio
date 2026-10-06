/* ==========================================================================
   Kast Solutions — JavaScript Logic
   ========================================================================== */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (!window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  init3DTilt();
  initModals();
  initPhoneMask();
  initFormValidation();
  initVacanciesAccordion();
  initFancybox();
  initSamePageScroll();
});

function initFancybox() {
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", { dragToClose: false });
  }
}

/* 1. Vacancies Accordion */
function initVacanciesAccordion() {
  document.querySelectorAll('.vacancy-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const details = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(!expanded));
      if (details) details.hidden = expanded;
      button.closest('li').classList.toggle('active', !expanded);
      const icon = button.querySelector('.vacancy-toggle__icon');
      if (icon) icon.textContent = !expanded ? '−' : '+';
    });
  });
}

/* 2. Sticky Header */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

/* 3. Mobile Navigation Menu */
function initMobileMenu() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header-main__nav');
  const menuItems = document.querySelectorAll('.header-main__menu > li');

  if (!burger || !nav) return;

  // Ensure backdrop element exists in the DOM inside .header
  let backdrop = document.querySelector('.nav-backdrop');
  const header = document.querySelector('.header');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    if (header) {
      header.appendChild(backdrop);
    } else {
      document.body.appendChild(backdrop);
    }
  } else if (header && backdrop.parentElement !== header) {
    header.appendChild(backdrop);
  }

  const openMenu = () => {
    burger.classList.add('active');
    nav.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  const toggleMenu = () => {
    if (nav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  burger.addEventListener('click', toggleMenu);

  // Clicking on the dim backdrop closes menu immediately and prevents clicks through to page elements
  backdrop.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  });

  // Close when clicking outside nav, burger, and language dropdown
  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !burger.contains(e.target) &&
      !e.target.closest('.lang-dropdown') &&
      !e.target.closest('.header__actions')
    ) {
      closeMenu();
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Automatically close on resize above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Submenu mobile toggle
  menuItems.forEach(item => {
    const link = item.querySelector('span');
    const dropdown = item.querySelector('.header-main__submenu-block');

    if (link && dropdown) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    }
  });
}

/* 4. 3D Achievements Card Tilt (Smooth & Natural Parallax — Desktop Hover Only) */
function init3DTilt() {
  // Only enable 3D tilt on devices that support true hover and wide screens (prevents mobile blurriness)
  if (!window.matchMedia('(hover: hover) and (min-width: 1025px)').matches) {
    return;
  }

  const cards = document.querySelectorAll('.rating__item');

  cards.forEach(card => {
    const wrapper = card.querySelector('.rating__item-wrap');
    if (!wrapper) return;

    let rafId = null;
    let targetRotateX = 0;
    let targetRotateY = 0;

    const updateTilt = () => {
      wrapper.style.transform = `perspective(1000px) rotateX(${targetRotateX.toFixed(2)}deg) rotateY(${targetRotateY.toFixed(2)}deg) translateZ(4px)`;
      rafId = null;
    };

    const handleMove = (e) => {
      if (window.innerWidth <= 1024) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      // Soft, refined angle capped at 4 degrees
      targetRotateX = -((y - halfHeight) / halfHeight) * 4;
      targetRotateY = ((x - halfWidth) / halfWidth) * 4;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    const handleLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      wrapper.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    const handleEnter = () => {
      wrapper.style.transition = 'transform 0.15s ease-out';
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
  });
}

/* 5. Modal Windows */
function initModals() {
  const openButtons = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  const backdrop = document.querySelector('.modal__backdrop');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        closeModal(activeModal);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

/* 6. Ukrainian Phone Input Mask */
function initPhoneMask() {
  const phoneInputs = document.querySelectorAll('form:not([data-vacancy-form]) input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let digits = e.target.value.replace(/\D/g, '');
      if (digits.startsWith('380')) {
        digits = digits.substring(2); // keep starting from 0
      } else if (digits.startsWith('38')) {
        digits = digits.substring(2);
      }

      let formatted = '+38 ';
      if (digits.length > 0) {
        formatted += '(' + digits.substring(0, 3);
      }
      if (digits.length >= 4) {
        formatted += ') ' + digits.substring(3, 6);
      }
      if (digits.length >= 7) {
        formatted += '-' + digits.substring(6, 8);
      }
      if (digits.length >= 9) {
        formatted += '-' + digits.substring(8, 10);
      }

      e.target.value = formatted;
    });
  });
}

/* 7. Form Submission & Validation */
function initFormValidation() {
  const forms = document.querySelectorAll('form:not([data-vacancy-form])');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[type="tel"]');
      const consentCheck = form.querySelector('input[type="checkbox"]');

      let isValid = true;
      const t = (k, fb) => (window.i18n ? window.i18n.t(k, fb) : fb);

      if (nameInput) {
        if (nameInput.value.trim().length < 2) {
          showError(nameInput, t('modal.error_name', 'Введіть коректне ім’я'));
          isValid = false;
        } else {
          clearError(nameInput);
        }
      }

      if (phoneInput) {
        const numbersOnly = phoneInput.value.replace(/\D/g, '');
        if (numbersOnly.length < 10) {
          showError(phoneInput, t('modal.error_phone', 'Введіть повний номер телефону'));
          isValid = false;
        } else {
          clearError(phoneInput);
        }
      }

      if (consentCheck) {
        if (!consentCheck.checked) {
          isValid = false;
          alert(t('modal.error_consent', 'Необхідно надати згоду на обробку персональних даних'));
        }
      }

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = t('modal.submit_loading', 'Відправка...');
        }

        setTimeout(() => {
          alert(t('modal.success_msg', 'Дякуємо! Ваша заявка успішно прийнята (демонстраційний режим Kast Solutions).'));
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = origText;
          }
          const activeModal = document.querySelector('.modal.active');
          if (activeModal) {
            closeModal(activeModal);
          }
        }, 600);
      }
    });
  });
}

function showError(input, message) {
  input.style.borderColor = '#DC2626';
  input.placeholder = message;
}

function clearError(input) {
  input.style.borderColor = '';
}

/* 8. Same-Page Smooth & Fast Scroll Navigation */
function initSamePageScroll() {
  function getPageIdentifier(urlStr) {
    if (!urlStr) return '';
    try {
      const url = new URL(urlStr, window.location.href);

      // Verify same origin / protocol
      if (url.protocol !== window.location.protocol || url.host !== window.location.host) {
        return '';
      }

      let pathname = url.pathname || '';

      // If ends with slash or empty, default to 'index.html'
      if (pathname.endsWith('/') || pathname === '') {
        return 'index.html';
      }

      let file = pathname.split('/').pop() || '';
      if (!file) return 'index.html';

      // If extensionless, treat as .html (clean URLs support)
      if (!file.includes('.')) {
        file = file + '.html';
      }

      return file.toLowerCase();
    } catch (e) {
      return '';
    }
  }

  function closeMobileMenuIfOpen() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header-main__nav');
    const backdrop = document.querySelector('.nav-backdrop');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (burger) burger.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }

  document.addEventListener('click', (e) => {
    // Intercept primary clicks on anchor elements
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }

    const link = e.target.closest('a');
    if (!link) return;

    // Ignore modal triggers, popups and lightbox
    if (link.hasAttribute('data-modal-target') || link.hasAttribute('data-fancybox')) {
      return;
    }

    const rawHref = link.getAttribute('href');
    if (!rawHref) return;

    // Ignore special schemes
    if (rawHref.startsWith('tel:') || rawHref.startsWith('mailto:') || rawHref.startsWith('javascript:')) {
      return;
    }

    // Ignore external new-tab links
    if (link.target === '_blank') {
      return;
    }

    const currentPage = getPageIdentifier(window.location.href);
    const targetPage = getPageIdentifier(link.href);

    // If link points to the current active page
    if (currentPage && targetPage && currentPage === targetPage) {
      const hash = link.hash;

      // Case A: Specific in-page anchor (e.g. #vacancies)
      if (hash && hash !== '#' && hash !== '#top') {
        const targetEl = document.querySelector(hash);
        if (targetEl && !targetEl.classList.contains('modal')) {
          e.preventDefault();
          closeMobileMenuIfOpen();

          const header = document.querySelector('.header');
          const headerOffset = header ? header.offsetHeight : 80;
          const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

          fastSmoothScrollTo(Math.max(0, targetY), 380);

          if (history.pushState) {
            history.pushState(null, '', hash);
          }
          return;
        }
      }

      // Case B: Link to the current page itself, logo, #, or #top
      e.preventDefault();
      closeMobileMenuIfOpen();

      // Fast, smooth glide to top of current page
      fastSmoothScrollTo(0, 350);

      // Clean leftover hash from address bar if present
      if (window.location.hash && history.pushState) {
        history.pushState(null, document.title, window.location.pathname + window.location.search);
      }
    }
  });
}

/**
 * Fast & fluid ease-out smooth scroll animation
 * @param {number} targetY - Destination scroll position in pixels
 * @param {number} duration - Animation duration in ms (default: 350ms)
 */
function fastSmoothScrollTo(targetY = 0, duration = 350) {
  const startY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const diff = targetY - startY;

  if (Math.abs(diff) < 4) {
    window.scrollTo(0, targetY);
    return;
  }

  let startTime = null;
  let cancelled = false;

  const cancelEvents = ['wheel', 'touchmove'];
  const onUserInterrupt = () => {
    cancelled = true;
    cleanup();
  };

  function cleanup() {
    cancelEvents.forEach(evt => window.removeEventListener(evt, onUserInterrupt, { passive: true }));
  }

  cancelEvents.forEach(evt => window.addEventListener(evt, onUserInterrupt, { passive: true }));

  // Refined cubic ease-out curve for fast yet organic deceleration
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(currentTime) {
    if (cancelled) return;
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutCubic(progress);

    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      cleanup();
    }
  }

  requestAnimationFrame(step);
}
