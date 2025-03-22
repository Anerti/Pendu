function pickWord(table)
{
  const crypto = require('crypto');
  const secret = table[crypto.randomInt(0, table.length)];
  return secret;
}


function definition()
{
  return console.log("\n" + "The game of Hangman is a classic word game where the objective is to guess a word by suggesting letters one at a time." + "\n" + "Each mistake brings the player closer to defeat by gradually completing the drawing of a hanged figure." + "\n");
}


function transform(word)
{
  string = [];
  for (let i = 0; i < word.length; i++)
  {
    string += "*";
  }
  return string;
}


function validInput(string)
{
  for (let i = 0; i < string.length; i++)
  {
    if (!(string[i].toLowerCase() >= "a") && string[i].toLowerCase() <= "z")
    {
      return "The input must contain some characters between 'a' and 'z'"
    }
  }
}


function reveal(string, word, hidden_word)
{
  hidden_word = hidden_word.split("");
  for (let i = 0; i < word.length; i++)
  {
    for (let j = 0; j < string.length; j++)
    {
      if (string[j] === word[i].toLowerCase())
      {
        hidden_word[i] = string[j];
      }
    }
  }
  return hidden_word.join("");
}


function start()
{
  console.log("choose any of the option:" + "\n" + "1. Play" + "\n" + "2. Exit" + "\n");
}


function asking()
{
  const prompt = require('prompt-sync')();
  answer = prompt("");
  return answer;
}


function attempt(letter, table)
{
  for (let i = 0; i < table.length; i++)
  {
    if (table[i] === letter.toLowerCase())
    {
      return true;
    }
  }
  return false;
}



module.exports = {
  pickWord, asking, transform, validInput, reveal, start, attempt, definition
}
