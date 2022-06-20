"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("./Errors");
//
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
class Message {
    intro() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        console.log('Before we start, we must register you in our database, for legal purposes!');
    }
    async registration() {
        const credentials = {
            username: "",
            password: "",
            ip: 'new'
        };
        readline.question('Enter your password: ', pass => {
        });
        throw new Errors_1.FailedAuthentication('Registration process has failed!');
    }
}
exports.default = Message;
//# sourceMappingURL=Messages.js.map