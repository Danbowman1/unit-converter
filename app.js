const inputNumber = document.getElementById('unit')
const convertBtn = document.getElementById('convertBtn')
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener('click', function() {
    let baseNumber = inputNumber.value
    const feet = baseNumber * 3.281 
    const meters = baseNumber / 3.281
    const gallons = baseNumber * 0.264
    const liters = baseNumber / 0.264
    const pounds = baseNumber * 2.204
    const kilos = baseNumber / 2.204

    length.innerHTML = `${baseNumber} meters = ${feet.toFixed(2)} feet | ${baseNumber} feet = ${meters.toFixed(2)} meters`
    volume.innerHTML = `${baseNumber} liters = ${gallons.toFixed(2)} gallons | ${baseNumber} gallons = ${liters.toFixed(2)} liters`
    mass.innerHTML = `${baseNumber} kilos = ${pounds.toFixed(2)} pounds | ${baseNumber} pounds = ${kilos.toFixed(2)} kilos`
})