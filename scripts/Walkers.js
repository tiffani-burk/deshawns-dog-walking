import { getWalkers } from "./database.js"


//this is a click event, it's eliciting an response from an action (the "click")
document.addEventListener( 
    //param 1= action name -> this is a defined name 
    "click",
    //param 2= type of event -> can name this whatever i want
    (clickEvent) => {
        const itemClicked = clickEvent.target //tageting the name in the param
        if (itemClicked.id.startsWith("walker")) { //checking if the id from the for of loop below starts with the walker
            const [,walkerId] = itemClicked.id.split("--") //splits the id="walker" from the ${walker.id}, using "," from the for of loop below. 

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) { //turns the string from line 16 into an integer
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)


const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>` //HTML representation of of list items
    }
    
    walkerHTML += "</ul>"

    return walkerHTML
}

