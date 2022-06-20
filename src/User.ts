// Importing
import { ReadLine } from "readline";
import { FailedAuthentication, handleError } from "./Errors/Errors";
import db from './Database';
import { QueryTypes } from "sequelize/types";
import Message from "./Messages";
const ip = require('ip');
//

class User {
    private username: string | undefined;
    private password: string | undefined;
    private ip: string | undefined;
    private readline: ReadLine;
    constructor() {
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.ip = ip.address(); // Getting user IP address
    }
    public async registration(): Promise<void> {
        this.readline.question('Enter your username: ', username => {
            this.username = username;
        })

        this.readline.question('Enter your password: ', pass => {
            this.password = pass
        })

        await this.register();
    }

    public async authentication(): Promise<void> {
        this.readline.question('Enter your username: ', username => {
            this.username = username;
        })

        this.readline.question('Enter your password: ', pass => {
            this.password = pass
        })

        if (await this.accountExists())
            Message.sucessfulAuthenticated();
        else {
            if (Message.userWantsToTryAgain())
                this.authentication();
        }
    }

    private async registerDataValidation() {
        if (this.username && this.username.length < 5)
            throw new FailedAuthentication('You failed the authentication, username too short! (Minimum 5 characters)');
        if (this.password && this.password.length < 8)
            throw new FailedAuthentication('You failed the authentication, password too short! (Minimum 8 characters)');
    }

    private async accountExists(): Promise<boolean> {
        const accountExists: Array<any> = await db.query(`SELECT id FROM user WHERE username = '${this.username}' && password = '${this.password}'`, { type: QueryTypes.SELECT });
        if (accountExists.length)
            return true;
        else
            return false;
    }


    private async register() {
        try {
            await this.registerDataValidation();
            await db.query(`INSERT INTO user(username, password, ip) VALUES('${this.username}', '${this.password}', '${this.ip}')`);
        }
        catch (e: any) {
            handleError(e);
        }
    }
}

export default User;