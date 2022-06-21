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
                await Messages_1.default.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
                active = false;
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