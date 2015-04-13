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
	
	document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
}
	var	sound=true;
	      var doubleTapCount=0;
			var defaultTrip=2;
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
	
$(document).on('pageshow','#byTime', function(e,data){    

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


$(document).on('pageshow','#byDistance', function(e,data){ 
//intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);
//    $('#distance-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#distance-content').outerHeight())/2);
$('#borderMap').height($('#borderMap').width());
$('#map_canvas_1').height($('#map_canvas_1').width()*(1-0.05));
				$('#msg').css('visibility','hidden');
				$('#toInput').val('Enter your destination');
defaultLatLng = new google.maps.LatLng(45.2501566,-75.8002568);
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
										
							if(mapDest.getZoom()>0)
							 {
								// zoomLevelD=zoomLevelD-0.05;
									mapDest.setZoom(mapDest.getZoom()-1);
							 }
													
						}
						else if(direction=='in')
						{
							
			
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
getCurrentPosCharacter();
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService=new google.maps.DirectionsService();

mapDest = new google.maps.Map(document.getElementById("map_canvas_1"),optionsCharacterMap);
        // Add an overlay to the map of current lat/lng
         marker = new google.maps.Marker({
            position: currentPosition,
            map: mapDest,
			
            title: "We are here!"
        });				
mapDest.setCenter(currentPosition);
directionsDisplay.setMap(mapDest);



 $('#submit').click(function() {
marker.setMap(null);
	  var request = {
      origin: currentPosition,
      destination: $('#toInput').val(),
      travelMode: google.maps.TravelMode.DRIVING
					  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
	
					      directionsDisplay.setDirections(response);
						  //    showSteps(response);
								
								destPosition=response.routes[0].legs[0].end_location;
								currentPosition=response.routes[0].legs[0].start_location;
								distanceFull=google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition);
								distanceLeft=distanceFull;
								levelPos=0;
								

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
  });
  
  var onSuccess = function(position) {
	currentPosition=google.maps.LatLng(position.coords.latitude,position.coords.longitude,false);
   distanceLeft=google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition);
   
/*    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
		  */
};

// onError Callback receives a PositionError object
//
function onError(error) {
	distanceLeft=-1;
	//				$('#mapAdd').css('color','red');
//				$('#mapAdd').html("Sorry, we can't get your current position, please make sure, do you have activate gps and internet and try again.");
//				$('#nextDist').css('display','none');

//    alert('code: '    + error.code    + '\n' +
 //         'message: ' + error.message + '\n');
}


function getPosition()
{
	if(distanceLeft>=0)
	{
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);
	levelPos=100*(1-(Math.floor(distanceLeft/distanceFull)));
	   currentPosition= new google.maps.LatLng(currentPosition.lat()-(currentPosition.lat()*0.01),currentPosition.lng());
   	distanceLeft=google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition);
   

	}
}

function getTimeCharacter()
{

	if(timeLeft>0)
	{
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);

	var timeOld=timeNow;
	timeNow=(new Date()).getTime();
	var timeLap=timeNow-timeOld;
	
	
	timeLeft=timeLeft-Math.floor(timeLap/1000);
	levelPos=100*(1-(timeLeft/timeFull));
	updateGreyCharacter(100-levelPos);
	updateTimeLeftText(timeLeft);

	getCurrentPosCharacter();
	updatePostionCharacter();
	setTimeout('getTimeCharacter()',updateFreqMilis);
	}
	else
	{
		showFinishJungle();
	}
	
	
}
function getCurrentPosCharacter()
{

//navigator.geolocation.getCurrentPosition(onSuccess, onError);
			   if(currentPosition==undefined)
			   {
				   currentPosition=defaultLatLng; 
			   }
			   else
			   {
				     currentPosition= new google.maps.LatLng(currentPosition.lat(),currentPosition.lng()-(currentPosition.lng()*0.0001));
			   }

}
function updatePostionCharacter() {
         
		
	if(marker==undefined)
	{
		marker = new google.maps.Marker({
            position: currentPosition,
            map: map,
            title: "We are Here!"
        });
	}
	else
	{
		marker.setPosition(currentPosition);
		}
		
		map.panTo(currentPosition);
    }
function updateTimeLeftText(timeL)
{

	
				var hrs=Math.floor(timeL/3600);
				var mins=Math.floor((timeL%3600)/60);
				var minD=Math.floor(mins/10);
				var minC=mins-(minD*10);
				
		
			
}
function showFinishJungle()
{
	
	  $('#finishCharacter').css('visibility','visible');
  		$('#finishLeafs').css('visibility','visible');
		$('#finishLeafs').pan({fps: 30, speed: 4, dir: 'down', depth: 70});

	  clearTrip();
}

function updateGreyCharacter(actHeightC)
{
	var val=$("#characterContainer").height()*(actHeightC/100);


	$('#greyCharacter').animate({ "height": val}, "slow");

}
function getTopFrontCharacter(timeL,heightC)
{
	
			
			var timePercent=(timeL*100)/timeFull;
			var actHeightC=Math.floor((timePercent*heightC/100));
			return actHeightC;

}

