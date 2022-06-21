import { getPets, getWalkerCities, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()




// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


//Function is responsible for finding the cities that the walkers work in 
// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty string to store all of the assignment objects
    let citiesOfWalkers = ""
    // Iterate the array value of walkerCities
    for (const walkerCity of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walkerCity.walkerId === walker.id) {
            for (const city of cities) {
                if (walkerCity.cityId === city.id) {
                    citiesOfWalkers += `${city.name}`
                }
            }
            // If it does, add the current object to the array of assignments

        }
    }
    // After the loop is done, return the assignments string
    return citiesOfWalkers
}

//Function is responsible for returning the assignments in an HTML representation 
export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers) //invoked findWalker
        assignmentHTML += ` 
                <li>
                    ${currentPet.name} is being walked by
                    ${currentPetWalker.name} in ${filterWalkerCitiesByWalker(currentPetWalker)} 
                </li>
            `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

//This function is responsible for finding the city assignments 
export const assignedCityNames = (assigments) => {
    //set empty string
    let nameOfCity = ""
    for (const assignment of assigments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                nameOfCity += `${city.name}`
            }
        }
    }
    return nameOfCity
}