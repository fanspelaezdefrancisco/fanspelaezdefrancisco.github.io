<?php

header('Content-Type: application/json; charset=utf-8');

$json = file_get_contents("data/2022/12. Diciembre.json");

$json_data = json_decode($json,true);

foreach ($json_data as $key => $value) {
    
    if (preg_match("/youtube/", $value['video']) || $json_data[$key]['video'] == "") {
        
    } else {
        $unshorted_url = shell_exec("curl -v --silent ".$value['video']." 2>&1 | grep location");
        $unshorted_url_array = explode(" ", $unshorted_url);
        $json_data[$key]['video'] = $unshorted_url_array[2];
        //$json_data[$key]['video'] = "hola";
    }
}

echo json_encode($json_data);

/*
echo "<pre>";
print_r($json_data);
echo "</pre>";
*/
