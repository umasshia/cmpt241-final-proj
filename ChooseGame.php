<?php
	$username = $_GET['username'];
?>
<html lang="en">
	<link href="main.css" type="text/css" rel="stylesheet" />
		<head>
			<meta charset="UTF-8">
			<title>Games</title>
		</head>
<body>
			<div class="center">
				<div style="font-size:1.5em">
					<a href="MovieDifficulty.php?username=<?php echo $username ?>" class="button" style="background-color:#FFFF00;">Movies</a>
					<a href="TvDifficulty.php?username=<?php echo $username ?>" class="button" style="background-color:#FFFF00;">TV Shows</a>
		</div>
		</div>
</body>
</html>

