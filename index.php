<head>
	<link rel="stylesheet" href="styles/gallery.css" type="text/css" media="screen" charset="utf-8" />
	<link rel="stylesheet" href="styles/buttons.css" type="text/css" media="screen" charset="utf-8" />
	<link rel="stylesheet" href="styles/shadows.css" type="text/css" media="screen" charset="utf-8" />
	<link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css">
	<link rel="stylesheet" href="styles/main.css" type="text/css" media="screen" charset="utf-8" />
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>

	<script src="scripts/LAB.min.js" type="text/javascript"></script>
	
	<script type="text/javascript">
		$LAB
		.script("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js").wait()
		.script("http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js")
		.script("scripts/jquery.tmpl.min.js")
		.script("scripts/underscore-min.js").wait()
		.script("scripts/backbone-min.js").wait()
		.script("backbones/app.js");
	</script>

	
</head>


<?php 
	include "backbones/templates/templates.php";
?>

<div>

	<div class="topbar">
      <div class="topbar-inner">
        <div class="container">
          <h3><a href="#">Shopply</a></h3>
          <ul class="nav">
            <li class=""><a href="#">Home</a></li>
            <li><a href="#my_deals">My Deals</a></li>
            <li><a href="#browse/1">Search</a></li>
          </ul>
          <ul id="user_navigation" class="nav secondary-nav">
          </ul>
        </div>
      </div><!-- /topbar-inner -->
    </div>
    
    <div class="content_div">
    <div id="main"></div>
	</div>
    
    
</div>
