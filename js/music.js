window.onload = () => {
    loadJson()
}

function loadJson() {

    var direccion = document.URL
    var url = new URL(direccion)
    var month = url.searchParams.get("month")
    var year = url.searchParams.get("year")
    var person = url.searchParams.get("person")

    if (person == "pelaez") {
        var regex = /pelaez/i
    } else if (person == "martin") {
        var regex = /martin|martín/i
    }

    fetch(`data/${year}/${month}.json`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        let jsonFinal = json.filter(element => regex.test(element.seccion))
        console.log(jsonFinal)

        for (let i = 0; i < jsonFinal.length; i++) {
            const element1 = jsonFinal[i];
            const videoYTCode1 = jsonFinal[i]['video'].split("v=");
            
            json_read.innerHTML += 

            `<div class='row'>
                <div class='col mt-5'>
                    <div class='alert alert-dark' role='alert'>${element1['fecha']}</div>
                </div>
            </div>

            <div class='row mb-5 mt-2'>
                <div class='col'>
                    Fecha: ${element1['fecha']}
                    <br>
                    Sección: ${element1['seccion']}
                    <br>
                    Artista: ${element1['artista']}
                    <br>
                    Tema: ${element1['tema']}
                    <br>
                    <a href='${element1['video']}' target='_blank' rel='noopener noreferrer'>${element1.artista} - ${element1.tema}</a>
                    <br><br>
                    <iframe width='460' height='259' src='https://www.youtube.com/embed/${videoYTCode1[1]}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
                    <br><br>
                </div>
            </div>`
        }
    });
}