"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
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
            Messages_1.default.alreadyMember() ? this.user.registration() : this.user.authentication();
            try {
                this.user.registration(); // Displaying registration session
            }
            catch (e) {
                console.log(e.message);
            }
        }
    }
}
new BruteForce().start();
//# sourceMappingURL=Bruteforce.js.map