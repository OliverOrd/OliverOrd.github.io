const items = {
	drones: `#lovel
#instagood
#photooftheday
#fashion
#beautiful
#dji
#dronestagram
#photography
#dronephotography
#djimavic
#aerialphotography
#sunset
#dronesdaily
#city
#trip
#photographyempire
#lensbible
#drone
#dronenature
#mavicair
#droneoftheday
#dronefly
#droneislife
#droneporn
#art
#visual
#aerial
#naturephotography
#earth
#dailyoverview
#topdownphoto
#birdseyeview
#fromwhereidrone
#aerialphoto
#birdseye
#droneglobe
#dronephoto
#unitedbydrone
#iamdji
#djicreator
#createexplore
#beautifuldestinations
#dronepic
#topdown
#artsofvisuals
#uniladadventure
#stayandwander
#wildernessnation
#earthofficial
#eclectic_shotz
#earthfocus
#exploringglobe
#tlpicks
#discoverearth
#wondermore
#sonyalpha
#earthpix
#passionpassport
#beautifulmatters
#agameoftones
#ig_masters
#thecreatorclass
#minimalism
#geometry
#architecture
#doyouevendrone
#dronelyfe
#dronemultimedia
#ourplanetdaily
#roamtheplanet
#liveoutside
#dronepointofview
#bestoftheday
#wonderful_places
#landscape
#outdoors
#justgoshoot
#vacation
#dronebois
#droneheros
#airvuz
#lumenier
#dronie
#welltraveled
#aerialphoto
#helicopter
#visiting
#igtravel
#arts
#perspective
#planetearth
#skypixel
#paradise
#nature`,

	travel: `#love
#instagood
#photooftheday
#fashion
#beautiful
#travel
#instatravel
#sunset
#photographyempire
#lensbible
#ourplanetdaily
#roamtheplanet
#liveoutside
#beach
#ocean
#goldenhour
#picoftheday
#pictureoftheday
#bestoftheday
#wonderful_places
#welltravelled
#exploreeverything
#igmasters
#vacation
#welltraveled
#helicopter
#visiting
#igtravel
#tourist
#instago
#instapassport
#instatravelling
#travelingram
#mytravelgram
#relax
#traveler
#holidays
#summertime
#calm
#peace
#meditation
#sunnysideoflife
#paradise
#wanderlust
#travelling
#traveler
#tourism
#traveltheworld
#outdoors
#lonelyplanet
#globalcaptures
#bestcaptureglobal
#depthsofearth
#gardenofthegods
#ig_color
#earthfocus
#nakedplanet
#whyweshoot
#shotzdelight
#beachvibes
#vacationtravel
#explorepage`,
	
	photography: `#love
#instagood
#photooftheday
#fashion
#beautiful
#sonya6300
#mirrorlesscamera
#sonyhomies
#sonyphotography
#photographyempire
#lensbible
#picoftheday
#pictureoftheday
#justgoshoot
#bestoftheday
#wonderful_places
#vacation
#arts
#lines
#perspective
#ig_color
#earthfocus
#nakedplanet
#whyweshoot
#shotzdelight
#beachvibes
#vacationtravel
#explorepage
#perspective
#planetearth
#skypixel`
};



function copyToClipboard(text) {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function randNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getList() {
	return items;
}
