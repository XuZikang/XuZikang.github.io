/**
 * Theme toggle for academic homepage
 * Persists to localStorage, sets `data-theme` attribute on <html>
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  // Get stored preference or system default
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === THEME_LIGHT || stored === THEME_DARK) return stored;
    // Respect OS-level dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_DARK
      : THEME_LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.classList.toggle('dark', theme === THEME_DARK);
      btn.classList.toggle('light', theme === THEME_LIGHT);
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(next);
  }

  // Apply immediately on load (before DOMContentLoaded for FOUC prevention)
  const initial = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initial);

  // Wire up toggle button once DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.classList.toggle('dark', initial === THEME_DARK);
      btn.classList.toggle('light', initial === THEME_LIGHT);
      btn.addEventListener('click', toggleTheme);
    }
  });
})();