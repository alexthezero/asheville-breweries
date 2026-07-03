const breweries = [
  {id:"burial",rank:1,rating:9.8,name:"Burial Beer Co.",category:"Must-Visit / Experimental",address:"40 Collier Ave, Asheville, NC 28801",area:"South Slope",website:"https://burialbeer.com/",specialty:"Hazy IPAs, imperial stouts, mixed-culture sours, and experimental one-offs",summary:"One of Asheville’s most talked-about breweries, known for creative releases, bold visual branding, IPAs, stouts, lagers, and wild/sour projects.",details:"A classic Asheville craft-beer stop with serious beer credibility. The South Slope taproom is compact and high-energy; Forestry Camp is the larger companion experience if you want food, tours, and deeper Burial offerings.",bestFor:"Hype beers, IPAs, stouts, experimental releases",tip:"Go earlier in the day for a more relaxed visit."},
  {id:"zillicoah",rank:2,rating:9.7,name:"Zillicoah Beer Company",category:"Riverside / Lager-Focused",address:"870 Riverside Dr, Woodfin, NC 28804",area:"Woodfin / French Broad River",website:"https://www.zillicoahbeer.com/",specialty:"Crisp lagers, farmhouse ales, open-fermented beers, and rustic European-inspired styles",summary:"Riverside brewery specializing in open-fermented farmhouse ales and lagers with a relaxed outdoor campus by the French Broad River.",details:"This is the brewery to pick when you want a long, easy afternoon outside. It is less about rushing through a flight and more about settling in by the river with clean, traditional beers and food nearby.",bestFor:"Lagers, farmhouse ales, river views, relaxing outdoors",tip:"Bring layers if sitting outside near the river."},
  {id:"highland",rank:3,rating:9.6,name:"Highland Brewing Company",category:"Classic / Campus",address:"12 Old Charlotte Hwy #200, Asheville, NC 28803",area:"East Asheville",website:"https://highlandbrewing.com/",specialty:"Balanced classic craft styles, especially pale ales, IPAs, seasonal ales, and easy-drinking flagships",summary:"Asheville’s original post-Prohibition craft brewery, now a large hilltop campus with taproom, meadow, live music, disc golf, trails, and food trucks.",details:"A strong all-around pick because it feels like more than just a taproom. Great for groups, families, and anyone who wants a broad campus-style brewery experience.",bestFor:"Groups, live music, families, classic Asheville beer",tip:"Check the event calendar before going."},
  {id:"dssolvr",rank:4,rating:9.5,name:"DSSOLVR",category:"Modern / Hazy IPAs",address:"63 N Lexington Ave, Asheville, NC 28801",area:"Downtown / Lexington Ave",website:"https://www.dssolvr.com/",specialty:"Hazy IPAs, fruited sours, barrel-aged beer, lagers, and wild fermentation experiments",summary:"A modern downtown brewery known for hazy IPAs, lagers, barrel-aged sours, surreal branding, and fermentation experiments.",details:"DSSOLVR is a great newer-school Asheville beer stop with creative labels, soft hazies, sours, and a downtown location that pairs easily with dinner or shopping.",bestFor:"Hazy IPAs, sours, downtown bar-hopping, bold branding",tip:"Good choice if you want a quick brewery stop without leaving downtown."},
  {id:"hillman",rank:5,rating:9.4,name:"Hillman Beer",category:"Brewpub / Food-Friendly",address:"25 Sweeten Creek Rd, Asheville, NC 28803",area:"Biltmore Village",website:"https://hillmanbeer.com/",specialty:"Approachable pub beers, lagers, pale ales, IPAs, porters, and food-friendly styles",summary:"Laid-back brewery near Biltmore Village with a strong food reputation, classic beer styles, outdoor seating, and local-friendly atmosphere.",details:"A practical pick when some people want beer and others want a proper meal. It works well as a lunch stop, post-Biltmore stop, or relaxed evening brewery.",bestFor:"Lunch, approachable beers, outdoor seating, mixed groups",tip:"Pair it with Biltmore Village or a Biltmore Estate day."},
  {id:"new-belgium",rank:6,rating:9.3,name:"New Belgium Brewing - Asheville",category:"Large Campus / River Arts",address:"21 Craven St, Asheville, NC 28806",area:"River Arts District",website:"https://www.newbelgium.com/visit/asheville/",specialty:"Flagship amber ales, IPAs, Belgian-inspired beers, sours, and large-scale craft favorites",summary:"Large East Coast outpost of New Belgium along the French Broad River with a big outdoor space, brewery campus feel, and familiar flagships.",details:"New Belgium is not Asheville-born, but the Asheville brewery has become a major River Arts District anchor. It is good for groups, easier parking, outdoor hangs, and recognizable beers.",bestFor:"Groups, river area, outdoor space, familiar beers",tip:"Check tour availability if you want the full brewery experience."},
  {id:"wicked-weed",rank:7,rating:9.2,name:"Wicked Weed Brewing",category:"Downtown / Sour Beer",address:"91 Biltmore Ave, Asheville, NC 28801",area:"Downtown / South Slope edge",website:"https://www.wickedweedbrewing.com/",specialty:"Sour ales, funky farmhouse styles, IPAs, barrel-aged beer, and broad brewpub styles",summary:"A major Asheville brewery known for broad distribution, downtown energy, and sour/funky beer culture through the Funkatorium.",details:"Wicked Weed is still one of the names people associate with Asheville beer. The main brewpub is easy to reach downtown, while the Funkatorium is the better pick if you specifically want sour and funky beers.",bestFor:"Downtown brewery stop, sours, visitors, larger groups",tip:"If sour beer is your main goal, add the Funkatorium at 147 Coxe Ave."},
  {id:"hi-wire",rank:8,rating:9.1,name:"Hi-Wire Brewing",category:"Approachable / Multiple Locations",address:"197 Hilliard Ave, Asheville, NC 28801",area:"South Slope",website:"https://hiwirebrewing.com/",specialty:"Easy-drinking lagers, pale ales, IPAs, seasonal beers, and colorful crowd-pleasers",summary:"Circus-themed Asheville brewery known for approachable flagships, seasonal beers, colorful branding, and multiple taprooms.",details:"Hi-Wire is an easy crowd-pleaser. It has several Asheville-area locations and a reputation for easy-drinking beer and a colorful, casual atmosphere.",bestFor:"Casual beer drinkers, colorful atmosphere, approachable styles",tip:"Confirm which Asheville taproom fits your route."},
  {id:"green-man",rank:9,rating:9.0,name:"Green Man Brewery",category:"Classic / English Styles",address:"27 Buxton Ave, Asheville, NC 28801",area:"South Slope",website:"https://www.greenmanbrewery.com/",specialty:"English-style ales, ESBs, porters, IPAs, and old-school Asheville craft beer",summary:"One of Asheville’s longest-running breweries, known for hop-forward beers, traditional English ales, and its Green Mansion taproom.",details:"A strong heritage stop if you want Asheville beer history. It pairs well with a South Slope crawl and has both the larger Green Mansion and smaller Dirty Jack’s nearby.",bestFor:"English ales, Asheville beer history, South Slope crawl",tip:"Green Man has two close South Slope locations."},
  {id:"cellarest",rank:10,rating:8.9,name:"Cellarest Beer Project",category:"Small Batch / Wood Fermentation",address:"395 Haywood Rd, Asheville, NC 28806",area:"West Asheville",website:"https://www.cellarestbeer.com/",specialty:"Wood-fermented lagers, farmhouse-inspired beer, saison-like styles, and mixed-culture projects",summary:"Small West Asheville brewery focused on wood fermentation, farmhouse-inspired lagers, and a more intimate beer-parlor feel.",details:"Cellarest is a good pick if you want something smaller and more craft-focused rather than a huge taproom. It leans into slower, style-driven, fermentation-forward beer.",bestFor:"Farmhouse beer, small-batch brewing, West Asheville",tip:"Good stop before or after dinner in West Asheville."},
  {id:"archetype",rank:11,rating:8.8,name:"Archetype Brewing",category:"Belgian-Inspired / West Asheville",address:"265 Haywood Rd, Asheville, NC 28806",area:"West Asheville",website:"https://archetypebrewing.com/",specialty:"Belgian-inspired ales, saisons, farmhouse styles, lagers, and balanced neighborhood beers",summary:"West Asheville brewery with Belgian brewing influence, farmhouse ales, saisons, lagers, and a neighborhood taproom feel.",details:"Archetype is a good choice when you want something style-driven and relaxed. It fits well into a West Asheville food-and-drink route.",bestFor:"Belgian styles, saisons, neighborhood hangs",tip:"Pair it with Cellarest since both are on Haywood Road."},
  {id:"asheville-brewing",rank:12,rating:8.7,name:"Asheville Brewing Company",category:"Pizza / Movies / Classic",address:"675 Merrimon Ave, Asheville, NC 28804",area:"North Asheville",website:"https://www.ashevillebrewing.com/",specialty:"Classic brewpub beers, pale ales, IPAs, porters, wheat beers, and pizza-friendly styles",summary:"Long-running Asheville brewery known for beer, pizza, and its movie-theater-style Brew & View concept.",details:"A casual, low-pressure pick when you want beer and food without making the night too fancy. Good for pizza, beer, and a classic Asheville feel.",bestFor:"Pizza, casual groups, movies, classic Asheville",tip:"Check the movie schedule if you want the full Brew & View experience."},
  {id:"twin-leaf",rank:13,rating:8.6,name:"Twin Leaf Brewery",category:"South Slope / IPAs",address:"144 Coxe Ave, Asheville, NC 28801",area:"South Slope",website:"https://twinleafbrewery.com/",specialty:"IPAs, pale ales, Belgian-style beers, stouts, and rotating South Slope taproom styles",summary:"South Slope brewery with a good mix of styles and a reputation for strong IPAs.",details:"Twin Leaf is easy to add to a South Slope brewery crawl. It is less of a giant destination and more of a solid taproom stop when you are already nearby.",bestFor:"IPAs, brewery crawling, South Slope convenience",tip:"Combine with Green Man, Burial, Wicked Weed Funkatorium, or Hi-Wire."},
  {id:"french-broad",rank:14,rating:8.5,name:"French Broad River Brewery",category:"Classic / Music / Pizza",address:"101 Fairview Rd #D, Asheville, NC 28803",area:"Biltmore Village area",website:"https://www.frenchbroadbrewery.com/",specialty:"Crisp classic ales, lagers, kölsch-style beers, porters, and music-night pub beers",summary:"Older Asheville brewery near Biltmore Village with crisp beers, live music, and pizza.",details:"A practical stop if you are near Biltmore Village or want a more neighborhood-style brewery rather than a packed tourist taproom.",bestFor:"Live music, pizza, classic Asheville beer",tip:"Check the music calendar before going."},
  {id:"new-origin",rank:15,rating:8.4,name:"New Origin Brewing Company",category:"New School / Trendy Styles",address:"131 Thompson St, Asheville, NC 28803",area:"Biltmore Village area",website:"https://neworiginbrewing.com/",specialty:"Hazy IPAs, smoothie sours, adjunct stouts, and modern taproom trend styles",summary:"Smaller trend-forward brewery known for hazy IPAs, smoothie sours, adjunct stouts, and newer-school beer styles.",details:"A good pick if you want something less obvious than the big-name stops. New Origin leans into modern beer trends and is easy to add near Biltmore Village.",bestFor:"Hazy IPAs, smoothie sours, modern styles",tip:"Good add-on near Biltmore Village, Hillman, or French Broad."}
];