$(document).on('pageshow','#character', function(e,data){ 

//$("#characterContainer").height($("#characterContainer").width());

$("#resetTripContainer").height($("#resetTripContainer").width()/1.33);
$("#positionLeftCharacter").height($("#positionLeftCharacter").width());
	 $('#backCharacter').css('visibility','hidden');
	  $('#finishLeafs').css('visibility','hidden');
	  $('#positionLeftCharacter').css('visibility','hidden');
	 $('#resetTripContainer').css('visibility','hidden');
	 $('#menuJungle').css('visibility','hidden');
	  $('#finishCharacter').css('visibility','hidden');
	  $('#finishLeafs').destroy();
map = new google.maps.Map(document.getElementById("map_canvas_character"),optionsCharacterMap);
        // Add an overlay to the map of current lat/lng
         marker = new google.maps.Marker({
            position: defaultLatLng,
            map: map,
            title: "We are here!"
        });

     $(function() {  
      $("#borderMapCharacter").swipe( {
		  swipeStatus:function(event, phase, direction, distance , duration , fingerCount){
			  
			   if(phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) 
				   {
						if(fingerCount==1)
						  {
							  
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
										
							if(map.getZoom()>0)
							 {
								// zoomLevelD=zoomLevelD-0.05;
									map.setZoom(map.getZoom()-1);
							 }
													
						}
						else if(direction=='in')
						{
							
			
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
							doubleTapCount++;
					     	setTimeout(function () { doubleTapCount=0;},doubleTapSpeed); 
							if(doubleTapCount==2)
							{
								      $('#menuJungle').css('visibility','visible');
									  $('#backCharacter').css('visibility','visible');
							}
	}, 
		 
		threshold:50 });
  });


      $("#buttonMenuJungle1").click(function() {
				 $('#timeLeftCharacter').css('visibility','visible');
				$('#positionLeftCharacter').css('visibility','hidden');
				 $('#resetTrip').css('visibility','hidden');

			});
      $("#buttonMenuJungle2").click(function() {
		  zoomLevel=10;
		  map.setZoom(Math.floor(zoomLevel));
				 $('#positionLeftCharacter').css('visibility','visible');
 					$('#timeLeftCharacter').css('visibility','hidden');
					 $('#resetTripContainer').css('visibility','hidden');
});

      $("#buttonMenuJungle3").click(function() {
		  
		  		  		 $('#resetTripContainer').css('visibility','visible');
		  		 $('#positionLeftCharacter').css('visibility','hidden');
 					$('#timeLeftCharacter').css('visibility','hidden');
});

      $("#buttonMenuJungle4").click(function() {
					 $('#resetTripContainer').css('visibility','hidden');
					$('#positionLeftCharacter').css('visibility','hidden');
					$('#timeLeftCharacter').css('visibility','hidden');
				 $('#menuJungle').css('visibility','hidden');
				  $('#backCharacter').css('visibility','hidden');
			});

	 
//$('#fish').sprite({fps: 12, no_of_frames: 6});
	
   		  
  		
				if(setTrip==0)
				{
					if (timeFull==timeLeft)
					{
						timeNow=new Date().getTime();
						getTimeCharacter();
					}
				}
				else if(setTrip==1)
				{
					if (distanceFull==distanceLeft)
					{
						intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);		
					}
				}

  });
  
function getRandom(n,m)
{
	return Math.floor(Math.random()*(n-m+1))+m;
}

function loadCharacter()
{
	var backCharacter;
	var frontCharacter;
	var headerCharacter;
	
	var n=0;
	var m=2;
	var backGround=getRandom(0,2);

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
function clearTripYes()
{


	 	$('#backCharacter').css('visibility','hidden');
		$('#resetTripContainer').css('visibility','hidden');
		$('#menuJungle').css('visibility','hidden');
		clearTrip();
		$.mobile.changePage('#main');
}

function clearTripNo()
{

	$('#resetTripContainer').css('visibility','hidden');
		$('#menuJungle').css('visibility','hidden');
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
	
	
$(document).on('pageshow','#loading', function(e,data){ 
				 rotTimes=10;	
				 $("#wheelBorder").height($("#wheelBorder").width());
 				 $("#wheelDiv").height($("#wheelBorder").width()/10);
			  $("#wheelDiv").css('top',($("#wheelBorder").height()/2)-($("#wheelDiv").height()/2));
			  loadCharacter();
				setTimeout(function () { 

						if(setScene<=9)
						{
							$.mobile.changePage("#character");
						}
						else
						{
							$.mobile.changePage("#aquarium");
						}
						},1000); 

					
			
			});

function backFromCharacter()
{
	 $('#menuJungle').css('visibility','hidden');
									  $('#backCharacter').css('visibility','hidden');
									  $.mobile.changePage('#setCharacter');
}