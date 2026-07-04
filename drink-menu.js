const drinkMenus={
  burial:{beer:['Hazy IPA rotation','Imperial stout rotation','Mixed-culture sour ales','Barrel-aged releases','Crisp lager rotation'],other:['Non-beer options vary by location']},
  zillicoah:{beer:['Pilsner and lager pours','Open-fermented farmhouse ales','Rustic saisons','Mixed-culture ales','Seasonal riverfront releases'],other:['Food truck drink options may vary']},
  highland:{beer:['Gaelic Ale','Highland IPA','AVL IPA','Seasonal ales','Limited-release pilot beers'],other:['Cider or non-beer options may vary']},
  dssolvr:{beer:['Hazy IPA rotation','Fruited sour rotation','Lager rotation','Barrel-aged beers','Wild fermentation projects'],other:['Hard seltzer or non-beer options may vary']},
  hillman:{beer:['Lagers','Pale ales','IPAs','Porters','Seasonal pub beers'],other:['Wine and non-beer options may vary']},
  'new-belgium':{beer:['Fat Tire','Voodoo Ranger IPA family','Belgian-inspired ales','Sour beer rotation','Seasonal taproom releases'],other:['Cans, NA, and non-beer options may vary']},
  'wicked-weed':{beer:['Pernicious IPA','Freak of Nature DIPA','Fresh Pressed wheat ale','Sour and funky rotation','Barrel-aged rotation'],other:['Cocktail or non-beer options may vary by location']},
  'hi-wire':{beer:['Hi-Pitch Mosaic IPA','Lo-Pitch Hazy IPA','Bed of Nails brown ale','Lager rotation','Seasonal specialty beers'],other:['Cider, wine, or NA options may vary']},
  'green-man':{beer:['ESB','IPA','Porter','English-style ales','Seasonal taproom beers'],other:['Non-beer options may vary']},
  cellarest:{beer:['Wood-fermented lagers','Farmhouse ales','Saison-inspired beers','Mixed-culture beers','Small-batch seasonal pours'],other:['Natural wine or non-beer options may vary']},
  archetype:{beer:['Belgian-inspired ales','Saisons','Farmhouse ales','Lagers','Seasonal taproom pours'],other:['Non-beer options may vary']},
  'asheville-brewing':{beer:['Shiva IPA','Ninja Porter','Perfect Day IPA','Wheat beer rotation','Seasonal brewpub beers'],other:['Pizza-pairing drinks and NA options may vary']},
  'twin-leaf':{beer:['IPAs','Pale ales','Belgian-style beers','Stouts','Rotating seasonal beers'],other:['Non-beer options may vary']},
  'french-broad':{beer:['Kölsch-style ale','Porter','Lager rotation','Classic ales','Seasonal music-night beers'],other:['Pizza-pairing drinks and NA options may vary']},
  'new-origin':{beer:['Hazy IPAs','Smoothie sours','Adjunct stouts','Modern pale ales','Seasonal trend-style releases'],other:['Non-beer options may vary']},
  'sylva-balsam-falls':{beer:['Fruited beers','Gose and witbier styles','Lager rotation','Creative small-batch beers','Seasonal releases'],other:['Cider','Mead','Wine-style options may vary']},
  'sylva-innovation':{beer:['Light beer styles','Dark and malty beers','Hoppy beers','Seasonal beers','Wild and funky pours'],other:['Guest or non-beer options may vary']},
  'highlands-whiteside':{beer:['Local craft beer rotation','Easy patio beers','Food-friendly ales','Seasonal mountain-town pours'],other:['Wine, cider, or NA options may vary']},
  'highlands-lazy-hiker':{beer:['Golden ale styles','IPAs','Trail-themed seasonal beers','Easy-drinking patio beers','Post-hike pours'],other:['Food truck and non-beer options may vary']},
  'highlands-currahee':{beer:['Approachable craft styles','IPA rotation','Flight pours','Seasonal beers','Barbecue-friendly beers'],other:['Non-beer options may vary']}
};

