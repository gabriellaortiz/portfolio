<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/style.css" rel="stylesheet">
</head>

<body>
<div id="navigation">
	<ul>
		<li<?php if ($thisPage=="Instruction Sets for Strangers") 
		echo " id=\"currentpage\""; ?>>
		<a href="#">Page One</a></li>
		<li<?php if ($thisPage=="Page Two") 
		echo " id=\"currentpage\""; ?>>
		<a href="#">Page Two</a></li>
		<li<?php if ($thisPage=="Page Three") 
		echo " id=\"currentpage\""; ?>>
		<a href="#">Page Three</a></li>
		<li<?php if ($thisPage=="Page Four") 
		echo " id=\"currentpage\""; ?>>
		<a href="#">Page Four</a></li>
	</ul>
</div>
</body>

</html>