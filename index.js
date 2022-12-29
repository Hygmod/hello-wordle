let filteredWordList = words
let count = 1

const guessIndex0 = document.getElementById("guess-index-0")
const guessIndex1 = document.getElementById("guess-index-1")
const guessIndex2 = document.getElementById("guess-index-2")
const guessIndex3 = document.getElementById("guess-index-3")
const guessIndex4 = document.getElementById("guess-index-4")

const suggestedWord1 = document.getElementById("suggested-word-1")

const index0Possibilities = document.getElementById("index0-possibilities")
const index1Possibilities = document.getElementById("index1-possibilities")
const index2Possibilities = document.getElementById("index2-possibilities")
const index3Possibilities = document.getElementById("index3-possibilities")
const index4Possibilities = document.getElementById("index4-possibilities")

const totalPossibilities = document.getElementById("total-possibilities")

const wordListElement = document.getElementById("word-list")

const guess1Index0 = document.getElementById("guess-1-index-0")
const guess1Index1 = document.getElementById("guess-1-index-1")
const guess1Index2 = document.getElementById("guess-1-index-2")
const guess1Index3 = document.getElementById("guess-1-index-3")
const guess1Index4 = document.getElementById("guess-1-index-4")
const guess2Index0 = document.getElementById("guess-2-index-0")
const guess2Index1 = document.getElementById("guess-2-index-1")
const guess2Index2 = document.getElementById("guess-2-index-2")
const guess2Index3 = document.getElementById("guess-2-index-3")
const guess2Index4 = document.getElementById("guess-2-index-4")

guessIndex0.addEventListener("input", (e) => {
  if (e.data == 0) {
    e.target.classList.toggle("guess-index-color-grey", e.target.value)
  } else if (e.data == 1) {
    e.target.classList.toggle("guess-index-color-yellow", e.target.value)
  } else if (e.data == 2) {
    e.target.classList.toggle("guess-index-color-green", e.target.value)
  } else {
    e.target.classList.remove("guess-index-color-grey")
    e.target.classList.remove("guess-index-color-yellow")
    e.target.classList.remove("guess-index-color-green")
  }
})

guessIndex1.addEventListener("input", (e) => {
  if (e.data == 0) {
    e.target.classList.toggle("guess-index-color-grey", e.target.value)
  } else if (e.data == 1) {
    e.target.classList.toggle("guess-index-color-yellow", e.target.value)
  } else if (e.data == 2) {
    e.target.classList.toggle("guess-index-color-green", e.target.value)
  } else {
    e.target.classList.remove("guess-index-color-grey")
    e.target.classList.remove("guess-index-color-yellow")
    e.target.classList.remove("guess-index-color-green")
  }
})

guessIndex2.addEventListener("input", (e) => {
  if (e.data == 0) {
    e.target.classList.toggle("guess-index-color-grey", e.target.value)
  } else if (e.data == 1) {
    e.target.classList.toggle("guess-index-color-yellow", e.target.value)
  } else if (e.data == 2) {
    e.target.classList.toggle("guess-index-color-green", e.target.value)
  } else {
    e.target.classList.remove("guess-index-color-grey")
    e.target.classList.remove("guess-index-color-yellow")
    e.target.classList.remove("guess-index-color-green")
  }
})

guessIndex3.addEventListener("input", (e) => {
  if (e.data == 0) {
    e.target.classList.toggle("guess-index-color-grey", e.target.value)
  } else if (e.data == 1) {
    e.target.classList.toggle("guess-index-color-yellow", e.target.value)
  } else if (e.data == 2) {
    e.target.classList.toggle("guess-index-color-green", e.target.value)
  } else {
    e.target.classList.remove("guess-index-color-grey")
    e.target.classList.remove("guess-index-color-yellow")
    e.target.classList.remove("guess-index-color-green")
  }
})

