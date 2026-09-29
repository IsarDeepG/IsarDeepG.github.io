const IMGS = {
  1:"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
  2:"https://images.unsplash.com/photo-1612392062798-23d03e0d0d4d?auto=format&fit=crop&w=800&q=80",
  3:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
  4:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
  5:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  6:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
  7:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  8:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
  9:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
  10:"https://images.unsplash.com/photo-1529692236671-ec30096c5d0a?auto=format&fit=crop&w=800&q=80",
  11:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
  12:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  13:"https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80",
  14:"https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=800&q=80",
  15:"https://images.unsplash.com/photo-1618040996337-56970b7bf18c?auto=format&fit=crop&w=800&q=80",
  16:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
  17:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  18:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
  19:"https://images.unsplash.com/photo-1568909344668-6c70c8671852?auto=format&fit=crop&w=800&q=80",
  20:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  21:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
  22:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  23:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
  24:"https://images.unsplash.com/photo-1590080875515-8a3d6a07dc20?auto=format&fit=crop&w=800&q=80",
  25:"https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
  26:"https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80",
  27:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
  28:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  29:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  30:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
  31:"https://images.unsplash.com/photo-1614707267537-b85aaf00c2b1?auto=format&fit=crop&w=800&q=80"
};
const THEMES = {
  kitchen:{label:"Everyday",ribbon:"\ud83c\udf3f   \ud83c\udf4b   \ud83c\udf3f",props:["\ud83c\udf4b","\ud83c\udf3f","\ud83e\uddc4","\ud83c\udf5e"]},
  halloween:{label:"Halloween",ribbon:"\ud83c\udf83   \ud83d\udd6f   \ud83c\udf83",props:["\ud83c\udf83","\ud83e\udd87","\ud83d\udd6f","\ud83d\udd78\ufe0f"]},
  diwali:{label:"Diwali",ribbon:"\ud83e\ude94   \u2728   \ud83e\ude94",props:["\ud83e\ude94","\u2728","\ud83d\udd6f","\ud83c\udf15"]},
  christmas:{label:"Christmas",ribbon:"\ud83c\udf84   \u2b50   \ud83c\udf84",props:["\ud83c\udf84","\ud83c\udf81","\u2744\ufe0f","\u2b50"]},
  holi:{label:"Holi",ribbon:"\ud83c\udf38   \ud83c\udfa8   \ud83c\udf38",props:["\ud83c\udf38","\ud83c\udfa8","\ud83d\udc9b","\ud83e\udee7"]},
  eid:{label:"Eid",ribbon:"\ud83c\udf19   \u2728   \ud83c\udf19",props:["\ud83c\udf19","\u2728","\ud83d\udd4c","\ud83d\udd6f"]},
  thanksgiving:{label:"Thanksgiving",ribbon:"\ud83c\udf42   \ud83e\udd67   \ud83c\udf42",props:["\ud83c\udf42","\ud83e\udd83","\ud83e\udd67","\ud83c\udf41"]},
  newyear:{label:"New Year",ribbon:"\u2728   \ud83e\udd42   \u2728",props:["\u2728","\ud83e\udd42","\ud83c\udf86","\u2b50"]},
  easter:{label:"Easter",ribbon:"\ud83c\udf38   \ud83d\udc23   \ud83c\udf38",props:["\ud83d\udc23","\ud83c\udf38","\ud83e\udd5a","\ud83d\udc30"]}
};
function placeProps(list){ ["p1","p2","p3","p4"].forEach((id,i)=>{ document.getElementById(id).textContent = list[i] || ""; }); }
function applyTheme(id){
  const theme = THEMES[id] || THEMES.halloween;
  document.documentElement.dataset.theme = id;
  localStorage.setItem("emma-theme", id);
  document.getElementById("festiveLabel").textContent = theme.label;
  document.getElementById("ribbon").textContent = theme.ribbon;
  placeProps(theme.props);
  document.querySelectorAll("[data-theme-id]").forEach(b => b.classList.toggle("on", b.dataset.themeId === id));
}
function pic(m){ return m.img || IMGS[m.night]; }
let active = "all";
function render(){
  const list = EMMA_MEALS.filter(m => active === "all" || m.type === active);
  document.getElementById("count").textContent = list.length + " recipes from Emma's kitchen";
  document.getElementById("list").innerHTML = list.map(m => `
    <article class="row">
      <img class="thumb" src="${pic(m)}" alt="${m.title}" />
      <div>
        <h3>${m.title}</h3>
        <p>${m.blurb} ${m.hook}</p>
        <button class="more" data-night="${m.night}">Continue Reading</button>
      </div>
    </article>`).join("");
}
function openMeal(night){
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
  menu.innerHTML = Object.entries(THEMES).map(([id,t]) => `<button type="button" data-theme-id="${id}">${t.label}</button>`).join("");
  document.getElementById("festiveBtn").onclick = e => { e.stopPropagation(); document.getElementById("festive").classList.toggle("open"); };
  menu.onclick = e => { const id = e.target.dataset.themeId; if(!id) return; applyTheme(id); document.getElementById("festive").classList.remove("open"); };
  document.addEventListener("click", () => document.getElementById("festive").classList.remove("open"));
  document.querySelector(".tiles").onclick = e => {
    const b = e.target.closest("[data-cat]"); if(!b) return;
    active = b.dataset.cat; render();
    document.getElementById("recipes").scrollIntoView({behavior:"smooth"});
  };
  document.getElementById("list").onclick = e => { const b = e.target.closest("[data-night]"); if(b) openMeal(Number(b.dataset.night)); };
  document.getElementById("closeDlg").onclick = () => document.getElementById("dlg").close();
  document.getElementById("dlg").addEventListener("click", e => { if(e.target.id==="dlg") e.target.close(); });
  applyTheme(localStorage.getItem("emma-theme") || "halloween");
  render();
});