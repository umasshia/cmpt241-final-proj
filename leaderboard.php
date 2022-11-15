<?php
	$username = $_GET["username"];
	$userScore = findScore();
	
	function findScore() {
		$username = $_GET["username"];
		$file = file_get_contents("users.txt");
		$users = explode("\n", $file);
		foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
			$user = explode(",", $userInfo);
			if($username == $user[0]) {
				$scr = $user[2] + $user[3];
				return $scr;
			}
		}
	}
	function updateLeaderboard() {
		$leaderboard = array();
		$count = 0;
		for($i = 40; $i > 0; $i--) {			
			foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {				
				$user = explode(",", $userInfo);
				$score = $user[2] + $user[3];
				if($score == $i && $count < 10) {
					$info = $user[0].",".$score;
					array_push($leaderboard, $info);
					$count++;
				}
			}
		}
		file_put_contents("leaderboard.txt","");
		for($i = 0; $i < sizeof($leaderboard); $i++) {
			file_put_contents("leaderboard.txt",$leaderboard[$i]."\n",FILE_APPEND);
		}	
	}
	function printLeaderboard() { ?>
			<table class=''>
					<thead>
						<tr>
						<th class=''>User</th>
						<th class=''>High Score</th>
						</tr>
					</thead>
					<tbody>
					<?php
		foreach(file("leaderboard.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
			$user = explode(",", $userInfo);
			?>
				<tr>
					<td class=''><?=$user[0]?></td>
					<td class=''><?=$user[1]?></td>
				</tr>
	<?php	} ?>
			</tbody>
		</table>
<?php	}
?>
<html lang="en">
	<link href="signup.css" type="text/css" rel="stylesheet" />
		<head>
			<meta charset="UTF-8">
			<title>Leaderboard</title>
		</head>
<body>
<?php
		findScore(); ?>
<p>Your Score: <?= $userScore?></p>	
<?php
		updateLeaderboard();
		printLeaderboard();
?>

</body>
</html>
