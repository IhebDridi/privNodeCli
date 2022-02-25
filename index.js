#!/usr/bin/env/ node

import chalk from "chalk";
import Listr from "listr";
import inquirer from "inquirer";
import ora from 'ora';
import {execa, execaCommand} from 'execa'




let projectName;
console.log(chalk.bgGreen("hello"))



async function mainAsk() {
    const answer = await inquirer.prompt({
        name: "projectName",
        type: "input",
        message: "Project name: ",
        default() {
            return 'Proj'
        }
    })

    projectName = answer.projectName
    return projectName
}

let used_framework
async function listAsk() {
    const answer = await inquirer.prompt({
        name: "used_framework",
        type: "list",
        message: "chose your framework: ",
        choices: [
            'Angular',
            'React',
            'NextJs',
        ],
        default() {
            return 'Angular'
        }
    })
    used_framework = answer.used_framework
    CreateProject(used_framework)
    return used_framework
}
let project = await mainAsk()
let framew = await listAsk()

async function CreateProject(framew) {

   
    try{
        await execaCommand('npm install -g npx')
    }
    catch(e)
    {
        console.log(e)
    }

    switch (framew) {
        
        

        case 'Angular':
            {
                let angInstall = await execa('npm', ['install', 'angular'])
                console.log(angInstall)
                let angInstallCLI = await execa('npm', ['install', '-g','@angular/cli'])
                console.log(angInstallCLI)
                let angProj = await execa('ng', ['new', projectName])
                console.log(angProj)
                break;
            }
        case 'React':
            {
                let ReactInstall = await execa('npm', ['install','react'])
                console.log(ReactInstall)
                let ReactInstalll = await execa('npm', ['install','create-react-app'])
                console.log(ReactInstalll)
                let ReactProj = await execa('npx', ['create-react-app', projectName])

                console.log(ReactProj)

                break;
            }
        case 'Nextjs':
            let ReactProj = await execa('npx', ['create-next-app@latest', '--typescript'])

            console.log(ReactProj)
            console.log('dev - Runs next dev which starts Next.js in development mode\n'+'build - Runs next build which builds the application for production usage\n'+'start - Runs next start which starts a Next.js production server\n'+'lint - Runs next lint which sets up Next.jsbuilt-in ESLint configuration')



        default:
            break;
    }

}



async function spinn() {
    const spinner = ora("checking answer...").start()
    setTimeout(() => {
        spinner.color = 'yellow'
        spinner.text = 'Loading...'
    }, 1000)
    spinner.succeed()
}
await spinn()
console.log('the user is: ' + projectName)
console.log('the selected framework is : ' + used_framework)
