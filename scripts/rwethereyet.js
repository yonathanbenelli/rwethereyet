/*	(function($) {
			$(document).ready(function() {
			
				$('#bird')
					.sprite({fps: 9, no_of_frames: 3})
					.spRandom({top: 50, bottom: 200, left: 300, right: 320})
					.isDraggable()
					.activeOnClick()
					.active();
				
				
			});
		})(jQuery);
	*/
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
/*			var defaultLatLng = new google.maps.LatLng(45.2501566,-75.8002568);
			 var optionsCharacterMap = {
            	zoom: zoomLevel,
            center: defaultLatLng,
			disableDefaultUI:true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		*/
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
		resolution=0;
	
function goToTripPlanner()
{
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
	if(defaultTrip==0)
	{	
		return '#main';

	}
	else if(defaultTrip==1)
	{
				return '#main';
	}
	else
	{
				return '#tripPlanner';
	}
}

function soundSetting()
{
	
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

	 defaultTrip=0;
	 $('#defaultTripOption').css('background','transparent url(resources/buttons/defulttrip0.png) 0 0 no-repeat');
}

function defaultTripDist()
{
	
	defaultTrip=1;
	 $('#defaultTripOption').css('background','transparent url(resources/buttons/defulttrip1.png) 0 0 no-repeat');
	
}

function defaultTripNone()
{
	
	defaultTrip=2;
			 $('#defaultTripOption').css('background','transparent url(resources/buttons/defulttrip2.png) 0 0 no-repeat');
}