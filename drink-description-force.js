function forcedFlavorProfile(item){
  const text=String(item||'').toLowerCase();
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
  if(text.includes('na')||text.includes('non-beer')||text.includes('options vary')||text.includes('vary')) return 'Availability changes often; check the brewery for current choices.';
  if(text.includes('seasonal')||text.includes('limited')||text.includes('pilot')||text.includes('rotation')||text.includes('rotating')) return 'Changes often; expect a rotating flavor based on current release.';
  return 'Flavor varies by current pour; check the live menu for details.';
}

function installForcedFlavorStyles(){
  if(document.getElementById('forcedFlavorStyles')) return;
  const style=document.createElement('style');
  style.id='forcedFlavorStyles';
  style.textContent=`
    .drinkMenuGroup ul{list-style:none!important;padding-left:0!important;margin-left:0!important;}
    .drinkMenuGroup li{list-style:none!important;margin:0 0 14px!important;padding:0 0 14px!important;border-bottom:1px solid rgba(75,47,28,.1)!important;}
    .drinkMenuGroup li:last-child{border-bottom:0!important;margin-bottom:0!important;padding-bottom:0!important;}
    .drinkName{display:block!important;font-weight:950!important;color:#2f2419!important;font-size:1rem!important;}
    .drinkProfile{display:block!important;margin:7px 0 0!important;padding:9px 10px!important;border-radius:11px!important;background:#f2eadb!important;color:#4f4032!important;font-size:.88rem!important;font-weight:800!important;line-height:1.42!important;}
    .drinkProfile strong{color:#2f5632!important;font-weight:950!important;}
  `;
  document.head.appendChild(style);
}

function forceDrinkDescriptions(){
  installForcedFlavorStyles();
  document.querySelectorAll('#breweries .drinkMenuGroup li').forEach((item)=>{
    const existingName=item.querySelector('.drinkName');
    const name=(existingName?existingName.textContent:item.textContent).replace(/Flavor profile:.*/i,'').trim();
    if(!name) return;
    item.innerHTML=`<span class="drinkName">${name}</span><p class="drinkProfile"><strong>Flavor profile:</strong> ${forcedFlavorProfile(name)}</p>`;
  });
}

forceDrinkDescriptions();
setTimeout(forceDrinkDescriptions,200);
setTimeout(forceDrinkDescriptions,800);
setTimeout(forceDrinkDescriptions,1600);
const forcedFlavorList=document.getElementById('breweries');
if(forcedFlavorList){
  const observer=new MutationObserver(()=>window.requestAnimationFrame(forceDrinkDescriptions));
  observer.observe(forcedFlavorList,{childList:true,subtree:true});
}
