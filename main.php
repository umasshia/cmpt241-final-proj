<?php
	function validateUser() {
		$username = $_GET["username"];
		$password = $_GET["password"];
		$file = file_get_contents("users.txt");
		$users = explode("\n", $file);
		for($i = 0; $i < count($users); $i++) {
			$user = explode(",", $users[$i]);
			if($username == $user[0] && $password == $user[1]) {
				echo("<div class='center'>
						<div style='font-size:1.5em'>
							<a href='ChooseGame.php?username=$username' class='button' style='background-color:#FFFF00;'>Play Game</a>
							<a href='leaderboard.php?username=$username' class='button' style='background-color:#FFFF00;'>Leaderboard</a>
							<a href='AboutUs.html' class='button' style='background-color:#FFFF00;'>About us</a>
						</div>
					</div>");
				return;
			}
		}
		echo("<div class = 'error'> The username or the password is incorrect. Go back to the <a href = 'login.php'>Log In</a> page and try again. </div>");
	}
	
function updateMovieScore() {
	$score = $_GET["score"];
	$username = $_GET["username"];
	$usersArr = array();
	foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
		$user = explode(",", $userInfo);
		if($username == $user[0] && $score > $user[2]) {
			$user[2] = $score;			
		}	
		$userInfo = $user[0].",".$user[1].",".$user[2].",".$user[3];
		array_push($usersArr, $userInfo);
		file_put_contents("users.txt","");
	}
	for($i = 0; $i < sizeof($usersArr); $i++) {
		file_put_contents("users.txt",$usersArr[$i]."\n",FILE_APPEND);
	}
}

function updateShowScore() {
	$score = $_GET["score"];
	$username = $_GET["username"];
	$usersArr = array();
	foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
		$user = explode(",", $userInfo);
		if($username == $user[0] && $score > $user[3]) {
			$user[3] = $score;			
		}	
		$userInfo = $user[0].",".$user[1].",".$user[2].",".$user[3];
		array_push($usersArr, $userInfo);
		file_put_contents("users.txt","");
	}
	for($i = 0; $i < sizeof($usersArr); $i++) {
		file_put_contents("users.txt",$usersArr[$i]."\n",FILE_APPEND);
	}
}

	function updateScore() {
		$score = $_GET["score"];
		if($score >= 0 || $score <= 20) {
			if($_GET["gametype"] == "movie")
				updateMovieScore();
			if($_GET["gametype"] == "show")
				updateShowScore();
		}
	}
?>
<html lang="en">
	<link href="main.css" type="text/css" rel="stylesheet" />
		<head>
			<meta charset="UTF-8">
			<title>Main Menu</title>
		</head>
<body>
<div id = "scoreMessage">
	<?php
	validateUser();
	updateScore();
	?>
</div>
</body>
</html>


