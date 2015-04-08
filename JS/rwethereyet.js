/*
// JavaScript Document
			var	sound=true;
			var defaultTrip=0;
			var hourpos=0;
			var minute1pos=0;
			var speedSwipeMap=0.5;
			var minute2pos=0;
			var zoomLevel=10;
		var zoomLevelD=10;
			var updateFreqMilis=3000;
/// init google maps 
			var defaultLatLng = new google.maps.LatLng(45.2501566,-75.8002568);
			 var optionsCharacterMap = {
            	zoom: zoomLevel,
            center: defaultLatLng,
			disableDefaultUI:true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map;
        var mapDest;
		
        // Add an overlay to the map of current lat/lng
        var marker;

		var from;
		var distanceLeft=-1;
		var distanceFull=-1;
		var currentPosition;
		var setTrip=defaultTrip;
		var destPosition;
		var intervalDist;
		var intervalTime;
		var levelPos=-1;
		var timeLeft=-1;
		var timeFull=-1;
		var doubleTapSpeed=500;
		var timeNow=0;
		var intervalRot;
		var setScene=0;
		var resolution;
		var frontCharacterTop=0;
		var characterContentHeight=0;
		if ($(window).width()>960)
		{
			resolution=3;
		}
		else if($(window).width()>690)
		{
				resolution=2;
		}
		else if($(window).width()>460)
		{
					resolution=1;
		}		
		else 
		{
					resolution=0;
		}
	
	function clearTrip()
	{
			 hourpos=0;
			 minute1pos=0;
			 minute2pos=0;
			
			distanceLeft=-1;
			distanceFull=-1;
			levelPos=-1;
			timeLeft=-1;
			timeFull=-1;
			timeNow=0;
			intervalRot;
			setScene=0;
			resolution;
			frontCharacterTop=0;
			characterContentHeight=0;

		
	}
	

function onAquariumShow()
{
	$('#fish1')
			.sprite({fps: 4, no_of_frames:6}).activeOnClick().active()
			.flyToTap()
			.spRandom({
          top: 70,
          left: 100,
          right: 200,
          bottom: 340,
          speed: 4000,
          pause: 3000
      });
	  console.log('hehe');
}

function onShowPages(divShow)	
{
	switch (divShow)
	{
		case '#aquarium':
				onAquariumShow();
		break;
	}
}
function showPage(divToSee)
{
$("body").find("div.page").css('visibility','hidden');
onShowPages(divToSee);
$(divToSee).css('visibility','visible');

}

function setPagesDimensions(width,height)
{
	$("body").find("div.page").css('width',width);
	$("body").find("div.page").css('height',height);

}
*/
