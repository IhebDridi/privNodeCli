import inquirer from "inquirer";
 

let projectName;
let used_framework
 
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
    
    return used_framework
}

export  {mainAsk, listAsk};