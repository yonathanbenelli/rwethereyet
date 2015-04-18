$(document).bind("pagebeforechange", function(e,ob) {
  if(ob.toPage && (typeof ob.toPage==="string") && ob.toPage.indexOf('index.html') >= 0) {       e.preventDefault();   }
});

var knows=["Did you know?<br/>a bear has 42 teeth", "Did you know?<br/>an ostrich's eye is bigger than it's brain",
"Did you know?<br/>most lipsticks contain fish scales",
"Did you know?<br/>rabbits like licorice",
"Did you know?<br/>a lobsters blood is colorless but when exposed to oxygen it turns blue",
"Did you know?<br/>armadillos have 4 babies at a time and are all the same sex",
"Did you know?<br/>reindeer like bananas",
"Did you know?<br/>the longest recorded flight of a chicken was 13 seconds",
"Did you know?<br/>birds need gravity to swallow",
"Did you know?<br/>a cat has 32 muscles in each ear",
"Did you know?<br/>goldfish can see both infrared and ultraviolet light",
"Did you know?<br/>cats spend 66% of their life asleep",
"Did you know?<br/>macadamia nuts are toxic to dogs",
"Did you know?<br/>spiders are arachnids and not insects",
"Did you know?<br/>Koalas sleep around 18 hours a day",
"Did you know?<br/>all insects have 6 legs",
"Did you know?<br/>African Grey Parrots have vocabularies of over 200 words",
"Did you know?<br/>a giraffe can clean its ears with its 21 inch tongue",
"Did you know?<br/>cats have over 100 vocal chords",
"Did you know?<br/>camel's milk doesn't curdle",
"Did you know?<br/>elephants sleep between 4 - 5 hours in 24 period",
"Did you know?<br/>it's possible to lead a cow up stairs but not down",
"Did you know?<br/>frogs can't swallow with their eyes open",
"Did you know?<br/>elephants are the only mammal that can't jump",
"Did you know?<br/>frogs dont drink (they absorb water through their skin)",
"Did you know?<br/>at birth dalmations are always white",
"Did you know?<br/>hummingbirds are the only bird that can fly backwards",
"Did you know?<br/>a duck can't walk without bobbing its head",
"Did you know?<br/>a hummingbird's heart beats at over a 1,000 times a minute",
"Did you know?<br/>dragonflies have 6 legs but can't walk",
"Did you know?<br/>a crocodile can't move its tongue",
"Did you know?<br/>hippopotamuses have killed more people in Africa than any other animal",
"Did you know?<br/>an elephants ears are used to regulate body temperature",
"Did you know?<br/>bats always turn left when exiting a cave",
"Did you know?<br/>crocodiles never outgrow their enclosure",
"Did you know?<br/>reindeer hair is hollow inside like a tube",
"Did you know?<br/>cows don't have upper front teeth",
"Did you know?<br/>an octopus pupil is rectangular",
"Did you know?<br/>cats can't move their jaw sideways",
"Did you know?<br/>its physically impossible for pigs to look up at the sky",
"Did you know?<br/>a group of frogs is called an army",
"Did you know?<br/>a group of rhinos is called a crash",
"Did you know?<br/>a group of kangaroos is called a mob",
"Did you know?<br/>a group of whales is called a pod",
"Did you know?<br/>a group of geese is called a gaggle",
"Did you know?<br/>a group of owls is called a parliament",
"Did you know?<br/>the only animals that purr are cats",
"Did you know?<br/>a cats urine glows under a blacklight",
"Did you know?<br/>white cats with blue eyes are usually deaf",
"Did you know?<br/>cats have a peripheral vision of 285 degrees",
"Did you know?<br/>small dogs usually live longer than larger breeds",
"Did you know?<br/>domestic cats dislike citrus scents",
"Did you know?<br/>cats can jump up to 7 times their tail length",
"Did you know?<br/>giraffes and rats can last longer without water than camels",
"Did you know?<br/>your more likely to be killed by a champagne cork than by a poisonous spider",
"Did you know?<br/>a crocodile can't stick out its tongue",
"Did you know?<br/>ostriches don't bury their heads in sand",
"Did you know?<br/>only female mosquitoes bite",
"Did you know?<br/>hummingbirds can't walk",
"Did you know?<br/>India is home to over 200 million cows",
"Did you know?<br/>duck eggs are the largest eggs in the world",
"Did you know?<br/>owls can't move their eyes from side to side",
"Did you know?<br/>flamingos can bend their knees backwards",
"Did you know?<br/>scorpions glow under ultra violet light",
"Did you know?<br/>ants stretch when they wake up in the morning",
"Did you know?<br/>Isaac Newton invented the cat door",
"Did you know?<br/>more people die from falling coconuts then from shark attacks",
"Did you know?<br/>gorillas sleep 14 hours a day",
"Did you know?<br/>female lions complete 90% of the hunting in their herd",
"Did you know?<br/>the lifespan of a squirrel is 9 years",
"Did you know?<br/>the stomach acids found in a snakes stomach can digest bones and teeth but not fur or hair",
"Did you know?<br/>a giraffe can go longer without water than a camel",
"Did you know?<br/>there are more chickens than people",
"Did you know?<br/>for every human there are 200 million insects",
"Did you know?<br/>the average bed contains over 6 billion dust mites",
"Did you know?<br/>an iguana can stay under water for 28 minutes",
"Did you know?<br/>emus can't walk backwards",
"Did you know?<br/>the average hen lays 228 eggs a year",
"Did you know?<br/>more people are allergic to cows milk than any other food",
"Did you know?<br/>more people are killed from bees than snakes",
"Did you know?<br/>the life span of a house fly is between 10 to 25 days",
"Did you know?<br/>a dolphins top speed is 60kmh (37mph)",
"Did you know?<br/>the smallest dog is the Chihuahua",
"Did you know?<br/>a sharks top speed is 70kmh (44mph)",
"Did you know?<br/>there are 70 million sheep in New Zealand (with 4 million people)",
"Did you know?<br/>sharks are immune to all known diseases",
"Did you know?<br/>the worlds smallest bird is the 'bee hummingbird' found in Cuba",
"Did you know?<br/>African elephants only have 4 teeth",
"Did you know?<br/>1 billion snails are served in restaurants each year",
"Did you know?<br/>it takes 1 alligator to make a pair of shoes and 3 for a pair of boots",
"Did you know?<br/>a flea can jump 350 times its body length",
"Did you know?<br/>a honeybee's top speed is 24kph (15mph)",
"Did you know?<br/>a humming bird flaps its wings up to 90 times a second (5,400 times a minute)",
"Did you know?<br/>flys always launch backwards for a quick getaway",
"Did you know?<br/>horses have 18 more bones than humans",
"Did you know?<br/>a cheetahs top speed is 114kph (70mph)",
"Did you know?<br/>horses sleep standing up",
"Did you know?<br/>a jellyfish is 95% water",
"Did you know?<br/>bats are the only mammals that fly",
"Did you know?<br/>a cat uses its whiskers to determine if a space is too small to squeeze through",
"Did you know?<br/>a snail can sleep for 3 years",
"Did you know?<br/>tigers have striped skin as well as fur",
"Did you know?<br/>crocodiles are colour blind",
"Did you know?<br/>a chameleons tongue is twice the length of its body",
"Did you know?<br/>dogs sweat through the pads on their feet",
"Did you know?<br/>hippopotamuses are born under water",
"Did you know?<br/>whales can't swim backwards",
"Did you know?<br/>camels are born without humps",
"Did you know?<br/>only female mosquitoes bite",
"Did you know?<br/>the average porcupine has 30,000 spikes",
"Did you know?<br/>tarantula spiders can survive 2 and a half years without food",
"Did you know?<br/>crocodiles are responsible for over a 1,000 deaths each year by the Banks of the Nile river",
"Did you know?<br/>there are more insects in the world than all other animals combined",
"Did you know?<br/>giraffes can't swim",
"Did you know?<br/>crocodiles swallow rocks to help them dive deeper",
"Did you know?<br/>an elephant's trunk can hold over 5 litres of water",
"Did you know?<br/>bull's can run faster uphill than down",
"Did you know?<br/>a shark's teeth are literally as hard as steel",
"Did you know?<br/>a moth has no stomach",
"Did you know?<br/>grasshoppers have white blood",
"Did you know?<br/>it takes 4 hours to hardboil an ostrich egg",
"Did you know?<br/>you have fewer muscles than a caterpillar",
"Did you know?<br/>giraffes have no vocal cords",
"Did you know?<br/>most birds eat twice their body weight each day",
"Did you know?<br/>a group of whales is called a pod",
"Did you know?<br/>Kiwi birds are blind",
"Did you know?<br/>armadillos can walk underwater",
"Did you know?<br/>the bones of a pigeon weigh less than its feathers",
"Did you know?<br/>the cheetah is the only cat that can't retract it's claws",
"Did you know?<br/>roosters can't crow if they can't fully extend their necks",
"Did you know?<br/>dolphins can hear underwater sounds from 24km (15miles) away",
"Did you know?<br/>flamingos can only eat when their heada are upside down",
"Did you know?<br/>the fingerprints of koala bear are indistinguishable to that of a human",
"Did you know?<br/>a female ferret is called a jill",
"Did you know?<br/>porcupines float in water",
"Did you know?<br/>there are 2 chickens for every person",
"Did you know?<br/>there are a million ants for every person on Earth",
"Did you know?<br/>coconuts kill over 150 people each year (more than sharks)",
"Did you know?<br/>emus can't walk backwards",
"Did you know?<br/>'Babe' was played by over 50 pigs",
"Did you know?<br/>giraffes has the highest blood pressure of any animal",
"Did you know?<br/>India has over 50 million monkeys",
"Did you know?<br/>ostriches have a 14 meter (46 foot) long small intestine",
"Did you know?<br/>your foot is the most common body part bitten by insects",
"Did you know?<br/>Japan is the largest exporter of frog legs",
"Did you know?<br/>a squid has 10 tentacles",
"Did you know?<br/>you're more likely to get stung by a bee on a windy day than any other",
"Did you know?<br/>more people are killed by hippopotamuses then by lions, elephants and water buffalos combined",
"Did you know?<br/>a woodpeckers tongue can wrap around its head twice",
"Did you know?<br/>snakes can't blink",
"Did you know?<br/>ants don't like baby powder (talcum powder)",
"Did you know?<br/>a rat can tread water for 3 days",
"Did you know?<br/>dolphins can kills sharks by ramming them with their snout",
"Did you know?<br/>sharks can sense a drop of blood from 4km (2.5miles) away",
"Did you know?<br/>bottle nosed whales can dive to a depth of 915 metres (3,000feet) in 2 minutes",
"Did you know?<br/>flamingoes can live up to 80 years",
"Did you know?<br/>the only continent without reptiles or snakes is Antarctica",
"Did you know?<br/>Australia has the largest sheep population",
"Did you know?<br/>greyhounds can reach speeds of up to 67kph (42mph)",
"Did you know?<br/>you can tell the sex of a horse by its teeth (most males have 40, females 36)",
"Did you know?<br/>sharks never stop moving even when they sleep or rest",
"Did you know?<br/>greyhounds can see better than any other dog breed",
"Did you know?<br/>when 2 zebras stand side by side they usually face each other in opposite directions to keep an eye out for predators",
"Did you know?<br/>most cows produce more milk when they listen to music",
"Did you know?<br/>elephants communicate in sound waves below the frequency that humans can hear",
"Did you know?<br/>giant tortoises can live in captivity longer than any other animal",
"Did you know?<br/>snakes can't bite in rivers or swamps (they would drown otherwise)",
"Did you know?<br/>a blue whale can go up to 6 months without eating",
"Did you know?<br/>pelicans consume around a 1/3 of its body weight in a single meal",
"Did you know?<br/>gorillas can't swim",
"Did you know?<br/>house cats have 18 claws",
"Did you know?<br/>giraffes can't cough",
"Did you know?<br/>the Giant Pacific Octopus can squeeze its entire body through a hole the size of its beak",
"Did you know?<br/>deers don't like hay",
"Did you know?<br/>shrimps are all born male but slowly grow into females",
"Did you know?<br/>the average elephant produces 22kg (50 pounds) of dunn each day",
"Did you know?<br/>there are more than 50 different kinds of kangaroos",
"Did you know?<br/>the average lifespan of a squirrel is 9 years",
"Did you know?<br/>a platypus can eat its weight in worms every day",
"Did you know?<br/>fleas can accelerate 50 times faster than a space shuttle",
"Did you know?<br/>spiders have transparent blood",
"Did you know?<br/>mosquitoes prefer children to adults and blondes to brunettes",
"Did you know?<br/>only 4 out of 20,000 species of bees produce honey",
"Did you know?<br/>March 14 is 'save a spider day'",
"Did you know?<br/>there are over 4,300 known species of ladybugs",
"Did you know?<br/>a fly's recation time is 30 milliseconds",
"Did you know?<br/>butterflies taste with their back feet",
"Did you know?<br/>moths have no stomach",
"Did you know?<br/>bees and house flies flap their wings 200 times a second",
"Did you know?<br/>bees have 4 wings",
"Did you know?<br/>60 cows can produce a ton of milk each day",
"Did you know?<br/>police dogs are trained to respond to commands in foreign languages (usually German or Hungarian)",
"Did you know?<br/>jellyfish don't have a brain",
"Did you know?<br/>ferrets sleep between 18 - 20 hours a day",
"Did you know?<br/>a group of foxes is called a skulk",
"Did you know?<br/>a hippopotamus can run faster than a man",
"Did you know?<br/>a King Cobra is the biggest of all poisonous snakes and can grow to over 4 metres (13 feet) long",
"Did you know?<br/>lions in the wild usually makes no more than 20 kills a year",
"Did you know?<br/>a male baboon can kill a leopard",
"Did you know?<br/>rhinoceros have 3 toes on each foot",
"Did you know?<br/>a shrimp has 5 pairs of legs",
"Did you know?<br/>elephants can run up to 40kmh (25mph)",
"Did you know?<br/>baby rattlesnakes are born in August and September",
"Did you know?<br/>most snakes have 1 lung",
"Did you know?<br/>camels have 3 eyelids to protect themselves from blowing sand",
"Did you know?<br/>the night vision of tigers is 6 times better than humans",
"Did you know?<br/>flamingoes can live up to 80 years old",
"Did you know?<br/>in Africa more people are killed by crocodiles than lions",
"Did you know?<br/>most dinosaurs lived to be more than 100 years old",
"Did you know?<br/>out of the 250+ known species of shark only 18 are known to be dangerous to man",
"Did you know?<br/>an ostriches can outrun a horse",
"Did you know?<br/>ostriches can live up to 75 years old",
"Did you know?<br/>sheep won't drink from running water",
"Did you know?<br/>squirrels can climb trees faster than they can run on the ground",
"Did you know?<br/>wild cobras can live up to 20 years old",
"Did you know?<br/>the average cow produces 40 glasses of milk a day",
"Did you know?<br/>a blue whale can weigh as much as 30 elephants and as long as 3 large tour buses",
"Did you know?<br/>the greyhound is the fastest dog and can reach speeds of up to 72kph (45mph)",
"Did you know?<br/>the fastest fish in the sea is the swordfish and can reach up to speeds of 108kph (68mph, 59knots)",
"Did you know?<br/>female condors lays a single egg once every 2 years",
"Did you know?<br/>hippopotamuses have skin 3.8cm (1.5in) thick",
"Did you know?<br/>an arrow frog has enough poison to kill over 2,200 people",
"Did you know?<br/>whales have the slowest metabolism of all animals",
"Did you know?<br/>penguins are only found in the southern hemisphere primarily in Antarctica (excluding zoos above the equator)",
"Did you know?<br/>toads only eat moving prey",
"Did you know?<br/>when born a baby giraffe is 1.8m (6ft) tall",
"Did you know?<br/>a bear in hibernation loses up to 25% of its body weight",
"Did you know?<br/>pandas spend 12 hours a day eating bamboo",
"Did you know?<br/>crocodiles continually grow new sets of teeth to replace old ones",
"Did you know?<br/>the skeleton of an African elephant accounts for about 15% of its body weight",
"Did you know?<br/>there are over 1,600 known species of starfishes",
"Did you know?<br/>there are over 320 species of parrots",
"Did you know?<br/>there are over 40,000 muscles tendons in an elephant's trunk",
"Did you know?<br/>there are over 690 known species of bats",
"Did you know?<br/>there are over 130 species of owl",
"Did you know?<br/>a garfish has green bones",
"Did you know?<br/>a camel can shut its nostrils during a desert sandstorm",
"Did you know?<br/>a cat can keep purring while inhaling and exhaling",
"Did you know?<br/>a fox litter is 10 to 15 pups",
"Did you know?<br/>the spikes of a newborn hedgehog begin to appear within 24 hours",
"Did you know?<br/>camels can drink 94 litres (25 gallons) of water in less than 3 minutes",
"Did you know?<br/>you can smell a skunk 1.6km (1 mile) away",
"Did you know?<br/>chicken drumsticks contain the least amount of meat on a chicken",
"Did you know?<br/>more people are allergic to cows milk than any other food",
"Did you know?<br/>a bumble bee flaps its wings at 160 times a second",
"Did you know?<br/>a dragonfly can fly at 40kph (25mph)",
"Did you know?<br/>flies can react to an object it sees and change direction in less than 30 milliseconds",
"Did you know?<br/>a queen bee can lay up to 3,000 eggs in one day",
"Did you know?<br/>ants can lift 50 times their own weight",
"Did you know?<br/>bees can see ultraviolet light",
"Did you know?<br/>80% of the world's food crops are pollinated by insects",
"Did you know?<br/>10% of the world's food supply is consumed by insects",
"Did you know?<br/>it takes 110 silkworm cocoons to make an average tie",
"Did you know?<br/>queen termites can live up to 50 years",
"Did you know?<br/>most spiders have transparent blood",
"Did you know?<br/>caterpillars have over 2,000 muscles",
"Did you know?<br/>the fastest insect is the Australian dragon fly (its top speed is 57 km/h (35mp/h))",
"Did you know?<br/>honey bees kill more people each year than snakes",
"Did you know?<br/>there are over 100,000 different species of butterflies",
"Did you know?<br/>there are over 80,000 different species of ants",
"Did you know?<br/>it takes 5 years for an oyster to produce a medium sized pearl",
"Did you know?<br/>moths have white blood",
"Did you know?<br/>dolphin's can detect underwater sounds from 24 km (15 miles) away",
"Did you know?<br/>dinosaurs lived on Earth for over 165 million years before they became extinct",
"Did you know?<br/>jellyfish have been on Earth for over 650 million years",
"Did you know?<br/>only pregnant females polar bears hibernate",
"Did you know?<br/>polar bears are strictly carnivores",
"Did you know?<br/>some dinosaurs had tails over 13m (45 feet) long",
"Did you know?<br/>the average age of a polar bear in the wild is 17 years",
"Did you know?<br/>the tallest mammal is the giraffe",
"Did you know?<br/>warthogs can reach speeds of 48km/h (29mph)",
"Did you know?<br/>warthogs live for 15 years",
"Did you know?<br/>when baby polar bear cubs are born they cannot see or hear for their first month",
"Did you know?<br/>less than 20% of shark attacks are fatal",
"Did you know?<br/>chameleons can move their eyes in two directions at the same time",
"Did you know?<br/>a chameleon's tongue is twice as long as its body",
"Did you know?<br/>a newborn kangaroo is about 1 inch in tall",
"Did you know?<br/>a woodpecker can peck 20 times a second",
"Did you know?<br/>catfish have over 100,000 taste buds",
"Did you know?<br/>it takes 40 minutes to hard boil an ostrich egg",
"Did you know?<br/>the world's smallest mammal is the bumblebee bat of Thailand",
"Did you know?<br/>mosquitoes dislike citronella because it irritates their feet",
"Did you know?<br/>mosquitoes prefer children to adults and blondes to brunettes",
"Did you know?<br/>no two spider webs are the same",
"Did you know?<br/>there are over 900,000 known species of insects",
"Did you know?<br/>worker ants may live for 7 years and the queen up to 15",
"Did you know?<br/>the study of insects is called entomology",
"Did you know?<br/>the average life span of a mosquito is 2 weeks",
"Did you know?<br/>there are over 900 species of bats",
"Did you know?<br/>after bananas a zoo gorilla's favorite food is celery",
"Did you know?<br/>the African Rock Python can survive 2 years without eating",
"Did you know?<br/>ostrich meat is the leanest of all red meats",
"Did you know?<br/>gatophobia is the fear of cats",
"Did you know?<br/>helminthophobia is the fear of worms",
"Did you know?<br/>herpetophobia is the fear of reptiles",
"Did you know?<br/>hippophobia is the fear of horses",
"Did you know?<br/>ichthyophobia is the fear of fish",
"Did you know?<br/>melissophobia is the fear of bees",
"Did you know?<br/>myrmecophobia is the fear of ants",
"Did you know?<br/>ornithophobia is the fear of birds",
"Did you know?<br/>zoophobia is the fear of animals",
"Did you know?<br/>a lions feed once every 3 to 4 days",
"Did you know?<br/>lion's can't roar until the age of 2",
"Did you know?<br/>all owls lay white eggs",
"Did you know?<br/>all snakes are carnivorous",
"Did you know?<br/>the tentacles of the giant arctic jellyfish can reach 36.6 meters (120 feet)",
"Did you know?<br/>cheetahs can accelerate from 0 to 70 km/h (43mp/h) in 3 seconds",
"Did you know?<br/>the oldest cockroach fossils are over 280 million years old"];
var opt = { enableHighAccuracy: false , timeout: 15000};
var charConH;
var watchID;
var pageEfect="flip";
	var	sound=true;
	      var doubleTapCount=0;
			var defaultTrip=2;
			var hourpos=0;
			var minute1pos=0;
			var speedSwipeMap=0.5;
			var minute2pos=0;
			var zoomLevel=10;
			var pageRender='none';
		var zoomLevelD=10;
		var clickDest=-1;
			var updateFreqMilis=3000;
