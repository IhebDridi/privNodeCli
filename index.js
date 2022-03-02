#!/usr/bin/env/ node

import chalk from "chalk";
import Listr from "listr";
import inquirer from "inquirer";
import ora from 'ora';
import {execa, execaCommand} from 'execa'
import {mainAsk,listAsk} from './func/projects/askProject.js'
import {CreateProject} from './func/projects/CreateProject.js'



let projectName;
console.log(chalk.bgGreen("hello"))



let used_framework


let project = await mainAsk()
let framew = await listAsk()





async function spinn() {
    const spinner = ora("checking answer...").start()
    setTimeout(() => {
        spinner.color = 'yellow'
        spinner.text = 'Loading...'
    }, 1000)
    spinner.succeed()
}
CreateProject(framew)
await spinn()
console.log('the user is: ' + project)
console.log('the selected framework is : ' + framew)
