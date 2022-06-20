"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor() {
        Message.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    static alreadyMember() {
        let userAlreadyRegisterd = false;
        this.readline.question(`Are you already registerd? [Y/N]`, (answer) => {
            userAlreadyRegisterd = answer === 'Y' ? true : false;
        });
        return userAlreadyRegisterd;
    }
    static registration() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        console.log('Before we start, we must register you in our database, for legal purposes!');
    }
    static sucessfulAuthenticated() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
    }
    static userWantsToTryAgain() {
        let userWantsToTryAgain = false;
        console.log(`Incorrect authentication data!`);
        this.readline.question(`Would you like to try again? [Y/N]`, (answer) => {
            userWantsToTryAgain = answer === 'Y' ? true : false;
        });
        return userWantsToTryAgain;
    }
}
exports.default = Message;
//# sourceMappingURL=Messages.js.map