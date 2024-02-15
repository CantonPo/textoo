const fs = require("fs")

const miobjeto_json = fs.readFileSync("./coche.json", "utf-8")
const miobjeto = JSON.parse(miobjeto_json)
console.ruedas = 10

console.log(miobjeto)