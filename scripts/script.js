function toggleSection() {
    const contenedor = document.getElementById("leerTexto");
    if (!contenedor.style.display || contenedor.style.display === "none") {
        contenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Leer menos";
    } else {
        contenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Leer más";
    }
}

/*Galeria*/
function toggleCategory  (category) {
    var galIlustracionElement = document.getElementById ("galIlustracion")
    var galBrandingElement = document.getElementById ("galBranding")
    var galLescoElement = document.getElementById ("galLesco")
    
    var galIlustracionButton = document.getElementById ('illustrationBtn')
    var galBrandingButton = document.getElementById ('brandingBtn')
    var galLescoButton = document.getElementById ('lescoBtn')

    if (category === 'illu') {
        galIlustracionElement.style.display = "block";
        galBrandingElement.style.display = "none";
        galLescoElement.style.display = "none";

        galIlustracionButton.style.backgroundColor = "#aaf3ec";
        galBrandingButton.style.backgroundColor = "#64baad";
        galLescoButton.style.backgroundColor = "#64baad";

    } else if (category === 'brand'){
        galIlustracionElement.style.display = "none";
        galBrandingElement.style.display = "block";
        galLescoElement.style.display = "none";

        galIlustracionButton.style.backgroundColor = "#64baad";
        galBrandingButton.style.backgroundColor = "#aaf3ec";
        galLescoButton.style.backgroundColor = "#64baad";
        
    } else {
        galIlustracionElement.style.display = "none";
        galBrandingElement.style.display = "none";
        galLescoElement.style.display = "block";

        galIlustracionButton.style.backgroundColor = "#64baad";
        galBrandingButton.style.backgroundColor = "#64baad";
        galLescoButton.style.backgroundColor = "#aaf3ec";
    }
}



