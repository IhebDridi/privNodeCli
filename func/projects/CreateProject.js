import {execa, execaCommand} from 'execa'

async function CreateProject(framewArg) {

   
    try{
        await execaCommand('npm install -g npx')
    }
    catch(e)
    {
        console.log(e)
    }

    switch (framewArg) {
        
        

        case 'Angular':
            {
                let angInstall = await execa('npm', ['install', 'angular'])
                console.log(angInstall)
                let angInstallCLI = await execa('npm', ['install', '-g','@angular/cli'])
                console.log(angInstallCLI)
                let angProj = await execa('ng', ['new', framewArg])
                console.log(angProj)
                break;
            }
        case 'React':
            {
                let ReactInstall = await execa('npm', ['install','react'])
                console.log(ReactInstall)
                let ReactInstalll = await execa('npm', ['install','create-react-app'])
                console.log(ReactInstalll)
                let ReactProj = await execa('npx', ['create-react-app', framewArg])

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

export {CreateProject}