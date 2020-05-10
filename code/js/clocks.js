$(function() {
 
      
      var now = new Date();
      var secondsPassed = 0;
      function updateClock(clockData, clockElementId)
      {
	      
	      console.log(clockData);
	      setInterval( function() {
		      clockData.seconds = clockData.seconds+1;
			  var date = new Date(((clockData.timestamp + clockData.seconds) * 1000) );
			  console.log(date.toString());
			  var seconds = date.getSeconds();
			  var sdegree = seconds * 6;
			  var srotate = "rotate(" + sdegree + "deg)";
			
			  $(clockElementId + " .hand_sec").css({ "transform": srotate });
  			  $(clockElementId + " .sec strong").text(seconds);
  			  
	          
	      }, 1000 );
	      
	      setInterval( function() {
		  		var date = new Date(((clockData.timestamp + clockData.seconds) * 1000) );
		      	var hours = date.getHours();
			  	var mins = date.getMinutes();
			  	var hdegree = hours * 30 + (mins / 2);
			  	var hrotate = "rotate(" + hdegree + "deg)";
			  	$(clockElementId + " .hrs strong").text(hours);
			  	$(clockElementId + " .min strong").text(mins);


		      $(clockElementId + " .hand_hour").css({ "transform": hrotate});
	          
	      }, 1000 );
	
	      setInterval( function() {
		  		var date = new Date(((clockData.timestamp + clockData.seconds) * 1000) );
		      	var mins = date.getMinutes();
			  	var mdegree = mins * 6;
			  	var mrotate = "rotate(" + mdegree + "deg)";
		      
		        $(clockElementId + " .hand_min").css({ "transform" : mrotate });

	          
	      }, 1000 );
	      
      }
      
      updateClock(clocks[0], '#clock-1');
      updateClock(clocks[1], '#clock-2');

 
});