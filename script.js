// These are the phrases the user has to guess
const phrases = ["Hello_my_name_is_Jeff", "My_daughter_is_named_Ella", "The_rain_in_Spain_falls_mainly_on_the_plain"]
const choice = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const currentPhrase = phrases[Math.floor(Math.random() * phrases.length)].toUpperCase().split("")

let phrase = document.querySelector(".phrase") 
let choices = document.querySelector(".choices")

// This creates the blank letters for the user to guess
function createPhrase() {
    currentPhrase.forEach((index) => {
        let letter = document.createElement('div')
        letter.classList.toggle('hidden')
        letter.textContent = index
        phrase.appendChild(letter)
        if (index === '_') {
            letter.classList.add('underscore')
        }
    })
}

// This creates the letters for the player to choose from
function createChoices() {
    choice.forEach((char) => {
        let character = document.createElement('div')
        character.classList.add('character')
        character.textContent = char
        choices.appendChild(character)
    })
}

createPhrase()
createChoices()

