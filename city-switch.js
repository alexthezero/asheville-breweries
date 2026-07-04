const CITY_STORAGE_KEY='ashevilleBreweryCity.v1';

const sylvaBreweries=[
  {id:'sylva-balsam-falls',rank:1,rating:9.4,city:'sylva',name:'Balsam Falls Brewing Co.',category:'Downtown / Creative Small Batch',address:'506 W. Main St., Sylva, NC 28779',area:'Downtown Sylva',website:'https://balsamfallsbrewing.com/',specialty:'Creative craft beers, ciders, meads, fruited beers, gose, wit, and lager styles',summary:'Downtown Sylva brewery and food spot known for creative beer flavors, ciders, meads, and local personality.',details:'A strong Main Street Sylva stop with food, creative small-batch libations, ciders, meads, and limited releases. Good pick when you want a compact brewery stop without leaving downtown.',bestFor:'Creative beers, cider and mead options, food, downtown Sylva',tip:'Use the official site for current hours before visiting.'},
  {id:'sylva-innovation',rank:2,rating:9.2,city:'sylva',name:'Innovation Brewing',category:'Experimental / Variety',address:'414 W Main St, Sylva, NC 28779',area:'Downtown Sylva',website:'https://www.facebook.com/innovationbrewing/',specialty:'Light beers, dark and malty beers, hoppy styles, seasonal beers, and wild/funky pours',summary:'A Sylva craft-beer name associated with experimental brewing and a broad spread of beer styles.',details:'A good Sylva pick for variety. Older travel coverage describes Innovation Brewing as focused on experimentation with light, dark and malty, hoppy, seasonal, and wild/funky options.',bestFor:'Beer variety, experimental styles, hoppy beers, funky beers',tip:'Verify current hours and location before visiting.'}
];

breweries.forEach((brewery)=>{if(!brewery.city) brewery.city='asheville';});
sylvaBreweries.forEach((brewery)=>{if(!breweries.some((existing)=>existing.id===brewery.id)) breweries.push(brewery);});

try{breweryLogoDomains['Balsam Falls Brewing Co.']='balsamfallsbrewing.com';breweryLogoDomains['Innovation Brewing']='facebook.com/innovationbrewing';}catch(error){}

state.city=localStorage.getItem(CITY_STORAGE_KEY)||'asheville';

const citySwitch=document.createElement('section');
citySwitch.className='citySwitch';
citySwitch.innerHTML=`
  <div class="citySwitchText">
    <strong>Choose brewery city</strong>
    <span>Switch between Asheville and Sylva brewery lists.</span>
  </div>
  <div class="cityButtons" role="group" aria-label="Choose brewery city">
    <button class="cityButton" type="button" data-city="asheville">Asheville</button>
    <button class="cityButton" type="button" data-city="sylva">Sylva</button>
  </div>`;
const main=document.querySelector('main');
const controls=document.querySelector('.controls');
if(main&&controls) main.insertBefore(citySwitch,controls);

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
