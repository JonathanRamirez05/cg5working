//-Start of code provided by Steven Boyd-

const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

//-End of code provided by Steven Boyd-

let clicksps = 0;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let solarEnergy = new Building('Solar Energy', 1, 15, 'buySolarEnergy', 1);
let windEnergy = new Building('Wind Energy', 8, 100, 'buyWindEnergy', 2);
let hydroEnergy = new Building('Hydropower', 47, 1100, 'buyHydroEnergy', 3);
let geoEnergy = new Building('Geothermal Energy', 100, 12000, 'buyGeoEnergy', 4);
let bioEnergy = new Building('Biomass', 1000, 50000, 'buyBioEnergy', 5);
let nukeEnergy = new Building('Nuclear Energy', 5000, 2500000, 'buyNukeEnergy', 6);


// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += solarEnergy.cps + windEnergy.cps + hydroEnergy.cps + geoEnergy.cps + bioEnergy.cps + nukeEnergy.cps;
}


// Updates the states of all the Building buttons
function updateButtons() {
    solarEnergy.buttonState();
    windEnergy.buttonState();
    hydroEnergy.buttonState();
    geoEnergy.buttonState();
    bioEnergy.buttonState();
    nukeEnergy.buttonState();
}

//-Start of code provided by Steven Boyd-

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();

//-End of code provided by Steven Boyd-        
        
    document.getElementById('clicksps').innerHTML =
        Math.floor(clicksps).toLocaleString();    
}

  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function hidePurchaseEnergyText() {
    document.getElementById('purchaseEnergyText').style.display = 'none';
  }

setInterval(updatePage, tickRate);

const facts1 = [
  "Facts About Solar Energy",
  "Facts About Wind Energy",
  "Facts About Hydropower",
  "Facts About Geothermal Energy",
  "Facts About Biomass",
  "Facts About Nuclear Energy"
];

/*
Energy information provided by:
Solar: https://www.dcseu.com/news-blog/news-blog/blog-posts/4-fun-facts-about-solar
Wind: https://www.energy.gov/eere/wind/articles/top-10-things-you-didnt-know-about-wind-power
Hydro: https://www.energy.gov/articles/top-10-things-you-didnt-know-about-hydropower#:~:text=Hydropower%20is%20one%20of%20the,air%20pollution%20or%20toxic%20byproducts.
Geo: https://css.umich.edu/publications/factsheets/energy/geothermal-energy-factsheet
Bio: https://www.eia.gov/kids/energy-sources/biomass/
Nuclear: https://www.energy.gov/ne/articles/5-fast-facts-about-nuclear-energy
*/
const facts2 = [
  "Solar Energy is one of the most reliable forms of energy and the fastest to deploy. Powered by the sun, there is enough solar energy hitting the Earth every hour to power all of civilization’s needs for an entire year. In Puerto Rico, in the aftermath of Hurricane Maria, companies were able to build small solar power plants with energy storage capability on the island in a matter of weeks.",
  "Wind energy provides more than 20% of total electricity generation in 12 states, with more than 50% in Iowa and South Dakota, and more than 30% in Kansas, Oklahoma, North Dakota, New Mexico, and Nebraska.",
  "Hydropower is one of the oldest power sources on the planet, generating power when flowing water spins a wheel or turbine. It was used by farmers as far back as ancient Greece for mechanical tasks like grinding grain. Hydropower is also a renewable energy source and produces no air pollution or toxic byproducts.",
  "Geothermal energy is derived from the natural heat of the earth. It exists in both high enthalpy (volcanoes, geysers) and low enthalpy forms (heat stored in rocks in the Earth’s crust). Nearly all heating and cooling applications utilize low enthalpy heat.",
  "Biomass is renewable organic material that comes from plants and animals. Biomass was the largest source of total annual U.S. energy consumption until the mid-1800s. Biomass continues to be an important fuel in many countries, especially for cooking and heating in developing countries. The use of biomass fuels for transportation and for electricity generation is increasing in many developed countries as a means of avoiding carbon dioxide emissions from fossil fuel use.",
  "Nuclear power plants produce power by boiling water to create steam that spins a turbine. The water is heated by a process called fission, which makes heat by splitting apart uranium atoms inside a nuclear reactor core. All of the used nuclear fuel produced by the U.S. nuclear energy industry over the last 60 years could fit on a football field at a depth of less than 10 yards."
];

let factNumber = 0;

function updateFactAbout(newNumber1) {
  factNumber = newNumber1;
  document.getElementById('customText1').textContent = facts1[factNumber - 1];
}

function updateFactNumber(newNumber2) { 
  factNumber = newNumber2;
  document.getElementById('customText2').textContent = facts2[factNumber - 1];
}

window.onload = function() {
  updateFactNumber(factNumber);
}
