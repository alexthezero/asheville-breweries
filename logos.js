const breweryLogoDomains = {
  "Burial Beer Co.": "burialbeer.com",
  "Zillicoah Beer Company": "zillicoahbeer.com",
  "Highland Brewing Company": "highlandbrewing.com",
  "DSSOLVR": "dssolvr.com",
  "Hillman Beer": "hillmanbeer.com",
  "New Belgium Brewing - Asheville": "newbelgium.com",
  "Wicked Weed Brewing": "wickedweedbrewing.com",
  "Hi-Wire Brewing": "hiwirebrewing.com",
  "Green Man Brewery": "greenmanbrewery.com",
  "Cellarest Beer Project": "cellarestbeer.com",
  "Archetype Brewing": "archetypebrewing.com",
  "Asheville Brewing Company": "ashevillebrewing.com",
  "Twin Leaf Brewery": "twinleafbrewery.com",
  "French Broad River Brewery": "frenchbroadbrewery.com",
  "New Origin Brewing Company": "neworiginbrewing.com"
};

function getInitials(name) {
  return name
    .replace(/[-–—]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !["beer", "brewing", "brewery", "company", "co.", "co", "the"].includes(word.toLowerCase()))
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("") || "AB";
}

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`;
}

function makeLogoBadge(name) {
  const domain = breweryLogoDomains[name];
  const badge = document.createElement("div");
  badge.className = "logoBadge";
  badge.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  img.src = domain ? faviconUrl(domain) : "";
  img.addEventListener("error", () => badge.classList.add("logoError"));

  const fallback = document.createElement("span");
  fallback.className = "fallbackInitials";
  fallback.textContent = getInitials(name);

  badge.appendChild(img);
  badge.appendChild(fallback);

  if (!domain) badge.classList.add("logoError");
  return badge;
}

function injectBreweryLogos() {
  document.querySelectorAll(".card").forEach((card) => {
    const title = card.querySelector("h2");
    const titleBlock = card.querySelector(".titleRow > div:first-child");

    if (!title || !titleBlock || titleBlock.querySelector(".logoBadge")) return;

    const name = title.textContent.trim();
    const textWrapper = document.createElement("div");
    textWrapper.className = "brandText";

    Array.from(titleBlock.childNodes).forEach((node) => {
      textWrapper.appendChild(node);
    });

    titleBlock.classList.add("brandTitle");
    titleBlock.appendChild(makeLogoBadge(name));
    titleBlock.appendChild(textWrapper);
  });
}

injectBreweryLogos();

const breweryList = document.getElementById("breweries");
if (breweryList) {
  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(injectBreweryLogos);
  });

  observer.observe(breweryList, { childList: true, subtree: true });
}
