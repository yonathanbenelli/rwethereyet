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
			var defaultTrip=2;
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
	
$(document).on('pageshow','#byTime', function(e,data){    

		setTrip=0;
	$(function() { $('#containerHour').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

			var mov=0;
			if(direction=="up")
			{
				
				if(hourpos<9)
				{
					hourpos=hourpos+1;
					mov=+1;
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
					mov=-1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
				var to=	$('#hourBoldTime').css('background-position-y');
				var pos=parseFloat(to.replace('%',''))+((10+(2.4))*mov);
				$('#hourBoldTime').css('background-position-y',pos+'%');
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
	  

			$(function() { $('#containerMinute1').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var mov=0;
			if(direction=="up")
			{
				if(minute1pos<5)
				{
					minute1pos=minute1pos+1;
					mov=+1;
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
					mov=-1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
				var to=	$('#minuteThinTime1').css('background-position-y');
				var pos=parseFloat(to.replace('%',''))+((20+(4))*mov);
				console.log(pos);
				$('#minuteThinTime1').css('background-position-y',pos+'%');
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
			$(function() { $('#containerMinute2').swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var mov=0;
			if(direction=="up")
			{
				if(minute2pos<9)
				{
					minute2pos=minute2pos+1;
					mov=+1;
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
					mov=-1;
				}
				else
				{
					mov=0;
				}
			}
			if(mov!=0)
			{
				var to=	$('#minuteThinTime2').css('background-position-y');
				var pos=parseFloat(to.replace('%',''))+((10+(2.3))*mov);
				$('#minuteThinTime2').css('background-position-y',pos+'%');
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
	  
		

});


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