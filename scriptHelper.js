

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  /*  let missionTarget = document.getElementId('missionTarget');
    missionTarget.innerHTML = `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `*/
}

function validateInput(testInput) {
    if (testInput === "") {
        return 'Empty'
    } else if (!isNaN(testInput)) {
        return 'Is a Number'
    } else {
        return 'Not a Number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //DOM Elements
    let pilotStatus = document.getElementId('pilotStatus');
    let copilotStatus = document.getElementId('copilotStatus');
    let fuelStatus = document.getElementId('fuelStatus');
    let launchStatus = document.getElementId('launchStatus');
    let cargoStatus = document.getElementId('cargoStatus');
    //Check all fields are filled
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
        alert("All fields are required");
    }
    //check that pilot and copilot are strings and fuelLevel and cargoLevel are numbers
    else if (validateInput(pilot.value) === 'Is a Number' || validateInput(copilot.value) === 'Is a Number') {
        alert('Please only enter letters for the pilot and co-pilot');
    } else if (validateInput(fuelLevel.value) === 'Not a Number' || validateInput(cargoLevel.value) === 'Not a Number') {
        alert('Please enter only numerical values for Fuel Level and Cargo Mass');
    } else {
        //update pilot/co-pilot status
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready`;

    }
    //checking fuel levels and update faulty items
    if (Number(fuelLevel.value) < 10000) {
        fuelStatus.innerHTML = `Not enough fuel for the journey`;
        list.style.visibility = 'visible';
        launchStatus.innerHTML = `Shuttle not ready for the launch`;
        launchStatus.style.color = `red`;
    } else if (Number(cargoLevel.value) > 10000) {
        cargoStatus.innerHTML = `Cargo is too heavy for takeoff`;
        list.style.visibility = `visible`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = `red`;
    } else if (Number(cargoLevel.value) < 10000 && Number(fuelLevel.value) > 10000) {
        list.style.visibility = `visible`;
        fuelStatus.innerHTML = `Enough fuel for the journey`;
        cargoStatus.innerHTML = `Cargo is light enough for takeoff`;
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = `green`;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("").then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
