"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./Helpers");
//
class Message {
    constructor() {
    }
    static async alreadyMember() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        const answer = await (0, Helpers_1.question)('Are you already registerd? [Y/N]');
        return answer;
    }
    static registration() {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
    }
    static sucessfulAuthenticated() {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
    }
}
exports.default = Message;
//# sourceMappingURL=Messages.js.map