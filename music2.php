<?php

if (isset($_GET['month']) && isset($_GET['year']) && isset($_GET['person'])) {

    switch ($_GET['month']) {

        case 'Enero':
            $fileName = "01. Enero.json";
        break;
        case 'Febrero':
            $fileName = "02. Febrero.json";
        break;
        case 'Marzo':
            $fileName = "03. Marzo.json";
        break;
        case 'Abril':
            $fileName = "04. Abril.json";
        break;
        case 'Mayo':
            $fileName = "05. Mayo.json";
        break;
        case 'Junio':
            $fileName = "06. Junio.json";
        break;
        case 'Julio':
            $fileName = "07. Julio.json";
        break;
        case 'Agosto':
            $fileName = "08. Agosto.json";
        break;
        case 'Septiembre':
            $fileName = "09. Septiembre.json";
        break;
        case 'Octubre':
            $fileName = "10. Octubre.json";
        break;
        case 'Noviembre':
            $fileName = "11. Noviembre.json";
        break;
        case 'Diciembre':
            $fileName = "12. Diciembre.json";
        break;
    }
/*
    $json = file_get_contents("data/{$_GET['year']}/$fileName");

    // Decode the JSON file
    $json_data = json_decode($json,true);

    if ($_GET['person'] == "martin") {
        $personRegex = "martin|martín";
    } elseif ($_GET['person'] == "pelaez") {
        $personRegex = $_GET['person'];
    }

    $arrayFilter = preg_grep("/{$personRegex}/i", array_column($json_data, "seccion"));

    $finalArray = [];

    foreach ($arrayFilter as $key => $value) {
        $finalArray[] = $json_data[$key];
    }

    echo "

    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='libs/bootstrap-5.3.0-dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM' crossorigin='anonymous'>
        <script src='libs/bootstrap-5.3.0-dist/js/bootstrap.bundle.min.js' integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz' crossorigin='anonymous'></script>
        <!-- <script src='libs/bootstrapSource_5.3.0/dist/js/bootstrap.bundle.min.js'></script> -->
        <!-- <link rel='stylesheet' type='text/css' href='css/styles.css'> -->
        <link rel='stylesheet' type='text/css' href='css/styles2.css'>
        <link rel='icon' href='img/musical-note.png'>
        <title>Pelaez Y De Francisco Fans</title>
    </head>
    <body>
        <div class='container my-5'>

            <br>
            <nav class='navbar navbar-expand-lg bg-warning' data-bs-theme='light' style='border-radius: 10px;'>
                <div class='container-fluid'>
                    <a class='navbar-brand' href='index.html'>
                        <img src='img/giphy.gif' alt='Logo' width='24' height='24' class='d-inline-block align-text-top'>
                        Fans Pelaez Y De Francisco
                    </a>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                        <ul class='navbar-nav'>
                            <li class='nav-item'>
                                <a class='nav-link active' aria-current='page' href='index.html'>Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    ";
    for ($i=0; $i < sizeof($finalArray); $i = $i+2) { 
        $videoYTCode1 = explode("v=", $finalArray[$i]['video']);
        $videoYTCode2 = explode("v=", $finalArray[$i+1]['video']);
        echo "
            <div class='row'>
                <div class='col mt-5'>
                    <div class='alert alert-dark' role='alert'>{$finalArray[$i]['fecha']}</div>
                </div>
            </div>

            <div class='row mb-5 mt-2'>
                <div class='col'>
                    Fecha: {$finalArray[$i]['fecha']}
                    <br>
                    Sección: {$finalArray[$i]['seccion']}
                    <br>
                    Artista: {$finalArray[$i]['artista']}
                    <br>
                    Tema: {$finalArray[$i]['tema']}
                    <br>
                    <a href='https://www.youtube.com/embed/{$videoYTCode1[1]}' target='_blank' rel='noopener noreferrer'>{$finalArray[$i]['artista']} - {$finalArray[$i]['tema']}</a>
                    <br><br>
                    <iframe width='460' height='259' src='https://www.youtube.com/embed/{$videoYTCode1[1]}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
                    <br><br>
                </div>
                <div class='col'>
                    Fecha: {$finalArray[$i+1]['fecha']}
                    <br>
                    Sección: {$finalArray[$i+1]['seccion']}
                    <br>
                    Artista: {$finalArray[$i+1]['artista']}
                    <br>
                    Tema: {$finalArray[$i+1]['tema']}
                    <br>
                    <a href='https://www.youtube.com/embed/{$videoYTCode1[1]}' target='_blank' rel='noopener noreferrer'>{$finalArray[$i+1]['artista']} - {$finalArray[$i+1]['tema']}</a>
                    <br><br>
                    <iframe width='460' height='259' src='https://www.youtube.com/embed/{$videoYTCode2[1]}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
                </div>
            </div>
        ";
    }
    echo "
        </div>

        <div class='container footer_container'>
            <footer>
                <div class='row'>
                    <div class='col'>

                        <div class='row mt-5 py-3 px-5'>
                            <div class='col'>
                                <strong>Acerca de la Página:</strong>
                            </div>
                        </div>
                        <div class='row px-5'>
                            <div class='col'>
                                Hecho por un simple Fan de la música y del programa
                            </div>
                        </div>
                        <div class='row px-5 mt-2'>
                            <div class='col'>
                                Seguime en Twitter:
                            </div>
                        </div>
                        <div class='row px-5'>
                            <div class='col'>
                                <a href='https://twitter.com/PelaezFranMusic' target='_blank' rel='noopener noreferrer'><img class='footer_logo' src='img/twitter_icon.png' alt='twitter_logo' height='50px' width='50px'></a>
                            </div>
                        </div>

                    </div>
                    <div class='col'>

                        <div class='row mt-5 py-3 px-5'>
                            <div class='col'>
                                <strong>¡NOTA!</strong>
                            </div>
                        </div>
                        <div class='row px-5'>
                            <div class='col'>
                                Esta página NO es oficial del programa, es hecha por un fan del mismo.
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    </body>
    <script src='libs/popperjs-core-2.11.8/package/dist/umd/popper.min.js' integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r' crossorigin='anonymous'></script>
    <script src='libs/bootstrap-5.3.0-dist/js/bootstrap.min.js' integrity='sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS' crossorigin='anonymous'></script>
    </html>
    ";
*/
} else {

    echo "¿Estas seguro que te metiste donde era?";
}
