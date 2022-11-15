<?php
	$username = $_GET['username'];
?>
	<html lang="en">
	<link href="main.css" type="text/css" rel="stylesheet" />
		<head>
			<meta charset="UTF-8">
			<title>Tv Difficulty</title>
		</head>
<body>
			<div class="center">
				<div style="font-size:1.5em">
					<a href="tvgamenormal.php?username=<?php echo $username ?>" class="button" style="background-color:#FFFF00;">Normal</a>
					<a href="tvgamehard.php?username=<?php echo $username ?>" class="button" style="background-color:#FFFF00;">Hard</a>
		</div>
		</div>
</body>
</html>