// Importing
import Input from './Input';
import { FailedAuthentication, handleError } from "./Errors/Errors";
import db from './Database';
import { QueryTypes } from "sequelize";
import Message from "./Messages";
const ip = require('ip');
//

class User {
    private username: string | undefined;
    private password: string | undefined;
    private ip: string | undefined;
    constructor() {
        this.ip = ip.address(); // Getting user IP address
    }
    public async registration(): Promise<void> {
        Message.registration();
        this.username = await Input.text('Username: ');
        this.password = await Input.text(`Password: `);

        await this.register();
    }

    public async authentication(): Promise<void> {
        this.username = await Input.text('Enter your username: ');
        this.password = await Input.text(`Enter your password: `);

        if (await this.accountExists())
            Message.sucessfulAuthenticated();
        else {
            if (Message.userWantsToTryAgain())
                this.authentication();
        }
    }

    private async registerDataValidation() {
        // Too short
        if (this.username && this.username.length < 5)
            throw new FailedAuthentication('You failed the authentication, username too short! (Minimum 5 characters)');
        if (this.password && this.password.length < 8)
            throw new FailedAuthentication('You failed the authentication, password too short! (Minimum 8 characters)');

        // Too long
        if (this.username && this.username.length > 20)
            throw new FailedAuthentication('You failed the authentication, username too long! (Maximum 20 characters allowed)');
        if (this.password && this.password.length > 25)
            throw new FailedAuthentication('You failed the authentication, password too long! (Maximum 25 characters allowed)');

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