/// init google maps 
		var defaultLatLng = new google.maps.LatLng(45.2501566,-75.8002568);
		var rendererOptions = {

  suppressMarkers : true
}
			var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
			var directionsDisplay2 = new google.maps.DirectionsRenderer(rendererOptions);
			var directionsService=new google.maps.DirectionsService();
		var currentPosition= new google.maps.LatLng(45.2501566,-75.8002568);
		var optionsCharacterMap= {
					zoom: zoomLevel ,
				center: currentPosition,
				disableDefaultUI:true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};			
		
        var map;
        var mapDest;
		        var mapDest2;
        // Add an overlay to the map of current lat/lng
        var marker;
        var marker2;
        var marker3;
        var marker4;
        var marker5;
		var volMusic=50;
		var volMusicD=30;
		var soundVol50=50;
		var soundVol10=10;
		var from;
		var distanceLeft=-1;
		var distanceFull=-1;
var render=true;
		var setTrip=defaultTrip;
		var destPosition;
		var intervalDist;
		var 	intervalDist2;
		var intervalTime;
		var startPosition;
		var levelPos=-1;
		var timeLeft=-1;
		var timeFull=-1;
		var	stopTryGps=false;
		var doubleTapSpeed=500;
		var timeNow=0;
		var intervalRot;
		var timeOut1;
		var setScene=0;
		var resolution;
		var frontCharacterTop=0;
		var characterContentHeight=0;
		var radiusDistanceFinish=50;
		
		if ($(window).width()>960)
		{
			resolution=4;
		}
		else if($(window).width()>690)
		{
				resolution=3;
		}
		else if($(window).width()>460)
		{
					resolution=2;
		}		
		else if($(window).width()>320)
		{
					resolution=1;
		}		
		else 
		{
					resolution=0;
		}
					resolution=0;
		var numbersHeight=[711,711,711];
		var numbersWidth=[44,44,44];
		var topSetCharIcon=0;
		var android=0;
		var isAndroid=false;
		var deviceAgent = navigator.userAgent;	
		var agentIndex = deviceAgent.indexOf('Android');

    if (agentIndex != -1) {
				   var androidversion = parseFloat(deviceAgent.match(/Android\s+([\d\.]+)/)[1]);
					if (androidversion < 3.1)
					{
						  android=2;
					}
			 else {
						 android=4;
					}
					isAndroid=true;
        } 
	else {
                 android=0;
    }

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        if( window.plugins && window.plugins.NativeAudio ) {
			loadSounds1();
			loadSounds2();
      }

    },

};
var music=[null,null,null,null,null,null,null,null];
var wavesSound=null;
var dolphinSound=null;
var birdsConSound=null;
var bird1Sound=null;
var bird2Sound=null;
var tapASound=null;
var aquarium1Sound=null;
var aquarium2Sound=null;
var bubblesFinishSound=null;
var waterPipeSound=null;
var tapJSound=null;
var scrollSound=null;
var changePageSound=null;
var swipe1Sound=null;
var swipe2Sound=null;
var ovation=null;
var crocodileSound=null;
var elephantSound=null;
var jungleSound=null;
var lionSound=null;
var monkeySound=null;
   var toucanSound=null;
   var pinchSound=null;
var zebraSound=null;
 var mermaidSound=null;
 var isLoadSound1=false;
    var isLoadSound2=true;
	
	var toImage= 'resources/others/to.png';
		var fromImage= 'resources/others/from.png';
				var nowImage= 'resources/others/now.png';
