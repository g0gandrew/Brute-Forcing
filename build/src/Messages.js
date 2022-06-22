"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Helpers_1 = require("./Helpers");
//
class Message {
    static async alreadyMember() {
        this.bruteforce();
        const answer = await Helpers_1.default.question('Are you already registerd? [Y/N]');
        return answer;
    }
    static menu() {
        console.log(`- Menu - \n Select one option: \n 1. Create Variables list \n 2. Delete list  \n 3. Start Brute Forcing \n Choice: `);
    }
    static bruteforce() {
        console.log(`
            ██╗░░██╗████████╗████████╗██████╗░  ██████╗░░█████╗░░██████╗███████╗██████╗░
            ██║░░██║╚══██╔══╝╚══██╔══╝██╔══██╗  ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
            ███████║░░░██║░░░░░░██║░░░██████╔╝  ██████╦╝███████║╚█████╗░█████╗░░██║░░██║
            ██╔══██║░░░██║░░░░░░██║░░░██╔═══╝░  ██╔══██╗██╔══██║░╚═══██╗██╔══╝░░██║░░██║
            ██║░░██║░░░██║░░░░░░██║░░░██║░░░░░  ██████╦╝██║░░██║██████╔╝███████╗██████╔╝
            ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝╚═════╝░

        ██████╗░██████╗░██╗░░░██╗████████╗███████╗  ███████╗░█████╗░██████╗░░█████╗░███████╗
        ██╔══██╗██╔══██╗██║░░░██║╚══██╔══╝██╔════╝  ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝
        ██████╦╝██████╔╝██║░░░██║░░░██║░░░█████╗░░  █████╗░░██║░░██║██████╔╝██║░░╚═╝█████╗░░
        ██╔══██╗██╔══██╗██║░░░██║░░░██║░░░██╔══╝░░  ██╔══╝░░██║░░██║██╔══██╗██║░░██╗██╔══╝░░
        ██████╦╝██║░░██║╚██████╔╝░░░██║░░░███████╗  ██║░░░░░╚█████╔╝██║░░██║╚█████╔╝███████╗
        ╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚══════╝  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░╚════╝░╚══════╝
        
                        █▄▄ █▄█   █▀▀ █▀█ █▀▀   ▄▀█ █▄░█ █▀▄ █▀█ █▀▀ █
                        █▄█ ░█░   █▄█ █▄█ █▄█   █▀█ █░▀█ █▄▀ █▀▄ ██▄ █
        `);
    }
    static registration() {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
    }
    static sucessfulAuthenticated() {
        console.log(`Successfully connected! Enjoy `);
        Helpers_1.default.sleep(2500);
    }
}
exports.default = Message;
//# sourceMappingURL=Messages.js.map