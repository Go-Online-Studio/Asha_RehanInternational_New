/**
 * script.ts - Customized interactions, cursor, floating button behavior, and performance utilities.
 */

// 1. Debounce utility
export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 100): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Ensure execution safe inside client environment
if (typeof window !== 'undefined') {
  // Wait for load to initialize cursor & elements
  const initScripts = () => {
    // A. Custom Circular Cursor (Desktop Only)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      // Create cursor elements dynamically
      const cursorOuter = document.createElement('div');
      cursorOuter.id = 'custom-cursor-outer';
      const cursorDot = document.createElement('div');
      cursorDot.id = 'custom-cursor-dot';

      // Inject custom cursor styling
      const styleNode = document.createElement('style');
      styleNode.textContent = `
        #custom-cursor-outer {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border: 1.5px solid #2a6fdd;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.25s, height 0.25s, background-color 0.2s, border-color 0.2s;
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 99999;
          transform-origin: center;
        }
        #custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 5px;
          height: 5px;
          background-color: #2a6fdd;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 99999;
        }
        .cursor-hovered #custom-cursor-outer {
          width: 48px;
          height: 48px;
          background-color: rgba(42, 111, 221, 0.1);
          border-color: #17be74;
        }
        .cursor-hovered #custom-cursor-dot {
          background-color: #17be74;
        }
        /* Hide default cursor on interactive items to highlight custom cursor */
        a, button, select, input, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleNode);
      document.body.appendChild(cursorOuter);
      document.body.appendChild(cursorDot);

      let mouseX = 0;
      let mouseY = 0;
      let outerX = 0;
      let outerY = 0;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Dot moves instantly
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }, { passive: true });

      // Smooth lag effect for the outer ring using requestAnimationFrame
      const render = () => {
        const ease = 0.12; // Lerp factor
        outerX += (mouseX - outerX) * ease;
        outerY += (mouseY - outerY) * ease;
        
        cursorOuter.style.left = `${outerX}px`;
        cursorOuter.style.top = `${outerY}px`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);

      // Handle scale expansions on link hover
      const setupHoverListeners = () => {
        const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .cursor-pointer');
        interactiveElements.forEach((el) => {
          el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hovered');
          });
          el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hovered');
          });
        });
      };

      setupHoverListeners();

      // Keep dynamic hover bindings up-to-date
      const observer = new MutationObserver(setupHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // B. Floating Action Buttons - Scroll Listener (Back-to-Top trigger & state syncing)
    const handleScroll = () => {
      const bttButton = document.getElementById('back-to-top-fab');
      if (bttButton) {
        if (window.scrollY > 500) {
          bttButton.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
          bttButton.classList.add('opacity-100', 'translate-y-0');
        } else {
          bttButton.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
          bttButton.classList.remove('opacity-100', 'translate-y-0');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger instantly in case user loaded page pre-scrolled
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScripts);
  } else {
    initScripts();
  }
}
