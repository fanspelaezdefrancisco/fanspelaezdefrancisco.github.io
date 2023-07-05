<?php 
$dir = scandir("../data");
$dir = array_slice($dir, 2);
echo json_encode($dir);