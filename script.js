// These are the phrases the user has to guess
const phrases = ["Hello_my_name_is_Jeff", "My_daughter_is_named_Ella", "The_rain_in_Spain"]
const choice = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const currentPhrase = phrases[Math.floor(Math.random() * phrases.length)].toUpperCase().split("")
const hangmanSequence = {1:'.bottom', 2:'.left', 3:'.top', 4:'.noose', 5:'.head', 6:'.torso', 7:'.left-arm', 8:'.right-arm', 9:'.left-leg', 10:'.right-leg'}
let incorrectGuess = 0;
let correctChoices = 0;


let phrase = document.querySelector(".phrase") 
let choices = document.querySelector(".choices")
let incorrectGuesses = document.querySelector('.failed-guesses')


// This creates the blank letters for the user to guess
function createPhrase() {
    currentPhrase.forEach((index) => {
        let letter = document.createElement('div')
        letter.classList.toggle('hidden')
        letter.textContent = index
        phrase.appendChild(letter)
        letter.setAttribute("id", index)
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
        character.setAttribute('id', char)
        choices.appendChild(character)
    })
}

createPhrase()
createChoices()

document.querySelectorAll(".character").forEach(char => {
    char.addEventListener('click', event => {
        if (currentPhrase.includes(`${char.innerHTML}`)) {
            for (let i = 0; i < currentPhrase.length; i++) {
                document.getElementById(`${char.innerHTML}`).style.color = 'green'
                document.getElementById(`${char.innerHTML}`).removeAttribute('id')
                correctChoices ++;
                console.log(correctChoices)

            }
        } else {
            incorrectGuess ++;
            document.getElementById(`${char.innerHTML}`).style.color = 'red'
            document.querySelector(`${hangmanSequence[incorrectGuess]}`).style.border = '8px solid rgb(74, 74, 74)'
            let wrongGuess = document.createElement('span')
            wrongGuess.textContent = char.textContent
            wrongGuess.classList.add('guess')
            console.log(char.textContent)
            incorrectGuesses.appendChild(wrongGuess)
        }
        if (incorrectGuess === 10) {
            document.querySelector('.gameover').style.display = 'block'
        }
    })
})

// Button press to restart game
document.querySelector('.gameover').addEventListener('click', event => {
    window.location.reload();
})

// This checks if the game has been won

console.log(currentPhrase)