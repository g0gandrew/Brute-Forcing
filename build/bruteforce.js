"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./src/Errors/Errors");
const Messages_1 = require("./src/Messages");
const User_1 = require("./src/User");
const Menu_1 = require("./src/Menu");
const thread_sleep_1 = require("thread-sleep");
const Helpers_1 = require("./src/Helpers");
//
class BruteForce {
    constructor() {
        this.user = new User_1.default();
    }
    async menu() {
        console.clear();
        Messages_1.default.bruteforce();
        const choice = parseInt(await Helpers_1.default.input(`- Menu - \n Select one option: \n 1. Create Brute Force Config \n 2. Start Brute Force \n Choice: `));
        (0, thread_sleep_1.default)(5000);
        Helpers_1.default.closeApplication(0);
    }
    displayList() {
    }
    bruteForce() {
    }
    async start() {
        let active = true;
        await Messages_1.default.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
        const menu = new Menu_1.default();
        while (active) {
            try {
                if (!menu.closed)
                    await menu.display();
                else
                    await this.menu();
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