const STORAGE_KEY = "ashevilleBreweryChecklist.v1";
const state = { completed: loadCompleted(), search: "", category: "all" };

const breweriesEl = document.getElementById("breweries");
const completedCountEl = document.getElementById("completedCount");
const totalCountEl = document.getElementById("totalCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resetBtn = document.getElementById("resetBtn");
const copyCheckedBtn = document.getElementById("copyCheckedBtn");

function loadCompleted() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (error) { console.warn("Could not load checklist state.", error); return {}; }
}
function saveCompleted() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completed)); }
function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function buildCategoryOptions() {
  [...new Set(breweries.map(b => b.category))].sort().forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}
function matchesFilters(brewery) {
  const text = [brewery.name, brewery.category, brewery.address, brewery.area, brewery.specialty, brewery.summary, brewery.details, brewery.bestFor, brewery.tip].join(" ").toLowerCase();
  return text.includes(state.search.trim().toLowerCase()) && (state.category === "all" || brewery.category === state.category);
}
function mapUrl(query) { return `https://maps.apple.com/?q=${encodeURIComponent(query)}`; }
function badge(text, className = "") { return `<span class="badge ${className}">${escapeHtml(text)}</span>`; }
function render() {
  const sorted = [...breweries].sort((a, b) => b.rating - a.rating);
  const filtered = sorted.filter(matchesFilters);
  completedCountEl.textContent = breweries.filter(b => state.completed[b.id]).length;
  totalCountEl.textContent = breweries.length;
  if (!filtered.length) {
    breweriesEl.innerHTML = `<div class="empty"><h2>No breweries found</h2><p>Try a different search or category.</p></div>`;
    return;
  }
  breweriesEl.innerHTML = filtered.map(b => {
    const checked = Boolean(state.completed[b.id]);
    return `
      <article class="card ${checked ? "done" : ""}" data-id="${escapeHtml(b.id)}">
        <div class="cardTop">
          <input class="check" type="checkbox" aria-label="Mark ${escapeHtml(b.name)} as visited" ${checked ? "checked" : ""} />
          <div>
            <div class="titleRow">
              <div><h2>${escapeHtml(b.name)}</h2><div class="rank">#${b.rank} ranked starter score</div></div>
              <div class="score">${b.rating.toFixed(1)} / 10</div>
            </div>
            <div class="badges">${badge(b.category)}${badge(b.area, "green")}${badge("Best style listed", "gold")}</div>
          </div>
        </div>
        <p class="summary">${escapeHtml(b.summary)}</p>
        <p class="beerStyle">🍺 <strong>Best style / known for:</strong> ${escapeHtml(b.specialty)}</p>
        <p class="address">📍 ${escapeHtml(b.address)}</p>
        <div class="details">
          <p>${escapeHtml(b.details)}</p>
          <div class="detailLine"><strong>Best style / type</strong>${escapeHtml(b.specialty)}</div>
          <div class="detailLine"><strong>Best for</strong>${escapeHtml(b.bestFor)}</div>
          <div class="detailLine"><strong>Tip</strong>${escapeHtml(b.tip)}</div>
          <div class="detailLine"><strong>Ranking note</strong>Static starter ranking. Update scores in app.js any time you want to reflect new review data.</div>
        </div>
        <div class="cardActions">
          <button class="toggleDetails" type="button">Details</button>
          <a class="linkBtn" href="${mapUrl(b.name + " " + b.address)}" target="_blank" rel="noopener">Apple Maps</a>
          <a class="linkBtn" href="${escapeHtml(b.website)}" target="_blank" rel="noopener">Website</a>
        </div>
      </article>`;
  }).join("");
  bindCardEvents();
}
function bindCardEvents() {
  document.querySelectorAll(".card").forEach(card => {
    const id = card.dataset.id;
    const checkbox = card.querySelector(".check");
    const detailButton = card.querySelector(".toggleDetails");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.completed[id] = true;
      else delete state.completed[id];
      saveCompleted();
      render();
    });
    detailButton.addEventListener("click", () => {
      card.classList.toggle("open");
      detailButton.textContent = card.classList.contains("open") ? "Hide details" : "Details";
    });
  });
}
function resetChecks() {
  if (!window.confirm("Reset all checked breweries on this device?")) return;
  state.completed = {};
  saveCompleted();
  render();
}
async function copyCheckedList() {
  const checked = breweries.filter(b => state.completed[b.id]).sort((a, b) => a.rank - b.rank);
  if (!checked.length) { alert("Nothing is checked yet."); return; }
  const text = checked.map(b => `${b.rank}. ${b.name} — ${b.address} — Best style: ${b.specialty}`).join("\n");
  try { await navigator.clipboard.writeText(text); alert("Checked brewery list copied."); }
  catch (error) { prompt("Copy your checked brewery list:", text); }
}
searchInput.addEventListener("input", e => { state.search = e.target.value; render(); });
categoryFilter.addEventListener("change", e => { state.category = e.target.value; render(); });
resetBtn.addEventListener("click", resetChecks);
copyCheckedBtn.addEventListener("click", copyCheckedList);
buildCategoryOptions();
render();
