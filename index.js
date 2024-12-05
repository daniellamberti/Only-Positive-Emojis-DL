/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and
ends with a colon. If it does, check if it exists in the hackedEmojis object,
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/

const keys = Object.keys(hackedEmojis); // get all hackedEmojis values for future processing

function emojifyWord(word){
    if(isWordLowercase(word)) {  // check if the word is all lowercase letters
        if(word.at(0) === ":" && word.at(word.length - 1) === ":") { // check if first and last character are ":"
            const wordWithNoColons = word.slice(1, -1); // erase colons in order to compare word with const keys values.
            if(keys.includes(wordWithNoColons)) { //  check if wordWithNoColons is present in hackedEmojis object.
                return hackedEmojis[wordWithNoColons]; // if yes, return the correct emoji from hackedEmojis object.
            }
        }
    }
    return word; // if word does not match any hackedEmojis values remains the same.
}

console.log(emojifyWord(":cry:"));


// Function that checks if a word is all lowercase. Return a boolean true or false.

function isWordLowercase(word) {
    const lowercasedWord = word.toLowerCase();
    return word === lowercasedWord;
    }


/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase){

const phraseArr = phrase.split(" "); // create an array with individual words as values (for future processing).
const finalPhrase = phraseArr.map( (word) => {
    if(keys.includes(word.slice(1, -1)) ){ // check all words to find if any of them are included in hackedEmojis object.
        word = emojifyWord(word);  // if word is included in hackedEmojis object then is converted to a positive emoji.
    }
    return word;
});

    return finalPhrase.join(" "); /* return the argument "phrase" processed. If there is a negative emoji
                                    in the phrase, will be replaced by a positive emoji. */
}

console.log(emojifyPhrase("Hello how are you doing :puke:"));


// I DO NOT KNOW HOW TO DO THIS LAST STRETCH GOAL

// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.



