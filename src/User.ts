// Importing
import {closeApplication, Input} from './Helpers';
import { FailedAuthentication, handleError } from "./Errors/Errors";
import db from './Database';
import { QueryTypes } from "sequelize";
import Message from "./Messages";
import { question } from './Helpers';
const ip = require('ip');
//

class User {
    private username: string | undefined;
    private password: string | undefined;
    private ip: string | undefined;
    private connectionTries = 3;
    private registrationTries = 3;
    constructor() {
        this.ip = ip.address(); // Getting user IP address
    }
    public async registration(): Promise<void> {
        if(this.registrationTries == 3) // It means that the user haven't already tried to register 
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
            if (this.connectionTries > 0) {
                if(await question(`Would you like to try again? [Y/N] [${this.connectionTries} tries available]: `, {clearConsole: true})) {
                    --this.connectionTries;
                    this.authentication();
                }
                else
                    closeApplication(0);
            }
            else  {
                console.log(`You attempted to connect so many times!`)
                closeApplication(0);
            }
        }
    }

    private async validRegistrationData(): Promise<boolean> {
        // Too short
        if (this.username && this.username.length < 5) {
            console.log('You failed the registration, username too short! (Minimum 5 characters)');
        }
        else if(this.password && this.password.length < 8){
            console.log('You failed the registration, password too short! (Minimum 8 characters)');
        }
        else if (this.username && this.username.length > 20) {
            console.log('You failed the registration, username too long! (Maximum 20 characters allowed)');
        }
        else if(this.password && this.password.length > 25){
            console.log('You failed the registration, password too long! (Maximum 25 characters allowed)');
        }
        else
            return true;

        return false;
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
            if(await this.validRegistrationData())
            {
                await db.query(`INSERT INTO user(username, password, ip) VALUES('${this.username}', '${this.password}', '${this.ip}')`);
                console.log('The account was registerd, now you can connect!');
                await this.authentication();
            }
            else {
                if(this.registrationTries > 0){
                    if(await question(`Would you like to try again [Y/N]? [${this.registrationTries} tries available]: `,  {clearConsole: true})) {
                        --this.registrationTries;
                        await this.registration();
                    }
                    else{
                        closeApplication(74);
                    }
                }
                else {
                    console.log(`You attempted to connect so many times!`)
                    closeApplication(0);
                }
            }
        }
        catch (e: any) {
            handleError(e);
        }
    }
}

export default User;