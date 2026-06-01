const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxCOxyEgdDsMh4ul_6yuGIGi-IirM43KF3DC857CSf8_FFg1Qqb0nRyqMqNhI7B0UFdqw/exec";

document.getElementById("cuestionario")
.addEventListener("submit", function(e){

    e.preventDefault();

    const sexoSeleccionado =
    document.querySelector('input[name="sexo"]:checked');

    const datos = {

        edad: document.getElementById("edad").value,

        grado: document.getElementById("grado").value,

        sexo: sexoSeleccionado ?
               sexoSeleccionado.value : "",

        horaAcostarse:
        document.getElementById("horaAcostarse").value,

        tiempoDormir:
        document.getElementById("tiempoDormir").value,

        horaLevantarse:
        document.getElementById("horaLevantarse").value,

        horasSueno:
        document.getElementById("horasSueno").value
    };

    fetch(URL_SCRIPT,{
        method:"POST",
        body: JSON.stringify(datos)
    })
    .then(res=>res.text())
    .then(data=>{
        alert("Respuestas guardadas correctamente");
        document.getElementById("cuestionario").reset();
    })
    .catch(error=>{
        alert("Error al guardar");
        console.error(error);
    });

});
