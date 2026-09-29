(function () {
  const reviews = window.CR_REVIEWS || [];
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const filtersEl = document.getElementById("filters");
  const search = document.getElementById("q");

  const filters = [
    { key: "all", label: "All 52" },
    { key: "audit", label: "Audit" },
    { key: "seat", label: "Dedicated seat" },
    { key: "Australia", label: "Australia" },
    { key: "United States", label: "United States" },
    { key: "United Kingdom", label: "United Kingdom" },
  ];

  let active = "all";

  function stars(n) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

  function paintFilters() {
    filtersEl.innerHTML = "";
    filters.forEach((f) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = f.label;
      b.className = f.key === active ? "on" : "";
      b.addEventListener("click", () => {
        active = f.key;
        paintFilters();
        render();
      });
      filtersEl.appendChild(b);
    });
  }

  function match(r, q) {
    if (active === "audit" || active === "seat") {
      if (r.offer !== active) return false;
    } else if (active !== "all" && r.region !== active) {
      return false;
    }
    if (!q) return true;
    const blob = [r.name, r.role, r.industry, r.region, r.title, r.quote, r.offer]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  }

  function render() {
    const q = (search.value || "").trim().toLowerCase();
    const list = reviews.filter((r) => match(r, q));
    grid.innerHTML = "";
    empty.hidden = list.length > 0;
    list.forEach((r) => {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML =
        '<span class="sample">Sample</span>' +
        '<div class="stars" aria-label="' + r.stars + ' stars">' + stars(r.stars) + "</div>" +
        "<h3>" + r.title + "</h3>" +
        "<blockquote>“" + r.quote + "”</blockquote>" +
        '<div class="who"><strong>' + r.name + "</strong> · " + r.role +
        "<br>" + r.industry + " · " + r.region +
        " · " + (r.offer === "audit" ? "Audit" : "Dedicated seat") + "</div>";
      grid.appendChild(el);
    });
  }

  search.addEventListener("input", render);
  paintFilters();
  render();
})();
