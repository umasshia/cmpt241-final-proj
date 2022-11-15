<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="main.css" type="text/css" rel="stylesheet" />
    <title>Log In</title>
</head>
<body>
<form id = "form" action = "main.php" method = "get" >
		<div class="center5">
		<h1><div class = "solid">Log In</h1>		
		<div class="center">
		<input id = "name" required type="text" name="username" placeholder = "Username"/>			
		<div class="center1">
		<input id = "pass" required type="text" name="password" placeholder = "Password"/>				
		<div class="center6">
		<input class="login" id = "button" type="submit" value="Log In">
		<button class="login" onclick="location.href='signup.php'" type="button">Sign Up</button>		
		</div>
		</div>
		</div>
		</div>
		</div>
</form>
</body>
</html>

