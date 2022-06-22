"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./src/Errors/Errors");
const Messages_1 = require("./src/Messages");
const User_1 = require("./src/User");
const Menu_1 = require("./src/Menu");
const Helpers_1 = require("./src/Helpers");
const axios_1 = require("axios");
const thread_sleep_1 = require("thread-sleep");
//
class BruteForce {
    constructor() {
        this.config = { targetURL: "", parametersAmount: 0, urlParameters: [] }; // modify it
        this.user = new User_1.default();
        this.listConfigMenu = new Menu_1.default();
    }
    async display() {
        console.clear();
        Messages_1.default.bruteforce();
        const choice = parseInt(await Helpers_1.default.input(`- Menu - \n Select one option: \n 1. Create Brute Force Config \n 2. Start Brute Force \n 3. Exit Application \n Choice : `));
        await this.menu(choice);
    }
    async menu(choice) {
        switch (choice) {
            case 1: {
                console.clear();
                await this.createConfig();
                break;
            }
            case 2: {
                console.clear();
                if (this.config.targetURL.length)
                    await this.bruteForce();
                else {
                    console.clear();
                    console.log(`Please configure Brute Force before starting to brute force!`);
                    (0, thread_sleep_1.default)(3500);
                }
                break;
            }
            case 3: {
                Helpers_1.default.closeApplication(0);
            }
        }
    }
    availableFieldsToChoose(choosenDataListFields) {
        const dataListFields = [];
        for (let field of this.listConfigMenu.dataList.data) {
            if (choosenDataListFields.length) {
                let fieldChosed = false;
                for (let chosenField of choosenDataListFields) {
                    if (field.name == chosenField) {
                        fieldChosed = true;
                        break;
                    }
                }
                if (!fieldChosed) {
                    choosenDataListFields.push(field.name);
                    dataListFields.push(field.name);
                }
            }
            else
                dataListFields.push(field.name);
        }
        return dataListFields;
    }
    async generateRequestURLs() {
        const requestURLs = [];
        console.log(`You will have to link every list data to an URL Parameter`);
        console.log(this.config.urlParameters);
        Helpers_1.default.sleep(3000);
        const choosenDataListFields = [];
        const requestParameterLinkedData = {};
        // Linking request parameter to given user data list
        for (let targetURLParameter of this.config.urlParameters) {
            const availableFieldsToChoose = this.availableFieldsToChoose(choosenDataListFields);
            const dataListField = await Helpers_1.default.input(`Parameter: ${targetURLParameter} ==> Data List: ${availableFieldsToChoose}`);
            choosenDataListFields.push(dataListField);
            for (let list of this.listConfigMenu.dataList.data) {
                if (list.name == dataListField) {
                    requestParameterLinkedData[`${targetURLParameter}`] = list.data;
                    break;
                }
            }
        }
        //
        console.log(requestParameterLinkedData);
        // Generating the links
        for (let i = 1; i <= this.config.parametersAmount; ++i) {
        }
        //
        Helpers_1.default.sleep(10000);
        return requestURLs;
    }
    parseTargetURL(rawTargetURL) {
        const urlParameters = [];
        let parametersAmount = 0;
        let targetURL = "";
        rawTargetURL.split("").forEach((e, i, array) => {
            if (e === "?") {
                targetURL = array.slice(0, i).join("");
                const parameters = array.slice(i + 1, array.length).join("").split("&");
                for (let parameter of parameters) {
                    parameter.split("").forEach((e, i, parameters) => {
                        if (e === "=") {
                            urlParameters.push(parameters.slice(0, i).join(""));
                            ++parametersAmount;
                        }
                    });
                }
                return;
            }
        });
        return {
            targetURL: targetURL,
            parametersAmount: parametersAmount,
            urlParameters: urlParameters
        };
    }
    async createConfig() {
        const rawTargetURL = await Helpers_1.default.input(`Enter target URL: `); // Getting target url
        this.config = this.parseTargetURL(rawTargetURL);
    }
    async bruteForce() {
        const responseData = [];
        try {
            const targetProcessedURLs = await this.generateRequestURLs(); // Generating request URLs
            console.log(targetProcessedURLs);
            targetProcessedURLs.forEach(async (requestURL) => {
                responseData.push(String(await axios_1.default.get(requestURL)));
            });
            Helpers_1.default.sleep(10000);
        }
        catch (e) {
            console.log(e);
            Helpers_1.default.sleep(10000);
            (0, Errors_1.handleError)(e);
        }
    }
    async start() {
        let active = true;
        await Messages_1.default.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
        while (active) {
            try {
                if (!this.listConfigMenu.closed)
                    await this.listConfigMenu.display();
                else
                    await this.display();
            }
            catch (e) {
                console.log(e);
                (0, Errors_1.handleError)(e);
                active = false;
                return;
            }
        }
    }
}
new BruteForce().start();
//# sourceMappingURL=Bruteforce.js.map