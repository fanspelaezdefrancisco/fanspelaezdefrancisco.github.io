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

        for (let i = 0; i < jsonFinal.length; i = i+2) {
            const element1 = jsonFinal[i];
            const element2 = jsonFinal[i+1];

        //json.forEach(element => {

            //if (regex.test(element['seccion'])) {
            
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
                        
                        <br><br>
                        
                        <br><br>
                    </div>
                    <div class='col'>
                        Fecha: ${element2['fecha']}
                        <br>
                        Sección: ${element2['seccion']}
                        <br>
                        Artista: ${element2['artista']}
                        <br>
                        Tema: ${element2['tema']}
                        <br>
                        
                        <br><br>
                        
                    </div>
                </div>`
            //}
        //});
        }
    });
}