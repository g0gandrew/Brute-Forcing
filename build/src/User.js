"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Helpers_1 = require("./Helpers");
const Errors_1 = require("./Errors/Errors");
const Database_1 = require("./Database");
const sequelize_1 = require("sequelize");
const Messages_1 = require("./Messages");
const Helpers_2 = require("./Helpers");
const ip = require('ip');
//
class User {
    constructor() {
        this.connectionTries = 3;
        this.registrationTries = 3;
        this.ip = ip.address(); // Getting user IP address
    }
    async registration() {
        if (this.registrationTries == 3) // It means that the user haven't already tried to register 
            Messages_1.default.registration();
        this.username = await Helpers_1.Input.text('Username: ');
        this.password = await Helpers_1.Input.text(`Password: `);
        await this.register();
    }
    async authentication() {
        this.username = await Helpers_1.Input.text('Enter your username: ');
        this.password = await Helpers_1.Input.text(`Enter your password: `);
        if (await this.accountExists())
            Messages_1.default.sucessfulAuthenticated();
        else {
            if (this.connectionTries > 0) {
                if (await (0, Helpers_2.question)(`Would you like to try again? [Y/N] [${this.connectionTries} tries available]: `, { clearConsole: true })) {
                    --this.connectionTries;
                    await this.authentication();
                }
                else
                    (0, Helpers_1.closeApplication)(0);
            }
            else {
                console.log(`You attempted to connect so many times!`);
                (0, Helpers_1.closeApplication)(0);
            }
        }
    }
    async validRegistrationData() {
        // Too short
        if (this.username && this.username.length < 5) {
            console.log('You failed the registration, username too short! (Minimum 5 characters)');
        }
        else if (this.password && this.password.length < 8) {
            console.log('You failed the registration, password too short! (Minimum 8 characters)');
        }
        else if (this.username && this.username.length > 20) {
            console.log('You failed the registration, username too long! (Maximum 20 characters allowed)');
        }
        else if (this.password && this.password.length > 25) {
            console.log('You failed the registration, password too long! (Maximum 25 characters allowed)');
        }
        else
            return true;
        return false;
    }
    async accountExists() {
        const accountExists = await Database_1.default.query(`SELECT id FROM user WHERE username = '${this.username}' && password = '${this.password}'`, { type: sequelize_1.QueryTypes.SELECT });
        if (accountExists.length)
            return true;
        else
            return false;
    }
    async register() {
        try {
            if (await this.validRegistrationData()) {
                await Database_1.default.query(`INSERT INTO user(username, password, ip) VALUES('${this.username}', '${this.password}', '${this.ip}')`);
                console.log('The account was registerd, now you can connect!');
                await this.authentication();
            }
            else {
                if (this.registrationTries > 0) {
                    if (await (0, Helpers_2.question)(`Would you like to try again [Y/N]? [${this.registrationTries} tries available]: `, { clearConsole: true })) {
                        --this.registrationTries;
                        await this.registration();
                    }
                    else {
                        (0, Helpers_1.closeApplication)(74);
                    }
                }
                else {
                    console.log(`You attempted to connect so many times!`);
                    (0, Helpers_1.closeApplication)(0);
                }
            }
        }
        catch (e) {
            (0, Errors_1.handleError)(e);
        }
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map