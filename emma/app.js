const THEMES = {
  kitchen: { label: "Everyday kitchen", hero: "../kitchen.jpg", kicker: "Emma's kitchen · all year", title: "Simple recipes for real, festive tables.", lede: "31 nights of food, filmed as short spells. Watch, then cook." },
  halloween: { label: "Halloween", hero: "../kitchen.jpg", kicker: "31 nights till Halloween", title: "Spooky meals from a good witch.", lede: "One recipe every night in October." },
  diwali: { label: "Diwali", hero: "../kitchen.jpg", kicker: "Festival of lights", title: "Share plates, warm lamps, sweet endings.", lede: "Same kitchen, gold light." },
  christmas: { label: "Christmas", hero: "../kitchen.jpg", kicker: "Firelight and cocoa", title: "Comfort food for the longest nights.", lede: "Pine and red around Emma's recipes." },
  holi: { label: "Holi", hero: "../kitchen.jpg", kicker: "Colour on the table", title: "Bright plates, louder kitchen.", lede: "A playful wash of pink and blue." },
  eid: { label: "Eid", hero: "../kitchen.jpg", kicker: "Gather and feast", title: "A table set for guests.", lede: "Gold and green, cooked to share." },
  thanksgiving: { label: "Thanksgiving", hero: "../kitchen.jpg", kicker: "Harvest kitchen", title: "The cozy centrepiece collection.", lede: "Pumpkin soup, stuffed peppers, boards for a crowd." },
  newyear: { label: "New Year", hero: "../kitchen.jpg", kicker: "Midnight table", title: "Last spell of the year.", lede: "Deep navy and gold." },
  easter: { label: "Easter", hero: "../kitchen.jpg", kicker: "Spring kitchen", title: "Pastel light, gentle cooking.", lede: "A softer look for eggs and breads." }
};
const CATS = [
  { id: "all", label: "All recipes", icon: "\u2726" },
  { id: "dinner", label: "Dinner", icon: "\ud83c\udf7d" },
  { id: "snack", label: "Snacks", icon: "\ud83e\udd68" },
  { id: "dessert", label: "Sweets", icon: "\ud83e\uddc1" },
  { id: "drink", label: "Drinks", icon: "\u2615" },
  { id: "board", label: "Boards", icon: "\ud83e\uddc0" }
];
function soc(url, label) {
  return url ? `<a class="soc" href="${url}" target="_blank" rel="noopener">${label}</a>` : `<span class="soc off">${label}</span>`;
}
function applyTheme(id) {
  const theme = THEMES[id] || THEMES.halloween;
  document.documentElement.dataset.theme = id;
  localStorage.setItem("emma-theme", id);
  document.getElementById("heroBg").style.backgroundImage = `url("${theme.hero}")`;
  document.getElementById("kicker").textContent = theme.kicker;
  document.getElementById("heroTitle").textContent = theme.title;
  document.getElementById("heroLede").textContent = theme.lede;
  document.getElementById("festiveLabel").textContent = theme.label;
  document.querySelectorAll("[data-theme-id]").forEach(b => b.classList.toggle("on", b.dataset.themeId === id));
}
let active = "all", query = "";
function matches(m) {
  const q = query.trim().toLowerCase();
  const hay = (m.title + " " + m.blurb + " " + m.how + " " + m.hook).toLowerCase();
  return (active === "all" || m.type === active || m.vibe === active) && (!q || hay.includes(q));
}
function render() {
  const list = EMMA_MEALS.filter(matches);
  document.getElementById("count").textContent = list.length + " recipes";
  document.getElementById("grid").innerHTML = list.map(m => `
    <article class="card">
      <div class="thumb">
        <span class="badge">Night ${m.night} \u00b7 ${m.date}</span>
        <span class="emoji">${m.emoji}</span>
      </div>
      <div class="card-body">
        <div class="meta">${m.type} \u00b7 ${m.vibe}</div>
        <h3>${m.title}</h3>
        <p>${m.blurb}</p>
        <div class="links">
          ${soc(m.instagram, "Instagram")}
          ${soc(m.youtube, "YouTube")}
          ${soc(m.facebook, "Facebook")}
          <a class="soc" href="${m.recipe}" target="_blank" rel="noopener">Full recipe</a>
          <button class="more" data-night="${m.night}">View recipe</button>
        </div>
      </div>
    </article>`).join("") || "<p>No recipes match that search.</p>";
}
function openMeal(night) {
  const m = EMMA_MEALS.find(x => x.night === night);
  document.getElementById("dlgBody").innerHTML = `
    <div class="meta">Night ${m.night} of 31 \u00b7 ${m.date}</div>
    <h2 style="font-family:var(--font);font-size:30px;margin:8px 0 10px">${m.emoji} ${m.title}</h2>
    <p style="font-style:italic;margin-bottom:10px">\u201c${m.hook}\u201d</p>
    <p style="color:var(--muted);line-height:1.6;margin-bottom:10px">${m.blurb}</p>
    <p style="line-height:1.65;margin-bottom:14px">${m.how}</p>
    <p>Method: <a href="${m.recipe}" target="_blank" rel="noopener">${m.source}</a></p>
    <div class="links" style="margin-top:16px">
      ${soc(m.instagram, "Instagram")}
      ${soc(m.youtube, "YouTube")}
      ${soc(m.facebook, "Facebook")}
    </div>`;
  document.getElementById("dlg").showModal();
}
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("festiveMenu");
  menu.innerHTML = Object.entries(THEMES).map(([id, t]) => `<button type="button" data-theme-id="${id}">${t.label}</button>`).join("");
  document.getElementById("festiveBtn").onclick = e => { e.stopPropagation(); document.getElementById("festive").classList.toggle("open"); };
  menu.onclick = e => { const id = e.target.dataset.themeId; if (!id) return; applyTheme(id); document.getElementById("festive").classList.remove("open"); };
  document.addEventListener("click", () => document.getElementById("festive").classList.remove("open"));
  const cats = document.getElementById("cats");
  cats.innerHTML = CATS.map(c => `<button class="cat${c.id === "all" ? " on" : ""}" data-cat="${c.id}"><span>${c.icon}</span>${c.label}</button>`).join("");
  cats.onclick = e => { const b = e.target.closest("[data-cat]"); if (!b) return; active = b.dataset.cat; [...cats.children].forEach(x => x.classList.toggle("on", x === b)); render(); };
  document.getElementById("q").addEventListener("input", e => { query = e.target.value; render(); });
  document.getElementById("grid").addEventListener("click", e => { const b = e.target.closest("[data-night]"); if (b) openMeal(Number(b.dataset.night)); });
  document.getElementById("closeDlg").onclick = () => document.getElementById("dlg").close();
  document.getElementById("dlg").addEventListener("click", e => { if (e.target.id === "dlg") e.target.close(); });
  applyTheme(localStorage.getItem("emma-theme") || "halloween");
  render();
});