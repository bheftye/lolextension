<?php
	define('UPLOAD_DIR', './images/');
	$img = $_POST['img'];
	echo json_encode($img);
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	echo json_encode($data);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	echo $success ? json_encode($file) : json_encode('Unable to save the file.');
?>