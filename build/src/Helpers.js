"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Errors_1 = require("./Errors/Errors");
const input = require('input');
const sleep = require('thread-sleep');
//
class Helpers {
    static async question(message, options) {
        const response = (await input.text(message)).toLocaleLowerCase();
        console.log(response);
        if (typeof options != undefined)
            console.clear();
        if (response === 'y')
            return true;
        else if (response === 'n')
            return false;
        throw new Errors_1.WrongAnswer(`Your answer should be 'Y' or 'N'`);
    }
    static closeApplication(code) {
        process.exit(code);
    }
    static sleep(time) {
        return sleep(time);
    }
    static async input(message) {
        return await input.text(message);
    }
}
exports.default = Helpers;
//# sourceMappingURL=Helpers.js.map