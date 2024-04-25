#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Please type a sentence, I'll count the words and letters."
    }]);
const words = answer.Sentence.trim().split(' ');
const letters = answer.Sentence.trim();
console.log(words);
console.log(`Your sentence has ${words.length} words and ${letters.length} letters`);
