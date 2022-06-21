"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeApplication = exports.question = exports.Input = void 0;
const Errors_1 = require("./Errors/Errors");
const input = require('input');
exports.Input = input;
//
async function question(message, options) {
    const response = (await input.text(message)).toLocaleLowerCase();
    if (typeof options != undefined)
        console.clear();
    if (response === 'y')
        return true;
    else if (response === 'n')
        return false;
    throw new Errors_1.WrongAnswer(`Your answer should be 'Y' or 'N'`);
}
exports.question = question;
function closeApplication(code) {
    process.exit(code);
}
exports.closeApplication = closeApplication;
//# sourceMappingURL=Helpers.js.map