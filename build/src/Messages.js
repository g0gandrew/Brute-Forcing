"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./Errors/Errors");
const Input_1 = require("./Input");
//
class Message {
    constructor() {
    }
    static async alreadyMember() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        const userAlreadyRegisterd = await Input_1.default.text(`Are you already registerd? [Y/N]`);
        if (userAlreadyRegisterd.toLocaleLowerCase() === 'y')
            return true;
        else if (userAlreadyRegisterd.toLocaleLowerCase() === 'n')
            return false;
        throw new Errors_1.FailedIntro('You entered a wrong choice');
    }
    static registration() {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
    }
    static sucessfulAuthenticated() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
    }
    static userWantsToTryAgain() {
        let userWantsToTryAgain = false;
        console.log(`Incorrect authentication data!`);
        return userWantsToTryAgain;
    }
}
exports.default = Message;
//# sourceMappingURL=Messages.js.map