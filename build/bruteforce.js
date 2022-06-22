"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./src/Errors/Errors");
const Messages_1 = require("./src/Messages");
const User_1 = require("./src/User");
const Menu_1 = require("./src/Menu");
//
class BruteForce {
    constructor() {
        this.user = new User_1.default();
    }
    async start() {
        let active = true;
        await Messages_1.default.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
        const menu = new Menu_1.default();
        while (active) {
            try {
                await menu.display();
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