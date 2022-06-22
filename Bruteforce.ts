// Importing
import { handleError } from "./src/Errors/Errors";
import Message from "./src/Messages";
import User from "./src/User"
import Menu from './src/Menu';
import Helpers from "./src/Helpers";
import axios from "axios";
//


// Importing interfaces
import { IBruteForceConfig, IProcessedTargetURL, IRequestParameterLinkedData } from "./src/interfaces";
import { url } from "inspector";
import sleep from "thread-sleep";
//

class BruteForce {
    private user: User;
    private listConfigMenu: Menu;
    private config: IBruteForceConfig = {targetURL: "", parametersAmount: 0,  urlParameters: []} // modify it
    
    constructor() {
        this.user = new User();
        this.listConfigMenu = new Menu();
    }

    private async display(): Promise<void> {
        console.clear();
        Message.bruteforce();
        const choice: number = parseInt(await Helpers.input(`- Menu - \n Select one option: \n 1. Create Brute Force Config \n 2. Start Brute Force \n 3. Exit Application \n Choice : `));        
        await this.menu(choice);
    }

    private async menu(choice: number): Promise<void> {
        switch(choice) {
            case 1: {
                console.clear();
                await this.createConfig();
                break;
            }
            case 2: {
                console.clear();
                if(this.config.targetURL.length)
                     await this.bruteForce();
                else {
                    console.clear();
                    console.log(`Please configure Brute Force before starting to brute force!`);
                    sleep(3500);
                }
                break;
            }
            case 3: {
                Helpers.closeApplication(0);
            }
        }
    }

    private availableFieldsToChoose(choosenDataListFields: Array<string>): Array<string> {
        const dataListFields: Array<string> = []
        for(let field of this.listConfigMenu.dataList.data) {
            if(choosenDataListFields.length) {
                let fieldChosed: boolean = false;
                for(let chosenField of choosenDataListFields) {
                    if(field.name == chosenField) {
                        fieldChosed = true;
                        break;
                    }
                }
                if(!fieldChosed) {
                    choosenDataListFields.push(field.name);
                    dataListFields.push(field.name);
                }
            }
            else
                dataListFields.push(field.name);
        }

        return dataListFields;
    }


    private async generateRequestURLs(): Promise<string[]> {
        const requestURLs: Array<string> = [];
        console.log(`You will have to link every list data to an URL Parameter`);
        console.log(this.config.urlParameters)
        Helpers.sleep(3000);
        const choosenDataListFields: Array<string> = [];
        const requestParameterLinkedData: IRequestParameterLinkedData = {        };

        // Linking request parameter to given user data list
        for(let targetURLParameter of this.config.urlParameters) {
            const availableFieldsToChoose: Array<string> = this.availableFieldsToChoose(choosenDataListFields);
            const dataListField: string = await Helpers.input(`Parameter: ${targetURLParameter} ==> Data List: ${availableFieldsToChoose}`);
            choosenDataListFields.push(dataListField);

            for(let list of this.listConfigMenu.dataList.data) {
                if(list.name == dataListField)    {
                    requestParameterLinkedData[`${targetURLParameter}`] = list.data
                    break;
                }
            }
        }
        //

        console.log(requestParameterLinkedData);
        
        // Generating the links
        for(let i = 1; i <= this.config.parametersAmount; ++i) {
            
        }
        //

        Helpers.sleep(10000)
        return requestURLs;
    }

    private parseTargetURL(rawTargetURL: string): IProcessedTargetURL {
        const urlParameters: Array<string> = [];
        let parametersAmount: number = 0;
        let targetURL: string = "";

        rawTargetURL.split("").forEach((e, i, array) => {
            if(e === "?") {
                targetURL = array.slice(0, i).join("");
                const parameters: Array<string> = array.slice(i+1, array.length).join("").split("&");
                for(let parameter of parameters) {
                    parameter.split("").forEach((e, i, parameters) => {
                        if(e === "=") {
                            urlParameters.push(parameters.slice(0, i).join(""))
                            ++parametersAmount;
                        }
                    } )
                }
                return;
            }
        });

        return {
            targetURL: targetURL,
            parametersAmount: parametersAmount,
            urlParameters: urlParameters
        }
    }

    private async createConfig() {
        const rawTargetURL: string = await Helpers.input(`Enter target URL: `); // Getting target url
        this.config = this.parseTargetURL(rawTargetURL);
    }


    private async bruteForce() {
        const responseData: Array<any> = [];
        try {
            const targetProcessedURLs: Array <string> = await this.generateRequestURLs(); // Generating request URLs
            console.log(targetProcessedURLs);
            targetProcessedURLs.forEach( async (requestURL) => {
                responseData.push(String(await axios.get(requestURL)));
            })
            Helpers.sleep(10000)
        }
        catch(e: any) {
            console.log(e);
            Helpers.sleep(10000)
            handleError(e);
        }
    }

    public async start() {
        let active = true;
        await Message.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
        while (active) {
            try {
                if (!this.listConfigMenu.closed)
                    await this.listConfigMenu.display();
                else
                    await this.display();
            } catch (e: any) {
                console.log(e)
                handleError(e);
                active = false;
                return;
            }
        }
    }
}

new BruteForce().start();