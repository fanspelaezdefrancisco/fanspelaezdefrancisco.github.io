window.onload = () => {
    loadJson()
}

function loadJson() {

    fetch('data/2022/07. Julio.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    //json_read.innerHTML = 
}