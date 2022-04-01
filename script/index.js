
const findMyCity = () =>{

    var dato = document.getElementById("dato");

    date = new Date();

    var month = date.getMonth()

    var day = date.getDate()

    var year = date.getFullYear()

    var month = date.toLocaleString('no', { month: 'short' });

    var dato = document.getElementById('dato');
    var status = document.getElementById('status');

    let nameOfDay = date.toLocaleString('no', { weekday: 'long' });



    dato.innerHTML += "Dato:  " + nameOfDay + " " + day + "." + month + " " + " " + year;



  



    const success = (position) => {
        console.log(position)
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

        fetch(api)
        .then(res => res.json())
        .then(data =>{
            status.textContent = "Sted: " + data.principalSubdivision + ", " + data.locality;
            
        })
    }

    const error = () => {
        status.textContent = 'Klarer ikke å finne posisjonen din!'

    }

    navigator.geolocation.getCurrentPosition(success, error);

}


function settings(){
    var colorSettings = document.querySelector('.color-settings');

    colorSettings.style = "display:block";

}