function getFlavorProfile(item){
  const text=String(item).toLowerCase();
  if(text.includes('hazy')) return 'Soft, juicy, citrusy, tropical, usually lower bitterness.';
  if(text.includes('ipa')||text.includes('hoppy')) return 'Hop-forward, citrusy or piney, with a brighter bitter finish.';
  if(text.includes('imperial stout')||text.includes('adjunct stout')) return 'Big, rich, dark, sweet, roasty, often chocolate or dessert-like.';
  if(text.includes('stout')) return 'Dark, roasty, smooth, with coffee, cocoa, or toasted malt notes.';
  if(text.includes('porter')) return 'Roasty and malty with chocolate, coffee, and toasted bread notes.';
  if(text.includes('sour')||text.includes('gose')||text.includes('fruited')) return 'Tart, bright, fruity, refreshing, and sometimes lightly salty.';
  if(text.includes('wild')||text.includes('funk')||text.includes('mixed-culture')) return 'Tart, earthy, rustic, funky, and more complex than a clean ale.';
  if(text.includes('barrel')) return 'Oaky, warming, rich, layered, and sometimes vanilla or spirit-like.';
  if(text.includes('lager')||text.includes('pilsner')||text.includes('kölsch')) return 'Clean, crisp, light-bodied, refreshing, and easy to drink.';
  if(text.includes('farmhouse')||text.includes('saison')) return 'Dry, peppery, rustic, floral, and lightly fruity.';
  if(text.includes('belgian')) return 'Yeast-driven, fruity, spicy, lightly sweet, and aromatic.';
  if(text.includes('pale ale')) return 'Balanced, lightly bitter, citrusy, and easy-drinking.';
  if(text.includes('brown')) return 'Nutty, toasty, smooth, and malt-forward.';
  if(text.includes('wheat')||text.includes('wit')) return 'Soft, bready, citrusy, light, and refreshing.';
  if(text.includes('golden')) return 'Light, smooth, mildly malty, and very approachable.';
  if(text.includes('amber')||text.includes('gaelic')||text.includes('fat tire')) return 'Caramel-malty, balanced, smooth, and lightly toasted.';
  if(text.includes('cider')) return 'Apple-forward, crisp, lightly tart, and usually refreshing.';
  if(text.includes('mead')) return 'Honey-based, floral, sweet to semi-dry, and wine-like.';
  if(text.includes('wine')) return 'Grape-forward, dry to sweet depending on pour, and more wine-like than beer.';
  if(text.includes('seltzer')) return 'Light, bubbly, crisp, and usually fruit-flavored.';
  if(text.includes('cocktail')) return 'Mixed-drink option; flavor depends on the current cocktail list.';
  if(text.includes('na')) return 'Non-alcoholic option; lighter, easy-drinking, and refreshing.';
  if(text.includes('non-beer')||text.includes('options vary')||text.includes('vary')) return 'Availability changes often; check the brewery for current choices.';
  if(text.includes('seasonal')||text.includes('limited')||text.includes('pilot')||text.includes('rotation')||text.includes('rotating')) return 'Changes often; expect a rotating flavor based on current release.';
  return 'Flavor varies by current pour; check the live menu for details.';
}

function fallbackDrinkMenu(card){
  const styleText=card.querySelector('.beerStyle')?.textContent?.replace('🍺','').replace('Best style / known for:','').trim()||'Rotating beer list';
  return {beer:styleText.split(',').map(item=>item.trim()).filter(Boolean),other:['Non-beer options may vary']};
}

function menuGroup(title,items){
  return `<div class="drinkMenuGroup"><strong>${title}</strong><ul>${items.map(item=>`<li><span class="drinkName">${escapeHtml(item)}</span><p class="drinkProfile"><strong>Flavor profile:</strong> ${escapeHtml(getFlavorProfile(item))}</p></li>`).join('')}</ul></div>`;
}

function renderDrinkMenu(card){
  const id=card.dataset.id;
  const menu=drinkMenus[id]||fallbackDrinkMenu(card);
  return `<div class="drinkMenuPanel"><h3>Drink Menu</h3><p class="drinkMenuNote">Starter drink list only — tap Website for the live/current menu before visiting.</p><div class="drinkMenuGrid">${menuGroup('Beer / On Tap',menu.beer||[])}${menuGroup('Other Drinks',menu.other||['Options vary'])}</div></div>`;
}

function addDrinkMenuButtons(){
  document.querySelectorAll('#breweries .card').forEach(card=>{
    const actions=card.querySelector('.cardActions');
    const details=card.querySelector('.details');
    let panel=card.querySelector('.drinkMenuPanel');
    const needsFlavorUpgrade=panel&&!panel.querySelector('.drinkProfile');

    if(panel&&needsFlavorUpgrade){
      panel.remove();
      panel=null;
    }

    if(actions&&!actions.querySelector('.drinkMenuButton')){
      const button=document.createElement('button');
      button.className='toggleDetails drinkMenuButton';
      button.type='button';
      button.textContent=card.classList.contains('menuOpen')?'Hide Menu':'Drink Menu';
      button.addEventListener('click',()=>{
        card.classList.toggle('menuOpen');
        button.classList.toggle('active',card.classList.contains('menuOpen'));
        button.textContent=card.classList.contains('menuOpen')?'Hide Menu':'Drink Menu';
      });
      actions.insertBefore(button,actions.firstChild);
    }

    if(!panel&&details){
      details.insertAdjacentHTML('afterend',renderDrinkMenu(card));
    }
  });
}

addDrinkMenuButtons();
setTimeout(addDrinkMenuButtons,250);
setTimeout(addDrinkMenuButtons,1000);
const drinkMenuList=document.getElementById('breweries');
if(drinkMenuList){
  const observer=new MutationObserver(()=>window.requestAnimationFrame(addDrinkMenuButtons));
  observer.observe(drinkMenuList,{childList:true,subtree:true});
}
