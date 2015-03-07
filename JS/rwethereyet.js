// JavaScript Document

//vertical align options
$(document).on('pageshow','#main', function(e,data){    
    $('#main-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#main-content').outerHeight())/2);
});
$(document).on('pageshow','#settings', function(e,data){    
    $('#settings-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#settings-content').outerHeight())/2);
});

$(document).on('pageshow','#tripPlanner', function(e,data){    
    $('#tripPlanner-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#tripPlanner-content').outerHeight())/2);
});

$(document).on('pageshow','#time', function(e,data){    
    $('#time-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#time-content').outerHeight())/2);
});

$(document).on('pageshow','#distance', function(e,data){    
    $('#distance-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#distance-content').outerHeight())/2);
});

$(document).on('pageshow','#loading', function(e,data){    
    $('#loading-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#loading-content').outerHeight())/2);
});



/// init google maps 
	var mobileDemo = { 'center': '57.7973333,12.0502107', 'zoom': 10 };
			

$(document).on('pageshow','#distance', function(e,data){ 
				demo.add('directions_map', function() {
					$('#map_canvas_1').gmap({'center': mobileDemo.center, 'zoom': mobileDemo.zoom, 'disableDefaultUI':true, 'callback': function() {
						var self = this;
						self.set('getCurrentPosition', function() {
							self.refresh();
							self.getCurrentPosition( function(position, status) {
								if ( status === 'OK' ) {
									var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
									self.get('map').panTo(latlng);
									self.search({ 'location': latlng }, function(results, status) {
										if ( status === 'OK' ) {
											$('#from').val(results[0].formatted_address);
										}
									});
								} else {
									alert('Unable to get current position');
								}
							});
						});
						$('#submit').click(function() {
							self.displayDirections({ 'origin': $('#from').val(), 'destination': $('#to').val(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': document.getElementById('directions')}, function(response, status) {
								( status === 'OK' ) ? $('#results').show() : $('#results').hide();
							});
							return false;
						});
					}});
				}).load('directions_map');
			});
			
$(document).on('pageshow','#distance', function(e,data){ 
				demo.add('directions_map', $('#map_canvas_1').gmap('get', 'getCurrentPosition')).load('directions_map');
			});
