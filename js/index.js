window.onload = () => {
    ReadSwitch()
}
/*
fetch('php/FetchYearDirectories.php')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (i == 0) {
            nav_tabPelaez.innerHTML += `<button class="nav-link active" id="nav_pelaez_${element}-tab" data-bs-toggle="tab" data-bs-target="#nav_pelaez_${element}" type="button" role="tab" aria-controls="nav_pelaez_${element}" aria-selected="true">${element}</button>`
            nav_tabMartin.innerHTML += `<button class="nav-link active" id="nav_martin_${element}-tab" data-bs-toggle="tab" data-bs-target="#nav_martin_${element}" type="button" role="tab" aria-controls="nav_martin_${element}" aria-selected="true">${element}</button>`

            nav_tabPelaezContent.innerHTML += `<div class="tab-pane fade show active" id="nav_pelaez_${element}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="${i}"></div>`
            nav_tabMartinContent.innerHTML += `<div class="tab-pane fade show active" id="nav_martin_${element}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="${i}"></div>`

        } else {
            nav_tabPelaez.innerHTML += `<button class="nav-link" id="nav_pelaez_${element}-tab" data-bs-toggle="tab" data-bs-target="#nav_pelaez_${element}" type="button" role="tab" aria-controls="nav_pelaez_${element}" aria-selected="false">${element}</button>`
            nav_tabMartin.innerHTML += `<button class="nav-link" id="nav_martin_${element}-tab" data-bs-toggle="tab" data-bs-target="#nav_martin_${element}" type="button" role="tab" aria-controls="nav_martin_${element}" aria-selected="false">${element}</button>`

            nav_tabPelaezContent.innerHTML += `<div class="tab-pane fade" id="nav_pelaez_${element}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="${i}"></div>`
            nav_tabMartinContent.innerHTML += `<div class="tab-pane fade" id="nav_martin_${element}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="${i}"></div>`
        }
        
        FetchMonthsByYear(element).then(data => {

            var color_g = 235
            var color_b = 165

            console.log(data)
            data.forEach(month => {
                const tab_contentPelaez = document.getElementById(`nav_pelaez_${element}`)
                const tab_contentMartin = document.getElementById(`nav_martin_${element}`)
                //tab_contentPelaez.innerHTML += `<div class="my-3"><a href="music.php?month=${month}&year=${element}&person=pelaez"><button type="button" class="monthButton btn form-control" style="background-color: rgb(245, ${color_g_pelaez}, ${color_b_pelaez});">&#x1F3B7; ${month} &#x1F3B7;</button></a></div>`
                tab_contentPelaez.innerHTML += `<div class="row my-3 text-center"><div class="col"><a href="music.php?month=${month}&year=${element}&person=pelaez" target="_blank" rel="noopener noreferrer"><button class="monthButton" style="background: rgb(245, ${color_g}, ${color_b});">&#x1F3B7; ${month} &#x1F3B7;</button></a></div></div>`
                //tab_contentMartin.innerHTML += `<div class="my-3"><a href="music.php?month=${month}&year=${element}&person=martin"><button type="button" class="monthButton btn form-control" style="background-color: rgb(235, ${color_g_pelaez}, ${color_b_pelaez});">&#x1F3B8; ${month} &#x1F3B8;</button></a></div>`
                tab_contentMartin.innerHTML += `<div class="row my-3 text-center"><div class="col"><a href="music.php?month=${month}&year=${element}&person=martin" target="_blank" rel="noopener noreferrer"><button class="monthButton" style="background: rgb(225, ${color_g}, ${color_b});">&#x1F3B8; ${month} &#x1F3B8;</button></a></div></div>`
                color_g = color_g-4
                color_b = color_b-15
            });
        })
    }
});

async function FetchMonthsByYear(year){
    const response = await fetch(`php/FetchMonthFiles.php?year=${year}`)
    return await response.json()
}
*/

flexSwitchCheck.addEventListener("change", () => {
    ReadSwitch()
})

monthButtons = document.querySelectorAll(".monthButton")
console.log(monthButtons)
monthButtons.forEach(element => {
    element.addEventListener("click", e => {
        console.log(e.target)
    })
});

function ReadSwitch() {
    if (flexSwitchCheck.checked) { // false = Pelaez;    true = Martin
        navPelaez.style.display = "none"
        nav_tabPelaezContent.style.display = "none"
        navMartin.style.display = "block"
        nav_tabMartinContent.style.display = "block"

        badgePelaez.classList.remove('text-bg-warning')
        badgePelaez.classList.add('text-bg-secondary')
        badgePelaez0.classList.remove('text-bg-warning')
        badgePelaez0.classList.add('text-bg-secondary')
        badgeMartin.classList.remove('text-bg-secondary')
        badgeMartin.classList.add('text-bg-warning')
        badgeMartin0.classList.remove('text-bg-secondary')
        badgeMartin0.classList.add('text-bg-warning')
    } else {
        navPelaez.style.display = "block"
        nav_tabPelaezContent.style.display = "block"
        navMartin.style.display = "none"
        nav_tabMartinContent.style.display = "none"
        

        badgePelaez.classList.remove('text-bg-secondary')
        badgePelaez.classList.add('text-bg-warning')
        badgePelaez0.classList.remove('text-bg-secondary')
        badgePelaez0.classList.add('text-bg-warning')
        badgeMartin.classList.add('text-bg-secondary')
        badgeMartin.classList.remove('text-bg-warning')
        badgeMartin0.classList.add('text-bg-secondary')
        badgeMartin0.classList.remove('text-bg-warning')
    }
}

badgePelaez.addEventListener("click", () => {
    flexSwitchCheck.checked = false
    ReadSwitch()
})

badgeMartin.addEventListener("click", () => {
    flexSwitchCheck.checked = true
    ReadSwitch()
})