<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
	define('UPLOAD_DIR', './images/');
	$img = $_POST['img'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	echo $success ? json_encode($file) : json_encode('Unable to save the file.');
?>