function getMedia(src,loop,i,id)
{
		       var mediaRes; 
			  
		if (isAndroid) 
		{
//          src = '/android_asset/www/' + src;
			 
				if(loop)
				{
		
						mediaRes =  window.plugins.NativeAudio.preloadComplex(id,src,1,1,0,onSuccessS,onErrorS); 
				}
				
				else
				{

							mediaRes=	 window.plugins.NativeAudio.preloadSimple(id,src,onSuccessS,onErrorS); 
				}

		}
			else
			{
				if(loop)
				{
					mediaRes =new buzz.sound(src, { loop: true});
				}
				else
				{
						mediaRes =new buzz.sound(src);
				}
			}
	return mediaRes;
}
function   loadSounds1()
{


		if (isAndroid) 
		{
		 volMusic=volMusic/100;
		 volMusicD=volMusicD/100;
		 soundVol50=soundVol50/100;
		 soundVol10=soundVol10/100;
		
		}

 
			tapJSound=getMedia("resources/sounds/tapj.mp3",false,0,'tapJSound');
					scrollSound= getMedia("resources/sounds/scroll.mp3",false,0,'scrollSound');
					pinchSound= getMedia("resources/sounds/pinch.mp3",false,0,'pinchSound');
							changePageSound = getMedia("resources/sounds/changepage.mp3",false,0,'changePageSound');

		swipe2Sound= getMedia("resources/sounds/swipe2.mp3",false,0,'swipe2Sound');
		tapASound= getMedia("resources/sounds/tapa.mp3",false,0,'tapASound');
		
		scrollSound= getMedia("resources/sounds/scroll.mp3",'scrollSound');
		swipe1Sound= getMedia("resources/sounds/swipe1.mp3",'swipe1Sound');
		isLoadSound1=true;

}
function   loadSounds2()
{


	music[1]= getMedia("resources/music/music1.mp3", true,1,'1');
	/*music[2]=music[1];
	music[3]=music[1];
	music[4]=music[1];
	music[5]= music[1];
	music[6]=music[1];
	music[7]=music[1];*/
	music[2]= getMedia("resources/music/music2.mp3", true,2,'2');
	music[3]= getMedia("resources/music/music3.mp3", true,3,'3');
	music[4]= getMedia("resources/music/music4.mp3", true,4,'4');
	music[5]= getMedia("resources/music/music5.mp3", true,5,'5');
	music[6]= getMedia("resources/music/music6.mp3", true,6,'6');
	music[7]= getMedia("resources/music/music7.mp3", true,7,'7');
	toucanSound= getMedia("resources/sounds/toucan.mp3",false,0,'toucanSound');
	zebraSound= getMedia("resources/sounds/zebra.mp3",false,0,'zebraSound');
	ovation= getMedia("resources/sounds/ovation.mp3",false,0,'ovation');
	crocodileSound= getMedia("resources/sounds/crocodile.mp3",false,0,'crocodileSound');
		elephantSound= getMedia("resources/sounds/elephant.mp3",false,0,'elephantSound');
	jungleSound= getMedia("resources/sounds/jungle.mp3",false,0,'jungleSound');
	lionSound= getMedia("resources/sounds/lion.mp3",false,0,'lionSound');
		monkeySound= getMedia("resources/sounds/monkey.mp3",false,0,'monkeySound');
		wavesSound= getMedia("resources/sounds/waves.mp3",true,1,'wavesSound');
		dolphinSound= getMedia("resources/sounds/dolphin.mp3",false,0,'dolphinSound');
				mermaidSound= getMedia("resources/sounds/mermaid.mp3",false,0,'mermaidSound');
		birdsConSound= getMedia("resources/sounds/birdscon.mp3",true,4,'birdsConSound');
		bird1Sound= getMedia("resources/sounds/bird1.mp3",false,0,'bird1Sound');
		bird2Sound= getMedia("resources/sounds/bird2.mp3",false,0,'bird2Sound');
		aquarium1Sound= getMedia("resources/sounds/aquarium1.mp3", true,5,'aquarium1Sound');
		aquarium2Sound= getMedia("resources/sounds/aquarium2.mp3", true,6,'aquarium2Sound');
		bubblesFinishSound= getMedia("resources/sounds/bubblesfinish.mp3", true,3,'bubblesFinishSound');
		waterPipeSound= getMedia("resources/sounds/waterpipe.mp3", true,2,'waterPipeSound');
				isLoadSound2=true;

}
 function onSuccessS() {

        }

        // onError Callback
        //
        function onErrorS(error) {
        }
	function onStatusSWave(status) {
        if( status==4 ) {

			wavesSoundF('play');
		}
	}
		function onStatusSWaterP(status) {
        if( status==4 ) {

			waterPipeSoundF('play');
		}
	}

	function onStatusSBubbleF(status) {
        if( status==4 ) {

			finishBubblesSoundAF('play');
		}
	}
		function onStatusSBirdCon(status) {
        if( status==4 ) {


		birdsConSoundF('play');
		}
	}
	function onStatusSAquarium1(status) {
        if( status==4 ) {
			aquarium1SoundF('play');
		}
	}
	function onStatusSAquarium2(status) {
        if( status==4 ) {
			aquarium2SoundF('play');
		}
	}

	function onStatusSMusic(status) {
        if( status==4 ) {
			playMusic();
        }
		
	}
	
function minScreen()
{
		tapJSoundF('play');
			$('#minScreenMap').css('visibility','hidden');
			$('#map_canvas_2').css('z-index','-100');
				$('#mapFind').removeClass('mapFindFull');
						$('#mapAdd').css('visibility','visible');
}
function fullScreen()
{
	tapJSoundF('play');
	$('#map_canvas_2').css('z-index','10000');
	$('#minScreenMap').css('visibility','visible');
	$('#mapFind').addClass('mapFindFull');
		$('#mapAdd').css('visibility','hidden');

}
$(document).on('pageshow','#main', function(e,data){  
if(!isLoadSound1)
{
	//loadSounds1();
}
	if(distanceLeft>0 || (timeLeft>0 && timeFull-timeLeft>0))
	{
		$('#backMain').css('visibility','visible');	
		 $('#buttonTripPlanner').css('visibility','hidden');
		 
	}
	else
	{
		 $('#buttonTripPlanner').css('visibility','visible');
			$('#backMain').css('visibility','hidden');	
	}

});
$(document).on('pageshow','#setCharacter', function(e,data){  
clearInterval(intervalDist2);
	pageRender='#setCharacter';  
if(distanceLeft>0 || (timeLeft>0 && timeFull-timeLeft>0))
{
	$('#backMain').css('visibility','visible');	
	 $('#buttonTripPlanner').css('visibility','hidden');
}
else
{
	 $('#buttonTripPlanner').css('visibility','visible');
		$('#backMain').css('visibility','hidden');	
}


	if(android!=0 && android<4)
	{

$(function() { $('#containerSetCharacter').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

							scrollSoundF('play');	

			if(direction=="up")
			{

					if(topSetCharIcon>-3)
					{
						topSetCharIcon=	topSetCharIcon-1;
					}
				
			}
			else if(direction=="down")
			{
							if(topSetCharIcon<0)
							{
								topSetCharIcon=	topSetCharIcon+1;
							}
			}
			$('#containerSetCharacter').css('top',topSetCharIcon*($('#containerSetCharacter').height()*0.35));
}});});
	}
	else
	{
		
			$('#contentSetCharacter').scroll(function() {scrollSoundF('play');	});
	}
		});