guessIndex4.addEventListener("input", (e) => {
  if (e.data == 0) {
    e.target.classList.toggle("guess-index-color-grey", e.target.value)
  } else if (e.data == 1) {
    e.target.classList.toggle("guess-index-color-yellow", e.target.value)
  } else if (e.data == 2) {
    e.target.classList.toggle("guess-index-color-green", e.target.value)
  } else {
    e.target.classList.remove("guess-index-color-grey")
    e.target.classList.remove("guess-index-color-yellow")
    e.target.classList.remove("guess-index-color-green")
  }
})

let answerPossibilities = {
  0: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  1: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  2: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  3: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  4: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

function bestNextGuesses() {
  const guessInput = document.getElementById("guess-input")

  processGreens(guessInput.value, [guessIndex0.value, guessIndex1.value, guessIndex2.value, guessIndex3.value, guessIndex4.value])
  processYellows(guessInput.value, [guessIndex0.value, guessIndex1.value, guessIndex2.value, guessIndex3.value, guessIndex4.value])
  processGreys(guessInput.value, [guessIndex0.value, guessIndex1.value, guessIndex2.value, guessIndex3.value, guessIndex4.value])
  removeGreyFromAllIndices(guessInput.value, [guessIndex0.value, guessIndex1.value, guessIndex2.value, guessIndex3.value, guessIndex4.value])

  filterWordList()
  wordListElement.innerHTML = filteredWordList.join(", ")

  suggestedWord1.innerHTML = `Suggested Guess: ${findNextBestGuesses(filteredWordList)}`

  totalPossibilities.innerHTML = `Total Possibilities: ${filteredWordList.length}`

  showGuess(guessInput)

  index0Possibilities.innerHTML = JSON.stringify(answerPossibilities[0].join(", "))
  index1Possibilities.innerHTML = JSON.stringify(answerPossibilities[1].join(", "))
  index2Possibilities.innerHTML = JSON.stringify(answerPossibilities[2].join(", "))
  index3Possibilities.innerHTML = JSON.stringify(answerPossibilities[3].join(", "))
  index4Possibilities.innerHTML = JSON.stringify(answerPossibilities[4].join(", "))

  guessInput.value = ""
  guessIndex0.value = ""
  guessIndex1.value = ""
  guessIndex2.value = ""
  guessIndex3.value = ""
  guessIndex4.value = ""
  guessIndex0.classList.remove("guess-index-color-grey")
  guessIndex1.classList.remove("guess-index-color-grey")
  guessIndex2.classList.remove("guess-index-color-grey")
  guessIndex3.classList.remove("guess-index-color-grey")
  guessIndex4.classList.remove("guess-index-color-grey")
  guessIndex0.classList.remove("guess-index-color-yellow")
  guessIndex1.classList.remove("guess-index-color-yellow")
  guessIndex2.classList.remove("guess-index-color-yellow")
  guessIndex3.classList.remove("guess-index-color-yellow")
  guessIndex4.classList.remove("guess-index-color-yellow")
  guessIndex0.classList.remove("guess-index-color-green")
  guessIndex1.classList.remove("guess-index-color-green")
  guessIndex2.classList.remove("guess-index-color-green")
  guessIndex3.classList.remove("guess-index-color-green")
  guessIndex4.classList.remove("guess-index-color-green")

  count++
  guessInput.focus()
}

function processGreens(guess, guessColors) {
  for (let i = 0; i < 5; i++) {
    if (guessColors[i] == 2) {
      answerPossibilities[i] = [guess[i]]
    }
  }
}

function processYellows(guess, guessColors) {
  for (let i = 0; i < 5; i++) {
    if (guessColors[i] == 1) {
      answerPossibilities[i] = answerPossibilities[i].filter((e) => e != guess[i])
      filteredWordList = filteredWordList.filter((e) => e.includes(guess[i]))
    }
  }
}

function processGreys(guess, guessColors) {
  for (let i = 0; i < 5; i++) {
    if (guessColors[i] == 0) {
      answerPossibilities[i] = answerPossibilities[i].filter((e) => e != guess[i])
    }
  }
}

function removeGreyFromAllIndices(guess, guessColors) {
  for (let i = 0; i < 5; i++) {
    let greyCount = 0
    for (let ii = 0; ii < 5; ii++) {
      if (guess[i] === guess[ii]) {
        if (guessColors[ii] !== 2) greyCount += Number(guessColors[ii])
      }
    }
    if (greyCount === 0) {
      for (let iii = 0; iii < 5; iii++) {
        if (answerPossibilities[iii].length != 1) {
          answerPossibilities[iii] = answerPossibilities[iii].filter((e) => e != guess[i])
        }
      }
    }
  }
}

function filterWordList() {
  for (let i = 0; i < 5; i++) {
    filteredWordList = filteredWordList.filter((e) => answerPossibilities[i].includes(e[i]))
  }
}

function showGuess(guessInput) {
  if (count === 1) {
    let guessOne = document.getElementById("guess-1")

    let guess1Index0 = guessOne.appendChild(document.createElement("p"))
    guess1Index0.setAttribute("id", "guess-1-index-0")
    guess1Index0.innerHTML = `${guessInput.value[0]}`

    let guess1Index1 = guessOne.appendChild(document.createElement("p"))
    guess1Index1.setAttribute("id", "guess-1-index-1")
    guess1Index1.innerHTML = `${guessInput.value[1]}`

    let guess1Index2 = guessOne.appendChild(document.createElement("p"))
    guess1Index2.setAttribute("id", "guess-1-index-2")
    guess1Index2.innerHTML = `${guessInput.value[2]}`

    let guess1Index3 = guessOne.appendChild(document.createElement("p"))
    guess1Index3.setAttribute("id", "guess-1-index-3")
    guess1Index3.innerHTML = `${guessInput.value[3]}`

    let guess1Index4 = guessOne.appendChild(document.createElement("p"))
    guess1Index4.setAttribute("id", "guess-1-index-4")
    guess1Index4.innerHTML = `${guessInput.value[4]}`

    guessIndex0.value == 0 ? guess1Index0.classList.add("show-guess-grey") : guessIndex0.value == 1 ? guess1Index0.classList.add("show-guess-yellow") : guess1Index0.classList.add("show-guess-green")
    guessIndex1.value == 0 ? guess1Index1.classList.add("show-guess-grey") : guessIndex1.value == 1 ? guess1Index1.classList.add("show-guess-yellow") : guess1Index1.classList.add("show-guess-green")
    guessIndex2.value == 0 ? guess1Index2.classList.add("show-guess-grey") : guessIndex2.value == 1 ? guess1Index2.classList.add("show-guess-yellow") : guess1Index2.classList.add("show-guess-green")
    guessIndex3.value == 0 ? guess1Index3.classList.add("show-guess-grey") : guessIndex3.value == 1 ? guess1Index3.classList.add("show-guess-yellow") : guess1Index3.classList.add("show-guess-green")
    guessIndex4.value == 0 ? guess1Index4.classList.add("show-guess-grey") : guessIndex4.value == 1 ? guess1Index4.classList.add("show-guess-yellow") : guess1Index4.classList.add("show-guess-green")
  } else if (count === 2) {
    let guessTwo = document.getElementById("guess-2")

    let guess2Index0 = guessTwo.appendChild(document.createElement("p"))
    guess2Index0.setAttribute("id", "guess-2-index-0")
    guess2Index0.innerHTML = `${guessInput.value[0]}`

    let guess2Index1 = guessTwo.appendChild(document.createElement("p"))
    guess2Index1.setAttribute("id", "guess-2-index-1")
    guess2Index1.innerHTML = `${guessInput.value[1]}`

    let guess2Index2 = guessTwo.appendChild(document.createElement("p"))
    guess2Index2.setAttribute("id", "guess-2-index-2")
    guess2Index2.innerHTML = `${guessInput.value[2]}`

    let guess2Index3 = guessTwo.appendChild(document.createElement("p"))
    guess2Index3.setAttribute("id", "guess-2-index-3")
    guess2Index3.innerHTML = `${guessInput.value[3]}`

    let guess2Index4 = guessTwo.appendChild(document.createElement("p"))
    guess2Index4.setAttribute("id", "guess-2-index-4")
    guess2Index4.innerHTML = `${guessInput.value[4]}`

    guessIndex0.value == 0 ? guess2Index0.classList.add("show-guess-grey") : guessIndex0.value == 1 ? guess2Index0.classList.add("show-guess-yellow") : guess2Index0.classList.add("show-guess-green")
    guessIndex1.value == 0 ? guess2Index1.classList.add("show-guess-grey") : guessIndex1.value == 1 ? guess2Index1.classList.add("show-guess-yellow") : guess2Index1.classList.add("show-guess-green")
    guessIndex2.value == 0 ? guess2Index2.classList.add("show-guess-grey") : guessIndex2.value == 1 ? guess2Index2.classList.add("show-guess-yellow") : guess2Index2.classList.add("show-guess-green")
    guessIndex3.value == 0 ? guess2Index3.classList.add("show-guess-grey") : guessIndex3.value == 1 ? guess2Index3.classList.add("show-guess-yellow") : guess2Index3.classList.add("show-guess-green")
    guessIndex4.value == 0 ? guess2Index4.classList.add("show-guess-grey") : guessIndex4.value == 1 ? guess2Index4.classList.add("show-guess-yellow") : guess2Index4.classList.add("show-guess-green")
  } else if (count === 3) {
    let guessThree = document.getElementById("guess-3")

    let guess3Index0 = guessThree.appendChild(document.createElement("p"))
    guess3Index0.setAttribute("id", "guess-3-index-0")
    guess3Index0.innerHTML = `${guessInput.value[0]}`

    let guess3Index1 = guessThree.appendChild(document.createElement("p"))
    guess3Index1.setAttribute("id", "guess-3-index-1")
    guess3Index1.innerHTML = `${guessInput.value[1]}`

    let guess3Index2 = guessThree.appendChild(document.createElement("p"))
    guess3Index2.setAttribute("id", "guess-3-index-2")
    guess3Index2.innerHTML = `${guessInput.value[2]}`

    let guess3Index3 = guessThree.appendChild(document.createElement("p"))
    guess3Index3.setAttribute("id", "guess-3-index-3")
    guess3Index3.innerHTML = `${guessInput.value[3]}`

    let guess3Index4 = guessThree.appendChild(document.createElement("p"))
    guess3Index4.setAttribute("id", "guess-3-index-4")
    guess3Index4.innerHTML = `${guessInput.value[4]}`

    guessIndex0.value == 0 ? guess3Index0.classList.add("show-guess-grey") : guessIndex0.value == 1 ? guess3Index0.classList.add("show-guess-yellow") : guess3Index0.classList.add("show-guess-green")
    guessIndex1.value == 0 ? guess3Index1.classList.add("show-guess-grey") : guessIndex1.value == 1 ? guess3Index1.classList.add("show-guess-yellow") : guess3Index1.classList.add("show-guess-green")
    guessIndex2.value == 0 ? guess3Index2.classList.add("show-guess-grey") : guessIndex2.value == 1 ? guess3Index2.classList.add("show-guess-yellow") : guess3Index2.classList.add("show-guess-green")
    guessIndex3.value == 0 ? guess3Index3.classList.add("show-guess-grey") : guessIndex3.value == 1 ? guess3Index3.classList.add("show-guess-yellow") : guess3Index3.classList.add("show-guess-green")
    guessIndex4.value == 0 ? guess3Index4.classList.add("show-guess-grey") : guessIndex4.value == 1 ? guess3Index4.classList.add("show-guess-yellow") : guess3Index4.classList.add("show-guess-green")
  } else if (count === 4) {
    let guessFour = document.getElementById("guess-4")

    let guess4Index0 = guessFour.appendChild(document.createElement("p"))
    guess4Index0.setAttribute("id", "guess-4-index-0")
    guess4Index0.innerHTML = `${guessInput.value[0]}`

    let guess4Index1 = guessFour.appendChild(document.createElement("p"))
    guess4Index1.setAttribute("id", "guess-4-index-1")
    guess4Index1.innerHTML = `${guessInput.value[1]}`

    let guess4Index2 = guessFour.appendChild(document.createElement("p"))
    guess4Index2.setAttribute("id", "guess-4-index-2")
    guess4Index2.innerHTML = `${guessInput.value[2]}`

    let guess4Index3 = guessFour.appendChild(document.createElement("p"))
    guess4Index3.setAttribute("id", "guess-4-index-3")
    guess4Index3.innerHTML = `${guessInput.value[3]}`

    let guess4Index4 = guessFour.appendChild(document.createElement("p"))
    guess4Index4.setAttribute("id", "guess-4-index-4")
    guess4Index4.innerHTML = `${guessInput.value[4]}`

    guessIndex0.value == 0 ? guess4Index0.classList.add("show-guess-grey") : guessIndex0.value == 1 ? guess4Index0.classList.add("show-guess-yellow") : guess4Index0.classList.add("show-guess-green")
    guessIndex1.value == 0 ? guess4Index1.classList.add("show-guess-grey") : guessIndex1.value == 1 ? guess4Index1.classList.add("show-guess-yellow") : guess4Index1.classList.add("show-guess-green")
    guessIndex2.value == 0 ? guess4Index2.classList.add("show-guess-grey") : guessIndex2.value == 1 ? guess4Index2.classList.add("show-guess-yellow") : guess4Index2.classList.add("show-guess-green")
    guessIndex3.value == 0 ? guess4Index3.classList.add("show-guess-grey") : guessIndex3.value == 1 ? guess4Index3.classList.add("show-guess-yellow") : guess4Index3.classList.add("show-guess-green")
    guessIndex4.value == 0 ? guess4Index4.classList.add("show-guess-grey") : guessIndex4.value == 1 ? guess4Index4.classList.add("show-guess-yellow") : guess4Index4.classList.add("show-guess-green")
  }
}

function findNextBestGuesses(wordList) {
  const letterMap = countLetters(wordList)
  let wordWithHighestFrequencyLetters = ""
  let count = 0
  for (word of wordList) {
    let letterCountForThisWord = 0
    for (letter of word) {
      letterCountForThisWord += letterMap[letter]
    }
    wordSet = new Set(word)
    if (wordSet.size === 4) {
      letterCountForThisWord = letterCountForThisWord * 0.9
    } else if (wordSet.size === 3) {
      letterCountForThisWord = letterCountForThisWord * 0.8
    } else if (wordSet.size === 2) {
      letterCountForThisWord = letterCountForThisWord * 0.7
    } else if (wordSet.size === 1) {
      letterCountForThisWord = letterCountForThisWord * 0.3
    }

    if (letterCountForThisWord > count) {
      count = letterCountForThisWord

      wordWithHighestFrequencyLetters = word
    }
  }
  return wordWithHighestFrequencyLetters
}

//map all the words, counting the total occurrence of each letter of the alphabet
function countLetters(wordList) {
  let map = {}
  for (word of wordList) {
    for (letter of word) {
      if (!map[letter]) {
        map[letter] = 1
      } else {
        map[letter]++
      }
    }
  }
  return map
}

//determine if the given word has exactly 1 vowel
function doesTheWordContainOnlyOneVowel(word) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0
  for (letter of word) {
    if (vowels.includes(letter)) count++
  }
  return count === 1
}

//Find the word with 4 distinct consonants and 1 vowel where those letters have the highest frequency from the word list
function bestFirstGuess(words) {
  const letterMap = countLetters(words)
  let wordWithHighestFrequencyLetters = ""
  let count = 0
  for (word of words) {
    const wordContainsOnlyOneVowel = doesTheWordContainOnlyOneVowel(word)
    const letterSet = new Set(word)

    if (word.length === letterSet.size && wordContainsOnlyOneVowel) {
      let letterCountForThisWord = 0
      for (letter of word) {
        letterCountForThisWord += letterMap[letter]
      }
      if (letterCountForThisWord > count) {
        count = letterCountForThisWord

        wordWithHighestFrequencyLetters = word
      }
    }
  }
  return wordWithHighestFrequencyLetters
}

//guess first word
//filter word list by letters not in answer
//find best guess for second word
//The best guess should maximize finding other letters in answer and location of confimed but unlocated letters

function showSuggestedWord() {
  document.getElementById("suggested-word").innerHTML = bestFirstGuess(words)
}
