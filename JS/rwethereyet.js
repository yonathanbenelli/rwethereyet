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
							resolution=0;
	
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
//vertical align options

$(document).on('pageinit','#main', function(e,data){    

      $('#mainHeaders').css('width',($(window).width()/9*6));
	$('#mainHeaders').css('height',($(window).height()/16*3));


$('#main').css('background-image','url(resources/backgrounds/back0_'+resolution+'.png)')
$('#menu1button1').attr('src','resources/buttons/tripplannerbutton_'+resolution+'.png');
$('#menu1button2').attr('src','resources/buttons/settingsbutton_'+resolution+'.png');
$('#menu1button3').attr('src','resources/buttons/helpbutton_'+resolution+'.png');
$('#backMain').attr('src','resources/buttons/backarrow_'+resolution+'.png');
$('#fish10').css('background-image','url(resources/characters/aquarium/animated/fish1_1.png)');
});


$(document).on('pageshow','#main', function(e,data){    
$('#fish10')
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
	  
if(distanceLeft>0 || (timeLeft>0 && timeFull-timeLeft>0))
{
	$('#backMain').css('visibility','visible');	
	 $('#menu1button1').css('visibility','hidden');
}
else
{
	 $('#menu1button1').css('visibility','visible');
		$('#backMain').css('visibility','hidden');	
}
});

$(document).on('pageshow','#settings', function(e,data){    
      $('#settingsHeader').css('width',($(window).width()/9*6));
	$('#settingsHeader').css('height',($(window).height()/16*3));
		$('#settingsHeader').css('top',($(window).height()/30));
			$('#settingsHeader').css('left',($(window).width()/6));

$('#backSettings').css('width',($(window).width()/9*2));
	$('#backSettings').css('height',($(window).height()/16*1.5));

		    $('#settings-content').css('width',($(window).width()/36*6*4));

			$('#defaulttripoptionlabel').css('height',($(window).width()/36*6*3/4));
		   
		    $('#defaulttripoption').css('width',($(window).width()/36*6*3/2*2));
			$('#defaulttripoption').css('height',($(window).width()/36*6*3/3*2));
			
			
			
			$('#defaulttripleaf1').css('width',($(window).width()/36*6*3/2*2)-($(window).width()/36*6*3/2*2/8*2));
			$('#defaulttripleaf1').css('height',($(window).width()/36*6*3/3*2/5));
			$('#defaulttripleaf1').css('left',($(window).width()/36*6*3/2*2/7));
			$('#defaulttripleaf1').css('top',($(window).width()/36*6*3/2*2/10));
			
			$('#defaulttripleaf2').css('width',($(window).width()/36*6*3/2*2)-($(window).width()/36*6*3/2*2/8*2));
			$('#defaulttripleaf2').css('height',($(window).width()/36*6*3/3*2/5));
			$('#defaulttripleaf2').css('left',($(window).width()/36*6*3/2*2/7));
			$('#defaulttripleaf2').css('top',($(window).width()/36*6*3/2*2/8));
			
			
			$('#defaulttripleaf3').css('width',($(window).width()/36*6*3/2*2)-($(window).width()/36*6*3/2*2/8*2));
			$('#defaulttripleaf3').css('height',($(window).width()/36*6*3/3*2/5));
			$('#defaulttripleaf3').css('left',($(window).width()/36*6*3/2*2/7));
			$('#defaulttripleaf3').css('top',($(window).width()/36*6*3/2*2/7));
			
				if(defaultTrip==0)
			{ 
			

				$('#defaulttripleaf1').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf2').css('background-image','none');
				$('#defaulttripleaf3').css('background-image','none');
			}
			else if(defaultTrip==1)
			{

				$('#defaulttripleaf2').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf1').css('background-image','none');
				$('#defaulttripleaf3').css('background-image','none');
			}
			else
			{

				$('#defaulttripleaf3').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf2').css('background-image','none');
				$('#defaulttripleaf1').css('background-image','none');
			}
			
	if(sound)
	{
		$('#soundOnImage').css('display','block');
	}
	else
	{
				$('#soundOffImage').css('display','none');
	}
	
	$('#labelSound').css('width',($(window).width()/3));
	$('#labelSound').css('height',($(window).height()/12));
				
	$('#soundOnImage').css('width',($(window).width()/9));
	$('#soundOnImage').css('height',($(window).height()/12));
	$('#soundOnImage').css('margin-left',($(window).width()/2.5));
					
	$('#soundOffImage').css('width',($(window).width()/9));
	$('#soundOffImage').css('height',($(window).height()/12));
	$('#soundOffImage').css('margin-left',($(window).width()/2.5));
	setTrip=defaultTrip;	
});

