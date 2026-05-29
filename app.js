/* Cêlie Doces — interações */
(function () {
  "use strict";

  // ---------- WhatsApp ----------
  var WA_NUMBER = "5511972105640"; // (11) 97210-5640

  function waLink(msg) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg || "Olá, Cêlie!");
  }

  // botões genéricos com data-msg
  document.querySelectorAll(".js-wa").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-msg")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // botões de pedido nos cards (lê nome + preço do próprio card → fonte única)
  document.querySelectorAll(".js-order").forEach(function (el) {
    var card = el.closest(".product-card");
    if (!card) return;
    var name = (card.querySelector(".product-name") || {}).textContent || "";
    var priceEl = card.querySelector(".product-price");
    var price = "";
    if (priceEl) {
      // pega só o texto antes do <small>
      price = (priceEl.childNodes[0] && priceEl.childNodes[0].textContent || "").trim();
    }
    name = name.trim();
    var msg = "Olá, Cêlie! Gostaria de encomendar: " + name + (price ? " (" + price + ")" : "") + " 🍰";
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ---------- Filtro de categorias ----------
  var filters = document.getElementById("filters");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var cat = chip.getAttribute("data-cat");
      document.querySelectorAll("#menuGrid .product-card").forEach(function (card) {
        var show = cat === "todos" || card.getAttribute("data-cat") === cat;
        card.style.display = show ? "" : "none";
      });
    });
  }

  // ---------- Menu mobile ----------
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Scroll reveal (fade + rise) ----------
  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    // No IO support: show everything immediately.
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target); // reveal once
        }
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