$(document).on('pageshow','#byTime', function(e,data){    
	pageRender='#byTime';  
				$('#selectTimeOption').css('height',$('#selectTimeOption').width()/1.475);
			
	var pixelMove1=(($('#hourBoldTime').width()/numbersWidth[resolution])*numbersHeight[resolution])/10;

	var pixelMove2=	(($('#minuteThinTime1').width()/numbersWidth[resolution])*numbersHeight[resolution])/10;
		var pixelMove3=	(($('#minuteThinTime2').width()/numbersWidth[resolution])*numbersHeight[resolution])/10;
	$('#minuteThinTime1').css('background-position-y',parseInt((pixelMove2*(1-0.282))/2.5));
	$('#minuteThinTime2').css('background-position-y',parseInt((pixelMove2*(1-0.282))/2.5));
	hourpos=0;
	minute1pos=0;
	timeLeft=-1;
	timeFull=-1;
		
	minute2pos=0;
		setTrip=0;
	$(function() { $('#hourBoldTime').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

			var mov=0;
			if(direction=="up")
			{

				if(hourpos<9)
				{
					hourpos=hourpos+1;
					mov=-1;
				}
				else
				{
					mov=0;
				}
				
			}
			else if(direction=="down")
			{

				if(hourpos>0)
				{
					
					hourpos=hourpos-1;
					mov=+1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
							scrollSoundF('play');	
				var to=	$('#hourBoldTime').css('background-position-y');

				if(resolution==0)
				{
					var pos=parseFloat(to.replace('px',''))+((pixelMove1*(1+0.02))*mov);
				}
				else
				{
						var pos=parseFloat(to.replace('px',''))+((pixelMove1*(1))*mov);
				}
				$('#hourBoldTime').css('background-position-y',pos+'px');
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
				if(timeFull>0)
				{
					$('#nextByTime').css('visibility','visible');
				}
				else
				{
										$('#nextByTime').css('visibility','hidden');
				}
				
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
	  

			$(function() { $('#minuteThinTime1').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var mov=0;
			if(direction=="up")
			{
				if(minute1pos<5)
				{
					minute1pos=minute1pos+1;
					mov=-1;
				}
				else
				{
					mov=0;
				}
			}
			else if(direction=="down")
			{

				if(minute1pos>0)
				{
					minute1pos=minute1pos-1;
					mov=+1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
							scrollSoundF('play');	
				var to=	$('#minuteThinTime1').css('background-position-y');
				var pos=parseFloat(to.replace('px',''))+(parseFloat(pixelMove2)*mov);
				$('#minuteThinTime1').css('background-position-y',pos+'px');
				
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
				if(timeFull>0)
				{
					$('#nextByTime').css('visibility','visible');
				}
				else
				{
										$('#nextByTime').css('visibility','hidden');
				}
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
			$(function() { $('#minuteThinTime2').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var mov=0;
			if(direction=="up")
			{
				if(minute2pos<9)
				{
					minute2pos=minute2pos+1;
					mov=-1;
				}
				else
				{
					mov=0;
				}
			}
			else if(direction=="down")
			{

				if(minute2pos>0)
				{
					minute2pos=minute2pos-1;
					mov=+1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
							scrollSoundF('play');	
				var to=	$('#minuteThinTime2').css('background-position-y');
				var pos=parseFloat(to.replace('px',''))+(parseFloat(pixelMove3)*mov);
				$('#minuteThinTime2').css('background-position-y',pos+'px');
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
				if(timeFull>0)
				{
					$('#nextByTime').css('visibility','visible');
				}
				else
				{
										$('#nextByTime').css('visibility','hidden');
				}
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  
	  
	  
	  });
	  
	  
		

});

function backToMain()
{
		 							changePageSoundF('play');
					pageRender='#main';  
					$.mobile.changePage('#main',{ transition: pageEfect,reverse:true});
}
function goToSetCharacter()
{
				changePageSoundF('play');
						pageRender='#setCharacter';  
	$.mobile.changePage('#setCharacter',{ transition: pageEfect,reverse:false});
}

function goToTripPlanner()
{
				changePageSoundF('play');
	if(defaultTrip==0)
	{	

		return '#byDistance';

	}
	else if(defaultTrip==1)
	{
				return '#byTime';
	}
	else
	{
				return '#tripPlanner';
	}
}
function goToBackPlanner()
{
				changePageSoundF('play');
	if(defaultTrip==0)
	{
				pageRender='#main';  	
		return '#main';

	}
	else if(defaultTrip==1)
	{
						pageRender='#main';  
				return '#main';
	}
	else
	{
						pageRender='#tripPlanner';  	
				return '#tripPlanner';
	}
}

function soundSetting()
{
	tapJSoundF('play');
	if(sound==false)
	{
		sound=true;
		$('#soundImage').css('background','transparent url(resources/buttons/soundonbutton.png) 0 0 no-repeat');		
	}
	else
	{
		sound=false;
		
		$('#soundImage').css('background','transparent url(resources/buttons/soundoffbutton.png) 0 0 no-repeat');
	
	}
}

function defaultTripTime()
{
	tapJSoundF('play');
	 defaultTrip=0;
	 $('#defaultTripOption0').css('z-index','100');
	 	 $('#defaultTripOption1').css('z-index','99');
		 	 $('#defaultTripOption2').css('z-index','98');
}

function defaultTripDist()
{
		tapJSoundF('play');
	defaultTrip=1;
		 $('#defaultTripOption0').css('z-index','98');
	 	 $('#defaultTripOption1').css('z-index','100');
		 	 $('#defaultTripOption2').css('z-index','99');

	
}

function defaultTripNone()
{
		tapJSoundF('play');
	defaultTrip=2;
		 $('#defaultTripOption0').css('z-index','99');
	 	 $('#defaultTripOption1').css('z-index','98');
		 	 $('#defaultTripOption2').css('z-index','100');


}

function clerToInput()
{
	$('#toInput').val('');
	 clickDest=-1;
}
$(document).on('pageshow','#byDistance', function(e,data){ 
//intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);
//    $('#distance-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - v$('#distance-content').outerHeight())/2);
clickDest=-1;
	stopTryGps=false;
	pageRender='#byDistance';  
	zoomLevel=10;
	
$('#msg').css('visibility','hidden');

$('#borderMap').height($('#borderMap').width());

$('#map_canvas_1').height($('#map_canvas_1').width()*(1-0.05));
$('#map_canvas_1').css('visibility','visible');	
$('#borderMap').css('visibility','visible');	
$('#toInput').val('Juncal 1511 Montevideo');

if(mapDest==undefined)
{
	mapDest = new google.maps.Map(document.getElementById("map_canvas_1"),optionsCharacterMap);
	mapDest2 = new google.maps.Map(document.getElementById("map_canvas_2"),optionsCharacterMap);
	google.maps.event.addListener(mapDest2, 'click', function(event) {
	stopTryGps=true;
if(marker3!=undefined)
 {

		marker3.setMap(null);
	
 }
	if(marker4!=undefined)
	{
				marker4.setMap(null);
	}
	$('#toInput').val('');
	clickDest=event.latLng;

	     marker3 = new google.maps.Marker({
				            position: clickDest,
				            map: mapDest,
				icon:toImage,
				            title: "We go there!"
				        });
	     marker4 = new google.maps.Marker({
				            position: clickDest,
				            map: mapDest2,
				icon:toImage,
				            title: "We go there!"
				        });

				mapDest.panTo(clickDest);
				mapDest2.panTo(clickDest);


});
}

from="";
distanceLeft=-1;
distanceFull=-1;


		setTrip=1;
		zoomLevelD=10;
		     $(function() {  
      $("#borderMap").swipe( {
		  swipeStatus:function(event, phase, direction, distance , duration , fingerCount){
			  
			   if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
						if(fingerCount==1)
						  {
							  pinchSoundF('play');
							   if(direction=='up')
							   {		
											   mapDest.panBy(0,Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='down')
							   {
											   mapDest.panBy(0, -Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='left')
							   {
											   mapDest.panBy(Math.floor(distance*speedSwipeMap),0);			   
							   }
							   else if(direction=='right')
							   {
											   mapDest.panBy(-Math.floor(distance*speedSwipeMap),0);			   
							   }
						  }
				   }
	
        },
		pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom) {
			 if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
					   
					   if(fingerCount==2)
						  {

					if(direction=='out')
						{
								  swipe2SoundF('play');
						if(mapDest.getZoom()>0)
							 {
								// zoomLevelD=zoomLevelD-0.05;
									mapDest.setZoom(mapDest.getZoom()-1);
							 }
													
						}
						else if(direction=='in')
						{
															  swipe2SoundF('play');
			
								   if(mapDest.getZoom()<19)
								  {
									 // zoomLevelD=zoomLevelD+0.05;
										mapDest.setZoom(mapDest.getZoom()+1);
								  }
			
						}
			
						  }
				   }
        },
        fingers:$.fn.swipe.fingers.ALL,  
        pinchThreshold:0  
    });	    });	

 $('#submit').click(function() {
	 			tapJSoundF('play');	
 if($('#toInput').val()=="" && clickDest!=-1)
 {
	  var request = {
      origin: currentPosition,
      destination: clickDest,
      travelMode: google.maps.TravelMode.DRIVING};
	 
 }
 else
 {
	  var request = {
      origin: currentPosition,
      destination: $('#toInput').val(),
      travelMode: google.maps.TravelMode.DRIVING
					  };
 }
					  
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
	
					      directionsDisplay.setDirections(response);
						    directionsDisplay2.setDirections(response);
						  //    showSteps(response);
								
								destPosition=response.routes[0].legs[0].end_location;
								startPosition=currentPosition;
								currentPosition=response.routes[0].legs[0].start_location;
								distanceFull=parseInt(google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition));
								distanceLeft=distanceFull;
								levelPos=0;
								 if(marker!=undefined)
						 {
							marker.setMap(null);
						 }
									 if(marker2!=undefined)
						 {
								marker2.setMap(null);
								}
									 if(marker3!=undefined)
						 {
									marker3.setMap(null);
									}
									 if(marker4!=undefined)
						 {
								marker4.setMap(null);
						 }
				         marker = new google.maps.Marker({
				            position: currentPosition,
				            map: mapDest,
							icon:fromImage,
				            title: "We are here!"
				        });		
						 marker2 = new google.maps.Marker({
				            position: currentPosition,
				            map: mapDest2,
							icon:fromImage,
				            title: "We are here!"
				        });			
								         marker3 = new google.maps.Marker({
				            position: destPosition,
				            map: mapDest,
							icon:toImage,
				            title: "We go there!"
				        });		
						 marker4 = new google.maps.Marker({
				            position: destPosition,
				            map: mapDest2,
							icon:toImage,
				            title: "We go there!"
				        });			

				
								//console.log(inspeccionar(response.routes[0].legs[0]));
								//console.log(response.routes[0].legs[0].duration.text);
												$('#nextByDistance').css('visibility','visible');
															$('#msg').css('visibility','hidden');
													
								}
								else
								{
									$('#nextByDistance').css('visibility','hidden');
									$('#msg').css('visibility','visible');
									


									$('#msg').html("Destination not found, please be more specific");
								}
  });

  });

getCurrentPosByDistance();

  });

  


function getPosition()
{
	if(distanceLeft>=0)
	{
		
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);
	if(setScene==10)
	{
		if(render)
		{
						updateWaterLevel();
		}
	}
	else
		{
		
			updateGreyCharacter(100-levelPos);

		}
		   			timeOut1=setTimeout('getPosition()',updateFreqMilis);
	}
	else
	{
		if(setScene==10)
		{
			showFinishAquarium();
		}
		else
		{
				showFinishJungle();
		}
	}
}

function getTimeC()
{

	if(timeLeft>0)
	{
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);

			var timeOld=timeNow;
			timeNow=(new Date()).getTime();
			var timeLap=timeNow-timeOld;
			timeLeft=timeLeft-Math.floor(timeLap/1000);
			levelPos=100*(1-(timeLeft/timeFull));
		if(setScene==10)
		{
			//showFinishAquarium();
			if(render)
		{
						updateTimeLeftTextA(timeLeft);
				updateWaterLevel();
		}
		
		}
		else
		{
			updateGreyCharacter(100-levelPos);
			updateTimeLeftText(timeLeft);

		}
		
	//	getCurrentPosCharacter();
		
		timeOut1=setTimeout('getTimeC()',updateFreqMilis);
	}
	else
	{
		if(setScene==10)
		{
			showFinishAquarium();
		}
		else
		{
			showFinishJungle();
		}
	}
	
	
}
var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 0, 
  timeout           : 60000
};



function updatePostionCharacter()
{
	   watchID = navigator.geolocation.watchPosition(onSuccessC,onError,geo_options);
}
function updatePostionAquarium()
{
	   watchID = navigator.geolocation.watchPosition(onSuccessA,onError,geo_options);
}

			function onSuccessA(position) {

				currentPosition=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

				if(setTrip==1)
				{			
					levelPos =100*(1-(distanceLeft/distanceFull));
						distanceLeft=parseInt(google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition))-radiusDistanceFinish;
			
				}
	
				 if(marker5!=undefined)
				 {
					marker5.setMap(null);
				 }
					      // Add an overlay to the map of current lat/lng
				         marker5 = new google.maps.Marker({
				            position: currentPosition,
								icon:nowImage,
				            map: map,
				            title: "We are here!"
				        });

				map.panTo(currentPosition);


			}


			function onSuccessC(position) {

				currentPosition=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

				if(setTrip==1)
				{			
					levelPos =100*(1-(distanceLeft/distanceFull));
						distanceLeft=parseInt(google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition))-radiusDistanceFinish;
			
				}
	
				 if(marker5!=undefined)
				 {
					marker5.setMap(null);
				 }
					      // Add an overlay to the map of current lat/lng
				         marker5 = new google.maps.Marker({
				            position: currentPosition,
				            map: map,
							icon:nowImage,
				            title: "We are here!"
				        });

				map.panTo(currentPosition);


			}
			function onFinish(position) {

				 onSuccessByD(position);
			}
			function onSuccessByD(position) {


				currentPosition=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				        // Add an overlay to the map of current lat/lng
				 if(marker!=undefined)
		 {
			marker.setMap(null);
			}
									 if(marker2!=undefined)
						 {
		marker2.setMap(null);
 }
				         marker = new google.maps.Marker({
				            position: currentPosition,
				            map: mapDest,
							icon:fromImage,
				            title: "We are here!"
				        });		
				 marker2 = new google.maps.Marker({
				            position: currentPosition,
				            map: mapDest2,
							icon:fromImage,
				            title: "We are here!"
				        });			
								if (!stopTryGps)
				{
				mapDest.panTo(currentPosition);
				mapDest2.panTo(currentPosition);
				}
				directionsDisplay.setMap(mapDest);
				directionsDisplay2.setMap(mapDest2);
				
			}
			
			
			// onError Callback receives a PositionError object
			//
			function onError(error) {
				// alert('code: '    + error.code    + '\n' +
					//		'message: ' + error.message + '\n');
					  				 //  currentPosition=defaultLatLng; 
			
				$('#mapAdd').css('color','red');
				$('#mapAdd').html("Sorry, we can't get your current position, please make sure, do you have activate gps and internet and try again.");
						$('#nextByDistance').css('visibility','hidden');
			
			//    alert('code: '    + error.code    + '\n' +
			 //         'message: ' + error.message + '\n');
			}

function getCurrentPosByDistance()
{
	navigator.geolocation.getAccurateCurrentPosition(onFinish, onError, onSuccessByD, {desiredAccuracy:50, maxWait:50000});
	
			     // navigator.geolocation.getCurrentPosition(onSuccessByD, onError,geo_options);
}
function getCurrentPosCharacter()
{
			      navigator.geolocation.getCurrentPosition(onSuccessC, onError,geo_options);
}

function getCurrentPosAquarium()
{
			      navigator.geolocation.getCurrentPosition(onSuccessA, onError,geo_options);
}

function updateTimeLeftText(timeL)
{

				var hrs=Math.floor(timeL/3600);
				var mins=Math.floor((timeL%3600)/60);
				if(hrs==0 && mins==0)
				{
					mins=1;
				}
				if(timeL==0)
				{
						mins=0;
				}
				
				$('#timeLeftCharacter').html(hrs+" HOURS AND <br/>"+mins+" MINUTES LEFT");
}
function updateTimeLeftTextA(timeL)
{

				var hrs=Math.floor(timeL/3600);
				var mins=Math.floor((timeL%3600)/60);
				if(hrs==0 && mins==0)
				{
					mins=1;
				}
				if(timeL==0)
				{
						mins=0;
				}
				
				$('#timeLeftAquarium').html("<br/><br/>"+hrs+" HOURS AND <br/>"+mins+" MINUTES LEFT");
}
function finishTripJungle()
{
				changePageSoundF('play');
			
	  $('#finishLeafs').destroy();
	  		stopAllSoundAF();
	  clearTrip();
	  				pageRender='#main';  
	  $.mobile.changePage('#main',{ transition: pageEfect,reverse:true});
}
function finishTripAquarium()
{
		tapSoundAF('play');
		stopAllSoundA();
	  $('#finishBubbles').destroy();
	  
	 	$('#backAquarium').css('visibility','hidden');
		$('#resetTripContainerAquarium').css('visibility','hidden');
				 				 $('#resetTripContainerAquarium').css('z-index','0');
		$('#menuAquarium').css('visibility','hidden');
		$('#menuAquarium').css('opacity','0');
	  clearTripA();
	  				pageRender='#main';  
	  $.mobile.changePage('#main',{ transition: pageEfect,reverse:true});
}
function showFinishJungle()
{
			clearInterval(intervalDist);
				clearInterval(intervalDist2);
			navigator.geolocation.clearWatch(watchID);
			ovationSoundF('play');
			$('#knowFactContainer').css('opacity','0');
				  $('#menuJungle').css('visibility','visible');
	  $('#finishCharacter').css('visibility','visible');
  		$('#finishLeafs').css('visibility','visible');
		$('#finishLeafs').pan({fps: 30, speed: 4, dir: 'down', depth: 70});

	  
}
function showFinishAquarium()
{
		finishBubblesSoundAF('play');
		ovationSoundF('play');
			clearInterval(intervalDist);
			clearInterval(intervalDist2);
			navigator.geolocation.clearWatch(watchID);

			$('#knowFactContainerAquarium').css('opacity','0');

				  $('#menuAquarium').css('visibility','hidden');
				   $('#timeLeftAquarium').css('visibility','hidden');
				$('#positionLeftAquarium').css('visibility','hidden');
				 $('#resetTripContainerAquarium').css('visibility','hidden');

showDivEfect($('#finishAquarium'));
showDivEfect($('#finishBubbles'));
  		
				$('#finishBubbles')
					.sprite({fps: 5, no_of_frames: 5})
					.active();
		

	  
}

function goToBackFromSetCharacter()
{
		 							changePageSoundF('play');
	if(distanceLeft>0 || (timeLeft>0 && timeFull-timeLeft>0))
	{
					backFromHome=0;
									pageRender='#main';  
			$.mobile.changePage('#main',{ transition: pageEfect,reverse:true});
	}
	else
	{
				$.mobile.changePage(goToTripPlanner(),{ transition: pageEfect,reverse:true});
	}
}
function updateGreyCharacter(actHeightC)
{
	var val=charConH*(actHeightC/100);
	$('#greyCharacter').animate({ "height": val}, "slow");

}
function getTopFrontCharacter(timeL,heightC)
{
	
			
			var timePercent=(timeL*100)/timeFull;
			var actHeightC=Math.floor((timePercent*heightC/100));
			return actHeightC;

}