$(document).on('pageshow','#tripPlanner', function(e,data){    
      $('#tripPlannerHeader').css('width',($(window).width()/9*6));
	$('#tripPlannerHeader').css('height',($(window).height()/16*3));
		$('#tripPlannerHeader').css('top',($(window).height()/30));
			$('#tripPlannerHeader').css('left',($(window).width()/6));


			    $('#tripPlanner-content').css('width',($(window).width()/36*6*4));
	  $('#tripPlanner-content').css('margin-top',($(window).height()/8));
	 $('#tripbutton1').css('height',($(window).height()/16));
	 	 $('#tripbutton1').css('width',($(window).width()/3));
		 		 	    $('#tripbutton2').css('position','relative');
		 	    $('#tripbutton2').css('top',($(window).height()/32));
		 	 $('#tripbutton2').css('width',($(window).width()/2));
	    $('#tripbutton2').css('height',($(window).height()/16));
		
		
$('#backTripPlaner').css('width',($(window).width()/9*2));
	$('#backTripPlaner').css('height',($(window).height()/16*1.5));


});

$(document).on('pageshow','#time', function(e,data){    

		setTrip=0;
      $('#timeHeader').css('width',($(window).width()/9*6));
	$('#timeHeader').css('height',($(window).height()/16*3));
		$('#timeHeader').css('top',($(window).height()/30));
			$('#timeHeader').css('left',($(window).width()/6));


			    $('#time-content').css('width',($(window).width()/36*6*4));
							    $('#time-content').css('margin-top',($(window).height()/16));


			$('#hoursLabel').css('height',($(window).width()/36*6*3/4));
			$('#hoursLabel').css('width',($(window).width()/3));
			$('#minutesLabel').css('height',($(window).width()/36*6*3/4));
			$('#minutesLabel').css('width',($(window).width()/3));
						
			$('#selectTimeContainer').css('margin-top',($(window).height()/12));					
			$('#selectTimeContainer').css('height',($(window).height()/3));
			$('#selectTimeContainer').css('width',($(window).width()/1.5));
			
			$('#hourContainer').css('margin-left',($(window).width()/4/3));
			$('#hourContainer').css('width',($(window).width()/5));
			$('#hourContainer').css('height',($(window).height()/7));
			$('#hourContainer').css('margin-top',($(window).height()/12));
			$('#hourContainer').css('margin-left',($(window).width()/7));
			
			$('#minuteContainer').css('margin-top',($(window).height()/12));
			$('#minuteContainer').css('margin-left',($(window).width()/24));
			$('#minuteContainer').css('height',($(window).height()/7));
			$('#minuteContainer').css('width',($(window).width()/4));

			
			$('#hourBoldTime').css('width',($(window).width()/8));
			$('#hourBoldTime').css('height',($(window).height()*5));	
			$('#hourBoldTime').css('top',$(window).width()/22);	
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
				var to=$('#hourBoldTime').offset().top;
				var pos=to+($(window).width()/8.8*mov)-$('#hourContainer').offset().top;
				$('#hourBoldTime').css('top',pos);
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
	  
			$('#minuteThinTime1').css('top',($(window).height()/26));
			$('#minuteThinTime2').css('top',($(window).height()/26));
			$('#minuteThinTime1').css('width',($(window).width()/10));
			$('#minuteThinTime1').css('height',($(window).height()));

			$('#minuteThinTime2').css('width',($(window).width()/10));
			$('#minuteThinTime2').css('height',($(window).height()));
			

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
				var to=$('#minuteThinTime1').offset().top;
				var pos=to+($(window).width()/11*mov)-$('#minuteContainer').offset().top;
				$('#minuteThinTime1').css('top',pos);
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
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
				var to=$('#minuteThinTime2').offset().top;
				var pos=to+($(window).width()/11*mov)-$('#minuteContainer').offset().top;
				$('#minuteThinTime2').css('top',pos);
				timeFull=(hourpos*3600)+(minute1pos*60*10)+(minute2pos*60);
				timeLeft=timeFull;
			}
			
        },        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });  });
	  
	  
		
