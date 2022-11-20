let iss_spot = 'https://api.wheretheiss.at/v1/satellites/25544';

    // peticion con fetch api (https://wheretheiss.at/w/developer)

    setInterval(() => {
        fetch(iss_spot)
            .then(response => response.json())
            .then(data => {

                //peticion fetch api (https://nominatim.org/release-docs/3.5.1/api/Reverse/#parameters)

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${data.latitude}&lon=${data.longitude}`)
                    .then(response => response.json())
                    .then(ubication => {
                        let star = document.querySelector('#wrapper');
                        let div = document.createElement('div');
                        div.classList.add('col-12')
                        div.innerHTML = `
                            <h3 class="bg-dark text-white text-center rounded-4 p-5 d-block display-1" style="width: 600px; height: 200px;">${(ubication.error == "Unable to geocode") ? 'Sobre el mar' : ubication.address.country}</h3>
                            `
                        star.appendChild(div)
                    })
            })
    }, 1000);