$(document).on('pageshow','#character', function(e,data){ 
	pageRender='#character';  
	$("#resetTripContainer").height($("#resetTripContainer").width()/1.33);
	$("#positionLeftCharacter").height($("#positionLeftCharacter").width());
	  charConH=$("#characterContainer").height();
if(map==undefined)
{	
 map = new google.maps.Map(document.getElementById("map_canvas_character"),optionsCharacterMap);
}
     $(function() {  
      $("#borderMapCharacter").swipe( {
		  swipeStatus:function(event, phase, direction, distance , duration , fingerCount){
			  
			   if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
						if(fingerCount==1)
						  {
							  								  pinchSoundF('play');
							   if(direction=='up')
							   {		
											   map.panBy(0,Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='down')
							   {
											   map.panBy(0, -Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='left')
							   {
											   map.panBy(Math.floor(distance*speedSwipeMap),0);			   
							   }
							   else if(direction=='right')
							   {
											   map.panBy(-Math.floor(distance*speedSwipeMap),0);			   
							   }
						  }
				   }
        },
		pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom) {
			 if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
					   if(fingerCount==2)
						  {
							
			
								
					if(direction=='out')
						{
															  swipe2SoundF('play');
										
							if(map.getZoom()>0)
							 {
								// zoomLevelD=zoomLevelD-0.05;
									map.setZoom(map.getZoom()-1);
							 }
													
						}
						else if(direction=='in')
						{
							
											  swipe2SoundF('play');
								   if(map.getZoom()<19)
								  {
									 // zoomLevelD=zoomLevelD+0.05;
										map.setZoom(map.getZoom()+1);
								  }
			
						}
			
						  }
				   }
        },
        fingers:$.fn.swipe.fingers.ALL,  
        pinchThreshold:0  
    });	    });	
			
  $(function() {  

      //Enable swiping...
      $("#menuLeaf").swipe( {tap:function(event, target) {
		  								tapJSoundF('play');
							doubleTapCount++;
					     	setTimeout(function () { doubleTapCount=0;},doubleTapSpeed); 
							if(doubleTapCount==2)
							{
								$('#menuJungle').css('visibility', 'visible').animate({opacity: 1.0}, 200);


									  $('#backCharacter').css('visibility','visible');
							}
	}, 
		 
		threshold:50 });
  });


      $("#buttonMenuJungle1").click(function() {
		  			tapJSoundF('play');
				 $('#timeLeftCharacter').css('visibility','visible');
				$('#positionLeftCharacter').css('visibility','hidden');
				 $('#resetTrip').css('visibility','hidden');

			});
      $("#buttonMenuJungle2").click(function() {
		  			tapJSoundF('play');
		  zoomLevel=16;
		  map.setZoom(Math.floor(zoomLevel));
				 $('#positionLeftCharacter').css('visibility','visible');
 					$('#timeLeftCharacter').css('visibility','hidden');
					 $('#resetTripContainer').css('visibility','hidden');
});

      $("#buttonMenuJungle3").click(function() {
		  			tapJSoundF('play');
		  		  		 $('#resetTripContainer').css('visibility','visible');
		  		 $('#positionLeftCharacter').css('visibility','hidden');
 					$('#timeLeftCharacter').css('visibility','hidden');
});

      $("#buttonMenuJungle4").click(function() {
		  			tapJSoundF('play');
					 $('#resetTripContainer').css('visibility','hidden');
					$('#positionLeftCharacter').css('visibility','hidden');
					$('#timeLeftCharacter').css('visibility','hidden');

				 		$('#menuJungle').css('opacity','0');
							$('#menuJungle').css('visibility', 'hidden');
				  $('#backCharacter').css('visibility','hidden');
			});

	 
//$('#fish').sprite({fps: 12, no_of_frames: 6});
	
  		
				if(setTrip==0)
				{
					if (timeFull==timeLeft)
					{
	
					
	  											
						timeNow=new Date().getTime();
						  updatePostionCharacter();
						getTimeC();
					}
				}
				else if(setTrip==1)
				{
					if (distanceFull==distanceLeft)
					{
						$('#timeLeftCharacter').html("<br/>WITHOUT INFORMATION");
										directionsDisplay.setMap(map);		
						if(marker3!=undefined)
						 {
									marker3.setMap(null);
									}
									 if(marker4!=undefined)
						 {
								marker4.setMap(null);
						 }
				         marker3 = new google.maps.Marker({
				            position: startPosition,
				            map: map,
							icon:fromImage,
				            title: "We come from!"
				        });		
								currentPosition
						 marker4 = new google.maps.Marker({
				            position: destPosition,
				            map: map,
							icon:toImage,
				            title: "We go there!"
				        });				
						  updatePostionCharacter();
						  clearInterval(intervalDist);
						   intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);		
					}
				}

			$('#knowFactContainer').css('font-size','1.5em');
						$('#knowFactContainer').css('color','#FDFD5E');

			
$('#knowFactContainer').click(function() {
				tapJSoundF('play');
	if($('#knowFactContainer').css('opacity')==1){$('#knowFactContainer').animate({ "opacity": 0}, "slow");} }) ;
							  clearInterval(intervalDist2);
	intervalDist2=setInterval(function () {loadKnowFact()}, (updateFreqMilis*20)-15);		
//	  getCurrentPosCharacter();
  });




function showSun()
{
	var l=getRandom(0,100);
	$('#sun').css('left',l+'%');
//	$('#sun').css('visibility','visible');
	showDivEfect($('#sun'));
}
function generateClouds(i)
{
			var sp;
			var direction;

			var he;

			var fp=getRandom(15,250);

			he=(getRandom(2,15)/100)*$(window).height();

			//	he=getRandom(3,10)*10;
			var tcloud=getRandom(0,2);
			var widthc;
			if(tcloud==2)
			{
				widthc=35.7;
			}
			else if(tcloud==1)
			{
					widthc=55.5;
			}
			else
			{
					widthc=15;
			}
			if(getRandom(0,1)==0)
			{

				direction='left';
				$('#cloud'+i).css('background','transparent url(resources/characters/aquarium/static/cloud'+tcloud+'b.png) 0 0 no-repeat');

			}
			else
			{
				direction='right';
				$('#cloud'+i).css('background','transparent url(resources/characters/aquarium/static/cloud'+tcloud+'a.png) 0 0 no-repeat');
			}
			var op=getRandom(8,10);
//				$('#cloud'+i).css('opacity',op/10);
			$('#cloud'+i).css('height',he+"px");
			//ss$('#cloud'+i).css('width',(he*widthc)+"px");
			$('#cloud'+i).css('background-size',(he*widthc)+'px '+he+'px');
	showDivEfectC($('#cloud'+i),op/10);

	//		$('#cloud'+i).css('visibility','visible');

		$('#cloud'+i).pan({fps: fp, speed: 1, dir: direction});

}

function showClouds(i)
{
	if(i<=8)
	{

					
		if(getRandom(0,2)<2)
		{
			generateClouds(i);
			
		}
		
//			setTimeout(function(){ showClouds(i+1)},1000);
			 showClouds(i+1);
	}

}

function generateBirds(i)
{
	
	var r=$('#cloudsContainer').width();
	var l=getRandom(0,r);
	var sp=getRandom(1,15);
	var p=getRandom(0,5);
	var h=(getRandom(2,7)/100)*$(window).height();
	$('#bird'+i).css('height',h);
	$('#bird'+i).css('width',$('#bird'+i).height()*8);
	if(l<=$('#contentAquarium').width()/2)
				{
					l=l-($(window).width()/2)-	$('#bird'+i).width();
				}
				else
				{
						l=l+($(window).width()/2);
				}
	$('#bird'+i).css('left',l+'px');
	showDivEfect($('#bird'+i));
//	$('#bird'+i).css('visibility','visible');
	var bot=parseInt($('#cloudsContainer').height())-parseInt($('#cloudsContainer').css('top').replace('px','').replace('%',''))-$('#bird'+i).height();
	var t=getRandom(10,(bot/$('#cloudsContainer').height()));
			$('#bird'+i).css('top',t+'%');
			$('#bird'+i)
			.sprite({fps: 4, no_of_frames:4})
			.spRandom({top: 0, left: 0, right: r, bottom: bot, speed: sp*1000, pause: p*1000 })
			.isDraggable({drag: function() {var topB=parseInt($('#bird'+i).css('top').replace('px',''));if(	topB>bot){return false;}}})
	        .active();
			




}

function showBirds(i)
{
	if(i<=8)
	{

					
		if(getRandom(0,9)<8)
		{
			generateBirds(i);

			
		}
	
					//setTimeout(function(){ showBirds(i+1)},1000);
		showBirds(i+1);
	}

}

var apprsPlant=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var apprsFish=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var apprsMermaid=0;
var apprsWhale=0;
function apearMermaid()
{
		var topW=parseInt($('.waterLevelClass').css('top').replace('%','').replace('px',''));
		var topP=parseInt($('#mermaid').css('top').replace('%','').replace('px',''));
		
		if(topW<=topP)
		{
									mermaidSoundF('play');
						apprsMermaid=2;
			showDivEfect($('#mermaid'));
			var r=$('#contentAquarium').width()/2;
									var maxT=$('#contentAquarium').height();
			$('#mermaid')
			.sprite({fps: 6, no_of_frames:6})
			.spRandom({top: topP, left: -r, right: (r+$('#mermaid').width()), bottom: maxT, speed: 8000, pause: 5000, haveBack:true })
			.active();
	
		}
}
var aspectRatioMermaid=1.961;
function generateMermaid()
{

		var h=$('#mermaid').height();
		var w=parseInt(aspectRatioMermaid*h);
					var r=$('#contentAquarium').width();
		var l=getRandom(-$('#contentAquarium').width(),(r+$('#mermaid').width()));
		$('#mermaid').css('width',w+'px');
		if(l<=$('#contentAquarium').width()/2)
				{
					l=l-($(window).width()/2)-w;
				}
				else
				{
						l=l+($(window).width()/2);
				}
			$('#mermaid').css('left',l+'px');
						var zInd=getRandom(100,2000);

		$('#mermaid').css('z-index',zInd);

}

function showMermaid()
{
			$('#mermaid').destroy();
					
					apprsMermaid=1;
				generateMermaid();
}
var apprsWhale=0;
function apearWhale()
{
		var topW=parseInt($('.waterLevelClass').css('top').replace('%','').replace('px',''));
		var topP=parseInt($('#whale').css('top').replace('%','').replace('px',''));
		
		if(topW<=topP)
		{
			aquarium1SoundF('play');
						apprsWhale=2;
			showDivEfect($('#whale'));
						var maxT=$('#contentAquarium').height();
			var r=$('#contentAquarium').width()/2;
			$('#whale')
			.sprite({fps: 5, no_of_frames:6})
			.spRandom({top: topP, left: -r, right: (r+$('#whale').width()), bottom: maxT, speed: 10000, pause: 5000, haveBack:true })
			.active();
	
		}
}
var aspectRatioWhale=2.1597;
function generateWhale()
{

		var h=$('#whale').height();
		var w=parseInt(aspectRatioWhale*h);
					var r=$('#contentAquarium').width();
		var l=getRandom(-$('#contentAquarium').width(),(r+$('#whale').width()));
		$('#whale').css('width',w+'px');
		if(l<=$('#contentAquarium').width()/2)
				{
					l=l-($(window).width()/2)-w;
				}
				else
				{
						l=l+($(window).width()/2);
				}
			$('#whale').css('left',l+'px');
						var zInd=getRandom(1000,2000);

		$('#whale').css('z-index',zInd);

}

function showWhale()
{
			$('#whale').destroy();
					
					apprsWhale=1;
				generateWhale();
}
var apprsDolphin=0;
function apearDolphin()
{
		var topW=parseInt($('.waterLevelClass').css('top').replace('%','').replace('px',''));
		var topP=parseInt($('#dolphin').css('top').replace('%','').replace('px',''));
		
	if(topW<=topP)
		{
						apprsDolphin=2;
						dolphinSoundF('play');
			showDivEfect($('#dolphin'));
			var r=$('#contentAquarium').width()/2;
			var maxT=$('#contentAquarium').height();
			$('#dolphin')
			.sprite({fps: 7, no_of_frames:7})
			.spRandom({top: topP, left: -r, right: (r+$('#dolphin').width()), bottom: maxT, speed: 10000, pause: 5000, haveBack:true })
			.active();
	
		}
}
var aspectRatioDolphin=1.75;
function generateDolphin()
{

		var h=$('#dolphin').height();
		var w=parseInt(aspectRatioWhale*h);
					var r=$('#contentAquarium').width();
		var l=getRandom(-$('#contentAquarium').width(),(r+$('#dolphin').width()));
		$('#dolphin').css('width',w+'px');
		if(l<=$('#contentAquarium').width()/2)
				{
					l=l-($(window).width()/2)-w;
				}
				else
				{
						l=l+($(window).width()/2);
				}
			$('#dolphin').css('left',l+'px');
						var zInd=getRandom(100,2000);

		$('#dolphin').css('z-index',zInd);

}

