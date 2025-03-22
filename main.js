const operations = require('./operations.js');


list = [
        "Cybersécurité", "Algorithme", "Intelligence", "Processeur", "Gravitation",
        "Électricité", "Photon", "Microscope", "Génétique", "Atome",
        "Énergie", "Binaire", "Clonage", "Robotique", "Thermodynamique",
        "Biotechnologie", "Satellites", "Neurone", "Nanotechnologie", "Cryptographie"
       ];

function main()
{
  restart = false;
  loose = true;
  operations.start(); /* demmarre le jeu */
  let answer = operations.asking();
  while (answer > 2 || answer < 1) /* l'option choisie doit etre 1 ou 2 */
  {
    console.log("Unknown option");
    answer = operations.asking();
  }
  if (answer == 2)
  {
    console.log("Exiting ...");
  }
  else
  {
    console.log("Starting ...");
    operations.definition(); /* affiche l'objectif du jeu */
    let word = operations.pickWord(list);
    let hidden_letters = operations.transform(word); /* transforme chaque caracteres en asterisque*/
    attempted_letters = [];
    console.log(`The mystery word have ${word.length} letters`);
    for (let i = 0; i < word.length; i++)
    {
      console.log("Choose a letter: ");
      let letter = operations.asking(); /* demande à l'utilisateur d'entrer une caractere*/
      if (letter.length > 1) /* interuption du jeu si le nombre de caracteres depasse 1*/
      {
        return console.log("You are not allowed to input more than one character." + "\n" + "Interrupting ...");
      }
      if (operations.validInput(letter)) /* vérifie si l'utilisateur entre une caractere valide */
      {
        i--;
        console.log(operations.validInput(letter));
      }
      else
      {
        if (operations.attempt(letter, attempted_letters)) /* verifie si l'utilisateur ne tente pas une caractere déja entrée */
        {
          i--;
          console.log(`The letter ${letter} was already attempted before.`);
        }
        else
        {
          attempted_letters.push(letter.toLowerCase());/* enregistre les caracteres entrée par l'utilisateur */
          hidden_letters = operations.reveal(letter, word, hidden_letters);/* change les astérisque en lettre si le caractere entre par l'utilisateur existe dans le mot */
          console.log(`The mystery word is now looking like ${hidden_letters}`);
          if (word.toLowerCase() === hidden_letters)
          {
            loose = false;
            console.log("You win, start again ? [yes (y) / no (n)]: ");
            answer = operations.asking();
            if (answer == "yes" || answer == "y") /* redemmarre le jeu si l'option choisie est "y" ou "yes" */
            {
              restart = true;
              return main();
            }
            else
            {
              break;
            }
          }
        }
      }
      console.log(`Attempt remaining: ${word.length - (i + 1)}`); /*compte le nombre de tentative restant */
    }
    if (restart || loose)
    {
      return console.log(`You Loose, ${word} was the mystery word`);
    }
  }
}


main();
