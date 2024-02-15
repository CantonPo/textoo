console.log("index.js online");

const fs = require("fs");

const coche = {
    ruedas: 4,
    puertas: 5,
    tipo_motor: "electrico",
    marca: "ford",
    modelo: "fiesta"
};

const coche_json = JSON.stringify(coche, null, 2);

const filePath = "./coche.json";

fs.writeFile(filePath, coche_json, (error) => {
    if (error) {
        console.error("Error al escribir el archivo:", error);
        return;
    }
    console.log("Archivo creado correctamente:", filePath);
});