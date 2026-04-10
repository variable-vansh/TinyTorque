(function () {
  var STORAGE_KEY = "tinytorque-theme";

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.textContent = theme === "dark" ? "◑" : "◐";
    }
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("click", function (e) {
    var t = e.target.closest(".theme-toggle");
    if (!t) return;
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  var bar = document.getElementById("reading-progress");
  if (!bar) return;

  function updateProgress() {
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var height = doc.scrollHeight - window.innerHeight;
    if (height <= 0 || scrollTop <= 0) {
      bar.style.width = "0%";
      bar.classList.remove("is-active");
      bar.setAttribute("aria-valuenow", "0");
      return;
    }
    var pct = Math.min(100, (scrollTop / height) * 100);
    bar.style.width = pct + "%";
    bar.classList.add("is-active");
    bar.setAttribute("aria-valuenow", String(Math.round(pct)));
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
