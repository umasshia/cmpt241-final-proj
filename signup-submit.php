<?php
function userExists() {
	$username = $_POST["username"];
	$password = $_POST["password"];
	$repeat_password = $_POST["repeat_password"];
	$file = file_get_contents("users.txt");
	$users = explode("\n", $file);
		for($i = 0; $i < count($users); $i++) {
			$user = explode(",", $users[$i]);
			if($username == $user[0]) {
				return true;
			}
		}
		return false;
	}
function passExists() {
	$username = $_POST["username"];
	$password = $_POST["password"];
	$repeat_password = $_POST["repeat_password"];
	$file = file_get_contents("users.txt");
	$users = explode("\n", $file);
	for($i = 0; $i < count($users); $i++) {
		$user = explode(",", $users[$i]);
		if($password == $user[1]) {
			return true;
		}
	}
		return false;
	}
function checkSignUp() {	
	$username = $_POST["username"];
	$password = $_POST["password"];
	$repeat_password = $_POST["repeat_password"];
	if($password != $repeat_password) {
		echo("The passwords do not match. Go back to the <a href = 'signup.php'>Sign Up</a> page and try again.");
	}
	else if (userExists()) {
		echo("The username is taken. Go back to the <a href = 'signup.php'>Sign Up</a> page and try again.");
	}
	else if (passExists()) {
		echo("The password is taken. Go back to the <a href = 'signup.php'>Sign Up</a> page and try again.");
	}
	else {
	echo("<h1> Registration successful! </h1> <p> You can now <a href = 'login.php'>Log In</a> to play the game. </p>");
	$score = 0;
	$usersArr = array();
	$data = $username.",".$password.",".$score.",".$score;
	foreach(file("users.txt",FILE_IGNORE_NEW_LINES) as $userInfo) {
		array_push($usersArr, $userInfo);
	}
	array_push($usersArr, $data);
	file_put_contents("users.txt","");
	for($i = 0; $i < sizeof($usersArr); $i++) {
		file_put_contents("users.txt",$usersArr[$i]."\n",FILE_APPEND);
	}
	}
}
?>


<html lang="en">
<head>
	<link href="signup.css" type="text/css" rel="stylesheet" />
	<meta charset="UTF-8">
    <title>Sign Up Complete</title>
</head>
<body>
<?php
checkSignUp();
?>
</body>

