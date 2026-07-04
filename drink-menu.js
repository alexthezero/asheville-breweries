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

function fallbackDrinkMenu(card){
  const styleText=card.querySelector('.beerStyle')?.textContent?.replace('🍺','').replace('Best style / known for:','').trim()||'Rotating beer list';
  return {beer:styleText.split(',').map(item=>item.trim()).filter(Boolean),other:['Non-beer options may vary']};
}

function menuGroup(title,items){
  return `<div class="drinkMenuGroup"><strong>${title}</strong><ul>${items.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></div>`;
}

function renderDrinkMenu(card){
  const id=card.dataset.id;
  const menu=drinkMenus[id]||fallbackDrinkMenu(card);
  return `<div class="drinkMenuPanel"><h3>Drink Menu</h3><p class="drinkMenuNote">Starter drink list only — tap Website for the live/current menu before visiting.</p><div class="drinkMenuGrid">${menuGroup('Beer / On Tap',menu.beer||[])}${menuGroup('Other Drinks',menu.other||['Options vary'])}</div></div>`;
}

function addDrinkMenuButtons(){
  document.querySelectorAll('#breweries .card').forEach(card=>{
    if(!card.querySelector('.drinkMenuPanel')){
      const actions=card.querySelector('.cardActions');
      const details=card.querySelector('.details');
      if(actions){
        const button=document.createElement('button');
        button.className='toggleDetails drinkMenuButton';
        button.type='button';
        button.textContent='Drink Menu';
        button.addEventListener('click',()=>{
          card.classList.toggle('menuOpen');
          button.classList.toggle('active',card.classList.contains('menuOpen'));
          button.textContent=card.classList.contains('menuOpen')?'Hide Menu':'Drink Menu';
        });
        actions.insertBefore(button,actions.firstChild);
      }
      if(details){details.insertAdjacentHTML('afterend',renderDrinkMenu(card));}
    }
  });
}

addDrinkMenuButtons();
const drinkMenuList=document.getElementById('breweries');
if(drinkMenuList){
  const observer=new MutationObserver(()=>window.requestAnimationFrame(addDrinkMenuButtons));
  observer.observe(drinkMenuList,{childList:true,subtree:true});
}