function showDolphin()
{
			$('#dolphin').destroy();
					
					apprsDolphin=1;
				generateDolphin();
}
	
	
function apearPlants(i)
{
		var topW=parseInt($('.waterLevelClass').css('top').replace('%','').replace('px',''));
		var topP=parseInt($('#plant'+i).css('top').replace('%','').replace('px',''));
		if(topW<=topP)
		{
						apprsPlant[i-1]=2;
			showDivEfect($('#plant'+i));
			//$('#plant'+i).css('visibility','visible');
			$('#plant'+i)
		.sprite({fps: 5, no_of_frames:5})
		.isDraggable({drag: function() {
			var topMin=$('#plantContent').height()-$('#plant'+i).height()-$('#staticElementContent').height();
			var toP=parseInt($('#plant'+i).css('top').replace('%','').replace('px',''));
				if(	topMin>toP){
					$('#plant'+i).css('top',topMin+'px');
					return false;}}})       .active();
	
		}

}
var aspectRatioPlants=[0.934,0.947,0.942,1.196,0.777,0.9625,0.598,0.572,1.023,1.17];
function generatePlants(i)
{

			var heSand=$('#staticElementContent').height();
			var heCont=$('#contentAquarium').height();


		var l=getRandom(0,$('#plantContent').width());

			var h=parseInt(getRandom(10,30)/100*heCont);
		$('#plant'+i).css('height',h+'px');
		var w=parseInt(aspectRatioPlants[(i%10)]*h);
		$('#plant'+i).css('width',w+'px');
			var minTop=heCont-heSand-$('#plant'+i).height();
			var maxTop=heCont-$('#plant'+i).height();

		var t=getRandom(minTop,maxTop);
					var zInd=t+$('#plant'+i).height();
						
		$('#plant'+i).css('top',t+'px');
		$('#plant'+i).css('left',l+'px');
		$('#plant'+i).css('z-index',zInd);

}

function showPlants(i)
{
	if(i<=20)
	{

					
		if(getRandom(0,9)<5)
		{
					apprsPlant[i-1]=1;
	
			generatePlants(i);
			
		}
		
				//	setTimeout(function(){ showPlants(i+1)},100);
 showPlants(i+1);
	}

}
var aspRat=6.564*2; //alto img sobre alto franja
	//var aspRat=17.93/2 //alto img sobre alto franja
	var bhw=Math.floor($(window).height()*0.8*0.06);

function updateWaterLevel()
{
			
//		var bhc=$('#contentAquarium').height()-bhw;

		var bhc=$('#contentAquarium').height()-bhw;
		
	var newTop=bhc -(bhc*(levelPos/100));
	var wLH=$('#waterLevel').height();
//	 $('#waterLevel').animate({ "top": newTop+'px'}, "slow");
	 	 $('#waterLevel').css("top", newTop+'px');
$('#waterPipe').height(newTop+wLH+parseFloat($('#waterPipe').css('top').replace('px','')));
	 	// $('#waterPipe').animate({ "height": oldHeight-(oldTop-newTop)+'px'}, "slow");

	 $('#waterLevel0').css("top", newTop+'px');

	for(var j=1;j<=20;j++)
	{
		if(apprsPlant[j-1]==1)
		{
			apearPlants(j);
		}
		else if(apprsPlant[j-1]==0)
		{
			hideDivEfect($('#plant'+j));
						}
		if(apprsFish[j-1]==1)
		{
				apearFishs(j);
		}
				else if(apprsFish[j-1]==0)
		{
			hideDivEfect($('#fish'+j));
						}

	}
	if(apprsMermaid==1)
		{
				apearMermaid();
		}
				else if(apprsMermaid==0)
		{
			hideDivEfect($('#mermaid'));
		}
		
		if(apprsWhale==1)
		{
				apearWhale();
		}
				else if(apprsWhale==0)
		{
			hideDivEfect($('#whale'));
		}
		
if(apprsDolphin==1)
		{
				apearDolphin();
		}
				else if(apprsDolphin==0)
		{
			hideDivEfect($('#dolphin'));
		}

}

function showWaterLevel()
{
		var bhc=$('#contentAquarium').height()-bhw;
		$('#waterLevel').height(bhw);
		$('#waterLevel0').height($(window).height()*1.1);
	
	 var lv;
	 if(levelPos==-1)
	 {
		 lv=0;
	 }
	 else
	 {
		 lv=levelPos;
	 }
	 var t=bhc -(bhc*(lv/100));
	 	 $('#waterLevel').css('top',t+'px');
		 $('#waterLevel0').css('top',t+'px');
		$('#waterLevel').css('visibility','visible');
		$('#waterLevel0').css('visibility','visible');
	
$('#waterLevel').pan({fps: 15, speed: 20, dir: 'left'});
}
var aspectRatioStaticsElements=[1.127,1.58,1.48,1.78,1.41,1.63,1.26,1.605,1.07,1.095];
function generateStaticElements(i)
{
		var hCont=$('#staticElementContent').height();
		var hPor=parseInt(getRandom(3,7)/10*hCont);
		$('#staticElement'+i).css('height',hPor+'px');

		var minTop=0-hPor;
		var maxTop=$('#staticElementContent').height()-hPor;
		var t=getRandom(minTop,maxTop);
		var l=getRandom(0,$('#staticElementContent').width());
		var zInd=t+$('#plantContent').height()-$('#staticElementContent').height()+hPor;
		var w=parseInt(hPor*aspectRatioStaticsElements[(i%10)]);
		$('#staticElement'+i).css('width',w+'px');
		$('#staticElement'+i).css('top',t+'px');
		$('#staticElement'+i).css('z-index',zInd);
		$('#staticElement'+i).css('left',l+'px');
					showDivEfect($('#staticElement'+i));
		//$('#staticElement'+i).css('visibility','visible');


		var topW=0-$('#staticElement'+i).height();
		var topP=parseInt($('#staticElement'+i).css('top').replace('%','').replace('px',''));
			$('#staticElement'+i)
			.sprite({fps: 1, no_of_frames:1})
			.isDraggable({drag: function() {

			var toP=parseInt($('#staticElement'+i).css('top').replace('%','').replace('px',''));
				if(	topW>toP){
						$('#staticElement'+i).css('top',topW+'px');
					return false;}}})
	        .active();
		

}


function showStaticElements(i)
{
	
	if(i<=20)
	{
					
		if(getRandom(0,9)<=4)
		{
			generateStaticElements(i);
			
		}
		
					//setTimeout(function(){ showStaticElements(i+1)},100);
showStaticElements(i+1);
					
	}

}

var aspectRatioFishs=[1.634,1.393,1.589,1.605,1.495,1.746,1.899,2.034,1.865,1.951];

function apearFishs(i)
{
		var hC=$('#contentAquarium').height();
		var hF=$('#fish'+i).height();
		var tF=parseInt($('#fish'+i).css('top').replace('px',''));
		var topM=Math.floor($(window).height()*0.8*0.06);
		var wl=parseInt($('#waterLevel').css('top').replace('px',''))+topM;
		if((tF>wl) && (hC>=(tF+hF)))
		{
			apprsFish[i-1]=2;
			showDivEfect($('#fish'+i));
			var r=$('#contentAquarium').width();
			var l=getRandom(0,r);
			var sp=getRandom(1,15);
			var p=getRandom(0,5);
			var fp=parseInt(8-Math.floor(sp/2.8));
			var bot=hC;
			$('#fish'+i)
			.sprite({fps: fp, no_of_frames:6})
			.spRandom({top: wl, left: 0, right: r, bottom: bot, speed: sp*1000, pause: p*1000, haveBack:true })
			.isDraggable({drag: function() {
			var topMin=topM;
			var toP=parseInt($('#fish'+i).css('top').replace('%','').replace('px',''));
				if(	topM+parseInt($('#waterLevel').css('top').replace('px',''))>toP){
					$('#fish'+i).css('top',(topM+parseInt($('#waterLevel').css('top').replace('px','')))+'px');
					return false;}}})      
			 .active();
	
		}

}

function generateFishs(i)
{

			
			var conH=$('#contentAquarium').height();
			var h=parseInt(getRandom(5,25)/100*conH);
			$('#fish'+i).css('height',h+'px');
			var w=parseInt(aspectRatioFishs[(i%10)]*h);
			$('#fish'+i).css('width',w+'px');
			var minTop=Math.floor($(window).height()*0.8*0.06);;
			var maxTop=$('#contentAquarium').height();
			var t=getRandom(minTop,maxTop);
				var l=getRandom(0,$('#contentAquarium').width());
				if(l<=$('#contentAquarium').width()/2)
				{
					l=l-($(window).width()/2)-w;
				}
				else
				{
						l=l+($(window).width()/2);
				}
			var zInd=getRandom(100,2000);

		$('#fish'+i).css('top',t+'px');
		$('#fish'+i).css('left',l+'px');
		$('#fish'+i).css('z-index',zInd);


}

function showFishs(i)
{
	if(i<=20)
	{

		if(getRandom(0,9)<7)
		{
			apprsFish[i-1]=1;
			generateFishs(i);
			
		}
		
		showFishs(i+1);

	}

}
function startSoundsA()
{
birdsConSoundF('play');
bird1SoundF('play');
bird2SoundF('play');
aquarium2SoundF('play');
}
$(document).on('pageshow','#aquarium', function(e,data){ 
render=true;
	pageRender='#aquarium';  
	showSun();
apprsPlant=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
apprsFish=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	apprsMermaid=0;
		apprsWhale=0;
				apprsDolphin=0;
	showWaterLevel();

showClouds(1);
showBirds(1);

showStaticElements(1);
showPlants(1);

showFishs(1);
startSoundsA();

showMermaid();
showWhale();
showDolphin();
	$('#bubblesLevel')
					.sprite({fps: 5, no_of_frames: 5})
					.active();


var lP=($('#pipeContainer').width()*0.08)-($('#pipe').width()*0.91);
$('#waterPipe').height(0.90*$('#waterPipeContent').height());
$('#pipe').css('left',lP+'px');
waterPipeSoundF('play');
showDivEfect($('#pipe'));
showDivEfect($('#waterPipe'));
$('#waterPipe').pan({fps: 40, speed: 7, dir: 'down', depth: 70});
	updateWaterLevel();
$('#allA').css('visibility','visible');
wavesSoundF('play');
	$("#resetTripContainerAquarium").height($("#resetTripContainerAquarium").width());
	$("#positionLeftAquarium").height($("#positionLeftAquarium").width());
	  charConH=$("#aquariumContainer").height();
if(map==undefined)
{	
 map = new google.maps.Map(document.getElementById("map_canvas_aquarium"),optionsCharacterMap);
}
     $(function() {  
      $("#borderMapAquarium").swipe( {
		  swipeStatus:function(event, phase, direction, distance , duration , fingerCount){
			  
			   if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
						if(fingerCount==1)
						  {								  pinchSoundF('play');
							  
							   if(direction=='up')
							   {		
											   map.panBy(0,Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='down')
							   {
											   map.panBy(0, -Math.floor(distance*speedSwipeMap));			   
							   }
							   else if(direction=='left')
							   {
											   map.panBy(Math.floor(distance*speedSwipeMap),0);			   
							   }
							   else if(direction=='right')
							   {
											   map.panBy(-Math.floor(distance*speedSwipeMap),0);			   
							   }
						  }
				   }
        },
		pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom) {
			 if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
					   if(fingerCount==2)
						  {
							
			
								
					if(direction=='out')
						{
																		  swipe2SoundF('play');
							if(map.getZoom()>0)
							 {
								// zoomLevelD=zoomLevelD-0.05;
									map.setZoom(map.getZoom()-1);
							 }
													
						}
						else if(direction=='in')
						{
							
											  swipe2SoundF('play');
								   if(map.getZoom()<19)
								  {
									 // zoomLevelD=zoomLevelD+0.05;
										map.setZoom(map.getZoom()+1);
								  }
			
						}
			
						  }
				   }
        },
        fingers:$.fn.swipe.fingers.ALL,  
        pinchThreshold:0  
    });	    });	
			
  $(function() {  

      //Enable swiping...
      $("#menuBubble").swipe( {tap:function(event, target) {
							doubleTapCount++;
							tapSoundAF('play');
					     	setTimeout(function () { doubleTapCount=0;},doubleTapSpeed); 
							if(doubleTapCount==2)
							{
								$('#menuAquarium').css('visibility', 'visible').animate({opacity: 1.0}, 200);


									  $('#backAquarium').css('visibility','visible');
							}
	}, 
		 
		threshold:50 });
  });


      $("#buttonMenuAquarium1").click(function() {
		  	tapSoundAF('play');
				 $('#timeLeftAquarium').css('visibility','visible');
				 $('#timeLeftAquarium').css('z-index','6899');
				 	$('#positionLeftAquarium').css('z-index','0');
				$('#positionLeftAquarium').css('visibility','hidden');
				 $('#resetTripContainerAquarium').css('visibility','hidden');
				 				 $('#resetTripContainerAquarium').css('z-index','0');

			});
      $("#buttonMenuAquarium2").click(function() {
		  	tapSoundAF('play');
		  zoomLevel=16;
		  map.setZoom(Math.floor(zoomLevel));
		  	$('#positionLeftAquarium').css('z-index','6890');
				 $('#positionLeftAquarium').css('visibility','visible');
 					$('#timeLeftAquarium').css('visibility','hidden');
					$('#timeLeftAquarium').css('z-index','0');
					 $('#resetTripContainerAquarium').css('visibility','hidden');
					 				 				 $('#resetTripContainerAquarium').css('z-index','0');
});

      $("#buttonMenuAquarium3").click(function() {
		  	tapSoundAF('play');
		  		  		 $('#resetTripContainerAquarium').css('visibility','visible');
						 				 				 $('#resetTripContainerAquarium').css('z-index','7002');
						 	$('#positionLeftAquarium').css('z-index','0');
		  		 $('#positionLeftAquarium').css('visibility','hidden');
 					$('#timeLeftAquarium').css('visibility','hidden');
					$('#timeLeftAquarium').css('z-index','0');
});

      $("#buttonMenuAquarium4").click(function() {
		  	tapSoundAF('play');
					 $('#resetTripContainerAquarium').css('visibility','hidden');
					 				 				 $('#resetTripContainerAquarium').css('z-index','0');
					 	$('#positionLeftAquarium').css('z-index','0');
					$('#positionLeftAquarium').css('visibility','hidden');
					$('#timeLeftAquarium').css('visibility','hidden');
					$('#timeLeftAquarium').css('z-index','0');

				 		$('#menuAquarium').css('opacity','0');
							$('#menuAquarium').css('visibility', 'hidden');
				  $('#backAquarium').css('visibility','hidden');
			});

		
				if(setTrip==0)
				{
					if (timeFull==timeLeft)
					{
	

	  											
						timeNow=new Date().getTime();
						  updatePostionAquarium();
						getTimeC();
					}
				}
				else if(setTrip==1)
				{
					if (distanceFull==distanceLeft)
					{
						$('#timeLeftAquarium').html("<br/>WITHOUT INFORMATION");
										directionsDisplay.setMap(map);				
						  updatePostionAquarium();
						  							  clearInterval(intervalDist);
						   intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);		
					}
				}
	
			$('#knowFactContainerAquarium').css('font-size','1.5em');
						$('#knowFactContainerAquarium').css('color','rgb(0,133,192)');

			
