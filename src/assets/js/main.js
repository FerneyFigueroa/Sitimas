export function initTemplate() {

  /**
   * Apply .scrolled class
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');

    if (!selectHeader) return; // 🔥 IMPORTANTE

    if (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')) return;

    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Ajustado:
   * El menu movil ya no se controla aqui para evitar doble click/conflictos.
   * Ahora lo controla NavbarPage.vue con el estado menuOpen de Vue.
   */

  /**
   * Scroll top
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (!scrollTop) return;
    window.scrollY > 100
      ? scrollTop.classList.add('active')
      : scrollTop.classList.remove('active');
  }

  scrollTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * 🔥 AOS (CON VALIDACIÓN)
   */
  if (window.AOS) {
    window.AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true
    });
  }

  /**
   * 🔥 PureCounter
   */
  if (window.PureCounter) {
    new window.PureCounter();
  }

  /**
   * 🔥 Swiper (CON VALIDACIÓN)
   */
  if (window.Swiper) {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;

      const config = JSON.parse(configEl.innerHTML.trim());
      new window.Swiper(swiperElement, config);
    });
  }

}
