#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("=".repeat(100)));
console.log(chalk.bold.redBright("\t\t <<<<<< Wellcome To CodeWithFaiz - Word Counter >>>>>>"));
console.log(chalk.bgBlueBright("=".repeat(100)));
let loop = true;
while (loop) {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Enter The Sentence:",
        },
    ]);
    let words = answers.sentence.trim().split(" ");
    console.log(chalk.yellowBright("\n-Sentence Words :"));
    console.log(words);
    console.log(chalk.green(`\nTotal Words Count = ${words.length}\n`));
    let MoreCount = await inquirer.prompt([
        {
            type: "confirm",
            name: "more",
            message: "Do You Want To More Counts Words ??",
            default: false,
        },
    ]);
    if (!MoreCount.more) {
        loop = false;
        console.log(chalk.bold.blueBright("\nThank You"));
    }
}
