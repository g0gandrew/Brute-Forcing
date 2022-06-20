"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("./Errors/Errors");
const Database_1 = require("./Database");
const types_1 = require("sequelize/types");
const Messages_1 = require("./Messages");
const ip = require('ip');
//
class User {
    constructor() {
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.ip = ip.address(); // Getting user IP address
    }
    async registration() {
        this.readline.question('Enter your username: ', username => {
            this.username = username;
        });
        this.readline.question('Enter your password: ', pass => {
            this.password = pass;
        });
        await this.register();
    }
    async authentication() {
        this.readline.question('Enter your username: ', username => {
            this.username = username;
        });
        this.readline.question('Enter your password: ', pass => {
            this.password = pass;
        });
        if (await this.accountExists())
            Messages_1.default.sucessfulAuthenticated();
        else {
            if (Messages_1.default.userWantsToTryAgain())
                this.authentication();
        }
    }
    async registerDataValidation() {
        // Too short
        if (this.username && this.username.length < 5)
            throw new Errors_1.FailedAuthentication('You failed the authentication, username too short! (Minimum 5 characters)');
        if (this.password && this.password.length < 8)
            throw new Errors_1.FailedAuthentication('You failed the authentication, password too short! (Minimum 8 characters)');
        // Too long
        if (this.username && this.username.length > 20)
            throw new Errors_1.FailedAuthentication('You failed the authentication, username too long! (Maximum 20 characters allowed)');
        if (this.password && this.password.length > 25)
            throw new Errors_1.FailedAuthentication('You failed the authentication, password too long! (Maximum 25 characters allowed)');
    }
    async accountExists() {
        const accountExists = await Database_1.default.query(`SELECT id FROM user WHERE username = '${this.username}' && password = '${this.password}'`, { type: types_1.QueryTypes.SELECT });
        if (accountExists.length)
            return true;
        else
            return false;
    }
    async register() {
        try {
            await this.registerDataValidation();
            await Database_1.default.query(`INSERT INTO user(username, password, ip) VALUES('${this.username}', '${this.password}', '${this.ip}')`);
        }
        catch (e) {
            (0, Errors_1.handleError)(e);
        }
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map