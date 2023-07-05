<?php 
 
$files = scandir("../data/{$_GET['year']}");
$arrayFiles = array_slice($files, 2);

$RegexPatterns = ['/^\d+\.+\s+/','/\.+json$/'];
$substitutions = ['',''];

/* $output = preg_replace($RegexPatterns,$substitutions,$arrayFiles[0]);
$months = [];

foreach ($arrayFiles as $value) {
    $months[] = $value;
}
echo json_encode($months); */


$months = [];

foreach ($arrayFiles as $value) {
    $output = preg_replace($RegexPatterns,$substitutions,$value);
    $months[] = $output;
}

echo json_encode($months);