$('#backTime').css('width',($(window).width()/9*2));
	$('#backTime').css('height',($(window).height()/16*1.5));

$('#nextTime').css('width',($(window).width()/9*2));
	$('#nextTime').css('height',($(window).height()/16*1.5));


});


$(document).on('pageshow','#loading', function(e,data){    
			$('#loading-content').css('height',($(window).height()/1.4));
			$('#loading-content').css('width',($(window).width()/1.3));
			$('#loading-content').css('margin-top',($(window).height()/6));				

			$('#wheelDiv').css('margin-top',($(window).height()/5));					
			$('#wheelDiv').css('text-align','center');					
			
			//$('#wheelDiv').css('height',($(window).height()/2));
			//$('#wheelDiv').css('width',($(window).width()/2));
				 rotTimes=10;	

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



function inspeccionar(obj)

{

  var msg = '';

 

  for (var property in obj)

  {

    if (typeof obj[property] == 'function')

    {

      var inicio = obj[property].toString().indexOf('function');

      var fin = obj[property].toString().indexOf(')')+1;

      var propertyValue=obj[property].toString().substring(inicio,fin);

      msg +=(typeof obj[property])+' '+property+' : '+propertyValue+' ;\n';

    }

    else if (typeof obj[property] == 'unknown')

    {

      msg += 'unknown '+property+' : unknown ;\n';

    }

    else

    {

      msg +=(typeof obj[property])+' '+property+' : '+obj[property]+' ;\n';

    }

  }

  return msg;

}



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
	levelPos=100*(1-(Math.floor(timeLeft/timeFull)));
	var timeOld=timeNow;
	timeNow=(new Date()).getTime();
	var timeLap=timeNow-timeOld;

	timeLeft=timeLeft-Math.floor(timeLap/1000);
	
	updateFrontCharacter(getTopFrontCharacter(timeLeft,characterContentHeight));
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
				
		 $("#hoursTimeLeftNumD").css('background-position-y',($("#hoursTimeLeftNumD").width()*(hrs*(0.07-1))));
		 $("#minutesTimeLeftNumD").css('background-position-y',($("#minutesTimeLeftNumD").width()*(minD*(0.07-1))));
		 $("#minutesTimeLeftNumC").css('background-position-y',($("#minutesTimeLeftNumC").width()*(minC*(0.07-1))));
				
			
}
function showFinishJungle()
{
	
	  $('#finishCharacter').css('visibility','visible');
  		$('#finishLeafs').css('visibility','visible');
		$('#finishLeafs').pan({fps: 30, speed: 4, dir: 'down', depth: 70});

	  clearTrip();
}

function updateFrontCharacter(actHeightC)
{
	$('#frontCharacter').css('height',actHeightC);
}
function getTopFrontCharacter(timeL,heightC)
{
	
			
			var timePercent=(timeL*100)/timeFull;
			var actHeightC=Math.floor((timePercent*heightC/100));
			return actHeightC;

}

$(document).on('pageshow','#setCharacter', function(e,data){ 


	$('#setCharacter-content').css('width',($(window).width()/1.5));
		$('#setCharacter-content').css('margin-top',$(window).height()/9);
	$('#setCharacter-content').css('height',$(window).height()/1.6);

	
	 	
$('#backSetCharacter').css('width',($(window).width()/9*2));
	$('#backSetCharacter').css('height',($(window).height()/16*1.5));

});

function getRandom(n,m)
{
	return Math.floor(Math.random()*(n-m+1))+m;
}

$(document).on('pageshow','#character', function(e,data){ 
	
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
			 /* if(fingerCount==1)
			  {
				  
			   if(direction=='up')
			   {		
							   mapDest.panBy(0, (resolution+1)*speedSwipeMap);			   
			   }
			   else if(direction=='down')
			   {
							   mapDest.panBy(0, -((resolution+1)*speedSwipeMap));			   
			   }
			   else if(direction=='left')
			   {
							   mapDest.panBy((resolution+1)*speedSwipeMap,0);			   
			   }
			   else if(direction=='right')
			   {
							   mapDest.panBy(-((resolution+1)*speedSwipeMap),0);			   
			   }
			  }*/

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
        /*
		if(fingerCount==2)
			  {
				

					
		if(direction=='out')
			{
							
				if(mapDest.getZoom()>0)
		 		 {
					 zoomLevelD=zoomLevelD-0.05;
			  			mapDest.setZoom(Math.floor(zoomLevelD));
		 		 }
				 						
			}
			else if(direction=='in')
			{
				

					   if(mapDest.getZoom()<19)
					  {
						  zoomLevelD=zoomLevelD+0.05;
				  			mapDest.setZoom(Math.floor(zoomLevelD));
					  }

			}

			  }*/
        },
        fingers:$.fn.swipe.fingers.ALL,  
        pinchThreshold:0  
    });	    });	
 $("#hoursTimeLeftNumD").css('background-size',$("#hoursTimeLeftNumD").width());
 $("#minutesTimeLeftNumD").css('background-size',$("#minutesTimeLeftNumD").width());
  $("#minutesTimeLeftNumC").css('background-size',$("#minutesTimeLeftNumC").width());
  			
			
			
  $(function() {  
      var doubleTapCount=0;
      //Enable swiping...
      $("#menuLeaf").swipe( {
				  tap:function(event, target) {

					doubleTapCount++;
				 setTimeout(function () { doubleTapCount=0;	},doubleTapSpeed); 

					if(doubleTapCount==2)
					{
								      $('#menuJungle').css('visibility','visible');
									  $('#backCharacterArrow').css('visibility','visible');
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
					 $('#resetTrip').css('visibility','hidden');
});

      $("#buttonMenuJungle3").click(function() {
		  
		  		  		 $('#resetTrip').css('visibility','visible');
		  		 $('#positionLeftCharacter').css('visibility','hidden');
 					$('#timeLeftCharacter').css('visibility','hidden');
});

      $("#buttonMenuJungle4").click(function() {
					 $('#resetTrip').css('visibility','hidden');
					$('#positionLeftCharacter').css('visibility','hidden');
					$('#timeLeftCharacter').css('visibility','hidden');
				 $('#menuJungle').css('visibility','hidden');
				  $('#backCharacterArrow').css('visibility','hidden');
			});

	  $('#backCharacterArrow').css('visibility','hidden');
	  $('#finishLeafs').css('visibility','hidden');
	  $('#positionLeftCharacter').css('visibility','hidden');
	 $('#resetTrip').css('visibility','hidden');
	 $('#menuJungle').css('visibility','hidden');
	  $('#finishCharacter').css('visibility','hidden');
	  $('#finishLeafs').destroy();
//$('#fish').sprite({fps: 12, no_of_frames: 6});
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
	
		  $('#characterHeader').css('background-image','url('+headerCharacter+')');
	  $('#characterHeader').css('width',($(window).width()/9*6));
	$('#characterHeader').css('height',($(window).height()/16*3));
		$('#characterHeader').css('top',($(window).height()/30));
			$('#characterHeader').css('left',($(window).width()/6));

		
			$('#character-content').css('width',($(window).width()/1.2));
		   	$('#character-content').css('margin-left',($(window).width()/12));

			$('#backCharacterImg').attr("src",backCharacter);			
			$('#frontCharacterImg').attr("src",frontCharacter);	
		 	$('#frontCharacter').css('width',($(window).width()/1.2));		
	 		$('#backCharacter').css('width',($(window).width()/1.2));		
			
			$('#backCharacterImg').load(function() {
				var $img = $(this);
				characterContentHeight=$img.height();
				$img.parent().parent().height(characterContentHeight);
				

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

			
		
			
					

	
$('#backCharacterArrow').css('width',($(window).width()/9*2));
	$('#backCharacterArrow').css('height',($(window).height()/16*1.5));



});
			


$(document).on('pageshow','#aquarium', function(e,data){ 
$('#fish')
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
$('#waterLevel').sprite({fps: 4, no_of_frames:6}).activeOnClick().active();
	if(setTrip==0)
	{
		timeNow=(new Date()).getTime();
		getTime();
	}
	else if(setTrip==1)
	{
		intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);		
	}
	
});
			


$(document).on('pageshow','#distance', function(e,data){ 
//intervalDist=setInterval(function () {getPosition()}, updateFreqMilis);
//    $('#distance-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#distance-content').outerHeight())/2);
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
			 /* if(fingerCount==1)
			  {
				  
			   if(direction=='up')
			   {		
							   mapDest.panBy(0, (resolution+1)*speedSwipeMap);			   
			   }
			   else if(direction=='down')
			   {
							   mapDest.panBy(0, -((resolution+1)*speedSwipeMap));			   
			   }
			   else if(direction=='left')
			   {
							   mapDest.panBy((resolution+1)*speedSwipeMap,0);			   
			   }
			   else if(direction=='right')
			   {
							   mapDest.panBy(-((resolution+1)*speedSwipeMap),0);			   
			   }
			  }*/

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
        /*
		if(fingerCount==2)
			  {
				

					
		if(direction=='out')
			{
							
				if(mapDest.getZoom()>0)
		 		 {
					 zoomLevelD=zoomLevelD-0.05;
			  			mapDest.setZoom(Math.floor(zoomLevelD));
		 		 }
				 						
			}
			else if(direction=='in')
			{
				

					   if(mapDest.getZoom()<19)
					  {
						  zoomLevelD=zoomLevelD+0.05;
				  			mapDest.setZoom(Math.floor(zoomLevelD));
					  }

			}

			  }*/
        },
        fingers:$.fn.swipe.fingers.ALL,  
        pinchThreshold:0  
    });	    });	

 $('#distHeader').css('width',($(window).width()/9*6));
	$('#distHeader').css('height',($(window).height()/16*3));
		$('#distHeader').css('top',($(window).height()/30));
			$('#distHeader').css('left',($(window).width()/6));

   			   // $('#dist-content').css('width',($(window).width()/1.2));
   			    $('#dist-content').css('height',($(window).height()/1.2));
			$('#dist-content').css('margin-top',-($(window).height()/7));												
			$('#borderMap').css('top',-($(window).height()/2.3));
			$('#borderMap').css('margin-left',-($(window).width()/20));
			$('#borderMap').css('height',($(window).height()/1.5));
			$('#borderMap').css('width',($(window).width()));
			
			
			$('#map_canvas_1').css('top',($(window).height()/8));
			$('#map_canvas_1').css('left',($(window).width()/12));							
			$('#map_canvas_1').css('height',($(window).height()/2.2));
			$('#map_canvas_1').css('width',($(window).width()/1.3));
				
			$('#mapAdd').css('height',($(window).height()/10));
			$('#mapAdd').css('width',($(window).width()/1.2));
			$('#mapAdd').css('margin-top',-($(window).height()/2));	
			//$('#fromInput').css('width',($(window).width()/1.4));
			$('#toInput').css('width',($(window).width()/1.6));
		
	
	$('#backDist').css('width',($(window).width()/9*2));
	$('#backDist').css('height',($(window).height()/16*1.5));

