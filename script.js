// Write your JavaScript code here!

// window.addEventListener("load", function() {
    

    window.addEventListener("load", function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            event.stopPropagation();
            //List DOM
            let pilot = document.querySelector("input[name=pilotName]").value;
            let copilot = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoLevel = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById('faultyItems');
                //check all fields are filled
    if (validateInput(pilot) === `Empty`|| validateInput(copilot) === `Empty`|| 
    validateInput(fuelLevel) === `Empty`||validateInput(cargoLevel) === `Empty`) {
        alert(`All fields are required`);
    }
    //check that fuelLevel and cargoLevel are numbers and pilot and co-pilot are strings
    else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert(`Please enter numerical values for Fuel Level and Cargo Mass`);
    } else if (validateInput(pilot)===`Is a Number`||validateInput(copilot)===`Is a Number`) {
        alert('Please do not enter numbers for name of pilot or co-pilot');
    } 
    else {
    
            //use formsubmission to validate and update list
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel); }
            // list.style.visibility = 'visible';
        })
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
     })
    
 });