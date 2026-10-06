(() => {
  'use strict';
  const dialog = document.getElementById('application-dialog');
  const form = document.getElementById('application-form');
  if (!dialog || !form) return;
  const status = dialog.querySelector('.application-status');
  const submit = form.querySelector('[type="submit"]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const body = dialog.querySelector('[data-application-body]');
  const success = dialog.querySelector('[data-application-success]');
  const vacancy = form.elements.vacancy;
  const closeButtons = dialog.querySelectorAll('[data-application-close]');
  let opener = null;
  let busy = false;

  function clearError(name) {
    const input = form.elements.namedItem(name);
    if (input) input.removeAttribute('aria-invalid');
    const error = document.getElementById(`error-${name}`);
    if (error) error.textContent = '';
  }

  function fieldError(name, message) {
    const input = form.elements.namedItem(name);
    const error = document.getElementById(`error-${name}`);
    if (!input || !error) return;
    input.setAttribute('aria-invalid', 'true');
    error.textContent = message;
    const details = input.closest('details');
    if (details) details.open = true;
  }

  function showStatus(message) {
    status.textContent = message;
    status.hidden = false;
    status.focus();
  }

  const t = (k, fb) => (window.i18n ? window.i18n.t(k, fb) : fb);

  function setBusy(value) {
    busy = value;
    submit.disabled = value;
    closeButtons.forEach(button => { button.disabled = value; });
    form.setAttribute('aria-busy', String(value));
    submitLabel.textContent = value ? t('app_dialog.submitting_label', 'Надсилаємо відгук…') : t('app_dialog.submit_label', 'Надіслати відгук');
  }

  document.querySelectorAll('[data-apply-vacancy]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      body.hidden = false;
      success.hidden = true;
      dialog.setAttribute('aria-labelledby', 'application-title');
      dialog.setAttribute('aria-describedby', 'application-description');
      vacancy.value = button.dataset.applyVacancy;
      status.hidden = true;
      Array.from(form.elements).forEach(input => clearError(input.name));
      dialog.showModal();
      document.body.classList.add('application-open');
      dialog.scrollTop = 0;
      form.elements.name.focus({ preventScroll: true });
    });
  });

  closeButtons.forEach(button => button.addEventListener('click', () => { if (!busy) dialog.close(); }));
  dialog.addEventListener('cancel', event => { if (busy) event.preventDefault(); });

  let backdropPointerDown = false;
  dialog.addEventListener('pointerdown', event => {
    const rect = dialog.getBoundingClientRect();
    backdropPointerDown = event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  });

  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (backdropPointerDown && outside && event.target === dialog && !busy) dialog.close();
    backdropPointerDown = false;
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('application-open');
    if (opener) opener.focus({ preventScroll: true });
  });

  form.addEventListener('input', event => clearError(event.target.name));
  form.addEventListener('change', event => clearError(event.target.name));

  form.elements.phone.addEventListener('input', event => {
    const input = event.target;
    let digits = input.value.replace(/\D/g, '');
    if (digits.startsWith('380')) {
      digits = digits.substring(2);
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

    input.value = formatted;
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    status.hidden = true;
    Array.from(form.elements).forEach(input => clearError(input.name));
    const data = Object.fromEntries(new FormData(form));
    for (const key of Object.keys(data)) data[key] = data[key].trim();
    const errors = {};
    if (!vacancy.value) errors.vacancy = t('vac_val.vacancy_err', 'Оберіть вакансію.');
    if (data.name.length < 2 || !/\p{L}/u.test(data.name)) errors.name = t('vac_val.name_err', 'Введіть ваше ім’я (мінімум 2 символи).');
    const phone = data.phone.replace(/\D/g, '');
    if (!/^[+\d\s().-]+$/.test(data.phone) || phone.length < 10 || phone.length > 15) errors.phone = t('vac_val.phone_err', 'Введіть повний номер телефону.');
    if (data.telegram && !/^@?[a-zA-Z][a-zA-Z0-9_]{3,31}$/.test(data.telegram)) errors.telegram = 'Telegram username (@username)';
    if (data.resume) {
      try {
        const url = new URL(data.resume);
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.')) throw new Error();
      } catch { errors.resume = 'URL (https://...)'; }
    }
    if (!form.elements.consent.checked) errors.consent = t('vac_val.consent_err', 'Підтвердіть згоду, щоб надіслати відгук.');
    for (const [name, message] of Object.entries(errors)) fieldError(name, message);
    if (Object.keys(errors).length) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    setBusy(true);

    try {
      // Demo simulated async processing
      await new Promise(resolve => setTimeout(resolve, 600));

      const vacancyTitle = vacancy.options[vacancy.selectedIndex].text;
      body.hidden = true;
      success.hidden = false;
      success.querySelector('[data-success-vacancy]').textContent = `«${vacancyTitle}»`;
      success.querySelector('h2').id = 'application-success-title';
      dialog.setAttribute('aria-labelledby', 'application-success-title');
      dialog.removeAttribute('aria-describedby');
      form.reset();
      const details = form.querySelector('details');
      if (details) details.open = false;
      dialog.scrollTop = 0;
      success.focus();
    } catch (error) {
      showStatus(error.message || 'Error occurred. Please try again.');
    } finally {
      setBusy(false);
    }
  });
})();

