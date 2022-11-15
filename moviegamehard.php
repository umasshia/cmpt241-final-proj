<?php
$username = $_GET["username"];
$password = findPass();
function findPass() {
	$username = $_GET["username"];
	$file = file_get_contents("users.txt");
	$users = explode("\n", $file);
	foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
		$user = explode(",", $userInfo);
		if($username == $user[0]) {
			$pass = $user[1];
			return $pass;
		}
	}
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hard Mode</title>
    <link rel="stylesheet" type="text/css" href="gamestyle.css">
</head>
<body>
    <div id="container">
        <div id="start">Start Game!</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="img"></div>
            <div id="answer">
                <input type="text" class="ans" id="entry">
              <button class="button" type = "button" id="submit" onclick="enterGuess()">Submit</button>
            </div>
            <div id="progress"></div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
		<div id="goBack">
		<?php findPass(); ?>
		<form method= "get" action="main.php">
			<input type="hidden" name="username" value="<?=$username?>">
			<input type="hidden" name="password" value="<?=$password?>">
			<input type="hidden" name="gametype" value="movie">
			<input id = "score" type="hidden" name="score" value="0">
			<input type="submit" value="Click here to go back to the main page.">
		</form>
		</div>
    </div>
    <script src="moviegamehard.js"></script>
</body>
</html>