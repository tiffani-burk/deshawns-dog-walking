import { getCities } from "./database.js"



//invoke getCities and store to var called cities
const cities = getCities()




export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

