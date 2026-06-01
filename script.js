const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbzm08stHKm7x0pYxFDU7dFlunD6irbrQR0lr6B7VFALPIoF4rSDDo-xMRB6iK12dp-lYw/exec";

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