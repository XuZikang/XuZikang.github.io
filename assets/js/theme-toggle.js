/**
 * Linear-style theme toggle
 * Persists to localStorage, sets `data-theme` attribute on <html>
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === THEME_LIGHT || stored === THEME_DARK) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_DARK
      : THEME_LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (sunIcon) sunIcon.style.display = theme === THEME_LIGHT ? 'block' : 'none';
      if (moonIcon) moonIcon.style.display = theme === THEME_DARK ? 'block' : 'none';
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || THEME_DARK;
    const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(next);
  }

  // Apply immediately
  const initial = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initial);

  // Wire toggle on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (sunIcon) sunIcon.style.display = initial === THEME_LIGHT ? 'block' : 'none';
      if (moonIcon) moonIcon.style.display = initial === THEME_DARK ? 'block' : 'none';
      btn.addEventListener('click', toggleTheme);
    }
  });
})();