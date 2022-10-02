<script type='text/javascript'>
  
// Some default pre init
var Countly = Countly || {};
Countly.q = Countly.q || [];

// Provide your app key that you retrieved from Countly dashboard
Countly.app_key = "e8819e7355ca24358fff05e4f59f8ac6b6432471";

// Provide your server IP or name. Use try.count.ly or us-try.count.ly 
// or asia-try.count.ly for EE trial server.
// If you use your own server, make sure you have https enabled if you use
// https below.
Countly.url = "https://track.aelx.de"; 

// Start pushing function calls to queue
// Track sessions automatically (recommended)
Countly.q.push(['track_sessions']);
  
//track web page views automatically (recommended)
Countly.q.push(['track_pageview']);
	
Countly.q.push(['enable_feedback',{'widgets':['62a860a6ef54468014fb1185']}]);
  

  
// Load Countly script asynchronously
(function() {
  var cly = document.createElement('script'); cly.type = 'text/javascript'; 
  cly.async = true;
  // Enter url of script here (see below for other option)
  cly.src = 'https://track.aelx.de/sdk/web/countly.min.js';
  cly.onload = function(){Countly.init()};
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
})();
</script>