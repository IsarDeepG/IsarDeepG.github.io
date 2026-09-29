const IMGS = Object.fromEntries(Array.from({length:31}, (_,i) => [i+1, `img/meals/${String(i+1).padStart(2,"0")}.jpg?v=2`]));

const THEMES = {
  kitchen: { label: "Everyday", ribbon: "🌿   🍋   🌿", props: ["🍋", "🌿", "🧄", "🍞"] },
  halloween: { label: "Halloween", ribbon: "🎃   🕯   🎃", props: ["🎃", "🦇", "🕯", "🕸️"] },
  diwali: { label: "Diwali", ribbon: "🪔   ✨   🪔", props: ["🪔", "✨", "🕯", "🌕"] },
  christmas: { label: "Christmas", ribbon: "🎄   ⭐   🎄", props: ["🎄", "🎁", "❄️", "⭐"] },
  holi: { label: "Holi", ribbon: "🌸   🎨   🌸", props: ["🌸", "🎨", "💛", "🩷"] },
  eid: { label: "Eid", ribbon: "🌙   ✨   🌙", props: ["🌙", "✨", "🕌", "🕯"] },
  thanksgiving: { label: "Thanksgiving", ribbon: "🍂   🥧   🍂", props: ["🍂", "🦃", "🥧", "🍁"] },
  newyear: { label: "New Year", ribbon: "✨   🥂   ✨", props: ["✨", "🥂", "🎆", "⭐"] },
  easter: { label: "Easter", ribbon: "🌸   🐣   🌸", props: ["🐣", "🌸", "🥚", "🐰"] }
};

function placeProps(list) {
  ["p1", "p2", "p3", "p4"].forEach((id, i) => {
    document.getElementById(id).textContent = list[i] || "";
  });
}

function applyTheme(id) {
  const theme = THEMES[id] || THEMES.halloween;
  document.documentElement.dataset.theme = id;
  localStorage.setItem("emma-theme", id);
  document.getElementById("festiveLabel").textContent = theme.label;
  document.getElementById("ribbon").textContent = theme.ribbon;
  placeProps(theme.props);
  document.querySelectorAll("[data-theme-id]").forEach(b => b.classList.toggle("on", b.dataset.themeId === id));
}

function pic(m) { return m.img || IMGS[m.night]; }

let active = "all";

function render() {
  const list = EMMA_MEALS.filter(m => active === "all" || m.type === active);
  document.getElementById("count").textContent = list.length + " recipes from Emma's kitchen";
  document.getElementById("list").innerHTML = list.map(m => `
    <article class="row">
      <img class="thumb" src="${pic(m)}" alt="${m.title}" loading="lazy" />
      <div>
        <h3>${m.title}</h3>
        <p>${m.blurb} ${m.hook}</p>
        <button class="more" data-night="${m.night}">Continue Reading</button>
      </div>
    </article>`).join("");
}

function openMeal(night) {
  const m = EMMA_MEALS.find(x => x.night === night);
  document.getElementById("dlgBody").innerHTML = `
    <p class="eyebrow">Night ${m.night} · ${m.date}</p>
    <h2 style="font-family:var(--serif);font-size:32px;margin:8px 0 12px">${m.emoji} ${m.title}</h2>
    <img src="${pic(m)}" alt="${m.title}" />
    <p style="font-style:italic;margin-bottom:10px">“${m.hook}”</p>
    <p style="color:#555;line-height:1.6;margin-bottom:10px">${m.blurb}</p>
    <p style="line-height:1.65;margin-bottom:12px">${m.how}</p>
    <p>Full recipe: <a href="${m.recipe}" target="_blank" rel="noopener">${m.source}</a></p>`;
  document.getElementById("dlg").showModal();
}

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("festiveMenu");
  menu.innerHTML = Object.entries(THEMES).map(([id, t]) =>
    `<button type="button" data-theme-id="${id}">${t.label}</button>`
  ).join("");
  document.getElementById("festiveBtn").onclick = e => {
    e.stopPropagation();
    document.getElementById("festive").classList.toggle("open");
  };
  menu.onclick = e => {
    const id = e.target.dataset.themeId;
    if (!id) return;
    applyTheme(id);
    document.getElementById("festive").classList.remove("open");
  };
  document.addEventListener("click", () => document.getElementById("festive").classList.remove("open"));

  document.querySelector(".tiles").onclick = e => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    active = b.dataset.cat;
    render();
    document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("list").onclick = e => {
    const b = e.target.closest("[data-night]");
    if (b) openMeal(Number(b.dataset.night));
  };
  document.getElementById("closeDlg").onclick = () => document.getElementById("dlg").close();
  document.getElementById("dlg").addEventListener("click", e => { if (e.target.id === "dlg") e.target.close(); });

  applyTheme(localStorage.getItem("emma-theme") || "halloween");
  render();
});
