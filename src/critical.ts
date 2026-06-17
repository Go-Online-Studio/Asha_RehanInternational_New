/**
 * critical.ts - Structural initialization, layout selectors, active state resolvers.
 */

// Safe execution wrapper for browser clients
if (typeof window !== 'undefined') {
  const initCritical = () => {
    // 1. Inject placeholder navbar HTML into #mainNavbar if present and empty
    const mainNavbar = document.getElementById('mainNavbar');
    if (mainNavbar && mainNavbar.innerHTML.trim() === '') {
      mainNavbar.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white border-b border-gray-100">
          <div class="font-extrabold text-[#1a1a1a]">ASHA SMART SHADES</div>
          <div class="flex gap-4 text-xs font-mono">
            <a href="#home" class="nav-link active">HOME</a>
            <a href="#products-all" class="nav-link">PRODUCTS</a>
            <a href="#about-profile" class="nav-link">ABOUT</a>
            <a href="#contact" class="nav-link">CONTACT</a>
          </div>
        </div>
      `;
    }

    // 2. Inject placeholder footer HTML into #footer if present and empty
    const mainFooter = document.getElementById('footer');
    if (mainFooter && mainFooter.innerHTML.trim() === '') {
      mainFooter.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-8 text-center text-[11px] font-mono text-gray-400 border-t border-gray-100 mt-20">
          <span>© 2026 Asha Smart Shades. Engineered with pristine structural safety patterns.</span>
        </div>
      `;
    }

    // 3. Resolve active navlink states dynamically based on current URL pathways
    const syncActiveLinks = () => {
      const path = window.location.hash || window.location.pathname;
      const links = document.querySelectorAll('.nav-link, #mainNavbar a, #footer a');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && (href === path || path.startsWith(href) || (href === '#home' && (!path || path === '#')))) {
          link.classList.add('font-extrabold', 'text-brand-blue');
        } else {
          link.classList.remove('font-extrabold', 'text-brand-blue');
        }
      });
    };

    syncActiveLinks();
    window.addEventListener('hashchange', syncActiveLinks);
    window.addEventListener('popstate', syncActiveLinks);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCritical);
  } else {
    initCritical();
  }
}