$('#knowFactContainerAquarium').click(function() {
		tapSoundAF('play');
	if($('#knowFactContainerAquarium').css('opacity')==1){
	$('#knowFactContainerAquarium').css('z-index','0');
	$('#knowFactContainerAquarium').animate({ "opacity": 0}, "slow");} }) ;
								  clearInterval(intervalDist2);
	intervalDist2=setInterval(function () {loadKnowFactA()}, (updateFreqMilis*20)-15);		
  });
  
  
  function correctFontKows(txt)
  {
	  
		return	  txt.replace('?','<font face="Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana, sans-serif"> ?</font>');
	  
  }
 function loadKnowFactA()
 {
	 var r=getRandom(0,2);
	if(r==0 && $('#knowFactContainerAquarium').css('opacity')==0)
	{
	$('#knowFactContainerAquarium').css('z-index','6900');
		$('#knowFactContainerAquarium').html("<br/><br/>"+correctFontKows(knows[getRandom(0,(knows.length-1))].toUpperCase())+"<br/><br/>");
		$('#knowFactContainerAquarium').animate({ "opacity": 1}, "slow");
		//$('#knowFactContainer').animate({ "visibility": 'visible'}, "slow");
				
	}
	else
	{
				
	}
 }
  

 function loadKnowFact()
 {
	 var r=getRandom(0,2);
	if(r==0 && $('#knowFactContainer').css('opacity')==0)
	{
		knowJSoundF('play',setScene);

		$('#knowFactContainer').html(correctFontKows(knows[getRandom(0,(knows.length-1))].toUpperCase()));
		$('#knowFactContainer').animate({ "opacity": 1}, "slow");
		//$('#knowFactContainer').animate({ "visibility": 'visible'}, "slow");
				
	}
	else
	{
				
	}
 }
  
function getRandom(n,m)
{
	var n1=n-1;
	var m1=m+1;
	return Math.floor(Math.random()*(n1-m1+1))+m1;
}
function loadBackground()
{
		
	var n=0;
	var m=3;
	var backGround=getRandom(n,m);
	var backgroundSet="resources/backgrounds/back"+backGround+"_"+resolution+".png";
	
	 $('#character').css({
    'background' : 'transparent url('+backgroundSet+') 0 0 no-repeat',
	'-webkit-background-size':'cover',
	'background-repeat':'no-repeat',
	'background-size':'cover',
});
		

					 
}

function loadCharacter()
{
	loadBackground();
	var backCharacter;
	var frontCharacter;
	var headerCharacter;


	switch(setScene)
	{
		case 0:
				backCharacter="resources/characters/jungle/lion2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/lion1_"+resolution+".png";
				headerCharacter="resources/labels/lionlabel.png";
		break;
		case 1:
				backCharacter="resources/characters/jungle/zebra2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/zebra1_"+resolution+".png";
				headerCharacter="resources/labels/zebralabel.png";
		break;
		case 2:
				backCharacter="resources/characters/jungle/monkey2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/monkey1_"+resolution+".png";
				headerCharacter="resources/labels/monkeylabel.png";
		break;
		case 3:
				backCharacter="resources/characters/jungle/hippo2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/hippo1_"+resolution+".png";
				headerCharacter="resources/labels/hippolabel.png";				
		break;				
		case 4:
				backCharacter="resources/characters/jungle/rhino2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/rhino1_"+resolution+".png";
				headerCharacter="resources/labels/rhinolabel.png";								
		break;
		case 5:
				backCharacter="resources/characters/jungle/elephant2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/elephant1_"+resolution+".png";
				headerCharacter="resources/labels/elephantlabel.png";				
		break;
		case 6:
		
				backCharacter="resources/characters/jungle/ostrich2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/ostrich1_"+resolution+".png";
				headerCharacter="resources/labels/ostrichlabel.png";								

		break;
		case 7:
				backCharacter="resources/characters/jungle/toucan2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/toucan1_"+resolution+".png";
				headerCharacter="resources/labels/toucanlabel.png";								

		break;
		case 8:
				backCharacter="resources/characters/jungle/crocodile2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/crocodile1_"+resolution+".png";
				headerCharacter="resources/labels/crocodilelabel.png";				
		break;
		case 9:
				backCharacter="resources/characters/jungle/giraffe2_"+resolution+".png";
				frontCharacter="resources/characters/jungle/giraffe1_"+resolution+".png";
				headerCharacter="resources/labels/giraffelabel.png";				

		break;						
	}
	
		  $('#headerContentCharacter').css('background','transparent url('+headerCharacter+') 0 0 no-repeat');

  $('#greyCharacter').css({
    'background' : 'transparent url('+frontCharacter+') 0 0 no-repeat',
    'background-size' : '100% ' + $('#loadingContent').height()+'px' ,
});

  $('#colorCharacter').css({
    'background' : 'transparent url('+backCharacter+') 0 0 no-repeat',
    'background-size' : '100% ' + $('#loadingContent').height()+'px',
});
}
function clearTripYesAquarium()
{
		tapSoundAF('play');

	 	$('#backAquarium').css('visibility','hidden');
		$('#resetTripContainerAquarium').css('visibility','hidden');
				 				 $('#resetTripContainerAquarium').css('z-index','0');
		$('#menuAquarium').css('visibility','hidden');
		$('#menuAquarium').css('opacity','0');
		clearTripA();
						pageRender='#main';  
		$.mobile.changePage('#main',{ transition: pageEfect,reverse:true});

}
function clearTripYes()
{

				changePageSoundF('play');
	 	$('#backCharacter').css('visibility','hidden');
		$('#resetTripContainer').css('visibility','hidden');

		$('#menuJungle').css('visibility','hidden');
		$('#menuJungle').css('opacity','0');
		clearTrip();
						pageRender='#main';  
		$.mobile.changePage('#main',{ transition: pageEfect,reverse:true});
}

function goToPage(page,rev)
{
		 							changePageSoundF('play');
	$.mobile.changePage(page,{ transition: pageEfect,reverse:rev});

}
function clearTripNoAquarium()
{
		tapSoundAF('play');
		$('#resetTripContainerAquarium').css('visibility','hidden');
						 				 $('#resetTripContainerAquarium').css('z-index','0');
				$('#backAquarium').css('visibility','hidden');
		$('#menuAquarium').css('opacity','0');
				$('#menuAquarium').css('visibility', 'hidden');

}
function clearTripNo()
{
			tapJSoundF('play');
	$('#resetTripContainer').css('visibility','hidden');
					$('#backJungle').css('visibility','hidden');
		$('#menuJungle').css('opacity','0');
				$('#menuJungle').css('visibility', 'hidden');
}
	function clearTrip()
	{
		  clearTimeout(timeOut1);
		
		clearInterval(intervalDist);
				clearInterval(intervalDist2);
			navigator.geolocation.clearWatch(watchID);
			$('#knowFactContainer').css('opacity','0');
				$('#knowFactContainerAquarium').css('opacity','0');
												
			directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
						directionsDisplay2 = new google.maps.DirectionsRenderer(rendererOptions);
			directionsService=new google.maps.DirectionsService();
			 hourpos=0;
			 minute1pos=0;
			 minute2pos=0;
			timeNow=0;
			setScene=0;	
			distanceLeft=-1;
			distanceFull=-1;
			levelPos=-1;
			timeLeft=-1;
			timeFull=-1;
			frontCharacterTop=0;
			characterContentHeight=0;
			map=undefined;
			mapDest=undefined;
			
				stopAllSoundA();
	}
	
	function clearTripA()
	{
		  clearTimeout(timeOut1);
		render=true;
		stopAllSoundA();
			$('#allA').css('visibility','hidden');
		
		clearInterval(intervalDist);
				clearInterval(intervalDist2);
			navigator.geolocation.clearWatch(watchID);
						$('#knowFactContainerAquarium').css('opacity','0');

				  $('#finishAquarium').css('visibility','hidden');
				  				  $('#finishAquarium').css('opacity','0');
			directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
						directionsDisplay2 = new google.maps.DirectionsRenderer(rendererOptions);
			directionsService=new google.maps.DirectionsService();
			 hourpos=0;
			 minute1pos=0;
			 minute2pos=0;
			timeNow=0;
			setScene=0;	
			distanceLeft=-1;
			distanceFull=-1;
			levelPos=-1;
			timeLeft=-1;
			timeFull=-1;
			frontCharacterTop=0;
			characterContentHeight=0;
			map=undefined;
			mapDest=undefined;
		stopAllAnimation();
	}
	function clearBackA()
	{
						$('#knowFactContainerAquarium').css('opacity','0');

				  $('#finishAquarium').css('visibility','hidden');
				  				  $('#finishAquarium').css('opacity','0');
		stopAllAnimation();
	}
	
	
function goToLoading()
{
				changePageSoundF('play');
		$.mobile.changePage('#loading',{ transition: pageEfect,reverse:false});


}
function	loadLoading()
{
		  $('#backCharacter').css('visibility','hidden');
	  $('#finishLeafs').css('visibility','hidden');
	  	  $('#finishBubbles').css('visibility','hidden');
		  	  	  $('#finishBubbles').css('opacity','0');
	  $('#positionLeftCharacter').css('visibility','hidden');
	 $('#resetTripContainer').css('visibility','hidden');
	 $('#menuJungle').css('visibility','hidden');
	 	 $('#menuJungle').css('opacity','0');

	  $('#finishCharacter').css('visibility','hidden');
	  $('#finishLeafs').destroy();

				 $("#wheelBorder").height($("#wheelBorder").width());

 				 $("#wheelDiv").height($("#wheelBorder").width()/9);
			  $("#wheelDiv").css('top',($("#wheelBorder").height()/2)-($("#wheelDiv").height()/2));
			$("#wheelBorder").css('visibility','visible');			
			$("#wheelDiv").css('visibility','visible');			
}

$(document).on('pageshow','#loading', function(e,data){ 
	loadLoading();
	if(!isLoadSound2)
{
	//loadSounds2();
}
	playMusic();
			
jungleSound.bind('ended', function(e) {
	music[nMusic].setVolume(volMusic);
});
	jungleSound.bind('playing', function(e) {
	music[nMusic].setVolume(volMusicD);
});


ovation.bind('ended', function(e) {
	music[nMusic].setVolume( volMusic);
});
	ovation.bind('playing', function(e) {
	music[nMusic].setVolume(volMusicD);
});

				 rotTimes=2000;	
				 
			  loadCharacter();
				setTimeout(function () { 

						if(setScene<=9)
						{
							$.mobile.changePage("#character",{ transition: pageEfect,reverse:false});
						}
						else
						{
							$.mobile.changePage("#aquarium",{ transition: pageEfect,reverse:false});
						}
						},rotTimes); 

					
			
			});

function backFromCharacter()
{
				changePageSoundF('play');
					stopAllSoundA();
	 $('#menuJungle').css('visibility','hidden');
	 $('#positionLeftCharacter').css('visibility','hidden');
	 	 $('#timeLeftCharacter').css('visibility','hidden');
    	$('#menuJungle').css('opacity', '0');
									  $('#backCharacter').css('visibility','hidden');
									  $.mobile.changePage('#setCharacter',{ transition: pageEfect,reverse:true});
}
function backFromAquarium()
{
	tapSoundAF('play');
	stopAllSoundA();
	render=false;
	$('#allA').css('visibility','hidden');
	 $('#menuAquarium').css('visibility','hidden');

	 $('#positionLeftAquarium').css('visibility','hidden');
	 	$('#positionLeftAquarium').css('z-index','0');
	 	 $('#timeLeftAquarium').css('visibility','hidden');
		 	 	$('#timeLeftAquarium').css('z-index','0');
    	$('#menuAquarium').css('opacity', '0');
		


									 $('#backAquarium').css('visibility','hidden');
									 stopAllAnimation();
									  $.mobile.changePage('#setCharacter',{ transition: pageEfect,reverse:true});
}

