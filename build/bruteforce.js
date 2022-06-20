"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./src/Errors/Errors");
const Messages_1 = require("./src/Messages");
const User_1 = require("./src/User");
//
class BruteForce {
    constructor() {
        this.user = new User_1.default();
    }
    async start() {
        let active = true;
        while (active) {
            try {
                Messages_1.default.alreadyMember() ? this.user.authentication() : this.user.registration(); // Displaying session
            }
            catch (e) {
                console.log(e.message);
                (0, Errors_1.handleError)(e);
            }
        }
    }
}
new BruteForce().start();
//# sourceMappingURL=Bruteforce.js.map