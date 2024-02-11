
//searchMusic.addEventListener("click", async () => {
searchMusic.addEventListener("submit", async (e) => {

    e.preventDefault()
    
    console.log(search_artista.value)

    json_read.innerHTML = `<div class="text-center"><div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div></div>`

    let elementosEncontrados = []

    let regexp_artista = new RegExp(search_artista.value,"gi");
    let regexp_tema = new RegExp(search_tema.value,"gi");

    if (search_artista.value || search_tema.value) {

        let JsonResponse2021 = await Busqueda2021()
        let JsonResponse2022 = await Busqueda2022()
        let JsonResponse2023 = await Busqueda2023()
        let JsonResponse2024 = await Busqueda2024()

        var elementosEncontrados2021
        var elementosEncontrados2022
        var elementosEncontrados2023
        var elementosEncontrados2024

        if (search_artista.value && search_tema.value) {

            elementosEncontrados2021 = JsonResponse2021.filter(element => regexp_artista.test(element.artista) && regexp_tema.test(element.tema))
            elementosEncontrados2022 = JsonResponse2022.filter(element => regexp_artista.test(element.artista) && regexp_tema.test(element.tema))
            elementosEncontrados2023 = JsonResponse2023.filter(element => regexp_artista.test(element.artista) && regexp_tema.test(element.tema))
            elementosEncontrados2024 = JsonResponse2024.filter(element => regexp_artista.test(element.artista) && regexp_tema.test(element.tema))

        } else if (search_artista.value) {

            elementosEncontrados2021 = JsonResponse2021.filter(element => regexp_artista.test(element.artista))
            elementosEncontrados2022 = JsonResponse2022.filter(element => regexp_artista.test(element.artista))
            elementosEncontrados2023 = JsonResponse2023.filter(element => regexp_artista.test(element.artista))
            elementosEncontrados2024 = JsonResponse2024.filter(element => regexp_artista.test(element.artista))

        } else if (search_tema.value) {

            elementosEncontrados2021 = JsonResponse2021.filter(element => regexp_tema.test(element.tema))
            elementosEncontrados2022 = JsonResponse2022.filter(element => regexp_tema.test(element.tema))
            elementosEncontrados2023 = JsonResponse2023.filter(element => regexp_tema.test(element.tema))
            elementosEncontrados2024 = JsonResponse2024.filter(element => regexp_tema.test(element.tema))

        }

        elementosEncontrados2021.forEach(element => {
            elementosEncontrados.push(element)
        });
        elementosEncontrados2022.forEach(element => {
            elementosEncontrados.push(element)
        });
        elementosEncontrados2023.forEach(element => {
            elementosEncontrados.push(element)
        });
        elementosEncontrados2024.forEach(element => {
            elementosEncontrados.push(element)
        });

    } else {
        console.log("Ponga algo")
        json_read.innerHTML = `<div class="alert alert-danger mx-5 text-center" role="alert"> Ingrese Artista y Tema<br>(Puede buscar solamente Artista o solamente Tema)</div>`
    }

    console.log(elementosEncontrados)

    if (elementosEncontrados.length) {

        json_read.innerHTML = ``

        for (let i = 0; i < elementosEncontrados.length; i++) {
            const element = elementosEncontrados[i];
            const videoYTCode = elementosEncontrados[i]['video'].split("v=");

            json_read.innerHTML += 
    
            `<div class='row'>
                <div class='col mt-5'>
                    <div class='alert alert-dark' role='alert'>${element['fecha']}</div>
                </div>
            </div>
    
            <div class='row mb-5 mt-2'>
                <div class='col'>
                    Fecha: ${element['fecha']}
                    <br>
                    Sección: ${element['seccion']}
                    <br>
                    Artista: ${element['artista']}
                    <br>
                    Tema: ${element['tema']}
                    <br>
                    <a href='${element['video']}' target='_blank' rel='noopener noreferrer'>${element.artista} - ${element.tema}</a>
                    <br><br>
                    <iframe width='460' height='259' src='https://www.youtube.com/embed/${videoYTCode[1]}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
                    <br><br>
                </div>
            </div>`
        }

    } else {
        json_read.innerHTML = `<div class="alert alert-danger mx-5 text-center" role="alert">No se encontraron temas relacionados</div>`        
    }

    







})

async function Busqueda2021() {

    const response = await fetch(`data/2021/todo.json`)
    const json_response = await response.json()
    return json_response
}

async function Busqueda2022() {

    const response = await fetch(`data/2022/todo.json`)
    const json_response = await response.json()
    return json_response
}

async function Busqueda2023() {

    const response = await fetch(`data/2023/todo.json`)
    const json_response = await response.json()
    return json_response
}

async function Busqueda2024() {

    const response = await fetch(`data/2024/todo.json`)
    const json_response = await response.json()
    return json_response
}