function showDivEfect(d)
{
	d.css('visibility', 'visible');
	d.css('opacity', '1');
//	d.animate({opacity: 1}, 1000);
}
function showDivEfectC(d,o)
{
	d.css('visibility', 'visible')
	d.css('opacity', '1');
//	d.animate({opacity: o}, 1000);
}

function hideDivEfect(d)
{
	d.css('opacity','0');
	d.css('visibility', 'hidden');
}
function stopAllAnimation()
{
	for(var i=1;i<=8;i++)
	{
		
		$('#bird'+i).destroy();
		$('#cloud'+i).destroy();
		$('#bird'+i).css('visibility','hidden');
				$('#plant'+i).css('opacity','0');
		$('#cloud'+i).css('visibility','hidden');
				$('#cloud'+i).css('opacity','0');
				
	}
		for(var j=1;j<=20;j++)
	{
				
		$('#plant'+j).destroy();
				$('#fish'+j).destroy();
		$('#staticElement'+j).destroy();
		$('#plant'+j).css('visibility','hidden');
				$('#plant'+j).css('opacity','0');
								$('#staticElement'+j).css('visibility','hidden');
				$('#staticElement'+j).css('opacity','0');

				$('#fish'+j).css('visibility','hidden');
				$('#fish'+j).css('opacity','0');

	}
$('#waterLevel').destroy();	
$('#waterLevel').css('visibility','hidden');


$('#waterLevel0').destroy();	
$('#waterLevel0').css('visibility','hidden');


$('#mermaid').destroy();	
$('#mermaid').css('visibility','hidden');
$('#mermaid').css('opacity','0');

$('#dolphin').destroy();	
$('#dolphin').css('visibility','hidden');
$('#dolphin').css('opacity','0');

$('#whale').destroy();	
$('#whale').css('visibility','hidden');
$('#whale').css('opacity','0');

$('#waterPipe').destroy();	
$('#waterPipe').css('visibility','hidden');
$('#waterPipe').css('opacity','0');

$('#sun').css('visibility','hidden');
$('#sun').css('opacity','0');
}
function stopAllSoundA()
{

	finishBubblesSoundAF('pause');
	aquarium1SoundF('pause');
	aquarium2SoundF('pause');
	waterPipeSoundF('pause');
	wavesSoundF('pause');

clearInterval(dolphinSoundIn);
clearInterval(mermaidSoundIn);
clearInterval(bird1SoundIn);
clearInterval(bird2SoundIn);
clearInterval(ovationSoundIn);
	

			if(isAndroid)
		{	
			if(nMusic!=0)
			{
				window.plugins.NativeAudio.stop(nMusic);
			}
			window.plugins.NativeAudio.stop('ovation');	
					window.plugins.NativeAudio.stop('jungleSound.stop()');	
		}
		else
		{
				if(nMusic!=0)
				{
					music[nMusic].stop();
				}
				ovation.stop();	
						jungleSound.stop();	
		}

			birdsConSoundF('pause');
	
}

var bird1SoundIn;
var bird2SoundIn;
var dolphinSoundIn;
var mermaidSoundIn;
var ovationSoundIn;
var nMusic=0;
function playMusic()
{
	
		if(isAndroid)
	{	
	
if(nMusic!=0)
	{

			window.plugins.NativeAudio.stop(nMusic);

	}
	nMusic=getRandom(1,7);
	window.plugins.NativeAudio.setVolumeForComplexAsset(nMusic, volMusic, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop(nMusic);
		}
		else
		{
				window.plugins.NativeAudio.stop(nMusic);
		}
		
		
	}
	else
	{	
	if(nMusic!=0)
	{
		music[nMusic].stop();
		

	}
	nMusic=getRandom(1,7);
	music[nMusic].setVolume(volMusic);
		music[nMusic].play();	
	}
}			
function aquarium2SoundF(acc)
{
	
		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('aquarium2Sound', soundVol50, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop('aquarium2Sound');
		}
		else
		{
				window.plugins.NativeAudio.stop('aquarium2Sound');
		}
	}
	else
	{	
		aquarium2Sound.setVolume(soundVol50);		
	if(acc=='play')
	{
		aquarium2Sound.play();
	}
	else
	{
			aquarium2Sound.stop();
	}
	}

}

function ovationSoundF(acc)
{
clearInterval(ovationSoundIn);
ovationSoundIn=setInterval(function () {

		if(isAndroid)
	{	
	

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('ovation');
		}
		else
		{
				window.plugins.NativeAudio.stop('ovation');
		}
	}
	else
	{	
	if(acc=='play')
	{
		ovation.play();
	}
	else
	{
			ovation.stop();
	}
	}
	},5000);
}
function dolphinSoundF(acc)
{
clearInterval(dolphinSoundIn);
	dolphinSoundIn=setInterval(function () {
	
		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('dolphinSound', soundVol50, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('dolphinSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('dolphinSound');
		}
	}
	else
	{	
			
	
	dolphinSound.setVolume(soundVol50);		
	if(acc=='play')
	{
		dolphinSound.play();
	}
	else
	{
			dolphinSound.stop();
	}
	}
		},10000);
}
function mermaidSoundF(acc)
{
clearInterval(mermaidSoundIn);
	mermaidSoundIn=setInterval(function () {
		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('mermaidSound', soundVol50, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('mermaidSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('mermaidSound');
		}
	}
	else
	{	
		
	
	mermaidSound.setVolume(soundVol50);		
	if(acc=='play')
	{
		mermaidSound.play();
	}
	else
	{
			mermaidSound.stop();
	}
	}
		},10000);
}

function bird1SoundF(acc)
{
clearInterval(bird1SoundIn);
bird1SoundIn=setInterval(function () {
		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('bird1Sound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('bird1Sound');
		}
		else
		{
				window.plugins.NativeAudio.stop('bird1Sound');
		}
	}
	else
	{	
	
	bird1Sound.setVolume(soundVol10);		
	if(acc=='play')
	{
		bird1Sound.play();
	}
	else
	{
			bird1Sound.stop();
	}
	}
	},20000);
}


function bird2SoundF(acc)
{
clearInterval(bird2SoundIn);
bird2SoundIn=setInterval(function () {

		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('bird2Sound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('bird2Sound');
		}
		else
		{
				window.plugins.NativeAudio.stop('bird2Sound');
		}
	}
	else
	{	
	bird2Sound.setVolume(soundVol10);		
	if(acc=='play')
	{
		bird2Sound.play();
	}
	else
	{
			bird2Sound.stop();
	}
	}
	},4000);
}
function scrollSoundF(acc)
{
	if(isAndroid)
	{	
	

		if(acc=='play')
		{
			window.plugins.NativeAudio.play('scrollSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('scrollSound');
		}
	}
	else
	{
	if(acc=='play')
	{
		scrollSound.play();
	}
	else
	{
			scrollSound.stop();
	}
	}
	
}

function birdsConSoundF(acc)
{
		if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('birdsConSound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop('birdsConSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('birdsConSound');
		}
	}
	else
	{

					birdsConSound.setVolume(soundVol10);		
	if(acc=='play')
	{
		birdsConSound.play();
	}
	else
	{
			birdsConSound.stop();
	}
	}
}
function wavesSoundF(acc)
{
	if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('wavesSound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop('wavesSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('wavesSound');
		}
	}
	else
	{
	
					wavesSound.setVolume(soundVol10);		
	if(acc=='play')
	{
		wavesSound.play();
	}
	else
	{
			wavesSound.stop();
	}
	}
}
function tapSoundAF(acc)
{
	
	if(isAndroid)
	{	
			if(acc=='play')
		{
			window.plugins.NativeAudio.play('tapASound');
		}
		else
		{
				window.plugins.NativeAudio.stop('tapASound');
		}
	}
	else
	{
	
	if(acc=='play')
	{
		tapASound.play();
	}
	else
	{
			tapASound.stop();
	}
	}
	
}

function changePageSoundF(acc)
{
	
	
	if(isAndroid)
	{	
			if(acc=='play')
		{
			window.plugins.NativeAudio.play('changePageSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('changePageSound');
		}
	}
	else
	{
	if(acc=='play')
	{
		changePageSound.play();
	}
	else
	{
			changePageSound.stop();
	}
	}
}


function tapJSoundF(acc)
{
	
	if(isAndroid)
	{	
			if(acc=='play')
		{
			window.plugins.NativeAudio.play('tapJSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('tapJSound');
		}
	}
	else
	{
		if(acc=='play')
		{
			tapJSound.play();
		}
		else
		{
				tapJSound.stop();
		}
	}
}

function finishBubblesSoundAF(acc)
{
			
			
	if(isAndroid)
	{	
			if(acc=='play')
		{
			window.plugins.NativeAudio.loop('bubblesFinishSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('bubblesFinishSound');
		}
	}
	else
	{	
	if(acc=='play')
	{
		bubblesFinishSound.play();
	}
	else
	{
			bubblesFinishSound.stop();
	}
	}
	
	
}

function aquarium1SoundF(acc)
{
			
	if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('aquarium1Sound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop('aquarium1Sound');
		}
		else
		{
				window.plugins.NativeAudio.stop('aquarium1Sound');
		}
	}
	else
	{
							aquarium1Sound.setVolume(soundVol10);	
	if(acc=='play')
	{
		aquarium1Sound.play();
	}
	else
	{
			aquarium1Sound.stop();
	}
	}

}

function waterPipeSoundF(acc)

{
	if(isAndroid)
	{	
	

	window.plugins.NativeAudio.setVolumeForComplexAsset('waterPipeSound', soundVol10, function(msg){},function(msg){})

		if(acc=='play')
		{
			window.plugins.NativeAudio.loop('waterPipeSound');
		}
		else
		{
				window.plugins.NativeAudio.stop('waterPipeSound');
		}
	}
	else
	{
			waterPipeSound.setVolume(soundVol10);		
		if(acc=='play')
		{
			waterPipeSound.play();
		}
		else
		{
				waterPipeSound.stop();
		}
	}
	
}			
function swipe1SoundF(acc)
{


	if(isAndroid)
	{	
	
	
			if(acc=='play')
		{
					window.plugins.NativeAudio.play('swipe1Sound');
		}
		else
		{
						window.plugins.NativeAudio.stop('swipe1Sound');
		}
	}
	else
	{
	if(acc=='play')
	{
		swipe1Sound.play();
	}
	else
	{
			swipe1Sound.stop();
	}
	}
}			
function swipe2SoundF(acc)
{

	if(isAndroid)
	{	
	if(acc=='play')
	{
		window.plugins.NativeAudio.play('swipe2Sound');
	}
	else
	{
			window.plugins.NativeAudio.stop('swipe2Sound');
	}
	}
	else
	{
		if(acc=='play')
	{
		swipe2Sound.play();
	}
	else
	{
			swipe2Sound.stop();
	}
	}
}			
function pinchSoundF(acc)
{
	
	
	if(isAndroid)
	{
		if(acc=='play')
	{
					window.plugins.NativeAudio.play('pinchSound');
	}
	else
	{
			window.plugins.NativeAudio.stop('pinchSound');
	}
	}
	else
	{
	if(acc=='play')
	{
		pinchSound.play();
	}
	else
	{
			pinchSound.stop();
	}
	}
}		
function knowJSoundF(acc,scene)
{
	
	if(isAndroid)
	{
	if(acc=='play')
	{
		
			window.plugins.NativeAudio.play('jungleSound'); 
		switch(scene)
		{
			case 0: 	window.plugins.NativeAudio.play('lionSound'); break;
			case 1:	window.plugins.NativeAudio.play('zebraSound'); break;
			case 2:	window.plugins.NativeAudio.play('monkeySound'); break;
			case 5:	window.plugins.NativeAudio.play('elephantSound'); break;
			case 7: window.plugins.NativeAudio.play('toucanSound'); break;
			case 8: window.plugins.NativeAudio.play('crocodileSound'); break;
		}
	}
	else
	{
					window.plugins.NativeAudio.stop('jungleSound'); 
		switch(scene)
		{
			case 0: 	window.plugins.NativeAudio.stop('lionSound'); break;
			case 1:	window.plugins.NativeAudio.stop('zebraSound'); break;
			case 2:	window.plugins.NativeAudio.stop('monkeySound'); break;
			case 5:	window.plugins.NativeAudio.stop('elephantSound'); break;
			case 7: window.plugins.NativeAudio.stop('toucanSound'); break;
			case 8: window.plugins.NativeAudio.stop('crocodileSound'); break;
		}

	}	
	}
	else
	{
	if(acc=='play')
	{
		
			jungleSound.play(); 
		switch(scene)
		{
			case 0: 	lionSound.play(); break;
			case 1:	zebraSound.play(); break;
			case 2:	monkeySound.play(); break;
			case 5:	elephantSound.play(); break;
			case 7: toucanSound.play(); break;
			case 8: crocodileSound.play(); break;
		}
	}
	else
	{
					jungleSound.stop(); 
		switch(scene)
		{
			case 0: 	lionSound.stop(); break;
			case 1:	zebraSound.stop(); break;
			case 2:	monkeySound.stop(); break;
			case 5:	elephantSound.stop(); break;
			case 7: toucanSound.stop(); break;
			case 8: crocodileSound.stop(); break;
		}

	}
	}
}	

