const CITY_STORAGE_KEY='ashevilleBreweryCity.v1';

const sylvaBreweries=[
  {id:'sylva-balsam-falls',rank:1,rating:9.4,city:'sylva',name:'Balsam Falls Brewing Co.',category:'Downtown / Creative Small Batch',address:'506 W. Main St., Sylva, NC 28779',area:'Downtown Sylva',website:'https://balsamfallsbrewing.com/',specialty:'Creative craft beers, ciders, meads, fruited beers, gose, wit, and lager styles',summary:'Downtown Sylva brewery and food spot known for creative beer flavors, ciders, meads, and local personality.',details:'A strong Main Street Sylva stop with food, creative small-batch libations, ciders, meads, and limited releases. Good pick when you want a compact brewery stop without leaving downtown.',bestFor:'Creative beers, cider and mead options, food, downtown Sylva',tip:'Use the official site for current hours before visiting.'},
  {id:'sylva-innovation',rank:2,rating:9.2,city:'sylva',name:'Innovation Brewing',category:'Experimental / Variety',address:'414 W Main St, Sylva, NC 28779',area:'Downtown Sylva',website:'https://www.facebook.com/innovationbrewing/',specialty:'Light beers, dark and malty beers, hoppy styles, seasonal beers, and wild/funky pours',summary:'A Sylva craft-beer name associated with experimental brewing and a broad spread of beer styles.',details:'A good Sylva pick for variety. Older travel coverage describes Innovation Brewing as focused on experimentation with light, dark and malty, hoppy, seasonal, and wild/funky options.',bestFor:'Beer variety, experimental styles, hoppy beers, funky beers',tip:'Verify current hours and location before visiting.'}
];

const highlandsBreweries=[
  {id:'highlands-whiteside',rank:1,rating:9.3,city:'highlands',name:'Whiteside Brewing Co.',category:'Highlands Area / Cashiers',address:'128 NC-107, Cashiers, NC 28717',area:'Cashiers / near Highlands',website:'https://whitesidebrewing.com/',specialty:'Local craft beer, easy patio beers, food-friendly styles, and casual mountain-town pours',summary:'A family-friendly brewery in Cashiers, a practical Highlands-area beer stop with outdoor space, food, and mountain-town energy.',details:'Highlands itself does not have many true brewery options, so this Highlands-area list includes nearby breweries that make sense for a Highlands trip. Whiteside Brewing is the closest brewery-style stop to Highlands and works well as a lunch, beer, and patio stop.',bestFor:'Closest brewery-style stop to Highlands, food, outdoor seating, families',tip:'This is in Cashiers, not downtown Highlands. It is still the most natural Highlands-area brewery add-on.'},
  {id:'highlands-lazy-hiker',rank:2,rating:9.1,city:'highlands',name:'Lazy Hiker Brewing Company',category:'Highlands Area / Franklin',address:'188 W Main St, Franklin, NC 28734',area:'Franklin / near Highlands',website:'https://lazyhikerbrewing.com/',specialty:'Trail-themed craft beers, golden ales, IPAs, easy-drinking patio beers, and post-hike pours',summary:'A Franklin brewery built around the mountain hiking theme, with a patio and food-truck style experience.',details:'A good Highlands-area option if your route takes you toward Franklin or the Cullasaja Gorge. It is especially fitting after a waterfall drive or hiking day.',bestFor:'Post-hike beers, IPAs, casual patio stop, Franklin route',tip:'Pair it with Dry Falls, Bridal Veil Falls, or a Franklin day.'},
  {id:'highlands-currahee',rank:3,rating:9.0,city:'highlands',name:'Currahee Brewing Company',category:'Highlands Area / Franklin',address:'100 Lakeside Dr, Franklin, NC 28734',area:'Franklin / near Highlands',website:'https://curraheebrew.com/',specialty:'Riverfront beer garden pours, flights, approachable craft styles, and barbecue-friendly beer',summary:'A Franklin brewery with a riverfront beer-garden feel and on-site barbecue through Smokejack.',details:'Currahee is a good Highlands-area choice when you want more of a destination stop near the water. It is not in Highlands proper, but it helps round out a practical Highlands brewery route.',bestFor:'Flights, riverfront setting, barbecue, Franklin route',tip:'Good second Franklin stop if you are already visiting Lazy Hiker.'}
];

breweries.forEach((brewery)=>{if(!brewery.city) brewery.city='asheville';});
[...sylvaBreweries,...highlandsBreweries].forEach((brewery)=>{if(!breweries.some((existing)=>existing.id===brewery.id)) breweries.push(brewery);});

try{
  breweryLogoDomains['Balsam Falls Brewing Co.']='balsamfallsbrewing.com';
  breweryLogoDomains['Innovation Brewing']='facebook.com/innovationbrewing';
  breweryLogoDomains['Whiteside Brewing Co.']='whitesidebrewing.com';
  breweryLogoDomains['Lazy Hiker Brewing Company']='lazyhikerbrewing.com';
  breweryLogoDomains['Currahee Brewing Company']='curraheebrew.com';
}catch(error){}

state.city=localStorage.getItem(CITY_STORAGE_KEY)||'asheville';

let citySwitch=document.getElementById('citySwitch');
if(!citySwitch){
  citySwitch=document.createElement('section');
  citySwitch.className='citySwitch';
  citySwitch.id='citySwitch';
  citySwitch.innerHTML=`
    <div class="citySwitchText">
      <strong>Choose brewery city</strong>
      <span>Switch between Asheville, Sylva, and Highlands-area brewery lists.</span>
    </div>
    <div class="cityButtons" role="group" aria-label="Choose brewery city">
      <button class="cityButton" type="button" data-city="asheville">Asheville</button>
      <button class="cityButton" type="button" data-city="sylva">Sylva</button>
      <button class="cityButton" type="button" data-city="highlands">Highlands</button>
    </div>`;
  const main=document.querySelector('main');
  const controls=document.querySelector('.controls');
  if(main&&controls) main.insertBefore(citySwitch,controls);
}

const baseMatchesFilters=matchesFilters;
matchesFilters=function(brewery){
  const cityMatch=(brewery.city||'asheville')===state.city;
  return cityMatch&&baseMatchesFilters(brewery);
};

const baseRender=render;
render=function(){
  baseRender();
  const cityBreweries=breweries.filter((brewery)=>(brewery.city||'asheville')===state.city);
  const completedInCity=cityBreweries.filter((brewery)=>state.completed[brewery.id]).length;
  completedCountEl.textContent=completedInCity;
  totalCountEl.textContent=cityBreweries.length;
  document.querySelectorAll('.cityButton').forEach((button)=>{
    const active=button.dataset.city===state.city;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',active?'true':'false');
  });
};

citySwitch.addEventListener('click',(event)=>{
  const button=event.target.closest('.cityButton');
  if(!button) return;
  state.city=button.dataset.city;
  localStorage.setItem(CITY_STORAGE_KEY,state.city);
  render();
});

render();
