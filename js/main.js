(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