$('#nextDist').css('width',($(window).width()/9*2));
	$('#nextDist').css('height',($(window).height()/16*1.5));



			
				$('#nextDist').css('display','none');

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
      destination: $('#to').val(),
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
												$('#nextDist').css('display','block');
													$('#msg').html("");
													
								}
								else
								{
									$('#msg').css('color','red');
									$('#msg').html("Destination not found, please be more specific");
								}
  });

  });
/*				
				demo.add('directions_map', function() {
					$('#map_canvas_1').gmap({'center': mobileDemo.center, 'zoom': mobileDemo.zoom, 'disableDefaultUI':true, 'callback': function() {
						var self = this;
						self.set('getCurrentPosition', function() {
							mapDest=self.get('map');
							self.refresh();
							self.getCurrentPosition( function(position, status) {
								if ( status === 'OK' ) {
									var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
									self.get('map').panTo(latlng);
									self.search({ 'location': latlng }, function(results, status) {
										if ( status === 'OK' ) {
											from=results[0].formatted_address;
										}
									});
								} else {
					$('#msg').css('color','red');
					$('#msg').html("Sorry, we can't get your current position, please make sure, do you have activate gps and internet and try again.");
//				$('#nextDist').css('display','none');
			//						alert('Unable to get current position');
								}
							});
						});
						var directions;
						$('#submit').click(function() {
							self.displayDirections({ 'origin': from, 'destination': $('#to').val(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': directions}, function(response, status) {
								
								if(status === 'OK')
								{
								
								destPosition=response.routes[0].legs[0].end_location;
								currentPosition=response.routes[0].legs[0].start_location;
								distanceFull=google.maps.geometry.spherical.computeDistanceBetween(currentPosition,destPosition);
								distanceLeft=distanceFull;
								levelPos=0;
								

								//console.log(inspeccionar(response.routes[0].legs[0]));
								//console.log(response.routes[0].legs[0].duration.text);
												$('#nextDist').css('display','block');
													$('#msg').html("");
													
								}
								else
								{
									$('#msg').css('color','red');
									$('#msg').html("Destination not found, please be more specific");
								}
							});
											$('#nextDist').css('display','none');
							return false;
						});
					}});
				}).load('directions_map');


				demo.add('directions_map', $('#map_canvas_1').gmap('get', 'getCurrentPosition')).load('directions_map');
*/
			});


// frametransitions
function transition(screenwidth, relation, nframes, widthframe, speed)
{
}
function onSound()
{
	sound=true;
	
		$('#soundOnImage').css('display','block');
		$('#soundOffImage').css('display','none');
	
}
function offSound()
{
	
	sound=false;

		$('#soundOnImage').css('display','none');
				$('#soundOffImage').css('display','block');
	
}

function defaultTripTime()
{
	
	 defaultTrip=0;
				$('#defaulttripleaf1').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf2').css('background-image','none');
				$('#defaulttripleaf3').css('background-image','none');
	
}

function defaultTripDist()
{
	
	defaultTrip=1;
				$('#defaulttripleaf2').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf1').css('background-image','none');
				$('#defaulttripleaf3').css('background-image','none');

	
}

function defaultTripNone()
{
	
	defaultTrip=1;
		
				$('#defaulttripleaf3').css('background-image','url(resources/buttons/leafbutton1.png)');
				$('#defaulttripleaf1').css('background-image','none');
				$('#defaulttripleaf2').css('background-image','none');
	
}